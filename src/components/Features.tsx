import { MessageSquare, BarChart3, Zap, Shield } from "lucide-react";
import { Card } from "@/components/ui/card";
import AnimateIn from "@/components/AnimateIn";

const features = [
  {
    icon: MessageSquare,
    title: "Natural Language Queries",
    description:
      "Ask questions in plain language — no SQL, no formulas, no training required. FinSight understands financial terminology out of the box.",
    highlight: false,
  },
  {
    icon: BarChart3,
    title: "ERP Data Analysis",
    description:
      "Connect directly to your ERP and let AI agents query, aggregate and interpret your financial data in real time.",
    highlight: true,
  },
  {
    icon: Zap,
    title: "Automated Reporting",
    description:
      "Generate controlling reports — variance analyses, budget reviews, cash flow statements — in seconds, not hours.",
    highlight: false,
  },
  {
    icon: Shield,
    title: "Audit-Ready Insights",
    description:
      "Every insight is fully traceable back to source data records. SOC 2 compliant with role-based access control.",
    highlight: false,
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
            Everything you need to control your finances.
          </h2>
          <p className="text-lg text-muted-foreground">
            From ad-hoc queries to scheduled reporting, FinSight covers the full spectrum of financial controlling workflows.
          </p>
        </AnimateIn>

        {/* Feature grid */}
        <div className="grid sm:grid-cols-2 gap-6">
          {features.map((feature, i) => {
            const Icon = feature.icon;
            return (
              <AnimateIn key={feature.title} delay={i * 80}>
                <Card
                  className={`p-8 rounded-2xl border transition-shadow hover:shadow-lg hover:shadow-primary/5 ${
                    feature.highlight
                      ? "border-primary/30 bg-primary/[0.03]"
                      : "border-border bg-white"
                  }`}
                >
                  <div
                    className={`w-12 h-12 rounded-xl flex items-center justify-center mb-6 ${
                      feature.highlight ? "bg-primary text-primary-foreground" : "bg-foreground/[0.06] text-foreground"
                    }`}
                  >
                    <Icon className="w-6 h-6" />
                  </div>
                  <h3 className="text-xl font-bold text-foreground mb-3">{feature.title}</h3>
                  <p className="text-muted-foreground leading-relaxed">{feature.description}</p>
                </Card>
              </AnimateIn>
            );
          })}
        </div>
      </div>
    </section>
  );
}
