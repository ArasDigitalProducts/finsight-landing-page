"use client";

import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { ArrowRight, ChevronDown, TrendingUp, DollarSign, BarChart2 } from "lucide-react";

const promptExamples = [
  "Show Q1 cash flow vs budget",
  "Which cost centers are over budget?",
  "Forecast revenue for next quarter",
  "Variance analysis for operating expenses",
];

const results = [
  {
    intro: "Here's your Q1 cash flow breakdown vs. budget:",
    title: "Q1 Cash Flow Summary",
    lines: [
      { label: "Operating CF", value: "€ 1.8M", delta: "+8.2%", positive: true },
      { label: "Investing CF", value: "–€ 0.6M", delta: "within plan", positive: null },
      { label: "Free Cash Flow", value: "€ 1.2M", delta: "+15.1%", positive: true },
    ],
  },
  {
    intro: "Found 3 cost centers over budget this month:",
    title: "Over-Budget Cost Centers",
    lines: [
      { label: "Marketing", value: "€ 312K", delta: "+18.4%", positive: false },
      { label: "R&D", value: "€ 487K", delta: "+9.1%", positive: false },
      { label: "Logistics", value: "€ 201K", delta: "+22.7%", positive: false },
    ],
  },
  {
    intro: "Here's the Q2 revenue forecast based on current trends:",
    title: "Q2 Revenue Forecast",
    lines: [
      { label: "Q2 Forecast", value: "€ 4.6M", delta: "+9.5% vs Q1", positive: true },
      { label: "vs Target", value: "+€ 0.3M", delta: "ahead of plan", positive: true },
      { label: "Confidence", value: "94%", delta: "high", positive: null },
    ],
  },
  {
    intro: "Operating expense variance analysis complete:",
    title: "OpEx Variance Report",
    lines: [
      { label: "Personnel", value: "€ 2.1M", delta: "+4.2%", positive: false },
      { label: "Overhead", value: "€ 0.8M", delta: "–1.8% fav.", positive: true },
      { label: "Total OpEx", value: "€ 2.9M", delta: "+2.1%", positive: false },
    ],
  },
];

