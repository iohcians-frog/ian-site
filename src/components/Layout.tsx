// src/components/Layout.tsx
import Link from "next/link";
import { useRouter } from "next/router";
import LanguageSwitcher from "@/components/LanguageSwitcher";

export default function Layout({ children }: { children: React.ReactNode }) {
  const router = useRouter();
  const isActive = (path: string) => router.asPath === path;

  return (
    <div className="min-h-screen bg-white text-black">
      {/* Header */}
      <header className="border-b">
        <div className="mx-auto flex max-w-5xl items-center justify-between px-6 py-5">
          {/* Logo + Title */}
          <Link href="/" className="flex items-center gap-3">
            <img
              src="/logo.png"
              alt="IAN Logo"
              className="h-8 w-8 object-contain opacity-90 transition hover:opacity-100"
            />
            <span className="text-xl font-bold tracking-tight sm:text-2xl">
              IAN — Institute for Applied Nonsense
            </span>
          </Link>

          {/* Navigation + Language */}
          <div className="flex items-center gap-6">
            <nav className="flex gap-6 text-sm font-medium sm:text-base">
              {[
                { href: "/cases", label: "Seriously?" },
                { href: "/serious", label: "Serious" },
                { href: "/manifesto", label: "Manifesto" },
                { href: "/about", label: "About" },
              ].map(({ href, label }) => (
                <Link
                  key={href}
                  href={href}
                  className={`transition-colors ${
                    isActive(href)
                      ? "text-[var(--ian-ink)] font-semibold"
                      : "text-slate-700 hover:text-[var(--ian-ink)]"
                  }`}
                >
                  {label}
                </Link>
              ))}
            </nav>

            <LanguageSwitcher />
          </div>
        </div>
      </header>

      {/* Page Body */}
      <main>{children}</main>

      {/* Footer */}
      <footer className="mt-20 border-t">
        <div className="mx-auto flex max-w-5xl items-center justify-between px-6 py-8">
          <div className="text-sm text-slate-600">
            Powered by curiosity, caffeine, and questionable grant proposals. 🐸
          </div>
          <img src="/frog.svg" alt="frog" className="h-6 w-6 opacity-70" />
        </div>
      </footer>
    </div>
  );
}
