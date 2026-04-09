import Layout from "@/components/layout/Layout";
import { Bell, Calendar, ArrowRight } from "lucide-react";

const notifications = [
  { title: "SSC Annual 2025 Results Announced", date: "April 5, 2025", type: "Result", desc: "The results for SSC Annual Examination 2025 have been officially announced. Students can check their results online or via SMS." },
  { title: "HSSC Part-II Date Sheet 2025", date: "April 2, 2025", type: "Date Sheet", desc: "The date sheet for HSSC Part-II Annual Examination 2025 has been released. Examinations will commence from May 15, 2025." },
  { title: "Roll Number Slips for SSC Supplementary", date: "March 28, 2025", type: "Notice", desc: "Roll number slips for SSC Supplementary Examination 2025 are now available for download from the official website." },
  { title: "Admission Form Deadline Extended", date: "March 25, 2025", type: "Deadline", desc: "The last date for submission of admission forms for SSC Annual 2026 has been extended to June 30, 2025." },
  { title: "Board Chairman Address on Education Reforms", date: "March 20, 2025", type: "News", desc: "The Chairman of BBISE Quetta addressed the media regarding upcoming reforms in examination system." },
  { title: "New Fee Structure for 2025-26", date: "March 15, 2025", type: "Update", desc: "The board has approved a revised fee structure for the academic year 2025-26. Details available in the downloads section." },
  { title: "Affiliated Institutions Registration Open", date: "March 10, 2025", type: "Notice", desc: "Registration for new institutions seeking affiliation with BBISE Quetta is now open. Last date: April 30, 2025." },
  { title: "Online Complaint Portal Launched", date: "March 5, 2025", type: "Update", desc: "Students and institutions can now submit complaints and queries through the new online portal." },
];

const Notifications = () => (
  <Layout>
    <section className="py-12 md:py-16">
      <div className="container max-w-3xl">
        <div className="text-center mb-10">
          <h2 className="font-heading text-3xl font-bold text-foreground mb-2">Notifications & Announcements</h2>
          <p className="text-muted-foreground">Stay updated with the latest news from BBISE Quetta</p>
        </div>

        <div className="space-y-4">
          {notifications.map((item, i) => (
            <div key={i} className="bg-card rounded-xl border p-5 hover:shadow-md transition-shadow">
              <div className="flex items-start justify-between mb-2">
                <span className="text-xs font-semibold px-2.5 py-1 rounded-full bg-accent text-accent-foreground">
                  {item.type}
                </span>
                <span className="text-xs text-muted-foreground flex items-center gap-1">
                  <Calendar className="w-3 h-3" /> {item.date}
                </span>
              </div>
              <h3 className="font-heading font-semibold text-foreground mb-1.5">{item.title}</h3>
              <p className="text-sm text-muted-foreground leading-relaxed">{item.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  </Layout>
);

export default Notifications;
