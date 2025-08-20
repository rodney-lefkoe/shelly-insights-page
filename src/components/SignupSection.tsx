import { forwardRef } from "react";

export const SignupSection = forwardRef<HTMLElement>((_, ref) => {
  return (
    <section ref={ref} className="py-20 px-6 bg-gradient-primary">
      <div className="max-w-2xl mx-auto text-center">
        <h2 className="text-4xl md:text-5xl font-bold mb-6 text-white">
          Ready to Transform?
        </h2>
        <p className="text-xl text-white/90 mb-12 leading-relaxed">
          If you'd like that kind of support, just enter your details below.
        </p>
        
        <div className="bg-white/10 backdrop-blur-lg rounded-3xl p-8 border border-white/20 shadow-glow">
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
              <label htmlFor="inf_field_FirstName" className="block text-white font-medium mb-2 text-left">
                First Name *
              </label>
              <input 
                id="inf_field_FirstName" 
                name="inf_field_FirstName" 
                placeholder="Enter your first name" 
                type="text" 
                className="w-full px-4 py-4 rounded-xl border-0 bg-white/20 backdrop-blur-sm text-white placeholder-white/70 focus:outline-none focus:ring-2 focus:ring-white/50 transition-all duration-300"
                required
              />
            </div>
            
            <div className="infusion-field">
              <label htmlFor="inf_field_Email" className="block text-white font-medium mb-2 text-left">
                Email *
              </label>
              <input 
                id="inf_field_Email" 
                name="inf_field_Email" 
                placeholder="Enter your email address" 
                type="email" 
                className="w-full px-4 py-4 rounded-xl border-0 bg-white/20 backdrop-blur-sm text-white placeholder-white/70 focus:outline-none focus:ring-2 focus:ring-white/50 transition-all duration-300"
                required
              />
            </div>
            
            <div className="infusion-submit pt-4">
              <button 
                className="infusion-recaptcha w-full bg-white text-primary font-bold py-4 px-8 rounded-xl hover:bg-white/90 transition-all duration-300 hover:scale-105 shadow-lg text-lg" 
                id="recaptcha_9f5f191460ceafa7ef255e26360b663a" 
                type="submit"
              >
                Sign Me Up
              </button>
            </div>
          </form>
        </div>
        
        <p className="text-white/70 text-sm mt-6">
          Join thousands who are already transforming their lives, one insight at a time.
        </p>
      </div>
      
      {/* External scripts */}
      <script type="text/javascript" src="https://recreateyourlife.infusionsoft.app/app/webTracking/getTrackingCode"></script>
      <script type="text/javascript" src="https://recreateyourlife.infusionsoft.com/resources/external/recaptcha/production/recaptcha.js?b=1.70.0.844065-hf-202508141354"></script>
      <script src="https://www.google.com/recaptcha/api.js?onload=onloadInfusionRecaptchaCallback&render=explicit" async defer></script>
      <script type="text/javascript" src="https://recreateyourlife.infusionsoft.com/app/timezone/timezoneInputJs?xid=9f5f191460ceafa7ef255e26360b663a"></script>
      <script type="text/javascript" src="https://recreateyourlife.infusionsoft.com/js/jquery/jquery-3.3.1.js"></script>
      <script type="text/javascript" src="https://recreateyourlife.infusionsoft.app/app/webform/overwriteRefererJs"></script>
    </section>
  );
});