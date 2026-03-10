"use client";

import { Plug, MessageCircle, LineChart } from "lucide-react";
import { useState } from "react";
import AnimateIn from "@/components/AnimateIn";

const steps = [
  {
    number: "01",
    icon: Plug,
    title: "Connect your ERP",
    description:
      "FinSight connects to your ERP with secure, read-only access to your financial data. Your data team handles the one-time setup — no changes to business logic, no disruption to existing workflows.",
    aside: "Secure · Read-only · No business logic changes",
  },
  {
    number: "02",
    icon: MessageCircle,
    title: "Ask a question",
    description:
      'Type a prompt in plain language — "Show me cash flow variance for Q1 vs budget" or "Which cost centers are over budget this month?" FinSight understands financial context.',
    aside: "Natural language · Multi-step reasoning · Financial ontology",
  },
  {
    number: "03",
    icon: LineChart,
    title: "Get instant insight",
    description:
      "The AI agent queries your ERP, runs the analysis, and returns structured results with charts, tables, and narrative explanations — ready to share or export.",
    aside: "Charts · Tables · PDF export · Scheduled reports",
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
            Three steps from question to insight.
          </h2>
          <p className="text-lg text-muted-foreground leading-relaxed">
            FinSight eliminates the gap between your question and your ERP data.
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
                        {/* Icon lifts slightly on hover */}
                        <Icon className={`w-8 h-8 transition-transform duration-300 ${isActive ? "-translate-y-0.5" : ""}`} />
                      </div>
                    </div>

                    {/* Content */}
                    <div className="flex-1 pt-3 lg:grid lg:grid-cols-[1fr_auto] lg:gap-12 lg:items-start">
                      <div>
                        <div className="flex items-center gap-3 mb-3">
                          {/* Number scales up on hover */}
                          <span className={`text-xs font-black uppercase tracking-widest transition-all duration-300 origin-left ${isActive ? "text-primary scale-110" : "text-primary/60 scale-100"}`}>
                            {step.number}
                          </span>
                          {/* Title nudges right on hover */}
                          <h3 className={`text-2xl font-bold text-foreground transition-transform duration-300 ${isActive ? "translate-x-1" : ""}`}>{step.title}</h3>
                        </div>
                        {/* Description brightens on hover */}
                        <p className={`leading-relaxed max-w-lg transition-colors duration-300 ${isActive ? "text-foreground/70" : "text-muted-foreground"}`}>{step.description}</p>
                      </div>
                      <div className="hidden lg:block mt-1">
                        <div className={`w-56 border rounded-xl px-4 py-3 text-xs font-medium leading-relaxed transition-all duration-500 ${
                          isActive
                            ? "bg-primary/10 border-primary/30 text-primary"
                            : "bg-primary/5 border-primary/10 text-primary/60"
                        }`}>
                          {/* Tags stagger-slide in on hover */}
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
      </div>
    </section>
  );
}
