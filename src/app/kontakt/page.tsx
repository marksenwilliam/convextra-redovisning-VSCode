import { Metadata } from "next";
import { MapPin, Phone, Mail, Clock } from "lucide-react";

export const metadata: Metadata = {
  title: "Kontakt | Convextra Redovisning - Västerås",
  description:
    "Kontakta Convextra Redovisning för bokföring, lönehantering och redovisning. Boka ett kostnadsfritt samtal eller skicka ett meddelande.",
  keywords: [
    "kontakt redovisningsbyrå",
    "boka samtal bokföring",
    "redovisning Västerås kontakt",
  ],
};

export default function KontaktPage() {
  return (
    <main>
      {/* Hero */}
      <header className="bg-[#1a1a1a] pt-32 pb-20 px-6 md:px-12">
        <div className="max-w-[1200px] mx-auto text-center">
          <h1 className="text-4xl md:text-5xl lg:text-6xl text-white font-aboreto font-medium tracking-tight mb-6">
            Kontakta oss
          </h1>
          <p className="text-white/70 text-lg md:text-xl font-light font-geist max-w-2xl mx-auto">
            Har du frågor eller vill boka ett kostnadsfritt samtal? Vi finns här
            för att hjälpa dig.
          </p>
        </div>
      </header>

      {/* Contact Grid */}
      <section className="bg-white py-20 md:py-32 px-6 md:px-12">
        <div className="max-w-[1200px] mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20">
            {/* Contact Info */}
            <div>
              <h2 className="text-2xl md:text-3xl text-[#1a1a1a] mb-8 tracking-tight font-aboreto font-medium">
                Kontaktuppgifter
              </h2>

              <div className="space-y-6 mb-12">
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-full bg-[#f5f3ef] flex items-center justify-center flex-shrink-0">
                    <MapPin className="w-5 h-5 text-[#8c7b60]" />
                  </div>
                  <div>
                    <h3 className="text-[#1a1a1a] font-medium font-geist mb-1">
                      Besöksadress
                    </h3>
                    <p className="text-gray-600 font-geist font-light">
                      Mälarparksvägen 11
                      <br />
                      723 56 Västerås
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-full bg-[#f5f3ef] flex items-center justify-center flex-shrink-0">
                    <Phone className="w-5 h-5 text-[#8c7b60]" />
                  </div>
                  <div>
                    <h3 className="text-[#1a1a1a] font-medium font-geist mb-1">
                      Telefon
                    </h3>
                    <a
                      href="tel:+46736277977"
                      className="text-gray-600 font-geist font-light hover:text-[#8c7b60] transition-colors"
                    >
                      (+46) 73-627 79 77
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-full bg-[#f5f3ef] flex items-center justify-center flex-shrink-0">
                    <Mail className="w-5 h-5 text-[#8c7b60]" />
                  </div>
                  <div>
                    <h3 className="text-[#1a1a1a] font-medium font-geist mb-1">
                      E-post
                    </h3>
                    <a
                      href="mailto:info@convextraredovisning.se"
                      className="text-gray-600 font-geist font-light hover:text-[#8c7b60] transition-colors"
                    >
                      info@convextraredovisning.se
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-full bg-[#f5f3ef] flex items-center justify-center flex-shrink-0">
                    <Clock className="w-5 h-5 text-[#8c7b60]" />
                  </div>
                  <div>
                    <h3 className="text-[#1a1a1a] font-medium font-geist mb-1">
                      Öppettider
                    </h3>
                    <p className="text-gray-600 font-geist font-light">
                      Måndag–Fredag: 09:00–17:00
                    </p>
                  </div>
                </div>
              </div>

              {/* Map */}
              <div className="rounded-lg overflow-hidden h-[300px] bg-gray-100">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2029.8!2d16.5456!3d59.6162!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zNTnCsDM2JzU4LjMiTiAxNsKwMzInNDQuMiJF!5e0!3m2!1sen!2sse!4v1"
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  title="Convextra Redovisning kontor"
                ></iframe>
              </div>
            </div>

            {/* Contact Form */}
            <div>
              <h2 className="text-2xl md:text-3xl text-[#1a1a1a] mb-8 tracking-tight font-aboreto font-medium">
                Skicka ett meddelande
              </h2>

              <form className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label
                      htmlFor="firstName"
                      className="block text-sm font-medium text-[#1a1a1a] font-geist mb-2"
                    >
                      Förnamn *
                    </label>
                    <input
                      type="text"
                      id="firstName"
                      name="firstName"
                      required
                      className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:border-[#8c7b60] focus:ring-2 focus:ring-[#cbbba0]/20 outline-none transition-all font-geist text-[#1a1a1a]"
                      placeholder="Ditt förnamn"
                    />
                  </div>
                  <div>
                    <label
                      htmlFor="lastName"
                      className="block text-sm font-medium text-[#1a1a1a] font-geist mb-2"
                    >
                      Efternamn *
                    </label>
                    <input
                      type="text"
                      id="lastName"
                      name="lastName"
                      required
                      className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:border-[#8c7b60] focus:ring-2 focus:ring-[#cbbba0]/20 outline-none transition-all font-geist text-[#1a1a1a]"
                      placeholder="Ditt efternamn"
                    />
                  </div>
                </div>

                <div>
                  <label
                    htmlFor="email"
                    className="block text-sm font-medium text-[#1a1a1a] font-geist mb-2"
                  >
                    E-post *
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    required
                    className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:border-[#8c7b60] focus:ring-2 focus:ring-[#cbbba0]/20 outline-none transition-all font-geist text-[#1a1a1a]"
                    placeholder="din@email.se"
                  />
                </div>

                <div>
                  <label
                    htmlFor="phone"
                    className="block text-sm font-medium text-[#1a1a1a] font-geist mb-2"
                  >
                    Telefon
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:border-[#8c7b60] focus:ring-2 focus:ring-[#cbbba0]/20 outline-none transition-all font-geist text-[#1a1a1a]"
                    placeholder="073-XXX XX XX"
                  />
                </div>

                <div>
                  <label
                    htmlFor="company"
                    className="block text-sm font-medium text-[#1a1a1a] font-geist mb-2"
                  >
                    Företagsnamn
                  </label>
                  <input
                    type="text"
                    id="company"
                    name="company"
                    className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:border-[#8c7b60] focus:ring-2 focus:ring-[#cbbba0]/20 outline-none transition-all font-geist text-[#1a1a1a]"
                    placeholder="Ditt företag AB"
                  />
                </div>

                <div>
                  <label
                    htmlFor="service"
                    className="block text-sm font-medium text-[#1a1a1a] font-geist mb-2"
                  >
                    Vad kan vi hjälpa dig med?
                  </label>
                  <select
                    id="service"
                    name="service"
                    className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:border-[#8c7b60] focus:ring-2 focus:ring-[#cbbba0]/20 outline-none transition-all font-geist text-[#1a1a1a] bg-white"
                  >
                    <option value="">Välj tjänst...</option>
                    <option value="lopande-bokforing">
                      Löpande bokföring & redovisning
                    </option>
                    <option value="bokslut">Bokslut & Årsredovisning</option>
                    <option value="loneadministration">Löneadministration</option>
                    <option value="radgivning">
                      Rådgivning inom ekonomi & skatt
                    </option>
                    <option value="digitalisering">
                      Digitalisering av ekonomiflöden
                    </option>
                    <option value="annat">Annat</option>
                  </select>
                </div>

                <div>
                  <label
                    htmlFor="message"
                    className="block text-sm font-medium text-[#1a1a1a] font-geist mb-2"
                  >
                    Meddelande *
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    rows={5}
                    required
                    className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:border-[#8c7b60] focus:ring-2 focus:ring-[#cbbba0]/20 outline-none transition-all font-geist text-[#1a1a1a] resize-none"
                    placeholder="Beskriv kort vad du behöver hjälp med..."
                  ></textarea>
                </div>

                <button
                  type="submit"
                  className="w-full px-8 py-4 bg-[#1a1a1a] hover:bg-[#333] text-white text-[0.7rem] uppercase tracking-[0.15em] font-medium rounded transition-colors duration-300 font-geist"
                >
                  Skicka meddelande
                </button>

                <p className="text-gray-500 text-xs font-geist text-center">
                  Vi svarar normalt inom 24 timmar på vardagar.
                </p>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* Booking CTA */}
      <section className="bg-[#f5f3ef] py-20 px-6 md:px-12">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl text-[#1a1a1a] mb-6 tracking-tight font-aboreto font-medium">
            Föredrar du att prata?
          </h2>
          <p className="text-gray-600 text-base md:text-lg leading-relaxed font-light font-geist mb-10">
            Boka ett kostnadsfritt telefonsamtal så diskuterar vi dina behov och
            hur vi kan hjälpa dig. Ingen förpliktelse.
          </p>
          <a
            href="tel:+46736277977"
            className="inline-block px-10 py-4 bg-[#1a1a1a] hover:bg-[#333] text-white text-[0.7rem] uppercase tracking-[0.15em] font-medium rounded transition-colors duration-300 font-geist"
          >
            Ring oss: (+46) 73-627 79 77
          </a>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="bg-white py-20 md:py-32 px-6 md:px-12 border-t border-gray-100">
        <div className="max-w-[800px] mx-auto">
          <h2 className="text-3xl md:text-4xl text-[#1a1a1a] mb-12 tracking-tight font-aboreto font-medium text-center">
            Vanliga frågor
          </h2>

          <div className="space-y-6">
            <details className="group bg-[#f5f3ef] rounded-lg p-6">
              <summary className="flex items-center justify-between cursor-pointer list-none">
                <h3 className="text-[#1a1a1a] font-medium font-geist pr-4">
                  Arbetar ni endast med företag i Västerås?
                </h3>
                <span className="text-[#8c7b60] text-xl group-open:rotate-45 transition-transform">
                  +
                </span>
              </summary>
              <p className="text-gray-600 font-geist font-light mt-4 leading-relaxed">
                Nej, vi arbetar helt digitalt och kan hjälpa företag i hela
                Sverige. Vi har kunder från Malmö till Luleå. Fysiska möten kan
                ordnas för kunder i Mälardalen.
              </p>
            </details>

            <details className="group bg-[#f5f3ef] rounded-lg p-6">
              <summary className="flex items-center justify-between cursor-pointer list-none">
                <h3 className="text-[#1a1a1a] font-medium font-geist pr-4">
                  Vad kostar det att anlita er?
                </h3>
                <span className="text-[#8c7b60] text-xl group-open:rotate-45 transition-transform">
                  +
                </span>
              </summary>
              <p className="text-gray-600 font-geist font-light mt-4 leading-relaxed">
                Priset beror på företagets storlek och vilka tjänster du behöver.
                Boka ett kostnadsfritt samtal så ger vi dig en offert baserad på
                dina specifika behov.
              </p>
            </details>

            <details className="group bg-[#f5f3ef] rounded-lg p-6">
              <summary className="flex items-center justify-between cursor-pointer list-none">
                <h3 className="text-[#1a1a1a] font-medium font-geist pr-4">
                  Vilka bokföringsprogram använder ni?
                </h3>
                <span className="text-[#8c7b60] text-xl group-open:rotate-45 transition-transform">
                  +
                </span>
              </summary>
              <p className="text-gray-600 font-geist font-light mt-4 leading-relaxed">
                Vi arbetar primärt med Fortnox men kan även hantera andra system
                som Visma och Bokio. Om du redan har ett system kan vi oftast
                fortsätta arbeta i det.
              </p>
            </details>

            <details className="group bg-[#f5f3ef] rounded-lg p-6">
              <summary className="flex items-center justify-between cursor-pointer list-none">
                <h3 className="text-[#1a1a1a] font-medium font-geist pr-4">
                  Hur snabbt kan ni komma igång?
                </h3>
                <span className="text-[#8c7b60] text-xl group-open:rotate-45 transition-transform">
                  +
                </span>
              </summary>
              <p className="text-gray-600 font-geist font-light mt-4 leading-relaxed">
                Efter att vi har all nödvändig information och tillgång till era
                system kan vi oftast komma igång inom några dagar. För
                lönehantering kan uppstarten ta lite längre tid beroende på
                komplexitet.
              </p>
            </details>
          </div>
        </div>
      </section>
    </main>
  );
}
