import Layout from "@/components/layout/Layout";
import { Building2, Target, BookOpen, Users, Shield, Award } from "lucide-react";
import logo from "@/assets/bbise-logo.png";

const About = () => (
  <Layout>
    <section className="py-12 md:py-16">
      <div className="container max-w-4xl">
        {/* Intro */}
        <div className="text-center mb-12">
          <img src={logo} alt="BBISE Logo" className="w-24 h-24 mx-auto mb-4 object-contain" />
          <h2 className="font-heading text-3xl font-bold text-foreground mb-3">About BBISE Quetta</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto leading-relaxed">
            The Balochistan Board of Intermediate and Secondary Education (BBISE), Quetta, is the statutory body responsible for conducting examinations and granting certificates for secondary and higher secondary education across Balochistan.
          </p>
        </div>

        {/* Mission & Vision */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
          <div className="bg-card rounded-xl border p-6">
            <div className="flex items-center gap-3 mb-4">
              <div className="p-2 bg-primary/10 rounded-lg"><Target className="w-5 h-5 text-primary" /></div>
              <h3 className="font-heading font-semibold text-foreground">Our Mission</h3>
            </div>
            <p className="text-sm text-muted-foreground leading-relaxed">
              To ensure fair, transparent, and efficient examination systems across Balochistan, promoting academic excellence and equal opportunities for all students.
            </p>
          </div>
          <div className="bg-card rounded-xl border p-6">
            <div className="flex items-center gap-3 mb-4">
              <div className="p-2 bg-primary/10 rounded-lg"><BookOpen className="w-5 h-5 text-primary" /></div>
              <h3 className="font-heading font-semibold text-foreground">Our Vision</h3>
            </div>
            <p className="text-sm text-muted-foreground leading-relaxed">
              To become a leading education board in Pakistan, known for integrity, innovation, and student-centered services leveraging modern technology.
            </p>
          </div>
        </div>

        {/* Values */}
        <div className="mb-12">
          <h3 className="font-heading text-xl font-bold text-foreground text-center mb-6">Core Values</h3>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
            {[
              { icon: Shield, title: "Transparency", desc: "Open and accountable processes" },
              { icon: Users, title: "Inclusivity", desc: "Equal access for all students" },
              { icon: Award, title: "Excellence", desc: "Highest standards in education" },
            ].map((v, i) => (
              <div key={i} className="text-center p-6 bg-card rounded-xl border">
                <div className="inline-flex p-3 bg-accent rounded-full mb-3">
                  <v.icon className="w-5 h-5 text-accent-foreground" />
                </div>
                <h4 className="font-heading font-semibold text-foreground mb-1">{v.title}</h4>
                <p className="text-xs text-muted-foreground">{v.desc}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Policies */}
        <div className="bg-card rounded-xl border p-6">
          <div className="flex items-center gap-3 mb-4">
            <div className="p-2 bg-primary/10 rounded-lg"><Building2 className="w-5 h-5 text-primary" /></div>
            <h3 className="font-heading font-semibold text-foreground">Policies & Governance</h3>
          </div>
          <ul className="space-y-2 text-sm text-muted-foreground">
            <li className="py-2 border-b last:border-0">• Examination Rules & Regulations</li>
            <li className="py-2 border-b last:border-0">• Fee Structure & Financial Policies</li>
            <li className="py-2 border-b last:border-0">• Affiliation & Registration Guidelines</li>
            <li className="py-2 border-b last:border-0">• Code of Conduct for Students & Staff</li>
            <li className="py-2 border-b last:border-0">• Grievance Redressal Mechanism</li>
          </ul>
        </div>
      </div>
    </section>
  </Layout>
);

export default About;
