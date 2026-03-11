import Link from "next/link";
import Image from "next/image";
import { Separator } from "@/components/ui/separator";

const footerLinks: Record<string, { label: string; href: string }[]> = {
  Product: [
    { label: "Features", href: "#features" },
    { label: "How It Works", href: "#how-it-works" },
    { label: "Why FinSight", href: "#why-finsight" },
    { label: "Contact", href: "#contact" },
  ],
  Legal: [
    { label: "Privacy Policy", href: "/privacy" },
    { label: "Terms of Service", href: "/terms" },
    { label: "Cookie Policy", href: "/cookies" },
    { label: "Security", href: "/security" },
  ],
};

export default function Footer() {
  return (
    <footer className="bg-white border-t border-border">
      <div className="max-w-6xl mx-auto px-6 py-16">
        <div className="grid grid-cols-2 lg:grid-cols-[2fr_1fr_1fr] gap-12 mb-16">
          {/* Brand column */}
          <div className="col-span-2 lg:col-span-1">
            <div className="mb-4">
              <Image src="/finsight-logo.png" alt="FinSight" width={1749} height={492} className="h-7 w-auto" />
            </div>
            <p className="text-sm text-muted-foreground leading-relaxed max-w-xs">
              Turning ERP data into executive financial clarity.
            </p>
          </div>

          {/* Link columns */}
          {Object.entries(footerLinks).map(([category, links]) => (
            <div key={category}>
              <p className="text-xs font-black uppercase tracking-widest text-foreground mb-4">
                {category}
              </p>
              <ul className="flex flex-col gap-3">
                {links.map((link) => (
                  <li key={link.label}>
                    <Link
                      href={link.href}
                      className="relative text-sm text-muted-foreground hover:text-foreground transition-colors group/flink"
                    >
                      {link.label}
                      <span className="absolute bottom-0 left-0 h-px w-0 bg-foreground transition-all duration-300 group-hover/flink:w-full" />
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <Separator className="mb-8" />

        <div className="flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-muted-foreground">
          <p>© 2026 FinSight. Delivered by Aras™ Digital Products & BSG Advisory™.</p>
          <p className="flex items-center gap-1.5">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-500 opacity-40" />
              <span className="relative inline-flex rounded-full h-2 w-2 bg-green-500" />
            </span>
            All systems operational
          </p>
        </div>
      </div>
    </footer>
  );
}
