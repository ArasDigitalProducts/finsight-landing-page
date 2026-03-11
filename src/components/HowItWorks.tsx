"use client";

import { Settings2, Plug, MessageCircle } from "lucide-react";
import { useState } from "react";
import AnimateIn from "@/components/AnimateIn";

const steps = [
  {
    number: "01",
    icon: Settings2,
    title: "Configure your financial logic",
    description:
      "Map your chart of accounts, cost centers, KPI definitions, EBITDA logic and reporting rules. FinSight encodes the financial semantics your company already uses — we encode the logic, not replace it.",
    aside: "Chart of accounts · Cost centers · KPI definitions",
  },
  {
    number: "02",
    icon: Plug,
    title: "Connect your ERP data",
    description:
      "FinSight structures live ERP data through your configured financial model with secure, read-only access. No ERP replacement. No disruption to existing workflows. No redesign of finance processes.",
    aside: "Secure · Read-only · No ERP changes",
  },
  {
    number: "03",
    icon: MessageCircle,
    title: "Ask and act",
    description:
      "Executives and controllers ask questions in plain language and get structured, decision-grade answers — grounded in your company's financial logic, not generic AI interpretation.",
    aside: "Decision-grade outputs · PDF export · Scheduled reports",
  },
];

export default function HowItWorks() {
  const [activeStep, setActiveStep] = useState<number | null>(null);

  return (
    <section id="how-it-works" className="py-24 bg-foreground/[0.02]">
      <div className="max-w-6xl mx-auto px-6">
        {/* Header */}
        <AnimateIn className="max-w-2xl mb-16">
          <p className="text-xs font-semibold uppercase tracking-widest text-primary mb-4">
            How It Works
          </p>
          <h2 className="text-4xl lg:text-5xl font-black tracking-tight text-foreground mb-4">
            Configure once. Reason continuously.
          </h2>
          <p className="text-lg text-muted-foreground leading-relaxed">
            FinSight is built around your company&apos;s financial model — not a generic AI layer on top of raw ERP tables.
          </p>
        </AnimateIn>

        {/* Steps */}
        <div className="relative">
          {/* Connecting line (desktop) */}
          <div className="hidden lg:block absolute left-[39px] top-16 bottom-16 w-px bg-gradient-to-b from-primary/40 via-primary/20 to-transparent" />

          <div className="flex flex-col gap-12">
            {steps.map((step, i) => {
              const Icon = step.icon;
              const isActive = i === activeStep;
              return (
                <AnimateIn key={step.number} delay={i * 100} from="left">
                  <div
                    className="flex gap-8 items-start"
                    onMouseEnter={() => setActiveStep(i)}
                    onMouseLeave={() => setActiveStep(null)}
                  >
                    {/* Step number + icon */}
                    <div className="flex-shrink-0 flex flex-col items-center gap-2">
                      <div
                        className={`w-20 h-20 rounded-2xl flex items-center justify-center border-2 transition-all duration-500 ${
                          isActive
                            ? "bg-primary border-primary text-primary-foreground scale-105"
                            : "bg-white border-border text-foreground scale-100"
                        }`}
                      >
                        <Icon className={`w-8 h-8 transition-transform duration-300 ${isActive ? "-translate-y-0.5" : ""}`} />
                      </div>
                    </div>

                    {/* Content */}
                    <div className="flex-1 pt-3 lg:grid lg:grid-cols-[1fr_auto] lg:gap-12 lg:items-start">
                      <div>
                        <div className="flex items-center gap-3 mb-3">
                          <span className={`text-xs font-black uppercase tracking-widest transition-all duration-300 origin-left ${isActive ? "text-primary scale-110" : "text-primary/60 scale-100"}`}>
                            {step.number}
                          </span>
                          <h3 className={`text-2xl font-bold text-foreground transition-transform duration-300 ${isActive ? "translate-x-1" : ""}`}>{step.title}</h3>
                        </div>
                        <p className={`leading-relaxed max-w-lg transition-colors duration-300 ${isActive ? "text-foreground/70" : "text-muted-foreground"}`}>{step.description}</p>
                      </div>
                      <div className="hidden lg:block mt-1">
                        <div className={`w-56 border rounded-xl px-4 py-3 text-xs font-medium leading-relaxed transition-all duration-500 ${
                          isActive
                            ? "bg-primary/10 border-primary/30 text-primary"
                            : "bg-primary/5 border-primary/10 text-primary/60"
                        }`}>
                          {step.aside.split(" · ").map((tag, tagIdx) => (
                            <span
                              key={tag}
                              className={`block py-0.5 transition-all duration-300 ${isActive ? "translate-x-1" : ""}`}
                              style={{ transitionDelay: isActive ? `${tagIdx * 55}ms` : "0ms" }}
                            >
                              · {tag}
                            </span>
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>
                </AnimateIn>
              );
            })}
          </div>
        </div>

        {/* Deployment proof */}
        <AnimateIn from="bottom" delay={150} className="mt-16">
          <div className="rounded-2xl border border-primary/20 bg-primary/[0.03] px-8 py-6 flex flex-col sm:flex-row items-start sm:items-center gap-6 sm:gap-12">
            <div className="flex-1">
              <p className="text-xs font-semibold uppercase tracking-widest text-primary mb-1">Deployment</p>
              <p className="text-sm text-muted-foreground leading-relaxed">
                Typical deployment takes <span className="font-semibold text-foreground">3–4 weeks</span>. Around{" "}
                <span className="font-semibold text-foreground">80% is template-driven</span> with 20% company-specific
                configuration — no ERP replacement, no redesign of finance processes.
              </p>
            </div>
            <div className="flex gap-6 flex-shrink-0">
              <div className="text-center">
                <p className="text-2xl font-black text-primary">3–4</p>
                <p className="text-xs text-muted-foreground">weeks</p>
              </div>
              <div className="text-center">
                <p className="text-2xl font-black text-primary">80%</p>
                <p className="text-xs text-muted-foreground">template-driven</p>
              </div>
            </div>
          </div>
        </AnimateIn>
      </div>
    </section>
  );
}
