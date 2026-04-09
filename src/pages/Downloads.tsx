import Layout from "@/components/layout/Layout";
import { Download, FileText, CalendarDays, ClipboardList, FolderDown } from "lucide-react";

const categories = [
  {
    title: "Date Sheets",
    icon: CalendarDays,
    items: [
      { name: "SSC Annual 2025 Date Sheet", size: "245 KB", date: "Mar 2025" },
      { name: "HSSC Part-I Annual 2025 Date Sheet", size: "198 KB", date: "Mar 2025" },
      { name: "HSSC Part-II Annual 2025 Date Sheet", size: "210 KB", date: "Mar 2025" },
    ],
  },
  {
    title: "Roll Number Slips",
    icon: ClipboardList,
    items: [
      { name: "SSC Annual 2025 Roll Number Slips", size: "Online", date: "Feb 2025" },
      { name: "HSSC Annual 2025 Roll Number Slips", size: "Online", date: "Feb 2025" },
    ],
  },
  {
    title: "Admission Forms",
    icon: FileText,
    items: [
      { name: "SSC Examination Registration Form", size: "320 KB", date: "2025" },
      { name: "HSSC Examination Registration Form", size: "305 KB", date: "2025" },
      { name: "Migration Certificate Form", size: "150 KB", date: "2025" },
      { name: "Duplicate Certificate Request Form", size: "120 KB", date: "2025" },
    ],
  },
  {
    title: "Circulars & Policies",
    icon: FolderDown,
    items: [
      { name: "Examination Rules & Regulations 2025", size: "510 KB", date: "Jan 2025" },
      { name: "Fee Schedule 2025", size: "95 KB", date: "Jan 2025" },
      { name: "Code of Conduct for Examiners", size: "180 KB", date: "2024" },
    ],
  },
];

const Downloads = () => (
  <Layout>
    <section className="py-12 md:py-16">
      <div className="container max-w-4xl">
        <div className="text-center mb-10">
          <h2 className="font-heading text-3xl font-bold text-foreground mb-2">Download Center</h2>
          <p className="text-muted-foreground">Access all forms, date sheets, and official documents</p>
        </div>

        <div className="space-y-8">
          {categories.map((cat, i) => (
            <div key={i} className="bg-card rounded-xl border overflow-hidden">
              <div className="flex items-center gap-3 p-5 border-b bg-muted">
                <cat.icon className="w-5 h-5 text-primary" />
                <h3 className="font-heading font-semibold text-foreground">{cat.title}</h3>
              </div>
              <div className="divide-y">
                {cat.items.map((item, j) => (
                  <div key={j} className="flex items-center justify-between p-4 hover:bg-accent/50 transition-colors">
                    <div>
                      <p className="font-medium text-sm text-foreground">{item.name}</p>
                      <p className="text-xs text-muted-foreground">{item.size} • {item.date}</p>
                    </div>
                    <button className="flex items-center gap-1.5 px-3 py-1.5 bg-primary text-primary-foreground rounded-md text-xs font-medium hover:bg-primary/90 transition-colors">
                      <Download className="w-3 h-3" /> Download
                    </button>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  </Layout>
);

export default Downloads;
