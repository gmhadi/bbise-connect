import { Link } from "react-router-dom";
import { MapPin, Phone, Mail, ExternalLink } from "lucide-react";

const Footer = () => (
  <footer className="bg-primary text-primary-foreground">
    <div className="container py-12">
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
        <div>
          <h3 className="font-heading font-semibold text-lg mb-4">BBISE Quetta</h3>
          <p className="text-sm opacity-80 leading-relaxed">
            Balochistan Board of Intermediate and Secondary Education, Quetta. Established to regulate and supervise examinations.
          </p>
        </div>
        <div>
          <h4 className="font-heading font-semibold mb-4">Quick Links</h4>
          <ul className="space-y-2 text-sm opacity-80">
            <li><Link to="/results" className="hover:opacity-100 transition-opacity flex items-center gap-1"><ExternalLink className="w-3 h-3" /> Check Results</Link></li>
            <li><Link to="/downloads" className="hover:opacity-100 transition-opacity flex items-center gap-1"><ExternalLink className="w-3 h-3" /> Downloads</Link></li>
            <li><Link to="/notifications" className="hover:opacity-100 transition-opacity flex items-center gap-1"><ExternalLink className="w-3 h-3" /> Notifications</Link></li>
            <li><Link to="/contact" className="hover:opacity-100 transition-opacity flex items-center gap-1"><ExternalLink className="w-3 h-3" /> Contact Us</Link></li>
          </ul>
        </div>
        <div>
          <h4 className="font-heading font-semibold mb-4">Examinations</h4>
          <ul className="space-y-2 text-sm opacity-80">
            <li>SSC (Matric) Exams</li>
            <li>HSSC (Intermediate) Exams</li>
            <li>Date Sheets</li>
            <li>Roll Number Slips</li>
          </ul>
        </div>
        <div>
          <h4 className="font-heading font-semibold mb-4">Contact</h4>
          <ul className="space-y-2 text-sm opacity-80">
            <li className="flex items-start gap-2"><MapPin className="w-4 h-4 mt-0.5 shrink-0" /> Samungli Road, Quetta, Balochistan</li>
            <li className="flex items-center gap-2"><Phone className="w-4 h-4 shrink-0" /> 081-9211264</li>
            <li className="flex items-center gap-2"><Mail className="w-4 h-4 shrink-0" /> info@bbiseqta.edu.pk</li>
          </ul>
        </div>
      </div>
    </div>
    <div className="border-t border-primary-foreground/20">
      <div className="container py-4 text-center text-xs opacity-60">
        © {new Date().getFullYear()} BBISE Quetta. All rights reserved.
      </div>
    </div>
  </footer>
);

export default Footer;
