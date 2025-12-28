"use client";

import { useState, useEffect, useRef } from "react";

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
  }
}

const SITE_KEY = "0x4AAAAAACJamWs0HEPThj6-";
const SCRIPT_URL = "https://challenges.cloudflare.com/turnstile/v0/api.js";

export default function TurnstileWidget({
  onVerify,
  onExpire,
  onError,
  onTimeout,
  theme = "light",
}: TurnstileWidgetProps) {
  const [mounted, setMounted] = useState(false);
  const [status, setStatus] = useState<"loading" | "ready" | "verified" | "error" | "timeout">("loading");
  const containerRef = useRef<HTMLDivElement>(null);
  const widgetIdRef = useRef<string | null>(null);
  const initRef = useRef(false);

  // Store callbacks in refs to avoid dependency issues
  const callbacksRef = useRef({ onVerify, onExpire, onError, onTimeout });
  callbacksRef.current = { onVerify, onExpire, onError, onTimeout };

  useEffect(() => {
    setMounted(true);
  }, []);

  useEffect(() => {
    if (!mounted) return;
    if (initRef.current) return;
    initRef.current = true;

    const container = containerRef.current;
    if (!container) return;

    // Timeout fallback (15 seconds)
    const timeoutId = setTimeout(() => {
      if (!widgetIdRef.current) {
        setStatus("timeout");
        callbacksRef.current.onTimeout?.();
      }
    }, 15000);

    const renderWidget = () => {
      if (!window.turnstile || !container || widgetIdRef.current) return;

      try {
        widgetIdRef.current = window.turnstile.render(container, {
          sitekey: SITE_KEY,
          theme: theme,
          callback: (token: string) => {
            setStatus("verified");
            callbacksRef.current.onVerify(token);
          },
          "error-callback": () => {
            setStatus("error");
            callbacksRef.current.onError?.();
          },
          "expired-callback": () => {
            setStatus("ready");
            callbacksRef.current.onExpire?.();
          },
        });
        setStatus("ready");
      } catch {
        setStatus("error");
        callbacksRef.current.onError?.();
      }
    };

    // Check if Turnstile is already loaded
    if (window.turnstile) {
      renderWidget();
      clearTimeout(timeoutId);
      return;
    }

    // Check if script already exists
    const existingScript = document.querySelector(`script[src^="${SCRIPT_URL}"]`);
    
    if (existingScript) {
      // Script exists, wait for turnstile to be available
      const pollInterval = setInterval(() => {
        if (window.turnstile) {
          clearInterval(pollInterval);
          renderWidget();
        }
      }, 50);
      
      return () => {
        clearTimeout(timeoutId);
        clearInterval(pollInterval);
      };
    }

    // Load script
    const script = document.createElement("script");
    script.src = SCRIPT_URL;
    script.async = true;
    
    script.onload = () => {
      // Small delay to ensure turnstile object is ready
      setTimeout(renderWidget, 50);
    };
    
    script.onerror = () => {
      setStatus("error");
      callbacksRef.current.onError?.();
    };
    
    document.head.appendChild(script);

    return () => {
      clearTimeout(timeoutId);
      if (widgetIdRef.current && window.turnstile) {
        try {
          window.turnstile.remove(widgetIdRef.current);
        } catch {
          // Ignore cleanup errors
        }
      }
    };
  }, [mounted, theme]);

  if (!mounted) {
    return <div style={{ height: "65px" }} />;
  }

  return (
    <div className="flex flex-col items-center gap-2 my-4">
      {status === "loading" && (
        <div className="flex items-center gap-2 py-3 text-sm text-gray-500">
          <svg className="animate-spin h-4 w-4" viewBox="0 0 24 24">
            <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" fill="none" />
            <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z" />
          </svg>
          <span>Laddar verifiering...</span>
        </div>
      )}

      <div 
        ref={containerRef}
        style={{ minHeight: status === "loading" ? "0" : "65px" }}
      />

      {status === "error" && (
        <div className="text-sm text-amber-600 py-2">
          ⚠️ Verifiering kunde inte laddas. Du kan fortfarande skicka formuläret.
        </div>
      )}

      {status === "timeout" && (
        <div className="text-sm text-amber-600 py-2">
          ⏱️ Verifiering tog för lång tid. Du kan fortsätta ändå.
        </div>
      )}

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
