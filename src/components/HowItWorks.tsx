import { Plug, MessageCircle, LineChart } from "lucide-react";
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
          <p className="text-lg text-muted-foreground">
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
              return (
                <AnimateIn key={step.number} delay={i * 100} from="left">
                  <div className="flex gap-8 items-start">
                    {/* Step number + icon */}
                    <div className="flex-shrink-0 flex flex-col items-center gap-2">
                      <div
                        className={`w-20 h-20 rounded-2xl flex items-center justify-center border-2 transition-colors ${
                          i === 1
                            ? "bg-primary border-primary text-primary-foreground"
                            : "bg-white border-border text-foreground"
                        }`}
                      >
                        <Icon className="w-8 h-8" />
                      </div>
                    </div>

                    {/* Content */}
                    <div className="flex-1 pt-3 lg:grid lg:grid-cols-[1fr_auto] lg:gap-12 lg:items-start">
                      <div>
                        <div className="flex items-center gap-3 mb-3">
                          <span className="text-xs font-black uppercase tracking-widest text-primary/60">
                            {step.number}
                          </span>
                          <h3 className="text-2xl font-bold text-foreground">{step.title}</h3>
                        </div>
                        <p className="text-muted-foreground leading-relaxed max-w-lg">{step.description}</p>
                      </div>
                      <div className="hidden lg:block mt-1">
                        <div className="bg-primary/5 border border-primary/10 rounded-xl px-4 py-3 text-xs text-primary font-medium leading-relaxed whitespace-nowrap">
                          {step.aside.split(" · ").map((tag) => (
                            <span key={tag} className="block py-0.5">
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
