
import { useState } from "react";
import { toast } from "sonner";

const Contact = () => {
  const [email, setEmail] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast.success("Thanks for subscribing! We'll be in touch soon.");
    setEmail("");
  };

  return (
    <section id="contact" className="section-padding bg-slate-50">
      <div className="container-section">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">
            Ready to Get Started?
          </h2>
          <p className="text-lg text-slate-600 mb-8">
            Join our newsletter and be the first to know about our launch
          </p>
          <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
            <input
              type="email"
              placeholder="Enter your email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="flex-1 px-4 py-3 rounded-full border border-slate-200 focus:outline-none focus:ring-2 focus:ring-accent"
              required
            />
            <button type="submit" className="button-primary whitespace-nowrap">
              Join Waitlist
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Contact;
