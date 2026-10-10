import Link from 'next/link';
import { Asterisk, ChevronDown } from 'lucide-react';

export default function Topbar() {
  return (
    <header className="fixed top-0 left-0 right-0 z-[100] h-[60px] bg-[rgba(2,2,2,0.8)] backdrop-blur-xl border-b border-[var(--color-border-1)] flex items-center justify-between px-6 lg:px-12 transition-all">
      
      {/* Brand Logo */}
      <Link href="/" className="flex items-center gap-2 text-[var(--color-text-1)] hover:text-white transition-opacity">
        <Asterisk className="w-5 h-5 text-[var(--color-text-3)]" strokeWidth={1.5} />
        <span className="text-[15px] font-sans font-medium tracking-tight">Axiom</span>
      </Link>

      {/* Right Side (Nav + CTA) */}
      <div className="flex items-center gap-6 lg:gap-8">
        
        {/* Navigation Links */}
        <nav className="hidden md:flex items-center gap-6">
          <div className="flex items-center gap-1.5 cursor-pointer group text-[13px] text-[var(--color-text-2)] hover:text-white transition-colors font-sans font-medium">
            Solutions <ChevronDown className="w-3.5 h-3.5 opacity-50 group-hover:opacity-100 transition-opacity" />
          </div>
          <Link href="/assistant" className="text-[13px] text-[#4f46e5] hover:text-white transition-colors font-sans font-medium">
            Assistant
          </Link>
          <Link href="/targets" className="text-[13px] text-[var(--color-text-2)] hover:text-white transition-colors font-sans font-medium">
            Targets
          </Link>
          <Link href="/projects" className="text-[13px] text-[var(--color-text-2)] hover:text-white transition-colors font-sans font-medium">
            Projects
          </Link>
          <Link href="/landscape" className="text-[13px] text-[var(--color-text-2)] hover:text-white transition-colors font-sans font-medium">
            Landscape
          </Link>
          <Link href="/#about" className="text-[13px] text-[var(--color-text-2)] hover:text-white transition-colors font-sans font-medium">
            About
          </Link>
          <Link href="/careers" className="text-[13px] text-[var(--color-text-2)] hover:text-white transition-colors font-sans font-medium">
            Careers
          </Link>
          <Link href="/#customers" className="text-[13px] text-[var(--color-text-2)] hover:text-white transition-colors font-sans font-medium">
            Customers
          </Link>
          <Link href="/research" className="text-[13px] text-[var(--color-text-2)] hover:text-white transition-colors font-sans font-medium">
            Blog
          </Link>
        </nav>

        {/* CTA Button */}
        <button className="border border-[var(--color-border-2)] rounded-full px-5 py-1.5 text-[13px] text-[var(--color-text-1)] font-sans font-medium hover:bg-[var(--color-bg-3)] hover:text-white transition-colors">
          Book a Demo
        </button>
        
      </div>
    </header>
  );
}
