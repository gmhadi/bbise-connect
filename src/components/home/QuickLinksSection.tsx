import { Link } from "react-router-dom";
import { GraduationCap, Building2, ClipboardList, Trophy, FolderDown, Bell, HelpCircle, PhoneCall } from "lucide-react";

const links = [
  { label: "Students", desc: "Results, roll slips, date sheets", icon: GraduationCap, path: "/results" },
  { label: "Institutions", desc: "Affiliated schools & colleges", icon: Building2, path: "/about" },
  { label: "Examinations", desc: "Schedules, rules, forms", icon: ClipboardList, path: "/downloads" },
  { label: "Results", desc: "SSC & HSSC results portal", icon: Trophy, path: "/results" },
  { label: "Downloads", desc: "Forms, date sheets, slips", icon: FolderDown, path: "/downloads" },
  { label: "Notifications", desc: "Latest news & circulars", icon: Bell, path: "/notifications" },
  { label: "FAQ", desc: "Common questions answered", icon: HelpCircle, path: "/contact" },
  { label: "Contact", desc: "Get in touch with us", icon: PhoneCall, path: "/contact" },
];

const QuickLinksSection = () => (
  <section className="py-16 bg-background">
    <div className="container">
      <h2 className="font-heading text-2xl font-bold text-center mb-10 text-foreground">Quick Access</h2>
      <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4">
        {links.map((link, i) => (
          <Link
            key={i}
            to={link.path}
            className="flex flex-col items-center text-center p-6 bg-card rounded-xl border hover:shadow-lg hover:border-primary/30 transition-all group"
          >
            <div className="p-3 bg-accent rounded-full mb-3 group-hover:bg-primary/10 transition-colors">
              <link.icon className="w-6 h-6 text-accent-foreground group-hover:text-primary transition-colors" />
            </div>
            <h3 className="font-heading font-semibold text-sm text-foreground">{link.label}</h3>
            <p className="text-xs text-muted-foreground mt-1">{link.desc}</p>
          </Link>
        ))}
      </div>
    </div>
  </section>
);

export default QuickLinksSection;
