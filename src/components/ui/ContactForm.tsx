"use client";

import { useState, FormEvent, useEffect } from "react";
import { Turnstile } from "@marsidev/react-turnstile";

interface ContactFormProps {
  variant?: "light" | "dark";
  showHeading?: boolean;
}

export default function ContactForm({ variant = "light", showHeading = false }: ContactFormProps) {
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [formLoadTime, setFormLoadTime] = useState<number>(0);
  const [turnstileToken, setTurnstileToken] = useState<string | null>(null);

  // Record when form loads (for bot detection)
  useEffect(() => {
    setFormLoadTime(Date.now());
  }, []);

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);
    setError(null);

    // Check if Turnstile token is present
    if (!turnstileToken) {
      setError("Vänligen verifiera att du inte är en robot.");
      setIsSubmitting(false);
      return;
    }
    
    const formData = new FormData(e.currentTarget);
    const data = {
      name: formData.get("name"),
      email: formData.get("email"),
      phone: formData.get("phone"),
      company: formData.get("company"),
      message: formData.get("message"),
      honeypot: formData.get("website"), // Honeypot field
      formLoadTime: formLoadTime,
      turnstileToken: turnstileToken,
    };

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      });

      if (!response.ok) {
        const errorData = await response.json();
        throw new Error(errorData.error || "Kunde inte skicka meddelandet");
      }

      setIsSubmitted(true);
    } catch (err) {
      if (err instanceof Error) {
        setError(err.message);
      } else {
        setError("Något gick fel. Försök igen eller kontakta oss direkt.");
      }
    } finally {
      setIsSubmitting(false);
    }
  };

  const isDark = variant === "dark";
  
  const inputClasses = isDark
    ? "w-full px-4 py-3 bg-white/5 border border-white/20 rounded text-sm font-light font-geist text-white placeholder-white/40 focus:border-[#cbbba0] focus:ring-1 focus:ring-[#cbbba0] outline-none transition-colors"
    : "w-full px-4 py-3 bg-white border border-gray-300 rounded text-sm font-light font-geist text-gray-700 placeholder-gray-400 focus:border-gray-500 focus:ring-1 focus:ring-gray-500 outline-none transition-colors";

  const labelClasses = isDark
    ? "block text-xs text-white/60 mb-2 font-geist"
    : "block text-xs text-gray-500 mb-2 font-geist";

  const buttonClasses = isDark
    ? "w-full bg-[#cbbba0] text-[#1a1a1a] py-4 mt-2 text-xs uppercase tracking-[0.15em] font-medium hover:bg-[#b8a88e] transition-colors font-geist rounded disabled:opacity-50 disabled:cursor-not-allowed"
    : "w-full bg-[#1a1a1a] text-white py-4 mt-2 text-xs uppercase tracking-[0.15em] font-medium hover:bg-[#333] transition-colors font-geist rounded disabled:opacity-50 disabled:cursor-not-allowed";

  if (isSubmitted) {
    return (
      <div className="flex flex-col items-center justify-center py-12 text-center">
        <div className={`w-16 h-16 rounded-full ${isDark ? 'bg-[#cbbba0]/20' : 'bg-green-100'} flex items-center justify-center mb-6`}>
          <svg
            className={`w-8 h-8 ${isDark ? 'text-[#cbbba0]' : 'text-green-600'}`}
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M5 13l4 4L19 7"
            />
          </svg>
        </div>
        <h3 className={`text-xl font-playfair font-medium mb-3 ${isDark ? 'text-white' : 'text-[#1a1a1a]'}`}>
          Tack för ditt meddelande!
        </h3>
        <p className={`text-sm font-light font-geist ${isDark ? 'text-white/70' : 'text-gray-500'}`}>
          Vi har mottagit din förfrågan och återkommer till dig inom kort.
        </p>
      </div>
    );
  }

  return (
    <div className="flex flex-col items-center lg:items-center">
      {showHeading && (
        <>
          <h2 className={`text-3xl md:text-4xl uppercase tracking-tight font-aboreto font-medium text-center mb-6 ${isDark ? 'text-white' : 'text-[#1a1a1a]'}`}>
            Kontakta oss idag
          </h2>
          <p className={`font-light text-sm md:text-base leading-relaxed text-center mb-12 max-w-md mx-auto font-geist ${isDark ? 'text-white/60' : 'text-gray-500'}`}>
            Vi vägleder dig med ett kostnadsfritt och förutsättningslöst möte där vi hjälper
            dig svara på frågor och funderingar du har kring redovisning och bokföring vad
            gäller ditt företag.
          </p>
        </>
      )}

      <form onSubmit={handleSubmit} className="w-full max-w-md space-y-5">
        {error && (
          <div className="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded text-sm">
            {error}
          </div>
        )}
        
        {/* Honeypot field - hidden from real users, bots will fill it */}
        <div className="absolute -left-[9999px] opacity-0" aria-hidden="true">
          <label htmlFor="website">Website</label>
          <input
            type="text"
            id="website"
            name="website"
            tabIndex={-1}
            autoComplete="off"
          />
        </div>
        
        {/* Namn */}
        <div>
          <label className={labelClasses}>
            Namn <span className="text-red-400">*</span>
          </label>
          <input
            type="text"
            name="name"
            placeholder="Ditt namn"
            required
            className={inputClasses}
          />
        </div>

        {/* Mail */}
        <div>
          <label className={labelClasses}>
            Mail <span className="text-red-400">*</span>
          </label>
          <input
            type="email"
            name="email"
            placeholder="Din mail"
            required
            className={inputClasses}
          />
        </div>

        {/* Telefon */}
        <div>
          <label className={labelClasses}>
            Telefon <span className="text-red-400">*</span>
          </label>
          <input
            type="tel"
            name="phone"
            placeholder="Din telefon"
            required
            className={inputClasses}
          />
        </div>

        {/* Företag */}
        <div>
          <label className={labelClasses}>
            Företag <span className="text-red-400">*</span>
          </label>
          <input
            type="text"
            name="company"
            placeholder="Ditt företag"
            required
            className={inputClasses}
          />
        </div>

        {/* Meddelande */}
        <div>
          <label className={labelClasses}>
            Meddelande <span className="text-red-400">*</span>
          </label>
          <textarea
            name="message"
            placeholder="Ditt meddelande"
            rows={4}
            required
            className={`${inputClasses} resize-none`}
          />
        </div>

        {/* Turnstile Widget */}
        <div className="flex justify-center">
          <Turnstile
            siteKey="0x4AAAAAACJamWs0HEPThj6-"
            onSuccess={(token) => setTurnstileToken(token)}
            onError={() => setError("Verifiering misslyckades. Försök igen.")}
            onExpire={() => setTurnstileToken(null)}
            options={{
              theme: isDark ? "dark" : "light",
              size: "normal",
            }}
          />
        </div>

        {/* Button */}
        <button
          type="submit"
          disabled={isSubmitting || !turnstileToken}
          className={buttonClasses}
        >
          {isSubmitting ? "Skickar..." : "Skicka"}
        </button>
      </form>
    </div>
  );
}
