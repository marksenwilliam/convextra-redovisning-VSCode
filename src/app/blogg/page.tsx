import { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";

export const metadata: Metadata = {
  title: "Blogg | Convextra Redovisning",
  description:
    "Läs våra artiklar om bokföring, redovisning, skatt och företagande. Tips och råd från Convextra Redovisning i Västerås.",
};

// Blog data - in a real app this would come from a CMS or database
const blogPosts = [
  {
    slug: "vad-ar-lopande-bokforing",
    title: "Vad är löpande bokföring?",
    subtitle: "En komplett guide för dig som vill förstå (eller slippa) pappersarbetet",
    excerpt:
      "Löpande bokföring är något alla svenska företag måste sköta, men hur du gör det är upp till dig. Med dagens smarta bokföringsprogram och AI-verktyg är det fullt möjligt att hantera det själv.",
    date: "2026-01-01",
    readTime: "2 min",
    image: "/assets/blog cover image.jpg",
  },
];

export default function BloggPage() {
  return (
    <main>
      {/* Hero */}
      <header className="bg-[#1a1a1a] pt-32 pb-20 px-6 md:px-12">
        <div className="max-w-[1200px] mx-auto text-center">
          <h1 className="text-4xl md:text-5xl lg:text-6xl text-white font-aboreto font-medium tracking-tight mb-6">
            Blogg
          </h1>
          <p className="text-white/70 text-lg md:text-xl font-light font-geist max-w-2xl mx-auto">
            Tips, råd och insikter om bokföring, redovisning och företagande
          </p>
        </div>
      </header>

      {/* Blog Grid */}
      <section className="bg-[#f5f3ef] py-20 md:py-32 px-6 md:px-12">
        <div className="max-w-[1200px] mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {blogPosts.map((post) => (
              <Link
                key={post.slug}
                href={`/blogg/${post.slug}`}
                className="group bg-white rounded-lg overflow-hidden shadow-sm hover:shadow-md transition-all duration-300"
              >
                <div className="relative h-48 bg-gray-200">
                  <Image
                    src={post.image}
                    alt={post.title}
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="p-6">
                  <div className="flex items-center gap-4 text-xs text-gray-500 font-geist mb-3">
                    <span>{new Date(post.date).toLocaleDateString("sv-SE")}</span>
                    <span>•</span>
                    <span>{post.readTime} läsning</span>
                  </div>
                  <h2 className="text-xl text-[#1a1a1a] mb-3 font-playfair font-medium group-hover:text-[#8c7b60] transition-colors">
                    {post.title}
                  </h2>
                  <p className="text-gray-600 text-sm leading-relaxed font-geist font-light line-clamp-3">
                    {post.excerpt}
                  </p>
                  <span className="inline-block mt-4 text-[#8c7b60] text-sm font-geist font-medium group-hover:underline">
                    Läs mer →
                  </span>
                </div>
              </Link>
            ))}
          </div>

          {blogPosts.length === 0 && (
            <div className="text-center py-20">
              <p className="text-gray-500 font-geist">
                Inga blogginlägg ännu. Kom tillbaka snart!
              </p>
            </div>
          )}
        </div>
      </section>

      {/* CTA */}
      <section className="bg-white py-20 px-6 md:px-12 border-t border-gray-100">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl text-[#1a1a1a] mb-6 tracking-tight font-aboreto font-medium">
            Har du frågor om bokföring?
          </h2>
          <p className="text-gray-600 text-base md:text-lg leading-relaxed font-light font-geist mb-10">
            Boka ett kostnadsfritt samtal så svarar vi på dina frågor.
          </p>
          <Link
            href="/kontakt"
            className="inline-block px-10 py-4 bg-[#1a1a1a] hover:bg-[#333] text-white text-[0.7rem] uppercase tracking-[0.15em] font-medium rounded transition-colors duration-300 font-geist"
          >
            Boka kostnadsfritt samtal
          </Link>
        </div>
      </section>
    </main>
  );
}
