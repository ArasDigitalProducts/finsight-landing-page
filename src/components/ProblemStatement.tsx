import { Database, FileSpreadsheet, Users, BarChart } from "lucide-react";
import { Card } from "@/components/ui/card";
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
    <section id="problem" className="py-24 bg-foreground/[0.02] border-y border-border">
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
              <AnimateIn key={problem.text} delay={i * 80} className="h-full">
                <Card className="group h-full p-8 rounded-2xl border border-border bg-foreground/[0.015] shadow-none transition-all duration-500 ease-out hover:-translate-y-1.5 hover:border-primary/20 hover:shadow-lg hover:shadow-primary/10">
                  <div className="w-12 h-12 rounded-xl flex items-center justify-center mb-6 transition-all duration-500 bg-foreground/[0.06] text-foreground group-hover:bg-primary/10 group-hover:text-primary">
                    <Icon className="w-6 h-6" />
                  </div>
                  <p className="text-sm leading-relaxed transition-colors duration-500 text-muted-foreground group-hover:text-foreground/70">{problem.text}</p>
                </Card>
              </AnimateIn>
            );
          })}
        </div>
      </div>
    </section>
  );
}
