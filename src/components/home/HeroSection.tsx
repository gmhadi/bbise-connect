import { Link } from "react-router-dom";
import { Search, FileText, Download, CalendarDays } from "lucide-react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

const quickActions = [
  { label: "Check Result", icon: FileText, path: "/results", color: "bg-primary text-primary-foreground hover:bg-primary/90" },
  { label: "Roll No Slip", icon: Download, path: "/downloads", color: "bg-secondary text-secondary-foreground hover:bg-secondary/90" },
  { label: "Date Sheet", icon: CalendarDays, path: "/downloads", color: "bg-accent text-accent-foreground hover:bg-accent/80 border" },
];

const HeroSection = () => {
  const [rollNo, setRollNo] = useState("");
  const navigate = useNavigate();

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    if (rollNo.trim()) {
      navigate(`/results?roll=${rollNo}`);
    }
  };

  return (
    <section className="relative overflow-hidden" style={{ background: "var(--hero-gradient)" }}>
      {/* Decorative shapes */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-10 right-10 w-72 h-72 bg-primary-foreground rounded-full blur-3xl" />
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-primary-foreground rounded-full blur-3xl" />
      </div>

      <div className="container relative py-16 md:py-24 text-primary-foreground">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="font-heading text-3xl md:text-5xl font-bold mb-4 animate-fade-in-up">
            Balochistan Board of Intermediate & Secondary Education
          </h2>
          <p className="text-lg md:text-xl opacity-90 mb-8 animate-fade-in-up animation-delay-100">
            Quetta — Serving students across Balochistan with transparency and excellence
          </p>

          {/* Search bar */}
          <form onSubmit={handleSearch} className="max-w-lg mx-auto mb-10 animate-fade-in-up animation-delay-200">
            <div className="flex bg-primary-foreground/15 backdrop-blur-sm rounded-xl border border-primary-foreground/20 overflow-hidden focus-within:ring-2 focus-within:ring-primary-foreground/40">
              <input
                type="text"
                placeholder="Enter Roll Number to check result..."
                value={rollNo}
                onChange={(e) => setRollNo(e.target.value)}
                className="flex-1 px-4 py-3.5 bg-transparent text-primary-foreground placeholder:text-primary-foreground/60 outline-none text-sm"
              />
              <button
                type="submit"
                className="px-5 bg-secondary text-secondary-foreground font-medium text-sm flex items-center gap-2 hover:bg-secondary/90 transition-colors"
              >
                <Search className="w-4 h-4" /> Search
              </button>
            </div>
          </form>

          {/* Quick action buttons */}
          <div className="flex flex-wrap justify-center gap-3 animate-fade-in-up animation-delay-300">
            {quickActions.map((action) => (
              <Link
                key={action.label}
                to={action.path}
                className={`flex items-center gap-2 px-5 py-3 rounded-lg font-medium text-sm shadow-lg transition-all hover:scale-105 ${action.color}`}
              >
                <action.icon className="w-4 h-4" />
                {action.label}
              </Link>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
