import { useState } from "react";
import { Menu, X } from "lucide-react";
import { personalInfo, navItems } from "../../data/personal";

export default function MobileHeader() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="lg:hidden">
      {/* Fixed top bar */}
      <header className="fixed top-0 left-0 right-0 z-50 bg-dark/80 backdrop-blur-md border-b border-edge/30">
        <div className="flex items-center justify-between px-6 py-4">
          <a href="/" className="font-display font-bold text-heading">
            {personalInfo.name}
          </a>
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="text-body hover:text-heading transition-colors"
            aria-label={isOpen ? "Close menu" : "Open menu"}
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </header>

      {/* Mobile menu overlay */}
      {isOpen && (
        <div className="fixed inset-0 z-40 bg-dark/95 backdrop-blur-md pt-20">
          <nav className="flex flex-col items-center gap-8 pt-12">
            {navItems.map((item) => (
              <a
                key={item.href}
                href={item.href}
                onClick={() => setIsOpen(false)}
                className="text-lg font-display font-medium text-heading/70 hover:text-accent transition-colors"
              >
                {item.label}
              </a>
            ))}
          </nav>
        </div>
      )}
    </div>
  );
}
