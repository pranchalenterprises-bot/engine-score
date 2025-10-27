import { Button } from "@/components/ui/button";
import { ArrowRight, TrendingUp, Target, Users } from "lucide-react";
import heroDashboard from "@/assets/hero-dashboard.jpg";

export const HeroSection = () => {
  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-background via-background to-primary/5 py-20 lg:py-32">
      <div className="container mx-auto px-6 lg:px-8">
        <div className="grid gap-12 lg:grid-cols-2 lg:gap-16 items-center">
          <div className="space-y-8">
            <div className="inline-flex items-center gap-2 rounded-full bg-primary/10 px-4 py-2 text-sm font-medium text-primary">
              <Target className="h-4 w-4" />
              Scale Your Organization
            </div>
            
            <h1 className="text-5xl lg:text-6xl xl:text-7xl font-bold leading-tight tracking-tight">
              Run your company like an{" "}
              <span className="bg-gradient-hero bg-clip-text text-transparent">
                engine
              </span>
            </h1>
            
            <p className="text-xl text-muted-foreground leading-relaxed max-w-xl">
              Align growth, fulfilment, and support through live scorecards and measurable metrics. 
              Give your teams clarity, accountability, and visibility.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4">
              <Button variant="hero" size="lg" className="group">
                Get Started Free
                <ArrowRight className="transition-transform group-hover:translate-x-1" />
              </Button>
              <Button variant="outline" size="lg">
                Watch Demo
              </Button>
            </div>
            
            <div className="flex items-center gap-8 pt-4">
              <div className="flex items-center gap-2">
                <div className="flex -space-x-2">
                  <div className="h-8 w-8 rounded-full bg-gradient-growth ring-2 ring-background" />
                  <div className="h-8 w-8 rounded-full bg-gradient-fulfilment ring-2 ring-background" />
                  <div className="h-8 w-8 rounded-full bg-gradient-support ring-2 ring-background" />
                </div>
                <p className="text-sm text-muted-foreground">
                  Trusted by <span className="font-semibold text-foreground">100+</span> CEOs
                </p>
              </div>
            </div>
          </div>
          
          <div className="relative">
            <div className="absolute inset-0 bg-gradient-hero opacity-20 blur-3xl rounded-full" />
            <div className="relative rounded-3xl overflow-hidden shadow-hero border border-border/50">
              <img
                src={heroDashboard}
                alt="ScaleMyOrg.ai Dashboard showing Growth, Fulfilment, and Support engines"
                className="w-full h-auto"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
