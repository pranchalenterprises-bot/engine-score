import { TrendingUp, CheckCircle2, HeadphonesIcon } from "lucide-react";
import { Card } from "@/components/ui/card";

const engines = [
  {
    name: "Growth Engine",
    icon: TrendingUp,
    color: "growth",
    gradient: "gradient-growth",
    description: "Track user acquisition, revenue metrics, and engagement KPIs. Measure what drives your business forward.",
    metrics: ["User Growth", "Revenue", "Conversion Rate", "CAC/LTV"],
  },
  {
    name: "Fulfilment Engine",
    icon: CheckCircle2,
    color: "fulfilment",
    gradient: "gradient-fulfilment",
    description: "Monitor delivery speed, output quality, and process efficiency. Ensure teams deliver on promises.",
    metrics: ["Delivery Time", "Quality Score", "Output Volume", "Process Efficiency"],
  },
  {
    name: "Support Engine",
    icon: HeadphonesIcon,
    color: "support",
    gradient: "gradient-support",
    description: "Measure customer satisfaction, response times, and retention. Keep customers happy and loyal.",
    metrics: ["CSAT Score", "Response Time", "Ticket Resolution", "Retention Rate"],
  },
];

export const EnginesSection = () => {
  return (
    <section className="py-20 lg:py-32 bg-secondary/50">
      <div className="container mx-auto px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <h2 className="text-4xl lg:text-5xl font-bold">
            Three Engines. One Platform.
          </h2>
          <p className="text-xl text-muted-foreground">
            Structure your organization into measurable engines with dedicated scorecards for each team.
          </p>
        </div>
        
        <div className="grid md:grid-cols-3 gap-8">
          {engines.map((engine) => {
            const Icon = engine.icon;
            return (
              <Card
                key={engine.name}
                className="relative overflow-hidden p-8 rounded-3xl shadow-card hover:shadow-hero transition-all duration-300 hover:-translate-y-2 border-2"
              >
                <div className="space-y-6">
                  <div className={`inline-flex h-14 w-14 items-center justify-center rounded-2xl bg-${engine.gradient} shadow-soft`}>
                    <Icon className={`h-7 w-7 text-${engine.color}-foreground`} />
                  </div>
                  
                  <h3 className="text-2xl font-bold">{engine.name}</h3>
                  
                  <p className="text-muted-foreground leading-relaxed">
                    {engine.description}
                  </p>
                  
                  <div className="space-y-2 pt-4">
                    <p className="text-sm font-semibold text-foreground">Key Metrics:</p>
                    <ul className="space-y-2">
                      {engine.metrics.map((metric) => (
                        <li key={metric} className="flex items-center gap-2 text-sm text-muted-foreground">
                          <div className={`h-1.5 w-1.5 rounded-full bg-${engine.color}`} />
                          {metric}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
};
