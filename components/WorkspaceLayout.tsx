"use client";

import { useState } from "react";
import Sidebar from "./Sidebar";
import LegacySyllabus from "./LegacySyllabus";
import { Book, Video, Target, Terminal, Sigma, Dices, BarChart3, Code2, Database, LineChart, TrendingUp, Landmark, Activity, BrainCircuit, PieChart, Zap, Infinity as InfinityIcon, Cpu, FolderGit2, Users, Briefcase, LayoutDashboard } from "lucide-react";

type PhaseData = {
  id: number;
  title: string;
  desc: string;
};

const phaseIcons: Record<number, React.ElementType> = {
  0: Terminal,
  1: Sigma,
  2: Dices,
  3: BarChart3,
  4: Code2,
  5: Database,
  6: LineChart,
  7: TrendingUp,
  8: Landmark,
  9: Activity,
  10: Target,
  11: BrainCircuit,
  12: PieChart,
  13: Zap,
  14: InfinityIcon,
  15: Cpu,
  16: FolderGit2,
  17: Users,
  18: Briefcase
};

export default function WorkspaceLayout({ phases }: { phases: PhaseData[] }) {
  const [activePhase, setActivePhase] = useState<number | 'all'>('all');

  const activeData = activePhase === 'all' ? null : phases.find(p => p.id === activePhase);

  return (
    <div className="pt-[60px] min-h-screen flex flex-col">
      {/* ── THE VERY THIN, IMPACTFUL FILTER LAYER ── */}
      <div className="bg-[rgba(5,5,5,0.85)] backdrop-blur-md border-b border-[var(--color-border-1)] sticky top-[60px] z-[90]">
        <div className="max-w-[1440px] mx-auto px-4 lg:px-10 flex items-center">
          <div className="font-mono text-[9px] text-[var(--color-text-3)] uppercase tracking-[0.2em] flex items-center gap-2 mr-5 lg:mr-8 border-r border-[var(--color-border-1)] pr-5 lg:pr-8 py-3.5 flex-shrink-0">
            <span className="w-1.5 h-1.5 rounded-full bg-[var(--color-term-green)] animate-pulse shadow-[0_0_5px_var(--color-term-green)]"></span>
            Workspace
          </div>
          
          <div className="flex gap-4 lg:gap-6 overflow-x-auto [scrollbar-width:none] [&::-webkit-scrollbar]:hidden w-full items-center">
            <button 
              onClick={() => setActivePhase('all')}
              className={`relative py-3.5 flex-shrink-0 font-mono text-[9.5px] lg:text-[10px] tracking-[0.1em] uppercase transition-all duration-300 flex items-center gap-2
                ${activePhase === 'all' 
                  ? 'text-[var(--color-term-green)] after:absolute after:bottom-[-1px] after:left-0 after:right-0 after:h-[2px] after:bg-[var(--color-term-green)] after:shadow-[0_0_8px_rgba(16,185,129,0.8)]' 
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
                      ? 'text-[var(--color-term-green)] after:absolute after:bottom-[-1px] after:left-0 after:right-0 after:h-[2px] after:bg-[var(--color-term-green)] after:shadow-[0_0_8px_rgba(16,185,129,0.8)]' 
                      : 'text-[var(--color-text-2)] hover:text-[var(--color-text-1)]'}`}
                >
                  <Icon className="w-3.5 h-3.5" />
                  <span className="hidden lg:inline">{p.title}</span>
                  <span className="lg:hidden">{p.id < 10 ? `P${p.id}` : p.id}</span>
                </button>
              );
            })}
          </div>
        </div>
      </div>

      {/* ── MAIN DASHBOARD AREA ── */}
      <div className="flex-1 flex max-w-[1440px] w-full mx-auto">
        <Sidebar />
        
        <main className="flex-1 px-6 py-8 lg:px-10 w-full min-w-0">
          {activePhase === 'all' ? (
            <div className="animate-in fade-in duration-500">
              {/* Overview Header */}
              <div className="border border-[var(--color-border-1)] rounded overflow-hidden bg-[var(--color-bg-1)] textured-panel p-6 relative mb-6">
                <div className="absolute inset-0 bg-[radial-gradient(ellipse_60%_50%_at_80%_50%,rgba(99,102,241,0.06)_0%,transparent_70%)] pointer-events-none" />
                
                <div className="inline-flex items-center gap-1.5 font-mono text-[10px] font-medium text-[var(--color-accent-1)] bg-[rgba(217,119,6,0.12)] border border-[rgba(217,119,6,0.3)] rounded-full px-2 py-0.5 mb-3">
                  Terminal Mode Active
                </div>
                
                <h1 className="font-serif text-[24px] font-semibold leading-[1.2] tracking-[-0.02em] text-[var(--color-text-1)] mb-2">
                  Knowledge Base <span className="text-[var(--color-text-3)]">Workspace</span>
                </h1>
                
                <p className="text-[12.5px] leading-[1.6] text-[var(--color-text-2)] max-w-[520px] mb-4">
                  Everything else is optional. These resources carry the entire syllabus and roadmap. Use the Phase Filter at the top to focus on specific execution stages.
                </p>

                <div className="flex gap-2 flex-wrap">
                  <span className="inline-flex items-center gap-1.5 text-[10.5px] font-medium rounded px-2 py-0.5 border bg-[rgba(16,185,129,0.12)] text-[#34d399] border-[rgba(16,185,129,0.3)]">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#34d399]" /> Primary book
                  </span>
                  <span className="inline-flex items-center gap-1.5 text-[10.5px] font-medium rounded px-2 py-0.5 border bg-[rgba(99,102,241,0.12)] text-[#a5b4fc] border-[rgba(99,102,241,0.3)]">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#a5b4fc]" /> Primary video
                  </span>
                  <span className="inline-flex items-center gap-1.5 text-[10.5px] font-medium rounded px-2 py-0.5 border bg-[rgba(217,119,6,0.12)] text-[#fbbf24] border-[rgba(217,119,6,0.3)]">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#fbbf24]" /> Problems
                  </span>
                </div>
              </div>

              <LegacySyllabus />
            </div>
          ) : (
            <div className="animate-in fade-in slide-in-from-bottom-4 duration-500" key={activePhase}>
              <div className="border border-[var(--color-border-1)] rounded overflow-hidden bg-[var(--color-bg-1)] textured-panel shadow-2xl">
                
                {/* Phase Hero */}
                <div className="p-6 lg:p-8 border-b border-[var(--color-border-1)] bg-[var(--color-bg-2)] textured-panel relative overflow-hidden">
                  <div className="absolute -top-10 -right-10 opacity-5 text-[var(--color-term-green)]">
                    <Target className="w-64 h-64" />
                  </div>
                  <div className="relative z-10">
                    <div className="font-mono text-[10px] text-[var(--color-term-green)] mb-2 tracking-widest border border-[var(--color-term-green)] inline-block px-2 py-0.5 rounded bg-[rgba(16,185,129,0.05)]">
                      PHASE {activePhase}
                    </div>
                    <h1 className="font-serif text-[28px] lg:text-[32px] font-semibold text-[var(--color-text-1)] leading-tight mb-3 tracking-tight">
                      {activeData?.title}
                    </h1>
                    <p className="text-[13px] lg:text-[14px] text-[var(--color-text-2)] max-w-3xl leading-relaxed">
                      {activeData?.desc}
                    </p>
                  </div>
                </div>
                
                {/* Phase Grids */}
                <div className="grid grid-cols-1 md:grid-cols-2 p-6 lg:p-8 gap-4">
                  <div className="bg-[var(--color-bg-2)] textured-panel border border-[var(--color-border-2)] rounded p-5">
                    <h3 className="font-mono text-[10px] font-bold tracking-[0.1em] uppercase text-[#34d399] flex items-center gap-2 mb-3 pb-2 border-b border-dashed border-[var(--color-border-2)]">
                      <Book className="w-3.5 h-3.5"/> Primary Resources
                    </h3>
                    <div className="text-[12px] text-[var(--color-text-2)] leading-relaxed">
                      The core textbooks, lectures, and academic papers required to master this phase will be aggregated here in the CMS.
                    </div>
                  </div>
                  
                  <div className="bg-[var(--color-bg-2)] textured-panel border border-[var(--color-border-2)] rounded p-5">
                    <h3 className="font-mono text-[10px] font-bold tracking-[0.1em] uppercase text-[#a5b4fc] flex items-center gap-2 mb-3 pb-2 border-b border-dashed border-[var(--color-border-2)]">
                      <Video className="w-3.5 h-3.5"/> Execution & Action Items
                    </h3>
                    <div className="text-[12px] text-[var(--color-text-2)] leading-relaxed">
                      Practical tasks, code implementation exercises, and quantitative execution steps for this module.
                    </div>
                  </div>
                </div>

                <div className="border-t border-[var(--color-border-1)] p-6 lg:p-8 bg-[#000] textured-panel">
                    <div className="font-mono text-[9px] text-[var(--color-text-3)] mb-1.5 tracking-widest uppercase">Phase Status</div>
                    <div className="text-[11.5px] text-[var(--color-text-2)]">
                      Status tracking and progress persistence is currently disabled.
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
