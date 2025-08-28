import heroImage from "@/assets/happy-dog-hero.jpg";
import logoImage from "@/assets/pets-elite-logo.png";

export const HeroSection = () => {
  return (
    <section className="bg-gradient-to-b from-background to-pet-cream py-16 px-6 relative">
      <div className="absolute top-6 left-6">
        <img 
          src={logoImage} 
          alt="Pets Elite Logo" 
          className="h-12 md:h-16 w-auto"
        />
      </div>
      <div className="max-w-4xl mx-auto text-center">
        <h1 className="text-4xl md:text-6xl font-bold text-foreground mb-6 leading-tight">
          Give Your Dog the Healthy Treats They Deserve
        </h1>
        <p className="text-xl md:text-2xl text-warm-gray mb-8 max-w-3xl mx-auto leading-relaxed">
          Download our FREE Pet Treat Guide — discover the best treats for your dog's age and health.
        </p>
        <div className="relative max-w-2xl mx-auto">
          <img
            src={heroImage}
            alt="Happy golden retriever dog"
            className="w-full h-auto rounded-2xl shadow-soft"
          />
        </div>
      </div>
    </section>
  );
};