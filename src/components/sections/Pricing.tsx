
import { Check } from "lucide-react";

const Pricing = () => {
  const plans = [
    {
      name: "Starter",
      price: "29",
      features: ["5 Team Members", "10GB Storage", "Basic Support", "Basic Analytics"],
      isPopular: false
    },
    {
      name: "Professional",
      price: "79",
      features: ["15 Team Members", "50GB Storage", "Priority Support", "Advanced Analytics", "Custom Integrations"],
      isPopular: true
    },
    {
      name: "Enterprise",
      price: "149",
      features: ["Unlimited Team Members", "500GB Storage", "24/7 Support", "Premium Analytics", "API Access", "Custom Solutions"],
      isPopular: false
    }
  ];

  return (
    <section id="pricing" className="section-padding">
      <div className="container-section">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">
            Simple, Transparent Pricing
          </h2>
          <p className="text-lg text-slate-600">
            Choose the perfect plan for your business needs
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {plans.map((plan, index) => (
            <div
              key={index}
              className={`glass-card p-8 ${
                plan.isPopular ? "ring-2 ring-accent relative" : ""
              }`}
            >
              {plan.isPopular && (
                <span className="absolute -top-4 left-1/2 -translate-x-1/2 bg-accent text-white px-4 py-1 rounded-full text-sm">
                  Most Popular
                </span>
              )}
              <h3 className="text-xl font-semibold text-slate-900 mb-2">
                {plan.name}
              </h3>
              <div className="mb-6">
                <span className="text-4xl font-bold text-slate-900">${plan.price}</span>
                <span className="text-slate-600">/month</span>
              </div>
              <ul className="space-y-4 mb-8">
                {plan.features.map((feature, featureIndex) => (
                  <li key={featureIndex} className="flex items-center gap-2">
                    <Check className="w-5 h-5 text-accent" />
                    <span className="text-slate-600">{feature}</span>
                  </li>
                ))}
              </ul>
              <a
                href="#contact"
                className={`block text-center py-2 px-4 rounded-full transition-all duration-300 ${
                  plan.isPopular
                    ? "bg-accent text-white hover:bg-accent-dark"
                    : "bg-slate-100 text-slate-900 hover:bg-slate-200"
                }`}
              >
                Get Started
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Pricing;
