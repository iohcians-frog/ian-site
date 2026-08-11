// src/components/LanguageSwitcher.tsx
import Link from "next/link";
import { useRouter } from "next/router";

export default function LanguageSwitcher() {
  const router = useRouter();
  const { locale, asPath } = router;

  return (
    <div className="flex items-center text-[13px] font-medium tracking-tight">
      <Link
        href={asPath}
        locale="en"
        className={
          locale === "en"
            ? "text-[var(--ian-ink)] font-semibold"
            : "text-[var(--ian-ink-light)] hover:text-[var(--ian-ink)] transition-colors"
        }
      >
        EN
      </Link>

      <span className="mx-1 text-[var(--ian-ink-light)]">/</span>

      <Link
        href={asPath}
        locale="zh"
        className={
          locale === "zh"
            ? "text-[var(--ian-ink)] font-semibold"
            : "text-[var(--ian-ink-light)] hover:text-[var(--ian-ink)] transition-colors"
        }
      >
        中文
      </Link>
    </div>
  );
}
