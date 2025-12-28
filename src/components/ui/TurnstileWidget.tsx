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
    onTurnstileLoad?: () => void;
  }
}

const SITE_KEY = "0x4AAAAAACJamWs0HEPThj6-";
const TIMEOUT_MS = 10000;

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

  useEffect(() => {
    setMounted(true);
  }, []);

  useEffect(() => {
    if (!mounted || !containerRef.current) return;

    let timeoutId: NodeJS.Timeout;
    let checkInterval: NodeJS.Timeout;

    const renderWidget = () => {
      if (!window.turnstile || !containerRef.current || widgetIdRef.current) {
        return;
      }

      try {
        console.log("🔄 Rendering Turnstile...");
        widgetIdRef.current = window.turnstile.render(containerRef.current, {
          sitekey: SITE_KEY,
          theme: theme,
          callback: (token: string) => {
            console.log("✅ Verified!");
            setStatus("verified");
            onVerify(token);
          },
          "error-callback": () => {
            console.log("❌ Error");
            setStatus("error");
            onError?.();
          },
          "expired-callback": () => {
            console.log("⏰ Expired");
            setStatus("ready");
            widgetIdRef.current = null;
            onExpire?.();
          },
        });
        setStatus("ready");
        console.log("✅ Widget rendered!");
      } catch (err) {
        console.error("❌ Render failed:", err);
        setStatus("error");
        onError?.();
      }
    };

    // Timeout fallback
    timeoutId = setTimeout(() => {
      if (status === "loading") {
        console.log("⏱️ Timeout");
        setStatus("timeout");
        onTimeout?.();
      }
    }, TIMEOUT_MS);

    // If already loaded, render immediately
    if (window.turnstile) {
      renderWidget();
    } else {
      // Set up callback for when script loads
      window.onTurnstileLoad = () => {
        console.log("📦 Script loaded via callback");
        renderWidget();
      };

      // Check if script exists
      const existingScript = document.querySelector('script[src*="challenges.cloudflare.com/turnstile"]');
      
      if (!existingScript) {
        const script = document.createElement("script");
        script.src = "https://challenges.cloudflare.com/turnstile/v0/api.js?onload=onTurnstileLoad";
        script.async = true;
        script.onerror = () => {
          console.error("❌ Script load failed");
          setStatus("error");
          onError?.();
        };
        document.head.appendChild(script);
        console.log("📥 Loading Turnstile script...");
      } else {
        // Script exists, poll for window.turnstile
        checkInterval = setInterval(() => {
          if (window.turnstile) {
            clearInterval(checkInterval);
            renderWidget();
          }
        }, 100);
      }
    }

    return () => {
      clearTimeout(timeoutId);
      clearInterval(checkInterval);
      if (widgetIdRef.current && window.turnstile) {
        try {
          window.turnstile.remove(widgetIdRef.current);
        } catch {}
      }
      widgetIdRef.current = null;
    };
  }, [mounted, theme, onVerify, onExpire, onError, onTimeout, status]);

  if (!mounted) {
    return <div className="h-[65px]" />;
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
        id="turnstile-container"
        style={{ minHeight: "65px", minWidth: "300px" }}
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
