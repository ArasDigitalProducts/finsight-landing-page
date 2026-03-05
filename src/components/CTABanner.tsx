import { Button } from "@/components/ui/button";
import { ArrowRight, Sparkles } from "lucide-react";

export default function CTABanner() {
  return (
    <section id="contact" className="py-24 bg-foreground">
      <div className="max-w-4xl mx-auto px-6 text-center">
        <div className="inline-flex items-center gap-2 bg-white/10 text-white/80 text-xs font-semibold uppercase tracking-widest px-4 py-2 rounded-full mb-8">
          <Sparkles className="w-3.5 h-3.5" />
          Early Access Programme
        </div>

        <h2 className="text-4xl lg:text-6xl font-black tracking-tight text-white mb-6 leading-[1.05]">
          Ready to control your<br />finances with AI?
        </h2>

        <p className="text-lg text-white/60 mb-10 max-w-xl mx-auto leading-relaxed">
          Join the early access programme and be among the first to experience FinSight. We&apos;re onboarding a limited number of companies.
        </p>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-10">
          <input
            type="email"
            placeholder="your@company.com"
            className="w-full sm:w-auto sm:min-w-[280px] px-5 py-3 rounded-xl bg-white/10 border border-white/20 text-white placeholder:text-white/40 text-sm font-medium focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition-all"
          />
          <Button
            size="lg"
            className="w-full sm:w-auto bg-primary hover:bg-primary/90 text-white font-semibold rounded-xl gap-2 px-7"
          >
            Request Early Access
            <ArrowRight className="w-4 h-4" />
          </Button>
        </div>

        <p className="text-white/40 text-xs">
          No credit card required · We&apos;ll reach out within 2 business days
        </p>
      </div>
    </section>
  );
}
