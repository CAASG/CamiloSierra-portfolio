import { useState } from "react";
import { Menu, X } from "lucide-react";
import { personalInfo, navItems } from "../../data/personal";

export default function MobileHeader() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="lg:hidden">
      {/* Fixed top bar */}
      <header className="fixed top-0 left-0 right-0 z-50 bg-slate-900/80 backdrop-blur-md border-b border-slate-800/50">
        <div className="flex items-center justify-between px-6 py-4">
          <a href="/" className="font-display font-bold text-slate-200">
            {personalInfo.name}
          </a>
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="text-slate-400 hover:text-slate-200 transition-colors"
            aria-label={isOpen ? "Close menu" : "Open menu"}
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </header>

      {/* Mobile menu overlay */}
      {isOpen && (
        <div className="fixed inset-0 z-40 bg-slate-900/95 backdrop-blur-md pt-20">
          <nav className="flex flex-col items-center gap-8 pt-12">
            {navItems.map((item) => (
              <a
                key={item.href}
                href={item.href}
                onClick={() => setIsOpen(false)}
                className="text-lg font-display font-medium text-slate-300 hover:text-teal-300 transition-colors"
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
