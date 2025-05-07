import { Button } from "@/components/ui/button";
import { Menu, X } from "lucide-react";
import { useState } from "react";
import ThemeToggle from "@/components/ThemeToggle"; // Import the new component

const Header = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-darkbg/95 backdrop-blur-sm border-b border-neutral/20">
      {/* Main container for logo, desktop nav, and mobile toggle */}
      <div className="container mx-auto px-4 py-4 flex justify-between items-center">
        <div className="flex items-center">
          {/* Webrewery logo/text made clickable - links to the homepage */}
          <a
            href="/"
            className="text-xl font-bold gradient-text cursor-pointer"
          >
            {" "}
            {/* Changed href to "/" */}
            Webrewery
          </a>
        </div>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center space-x-8">
          <a
            href="#benefits"
            className="text-white hover:text-primary transition-colors"
          >
            Benefits
          </a>
          <a
            href="#testimonials"
            className="text-white hover:text-primary transition-colors"
          >
            Results
          </a>
          <a
            href="#difference"
            className="text-white hover:text-primary transition-colors"
          >
            Why Us
          </a>
          <a
            href="#faq"
            className="text-white hover:text-primary transition-colors"
          >
            FAQ
          </a>
          <Button size="sm" asChild variant="default">
            <a href="#cta">Get Free Demo</a>
          </Button>
          <ThemeToggle /> {/* Add ThemeToggle here for desktop navigation */}
        </nav>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden text-white"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
        >
          {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Menu - This appears below the main header bar on mobile */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-darkbg/95 backdrop-blur-sm border-b border-neutral/20">
          <div className="container mx-auto px-4 py-4 flex flex-col space-y-4">
            <a
              href="#benefits"
              className="text-white hover:text-primary transition-colors py-2"
              onClick={() => setMobileMenuOpen(false)}
            >
              Benefits
            </a>
            <a
              href="#testimonials"
              className="text-white hover:text-primary transition-colors py-2"
              onClick={() => setMobileMenuOpen(false)}
            >
              Results
            </a>
            <a
              href="#difference"
              className="text-white hover:text-primary transition-colors py-2"
              onClick={() => setMobileMenuOpen(false)}
            >
              Why Us
            </a>
            <a
              href="#faq"
              className="text-white hover:text-primary transition-colors py-2"
              onClick={() => setMobileMenuOpen(false)}
            >
              FAQ
            </a>
            <Button asChild variant="default" className="w-full">
              <a href="#cta" onClick={() => setMobileMenuOpen(false)}>
                Get Free Demo
              </a>
            </Button>
            <ThemeToggle /> {/* Add ThemeToggle here for mobile menu */}
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;
