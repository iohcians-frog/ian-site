import Link from "next/link";

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <div className="min-h-screen bg-white text-black">
      <header className="border-b">
        <div className="mx-auto max-w-5xl px-6 py-4 flex items-center justify-between">
          <Link href="/" className="font-bold tracking-tight text-xl">
            IAN — Institute for Applied Nonsense
          </Link>
          <nav className="flex gap-5 text-sm">
            <Link href="/cases" className="hover:underline">Cases</Link>
            <Link href="/manifesto" className="hover:underline">Manifesto</Link>
            <Link href="/about" className="hover:underline">About</Link>
          </nav>
        </div>
      </header>
      <main>{children}</main>
      <footer className="mt-20 border-t">
        <div className="mx-auto max-w-5xl px-6 py-8 flex items-center justify-between">
          <div className="text-sm">
            Powered by curiosity, caffeine, and questionable grant proposals. 🐸
          </div>
          <img src="/frog.svg" alt="frog" className="h-6 w-6 opacity-70" />
        </div>
      </footer>
    </div>
  );
}
