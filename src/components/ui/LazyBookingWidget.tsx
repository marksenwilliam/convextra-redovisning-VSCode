"use client";

import { useState, useEffect, useRef } from "react";
import { Calendar } from "lucide-react";

interface LazyBookingWidgetProps {
  id?: string;
  minHeight?: string;
  className?: string;
}

export default function LazyBookingWidget({
  id = "booking-widget",
  minHeight = "900px",
  className = "",
}: LazyBookingWidgetProps) {
  const [isVisible, setIsVisible] = useState(false);
  const [isLoaded, setIsLoaded] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setIsVisible(true);
            observer.disconnect();
          }
        });
      },
      {
        rootMargin: "200px", // Start loading 200px before visible
        threshold: 0,
      }
    );

    if (containerRef.current) {
      observer.observe(containerRef.current);
    }

    return () => {
      observer.disconnect();
    };
  }, []);

  return (
    <div
      ref={containerRef}
      className={`w-full rounded-2xl overflow-hidden shadow-[0_8px_30px_rgb(0,0,0,0.04)] border border-gray-100 bg-white ${className}`}
      style={{ minHeight }}
    >
      {isVisible ? (
        <>
          {!isLoaded && (
            <div
              className="flex flex-col items-center justify-center bg-gray-50"
              style={{ minHeight }}
            >
              <Calendar className="w-12 h-12 text-[#cbbba0] mb-4 animate-pulse" />
              <p className="text-gray-500 font-geist text-sm">
                Laddar bokningskalender...
              </p>
            </div>
          )}
          <iframe
            src="https://api.leadconnectorhq.com/widget/booking/kUXaaSqKbJuIlATWcy7m"
            style={{
              width: "100%",
              border: "none",
              overflow: "auto",
              minHeight,
              display: isLoaded ? "block" : "none",
            }}
            scrolling="yes"
            id={id}
            title="Boka konsultation med Convextra Redovisning"
            onLoad={() => setIsLoaded(true)}
          />
        </>
      ) : (
        // Placeholder before intersection
        <div
          className="flex flex-col items-center justify-center bg-gray-50"
          style={{ minHeight }}
        >
          <Calendar className="w-12 h-12 text-gray-300 mb-4" />
          <p className="text-gray-400 font-geist text-sm">
            Bokningskalender
          </p>
        </div>
      )}
    </div>
  );
}
