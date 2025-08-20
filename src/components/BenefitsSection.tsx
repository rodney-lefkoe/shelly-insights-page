import { Card } from "@/components/ui/card";

export function BenefitsSection() {
  const benefits = [
    {
      title: "Already Making Progress",
      description: "You've taken a big step by signing up for sessions. These insights are here to help you keep going.",
      gradient: "bg-gradient-secondary"
    },
    {
      title: "Simple & Practical",
      description: "Each post offers insights about how beliefs shape your thoughts, emotions, and behaviors—and how you can change them.",
      gradient: "bg-gradient-accent"
    },
    {
      title: "Thoughtful Support",
      description: "Written by Shelly Lefkoe, designed to support what you're already doing in your sessions. No pressure. No overwhelm.",
      gradient: "bg-gradient-primary"
    }
  ];

  return (
    <section className="py-20 px-6 bg-background">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-foreground">
            Real Tools & Thoughtful Encouragement
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Sent straight to your inbox, right when you need them most
          </p>
        </div>
        
        <div className="grid md:grid-cols-3 gap-8">
          {benefits.map((benefit, index) => (
            <Card 
              key={index}
              className="relative overflow-hidden border-0 shadow-soft hover:shadow-glow transition-all duration-300 hover:-translate-y-2 group"
            >
              <div className={`absolute inset-0 ${benefit.gradient} opacity-10 group-hover:opacity-20 transition-opacity duration-300`}></div>
              <div className="relative p-8">
                <h3 className="text-2xl font-bold mb-4 text-foreground">
                  {benefit.title}
                </h3>
                <p className="text-muted-foreground leading-relaxed">
                  {benefit.description}
                </p>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}