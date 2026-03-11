import { BrainCircuit, Clock3, LayoutDashboard, Users, Settings, Sparkles, X, Check } from "lucide-react";
import AnimateIn from "@/components/AnimateIn";

const valueProps = [
  {
    icon: Clock3,
    title: "From days of reconstruction to live decision support",
    description:
      "Stop waiting for analysts to reconstruct data into reports. FinSight queries your configured financial model in real time and delivers structured, decision-grade answers on demand.",
  },
  {
    icon: LayoutDashboard,
    title: "Beyond dashboards and predefined KPIs",
    description:
      "Skip the predefined dashboard, the analyst interpretation and the 3-day wait. Ask any financial question directly and get an answer structured around your company's own definitions — not generic BI defaults.",
  },
  {
    icon: Users,
    title: "Direct access to financial interpretation",
    description:
      "Controllers and executives get direct access to financial reasoning — without routing every question through the finance team or waiting for a custom report to be built.",
  },
  {
    icon: Settings,
    title: "Company-configured financial reasoning",
    description:
      "FinSight applies your configured EBITDA logic, reclass rules, cost allocations and internal KPI definitions to deliver structured explanations management can act on — not generic AI outputs.",
  },
];

const comparisonRows = [
  { generic: "Reads standardised ERP tables", finsight: "Configured to your chart of accounts and cost structure" },
  { generic: "Ignores company-specific semantics", finsight: "Applies your internal KPI definitions and reclass rules" },
  { generic: "Cannot apply managerial accounting logic", finsight: "Encodes your EBITDA logic and allocation rules" },
  { generic: "Returns numbers, not management answers", finsight: "Returns structured explanations for decision-making" },
  { generic: "Generic across all companies", finsight: "Configured specifically to your financial model" },
];

export default function ERPIntegration() {
  return (
    <section id="why-finsight" className="py-24 bg-white">
      <div className="max-w-6xl mx-auto px-6">
        {/* Header */}
        <AnimateIn className="max-w-2xl mb-16">
          <p className="text-xs font-semibold uppercase tracking-widest text-primary mb-4">
            Why FinSight
          </p>
          <h2 className="text-4xl lg:text-5xl font-black tracking-tight text-foreground mb-4">
            Beyond dashboards. Financial intelligence that reasons.
          </h2>
          <p className="text-lg text-muted-foreground leading-relaxed">
            Traditional BI shows what happened. FinSight explains why it happened and what to adjust — configured to your company&apos;s financial model, not a generic layer on top of raw data.
          </p>
        </AnimateIn>

        {/* Value prop grid */}
        <div className="grid sm:grid-cols-2 gap-6 mb-16">
          {valueProps.map((prop, i) => {
            const Icon = prop.icon;
            return (
              <AnimateIn key={prop.title} delay={i * 80} className="h-full">
                <div className="group h-full rounded-2xl border border-border bg-foreground/[0.015] p-7 flex gap-5 transition-all duration-500 ease-out hover:-translate-y-1.5 hover:border-primary/20 hover:shadow-lg hover:shadow-primary/10">
                  <div className="w-10 h-10 rounded-xl flex items-center justify-center flex-shrink-0 mt-0.5 transition-all duration-500 bg-primary/10 text-primary group-hover:bg-primary/20">
                    <Icon className="w-5 h-5" />
                  </div>
                  <div>
                    <h3 className="text-base font-bold text-foreground mb-1.5">{prop.title}</h3>
                    <p className="text-sm leading-relaxed transition-colors duration-500 text-muted-foreground group-hover:text-foreground/70">{prop.description}</p>
                  </div>
                </div>
              </AnimateIn>
            );
          })}
        </div>

        {/* Comparison: Generic AI vs FinSight */}
        <AnimateIn from="bottom" delay={100}>
          <div className="rounded-2xl bg-foreground overflow-hidden">
            {/* Header */}
            <div className="p-8 lg:p-10 flex flex-col lg:flex-row items-start lg:items-center gap-6 lg:gap-12 border-b border-white/10">
              <div className="w-14 h-14 rounded-2xl bg-primary flex items-center justify-center flex-shrink-0">
                <BrainCircuit className="w-7 h-7 text-primary-foreground" />
              </div>
              <div className="flex-1">
                <div className="flex items-center gap-2 mb-2">
                  <Sparkles className="w-4 h-4 text-primary" />
                  <p className="text-xs font-semibold uppercase tracking-widest text-primary">
                    Financial Reasoning Layer
                  </p>
                </div>
                <h3 className="text-xl lg:text-2xl font-bold text-white mb-2">
                  Not just a chatbot. A financial reasoning layer configured to your company&apos;s logic.
                </h3>
                <p className="text-white/60 leading-relaxed max-w-2xl">
                  Standard AI reads standardised tables and ignores company semantics. FinSight is configured around the way your company defines profitability, cost and performance — so it returns the number management actually uses.
                </p>
              </div>
            </div>

            {/* Comparison table */}
            <div className="grid lg:grid-cols-2 divide-y lg:divide-y-0 lg:divide-x divide-white/10">
              {/* Generic AI column */}
              <div className="p-8 lg:p-10">
                <p className="text-xs font-semibold uppercase tracking-widest text-white/40 mb-6">Generic AI on ERP</p>
                <div className="flex flex-col gap-4">
                  {comparisonRows.map((row) => (
                    <div key={row.generic} className="flex items-start gap-3">
                      <div className="w-5 h-5 rounded-full bg-white/10 flex items-center justify-center flex-shrink-0 mt-0.5">
                        <X className="w-3 h-3 text-white/40" />
                      </div>
                      <p className="text-sm text-white/50 leading-relaxed">{row.generic}</p>
                    </div>
                  ))}
                </div>
              </div>

              {/* FinSight column */}
              <div className="p-8 lg:p-10">
                <p className="text-xs font-semibold uppercase tracking-widest text-primary mb-6">FinSight</p>
                <div className="flex flex-col gap-4">
                  {comparisonRows.map((row) => (
                    <div key={row.finsight} className="flex items-start gap-3">
                      <div className="w-5 h-5 rounded-full bg-primary/20 flex items-center justify-center flex-shrink-0 mt-0.5">
                        <Check className="w-3 h-3 text-primary" />
                      </div>
                      <p className="text-sm text-white/80 leading-relaxed">{row.finsight}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </AnimateIn>
      </div>
    </section>
  );
}
