import Link from "next/link";
import { ThemeToggle } from "./theme-toggle";

export function Navbar() {
  return (
    <header className="sticky top-0 z-50 w-full">
      <div className="mx-auto max-w-6xl px-4 py-4">
        <nav className="glass noise relative flex h-14 items-center justify-between rounded-2xl px-6">
          <Link
            href="/"
            className="bg-gradient-to-r from-primary to-accent bg-clip-text text-lg font-bold text-transparent"
          >
            Qilin's Blog
          </Link>
          <div className="flex items-center gap-4">
            <Link
              href="/"
              className="text-sm text-muted-foreground transition-colors hover:text-foreground"
            >
              Home
            </Link>
            <ThemeToggle />
          </div>
        </nav>
      </div>
    </header>
  );
}
