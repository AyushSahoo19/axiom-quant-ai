import Topbar from "@/components/Topbar";
import BookCard from "@/components/BookCard";
import { FileText, BookOpen, Briefcase, ExternalLink, ArrowRight, ArrowUpRight, TrendingUp, BrainCircuit, Terminal, Target, Code2, Database } from "lucide-react";

const researchPapers = [
  {
    date: "Mar 2023",
    id: "arXiv:2303.11446",
    title: "Deep Reinforcement Learning for Quantitative Trading",
    authors: "Li, et al.",
    venue: "Quantitative Finance Archive",
    tags: ["Quant Finance", "RL"],
    desc: "A comprehensive framework applying deep Q-networks to continuous action spaces in algorithmic trading environments."
  },
  {
    date: "Jun 2017",
    id: "arXiv:1706.03762",
    title: "Attention Is All You Need",
    authors: "Vaswani, et al.",
    venue: "NIPS 2017",
    tags: ["Deep Learning", "Transformers"],
    desc: "The foundational paper introducing the Transformer architecture, replacing RNNs with self-attention mechanisms."
  },
  {
    date: "Sep 2026",
    id: "Editorial",
    title: "Limit Order Book Modelling via Microstructure",
    authors: "Quant Hub",
    venue: "Internal Research",
    tags: ["Market Microstructure", "HFT"],
    desc: "An intuitive breakdown of high-frequency order book dynamics, stochastic queues, and adverse selection."
  }
];

const careers = [
  {
    role: "Quantitative Researcher",
    type: "Hedge Funds / Prop Trading",
    compensation: "$300K - $1M+ Total Comp",
    skills: ["Stochastic Calculus", "Time Series", "Python/C++"],
    responsibilities: ["Develop predictive alpha models", "Research market microstructure", "Design systematic execution logic"],
    firmsList: ["Citadel", "Jane Street", "Two Sigma", "PDT Partners"],
    icon: TrendingUp
  },
  {
    role: "Machine Learning Engineer",
    type: "AI Labs / Big Tech",
    compensation: "$250K - $800K+ Total Comp",
    skills: ["PyTorch", "Distributed Systems", "CUDA"],
    responsibilities: ["Scale foundation models", "Optimize GPU memory kernels", "Deploy low-latency inference endpoints"],
    firmsList: ["OpenAI", "DeepMind", "Meta FAIR", "Anthropic"],
    icon: BrainCircuit
  },
  {
    role: "Quantitative Developer",
    type: "High-Frequency Trading",
    compensation: "$250K - $700K+ Total Comp",
    skills: ["C++20", "Low Latency", "Network Stack"],
    responsibilities: ["Optimize order routing engines", "Reduce nanosecond latencies", "Build high-throughput market data feed handlers"],
    firmsList: ["Optiver", "Jump Trading", "Hudson River Trading", "Tower Research"],
    icon: Terminal
  }
];

