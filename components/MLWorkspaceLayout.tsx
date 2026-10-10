"use client";

import { useState } from "react";
import { Book, Video, Target, Cpu, Activity, Database, Network, Scissors, Minimize2, BrainCircuit, FlaskConical, PlaySquare, LayoutDashboard } from "lucide-react";

type PhaseData = {
  id: number;
  title: string;
  desc: string;
};

// Map phase IDs to specific icons
const phaseIcons: Record<number, React.ElementType> = {
  1: PlaySquare,
  2: Scissors,
  3: Minimize2,
  4: BrainCircuit,
  5: FlaskConical,
  6: Cpu
};

export default function MLWorkspaceLayout({ phases }: { phases: PhaseData[] }) {
  const [activePhase, setActivePhase] = useState<number | 'all'>('all');

  const activeData = activePhase === 'all' ? null : phases.find(p => p.id === activePhase);

  return (
    <div className="pt-[60px] min-h-screen flex flex-col">
      {/* ── THE VERY THIN, IMPACTFUL FILTER LAYER ── */}
      <div className="bg-[rgba(5,5,5,0.85)] backdrop-blur-md border-b border-[var(--color-border-1)] sticky top-[60px] z-[90]">
        <div className="max-w-[1440px] mx-auto px-4 lg:px-10 flex items-center">
          <div className="font-mono text-[9px] text-[var(--color-text-3)] uppercase tracking-[0.2em] flex items-center gap-2 mr-5 lg:mr-8 border-r border-[var(--color-border-1)] pr-5 lg:pr-8 py-3.5 flex-shrink-0">
            <span className="w-1.5 h-1.5 rounded-full bg-[#ec4899] animate-pulse shadow-[0_0_5px_#ec4899]"></span>
            ML Lab
          </div>
          
          <div className="flex gap-4 lg:gap-6 overflow-x-auto [scrollbar-width:none] [&::-webkit-scrollbar]:hidden w-full items-center">
            <button 
              onClick={() => setActivePhase('all')}
              className={`relative py-3.5 flex-shrink-0 font-mono text-[9.5px] lg:text-[10px] tracking-[0.1em] uppercase transition-all duration-300 flex items-center gap-2
                ${activePhase === 'all' 
                  ? 'text-[#ec4899] after:absolute after:bottom-[-1px] after:left-0 after:right-0 after:h-[2px] after:bg-[#ec4899] after:shadow-[0_0_8px_rgba(236,72,153,0.8)]' 
                  : 'text-[var(--color-text-2)] hover:text-[var(--color-text-1)]'}`}
            >
              <LayoutDashboard className="w-3.5 h-3.5" />
              Overview
            </button>
            
            {phases.map(p => {
              const Icon = phaseIcons[p.id] || Target;
              return (
                <button
                  key={p.id}
                  onClick={() => setActivePhase(p.id)}
                  className={`relative py-3.5 flex-shrink-0 font-mono text-[9.5px] lg:text-[10px] tracking-[0.1em] uppercase transition-all duration-300 flex items-center gap-1.5
                    ${activePhase === p.id 
                      ? 'text-[#ec4899] after:absolute after:bottom-[-1px] after:left-0 after:right-0 after:h-[2px] after:bg-[#ec4899] after:shadow-[0_0_8px_rgba(236,72,153,0.8)]' 
                      : 'text-[var(--color-text-2)] hover:text-[var(--color-text-1)]'}`}
                >
                  <Icon className="w-3.5 h-3.5" />
                  <span className="hidden lg:inline">{p.title.split(' ')[0]}</span>
                  <span className="lg:hidden">{p.id < 10 ? `M${p.id}` : p.id}</span>
                </button>
              );
            })}
          </div>
        </div>
      </div>

      <div className="flex-1 max-w-[1440px] mx-auto w-full flex flex-col lg:flex-row relative">
        
        {/* ML Sidebar */}
        <aside className="w-full lg:w-[240px] border-r border-[var(--color-border-1)] lg:sticky lg:top-[103px] lg:h-[calc(100vh-103px)] overflow-y-auto hidden lg:block bg-[rgba(5,5,5,0.4)]">
          <div className="p-5 border-b border-[var(--color-border-1)]">
            <h2 className="font-mono text-[10px] text-[#ec4899] uppercase tracking-[0.1em] mb-3">Model Pipeline</h2>
            <div className="space-y-1.5">
              <div className="text-[11px] font-mono text-[var(--color-text-2)] hover:text-white cursor-pointer flex items-center gap-2"><Network className="w-3.5 h-3.5"/> 01. Architecture</div>
              <div className="text-[11px] font-mono text-[var(--color-text-2)] hover:text-white cursor-pointer flex items-center gap-2"><Activity className="w-3.5 h-3.5"/> 02. Training</div>
              <div className="text-[11px] font-mono text-[var(--color-text-2)] hover:text-white cursor-pointer flex items-center gap-2"><Target className="w-3.5 h-3.5"/> 03. Optimization</div>
              <div className="text-[11px] font-mono text-[var(--color-text-2)] hover:text-white cursor-pointer flex items-center gap-2"><Cpu className="w-3.5 h-3.5"/> 04. Deployment</div>
            </div>
          </div>
          <div className="p-5">
            <h2 className="font-mono text-[10px] text-[var(--color-text-3)] uppercase tracking-[0.1em] mb-3">Course Links</h2>
            <div className="space-y-3">
              <a href="#" className="block text-[11px] font-mono text-[var(--color-text-2)] hover:text-white">Syllabus PDF</a>
              <a href="https://efficientml.ai" target="_blank" rel="noreferrer" className="block text-[11px] font-mono text-[var(--color-text-2)] hover:text-white">efficientml.ai Website</a>
              <a href="#" className="block text-[11px] font-mono text-[var(--color-text-2)] hover:text-white">GitHub Repository</a>
            </div>
          </div>
        </aside>

        <main className="flex-1 p-4 lg:p-8 overflow-y-auto">
          {activePhase === 'all' ? (
            <div className="animate-in fade-in duration-500">
              {/* Overview Header */}
              <div className="border border-[var(--color-border-1)] rounded overflow-hidden bg-[var(--color-bg-1)] textured-panel p-6 relative mb-6">
                <div className="absolute inset-0 bg-[radial-gradient(ellipse_60%_50%_at_80%_50%,rgba(236,72,153,0.06)_0%,transparent_70%)] pointer-events-none" />
                
                <div className="inline-flex items-center gap-1.5 font-mono text-[10px] font-medium text-[#ec4899] bg-[rgba(236,72,153,0.12)] border border-[rgba(236,72,153,0.3)] rounded-full px-2 py-0.5 mb-3">
                  Deep Learning Workspace
                </div>
                
                <h1 className="font-serif text-[24px] font-semibold leading-[1.2] tracking-[-0.02em] text-[var(--color-text-1)] mb-2">
                  Efficient Machine Learning <span className="text-[var(--color-text-3)]">(MIT 6.5940)</span>
                </h1>
                
                <p className="text-[12.5px] leading-[1.6] text-[var(--color-text-2)] max-w-[520px] mb-4">
                  Hardware architectures, model compression, pruning, quantization, and efficient deployment of Deep Learning models.
                </p>

                <div className="flex gap-2 flex-wrap">
                  <span className="inline-flex items-center gap-1.5 text-[10.5px] font-medium rounded px-2 py-0.5 border bg-[rgba(236,72,153,0.12)] text-[#ec4899] border-[rgba(236,72,153,0.3)]">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#ec4899]" /> Primary Course
                  </span>
                  <span className="inline-flex items-center gap-1.5 text-[10.5px] font-medium rounded px-2 py-0.5 border bg-[rgba(16,185,129,0.12)] text-[#34d399] border-[rgba(16,185,129,0.3)]">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#34d399]" /> Code Labs
                  </span>
                </div>
              </div>

              {/* YouTube Main Video Embed */}
              <div className="mb-8 border border-[var(--color-border-1)] rounded overflow-hidden bg-[var(--color-bg-1)] shadow-2xl">
                <div className="bg-[var(--color-bg-2)] border-b border-[var(--color-border-1)] p-4 flex items-center justify-between">
                   <div className="font-mono text-[10px] text-[var(--color-text-2)] tracking-widest uppercase">Lecture 01 • Introduction</div>
                   <div className="flex gap-2">
                     <span className="w-2.5 h-2.5 rounded-full bg-red-500"></span>
                     <span className="w-2.5 h-2.5 rounded-full bg-yellow-500"></span>
                     <span className="w-2.5 h-2.5 rounded-full bg-green-500"></span>
                   </div>
                </div>
                <div className="aspect-video w-full relative bg-black">
                  <iframe 
                    width="100%" 
                    height="100%" 
                    src="https://www.youtube.com/embed/tY75czj43_4?si=5XpNKb79yx05STH1" 
                    title="EfficientML.ai Lecture 1" 
                    frameBorder="0" 
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
                    referrerPolicy="strict-origin-when-cross-origin" 
                    allowFullScreen>
                  </iframe>
                </div>
              </div>

            </div>
          ) : (
            <div className="animate-in fade-in slide-in-from-bottom-4 duration-500" key={activePhase}>
              <div className="border border-[var(--color-border-1)] rounded overflow-hidden bg-[var(--color-bg-1)] textured-panel shadow-2xl">
                
                <div className="p-6 lg:p-8 border-b border-[var(--color-border-1)] bg-[var(--color-bg-2)] textured-panel relative overflow-hidden">
                  <div className="absolute -top-10 -right-10 opacity-5 text-[#ec4899]">
                    <Network className="w-64 h-64" />
                  </div>
                  <div className="relative z-10">
                    <div className="font-mono text-[10px] text-[#ec4899] mb-2 tracking-widest border border-[#ec4899] inline-block px-2 py-0.5 rounded bg-[rgba(236,72,153,0.05)]">
                      MODULE {activePhase < 10 ? `0${activePhase}` : activePhase}
                    </div>
                    <h1 className="font-serif text-[28px] lg:text-[32px] font-semibold text-[var(--color-text-1)] leading-tight mb-3 tracking-tight">
                      {activeData?.title}
                    </h1>
                    <p className="text-[13px] lg:text-[14px] text-[var(--color-text-2)] max-w-3xl leading-relaxed">
                      {activeData?.desc}
                    </p>
                  </div>
                </div>
                
                <div className="grid grid-cols-1 md:grid-cols-2 p-6 lg:p-8 gap-4">
                  <div className="bg-[var(--color-bg-2)] textured-panel border border-[var(--color-border-2)] rounded p-5">
                    <h3 className="font-mono text-[10px] font-bold tracking-[0.1em] uppercase text-[#ec4899] flex items-center gap-2 mb-3 pb-2 border-b border-dashed border-[var(--color-border-2)]">
                      <Book className="w-3.5 h-3.5"/> Theoretical Foundations
                    </h3>
                    <div className="text-[12px] text-[var(--color-text-2)] leading-relaxed">
                      Assigned readings, papers, and algorithmic theory covering this module's architecture techniques.
                    </div>
                  </div>
                  
                  <div className="bg-[var(--color-bg-2)] textured-panel border border-[var(--color-border-2)] rounded p-5">
                    <h3 className="font-mono text-[10px] font-bold tracking-[0.1em] uppercase text-[#60a5fa] flex items-center gap-2 mb-3 pb-2 border-b border-dashed border-[var(--color-border-2)]">
                      <Video className="w-3.5 h-3.5"/> Lab Implementations
                    </h3>
                    <div className="text-[12px] text-[var(--color-text-2)] leading-relaxed">
                      PyTorch notebooks and hardware deployment tasks related to optimizing models for this phase.
                    </div>
                  </div>
                </div>

                <div className="border-t border-[var(--color-border-1)] p-6 lg:p-8 bg-[#000] textured-panel">
                    <div className="font-mono text-[9px] text-[var(--color-text-3)] mb-1.5 tracking-widest uppercase">Module Progress</div>
                    <div className="text-[11.5px] text-[var(--color-text-2)]">
                      Awaiting lab submissions and code completion metrics.
                    </div>
                </div>

              </div>
            </div>
          )}
        </main>
      </div>
    </div>
  );
}
