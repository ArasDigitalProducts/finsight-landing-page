import Link from "next/link";
import { Button } from "@/components/ui/button";
import { ArrowLeft, SearchX } from "lucide-react";

export default function NotFound() {
  return (
    <div className="min-h-screen bg-white flex flex-col">
      {/* Minimal nav */}
      <header className="border-b border-border">
        <div className="max-w-6xl mx-auto px-6 h-14 flex items-center">
          <Link href="/" className="flex items-center gap-2">
            <div className="w-6 h-6 rounded-md bg-primary flex items-center justify-center">
              <span className="text-primary-foreground font-black text-xs">F</span>
            </div>
            <span className="font-black text-lg tracking-tight text-foreground">
              Fin<span className="text-primary">Sight</span>
            </span>
          </Link>
        </div>
      </header>

      {/* Content */}
      <div className="flex-1 flex flex-col items-center justify-center px-6 text-center">
        {/* Background grid */}
        <div
          className="absolute inset-0 opacity-[0.03] pointer-events-none"
          style={{
            backgroundImage: `linear-gradient(oklch(0.48 0.22 264) 1px, transparent 1px),
                              linear-gradient(90deg, oklch(0.48 0.22 264) 1px, transparent 1px)`,
            backgroundSize: "48px 48px",
          }}
        />

        <div className="relative flex flex-col items-center gap-6 max-w-md">
          <div className="w-20 h-20 rounded-2xl bg-primary/10 flex items-center justify-center">
            <SearchX className="w-10 h-10 text-primary" />
          </div>

          <div>
            <p className="text-xs font-semibold uppercase tracking-widest text-primary mb-3">
              404 — Page not found
            </p>
            <h1 className="text-4xl font-black tracking-tight text-foreground mb-3">
              Nothing to see here.
            </h1>
            <p className="text-muted-foreground leading-relaxed">
              The page you&apos;re looking for doesn&apos;t exist or has been moved.
              Let&apos;s get you back on track.
            </p>
          </div>

          <div className="flex flex-col sm:flex-row gap-3 w-full sm:w-auto">
            <Button
              asChild
              className="bg-primary hover:bg-primary/90 text-primary-foreground font-semibold rounded-lg gap-2"
            >
              <Link href="/">
                <ArrowLeft className="w-4 h-4" />
                Back to home
              </Link>
            </Button>
            <Button
              asChild
              variant="outline"
              className="font-semibold rounded-lg border-border"
            >
              <Link href="/#contact">Request Early Access</Link>
            </Button>
          </div>
        </div>
      </div>

      {/* Footer strip */}
      <footer className="border-t border-border">
        <div className="max-w-6xl mx-auto px-6 py-5 text-xs text-muted-foreground text-center">
          © 2025 FinSight. Delivered by Aras™ Digital Products & BSG Advisory™.
        </div>
      </footer>
    </div>
  );
}