export default function Home() {
  return (
    <>
      <Topbar />
      <main className="bg-black min-h-screen overflow-hidden">
        {/* Main Hero Section */}
        <section className="relative min-h-[90vh] flex flex-col pt-[120px] pb-20 px-6 lg:px-16">
          
          <div className="max-w-[1440px] mx-auto w-full flex items-center justify-between relative">
            
            {/* Left Content (Typography & CTA) */}
            <div className="flex flex-col items-start text-left z-10 w-full lg:w-[45%] mt-10">
               
               <h1 className="text-[64px] lg:text-[88px] font-sans font-bold text-white leading-[1.0] tracking-[-0.03em] mb-6">
                 All in on <br className="hidden lg:block"/> Quant.
               </h1>
               
               <p className="text-[17px] text-zinc-400 leading-[1.7] max-w-[480px] mb-12 font-sans">
                 Give every researcher the golden path to use quantitative agents, then watch alpha multiply. Quant enablement and control in one platform.
               </p>
               
               <div className="flex items-center w-full max-w-[420px] bg-[#111] border border-zinc-800 p-1.5 rounded-full focus-within:border-zinc-600 transition-colors">
                 <input 
                   type="text" 
                   placeholder="Enter your email..." 
                   className="bg-transparent border-none text-white text-[15px] placeholder-zinc-500 flex-1 px-5 focus:outline-none focus:ring-0"
                 />
                 <button className="bg-white text-black text-[15px] font-semibold px-6 py-3 rounded-full hover:bg-zinc-200 transition-colors">
                   Get Access
                 </button>
               </div>
            </div>

            {/* Right Visual (Isometric 3D Architecture) */}
            <div className="hidden lg:flex w-[55%] h-[600px] relative items-center justify-center" style={{ perspective: '2000px' }}>
               <div 
                 className="relative w-[500px] h-[500px]" 
                 style={{ transform: 'rotateX(60deg) rotateZ(-45deg)', transformStyle: 'preserve-3d' }}
               >
                  {/* Outer Grid Lines (Floor) */}
                  <div className="absolute inset-0 border border-zinc-800/50 bg-[linear-gradient(rgba(255,255,255,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.03)_1px,transparent_1px)] bg-[size:50px_50px]" style={{ transform: 'translateZ(-50px)' }}></div>

                  {/* Central Stack */}
                  <div className="absolute top-[150px] left-[150px] w-[200px] h-[200px] bg-[#0a0a0a] border border-zinc-800" style={{ transform: 'translateZ(0px)' }}></div>
                  <div className="absolute top-[165px] left-[165px] w-[170px] h-[170px] bg-[#111] border border-zinc-700" style={{ transform: 'translateZ(20px)' }}></div>
                  <div className="absolute top-[180px] left-[180px] w-[140px] h-[140px] bg-[#050015] border border-[#a855f7] flex items-center justify-center shadow-[0_0_80px_rgba(168,85,247,0.4)] animate-pulse" style={{ transform: 'translateZ(40px)' }}>
                     <Terminal className="w-16 h-16 text-[#a855f7]" />
                  </div>

                  {/* Connecting Dashed Lines */}
                  <div className="absolute top-[250px] left-[50px] w-[100px] border-t border-dashed border-zinc-600" style={{ transform: 'translateZ(0px)' }}></div>
                  <div className="absolute top-[250px] left-[350px] w-[100px] border-t border-dashed border-zinc-600" style={{ transform: 'translateZ(0px)' }}></div>
                  <div className="absolute top-[50px] left-[250px] h-[100px] border-l border-dashed border-zinc-600" style={{ transform: 'translateZ(0px)' }}></div>
                  <div className="absolute top-[350px] left-[250px] h-[100px] border-l border-dashed border-zinc-600" style={{ transform: 'translateZ(0px)' }}></div>

                  {/* Satellite Blocks */}
                  {/* Left */}
                  <div className="absolute top-[210px] left-[20px] w-[80px] h-[80px] bg-[#0a0a0a] border border-zinc-700 flex items-center justify-center group hover:bg-zinc-800 hover:-translate-x-2 transition-all duration-300" style={{ transform: 'translateZ(10px)' }}>
                     <div className="flex flex-col items-center gap-2">
                       <Code2 className="w-6 h-6 text-zinc-300" />
                       <span className="text-[10px] font-sans text-zinc-500 font-medium tracking-wide">PyTorch</span>
                     </div>
                  </div>
                  
                  {/* Right */}
                  <div className="absolute top-[210px] left-[400px] w-[80px] h-[80px] bg-[#0a0a0a] border border-zinc-700 flex items-center justify-center group hover:bg-zinc-800 hover:translate-x-2 transition-all duration-300" style={{ transform: 'translateZ(10px)' }}>
                     <div className="flex flex-col items-center gap-2">
                       <Target className="w-6 h-6 text-zinc-300" />
                       <span className="text-[10px] font-sans text-zinc-500 font-medium tracking-wide">Exec</span>
                     </div>
                  </div>

                  {/* Top */}
                  <div className="absolute top-[20px] left-[210px] w-[80px] h-[80px] bg-[#0a0a0a] border border-zinc-700 flex items-center justify-center group hover:bg-zinc-800 hover:-translate-y-2 transition-all duration-300" style={{ transform: 'translateZ(10px)' }}>
                     <div className="flex flex-col items-center gap-2">
                       <Database className="w-6 h-6 text-zinc-300" />
                       <span className="text-[10px] font-sans text-zinc-500 font-medium tracking-wide">Data</span>
                     </div>
                  </div>

                  {/* Bottom */}
                  <div className="absolute top-[400px] left-[210px] w-[80px] h-[80px] bg-[#0a0a0a] border border-zinc-700 flex items-center justify-center group hover:bg-zinc-800 hover:translate-y-2 transition-all duration-300" style={{ transform: 'translateZ(10px)' }}>
                     <div className="flex flex-col items-center gap-2">
                       <TrendingUp className="w-6 h-6 text-zinc-300" />
                       <span className="text-[10px] font-sans text-zinc-500 font-medium tracking-wide">Alpha</span>
                     </div>
                  </div>

               </div>
            </div>
            
          </div>
        </section>

        <section className="max-w-[1100px] mx-auto px-10 pb-[80px]" id="library">
          <div className="flex items-center gap-4 mb-10 after:content-[''] after:flex-1 after:h-px after:bg-[linear-gradient(90deg,var(--color-border-1)_50%,transparent_50%)] after:bg-[length:4px_1px]">
            <h2 className="font-mono text-[12px] text-[var(--color-text-3)] uppercase tracking-[0.1em] flex items-center gap-2"><BookOpen className="w-4 h-4"/> Curated Volumes</h2>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-[16px]">
            
            <BookCard 
              vol="VOL I · ACADEMIC"
              label="VOLUME I"
              title="Mathematical Statistics"
              desc="Complete IIT JAM syllabus mapping. Foundations of sequences, calculus, probability, and rigorous statistical inference."
              href="/resources"
              chapters={[
                { title: "A 1 Mathematics", page: "pg.01" },
                { title: "A 4 Probability", page: "pg.42" },
                { title: "A 9 Inference", page: "pg.89" }
              ]}
            />

            <BookCard 
              vol="VOL II · PROFESSIONAL"
              label="VOLUME II"
              title="The Quant Roadmap"
              desc="18-phase progression from orientation to career applications in systematic trading, market microstructure, and quantitative research."
              href="/resources#phase0"
              colorClass="green"
              chapters={[
                { title: "Ph 01 Foundation", page: "pg.01" },
                { title: "Ph 07 Time Series", page: "pg.55" },
                { title: "Ph 12 Portfolio Risk", page: "pg.120" }
              ]}
            />

            <BookCard 
              vol="VOL III · ARTIFICIAL INTELLIGENCE"
              label="VOLUME III"
              title="Efficient Machine Learning"
              desc="MIT 6.5940: Hardware architectures, model compression, pruning, quantization, and efficient deployment of Deep Learning models."
              href="/efficient-ml"
              colorClass="pink"
              chapters={[
                { title: "M 01 Architecture", page: "pg.12" },
                { title: "M 03 Quantization", page: "pg.45" },
                { title: "M 06 Hardware", page: "pg.92" }
              ]}
            />

            <BookCard 
              vol="VOL IV · RESEARCH"
              label="VOLUME IV"
              title="Advanced Mathematics"
              desc="Measure theory, stochastic calculus, and deep mathematical modeling for advanced research. (Currently in drafting phase)."
              href="#"
              isActive={false}
              chapters={[
                { title: "A  Measure Theory", page: "---" },
                { title: "A  Stochastic Calc", page: "---" },
                { title: "A  Topology", page: "---" }
              ]}
            />

          </div>
        </section>

        {/* Research & Publications */}
        <section className="max-w-[1100px] mx-auto px-10 pb-[100px]" id="research">
          <div className="flex items-center gap-4 mb-10 after:content-[''] after:flex-1 after:h-px after:bg-[linear-gradient(90deg,var(--color-border-1)_50%,transparent_50%)] after:bg-[length:4px_1px]">
            <h2 className="font-mono text-[12px] text-[var(--color-text-3)] uppercase tracking-[0.1em] flex items-center gap-2"><FileText className="w-4 h-4"/> Research Archive</h2>
          </div>
          
          <div className="flex flex-col border-t border-[var(--color-border-1)]">
            {researchPapers.map((paper, i) => (
              <a key={i} href="/research" className="py-8 border-b border-[var(--color-border-1)] flex flex-col md:flex-row gap-6 md:gap-8 hover:bg-[rgba(255,255,255,0.015)] transition-colors group">
                
                {/* Left: Metadata */}
                <div className="w-full md:w-[220px] flex-shrink-0">
                  <div className="font-mono text-[10px] text-[var(--color-text-3)] mb-1 uppercase tracking-widest">{paper.date}</div>
                  <div className="font-mono text-[10px] text-[var(--color-accent-1)] tracking-widest uppercase mb-4">{paper.id}</div>
                  <div className="flex flex-wrap gap-1.5">
                    {paper.tags.map(tag => (
                      <span key={tag} className="text-[9px] font-mono border border-[var(--color-border-2)] rounded px-1.5 py-0.5 text-[var(--color-text-3)] bg-[var(--color-bg-2)]">
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
                
                {/* Center: Content */}
                <div className="flex-1">
                  <h3 className="font-serif text-[20px] text-[var(--color-text-1)] mb-1.5 leading-snug group-hover:text-[var(--color-term-green)] transition-colors pr-10">{paper.title}</h3>
                  <div className="text-[11px] text-[var(--color-text-3)] font-mono mb-4">{paper.authors} <span className="opacity-50 mx-2">|</span> <span className="text-[var(--color-text-2)]">{paper.venue}</span></div>
                  <p className="text-[13px] text-[var(--color-text-2)] leading-relaxed max-w-3xl">{paper.desc}</p>
                </div>
                
                {/* Right: Action Icon */}
                <div className="hidden md:flex w-[60px] flex-shrink-0 items-center justify-end">
                  <div className="w-10 h-10 rounded-full border border-[var(--color-border-2)] flex items-center justify-center text-[var(--color-text-3)] group-hover:border-[var(--color-term-green)] group-hover:text-[var(--color-term-green)] transition-all group-hover:shadow-[0_0_15px_rgba(16,185,129,0.15)] bg-[var(--color-bg-1)]">
                    <ArrowUpRight className="w-4 h-4" />
                  </div>
                </div>
              </a>
            ))}
          </div>
        </section>

        {/* Careers & Industry */}
        <section className="max-w-[1100px] mx-auto px-10 pb-[120px]" id="careers">
          <div className="flex items-center gap-4 mb-10 after:content-[''] after:flex-1 after:h-px after:bg-[linear-gradient(90deg,var(--color-border-1)_50%,transparent_50%)] after:bg-[length:4px_1px]">
            <h2 className="font-mono text-[12px] text-[var(--color-text-3)] uppercase tracking-[0.1em] flex items-center gap-2"><Briefcase className="w-4 h-4"/> Industry Careers</h2>
          </div>
          
          <div className="flex flex-col gap-6">
            {careers.map((career, i) => {
              const Icon = career.icon;
              return (
                <div key={i} className="border border-[var(--color-border-1)] rounded bg-[var(--color-bg-1)] p-6 md:p-8 flex flex-col lg:flex-row gap-8 textured-panel relative overflow-hidden group hover:border-[var(--color-border-2)] transition-colors">
                   
                   {/* Left: Role identity */}
                   <div className="w-full lg:w-[280px] flex-shrink-0 lg:border-r border-dashed border-[var(--color-border-2)] pb-6 lg:pb-0 lg:pr-8 relative z-10 border-b lg:border-b-0">
                      <div className="inline-flex items-center gap-1.5 font-mono text-[9px] font-bold tracking-widest uppercase mb-4 px-2 py-0.5 rounded border border-[var(--color-border-2)] text-[var(--color-text-3)]">
                        <Icon className="w-3 h-3" /> {career.type}
                      </div>
                      <h3 className="font-serif text-[22px] text-[var(--color-text-1)] mb-2 leading-tight group-hover:text-white transition-colors">{career.role}</h3>
                      <div className="text-[11px] font-mono text-[var(--color-text-3)] mb-6">{career.compensation}</div>
                      
                      <a href="/careers" className="text-[10px] font-mono flex items-center justify-center gap-2 w-full py-2.5 rounded border border-[var(--color-border-2)] text-[var(--color-text-2)] hover:border-[var(--color-border-1)] hover:text-[var(--color-text-1)] transition-colors">
                        <Terminal className="w-3 h-3"/> View Roadmap <ArrowRight className="w-3 h-3"/>
                      </a>
                   </div>
                   
                   {/* Center: Details */}
                   <div className="flex-1 grid grid-cols-1 sm:grid-cols-2 gap-8 relative z-10">
                     <div>
                        <div className="text-[9px] font-mono text-[var(--color-text-3)] uppercase tracking-widest mb-4 flex items-center gap-2">
                           <Code2 className="w-3.5 h-3.5"/> Core Tech Stack
                        </div>
                        <div className="flex flex-wrap gap-2">
                           {career.skills.map(s => (
                             <span key={s} className="text-[10px] font-mono text-[var(--color-text-2)] bg-[var(--color-bg-2)] border border-[var(--color-border-2)] px-2.5 py-1 rounded">
                               {s}
                             </span>
                           ))}
                        </div>
                     </div>
                     <div>
                        <div className="text-[9px] font-mono text-[var(--color-text-3)] uppercase tracking-widest mb-4 flex items-center gap-2">
                           <Target className="w-3.5 h-3.5"/> Key Responsibilities
                        </div>
                        <ul className="space-y-3">
                           {career.responsibilities.map((r, idx) => (
                             <li key={idx} className="text-[12px] text-[var(--color-text-2)] flex items-start gap-2.5 leading-snug">
                               <span className="text-[var(--color-border-2)] mt-0.5">-</span> {r}
                             </li>
                           ))}
                        </ul>
                     </div>
                   </div>
                   
                   {/* Right: Firms */}
                   <div className="w-full lg:w-[200px] flex-shrink-0 bg-[var(--color-bg-2)] p-5 rounded border border-[var(--color-border-2)] relative z-10 group-hover:border-[var(--color-border-1)] transition-colors">
                     <div className="text-[9px] font-mono text-[var(--color-text-3)] uppercase tracking-widest mb-4 text-center">Top Target Firms</div>
                     <div className="flex flex-col gap-2.5">
                       {career.firmsList.map(f => (
                         <div key={f} className="text-[11px] text-[var(--color-text-2)] text-center font-mono border-b border-dashed border-[var(--color-border-2)] pb-2.5 last:border-0 last:pb-0">
                           {f}
                         </div>
                       ))}
                     </div>
                   </div>

                </div>
              );
            })}
          </div>
        </section>
      </main>

      <footer className="border-t border-dashed border-[var(--color-border-1)] p-10 text-center font-mono text-[11px] text-[var(--color-text-3)]">
        &copy; 2026 Learning & Research Hub. All systems nominal.
      </footer>
    </>
  );
}
