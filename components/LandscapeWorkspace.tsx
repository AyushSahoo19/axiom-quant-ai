"use client";

import { useState } from "react";
import { Network, AlertTriangle, Lightbulb, Building2, Briefcase, ChevronRight, Zap, Target, BookOpen, Database, Globe } from "lucide-react";

export default function LandscapeWorkspace() {
  const [activeTab, setActiveTab] = useState<'bottlenecks' | 'knowledge' | 'companies' | 'problems'>('bottlenecks');

  const bottlenecks = [
    { title: "Market Data Acquisition Costs", desc: "High-quality, tick-level L3 order book data is prohibitively expensive for solo researchers.", icon: Database, color: "text-rose-400" },
    { title: "Non-Stationary Regimes", desc: "Financial data distributions change rapidly. A model trained on 2023 data may fail in 2024.", icon: AlertTriangle, color: "text-amber-400" },
    { title: "Execution Latency", desc: "HFT requires co-location and FPGA hardware. Retail infrastructure is too slow to compete.", icon: Zap, color: "text-indigo-400" },
    { title: "Compute Bounds", desc: "Training large-scale deep learning models on full market histories requires massive GPU clusters.", icon: Network, color: "text-emerald-400" }
  ];

  const knowledge = [
    { title: "Stochastic Calculus", desc: "Ito's Lemma, Brownian Motion, and Black-Scholes dynamics for pricing derivatives." },
    { title: "Market Microstructure", desc: "Understanding order book dynamics, slippage, bid-ask spread, and market impact models." },
    { title: "Machine Learning", desc: "Time-series forecasting, Transformers, Reinforcement Learning for execution." },
    { title: "Systems Engineering", desc: "Low-latency C++, Rust, ZeroMQ, and hardware optimization." }
  ];

  const companies = [
    { name: "Jane Street", type: "Proprietary Trading", focus: "OCaml, Quantitative Trading, ETFs" },
    { name: "Two Sigma", type: "Hedge Fund", focus: "Machine Learning, Big Data, Alpha Research" },
    { name: "Citadel Securities", type: "Market Maker", focus: "HFT, C++, Algorithmic Execution" },
    { name: "Hudson River Trading", type: "HFT Firm", focus: "Automated Trading, Core Engineering" },
    { name: "Numerai", type: "AI Hedge Fund", focus: "Crowdsourced ML, Cryptography, Blockchain" },
    { name: "Renaissance Technologies", type: "Quantitative Fund", focus: "Hidden Markov Models, Statistical Arbitrage" }
  ];

  const problems = [
    { title: "Causal Inference in Trading", desc: "Moving from correlation (which breaks) to true causality in financial time series." },
    { title: "LLMs for Sentiment Analysis", desc: "Extracting pure alpha from SEC filings, earnings calls, and news in real-time without hallucination." },
    { title: "Portfolio Optimization at Scale", desc: "Solving massive convex optimization problems dynamically with transaction costs factored in." }
  ];

  return (
    <div className="pt-[60px] min-h-screen flex flex-col bg-[#030303] font-sans relative">
      
      {/* ── STANDARD LIBRARY DASHBOARD FILTER BAR ── */}
      <div className="bg-[rgba(5,5,5,0.85)] backdrop-blur-md border-b border-[var(--color-border-1)] sticky top-[60px] z-[90]">
        <div className="max-w-[1440px] mx-auto px-4 lg:px-10 flex items-center justify-between">
          <div className="flex items-center">
            <div className="font-mono text-[9px] text-[var(--color-text-3)] uppercase tracking-[0.2em] flex items-center gap-2 mr-5 lg:mr-8 border-r border-[var(--color-border-1)] pr-5 lg:pr-8 py-2.5 flex-shrink-0">
              <span className="w-1.5 h-1.5 rounded-full bg-rose-500 animate-pulse shadow-[0_0_5px_rgba(244,63,94,0.8)]"></span>
              Domain Landscape
            </div>
            
            <div className="flex gap-4 lg:gap-6 overflow-x-auto [scrollbar-width:none] [&::-webkit-scrollbar]:hidden items-center">
              {[
                { id: 'bottlenecks', icon: AlertTriangle, label: 'Bottlenecks' },
                { id: 'knowledge', icon: BookOpen, label: 'Core Knowledge' },
                { id: 'problems', icon: Target, label: 'Open Problems' },
                { id: 'companies', icon: Building2, label: 'Startups & Firms' },
              ].map(tab => (
                <button 
                  key={tab.id}
                  onClick={() => setActiveTab(tab.id as any)}
                  className={`relative py-2.5 flex-shrink-0 font-mono text-[9.5px] lg:text-[10px] tracking-[0.1em] uppercase transition-all duration-300 flex items-center gap-2
                    ${activeTab === tab.id 
                      ? 'text-rose-400 after:absolute after:bottom-[-1px] after:left-0 after:right-0 after:h-[2px] after:bg-rose-500 after:shadow-[0_0_8px_rgba(244,63,94,0.8)]' 
                      : 'text-[var(--color-text-2)] hover:text-[var(--color-text-1)]'}`}
                >
                  <tab.icon className="w-3.5 h-3.5" />
                  {tab.label}
                </button>
              ))}
            </div>
          </div>
        </div>
      </div>

      <div className="flex-1 p-6 lg:p-10 max-w-[1440px] mx-auto w-full">

        <div className="mb-10 text-center max-w-2xl mx-auto mt-4">
          <h1 className="text-3xl font-bold text-white mb-4 tracking-tight">The Quant & AI Ecosystem</h1>
          <p className="text-[13px] text-zinc-400 leading-relaxed">
            A comprehensive mapping of the systemic bottlenecks, core mathematical prerequisites, unsolved industry problems, and the leading proprietary trading firms driving the space.
          </p>
        </div>

        {/* VIEW: BOTTLENECKS */}
        {activeTab === 'bottlenecks' && (
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 animate-in fade-in slide-in-from-bottom-4 duration-500">
            {bottlenecks.map((item, idx) => (
              <div key={idx} className="bg-[var(--color-bg-1)] textured-panel border border-[var(--color-border-1)] rounded-2xl p-6 hover:border-zinc-500 transition-colors group">
                <div className={`w-10 h-10 rounded-xl bg-[var(--color-bg-2)] flex items-center justify-center mb-4 border border-[var(--color-border-2)] group-hover:scale-110 transition-transform ${item.color}`}>
                  <item.icon className="w-5 h-5" />
                </div>
                <h3 className="text-[15px] font-bold text-white mb-2">{item.title}</h3>
                <p className="text-[12px] text-zinc-400 leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        )}

        {/* VIEW: KNOWLEDGE */}
        {activeTab === 'knowledge' && (
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 animate-in fade-in slide-in-from-bottom-4 duration-500">
            {knowledge.map((item, idx) => (
              <div key={idx} className="bg-[var(--color-bg-1)] textured-panel border border-l-4 border-[var(--color-border-1)] border-l-indigo-500 rounded-2xl p-6 hover:border-zinc-500 transition-colors">
                <h3 className="text-[15px] font-bold text-white mb-2 flex items-center gap-2">
                  <BookOpen className="w-4 h-4 text-indigo-400" /> {item.title}
                </h3>
                <p className="text-[12px] text-zinc-400 leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        )}

        {/* VIEW: PROBLEMS */}
        {activeTab === 'problems' && (
          <div className="space-y-4 animate-in fade-in slide-in-from-bottom-4 duration-500">
            {problems.map((item, idx) => (
              <div key={idx} className="bg-[var(--color-bg-1)] textured-panel border border-[var(--color-border-1)] rounded-2xl p-6 flex items-start gap-4 hover:border-zinc-500 transition-colors">
                <div className="mt-1 w-2 h-2 rounded-full bg-rose-500 animate-pulse shadow-[0_0_8px_rgba(244,63,94,0.8)] flex-shrink-0" />
                <div>
                  <h3 className="text-[14px] font-bold text-white mb-1.5">{item.title}</h3>
                  <p className="text-[12px] text-zinc-400 leading-relaxed">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
        )}

        {/* VIEW: COMPANIES */}
        {activeTab === 'companies' && (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 animate-in fade-in slide-in-from-bottom-4 duration-500">
            {companies.map((company, idx) => (
              <div key={idx} className="bg-[var(--color-bg-1)] textured-panel border border-[var(--color-border-1)] rounded-2xl p-6 hover:-translate-y-1 transition-all shadow-xl group">
                <div className="flex items-center justify-between mb-4">
                  <div className="w-10 h-10 rounded-full bg-[var(--color-bg-2)] border border-[var(--color-border-2)] flex items-center justify-center">
                    <Building2 className="w-5 h-5 text-emerald-400" />
                  </div>
                  <span className="text-[9px] uppercase tracking-widest font-mono text-zinc-500 bg-[var(--color-bg-2)] px-2 py-1 rounded">
                    {company.type}
                  </span>
                </div>
                <h3 className="text-[15px] font-bold text-white mb-1 group-hover:text-emerald-400 transition-colors">{company.name}</h3>
                <p className="text-[11px] text-zinc-500 mb-4">{company.focus}</p>
                <button className="text-[11px] font-bold text-emerald-400 hover:text-emerald-300 flex items-center gap-1">
                  View Roles <ChevronRight className="w-3 h-3" />
                </button>
              </div>
            ))}
          </div>
        )}

      </div>
    </div>
  );
}
