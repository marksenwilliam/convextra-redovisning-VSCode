
"use client";
import { useEffect, useState } from 'react';

// CET is UTC+1. Launch at 2026-01-01 00:00:00 CET (2025-12-31T23:00:00Z)
const LAUNCH_DATE = new Date(Date.UTC(2025, 11, 31, 23, 0, 0));

function getTimeLeft() {
  const now = new Date();
  // Convert now to CET
  const nowCET = new Date(now.getTime() + (60 - now.getTimezoneOffset()) * 60000);
  const diff = LAUNCH_DATE.getTime() - nowCET.getTime();
  if (diff <= 0) return { days: 0, hours: 0, minutes: 0, seconds: 0 };
  const days = Math.floor(diff / (1000 * 60 * 60 * 24));
  const hours = Math.floor((diff / (1000 * 60 * 60)) % 24);
  const minutes = Math.floor((diff / (1000 * 60)) % 60);
  const seconds = Math.floor((diff / 1000) % 60);
  return { days, hours, minutes, seconds };
}

export default function CountdownPage() {
  const [timeLeft, setTimeLeft] = useState(getTimeLeft());

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft(getTimeLeft());
    }, 1000);
    return () => clearInterval(timer);
  }, []);

  return (
    <main className="min-h-screen flex items-center justify-center bg-[#1a1a1a] text-white font-sans">
      <div className="text-center p-8 rounded-lg shadow-lg" style={{background: 'rgba(26,26,26,0.95)'}}>
        <h1 className="text-4xl md:text-5xl font-bold mb-4" style={{fontFamily: 'Cinzel, Playfair Display, serif', color: '#cbbba0'}}>
          Webbplatsen lanseras snart
        </h1>
        <p className="text-lg mb-8 text-[#cbbba0]">Vi räknar ner till lansering av Convextra Redovisning!</p>
        <div className="flex justify-center gap-4 mb-8">
          {['Dagar', 'Timmar', 'Minuter', 'Sekunder'].map((label, i) => (
            <div key={label} className="flex flex-col items-center">
              <span className="text-3xl md:text-4xl font-mono" style={{color: '#e09e58'}}>
                {Object.values(timeLeft)[i].toString().padStart(2, '0')}
              </span>
              <span className="text-xs md:text-sm mt-1 text-[#cbbba0]">{label}</span>
            </div>
          ))}
        </div>
        <p className="text-[#cbbba0] text-sm">Har du frågor? Kontakta oss på <a href="mailto:info@convextraredovisning.se" className="underline hover:text-[#e09e58]">info@convextraredovisning.se</a></p>
      </div>
    </main>
  );
}
