"use client";

import { useState } from "react";
import { FileText, ArrowRight, ExternalLink, Target, Code2 } from "lucide-react";
import Link from "next/link";

type ResearchPaper = {
  id: string;
  date: string;
  title: string;
  authors: string;
  venue: string;
  tags: string[];
  abstract: string;
  key_contributions: string[];
  relevance: string;
  link: string;
};

export default function ResearchWorkspace({ papers }: { papers: ResearchPaper[] }) {
  const [activePaper, setActivePaper] = useState<string>(papers[0].id);

  const activeData = papers.find(p => p.id === activePaper) || papers[0];

  return (
    <div className="pt-[60px] min-h-screen flex flex-col">
      {/* HEADER FILTER */}
      <div className="bg-[rgba(5,5,5,0.85)] backdrop-blur-md border-b border-[var(--color-border-1)] sticky top-[60px] z-[90]">
        <div className="max-w-[1440px] mx-auto px-4 lg:px-10 flex items-center">
          <div className="font-mono text-[9px] text-[var(--color-text-3)] uppercase tracking-[0.2em] flex items-center gap-2 mr-5 lg:mr-8 border-r border-[var(--color-border-1)] pr-5 lg:pr-8 py-3.5 flex-shrink-0">
            <span className="w-1.5 h-1.5 rounded-full bg-[var(--color-accent-1)] animate-pulse shadow-[0_0_5px_var(--color-accent-1)]"></span>
            Research Archive
          </div>
          
          <div className="flex gap-4 lg:gap-6 overflow-x-auto [scrollbar-width:none] [&::-webkit-scrollbar]:hidden w-full items-center">
            {papers.map(p => (
              <button
                key={p.id}
                onClick={() => setActivePaper(p.id)}
                className={`relative py-3.5 flex-shrink-0 font-mono text-[9.5px] lg:text-[10px] tracking-[0.1em] uppercase transition-all duration-300 flex items-center gap-1.5
                  ${activePaper === p.id 
                    ? 'text-[var(--color-text-1)] after:absolute after:bottom-[-1px] after:left-0 after:right-0 after:h-[2px] after:bg-[var(--color-accent-1)] after:shadow-[0_0_8px_rgba(217,119,6,0.8)]' 
                    : 'text-[var(--color-text-2)] hover:text-[var(--color-text-1)]'}`}
              >
                <FileText className="w-3.5 h-3.5 opacity-60" />
                <span>{p.id}</span>
              </button>
            ))}
          </div>
        </div>
      </div>

      <div className="flex-1 max-w-[1440px] mx-auto w-full flex flex-col relative p-4 lg:p-10">
        <div className="border border-[var(--color-border-1)] rounded overflow-hidden bg-[var(--color-bg-1)] textured-panel animate-in fade-in slide-in-from-bottom-4 duration-500 max-w-[900px] mx-auto w-full">
          
          {/* Top Info Banner */}
          <div className="p-8 lg:p-10 border-b border-[var(--color-border-1)] bg-[var(--color-bg-2)] relative overflow-hidden">
            <div className="font-mono text-[10px] text-[var(--color-text-3)] mb-3 tracking-widest uppercase flex items-center gap-3">
              <span className="text-[var(--color-accent-1)]">{activeData.date}</span>
              <span className="opacity-50">/</span>
              <span>{activeData.venue}</span>
            </div>
            <h1 className="font-serif text-[28px] lg:text-[36px] font-semibold text-[var(--color-text-1)] leading-tight mb-4 tracking-tight">
              {activeData.title}
            </h1>
            <div className="text-[13px] text-[var(--color-text-3)] font-mono mb-6 pb-6 border-b border-dashed border-[var(--color-border-2)]">
              {activeData.authors}
            </div>
            
            <h3 className="font-mono text-[10px] font-bold tracking-[0.1em] uppercase text-[var(--color-text-1)] mb-3">
              Abstract
            </h3>
            <p className="text-[14px] text-[var(--color-text-2)] leading-[1.8] max-w-3xl">
              {activeData.abstract}
            </p>
          </div>
          
          <div className="p-8 lg:p-10 grid grid-cols-1 md:grid-cols-2 gap-10">
            {/* Contributions */}
            <div>
              <h3 className="font-mono text-[10px] font-bold tracking-[0.1em] uppercase text-[var(--color-text-1)] flex items-center gap-2 mb-4">
                <Target className="w-4 h-4"/> Key Contributions
              </h3>
              <ul className="space-y-4">
                {activeData.key_contributions.map((c, idx) => (
                  <li key={idx} className="text-[13px] text-[var(--color-text-2)] flex items-start gap-3">
                    <span className="text-[var(--color-text-3)] mt-0.5">-</span> 
                    <span className="leading-relaxed">{c}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Relevance & Tags */}
            <div>
              <h3 className="font-mono text-[10px] font-bold tracking-[0.1em] uppercase text-[var(--color-text-1)] flex items-center gap-2 mb-4">
                <Code2 className="w-4 h-4"/> Impact & Relevance
              </h3>
              <p className="text-[13px] text-[var(--color-text-2)] leading-relaxed mb-8 bg-[var(--color-bg-2)] p-4 rounded border border-[var(--color-border-2)]">
                {activeData.relevance}
              </p>

              <h3 className="font-mono text-[10px] font-bold tracking-[0.1em] uppercase text-[var(--color-text-1)] mb-4">
                Research Categories
              </h3>
              <div className="flex flex-wrap gap-2">
                {activeData.tags.map((tag, idx) => (
                  <span key={idx} className="text-[10px] font-mono text-[var(--color-text-2)] bg-[var(--color-bg-2)] border border-[var(--color-border-2)] px-2.5 py-1 rounded">
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          </div>

          <div className="border-t border-[var(--color-border-1)] p-8 lg:p-10 bg-[#000] textured-panel flex items-center justify-between">
              <div className="font-mono text-[10px] uppercase text-[var(--color-text-3)]">
                Source Document
              </div>
              <a href={activeData.link} target="_blank" rel="noreferrer" className="text-[11px] font-mono bg-white text-black px-5 py-2.5 rounded hover:bg-[var(--color-accent-1)] transition-colors flex items-center gap-2 font-bold">
                Read Full Paper <ExternalLink className="w-3.5 h-3.5" />
              </a>
          </div>

        </div>
      </div>
    </div>
  );
}
