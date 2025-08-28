import heroImage from "@/assets/happy-dog-hero.jpg";
import logoImage from "@/assets/pets-elite-logo.png";

export const HeroSection = () => {
  return (
    <section className="bg-gradient-to-b from-background to-pet-cream py-16 px-6">
      <div className="absolute top-4 left-4 md:top-6 md:left-6">
        <img 
          src={logoImage} 
          alt="Pets Elite Logo" 
          className="h-10 md:h-12 w-auto"
        />
      </div>
      <div className="max-w-4xl mx-auto text-center pt-16 md:pt-20">
        <h1 className="text-4xl md:text-6xl font-bold text-foreground mb-6 leading-tight">
          Give Your Dog the Healthy Treats They Deserve
        </h1>
        <p className="text-xl md:text-2xl text-warm-gray mb-8 max-w-3xl mx-auto leading-relaxed">
          Download our FREE Pet Treat Guide — discover the best treats for your dog's age and health.
        </p>
        <div className="relative max-w-2xl mx-auto">
          <img
            src="/lovable-uploads/198ed4f5-f83d-4fd9-8ac8-ef483bedf315.png"
            alt="Happy smiling pit bull dog with tongue out"
            className="w-full h-auto rounded-2xl shadow-soft"
          />
        </div>
      </div>
    </section>
  );
};