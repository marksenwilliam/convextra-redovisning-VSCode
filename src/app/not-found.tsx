import Link from "next/link";
import { Home, Mail } from "lucide-react";

export default function NotFound() {
  return (
    <main className="min-h-screen bg-[#1a1a1a] flex items-center justify-center px-6">
      <div className="max-w-2xl mx-auto text-center">
        {/* 404 Number */}
        <h1 className="text-[150px] md:text-[200px] font-bold text-[#cbbba0]/20 leading-none font-aboreto">
          404
        </h1>

        {/* Message */}
        <h2 className="text-3xl md:text-4xl text-white font-medium font-aboreto tracking-tight mb-6 -mt-8">
          Sidan kunde inte hittas
        </h2>
        
        <p className="text-white/70 text-lg font-light font-geist mb-12 max-w-md mx-auto">
          Sidan du letar efter finns inte eller har flyttats. Använd navigeringen nedan för att hitta det du söker.
        </p>

        {/* Action Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
          <Link
            href="/"
            className="group flex items-center gap-2 bg-[#cbbba0] hover:bg-[#8c7b60] text-[#1a1a1a] px-8 py-4 rounded-lg transition-all duration-300 font-medium font-geist"
          >
            <Home className="w-5 h-5" />
            Tillbaka till startsidan
          </Link>

          <Link
            href="/kontakt"
            className="group flex items-center gap-2 border border-white/30 hover:border-[#cbbba0] text-white hover:text-[#cbbba0] px-8 py-4 rounded-lg transition-all duration-300 font-medium font-geist"
          >
            <Mail className="w-5 h-5" />
            Kontakta oss
          </Link>
        </div>

        {/* Quick Links */}
        <div className="mt-16 pt-8 border-t border-white/10">
          <p className="text-white/50 text-sm font-geist mb-4">Populära sidor:</p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link href="/tjanster" className="text-[#cbbba0] hover:text-white text-sm font-geist transition-colors">
              Tjänster
            </Link>
            <Link href="/om-oss" className="text-[#cbbba0] hover:text-white text-sm font-geist transition-colors">
              Om oss
            </Link>
            <Link href="/blogg" className="text-[#cbbba0] hover:text-white text-sm font-geist transition-colors">
              Blogg
            </Link>
            <Link href="/kontakt" className="text-[#cbbba0] hover:text-white text-sm font-geist transition-colors">
              Kontakt
            </Link>
          </div>
        </div>
      </div>
    </main>
  );
}
