import { BrainCircuit, Clock3, BarChart2, Users, Layers, Sparkles } from "lucide-react";

const valueProps = [
  {
    icon: Clock3,
    title: "No more waiting for reports",
    description:
      "Stop submitting report requests and waiting days for answers. FinSight queries your data live and responds in seconds.",
  },
  {
    icon: BarChart2,
    title: "No BI tool required",
    description:
      "Skip the Tableau license, the dashboard maintenance, and the training. Ask your question in plain language and get the answer directly.",
  },
  {
    icon: Users,
    title: "No analyst bottleneck",
    description:
      "Managers and controllers get direct access to financial insights — without routing every ad-hoc question through the finance team.",
  },
  {
    icon: Layers,
    title: "Multi-step reasoning",
    description:
      "FinSight doesn't just fetch rows — it reasons across entities, time periods and hierarchies to deliver answers that require real financial understanding.",
  },
];

export default function ERPIntegration() {
  return (
    <section id="why-finsight" className="py-24 bg-white">
      <div className="max-w-6xl mx-auto px-6">
        {/* Header */}
        <div className="grid lg:grid-cols-2 gap-16 items-start mb-16">
          <div>
            <p className="text-xs font-semibold uppercase tracking-widest text-primary mb-4">
              Why FinSight
            </p>
            <h2 className="text-4xl lg:text-5xl font-black tracking-tight text-foreground">
              Your ERP data. Instantly actionable.
            </h2>
          </div>
          <div className="lg:pt-12">
            <p className="text-lg text-muted-foreground leading-relaxed">
              Traditional financial reporting is slow, rigid and bottlenecked by tooling and people. FinSight replaces that chain with a single AI layer that sits directly on top of your data.
            </p>
          </div>
        </div>

        {/* Value prop grid */}
        <div className="grid sm:grid-cols-2 gap-6 mb-16">
          {valueProps.map((prop) => {
            const Icon = prop.icon;
            return (
              <div
                key={prop.title}
                className="rounded-2xl border border-border bg-foreground/[0.015] p-7 flex gap-5 hover:border-primary/20 hover:shadow-md hover:shadow-primary/5 transition-all"
              >
                <div className="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center flex-shrink-0 mt-0.5">
                  <Icon className="w-5 h-5 text-primary" />
                </div>
                <div>
                  <h3 className="text-base font-bold text-foreground mb-1.5">{prop.title}</h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">{prop.description}</p>
                </div>
              </div>
            );
          })}
        </div>

        {/* AI agent callout */}
        <div className="rounded-2xl bg-foreground p-8 lg:p-10 flex flex-col lg:flex-row items-start lg:items-center gap-6 lg:gap-12">
          <div className="w-14 h-14 rounded-2xl bg-primary flex items-center justify-center flex-shrink-0">
            <BrainCircuit className="w-7 h-7 text-primary-foreground" />
          </div>
          <div className="flex-1">
            <div className="flex items-center gap-2 mb-2">
              <Sparkles className="w-4 h-4 text-primary" />
              <p className="text-xs font-semibold uppercase tracking-widest text-primary">
                Agentic AI
              </p>
            </div>
            <h3 className="text-xl lg:text-2xl font-bold text-white mb-2">
              Not a chatbot. An AI agent.
            </h3>
            <p className="text-white/60 leading-relaxed max-w-2xl">
              FinSight uses an autonomous agent architecture that breaks down complex financial questions into sub-tasks, queries multiple data sources, validates results and synthesises a coherent answer — the same way a skilled analyst would, but in seconds.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
