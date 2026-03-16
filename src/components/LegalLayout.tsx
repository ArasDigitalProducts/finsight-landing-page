import Link from "next/link";
import { ArrowLeft } from "lucide-react";
import { Separator } from "@/components/ui/separator";

interface LegalLayoutProps {
  title: string;
  lastUpdated: string;
  children: React.ReactNode;
}

export default function LegalLayout({ title, lastUpdated, children }: LegalLayoutProps) {
  return (
    <div className="min-h-screen bg-white">
      {/* Minimal top bar */}
      <header className="border-b border-border">
        <div className="max-w-6xl mx-auto px-6 h-14 flex items-center justify-between">
          <Link href="/" className="flex items-center gap-2">
            <div className="w-6 h-6 rounded-md bg-primary flex items-center justify-center">
              <span className="text-primary-foreground font-black text-xs">F</span>
            </div>
            <span className="font-black text-lg tracking-tight text-foreground">
              Fin<span className="text-primary">Sight</span>
            </span>
          </Link>
          <Link
            href="/"
            className="flex items-center gap-1.5 text-sm text-muted-foreground hover:text-foreground transition-colors"
          >
            <ArrowLeft className="w-3.5 h-3.5" />
            Back to home
          </Link>
        </div>
      </header>

      {/* Content */}
      <main className="max-w-3xl mx-auto px-6 py-16">
        <div className="mb-10">
          <p className="text-xs font-semibold uppercase tracking-widest text-primary mb-3">Legal</p>
          <h1 className="text-4xl font-black tracking-tight text-foreground mb-3">{title}</h1>
          <p className="text-sm text-muted-foreground">Last updated: {lastUpdated}</p>
        </div>

        <Separator className="mb-10" />

        <div className="prose prose-sm prose-neutral max-w-none [&_h2]:text-xl [&_h2]:font-bold [&_h2]:text-foreground [&_h2]:mt-10 [&_h2]:mb-3 [&_h3]:text-base [&_h3]:font-semibold [&_h3]:text-foreground [&_h3]:mt-6 [&_h3]:mb-2 [&_p]:text-muted-foreground [&_p]:leading-relaxed [&_p]:mb-4 [&_ul]:text-muted-foreground [&_ul]:mb-4 [&_li]:mb-1.5 [&_li]:leading-relaxed [&_a]:text-primary [&_a]:underline [&_a]:underline-offset-2">
          {children}
        </div>
      </main>

      {/* Footer strip */}
      <footer className="border-t border-border mt-16">
        <div className="max-w-6xl mx-auto px-6 py-6 flex flex-col sm:flex-row items-center justify-between gap-3 text-xs text-muted-foreground">
          <p>© 2026 FinSight. Delivered by Aras™ Digital Products & BSG Advisory™.</p>
          <div className="flex items-center gap-4">
            <Link href="/privacy" className="hover:text-foreground transition-colors">Privacy</Link>
            <Link href="/terms" className="hover:text-foreground transition-colors">Terms</Link>
            <Link href="/cookies" className="hover:text-foreground transition-colors">Cookies</Link>
            <Link href="/security" className="hover:text-foreground transition-colors">Security</Link>
          </div>
        </div>
      </footer>
    </div>
  );
}
