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
            <div className="flex flex-col items-center gap-1">
              <div className="flex items-center gap-2.5">
                <div className="w-8 h-8 rounded-md bg-foreground flex items-center justify-center">
                  <span className="text-background font-black text-xs">A</span>
                </div>
                <div>
                  <p className="font-black text-lg tracking-tight text-foreground leading-none">aras™</p>
                  <p className="text-[10px] font-medium text-muted-foreground uppercase tracking-wider leading-none">
                    digital products
                  </p>
                </div>
              </div>
            </div>

            <Separator orientation="vertical" className="hidden sm:block h-10" />
            <div className="sm:hidden w-16 h-px bg-border" />

            {/* BSG Advisory */}
            <div className="flex flex-col items-center gap-1">
              <div className="flex items-center gap-2.5">
                <div className="flex items-center gap-0.5">
                  <div className="w-2 h-8 rounded-sm bg-primary" />
                  <div className="w-2 h-8 rounded-sm bg-primary/70" />
                  <div className="w-2 h-8 rounded-sm bg-primary/40" />
                </div>
                <div>
                  <p className="font-black text-lg tracking-tight text-foreground leading-none">BSG™</p>
                  <p className="text-[10px] font-medium text-muted-foreground uppercase tracking-wider leading-none">
                    advisory
                  </p>
                </div>
              </div>
            </div>
          </div>
        </AnimateIn>
      </div>
    </section>
  );
}
