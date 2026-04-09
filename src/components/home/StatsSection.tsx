import { Users, School, Award, FileCheck } from "lucide-react";

const stats = [
  { label: "Students Enrolled", value: "250,000+", icon: Users },
  { label: "Affiliated Institutions", value: "3,200+", icon: School },
  { label: "Exams Conducted", value: "50+", icon: FileCheck },
  { label: "Years of Service", value: "40+", icon: Award },
];

const StatsSection = () => (
  <section className="py-12 bg-muted">
    <div className="container">
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6">
        {stats.map((stat, i) => (
          <div key={i} className="text-center p-6 bg-card rounded-xl border">
            <div className="inline-flex p-3 bg-primary/10 rounded-full mb-3">
              <stat.icon className="w-6 h-6 text-primary" />
            </div>
            <div className="text-2xl md:text-3xl font-heading font-bold text-foreground">{stat.value}</div>
            <div className="text-sm text-muted-foreground mt-1">{stat.label}</div>
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default StatsSection;
