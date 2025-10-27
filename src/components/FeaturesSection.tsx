import { Gauge, Users, BarChart3, Bell, Lock, Zap } from "lucide-react";

const features = [
  {
    icon: Gauge,
    title: "Live Scorecards",
    description: "Real-time dashboards for CEO, Growth, Fulfilment, and Support teams with instant visibility.",
  },
  {
    icon: Users,
    title: "Role-Based Access",
    description: "Assign Engine Heads and Metric Owners with clear ownership and accountability.",
  },
  {
    icon: BarChart3,
    title: "Measurable Metrics",
    description: "Define Hero and Engine metrics that align with your organization's strategic goals.",
  },
  {
    icon: Bell,
    title: "Weekly Reporting",
    description: "Automated reminders and progress tracking to keep everyone aligned and on schedule.",
  },
  {
    icon: Lock,
    title: "Strategic Alignment",
    description: "Scorecards unlock only when core metrics are defined, ensuring strategic clarity.",
  },
  {
    icon: Zap,
    title: "Fast & Simple",
    description: "Get started in minutes. No complex setup. Just clarity, metrics, and action.",
  },
];

export const FeaturesSection = () => {
  return (
    <section className="py-20 lg:py-32">
      <div className="container mx-auto px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <h2 className="text-4xl lg:text-5xl font-bold">
            Everything you need to scale
          </h2>
          <p className="text-xl text-muted-foreground">
            Built for CEOs who want clarity, teams who need focus, and organizations ready to grow.
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature) => {
            const Icon = feature.icon;
            return (
              <div
                key={feature.title}
                className="group p-8 rounded-3xl bg-card border border-border hover:border-primary/50 transition-all duration-300 hover:shadow-card"
              >
                <div className="space-y-4">
                  <div className="inline-flex h-12 w-12 items-center justify-center rounded-2xl bg-primary/10 text-primary group-hover:bg-primary group-hover:text-primary-foreground transition-colors">
                    <Icon className="h-6 w-6" />
                  </div>
                  <h3 className="text-xl font-bold">{feature.title}</h3>
                  <p className="text-muted-foreground leading-relaxed">
                    {feature.description}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
