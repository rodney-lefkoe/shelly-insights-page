const Confirmation = () => {
  return (
    <main className="min-h-screen bg-background">
      {/* Header */}
      <div className="py-16 bg-muted/80">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h1 className="text-4xl md:text-6xl font-bold mb-8 bg-gradient-primary bg-clip-text text-transparent">
            You're in.
          </h1>
          <p className="text-xl md:text-2xl text-foreground">
            Thanks for signing up.
          </p>
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-3xl mx-auto px-6 py-16">
        <div className="space-y-6 text-lg leading-relaxed text-foreground">
          <p>I'm so glad to be staying in touch with you between our sessions.</p>
          
          <p>You'll be receiving thoughtful blog posts from me—short reads that share tools, insights, and encouragement to help support the changes you're making.</p>
          
          <p>If you don't see the first email soon, check your spam or promotions folder and move it to your inbox so you don't miss future updates.</p>
          
          <p>I'm honored to be part of your journey.</p>
          
          <div className="mt-12 pt-8 border-t border-border">
            <p className="text-lg font-medium">Warmly,</p>
            <p className="text-lg font-medium mt-2">Shelly</p>
          </div>
        </div>
      </div>
    </main>
  );
};

export default Confirmation;