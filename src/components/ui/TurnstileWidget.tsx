"use client";

import Script from "next/script";
import { useState, useEffect, useRef, useCallback } from "react";

interface TurnstileWidgetProps {
  onVerify: (token: string) => void;
  onExpire?: () => void;
  onError?: () => void;
  onTimeout?: () => void;
  theme?: "light" | "dark";
}

declare global {
  interface Window {
    turnstile?: {
      render: (element: string | HTMLElement, options: Record<string, unknown>) => string;
      reset: (widgetId: string) => void;
      remove: (widgetId: string) => void;
    };
    onTurnstileLoad?: () => void;
  }
}

const SITE_KEY = "0x4AAAAAACJamWs0HEPThj6-";
const TIMEOUT_MS = 10000; // 10 seconds timeout

export default function TurnstileWidget({
  onVerify,
  onExpire,
  onError,
  onTimeout,
  theme = "light",
}: TurnstileWidgetProps) {
  const [status, setStatus] = useState<"loading" | "ready" | "verified" | "error" | "timeout">("loading");
  const [scriptLoaded, setScriptLoaded] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);
  const widgetIdRef = useRef<string | null>(null);
  const timeoutRef = useRef<NodeJS.Timeout | null>(null);
  const hasRenderedRef = useRef(false);

  // Render the widget when script is loaded
  const renderWidget = useCallback(() => {
    if (!window.turnstile || !containerRef.current || hasRenderedRef.current) {
      return;
    }

    // Clear any existing content
    containerRef.current.innerHTML = "";
    hasRenderedRef.current = true;

    try {
      widgetIdRef.current = window.turnstile.render(containerRef.current, {
        sitekey: SITE_KEY,
        theme: theme,
        callback: (token: string) => {
          console.log("✅ Turnstile verified successfully");
          setStatus("verified");
          if (timeoutRef.current) {
            clearTimeout(timeoutRef.current);
          }
          onVerify(token);
        },
        "error-callback": () => {
          console.error("❌ Turnstile error");
          setStatus("error");
          onError?.();
        },
        "expired-callback": () => {
          console.log("⏰ Turnstile token expired");
          setStatus("ready");
          onExpire?.();
        },
      });
      setStatus("ready");
      console.log("🔄 Turnstile widget rendered");
    } catch (err) {
      console.error("❌ Failed to render Turnstile:", err);
      setStatus("error");
      onError?.();
    }
  }, [theme, onVerify, onExpire, onError]);

  // Handle script load
  useEffect(() => {
    if (scriptLoaded && window.turnstile) {
      renderWidget();
    }
  }, [scriptLoaded, renderWidget]);

  // Set up timeout fallback
  useEffect(() => {
    timeoutRef.current = setTimeout(() => {
      if (status === "loading" || status === "ready") {
        console.log("⏱️ Turnstile timeout - allowing submission anyway");
        setStatus("timeout");
        onTimeout?.();
      }
    }, TIMEOUT_MS);

    return () => {
      if (timeoutRef.current) {
        clearTimeout(timeoutRef.current);
      }
    };
  }, [status, onTimeout]);

  // Cleanup on unmount
  useEffect(() => {
    return () => {
      if (widgetIdRef.current && window.turnstile) {
        try {
          window.turnstile.remove(widgetIdRef.current);
        } catch (e) {
          // Ignore cleanup errors
        }
      }
    };
  }, []);

  return (
    <div className="flex flex-col items-center gap-2">
      <Script
        src="https://challenges.cloudflare.com/turnstile/v0/api.js"
        strategy="afterInteractive"
        onLoad={() => {
          console.log("📦 Turnstile script loaded");
          setScriptLoaded(true);
        }}
        onError={() => {
          console.error("❌ Failed to load Turnstile script");
          setStatus("error");
          onError?.();
        }}
      />

      {/* Loading state */}
      {status === "loading" && (
        <div className="flex items-center gap-2 py-3 text-sm text-gray-500">
          <svg className="animate-spin h-4 w-4" viewBox="0 0 24 24">
            <circle
              className="opacity-25"
              cx="12"
              cy="12"
              r="10"
              stroke="currentColor"
              strokeWidth="4"
              fill="none"
            />
            <path
              className="opacity-75"
              fill="currentColor"
              d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
            />
          </svg>
          <span>Laddar verifiering...</span>
        </div>
      )}

      {/* Turnstile container */}
      <div
        ref={containerRef}
        className={status === "loading" ? "hidden" : ""}
      />

      {/* Error state */}
      {status === "error" && (
        <div className="text-sm text-amber-600 py-2">
          ⚠️ Verifiering kunde inte laddas. Du kan fortfarande skicka formuläret.
        </div>
      )}

      {/* Timeout state */}
      {status === "timeout" && (
        <div className="text-sm text-amber-600 py-2">
          ⏱️ Verifiering tog för lång tid. Du kan fortsätta ändå.
        </div>
      )}

      {/* Verified state */}
      {status === "verified" && (
        <div className="text-sm text-green-600 py-2 flex items-center gap-1">
          <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
          </svg>
          Verifierad
        </div>
      )}
    </div>
  );
}
