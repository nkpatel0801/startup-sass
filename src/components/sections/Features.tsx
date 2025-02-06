
import { CheckCircle, Shield, Zap } from "lucide-react";

const Features = () => {
  const features = [
    {
      icon: <Zap className="w-8 h-8 text-accent" />,
      title: "Lightning Fast",
      description: "Experience blazing-fast performance with our optimized platform."
    },
    {
      icon: <Shield className="w-8 h-8 text-accent" />,
      title: "Secure by Design",
      description: "Your data is protected with enterprise-grade security measures."
    },
    {
      icon: <CheckCircle className="w-8 h-8 text-accent" />,
      title: "Easy to Use",
      description: "Intuitive interface designed for the best user experience."
    }
  ];

  return (
    <section id="features" className="section-padding bg-slate-50">
      <div className="container-section">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">
            Features that Make Us Stand Out
          </h2>
          <p className="text-lg text-slate-600">
            Discover why businesses choose our platform for their needs
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div
              key={index}
              className="glass-card p-8"
              style={{ animationDelay: `${index * 0.2}s` }}
            >
              <div className="mb-4">{feature.icon}</div>
              <h3 className="text-xl font-semibold text-slate-900 mb-2">
                {feature.title}
              </h3>
              <p className="text-slate-600">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;
