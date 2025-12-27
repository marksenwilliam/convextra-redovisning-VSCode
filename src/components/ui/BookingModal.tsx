"use client";

import { useEffect, useCallback } from "react";
import { X } from "lucide-react";

interface BookingModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function BookingModal({ isOpen, onClose }: BookingModalProps) {
  // Handle Escape key press
  const handleKeyDown = useCallback(
    (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        onClose();
      }
    },
    [onClose]
  );

  // Handle backdrop click
  const handleBackdropClick = (e: React.MouseEvent<HTMLDivElement>) => {
    if (e.target === e.currentTarget) {
      onClose();
    }
  };

  // Add/remove event listener for Escape key
  useEffect(() => {
    if (isOpen) {
      document.addEventListener("keydown", handleKeyDown);
      document.body.style.overflow = "hidden";
    }

    return () => {
      document.removeEventListener("keydown", handleKeyDown);
      document.body.style.overflow = "unset";
    };
  }, [isOpen, handleKeyDown]);

  if (!isOpen) return null;

  return (
    <div
      className="fixed inset-0 z-[100] flex items-center justify-center p-4 md:p-8"
      onClick={handleBackdropClick}
    >
      {/* Backdrop */}
      <div className="absolute inset-0 bg-black/70 backdrop-blur-sm" />

      {/* Modal Content */}
      <div className="relative w-full max-w-3xl max-h-[90vh] bg-white rounded-2xl shadow-2xl overflow-hidden animate-in fade-in zoom-in-95 duration-300">
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 z-10 w-10 h-10 flex items-center justify-center rounded-full bg-gray-100 hover:bg-gray-200 text-gray-600 hover:text-gray-900 transition-colors"
          aria-label="Stäng"
        >
          <X className="w-5 h-5" />
        </button>

        {/* Header */}
        <div className="bg-[#1a1a1a] px-8 py-6">
          <h2 className="text-2xl text-white font-aboreto font-medium tracking-tight">
            Boka kostnadsfri konsultation
          </h2>
          <p className="text-white/60 text-sm font-geist font-light mt-2">
            Välj en tid som passar dig så återkommer vi
          </p>
        </div>

        {/* Booking Widget */}
        <div className="overflow-y-auto max-h-[calc(90vh-120px)]">
          <iframe
            src="https://api.leadconnectorhq.com/widget/booking/kUXaaSqKbJuIlATWcy7m"
            style={{ width: "100%", border: "none", overflow: "auto", minHeight: "700px" }}
            scrolling="yes"
            id="booking-modal-widget"
            title="Boka konsultation"
          />
        </div>
      </div>
    </div>
  );
}
