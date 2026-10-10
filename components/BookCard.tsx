"use client";

import Link from 'next/link';

type Chapter = {
  title: string;
  page: string;
};

type BookCardProps = {
  vol: string;
  label: string;
  title: string;
  desc: string;
  href: string;
  chapters: Chapter[];
  isActive?: boolean;
  colorClass?: string;
};

export default function BookCard({ vol, label, title, desc, href, chapters, isActive = true, colorClass = "" }: BookCardProps) {
  if (!isActive) {
    return (
      <div className="flex bg-[var(--color-bg-1)] textured-panel border border-[var(--color-border-1)] rounded overflow-hidden opacity-60 cursor-not-allowed">
        <div className="w-8 bg-[var(--color-bg-2)] textured-panel border-r border-[var(--color-border-1)] flex flex-col items-center py-4 relative after:absolute after:left-[4px] after:top-0 after:bottom-0 after:w-px after:bg-white/5">
          <div className="[writing-mode:vertical-rl] rotate-180 font-mono text-[9px] text-[var(--color-text-3)] tracking-[0.2em] uppercase">{vol}</div>
        </div>
        <div className="p-5 flex-1 flex flex-col">
          <div className="font-mono text-[9px] text-[var(--color-text-3)] mb-2 tracking-[0.1em]">{label}</div>
          <h3 className="font-serif text-[18px] text-[var(--color-text-1)] mb-2.5 leading-[1.2]">{title}</h3>
          <p className="text-[12px] text-[var(--color-text-2)] mb-5 leading-[1.6]">{desc}</p>
          <div className="mt-auto border-t border-[var(--color-border-1)] pt-3 flex flex-col gap-1.5">
            {chapters.map((ch, i) => (
              <div key={i} className="flex justify-between text-[10.5px] text-[var(--color-text-3)] font-mono">
                <span>{ch.title}</span>
                <span>{ch.page}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    );
  }

  return (
    <Link href={href} className={`flex bg-[var(--color-bg-1)] textured-panel border border-[var(--color-border-1)] rounded overflow-hidden transition-all duration-300 relative hover:-translate-y-1 hover:shadow-[0_10px_30px_rgba(0,0,0,0.5)] hover:border-[var(--color-border-2)] group ${colorClass}`}>
      <div className="w-8 bg-[var(--color-bg-2)] textured-panel border-r border-[var(--color-border-1)] flex flex-col items-center py-4 relative after:absolute after:left-[4px] after:top-0 after:bottom-0 after:w-px after:bg-white/5">
        <div className="[writing-mode:vertical-rl] rotate-180 font-mono text-[9px] text-[var(--color-text-3)] tracking-[0.2em] uppercase">{vol}</div>
      </div>
      <div className="p-5 flex-1 flex flex-col">
        <div className={`font-mono text-[9px] mb-2 tracking-[0.1em] ${colorClass === 'green' ? 'text-[var(--color-term-green)]' : colorClass === 'pink' ? 'text-[#ec4899]' : 'text-[var(--color-accent-1)]'}`}>{label}</div>
        <h3 className="font-serif text-[18px] text-[var(--color-text-1)] mb-2.5 leading-[1.2]">{title}</h3>
        <p className="text-[12px] text-[var(--color-text-2)] mb-5 leading-[1.6]">{desc}</p>
        <div className="mt-auto border-t border-[var(--color-border-1)] pt-3 flex flex-col gap-1.5">
          {chapters.map((ch, i) => (
            <div key={i} className="flex justify-between text-[10.5px] text-[var(--color-text-3)] font-mono transition-colors group-hover:text-[var(--color-text-2)]">
              <span>{ch.title}</span>
              <span className="text-[var(--color-border-2)]">{ch.page}</span>
            </div>
          ))}
        </div>
        
        <div className="absolute inset-0 bg-black/80 backdrop-blur-sm opacity-0 group-hover:opacity-100 transition-opacity flex flex-col items-center justify-center gap-3">
          <button onClick={(e) => { e.preventDefault(); alert("Added to Targets backlog!"); }} className="bg-indigo-500 hover:bg-indigo-600 text-white text-[12px] font-semibold py-2 px-6 rounded-full w-[160px] transition-colors shadow-lg">
            Add to Targets
          </button>
          <button onClick={(e) => { e.preventDefault(); alert("New project spawned!"); }} className="bg-[var(--color-bg-2)] hover:bg-[var(--color-bg-3)] border border-[var(--color-border-2)] text-white text-[12px] font-semibold py-2 px-6 rounded-full w-[160px] transition-colors shadow-lg">
            Start Project
          </button>
        </div>
      </div>
    </Link>
  );
}
