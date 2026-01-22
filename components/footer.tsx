export function Footer() {
  return (
    <footer className="py-8">
      <div className="mx-auto max-w-6xl px-4">
        <div className="glass noise relative flex h-16 items-center justify-center rounded-2xl">
          <p className="text-sm text-muted-foreground">
            &copy; {new Date().getFullYear()} Qilin. Built with Next.js &amp;
            Tailwind CSS.
          </p>
        </div>
      </div>
    </footer>
  );
}
