import { AlertTriangle } from "lucide-react";

const notices = [
  "📢 SSC Annual Examination 2025 results have been announced — Check Now!",
  "📋 HSSC Part-II Date Sheet 2025 is now available for download.",
  "🔔 Roll Number Slips for SSC Supplementary 2025 are available.",
  "📝 Last date for admission forms submission: June 30, 2025.",
];

const NoticeTicker = () => (
  <div className="bg-secondary/20 border-b overflow-hidden">
    <div className="container flex items-center gap-3 py-2">
      <span className="shrink-0 flex items-center gap-1.5 text-xs font-semibold text-secondary-foreground bg-secondary px-2.5 py-1 rounded-full">
        <AlertTriangle className="w-3 h-3" /> Updates
      </span>
      <div className="overflow-hidden relative flex-1">
        <div className="animate-ticker whitespace-nowrap">
          {notices.map((n, i) => (
            <span key={i} className="text-sm text-foreground mx-8">{n}</span>
          ))}
        </div>
      </div>
    </div>
  </div>
);

export default NoticeTicker;
