import { Database, FileSpreadsheet, Users, BarChart } from "lucide-react";
import AnimateIn from "@/components/AnimateIn";

const problems = [
  {
    icon: Database,
    text: "ERP systems manage transactions, not company-specific financial reasoning",
  },
  {
    icon: FileSpreadsheet,
    text: "Hidden logic lives in spreadsheets and in the heads of specialists",
  },
  {
    icon: Users,
    text: "Executives still depend on analysts to interpret data before decisions can be made",
  },
  {
    icon: BarChart,
    text: "Dashboards show what happened — not why it happened, or what to adjust",
  },
];

export default function ProblemStatement() {
  return (
    <section className="py-24 bg-foreground/[0.02] border-y border-border">
      <div className="max-w-6xl mx-auto px-6">
        <AnimateIn className="max-w-3xl mx-auto text-center mb-16">
          <p className="text-xs font-semibold uppercase tracking-widest text-primary mb-4">
            The Problem
          </p>
          <h2 className="text-4xl lg:text-5xl font-black tracking-tight text-foreground mb-4">
            ERP stores the numbers.{" "}
            <span className="text-primary">Financial reasoning happens somewhere else.</span>
          </h2>
          <p className="text-lg text-muted-foreground leading-relaxed">
            The gap between your ERP data and a decision-grade financial answer is filled by analysts, spreadsheets and meetings — not by the system itself.
          </p>
        </AnimateIn>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {problems.map((problem, i) => {
            const Icon = problem.icon;
            return (
              <AnimateIn key={problem.text} delay={i * 80}>
                <div className="rounded-2xl border border-border bg-white p-6 h-full flex flex-col gap-4">
                  <div className="w-10 h-10 rounded-xl bg-foreground/[0.06] flex items-center justify-center text-foreground/60">
                    <Icon className="w-5 h-5" />
                  </div>
                  <p className="text-sm text-muted-foreground leading-relaxed">{problem.text}</p>
                </div>
              </AnimateIn>
            );
          })}
        </div>
      </div>
    </section>
  );
}
