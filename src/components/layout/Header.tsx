import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X, Phone, Mail } from "lucide-react";
import logo from "@/assets/bbise-logo.png";

const navLinks = [
  { label: "Home", path: "/" },
  { label: "Results", path: "/results" },
  { label: "Downloads", path: "/downloads" },
  { label: "Notifications", path: "/notifications" },
  { label: "About", path: "/about" },
  { label: "Contact", path: "/contact" },
];

const Header = () => {
  const [mobileOpen, setMobileOpen] = useState(false);
  const location = useLocation();

  return (
    <header className="sticky top-0 z-50 bg-card/95 backdrop-blur-md border-b">
      {/* Top bar */}
      <div className="bg-primary text-primary-foreground text-xs">
        <div className="container flex items-center justify-between py-1.5">
          <div className="flex items-center gap-4">
            <span className="flex items-center gap-1"><Phone className="w-3 h-3" /> 081-9211264</span>
            <span className="hidden sm:flex items-center gap-1"><Mail className="w-3 h-3" /> info@bbiseqta.edu.pk</span>
          </div>
          <span className="hidden sm:block">بلوچستان بورڈ آف انٹرمیڈیٹ اینڈ سیکنڈری ایجوکیشن، کوئٹہ</span>
        </div>
      </div>

      {/* Main nav */}
      <div className="container flex items-center justify-between py-3">
        <Link to="/" className="flex items-center gap-3">
          <img src={logo} alt="BBISE Quetta Logo" className="w-12 h-12 object-contain" />
          <div>
            <h1 className="font-heading font-bold text-sm sm:text-base leading-tight text-foreground">BBISE Quetta</h1>
            <p className="text-[10px] sm:text-xs text-muted-foreground leading-tight">Board of Intermediate & Secondary Education</p>
          </div>
        </Link>

        {/* Desktop nav */}
        <nav className="hidden lg:flex items-center gap-1">
          {navLinks.map((link) => (
            <Link
              key={link.path}
              to={link.path}
              className={`px-3 py-2 rounded-md text-sm font-medium transition-colors ${
                location.pathname === link.path
                  ? "bg-primary text-primary-foreground"
                  : "text-foreground hover:bg-accent"
              }`}
            >
              {link.label}
            </Link>
          ))}
        </nav>

        {/* Mobile toggle */}
        <button
          onClick={() => setMobileOpen(!mobileOpen)}
          className="lg:hidden p-2 rounded-md hover:bg-accent"
          aria-label="Toggle menu"
        >
          {mobileOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {/* Mobile menu */}
      {mobileOpen && (
        <nav className="lg:hidden border-t bg-card px-4 pb-4">
          {navLinks.map((link) => (
            <Link
              key={link.path}
              to={link.path}
              onClick={() => setMobileOpen(false)}
              className={`block px-3 py-2.5 rounded-md text-sm font-medium transition-colors ${
                location.pathname === link.path
                  ? "bg-primary text-primary-foreground"
                  : "text-foreground hover:bg-accent"
              }`}
            >
              {link.label}
            </Link>
          ))}
        </nav>
      )}
    </header>
  );
};

export default Header;
