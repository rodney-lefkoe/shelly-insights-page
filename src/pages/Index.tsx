import { useRef } from "react";

const Index = () => {
  const signupRef = useRef<HTMLElement>(null);

  return (
    <main className="min-h-screen bg-background">
      {/* Header */}
      <div className="py-16 bg-muted/80">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h1 className="text-4xl md:text-6xl font-bold mb-8 bg-gradient-primary bg-clip-text text-transparent">
            Get thoughtful insights to support the changes you're already making
          </h1>
          <p className="text-xl md:text-2xl text-foreground">
            Short reads. Big impact. Right when you need them.
          </p>
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-3xl mx-auto px-6 py-16">
        <div className="space-y-6 text-lg leading-relaxed text-foreground mb-12">
          <p>You've already taken a big step by signing up for sessions.</p>
          <p>These blog posts are here to help you keep going.</p>
          <p>Each one offers a simple, practical insight about how beliefs shape your thoughts, emotions, and behaviors—and how you can change them.</p>
          <p>They're written by me, Shelly Lefkoe, and designed to support what you're already doing in your sessions.</p>
          <p>No pressure. No overwhelm. Just real tools and thoughtful encouragement, sent straight to your inbox.</p>
          <p className="font-medium">If you'd like that kind of support, just enter your email below.</p>
        </div>

        {/* Signup Form */}
        <div className="bg-gradient-to-br from-transformation-orange/5 to-transformation-pink/5 rounded-2xl p-8 border border-transformation-pink/20">
          <form 
            acceptCharset="UTF-8" 
            action="https://recreateyourlife.infusionsoft.com/app/form/process/9f5f191460ceafa7ef255e26360b663a" 
            className="infusion-form space-y-6" 
            id="inf_form_9f5f191460ceafa7ef255e26360b663a" 
            method="POST"
          >
            <input name="inf_form_xid" type="hidden" value="9f5f191460ceafa7ef255e26360b663a" />
            <input name="inf_form_name" type="hidden" value="Session Client~br~Subscribe ML Blog" />
            <input name="infusionsoft_version" type="hidden" value="1.70.0.844065" />
            
            <div className="infusion-field">
              <label htmlFor="inf_field_FirstName" className="block text-foreground font-medium mb-2">
                Name:
              </label>
              <input 
                id="inf_field_FirstName" 
                name="inf_field_FirstName" 
                placeholder="First Name *" 
                type="text" 
                className="w-full px-4 py-3 rounded-lg border border-input bg-background focus:outline-none focus:ring-2 focus:ring-primary transition-all duration-200"
                required
              />
            </div>
            
            <div className="infusion-field">
              <label htmlFor="inf_field_Email" className="block text-foreground font-medium mb-2">
                Email:
              </label>
              <input 
                id="inf_field_Email" 
                name="inf_field_Email" 
                placeholder="Email *" 
                type="email" 
                className="w-full px-4 py-3 rounded-lg border border-input bg-background focus:outline-none focus:ring-2 focus:ring-primary transition-all duration-200"
                required
              />
            </div>
            
            <div className="infusion-submit">
              <button 
                className="infusion-recaptcha w-full bg-gradient-primary text-white font-semibold py-4 px-8 rounded-lg hover:opacity-90 transition-all duration-300 hover:scale-[1.02] shadow-soft text-lg" 
                id="recaptcha_9f5f191460ceafa7ef255e26360b663a" 
                type="submit"
              >
                Sign me up
              </button>
            </div>
          </form>
        </div>
      </div>
      
      {/* External scripts */}
      <script type="text/javascript" src="https://recreateyourlife.infusionsoft.app/app/webTracking/getTrackingCode"></script>
      <script type="text/javascript" src="https://recreateyourlife.infusionsoft.com/resources/external/recaptcha/production/recaptcha.js?b=1.70.0.844065-hf-202508141354"></script>
      <script src="https://www.google.com/recaptcha/api.js?onload=onloadInfusionRecaptchaCallback&render=explicit" async defer></script>
      <script type="text/javascript" src="https://recreateyourlife.infusionsoft.com/app/timezone/timezoneInputJs?xid=9f5f191460ceafa7ef255e26360b663a"></script>
      <script type="text/javascript" src="https://recreateyourlife.infusionsoft.com/js/jquery/jquery-3.3.1.js"></script>
      <script type="text/javascript" src="https://recreateyourlife.infusionsoft.app/app/webform/overwriteRefererJs"></script>
    </main>
  );
};

export default Index;