export default function Hero() {
  const [promptIdx, setPromptIdx] = useState(0);
  const [displayText, setDisplayText] = useState("");
  const [typing, setTyping] = useState(true);
  const [showResult, setShowResult] = useState(false);

  useEffect(() => {
    const target = promptExamples[promptIdx];
    let i = 0;
    setDisplayText("");
    setTyping(true);
    setShowResult(false);

    const typeInterval = setInterval(() => {
      if (i < target.length) {
        setDisplayText(target.slice(0, i + 1));
        i++;
      } else {
        clearInterval(typeInterval);
        setTyping(false);
        setTimeout(() => setShowResult(true), 300);
        setTimeout(() => {
          setShowResult(false);
          setTimeout(() => {
            setPromptIdx((prev) => (prev + 1) % promptExamples.length);
          }, 400);
        }, 3000);
      }
    }, 48);

    return () => clearInterval(typeInterval);
  }, [promptIdx]);

  return (
    <section className="relative min-h-screen flex flex-col items-center justify-center overflow-hidden bg-white pt-16">
      {/* Background grid */}
      <div
        className="absolute inset-0 opacity-[0.035] pointer-events-none"
        style={{
          backgroundImage: `linear-gradient(oklch(0.48 0.22 264) 1px, transparent 1px),
                            linear-gradient(90deg, oklch(0.48 0.22 264) 1px, transparent 1px)`,
          backgroundSize: "48px 48px",
        }}
      />
      {/* Gradient orbs */}
      <div className="absolute top-1/4 left-1/4 w-96 h-96 rounded-full bg-primary/10 blur-3xl pointer-events-none" />
      <div className="absolute bottom-1/4 right-1/4 w-80 h-80 rounded-full bg-primary/8 blur-3xl pointer-events-none" />

      <div className="relative max-w-6xl mx-auto px-6 py-20 grid lg:grid-cols-2 gap-16 items-center w-full">
        {/* Left — copy */}
        <div className="flex flex-col gap-6">
          <Badge
            variant="secondary"
            className="w-fit bg-primary/10 text-primary border-0 font-semibold text-xs uppercase tracking-wider px-3 py-1.5"
          >
            AI-Powered Financial Controlling
          </Badge>

          <h1 className="text-5xl lg:text-6xl xl:text-7xl font-black leading-[1.04] tracking-tight text-foreground">
            A single prompt.
            <br />
            <span className="text-primary">Finance controlling.</span>
          </h1>

          <p className="text-lg text-muted-foreground leading-relaxed max-w-md">
            Connect your ERP, ask in plain language, get instant insights.
            No SQL. No dashboards. No waiting for the finance team.
          </p>

          <div className="flex flex-wrap gap-3 pt-2">
            <Button
              asChild
              size="lg"
              className="group bg-primary hover:bg-primary/90 text-primary-foreground font-semibold rounded-lg gap-2"
            >
              <a href="#contact">
                Get Early Access
                <ArrowRight className="w-4 h-4 transition-transform duration-200 group-hover:translate-x-0.5" />
              </a>
            </Button>
            <Button
              asChild
              size="lg"
              variant="outline"
              className="font-semibold rounded-lg border-border hover:bg-muted"
            >
              <a href="#how-it-works">See How It Works</a>
            </Button>
          </div>

          <div className="flex items-center gap-6 pt-2">
            <div className="flex items-center gap-2 text-sm text-muted-foreground">
              <div className="w-1.5 h-1.5 rounded-full bg-green-500" />
              No credit card required
            </div>
            <div className="flex items-center gap-2 text-sm text-muted-foreground">
              <div className="w-1.5 h-1.5 rounded-full bg-green-500" />
              SOC 2 compliant
            </div>
          </div>
        </div>

        {/* Right — animated terminal mockup */}
        <div className="flex justify-center lg:justify-end">
          <div className="w-full max-w-md rounded-2xl border border-border shadow-2xl shadow-primary/10 overflow-hidden bg-white">
            {/* Terminal header */}
            <div className="flex items-center gap-2 px-4 py-3 bg-foreground/[0.03] border-b border-border">
              <div className="w-3 h-3 rounded-full bg-red-400" />
              <div className="w-3 h-3 rounded-full bg-yellow-400" />
              <div className="w-3 h-3 rounded-full bg-green-400" />
              <span className="ml-2 text-xs text-muted-foreground font-mono">finsight — ERP Query</span>
            </div>

            {/* Prompt area */}
            <div className="p-5 border-b border-border">
              <div className="flex items-start gap-3">
                <div className="w-7 h-7 rounded-full bg-primary flex items-center justify-center flex-shrink-0 mt-0.5">
                  <span className="text-primary-foreground text-xs font-black">You</span>
                </div>
                <div className="flex-1 min-h-[28px]">
                  <p className="text-sm font-medium text-foreground">
                    {displayText}
                    {typing && (
                      <span className="inline-block w-0.5 h-4 bg-primary ml-0.5 animate-pulse align-middle" />
                    )}
                  </p>
                </div>
              </div>
            </div>

            {/* Result area */}
            <div
              className={`transition-all duration-500 ${
                showResult ? "opacity-100 max-h-64" : "opacity-0 max-h-0"
              } overflow-hidden`}
            >
              <div className="p-5">
                <div className="flex items-start gap-3 mb-4">
                  <div className="w-7 h-7 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0 mt-0.5">
                    <span className="text-primary text-xs font-black">AI</span>
                  </div>
                  <p className="text-sm text-muted-foreground">
                    {results[promptIdx].intro}
                  </p>
                </div>

                <div className="ml-10 rounded-xl border border-border overflow-hidden">
                  <div className="bg-primary/5 px-4 py-2.5 flex items-center gap-2 border-b border-border">
                    <BarChart2 className="w-4 h-4 text-primary" />
                    <span className="text-xs font-semibold text-foreground">{results[promptIdx].title}</span>
                  </div>
                  <div className="divide-y divide-border">
                    {results[promptIdx].lines.map((row) => (
                      <div key={row.label} className="flex items-center justify-between px-4 py-2.5">
                        <span className="text-xs text-muted-foreground">{row.label}</span>
                        <div className="flex items-center gap-2">
                          <span className="text-sm font-semibold text-foreground">{row.value}</span>
                          {row.positive !== null && (
                            <span
                              className={`text-xs font-medium flex items-center gap-0.5 ${
                                row.positive ? "text-green-600" : "text-red-500"
                              }`}
                            >
                              {row.positive ? (
                                <TrendingUp className="w-3 h-3" />
                              ) : (
                                <DollarSign className="w-3 h-3" />
                              )}
                              {row.delta}
                            </span>
                          )}
                          {row.positive === null && (
                            <span className="text-xs text-muted-foreground">{row.delta}</span>
                          )}
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>

            {/* Loading state when not showing result and not typing */}
            {!typing && !showResult && (
              <div className="p-5 flex items-center gap-3 ml-10">
                <div className="flex gap-1">
                  <div className="w-2 h-2 rounded-full bg-primary/40 animate-bounce [animation-delay:0ms]" />
                  <div className="w-2 h-2 rounded-full bg-primary/40 animate-bounce [animation-delay:150ms]" />
                  <div className="w-2 h-2 rounded-full bg-primary/40 animate-bounce [animation-delay:300ms]" />
                </div>
                <span className="text-xs text-muted-foreground">Analysing ERP data...</span>
              </div>
            )}

            {/* Footer */}
            <div className="px-5 py-3 bg-foreground/[0.02] border-t border-border">
              <p className="text-xs text-muted-foreground text-center">
                Powered by FinSight AI
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll cue */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-1 animate-bounce">
        <span className="text-xs text-muted-foreground">Scroll to explore</span>
        <ChevronDown className="w-4 h-4 text-muted-foreground" />
      </div>
    </section>
  );
}
