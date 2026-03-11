"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { ArrowRight, Sparkles, CheckCircle, AlertCircle, Loader2 } from "lucide-react";

const FORMSPREE_ENDPOINT = "https://formspree.io/f/xaqpeeoo";

type Status = "idle" | "loading" | "success" | "error";

export default function CTABanner() {
  const [email, setEmail] = useState("");
  const [status, setStatus] = useState<Status>("idle");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!email || status === "loading") return;
    setStatus("loading");
    try {
      const res = await fetch(FORMSPREE_ENDPOINT, {
        method: "POST",
        headers: { "Content-Type": "application/json", Accept: "application/json" },
        body: JSON.stringify({ email }),
      });
      if (res.ok) {
        setStatus("success");
        setEmail("");
      } else {
        setStatus("error");
      }
    } catch {
      setStatus("error");
    }
  };

  return (
    <section id="contact" className="py-24 bg-foreground">
      <div className="max-w-4xl mx-auto px-6 text-center">
        <div className="inline-flex items-center gap-2 bg-white/10 text-white/80 text-xs font-semibold uppercase tracking-widest px-4 py-2 rounded-full mb-8">
          <Sparkles className="w-3.5 h-3.5" />
          Early Access Programme
        </div>

        <h2 className="text-4xl lg:text-6xl font-black tracking-tight text-white mb-6 leading-[1.05] text-pretty">
          Ready to give your finance team decision&#8209;grade answers?
        </h2>

        <p className="text-lg text-white/60 mb-10 max-w-xl mx-auto leading-relaxed">
          Join the early access programme and be among the first to experience FinSight. We&apos;re onboarding a limited number of companies.
        </p>

        {status === "success" ? (
          <div className="flex flex-col items-center gap-3 py-4">
            <CheckCircle className="w-10 h-10 text-green-400" />
            <p className="text-white font-semibold text-lg">You&apos;re on the list!</p>
            <p className="text-white/50 text-sm">We&apos;ll reach out within 2 business days.</p>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-10">
            <input
              type="email"
              placeholder="your@company.com"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              disabled={status === "loading"}
              className="w-full sm:w-auto sm:min-w-[280px] px-5 py-3 rounded-xl bg-white/10 border border-white/20 text-white placeholder:text-white/40 text-sm font-medium focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition-all disabled:opacity-50"
            />
            <Button
              type="submit"
              size="lg"
              disabled={status === "loading"}
              className="group w-full sm:w-auto bg-primary hover:bg-primary/90 text-primary-foreground font-semibold rounded-lg gap-2 px-7 disabled:opacity-70"
            >
              {status === "loading" ? (
                <>
                  <Loader2 className="w-4 h-4 animate-spin" />
                  Sending…
                </>
              ) : (
                <>
                  Request Early Access
                  <ArrowRight className="w-4 h-4 transition-transform duration-200 group-hover:translate-x-0.5" />
                </>
              )}
            </Button>
          </form>
        )}

        {status === "error" && (
          <p className="flex items-center justify-center gap-2 text-red-400 text-sm mb-4">
            <AlertCircle className="w-4 h-4" />
            Something went wrong. Please try again.
          </p>
        )}

        {status !== "success" && (
          <p className="text-white/40 text-xs">
            No credit card required · We&apos;ll reach out within 2 business days
          </p>
        )}
      </div>
    </section>
  );
}
