"use client";

import { useState } from "react";
import { Briefcase, Terminal, Target, ArrowRight, ExternalLink, Code2, Link as LinkIcon } from "lucide-react";
import Link from "next/link";

type Career = {
  id: string;
  role: string;
  type: string;
  compensation: string;
  desc: string;
  skills: string[];
  responsibilities: string[];
  firms: { name: string; link: string }[];
  prep_links: { title: string; url: string }[];
};

export default function CareersWorkspace({ careers }: { careers: Career[] }) {
  const [activeCareer, setActiveCareer] = useState<string>(careers[0].id);

  const activeData = careers.find(c => c.id === activeCareer) || careers[0];

  return (
    <div className="pt-[60px] min-h-screen flex flex-col">
      {/* HEADER FILTER */}
      <div className="bg-[rgba(5,5,5,0.85)] backdrop-blur-md border-b border-[var(--color-border-1)] sticky top-[60px] z-[90]">
        <div className="max-w-[1440px] mx-auto px-4 lg:px-10 flex items-center">
          <div className="font-mono text-[9px] text-[var(--color-text-3)] uppercase tracking-[0.2em] flex items-center gap-2 mr-5 lg:mr-8 border-r border-[var(--color-border-1)] pr-5 lg:pr-8 py-3.5 flex-shrink-0">
            <span className="w-1.5 h-1.5 rounded-full bg-[#34d399] animate-pulse shadow-[0_0_5px_#34d399]"></span>
            Career Matrix
          </div>
          
          <div className="flex gap-4 lg:gap-6 overflow-x-auto [scrollbar-width:none] [&::-webkit-scrollbar]:hidden w-full items-center">
            {careers.map(c => (
              <button
                key={c.id}
                onClick={() => setActiveCareer(c.id)}
                className={`relative py-3.5 flex-shrink-0 font-mono text-[9.5px] lg:text-[10px] tracking-[0.1em] uppercase transition-all duration-300 flex items-center gap-1.5
                  ${activeCareer === c.id 
                    ? 'text-[var(--color-text-1)] after:absolute after:bottom-[-1px] after:left-0 after:right-0 after:h-[2px] after:bg-[#34d399] after:shadow-[0_0_8px_rgba(52,211,153,0.8)]' 
                    : 'text-[var(--color-text-2)] hover:text-[var(--color-text-1)]'}`}
              >
                <Briefcase className="w-3.5 h-3.5 opacity-60" />
                <span>{c.role}</span>
              </button>
            ))}
          </div>
        </div>
      </div>

      <div className="flex-1 max-w-[1440px] mx-auto w-full flex flex-col relative p-4 lg:p-10">
        <div className="border border-[var(--color-border-1)] rounded overflow-hidden bg-[var(--color-bg-1)] textured-panel animate-in fade-in slide-in-from-bottom-4 duration-500 max-w-[900px] mx-auto w-full">
          
          {/* Top Info Banner */}
          <div className="p-8 lg:p-10 border-b border-[var(--color-border-1)] bg-[var(--color-bg-2)] relative overflow-hidden">
            <div className="font-mono text-[10px] text-[var(--color-text-3)] mb-3 tracking-widest uppercase flex items-center gap-2">
              <span className="px-2 py-0.5 border border-[var(--color-border-2)] rounded bg-[var(--color-bg-1)]">{activeData.type}</span>
              <span>{activeData.compensation}</span>
            </div>
            <h1 className="font-serif text-[32px] lg:text-[40px] font-semibold text-[var(--color-text-1)] leading-tight mb-4 tracking-tight">
              {activeData.role}
            </h1>
            <p className="text-[14px] text-[var(--color-text-2)] leading-relaxed max-w-2xl">
              {activeData.desc}
            </p>
          </div>
          
          <div className="p-8 lg:p-10 grid grid-cols-1 md:grid-cols-2 gap-10">
            {/* Responsibilities */}
            <div>
              <h3 className="font-mono text-[10px] font-bold tracking-[0.1em] uppercase text-[var(--color-text-1)] flex items-center gap-2 mb-4">
                <Target className="w-4 h-4"/> Key Responsibilities
              </h3>
              <ul className="space-y-4">
                {activeData.responsibilities.map((r, idx) => (
                  <li key={idx} className="text-[13px] text-[var(--color-text-2)] flex items-start gap-3">
                    <span className="text-[var(--color-text-3)] mt-0.5">-</span> 
                    <span className="leading-relaxed">{r}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Core Stack */}
            <div>
              <h3 className="font-mono text-[10px] font-bold tracking-[0.1em] uppercase text-[var(--color-text-1)] flex items-center gap-2 mb-4">
                <Code2 className="w-4 h-4"/> Core Tech Stack
              </h3>
              <div className="flex flex-wrap gap-2 mb-8">
                {activeData.skills.map((s, idx) => (
                  <span key={idx} className="text-[11px] font-mono text-[var(--color-text-2)] bg-[var(--color-bg-2)] border border-[var(--color-border-2)] px-3 py-1.5 rounded">
                    {s}
                  </span>
                ))}
              </div>

              {/* Firms */}
              <h3 className="font-mono text-[10px] font-bold tracking-[0.1em] uppercase text-[var(--color-text-1)] flex items-center gap-2 mb-4">
                <Briefcase className="w-4 h-4"/> Target Firms
              </h3>
              <div className="flex flex-col gap-2">
                {activeData.firms.map((f, idx) => (
                  <a key={idx} href={f.link} target="_blank" rel="noreferrer" className="text-[12px] text-[var(--color-text-2)] hover:text-white flex items-center justify-between border border-[var(--color-border-2)] px-4 py-2 rounded transition-colors group bg-[var(--color-bg-2)]">
                    <span>{f.name}</span>
                    <ExternalLink className="w-3.5 h-3.5 opacity-40 group-hover:opacity-100" />
                  </a>
                ))}
              </div>
            </div>
          </div>

          <div className="border-t border-[var(--color-border-1)] p-8 lg:p-10 bg-[#000] textured-panel">
              <div className="font-mono text-[10px] font-bold tracking-[0.1em] uppercase text-[var(--color-text-3)] flex items-center gap-2 mb-4">
                <LinkIcon className="w-4 h-4"/> Recommended Prep Material
              </div>
              <div className="flex flex-col gap-3">
                {activeData.prep_links.map((link, idx) => (
                  <Link key={idx} href={link.url} className="text-[13px] text-[var(--color-text-2)] hover:text-[#34d399] transition-colors flex items-center gap-2 font-mono">
                    <ArrowRight className="w-3.5 h-3.5" /> {link.title}
                  </Link>
                ))}
              </div>
          </div>

        </div>
      </div>
    </div>
  );
}
