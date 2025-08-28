import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card, CardContent } from "@/components/ui/card";

export const LeadForm = () => {
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    phone: ""
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Form validation would go here
    if (formData.fullName && formData.email && formData.phone) {
      setIsSubmitted(true);
    }
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  if (isSubmitted) {
    return (
      <section className="py-16 px-6 bg-background">
        <div className="max-w-lg mx-auto">
          <Card className="shadow-form border-0 bg-pet-green-soft">
            <CardContent className="p-8 text-center">
              <div className="w-16 h-16 bg-pet-green rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
              </div>
              <h2 className="text-2xl font-bold text-foreground mb-3">Thank You!</h2>
              <p className="text-warm-gray text-lg">
                Your guide will be sent to your email shortly.
              </p>
            </CardContent>
          </Card>
        </div>
      </section>
    );
  }

  return (
    <section className="py-16 px-6 bg-background">
      <div className="max-w-lg mx-auto">
        <Card className="shadow-form border-0">
          <CardContent className="p-8">
            <h2 className="text-2xl font-bold text-center text-foreground mb-6">
              Get Your Free Pet Treat Guide
            </h2>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <Input
                  type="text"
                  name="fullName"
                  placeholder="Full Name"
                  value={formData.fullName}
                  onChange={handleInputChange}
                  required
                  className="h-12 rounded-xl border-2 focus:border-pet-green transition-colors"
                />
              </div>
              <div>
                <Input
                  type="email"
                  name="email"
                  placeholder="Email Address"
                  value={formData.email}
                  onChange={handleInputChange}
                  required
                  className="h-12 rounded-xl border-2 focus:border-pet-green transition-colors"
                />
              </div>
              <div>
                <Input
                  type="tel"
                  name="phone"
                  placeholder="Phone Number"
                  value={formData.phone}
                  onChange={handleInputChange}
                  required
                  className="h-12 rounded-xl border-2 focus:border-pet-green transition-colors"
                />
              </div>
              <Button
                type="submit"
                variant="cta"
                size="lg"
                className="w-full h-12 rounded-xl text-lg"
              >
                Get My Free Guide
              </Button>
            </form>
          </CardContent>
        </Card>
      </div>
    </section>
  );
};