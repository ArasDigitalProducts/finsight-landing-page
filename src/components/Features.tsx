import { MessageSquare, BarChart3, Zap, Shield } from "lucide-react";
import { Card } from "@/components/ui/card";
import AnimateIn from "@/components/AnimateIn";

const features = [
  {
    icon: MessageSquare,
    title: "Natural Language Queries",
    description:
      "Ask financial questions in plain language — get decision-grade answers grounded in your company's KPI definitions, cost structures and managerial reporting logic. No SQL, no dashboard building, no manual reconciliation.",
  },
  {
    icon: BarChart3,
    title: "ERP Data Analysis",
    description:
      "FinSight applies a configured financial reasoning layer on top of your ERP data. It maps your chart of accounts, cost centers and managerial logic to produce structured explanations for decision-making.",
  },
  {
    icon: Zap,
    title: "Automated Reporting",
    description:
      "Structured financial reasoning also enables faster reporting distribution. Generate controlled reports — variance analyses, EBITDA bridges, budget reviews — as an output of the reasoning layer, not a separate workflow.",
  },
  {
    icon: Shield,
    title: "Audit-Ready Insights",
    description:
      "Every output is fully traceable to source data. FinSight encodes your financial logic explicitly, making reasoning transparent and auditable by design. Role-based access control with SOC 2 Type II certification in progress.",
  },
];

export default function Features() {
  return (
    <section id="features" className="py-24 bg-white">
      <div className="max-w-6xl mx-auto px-6">
        {/* Header */}
        <AnimateIn className="max-w-2xl mb-16">
          <p className="text-xs font-semibold uppercase tracking-widest text-primary mb-4">
            Capabilities
          </p>
          <h2 className="text-4xl lg:text-5xl font-black tracking-tight text-foreground mb-4">
            From ERP data to decision-grade financial answers.
          </h2>
          <p className="text-lg text-muted-foreground leading-relaxed">
            FinSight covers the full spectrum of financial controlling — configured to your company&apos;s financial model, not generic AI defaults.
          </p>
        </AnimateIn>

        {/* Feature grid */}
        <div className="grid sm:grid-cols-2 gap-6">
          {features.map((feature, i) => {
            const Icon = feature.icon;
            return (
              <AnimateIn key={feature.title} delay={i * 80} className="h-full">
                <Card
                  className="group h-full p-8 rounded-2xl border border-border bg-foreground/[0.015] shadow-none transition-all duration-500 ease-out hover:-translate-y-1.5 hover:border-primary/20 hover:shadow-lg hover:shadow-primary/10"
                >
                  <div className="w-12 h-12 rounded-xl flex items-center justify-center mb-6 transition-all duration-500 bg-foreground/[0.06] text-foreground group-hover:bg-primary/10 group-hover:text-primary">
                    <Icon className="w-6 h-6" />
                  </div>
                  <h3 className="text-xl font-bold mb-3 text-foreground">{feature.title}</h3>
                  <p className="leading-relaxed transition-colors duration-500 text-muted-foreground group-hover:text-foreground/70">{feature.description}</p>
                </Card>
              </AnimateIn>
            );
          })}
        </div>
      </div>
    </section>
  );
}
