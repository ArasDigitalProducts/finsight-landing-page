import Image from "next/image";
import { Separator } from "@/components/ui/separator";
import AnimateIn from "@/components/AnimateIn";

export default function LogoBar() {
  return (
    <section className="bg-foreground/[0.02] border-y border-border py-10">
      <div className="max-w-6xl mx-auto px-6">
        <AnimateIn from="fade">
          <p className="text-center text-xs font-semibold uppercase tracking-widest text-muted-foreground mb-8">
            Delivered by
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-8 sm:gap-16">
            {/* Aras Digital Products */}
            <a href="https://arasdigital.co" target="_blank" rel="noopener noreferrer" className="transition-all duration-300 opacity-70 hover:opacity-100 hover:scale-105">
              <Image src="/adp-logo.png" alt="Aras Digital Products" width={236} height={48} className="h-5 w-auto" />
            </a>

            <Separator orientation="vertical" className="hidden sm:block h-10" />
            <div className="sm:hidden w-16 h-px bg-border" />

            {/* BSG Advisory */}
            <a href="https://bsg-advisory.hr/en/" target="_blank" rel="noopener noreferrer" className="transition-all duration-300 opacity-70 hover:opacity-100 hover:scale-105">
              <Image src="/bsg-logo.png" alt="BSG Advisory" width={455} height={203} className="h-10 w-auto" />
            </a>
          </div>
        </AnimateIn>
      </div>
    </section>
  );
}
