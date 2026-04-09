import { useState } from "react";
import Layout from "@/components/layout/Layout";
import { MapPin, Phone, Mail, Clock, Send, HelpCircle, ChevronDown, ChevronUp } from "lucide-react";

const faqs = [
  { q: "How do I check my result online?", a: "Go to the Results page, enter your roll number and select your exam type. You can also send your roll number via SMS to 80888." },
  { q: "Where can I download my roll number slip?", a: "Roll number slips are available on the Downloads page under 'Roll Number Slips' section once they are released." },
  { q: "How do I get a duplicate certificate?", a: "Download the Duplicate Certificate Request Form from the Downloads page, fill it, and submit it to the BBISE office with required fee." },
  { q: "When are the SSC/HSSC examinations held?", a: "SSC Annual exams are typically held in March-April and HSSC Annual exams in May-June. Check the Date Sheet for exact dates." },
  { q: "How can I report an issue with my results?", a: "Use the complaint form below or visit the BBISE office in person. You can also call our helpline at 081-9211264." },
];

const Contact = () => {
  const [openFaq, setOpenFaq] = useState<number | null>(0);
  const [formData, setFormData] = useState({ name: "", email: "", subject: "", message: "" });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    alert("Your message has been submitted. We will get back to you shortly.");
    setFormData({ name: "", email: "", subject: "", message: "" });
  };

  return (
    <Layout>
      <section className="py-12 md:py-16">
        <div className="container max-w-5xl">
          <div className="text-center mb-10">
            <h2 className="font-heading text-3xl font-bold text-foreground mb-2">Contact & Support</h2>
            <p className="text-muted-foreground">Get help, submit complaints, or find answers to common questions</p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-12">
            {/* Contact info */}
            <div className="space-y-4">
              <h3 className="font-heading font-semibold text-lg text-foreground mb-4">Get in Touch</h3>
              {[
                { icon: MapPin, label: "Address", value: "Samungli Road, Quetta, Balochistan, Pakistan" },
                { icon: Phone, label: "Phone", value: "081-9211264 / 081-9211265" },
                { icon: Mail, label: "Email", value: "info@bbiseqta.edu.pk" },
                { icon: Clock, label: "Office Hours", value: "Mon-Fri: 8:00 AM - 3:00 PM" },
              ].map((item, i) => (
                <div key={i} className="flex items-start gap-3 p-4 bg-card rounded-xl border">
                  <div className="p-2 bg-primary/10 rounded-lg shrink-0">
                    <item.icon className="w-4 h-4 text-primary" />
                  </div>
                  <div>
                    <p className="text-xs text-muted-foreground">{item.label}</p>
                    <p className="text-sm font-medium text-foreground">{item.value}</p>
                  </div>
                </div>
              ))}
            </div>

            {/* Contact form */}
            <div className="bg-card rounded-xl border p-6">
              <h3 className="font-heading font-semibold text-lg text-foreground mb-4">Submit a Query / Complaint</h3>
              <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                  <label className="block text-sm font-medium text-foreground mb-1">Full Name</label>
                  <input
                    type="text"
                    required
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    className="w-full px-3 py-2.5 bg-background border rounded-lg text-sm outline-none focus:ring-2 focus:ring-ring"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-foreground mb-1">Email</label>
                  <input
                    type="email"
                    required
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    className="w-full px-3 py-2.5 bg-background border rounded-lg text-sm outline-none focus:ring-2 focus:ring-ring"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-foreground mb-1">Subject</label>
                  <input
                    type="text"
                    required
                    value={formData.subject}
                    onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                    className="w-full px-3 py-2.5 bg-background border rounded-lg text-sm outline-none focus:ring-2 focus:ring-ring"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-foreground mb-1">Message</label>
                  <textarea
                    rows={4}
                    required
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    className="w-full px-3 py-2.5 bg-background border rounded-lg text-sm outline-none focus:ring-2 focus:ring-ring resize-none"
                  />
                </div>
                <button
                  type="submit"
                  className="w-full bg-primary text-primary-foreground py-2.5 rounded-lg font-medium text-sm flex items-center justify-center gap-2 hover:bg-primary/90 transition-colors"
                >
                  <Send className="w-4 h-4" /> Submit
                </button>
              </form>
            </div>
          </div>

          {/* FAQ */}
          <div className="max-w-3xl mx-auto">
            <div className="flex items-center gap-3 mb-6">
              <div className="p-2 bg-primary/10 rounded-lg">
                <HelpCircle className="w-5 h-5 text-primary" />
              </div>
              <h3 className="font-heading text-xl font-bold text-foreground">Frequently Asked Questions</h3>
            </div>
            <div className="space-y-3">
              {faqs.map((faq, i) => (
                <div key={i} className="bg-card rounded-xl border overflow-hidden">
                  <button
                    onClick={() => setOpenFaq(openFaq === i ? null : i)}
                    className="w-full flex items-center justify-between p-4 text-left"
                  >
                    <span className="font-medium text-sm text-foreground">{faq.q}</span>
                    {openFaq === i ? <ChevronUp className="w-4 h-4 text-muted-foreground" /> : <ChevronDown className="w-4 h-4 text-muted-foreground" />}
                  </button>
                  {openFaq === i && (
                    <div className="px-4 pb-4 text-sm text-muted-foreground leading-relaxed">{faq.a}</div>
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Contact;
