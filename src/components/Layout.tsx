import Link from "next/link";

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <div className="min-h-screen bg-white text-black">
      {/* Header */}
      <header className="border-b">
        <div className="mx-auto max-w-5xl px-6 py-5 flex items-center justify-between">
          {/* Logo + Title */}
          <Link href="/" className="flex items-center gap-3">
            <img
              src="/logo.png"
              alt="IAN Logo"
              className="h-8 w-8 object-contain opacity-90 hover:opacity-100 transition"
            />
            <span className="font-bold tracking-tight text-xl sm:text-2xl">
              IAN — Institute for Applied Nonsense
            </span>
          </Link>

          {/* Navigation */}
          <nav className="flex gap-6 text-sm sm:text-base font-medium">
            <Link href="/cases" className="hover:underline">
              Seriously?
            </Link>
            <Link href="/serious" className="hover:underline">
              Serious
            </Link>
            <Link href="/manifesto" className="hover:underline">
              Manifesto
            </Link>
            <Link href="/about" className="hover:underline">
              About
            </Link>
          </nav>
        </div>
      </header>

      {/* Page Body */}
      <main>{children}</main>

      {/* Footer */}
      <footer className="mt-20 border-t">
        <div className="mx-auto max-w-5xl px-6 py-8 flex items-center justify-between">
          <div className="text-sm text-slate-600">
            Powered by curiosity, caffeine, and questionable grant proposals. 🐸
          </div>
          <img src="/frog.svg" alt="frog" className="h-6 w-6 opacity-70" />
        </div>
      </footer>
    </div>
  );
}
