import { Bell, ArrowRight, Calendar } from "lucide-react";
import { Link } from "react-router-dom";

const announcements = [
  { title: "SSC Annual 2025 Results Announced", date: "April 5, 2025", type: "Result", urgent: true },
  { title: "HSSC Part-II Date Sheet 2025 Released", date: "April 2, 2025", type: "Date Sheet", urgent: false },
  { title: "Roll Number Slips Available for SSC Supplementary", date: "March 28, 2025", type: "Notice", urgent: false },
  { title: "Last Date: Admission Form Submission Extended", date: "March 25, 2025", type: "Deadline", urgent: true },
  { title: "Board Meeting on Examination Reforms", date: "March 20, 2025", type: "Notice", urgent: false },
  { title: "Affiliated Institutions List Updated", date: "March 15, 2025", type: "Update", urgent: false },
];

const AnnouncementsSection = () => (
  <section className="py-16 bg-background">
    <div className="container">
      <div className="flex items-center justify-between mb-8">
        <div className="flex items-center gap-3">
          <div className="p-2 bg-primary/10 rounded-lg">
            <Bell className="w-5 h-5 text-primary" />
          </div>
          <h2 className="font-heading text-2xl font-bold text-foreground">Latest Announcements</h2>
        </div>
        <Link to="/notifications" className="text-primary text-sm font-medium flex items-center gap-1 hover:underline">
          View All <ArrowRight className="w-4 h-4" />
        </Link>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {announcements.map((item, i) => (
          <div
            key={i}
            className="bg-card rounded-xl border p-5 hover:shadow-md transition-shadow group cursor-pointer"
          >
            <div className="flex items-start justify-between mb-3">
              <span className={`text-xs font-semibold px-2.5 py-1 rounded-full ${
                item.urgent ? "bg-destructive/10 text-destructive" : "bg-accent text-accent-foreground"
              }`}>
                {item.type}
              </span>
              <span className="text-xs text-muted-foreground flex items-center gap-1">
                <Calendar className="w-3 h-3" /> {item.date}
              </span>
            </div>
            <h3 className="font-medium text-foreground group-hover:text-primary transition-colors leading-snug">
              {item.title}
            </h3>
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default AnnouncementsSection;
