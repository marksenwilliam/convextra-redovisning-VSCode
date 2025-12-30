
"use client";
import { useEffect, useState } from 'react';

// TEST: Launch at 2025-12-30 08:45:00 CET (Swedish time)
// PRODUCTION: new Date('2026-01-01T00:00:00+01:00')
function getCETLaunchDate() {
  return new Date('2025-12-30T08:45:00+01:00');
}

function getTimeLeft() {
  const now = new Date();
  const launchDate = getCETLaunchDate();
  const diff = launchDate.getTime() - now.getTime();

  if (diff <= 0) {
    return { days: 0, hours: 0, minutes: 0, seconds: 0, isLaunched: true };
  }

  const days = Math.floor(diff / (1000 * 60 * 60 * 24));
  const hours = Math.floor((diff / (1000 * 60 * 60)) % 24);
  const minutes = Math.floor((diff / (1000 * 60)) % 60);
  const seconds = Math.floor((diff / 1000) % 60);

  return { days, hours, minutes, seconds, isLaunched: false };
}

export default function CountdownPage() {
  const [timeLeft, setTimeLeft] = useState(getTimeLeft());

  useEffect(() => {
    const timer = setInterval(() => {
      const newTimeLeft = getTimeLeft();
      setTimeLeft(newTimeLeft);

      // Auto-redirect 3 seconds after launch
      if (newTimeLeft.isLaunched) {
        setTimeout(() => {
          window.location.href = '/';
        }, 3000);
      }
    }, 1000);
    return () => clearInterval(timer);
  }, []);

  const handleEnterSite = () => {
    window.location.href = '/';
  };

  // Show "We're Live!" state when launched
  if (timeLeft.isLaunched) {
    return (
      <main className="min-h-screen flex items-center justify-center bg-[#1a1a1a] text-white font-sans">
        <div className="text-center p-8 rounded-lg shadow-lg" style={{background: 'rgba(26,26,26,0.95)'}}>
          <h1 className="text-4xl md:text-5xl font-bold mb-4" style={{fontFamily: 'Cinzel, Playfair Display, serif', color: '#cbbba0'}}>
            🎉 Vi är live!
          </h1>
          <p className="text-lg mb-8 text-[#cbbba0]">Välkommen till Convextra Redovisning!</p>
          <button
            onClick={handleEnterSite}
            className="px-8 py-4 text-lg font-semibold rounded-lg transition-all duration-300 hover:scale-105"
            style={{
              background: 'linear-gradient(135deg, #e09e58 0%, #cbbba0 100%)',
              color: '#1a1a1a',
              boxShadow: '0 4px 15px rgba(224, 158, 88, 0.3)'
            }}
          >
            Klicka här för att gå till hemsidan
          </button>
          <p className="text-[#cbbba0] text-sm mt-6">Du omdirigeras automatiskt om några sekunder...</p>
        </div>
      </main>
    );
  }

  return (
    <main className="min-h-screen flex items-center justify-center bg-[#1a1a1a] text-white font-sans">
      <div className="text-center p-8 rounded-lg shadow-lg" style={{background: 'rgba(26,26,26,0.95)'}}>
        <h1 className="text-4xl md:text-5xl font-bold mb-4" style={{fontFamily: 'Cinzel, Playfair Display, serif', color: '#cbbba0'}}>
          Webbplatsen lanseras snart
        </h1>
        <p className="text-lg mb-8 text-[#cbbba0]">Vi räknar ner till lansering av Convextra Redovisning!</p>
        <div className="flex justify-center gap-4 mb-8">
          <div className="flex flex-col items-center">
            <span className="text-3xl md:text-4xl font-mono" style={{color: '#e09e58'}}>
              {timeLeft.days.toString().padStart(2, '0')}
            </span>
            <span className="text-xs md:text-sm mt-1 text-[#cbbba0]">Dagar</span>
          </div>
          <div className="flex flex-col items-center">
            <span className="text-3xl md:text-4xl font-mono" style={{color: '#e09e58'}}>
              {timeLeft.hours.toString().padStart(2, '0')}
            </span>
            <span className="text-xs md:text-sm mt-1 text-[#cbbba0]">Timmar</span>
          </div>
          <div className="flex flex-col items-center">
            <span className="text-3xl md:text-4xl font-mono" style={{color: '#e09e58'}}>
              {timeLeft.minutes.toString().padStart(2, '0')}
            </span>
            <span className="text-xs md:text-sm mt-1 text-[#cbbba0]">Minuter</span>
          </div>
          <div className="flex flex-col items-center">
            <span className="text-3xl md:text-4xl font-mono" style={{color: '#e09e58'}}>
              {timeLeft.seconds.toString().padStart(2, '0')}
            </span>
            <span className="text-xs md:text-sm mt-1 text-[#cbbba0]">Sekunder</span>
          </div>
        </div>
        <p className="text-[#cbbba0] text-sm">Har du frågor? Kontakta oss på <a href="mailto:info@convextraredovisning.se" className="underline hover:text-[#e09e58]">info@convextraredovisning.se</a></p>
      </div>
    </main>
  );
}
