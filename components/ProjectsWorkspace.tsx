"use client";

import { useState } from "react";
import { FolderGit2, FolderOpen, Code2, Globe, ArrowUpRight, GitBranch, Target, Activity, Lock, Maximize2, MoreHorizontal, Cpu, Database, Network } from "lucide-react";

type Project = {
  id: string;
  title: string;
  desc: string;
  status: 'live' | 'in-progress' | 'planned';
  tech: string[];
  metrics: { label: string; value: string }[];
  size: 'small' | 'large' | 'tall' | 'wide';
};

export default function ProjectsWorkspace() {
  const [projects] = useState<Project[]>([
    {
      id: 'p1',
      title: 'High-Frequency Trading Execution Engine',
      desc: 'A C++ based order matching and execution engine designed to process FIX messages with microsecond latency.',
      status: 'in-progress',
      tech: ['C++', 'FIX Protocol', 'ZeroMQ', 'CUDA'],
      metrics: [{ label: 'Latency', value: '4μs' }, { label: 'Throughput', value: '1.2M/s' }],
      size: 'large'
    },
    {
      id: 'p2',
      title: 'Black-Scholes Pricer',
      desc: 'Python implementation of European Options pricing with Greeks calculation and volatility surface visualization.',
      status: 'live',
      tech: ['Python', 'NumPy', 'Matplotlib'],
      metrics: [{ label: 'Models', value: '3' }, { label: 'Speed', value: '2ms' }],
      size: 'wide'
    },
    {
      id: 'p3',
      title: 'Statistical Arbitrage Bot',
      desc: 'Pairs trading algorithm leveraging co-integration and mean-reversion strategies.',
      status: 'planned',
      tech: ['Python', 'Pandas', 'Statsmodels'],
      metrics: [{ label: 'Pairs', value: '500+' }, { label: 'Backtest Sharpe', value: '2.1' }],
      size: 'tall'
    },
    {
      id: 'p4',
      title: 'Order Book Imbalance Signal',
      desc: 'Real-time calculation of order book imbalance to predict short-term price movements.',
      status: 'live',
      tech: ['Rust', 'WebSockets'],
      metrics: [{ label: 'Accuracy', value: '62%' }],
      size: 'small'
    },
    {
      id: 'p5',
      title: 'Yield Curve Constructor',
      desc: 'Bootstrapping algorithm to construct zero-coupon yield curves from market swap rates.',
      status: 'in-progress',
      tech: ['QuantLib', 'C++'],
      metrics: [{ label: 'Instruments', value: '14' }],
      size: 'small'
    }
  ]);

  const getStatusColor = (status: string) => {
    switch(status) {
      case 'live': return 'text-emerald-400 bg-emerald-400/10 border-emerald-400/20';
      case 'in-progress': return 'text-indigo-400 bg-indigo-400/10 border-indigo-400/20';
      case 'planned': return 'text-zinc-400 bg-zinc-400/10 border-zinc-400/20';
    }
  };

  return (
    <div className="pt-[60px] min-h-screen flex flex-col bg-[#030303] font-sans relative">
      
      {/* ── STANDARD LIBRARY DASHBOARD FILTER BAR ── */}
      <div className="bg-[rgba(5,5,5,0.85)] backdrop-blur-md border-b border-[var(--color-border-1)] sticky top-[60px] z-[90]">
        <div className="max-w-[1440px] mx-auto px-4 lg:px-10 flex items-center justify-between">
          <div className="flex items-center">
            <div className="font-mono text-[9px] text-[var(--color-text-3)] uppercase tracking-[0.2em] flex items-center gap-2 mr-5 lg:mr-8 border-r border-[var(--color-border-1)] pr-5 lg:pr-8 py-2.5 flex-shrink-0">
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse shadow-[0_0_5px_rgba(16,185,129,0.8)]"></span>
              Project Portfolio
            </div>
            
            <div className="flex gap-4 lg:gap-6 overflow-x-auto [scrollbar-width:none] [&::-webkit-scrollbar]:hidden items-center">
              <div className="relative py-2.5 flex-shrink-0 font-mono text-[9.5px] lg:text-[10px] tracking-[0.1em] uppercase text-emerald-400 after:absolute after:bottom-[-1px] after:left-0 after:right-0 after:h-[2px] after:bg-emerald-500 after:shadow-[0_0_8px_rgba(16,185,129,0.8)] flex items-center gap-2">
                <FolderGit2 className="w-3.5 h-3.5" />
                Overview Dashboard
              </div>
            </div>
          </div>
          
          <button className="flex items-center gap-1.5 bg-[var(--color-bg-2)] hover:bg-white text-[var(--color-text-2)] hover:text-black border border-[var(--color-border-2)] hover:border-white px-3 py-1 rounded-full text-[9px] uppercase font-mono tracking-widest transition-all">
            <FolderOpen className="w-3.5 h-3.5" /> Import Project
          </button>
        </div>
      </div>

      <div className="flex-1 p-6 lg:p-10 max-w-[1440px] mx-auto w-full">
        
        {/* TOP METRICS ROW */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
          <div className="bg-[var(--color-bg-1)] textured-panel border border-[var(--color-border-1)] rounded-2xl p-5 flex flex-col hover:border-zinc-500 transition-colors">
            <div className="flex items-center gap-2 text-zinc-400 mb-3">
              <FolderGit2 className="w-4 h-4" />
              <span className="text-[10px] uppercase font-bold tracking-widest">Active Modules</span>
            </div>
            <div className="text-3xl font-mono text-white mb-1">{projects.length}</div>
            <div className="text-[11px] text-emerald-400 flex items-center gap-1"><ArrowUpRight className="w-3 h-3"/> +2 this month</div>
          </div>
          
          <div className="bg-[var(--color-bg-1)] textured-panel border border-[var(--color-border-1)] rounded-2xl p-5 flex flex-col hover:border-zinc-500 transition-colors">
            <div className="flex items-center gap-2 text-zinc-400 mb-3">
              <Code2 className="w-4 h-4" />
              <span className="text-[10px] uppercase font-bold tracking-widest">Code Volume</span>
            </div>
            <div className="text-3xl font-mono text-white mb-1">124k</div>
            <div className="text-[11px] text-zinc-500 flex items-center gap-1">Lines of active code</div>
          </div>

          <div className="bg-[var(--color-bg-1)] textured-panel border border-[var(--color-border-1)] rounded-2xl p-5 flex flex-col hover:border-zinc-500 transition-colors">
            <div className="flex items-center gap-2 text-zinc-400 mb-3">
              <Cpu className="w-4 h-4" />
              <span className="text-[10px] uppercase font-bold tracking-widest">Compute Load</span>
            </div>
            <div className="text-3xl font-mono text-white mb-1">94%</div>
            <div className="text-[11px] text-indigo-400 flex items-center gap-1"><Activity className="w-3 h-3"/> HFT Engine Maxing</div>
          </div>

          <div className="bg-[var(--color-bg-1)] textured-panel border border-[var(--color-border-1)] rounded-2xl p-5 flex flex-col hover:border-zinc-500 transition-colors">
            <div className="flex items-center gap-2 text-zinc-400 mb-3">
              <Database className="w-4 h-4" />
              <span className="text-[10px] uppercase font-bold tracking-widest">Data Processed</span>
            </div>
            <div className="text-3xl font-mono text-white mb-1">1.4 TB</div>
            <div className="text-[11px] text-zinc-500 flex items-center gap-1">Market data streams</div>
          </div>
        </div>

        {/* MIDDLE SECTION: Charts & Stack */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-8">
          
          {/* Heatmap / Activity Mockup */}
          <div className="lg:col-span-2 bg-[var(--color-bg-1)] textured-panel border border-[var(--color-border-1)] rounded-2xl p-6 hover:border-[var(--color-border-2)] transition-colors">
            <div className="flex items-center justify-between mb-6">
              <h2 className="text-[12px] font-bold text-zinc-300 uppercase tracking-widest flex items-center gap-2">
                <Activity className="w-4 h-4 text-emerald-500" /> Deployment Frequency
              </h2>
              <span className="text-[10px] font-mono text-zinc-500">Last 30 Days</span>
            </div>
            <div className="flex items-end gap-2 h-[140px] border-b border-[var(--color-border-2)] pb-2">
              {Array.from({length: 30}).map((_, i) => (
                <div key={i} className="flex-1 flex flex-col justify-end gap-1 group">
                  <div 
                    className="w-full bg-emerald-500/20 rounded-sm group-hover:bg-emerald-400 transition-colors"
                    style={{ height: `${Math.random() * 100 + 10}%` }}
                  ></div>
                </div>
              ))}
            </div>
          </div>

          {/* Tech Stack Distribution */}
          <div className="bg-[var(--color-bg-1)] textured-panel border border-[var(--color-border-1)] rounded-2xl p-6 hover:border-[var(--color-border-2)] transition-colors">
             <div className="flex items-center justify-between mb-6">
              <h2 className="text-[12px] font-bold text-zinc-300 uppercase tracking-widest flex items-center gap-2">
                <Network className="w-4 h-4 text-indigo-500" /> Tech Stack
              </h2>
            </div>
            <div className="space-y-5">
              {[
                { name: 'C++', usage: 45, color: 'bg-indigo-500' },
                { name: 'Python', usage: 35, color: 'bg-blue-500' },
                { name: 'Rust', usage: 15, color: 'bg-orange-500' },
                { name: 'CUDA', usage: 5, color: 'bg-emerald-500' },
              ].map(tech => (
                <div key={tech.name}>
                  <div className="flex justify-between text-[11px] font-mono text-zinc-400 mb-1.5">
                    <span>{tech.name}</span>
                    <span>{tech.usage}%</span>
                  </div>
                  <div className="w-full h-1.5 bg-zinc-800 rounded-full overflow-hidden">
                    <div className={`h-full ${tech.color}`} style={{ width: `${tech.usage}%` }}></div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* BOTTOM SECTION: Dense Table */}
        <div className="bg-[var(--color-bg-1)] textured-panel border border-[var(--color-border-1)] rounded-2xl overflow-hidden">
          <div className="px-6 py-5 border-b border-[var(--color-border-1)] flex items-center justify-between bg-[var(--color-bg-2)]">
            <h2 className="text-[12px] font-bold text-zinc-300 uppercase tracking-widest">Project Database</h2>
            <div className="flex items-center gap-2">
              <button className="text-[11px] text-zinc-400 hover:text-white transition-colors bg-zinc-800/50 px-3 py-1 rounded-md border border-zinc-700">Filter</button>
              <button className="text-[11px] text-zinc-400 hover:text-white transition-colors bg-zinc-800/50 px-3 py-1 rounded-md border border-zinc-700">Sort</button>
            </div>
          </div>
          
          <table className="w-full text-left border-collapse">
            <thead>
              <tr className="border-b border-[var(--color-border-2)]">
                <th className="py-3 px-6 text-[10px] font-bold text-zinc-500 uppercase tracking-widest">Project Name</th>
                <th className="py-3 px-6 text-[10px] font-bold text-zinc-500 uppercase tracking-widest hidden md:table-cell">Stack</th>
                <th className="py-3 px-6 text-[10px] font-bold text-zinc-500 uppercase tracking-widest">Status</th>
                <th className="py-3 px-6 text-[10px] font-bold text-zinc-500 uppercase tracking-widest text-right">Actions</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-[var(--color-border-2)]">
              {projects.map(project => (
                <tr key={project.id} className="hover:bg-[var(--color-bg-2)] transition-colors group cursor-pointer">
                  <td className="py-4 px-6">
                    <div className="text-[13px] font-medium text-zinc-200 mb-0.5">{project.title}</div>
                    <div className="text-[11px] text-zinc-500 line-clamp-1 max-w-sm">{project.desc}</div>
                  </td>
                  <td className="py-4 px-6 hidden md:table-cell">
                    <div className="flex gap-1.5 flex-wrap max-w-[200px]">
                      {project.tech.slice(0,2).map(t => (
                        <span key={t} className="text-[9px] font-mono text-zinc-400 bg-zinc-800/50 border border-zinc-700 px-1.5 py-0.5 rounded">
                          {t}
                        </span>
                      ))}
                      {project.tech.length > 2 && <span className="text-[9px] font-mono text-zinc-500">+{project.tech.length - 2}</span>}
                    </div>
                  </td>
                  <td className="py-4 px-6">
                    <span className={`text-[9px] px-2 py-1 rounded-md border uppercase tracking-wider font-bold inline-flex items-center gap-1 ${getStatusColor(project.status)}`}>
                      {project.status === 'live' && <span className="w-1.5 h-1.5 bg-emerald-400 rounded-full animate-pulse" />}
                      {project.status}
                    </span>
                  </td>
                  <td className="py-4 px-6 text-right">
                    <button className="p-1.5 text-zinc-500 hover:text-white transition-colors opacity-0 group-hover:opacity-100">
                      <MoreHorizontal className="w-4 h-4" />
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

      </div>
    </div>
  );
}
