/* eslint-disable react/no-unescaped-entities */
"use client";

import React from "react";

export default function LegacySyllabus() {
  return (
    <div className="mb-10">
      {/* 5 books */}
  <div id="books">
    <div className="section-head"><h2>The five books</h2></div>
    <div className="book-grid">

      <div className="book-card">
        <div className="bc-label">B1 · Weeks 1–5</div>
        <h4>Introduction to Real Analysis</h4>
        <div className="bc-by">Bartle &amp; Sherbert</div>
        <div className="bc-desc">One-variable analysis from completeness through integration. Read 2.3–2.5 before chapter 3 — every theorem there rests on the LUB property.</div>
        <div className="bc-ch">2.3–2.5 · 3.1–3.5 · 3.7<br/>4.1–4.3 · 5.1 · 5.3<br/>6.1–6.4 · 7.1–7.3 · 9.1–9.3</div>
      </div>

      <div className="book-card">
        <div className="bc-label">B2 · Weeks 8–18</div>
        <h4>Intro to Probability and Statistics</h4>
        <div className="bc-by">Rohatgi &amp; Saleh</div>
        <div className="bc-desc">The standard reference for this paper. Opens week 8 and stays open for ten consecutive weeks. Dense and worth the density.</div>
        <div className="bc-ch">Ch. 1–4 · 5.1–5.3 · 6<br/>7.1–7.4 · 4.6 · 8<br/>9 · 10 · 11 · 13</div>
      </div>

      <div className="book-card">
        <div className="bc-label">B3 · Weeks 10–17</div>
        <h4>Introduction to Mathematical Statistics</h4>
        <div className="bc-by">Hogg, McKean &amp; Craig</div>
        <div className="bc-desc">Read in parallel with Rohatgi from week 10. Clearer on gamma, chi-square, sufficiency and testing. Read this first on those topics.</div>
        <div className="bc-ch">1.5–1.10 · 2 · 3.1–3.4<br/>3.6 · 4.4 · 5.1–5.3<br/>6.1–6.2 · 7.1–7.6 · 8.1–8.3</div>
      </div>

      <div className="book-card">
        <div className="bc-label">B4 · Weeks 6–7</div>
        <h4>Linear Algebra</h4>
        <div className="bc-by">Hoffman &amp; Kunze</div>
        <div className="bc-desc">The rigour behind §3. Ch. 8–9 on quadratic forms deserve two full days — they carry covariance matrices, least squares, and Markov limiting behaviour.</div>
        <div className="bc-ch">Ch. 1–3 · Ch. 5<br/>Ch. 6 · Ch. 8–9</div>
      </div>

      <div className="book-card">
        <div className="bc-label">B5 · Week 18</div>
        <h4>Introduction to Probability Models</h4>
        <div className="bc-by">Sheldon Ross</div>
        <div className="bc-desc">Rohatgi does not cover stochastic processes. Ross is the only real option. Ch. 4.4 is where §3 eigenvectors return as stationary distributions.</div>
        <div className="bc-ch">Ch. 4.1–4.4 · Ch. 5.1–5.3</div>
      </div>

    </div>
  </div>

  {/* supporting */}
  <div id="support">
    <div className="section-head"><h2>Supporting books — three gaps, three fillers</h2></div>
    <div className="book-grid">

      <div className="book-card">
        <div className="bc-label">Weeks 4–5</div>
        <h4>Thomas' Calculus</h4>
        <div className="bc-by">Thomas, Weir &amp; Hass</div>
        <div className="bc-desc">Bartle does not cover two-variable calculus at all. Thomas has the diagrams that make the Hessian and Lagrange multipliers geometrically obvious.</div>
        <div className="bc-ch">Ch. 14 (two-variable)<br/>Ch. 15 (double integrals, Jacobian)</div>
      </div>

      <div className="book-card">
        <div className="bc-label">Weeks 3–5</div>
        <h4>Mathematical Analysis</h4>
        <div className="bc-by">Malik &amp; Arora</div>
        <div className="bc-desc">Indian exam vocabulary. Leibnitz's rule for the nth derivative, improper integrals, and Beta–Gamma — three things Bartle skips.</div>
        <div className="bc-ch">Successive differentiation<br/>Improper integrals · Beta &amp; Gamma</div>
      </div>

      <div className="book-card">
        <div className="bc-label">Weeks 8–9</div>
        <h4>Fundamentals of Mathematical Statistics</h4>
        <div className="bc-by">Gupta &amp; Kapoor</div>
        <div className="bc-desc">Descriptive statistics only — where both Rohatgi and Hogg are thin. Ch. 10 has partial and multiple correlation the syllabus names explicitly.</div>
        <div className="bc-ch">Ch. 2–3 (descriptive)<br/>Ch. 10 (correlation)</div>
      </div>

    </div>
  </div>

  {/* courses */}
  <div id="courses">
    <div className="section-head"><h2>The three courses</h2></div>
    <div className="course-grid">

      <div className="course-card">
        <div className="cc-label">V1 · Weeks 8–13 · §§4–7</div>
        <h4>Statistics 110 · Probability</h4>
        <div className="cc-by">Joe Blitzstein · Harvard · Free</div>
        <div className="cc-desc">34 lectures + free textbook at probabilitybook.net. Each distribution defined by the question it answers — exactly how the paper rewards understanding over recall. Carries four sections.</div>
        <div className="cc-lec">L1–L8  → §4 (probability)<br/>L9–L20 → §5 (distributions)<br/>L21–L26 → §6 (multivariate)<br/>L29–L31 → §7 (limit theorems)</div>
        <a className="cc-link" href="https://stat110.hsites.harvard.edu/youtube">stat110.hsites.harvard.edu/youtube</a>
      </div>

      <div className="course-card">
        <div className="cc-label">V2 · Weeks 14–17 · §§8–10</div>
        <h4>18.650 · Statistics for Applications</h4>
        <div className="cc-by">Philippe Rigollet · MIT OCW · Free</div>
        <div className="cc-desc">The only source that explains why Fisher information deserves its name. Stop at L11 — lectures 17 onward cover Bayesian, PCA and GLM, none of which are in the JAM syllabus.</div>
        <div className="cc-lec">L1–L2  → §8 (sampling)<br/>L3–L6  → §9 (estimation)<br/>L7–L11 → §10 (testing)</div>
        <a className="cc-link" href="https://ocw.mit.edu/courses/18-650-statistics-for-applications-fall-2016">ocw.mit.edu · 18.650</a>
      </div>

      <div className="course-card">
        <div className="cc-label">V3 · Weeks 4–5 · §§2b–2c</div>
        <h4>18.02 · Multivariable Calculus</h4>
        <div className="cc-by">Denis Auroux · MIT OCW · Free</div>
        <div className="cc-desc">The two-variable and integral half of §2, which no textbook covers as well. L18 on change of variables is the definitive Jacobian explanation. Skip L1–L7 and L15 onward.</div>
        <div className="cc-lec">L8–L14  → §2b (two-variable)<br/>L16–L18 → §2c (integrals, Jacobian)</div>
        <a className="cc-link" href="https://ocw.mit.edu/courses/18-02-multivariable-calculus-fall-2007">ocw.mit.edu · 18.02</a>
      </div>

      <div className="course-card md:col-span-3 border border-[rgba(16,185,129,0.3)] bg-[rgba(16,185,129,0.02)]">
        <div className="flex flex-col md:flex-row gap-6 items-center">
          <div className="flex-1 w-full">
            <div className="cc-label text-[var(--color-term-green)]">V4 · Complete Masterclass · All Sections</div>
            <h4 className="text-[16px] mb-2">IIT JAM Mathematical Statistics Full Course</h4>
            <div className="cc-by mb-3">Curated Playlist · YouTube Video Series</div>
            <div className="cc-desc text-[12px] leading-relaxed">
              A comprehensive video course covering the entirety of the IIT JAM MS syllabus, from Mathematical foundations to advanced Inference. Features full topic breakdowns, past paper solutions, and concept visualizations.
            </div>
            <a className="cc-link mt-4 inline-block text-[var(--color-term-green)] hover:text-white" href="https://www.youtube.com/results?search_query=IIT+JAM+Mathematical+Statistics+Playlist" target="_blank" rel="noreferrer">youtube.com/playlist/iit-jam-ms</a>
          </div>
          
          <a href="https://www.youtube.com/results?search_query=IIT+JAM+Mathematical+Statistics+Playlist" target="_blank" rel="noreferrer" className="w-full md:w-[280px] aspect-video bg-[var(--color-bg-2)] rounded border border-[var(--color-border-2)] overflow-hidden relative group block hover:border-[var(--color-term-green)] transition-all flex-shrink-0">
            {/* Premium YouTube Thumbnail Overlay */}
            <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1635070041078-e363dbe005cb?q=80&w=600&auto=format&fit=crop')] bg-cover bg-center opacity-30 group-hover:opacity-50 transition-opacity mix-blend-luminosity"></div>
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent"></div>
            
            <div className="absolute inset-0 flex items-center justify-center">
               <div className="w-10 h-10 bg-[#FF0000] rounded-full flex items-center justify-center text-white shadow-[0_0_20px_rgba(255,0,0,0.5)] group-hover:scale-110 transition-transform">
                 <svg className="w-4 h-4 ml-1" fill="currentColor" viewBox="0 0 24 24"><path d="M8 5v14l11-7z"/></svg>
               </div>
            </div>
            
            <div className="absolute bottom-2 left-2 flex items-center gap-1.5">
              <span className="w-1.5 h-1.5 rounded-full bg-red-500 animate-pulse"></span>
              <span className="text-[9px] font-mono font-semibold text-white tracking-wider">LIVE RECORDING</span>
            </div>
            <div className="absolute bottom-2 right-2 bg-black/90 border border-white/10 px-2 py-0.5 rounded text-[9px] font-mono text-white tracking-widest">
              PLAYLIST
            </div>
          </a>
        </div>
      </div>

    </div>
    <div className="notice">
      <strong>Also watch:</strong> 3Blue1Brown <em>Essence of Calculus</em> (12 ep, ~3h) before week 3, and <em>Essence of Linear Algebra</em> (15 ep, ~3h) before week 6. Both free at <a className="cc-link" href="https://www.3blue1brown.com">3blue1brown.com</a>. Watch once with no notes — after them, the theorems have pictures.
    </div>
  </div>

  {/* mathematics group */}
  <div className="grp">
    <div className="grp-eyebrow">Mathematics · Sections 1–3</div>
    <div className="grp-title">Weeks one to seven</div>
    <div className="grp-sub">Foundation. No timed practice anywhere in these seven weeks. The aim is that you can derive rather than recall.</div>
  </div>

  {/* S1 */}
  <div className="sec open" id="s1">
    <div className="sec-hdr" onClick={(e) => e.currentTarget.closest(".sec")?.classList.toggle("open")}>
      <span className="sec-tag">§1</span>
      <div><div className="sec-title">Sequences and series</div><div className="sec-sub">What it means for infinitely many things to add up to something finite</div></div>
      <span className="sec-wk">Wk 1–2</span>
      <svg className="sec-chevron" width="14" height="14" viewBox="0 0 24 24" fill="none"><path d="M6 9l6 6 6-6" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round"/></svg>
    </div>
    <div className="sec-body">
      <div className="sec-col">
        <div className="col-hd book">
          <svg viewBox="0 0 24 24" fill="none"><path d="M4 19.5A2.5 2.5 0 016.5 17H20" stroke="currentColor" strokeWidth={2} strokeLinecap="round"/><path d="M6.5 2H20v20H6.5A2.5 2.5 0 014 19.5v-15A2.5 2.5 0 016.5 2z" stroke="currentColor" strokeWidth={2} strokeLinecap="round"/></svg>
          Book
        </div>
        <div className="ritem">
          <div className="rname">Bartle &amp; Sherbert — Sequences</div>
          <span className="rch">Ch. 2.3–2.5 → then 3.1–3.5</span>
          <div className="rnote">Read 2.3–2.5 before anything in chapter 3. Every theorem there rests on the completeness section most candidates skip.</div>
        </div>
        <div className="ritem">
          <div className="rname">Bartle &amp; Sherbert — Series</div>
          <span className="rch">Ch. 3.7 · 9.1–9.3</span>
          <div className="rnote">9.1 covers all convergence tests. 9.3 covers absolute, conditional and power series with endpoints.</div>
        </div>
        <div className="ritem">
          <div className="rname">Rudin — limsup/liminf gap</div>
          <span className="rch">Principles · 3.16–3.17 only</span>
          <div className="rnote">Bartle treats limsup only in exercises. Rudin's three pages are definitive. Read them instead of working around the gap.</div>
        </div>
      </div>
      <div className="sec-col">
        <div className="col-hd vid">
          <svg viewBox="0 0 24 24" fill="none"><polygon points="5 3 19 12 5 21 5 3" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round"/></svg>
          Video
        </div>
        <div className="ritem">
          <div className="rname">Kulkarni — Real Analysis</div>
          <span className="rch">NPTEL 111106053 · sequences, Cauchy, limsup, all tests</span>
          <div className="rnote">The only free course that covers exactly what coaching skips — Cauchy sequences, Bolzano–Weierstrass and limsup properly. Watch after each chapter, not before.</div>
          <a href="https://nptel.ac.in/courses/111106053" target="_blank" rel="noreferrer" className="block mt-2 group relative rounded overflow-hidden border border-[var(--color-border-2)] hover:border-[var(--color-term-green)] transition-colors">
        <div className="aspect-video w-full bg-[#000] relative">
          <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1635070041078-e363dbe005cb?w=400&q=80')] bg-cover bg-center opacity-40 group-hover:opacity-70 transition-opacity mix-blend-luminosity"></div>
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="w-6 h-6 bg-red-600 rounded-full flex items-center justify-center text-white shadow-[0_0_10px_rgba(220,38,38,0.5)] group-hover:scale-110 transition-transform">
              <svg className="w-3 h-3 ml-0.5" fill="currentColor" viewBox="0 0 24 24"><path d="M8 5v14l11-7z"/></svg>
            </div>
          </div>
        </div>
        <div className="p-1.5 bg-[var(--color-bg-2)] text-[9px] font-mono text-[var(--color-text-2)] truncate group-hover:text-[var(--color-term-green)] flex justify-between items-center">
          <span>nptel.ac.in/courses/111106053</span>
          <span className="opacity-50">▶ PLAY</span>
        </div>
      </a>
        </div>
      </div>
      <div className="sec-col">
        <div className="col-hd prob">
          <svg viewBox="0 0 24 24" fill="none"><path d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z" stroke="currentColor" strokeWidth={2}/></svg>
          Problems
        </div>
        <div className="ritem">
          <div className="rname">Kaczor &amp; Nowak Vol. I</div>
          <span className="rch">Ch. 2 (sequences) · Ch. 3 (series)</span>
          <div className="rnote">~400 problems with full solutions. Nothing else is close for this section. Ten routine, five hard, two that may defeat you — every session.</div>
        </div>
        <div className="ritem">
          <div className="rname">Demidovich — standard limits</div>
          <span className="rch">limits section · 25 problems/day · 2 days</span>
          <div className="rnote">Speed only. The growth hierarchy must become a reflex before week 3.</div>
        </div>
      </div>
    </div>
  </div>

  {/* S2a */}
  <div className="sec" id="s2a">
    <div className="sec-hdr" onClick={(e) => e.currentTarget.closest(".sec")?.classList.toggle("open")}>
      <span className="sec-tag">§2a</span>
      <div><div className="sec-title">One-variable differential calculus</div><div className="sec-sub">Limits, continuity, MVT, Taylor, L'Hôpital, extrema</div></div>
      <span className="sec-wk">Wk 3</span>
      <svg className="sec-chevron" width="14" height="14" viewBox="0 0 24 24" fill="none"><path d="M6 9l6 6 6-6" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round"/></svg>
    </div>
    <div className="sec-body">
      <div className="sec-col">
        <div className="col-hd book"><svg viewBox="0 0 24 24" fill="none"><path d="M4 19.5A2.5 2.5 0 016.5 17H20" stroke="currentColor" strokeWidth={2} strokeLinecap="round"/><path d="M6.5 2H20v20H6.5A2.5 2.5 0 014 19.5v-15A2.5 2.5 0 016.5 2z" stroke="currentColor" strokeWidth={2} strokeLinecap="round"/></svg>Book</div>
        <div className="ritem">
          <div className="rname">Bartle &amp; Sherbert</div>
          <span className="rch">4.1–4.3 · 5.1 · 5.3 · 6.1–6.4 · 7.1–7.3</span>
          <div className="rnote">6.4 = Taylor with both remainder forms. 7.1–7.3 = both fundamental theorems. Read Malik &amp; Arora for Leibnitz's nth-derivative rule which Bartle skips.</div>
        </div>
      </div>
      <div className="sec-col">
        <div className="col-hd vid"><svg viewBox="0 0 24 24" fill="none"><polygon points="5 3 19 12 5 21 5 3" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round"/></svg>Video</div>
        <div className="ritem">
          <div className="rname">3Blue1Brown — Essence of Calculus</div>
          <span className="rch">All 12 episodes · ~3 hours · watch before Bartle</span>
          <div className="rnote">After this the derivative and the fundamental theorem have pictures. Ep. 10 on Taylor series is the one that pays most later — the m.g.f. is a Taylor series.</div>
          <a className="rlink" href="https://www.3blue1brown.com/topics/calculus">3blue1brown.com/topics/calculus</a>
        </div>
      </div>
      <div className="sec-col">
        <div className="col-hd prob"><svg viewBox="0 0 24 24" fill="none"><path d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z" stroke="currentColor" strokeWidth={2}/></svg>Problems</div>
        <div className="ritem">
          <div className="rname">Demidovich</div>
          <span className="rch">limits · derivatives · L'Hôpital · 30/day</span>
          <div className="rnote">Raw computational volume. Speed is the goal. Also: 10 Leibnitz recurrence problems from Malik &amp; Arora — that is the standard JAM question type for this section.</div>
        </div>
      </div>
    </div>
  </div>

  {/* S2b */}
  <div className="sec" id="s2b">
    <div className="sec-hdr" onClick={(e) => e.currentTarget.closest(".sec")?.classList.toggle("open")}>
      <span className="sec-tag">§2b</span>
      <div><div className="sec-title">Two-variable differential calculus</div><div className="sec-sub">Limits, partials, Hessian, saddle points, Lagrange multipliers</div></div>
      <span className="sec-wk">Wk 4</span>
      <svg className="sec-chevron" width="14" height="14" viewBox="0 0 24 24" fill="none"><path d="M6 9l6 6 6-6" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round"/></svg>
    </div>
    <div className="sec-body">
      <div className="sec-col">
        <div className="col-hd book"><svg viewBox="0 0 24 24" fill="none"><path d="M4 19.5A2.5 2.5 0 016.5 17H20" stroke="currentColor" strokeWidth={2} strokeLinecap="round"/><path d="M6.5 2H20v20H6.5A2.5 2.5 0 014 19.5v-15A2.5 2.5 0 016.5 2z" stroke="currentColor" strokeWidth={2} strokeLinecap="round"/></svg>Book</div>
        <div className="ritem">
          <div className="rname">Thomas' Calculus</div>
          <span className="rch">Ch. 14 entire</span>
          <div className="rnote">Bartle doesn't cover two-variable calculus at all. Thomas has the diagrams that make the Hessian test and Lagrange multipliers obvious.</div>
        </div>
        <div className="ritem">
          <div className="rname">Malik &amp; Arora — counterexamples</div>
          <span className="rch">two-variable chapter</span>
          <div className="rnote">Indian exam vocabulary. Counterexamples for every failed implication in the smoothness hierarchy — partials exist without continuity, etc.</div>
        </div>
      </div>
      <div className="sec-col">
        <div className="col-hd vid"><svg viewBox="0 0 24 24" fill="none"><polygon points="5 3 19 12 5 21 5 3" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round"/></svg>Video</div>
        <div className="ritem">
          <div className="rname">Auroux — MIT 18.02</div>
          <span className="rch">Lectures 8–14 · watch before Thomas</span>
          <div className="rnote">L8–10: limits, partials, Hessian. L11–12: chain rules, total differentiation. L13–14: Lagrange multipliers. The best two-variable calculus teaching available anywhere.</div>
          <a href="https://ocw.mit.edu/courses/18-02-multivariable-calculus-fall-2007" target="_blank" rel="noreferrer" className="block mt-2 group relative rounded overflow-hidden border border-[var(--color-border-2)] hover:border-[var(--color-term-green)] transition-colors">
        <div className="aspect-video w-full bg-[#000] relative">
          <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1518133910546-b6c2fb7d79e3?w=400&q=80')] bg-cover bg-center opacity-40 group-hover:opacity-70 transition-opacity mix-blend-luminosity"></div>
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="w-6 h-6 bg-red-600 rounded-full flex items-center justify-center text-white shadow-[0_0_10px_rgba(220,38,38,0.5)] group-hover:scale-110 transition-transform">
              <svg className="w-3 h-3 ml-0.5" fill="currentColor" viewBox="0 0 24 24"><path d="M8 5v14l11-7z"/></svg>
            </div>
          </div>
        </div>
        <div className="p-1.5 bg-[var(--color-bg-2)] text-[9px] font-mono text-[var(--color-text-2)] truncate group-hover:text-[var(--color-term-green)] flex justify-between items-center">
          <span>ocw.mit.edu · 18.02</span>
          <span className="opacity-50">▶ PLAY</span>
        </div>
      </a>
        </div>
      </div>
      <div className="sec-col">
        <div className="col-hd prob"><svg viewBox="0 0 24 24" fill="none"><path d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z" stroke="currentColor" strokeWidth={2}/></svg>Problems</div>
        <div className="ritem">
          <div className="rname">Malik &amp; Arora exercises</div>
          <span className="rch">two-variable section</span>
          <div className="rnote">Prioritise path-limit disproofs and Hessian classifications. Write the x²y/(x⁴+y²) counterexample from memory and verify it — this is the canonical exam trap.</div>
        </div>
      </div>
    </div>
  </div>

  {/* S2c */}
  <div className="sec" id="s2c">
    <div className="sec-hdr" onClick={(e) => e.currentTarget.closest(".sec")?.classList.toggle("open")}>
      <span className="sec-tag">§2c</span>
      <div><div className="sec-title">Integral calculus</div><div className="sec-sub">FTC, diff under integral, improper integrals, Beta–Gamma, double integrals, Jacobian</div></div>
      <span className="sec-wk">Wk 5 ★</span>
      <svg className="sec-chevron" width="14" height="14" viewBox="0 0 24 24" fill="none"><path d="M6 9l6 6 6-6" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round"/></svg>
    </div>
    <div className="sec-body">
      <div className="sec-col">
        <div className="col-hd book"><svg viewBox="0 0 24 24" fill="none"><path d="M4 19.5A2.5 2.5 0 016.5 17H20" stroke="currentColor" strokeWidth={2} strokeLinecap="round"/><path d="M6.5 2H20v20H6.5A2.5 2.5 0 014 19.5v-15A2.5 2.5 0 016.5 2z" stroke="currentColor" strokeWidth={2} strokeLinecap="round"/></svg>Book</div>
        <div className="ritem">
          <div className="rname">Bartle &amp; Sherbert</div>
          <span className="rch">Ch. 7.1–7.3 · Riemann integral + FTC</span>
        </div>
        <div className="ritem">
          <div className="rname">Thomas' Calculus</div>
          <span className="rch">Ch. 15 · double integrals, Jacobian</span>
          <div className="rnote">Change of order, polar, substitution, the 2D Jacobian, arc length, area, volume.</div>
        </div>
        <div className="ritem">
          <div className="rname">Malik &amp; Arora</div>
          <span className="rch">improper integrals · Beta and Gamma</span>
          <div className="rnote">Derive B(m,n) = Γ(m)Γ(n)/Γ(m+n) yourself before reading any proof. This single result pays for §§5, 6, 8 and 9.</div>
        </div>
        <div className="ritem">
          <div className="rname">Keith Conrad's notes</div>
          <span className="rch">search "Conrad differentiation under integral sign"</span>
          <div className="rnote">Best treatment anywhere. Returns in §9 as the engine of Cramér–Rao.</div>
        </div>
      </div>
      <div className="sec-col">
        <div className="col-hd vid"><svg viewBox="0 0 24 24" fill="none"><polygon points="5 3 19 12 5 21 5 3" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round"/></svg>Video</div>
        <div className="ritem">
          <div className="rname">Auroux — MIT 18.02</div>
          <span className="rch">Lectures 16–18 · watch before Thomas ch. 15</span>
          <div className="rnote">L18 on change of variables is the definitive Jacobian explanation — the Jacobian as an area-scaling factor, not just a formula that appears.</div>
          <a href="https://ocw.mit.edu/courses/18-02-multivariable-calculus-fall-2007" target="_blank" rel="noreferrer" className="block mt-2 group relative rounded overflow-hidden border border-[var(--color-border-2)] hover:border-[var(--color-term-green)] transition-colors">
        <div className="aspect-video w-full bg-[#000] relative">
          <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1518133910546-b6c2fb7d79e3?w=400&q=80')] bg-cover bg-center opacity-40 group-hover:opacity-70 transition-opacity mix-blend-luminosity"></div>
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="w-6 h-6 bg-red-600 rounded-full flex items-center justify-center text-white shadow-[0_0_10px_rgba(220,38,38,0.5)] group-hover:scale-110 transition-transform">
              <svg className="w-3 h-3 ml-0.5" fill="currentColor" viewBox="0 0 24 24"><path d="M8 5v14l11-7z"/></svg>
            </div>
          </div>
        </div>
        <div className="p-1.5 bg-[var(--color-bg-2)] text-[9px] font-mono text-[var(--color-text-2)] truncate group-hover:text-[var(--color-term-green)] flex justify-between items-center">
          <span>ocw.mit.edu · 18.02</span>
          <span className="opacity-50">▶ PLAY</span>
        </div>
      </a>
        </div>
      </div>
      <div className="sec-col">
        <div className="col-hd prob"><svg viewBox="0 0 24 24" fill="none"><path d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z" stroke="currentColor" strokeWidth={2}/></svg>Problems</div>
        <div className="ritem">
          <div className="rname">Demidovich · then Malik &amp; Arora</div>
          <span className="rch">integrals → Beta/Gamma → double integrals</span>
          <div className="rnote">Derive B(m,n) from the definition at least twice using two different methods. Then change the order of integration over three non-rectangular regions by hand.</div>
        </div>
      </div>
      <div className="callout">
        <svg width="14" height="14" viewBox="0 0 24 24" fill="none"><path d="M12 9v4m0 4h.01M10.29 3.86L1.82 18a2 2 0 001.71 3h16.94a2 2 0 001.71-3L13.71 3.86a2 2 0 00-3.42 0z" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round"/></svg>
        <div><strong>Highest-leverage week in the plan.</strong> Differentiation under the integral sign, improper integrals, Beta–Gamma and the 2D Jacobian all appear in every distribution derivation from §5 onward. If the schedule slips and something must be compressed, compress week 3, never week 5.</div>
      </div>
    </div>
  </div>

  {/* S3 */}
  <div className="sec" id="s3">
    <div className="sec-hdr" onClick={(e) => e.currentTarget.closest(".sec")?.classList.toggle("open")}>
      <span className="sec-tag">§3</span>
      <div><div className="sec-title">Matrices and determinants</div><div className="sec-sub">Vector spaces, rank–nullity, eigenvalues, Cayley–Hamilton, quadratic forms</div></div>
      <span className="sec-wk">Wk 6–7</span>
      <svg className="sec-chevron" width="14" height="14" viewBox="0 0 24 24" fill="none"><path d="M6 9l6 6 6-6" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round"/></svg>
    </div>
    <div className="sec-body">
      <div className="sec-col">
        <div className="col-hd book"><svg viewBox="0 0 24 24" fill="none"><path d="M4 19.5A2.5 2.5 0 016.5 17H20" stroke="currentColor" strokeWidth={2} strokeLinecap="round"/><path d="M6.5 2H20v20H6.5A2.5 2.5 0 014 19.5v-15A2.5 2.5 0 016.5 2z" stroke="currentColor" strokeWidth={2} strokeLinecap="round"/></svg>Book</div>
        <div className="ritem">
          <div className="rname">Hoffman &amp; Kunze — Week 6</div>
          <span className="rch">Ch. 1–3 (vector spaces, transformations) · Ch. 5 (determinants)</span>
        </div>
        <div className="ritem">
          <div className="rname">Hoffman &amp; Kunze — Week 7</div>
          <span className="rch">Ch. 6 (eigenvalues, Cayley–Hamilton) · Ch. 8–9 (quadratic forms)</span>
          <div className="rnote">Give Ch. 8–9 two full days — they carry covariance matrices, the bivariate normal exponent, least squares, and Markov limiting behaviour downstream.</div>
        </div>
      </div>
      <div className="sec-col">
        <div className="col-hd vid"><svg viewBox="0 0 24 24" fill="none"><polygon points="5 3 19 12 5 21 5 3" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round"/></svg>Video</div>
        <div className="ritem">
          <div className="rname">3Blue1Brown — Essence of Linear Algebra</div>
          <span className="rch">All 15 episodes · ~3 hours · watch before Hoffman</span>
          <div className="rnote">Non-negotiable first step. After this, the algebra is bookkeeping for pictures you already hold.</div>
          <a className="rlink" href="https://www.3blue1brown.com/topics/linear-algebra">3blue1brown.com/topics/linear-algebra</a>
        </div>
        <div className="ritem">
          <div className="rname">Strang — MIT 18.06</div>
          <span className="rch">Lectures 25 and 27 only</span>
          <div className="rnote">The best 80 minutes on quadratic forms and positive definiteness in existence. Watch after reading Hoffman Ch. 8–9, not before.</div>
          <a href="https://ocw.mit.edu/courses/18-06-linear-algebra-spring-2010/" target="_blank" rel="noreferrer" className="block mt-2 group relative rounded overflow-hidden border border-[var(--color-border-2)] hover:border-[var(--color-term-green)] transition-colors">
        <div className="aspect-video w-full bg-[#000] relative">
          <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1509228468518-180dd4864904?w=400&q=80')] bg-cover bg-center opacity-40 group-hover:opacity-70 transition-opacity mix-blend-luminosity"></div>
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="w-6 h-6 bg-red-600 rounded-full flex items-center justify-center text-white shadow-[0_0_10px_rgba(220,38,38,0.5)] group-hover:scale-110 transition-transform">
              <svg className="w-3 h-3 ml-0.5" fill="currentColor" viewBox="0 0 24 24"><path d="M8 5v14l11-7z"/></svg>
            </div>
          </div>
        </div>
        <div className="p-1.5 bg-[var(--color-bg-2)] text-[9px] font-mono text-[var(--color-text-2)] truncate group-hover:text-[var(--color-term-green)] flex justify-between items-center">
          <span>ocw.mit.edu · 18.06</span>
          <span className="opacity-50">▶ PLAY</span>
        </div>
      </a>
        </div>
      </div>
      <div className="sec-col">
        <div className="col-hd prob"><svg viewBox="0 0 24 24" fill="none"><path d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z" stroke="currentColor" strokeWidth={2}/></svg>Problems</div>
        <div className="ritem">
          <div className="rname">Schaum's Outline — Lipschutz</div>
          <span className="rch">matching chapters · 25 problems/day</span>
          <div className="rnote">Procedure only — use after the video and Hoffman have given you the reasons. Speed is the object at this stage.</div>
        </div>
      </div>
    </div>
  </div>

  {/* statistics group */}
  <div className="grp">
    <div className="grp-eyebrow">Statistics · Sections 4–12</div>
    <div className="grp-title">Weeks eight to eighteen</div>
    <div className="grp-sub">~70% of the marks. Every section here draws on at least one piece of the mathematics above.</div>
  </div>

  {/* S4 */}
  <div className="sec" id="s4">
    <div className="sec-hdr" onClick={(e) => e.currentTarget.closest(".sec")?.classList.toggle("open")}>
      <span className="sec-tag">§4</span>
      <div><div className="sec-title">Descriptive statistics and probability</div><div className="sec-sub">Central tendency, dispersion, Bayes, independence, inclusion–exclusion</div></div>
      <span className="sec-wk">Wk 8–9</span>
      <svg className="sec-chevron" width="14" height="14" viewBox="0 0 24 24" fill="none"><path d="M6 9l6 6 6-6" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round"/></svg>
    </div>
    <div className="sec-body">
      <div className="sec-col">
        <div className="col-hd book"><svg viewBox="0 0 24 24" fill="none"><path d="M4 19.5A2.5 2.5 0 016.5 17H20" stroke="currentColor" strokeWidth={2} strokeLinecap="round"/><path d="M6.5 2H20v20H6.5A2.5 2.5 0 014 19.5v-15A2.5 2.5 0 016.5 2z" stroke="currentColor" strokeWidth={2} strokeLinecap="round"/></svg>Book</div>
        <div className="ritem">
          <div className="rname">Rohatgi &amp; Saleh</div>
          <span className="rch">Ch. 1.1–1.7 · probability half</span>
          <div className="rnote">The standard reference. Probability axioms through independence.</div>
        </div>
        <div className="ritem">
          <div className="rname">Gupta &amp; Kapoor</div>
          <span className="rch">Ch. 2–3 · Ch. 10</span>
          <div className="rnote">Both Rohatgi and Hogg are thin on descriptive stats. Ch. 10 has partial and multiple correlation for three variables — named explicitly in the syllabus.</div>
        </div>
      </div>
      <div className="sec-col">
        <div className="col-hd vid"><svg viewBox="0 0 24 24" fill="none"><polygon points="5 3 19 12 5 21 5 3" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round"/></svg>Video</div>
        <div className="ritem">
          <div className="rname">Blitzstein — Stat 110</div>
          <span className="rch">Lectures 1–8</span>
          <div className="rnote">The best conditioning and Bayes treatment available. L6 on Monty Hall and Simpson's paradox is worth an hour by itself.</div>
          <a href="https://stat110.hsites.harvard.edu/youtube" target="_blank" rel="noreferrer" className="block mt-2 group relative rounded overflow-hidden border border-[var(--color-border-2)] hover:border-[var(--color-term-green)] transition-colors">
        <div className="aspect-video w-full bg-[#000] relative">
          <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1605806616949-1e87b487cb2a?w=400&q=80')] bg-cover bg-center opacity-40 group-hover:opacity-70 transition-opacity mix-blend-luminosity"></div>
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="w-6 h-6 bg-red-600 rounded-full flex items-center justify-center text-white shadow-[0_0_10px_rgba(220,38,38,0.5)] group-hover:scale-110 transition-transform">
              <svg className="w-3 h-3 ml-0.5" fill="currentColor" viewBox="0 0 24 24"><path d="M8 5v14l11-7z"/></svg>
            </div>
          </div>
        </div>
        <div className="p-1.5 bg-[var(--color-bg-2)] text-[9px] font-mono text-[var(--color-text-2)] truncate group-hover:text-[var(--color-term-green)] flex justify-between items-center">
          <span>stat110.hsites.harvard.edu/youtube</span>
          <span className="opacity-50">▶ PLAY</span>
        </div>
      </a>
        </div>
      </div>
      <div className="sec-col">
        <div className="col-hd prob"><svg viewBox="0 0 24 24" fill="none"><path d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z" stroke="currentColor" strokeWidth={2}/></svg>Problems</div>
        <div className="ritem">
          <div className="rname">Rohatgi ch. 1 · Gupta &amp; Kapoor numericals</div>
          <span className="rch">40 Bayes problems minimum</span>
          <div className="rnote">The paper returns to Bayes every year. Gupta &amp; Kapoor for the descriptive numericals — these are marks you cannot afford to lose.</div>
        </div>
      </div>
    </div>
  </div>

  {/* S5 */}
  <div className="sec" id="s5">
    <div className="sec-hdr" onClick={(e) => e.currentTarget.closest(".sec")?.classList.toggle("open")}>
      <span className="sec-tag">§5</span>
      <div><div className="sec-title">Univariate distributions</div><div className="sec-sub">14 named distributions, m.g.f., Markov–Chebyshev, interrelations</div></div>
      <span className="sec-wk">Wk 10–11</span>
      <svg className="sec-chevron" width="14" height="14" viewBox="0 0 24 24" fill="none"><path d="M6 9l6 6 6-6" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round"/></svg>
    </div>
    <div className="sec-body">
      <div className="sec-col">
        <div className="col-hd book"><svg viewBox="0 0 24 24" fill="none"><path d="M4 19.5A2.5 2.5 0 016.5 17H20" stroke="currentColor" strokeWidth={2} strokeLinecap="round"/><path d="M6.5 2H20v20H6.5A2.5 2.5 0 014 19.5v-15A2.5 2.5 0 016.5 2z" stroke="currentColor" strokeWidth={2} strokeLinecap="round"/></svg>Book</div>
        <div className="ritem">
          <div className="rname">Rohatgi &amp; Saleh</div>
          <span className="rch">Ch. 2 · Ch. 3 · 5.1–5.2</span>
          <div className="rnote">Ch. 2: c.d.f., transformations, Jacobian method. Ch. 3: moments, m.g.f., Markov–Chebyshev. 5.1–5.2: full catalogue.</div>
        </div>
        <div className="ritem">
          <div className="rname">Hogg, McKean &amp; Craig</div>
          <span className="rch">1.5–1.10 · 3.1–3.4</span>
          <div className="rnote">Clearer than Rohatgi on gamma, chi-square and beta. Read both on those three.</div>
        </div>
      </div>
      <div className="sec-col">
        <div className="col-hd vid"><svg viewBox="0 0 24 24" fill="none"><polygon points="5 3 19 12 5 21 5 3" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round"/></svg>Video</div>
        <div className="ritem">
          <div className="rname">Blitzstein — Stat 110</div>
          <span className="rch">Lectures 9–20</span>
          <div className="rnote">Each distribution defined by the question it answers. The interrelation map emerges naturally — no separate memorisation needed.</div>
          <a href="https://stat110.hsites.harvard.edu/youtube" target="_blank" rel="noreferrer" className="block mt-2 group relative rounded overflow-hidden border border-[var(--color-border-2)] hover:border-[var(--color-term-green)] transition-colors">
        <div className="aspect-video w-full bg-[#000] relative">
          <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1605806616949-1e87b487cb2a?w=400&q=80')] bg-cover bg-center opacity-40 group-hover:opacity-70 transition-opacity mix-blend-luminosity"></div>
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="w-6 h-6 bg-red-600 rounded-full flex items-center justify-center text-white shadow-[0_0_10px_rgba(220,38,38,0.5)] group-hover:scale-110 transition-transform">
              <svg className="w-3 h-3 ml-0.5" fill="currentColor" viewBox="0 0 24 24"><path d="M8 5v14l11-7z"/></svg>
            </div>
          </div>
        </div>
        <div className="p-1.5 bg-[var(--color-bg-2)] text-[9px] font-mono text-[var(--color-text-2)] truncate group-hover:text-[var(--color-term-green)] flex justify-between items-center">
          <span>stat110.hsites.harvard.edu/youtube</span>
          <span className="opacity-50">▶ PLAY</span>
        </div>
      </a>
        </div>
      </div>
      <div className="sec-col">
        <div className="col-hd prob"><svg viewBox="0 0 24 24" fill="none"><path d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z" stroke="currentColor" strokeWidth={2}/></svg>Problems</div>
        <div className="ritem">
          <div className="rname">Hogg ch. 3 exercises</div>
          <span className="rch">20 problems/day · 2 weeks</span>
          <div className="rnote">Built to force interrelations over formulas — exactly what the paper tests. Draw the interrelation map from memory every Sunday.</div>
        </div>
      </div>
    </div>
  </div>

  {/* S6 */}
  <div className="sec" id="s6">
    <div className="sec-hdr" onClick={(e) => e.currentTarget.closest(".sec")?.classList.toggle("open")}>
      <span className="sec-tag">§6</span>
      <div><div className="sec-title">Multivariate distributions</div><div className="sec-sub">Joint, marginal, conditional, covariance, variance decomposition, bivariate normal</div></div>
      <span className="sec-wk">Wk 12</span>
      <svg className="sec-chevron" width="14" height="14" viewBox="0 0 24 24" fill="none"><path d="M6 9l6 6 6-6" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round"/></svg>
    </div>
    <div className="sec-body">
      <div className="sec-col">
        <div className="col-hd book"><svg viewBox="0 0 24 24" fill="none"><path d="M4 19.5A2.5 2.5 0 016.5 17H20" stroke="currentColor" strokeWidth={2} strokeLinecap="round"/><path d="M6.5 2H20v20H6.5A2.5 2.5 0 014 19.5v-15A2.5 2.5 0 016.5 2z" stroke="currentColor" strokeWidth={2} strokeLinecap="round"/></svg>Book</div>
        <div className="ritem">
          <div className="rname">Rohatgi &amp; Saleh</div>
          <span className="rch">Ch. 4 entire · 5.3 (bivariate normal)</span>
        </div>
        <div className="ritem">
          <div className="rname">Hogg, McKean &amp; Craig</div>
          <span className="rch">Ch. 2 — especially 2.2 and 2.3</span>
          <div className="rnote">2.2 on bivariate transformations and 2.3 on conditional distributions carry the load here.</div>
        </div>
      </div>
      <div className="sec-col">
        <div className="col-hd vid"><svg viewBox="0 0 24 24" fill="none"><polygon points="5 3 19 12 5 21 5 3" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round"/></svg>Video</div>
        <div className="ritem">
          <div className="rname">Blitzstein — Stat 110</div>
          <span className="rch">Lectures 21–26 · watch L26 twice</span>
          <div className="rnote">L26 on conditional expectation is the Rao–Blackwell mechanism, four weeks early. Recognising it now makes §9 far easier.</div>
          <a href="https://stat110.hsites.harvard.edu/youtube" target="_blank" rel="noreferrer" className="block mt-2 group relative rounded overflow-hidden border border-[var(--color-border-2)] hover:border-[var(--color-term-green)] transition-colors">
        <div className="aspect-video w-full bg-[#000] relative">
          <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1605806616949-1e87b487cb2a?w=400&q=80')] bg-cover bg-center opacity-40 group-hover:opacity-70 transition-opacity mix-blend-luminosity"></div>
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="w-6 h-6 bg-red-600 rounded-full flex items-center justify-center text-white shadow-[0_0_10px_rgba(220,38,38,0.5)] group-hover:scale-110 transition-transform">
              <svg className="w-3 h-3 ml-0.5" fill="currentColor" viewBox="0 0 24 24"><path d="M8 5v14l11-7z"/></svg>
            </div>
          </div>
        </div>
        <div className="p-1.5 bg-[var(--color-bg-2)] text-[9px] font-mono text-[var(--color-text-2)] truncate group-hover:text-[var(--color-term-green)] flex justify-between items-center">
          <span>stat110.hsites.harvard.edu/youtube</span>
          <span className="opacity-50">▶ PLAY</span>
        </div>
      </a>
        </div>
      </div>
      <div className="sec-col">
        <div className="col-hd prob"><svg viewBox="0 0 24 24" fill="none"><path d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z" stroke="currentColor" strokeWidth={2}/></svg>Problems</div>
        <div className="ritem">
          <div className="rname">Rohatgi ch. 4 exercises</div>
          <span className="rch">prioritise Jacobian problems</span>
          <div className="rnote">This is where §2c either paid off or didn't. Also: derive the bivariate normal conditional distribution before reading it.</div>
        </div>
      </div>
    </div>
  </div>

  {/* S7 */}
  <div className="sec" id="s7">
    <div className="sec-hdr" onClick={(e) => e.currentTarget.closest(".sec")?.classList.toggle("open")}>
      <span className="sec-tag">§7</span>
      <div><div className="sec-title">Limit theorems</div><div className="sec-sub">Four modes of convergence, WLLN, SLLN, CLT</div></div>
      <span className="sec-wk">Wk 13</span>
      <svg className="sec-chevron" width="14" height="14" viewBox="0 0 24 24" fill="none"><path d="M6 9l6 6 6-6" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round"/></svg>
    </div>
    <div className="sec-body">
      <div className="sec-col">
        <div className="col-hd book"><svg viewBox="0 0 24 24" fill="none"><path d="M4 19.5A2.5 2.5 0 016.5 17H20" stroke="currentColor" strokeWidth={2} strokeLinecap="round"/><path d="M6.5 2H20v20H6.5A2.5 2.5 0 014 19.5v-15A2.5 2.5 0 016.5 2z" stroke="currentColor" strokeWidth={2} strokeLinecap="round"/></svg>Book</div>
        <div className="ritem">
          <div className="rname">Hogg — start here</div>
          <span className="rch">Ch. 5.1–5.3 · gentler first pass</span>
        </div>
        <div className="ritem">
          <div className="rname">Rohatgi &amp; Saleh — second pass</div>
          <span className="rch">Ch. 6 entire · all four modes + CLT m.g.f. proof</span>
        </div>
      </div>
      <div className="sec-col">
        <div className="col-hd vid"><svg viewBox="0 0 24 24" fill="none"><polygon points="5 3 19 12 5 21 5 3" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round"/></svg>Video</div>
        <div className="ritem">
          <div className="rname">Blitzstein — Stat 110</div>
          <span className="rch">Lectures 29–31 · then Dharmaraja NPTEL</span>
          <div className="rnote">Dharmaraja 111102111 is the only Indian course treating all four modes and their non-implications carefully.</div>
          <a href="https://nptel.ac.in/courses/111102111" target="_blank" rel="noreferrer" className="block mt-2 group relative rounded overflow-hidden border border-[var(--color-border-2)] hover:border-[var(--color-term-green)] transition-colors">
        <div className="aspect-video w-full bg-[#000] relative">
          <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=400&q=80')] bg-cover bg-center opacity-40 group-hover:opacity-70 transition-opacity mix-blend-luminosity"></div>
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="w-6 h-6 bg-red-600 rounded-full flex items-center justify-center text-white shadow-[0_0_10px_rgba(220,38,38,0.5)] group-hover:scale-110 transition-transform">
              <svg className="w-3 h-3 ml-0.5" fill="currentColor" viewBox="0 0 24 24"><path d="M8 5v14l11-7z"/></svg>
            </div>
          </div>
        </div>
        <div className="p-1.5 bg-[var(--color-bg-2)] text-[9px] font-mono text-[var(--color-text-2)] truncate group-hover:text-[var(--color-term-green)] flex justify-between items-center">
          <span>nptel.ac.in/courses/111102111</span>
          <span className="opacity-50">▶ PLAY</span>
        </div>
      </a>
        </div>
      </div>
      <div className="sec-col">
        <div className="col-hd prob"><svg viewBox="0 0 24 24" fill="none"><path d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z" stroke="currentColor" strokeWidth={2}/></svg>Problems</div>
        <div className="ritem">
          <div className="rname">Build the implication table yourself</div>
          <span className="rch">4 modes · 12 arrows · 3 hold · 9 counterexamples</span>
          <div className="rnote">Neither book gives this table. Building it is the entire section. This is also the most common source of exam errors in §7.</div>
        </div>
      </div>
    </div>
  </div>

  {/* S8 */}
  <div className="sec" id="s8">
    <div className="sec-hdr" onClick={(e) => e.currentTarget.closest(".sec")?.classList.toggle("open")}>
      <span className="sec-tag">§8</span>
      <div><div className="sec-title">Sampling distributions</div><div className="sec-sub">Order statistics, χ², t, F — definition and derivation</div></div>
      <span className="sec-wk">Wk 14</span>
      <svg className="sec-chevron" width="14" height="14" viewBox="0 0 24 24" fill="none"><path d="M6 9l6 6 6-6" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round"/></svg>
    </div>
    <div className="sec-body">
      <div className="sec-col">
        <div className="col-hd book"><svg viewBox="0 0 24 24" fill="none"><path d="M4 19.5A2.5 2.5 0 016.5 17H20" stroke="currentColor" strokeWidth={2} strokeLinecap="round"/><path d="M6.5 2H20v20H6.5A2.5 2.5 0 014 19.5v-15A2.5 2.5 0 016.5 2z" stroke="currentColor" strokeWidth={2} strokeLinecap="round"/></svg>Book</div>
        <div className="ritem">
          <div className="rname">Rohatgi &amp; Saleh</div>
          <span className="rch">7.1–7.4 (χ², t, F derivations) · 4.6 (order stats)</span>
          <div className="rnote">The syllabus asks for derivation, not use. Also read Hogg 3.6 and 4.4 in parallel — cleaner presentations of t and order statistics.</div>
        </div>
      </div>
      <div className="sec-col">
        <div className="col-hd vid"><svg viewBox="0 0 24 24" fill="none"><polygon points="5 3 19 12 5 21 5 3" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round"/></svg>Video</div>
        <div className="ritem">
          <div className="rname">Rigollet — MIT 18.650</div>
          <span className="rch">Lectures 1–2 · watch before Rohatgi ch. 7</span>
          <div className="rnote">Why sampling distributions exist and why inference is impossible without them — the conceptual foundation the book assumes.</div>
          <a href="https://ocw.mit.edu/courses/18-650-statistics-for-applications-fall-2016" target="_blank" rel="noreferrer" className="block mt-2 group relative rounded overflow-hidden border border-[var(--color-border-2)] hover:border-[var(--color-term-green)] transition-colors">
        <div className="aspect-video w-full bg-[#000] relative">
          <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=400&q=80')] bg-cover bg-center opacity-40 group-hover:opacity-70 transition-opacity mix-blend-luminosity"></div>
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="w-6 h-6 bg-red-600 rounded-full flex items-center justify-center text-white shadow-[0_0_10px_rgba(220,38,38,0.5)] group-hover:scale-110 transition-transform">
              <svg className="w-3 h-3 ml-0.5" fill="currentColor" viewBox="0 0 24 24"><path d="M8 5v14l11-7z"/></svg>
            </div>
          </div>
        </div>
        <div className="p-1.5 bg-[var(--color-bg-2)] text-[9px] font-mono text-[var(--color-text-2)] truncate group-hover:text-[var(--color-term-green)] flex justify-between items-center">
          <span>ocw.mit.edu · 18.650</span>
          <span className="opacity-50">▶ PLAY</span>
        </div>
      </a>
        </div>
      </div>
      <div className="sec-col">
        <div className="col-hd prob"><svg viewBox="0 0 24 24" fill="none"><path d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z" stroke="currentColor" strokeWidth={2}/></svg>Problems</div>
        <div className="ritem">
          <div className="rname">Derive χ², t and F before reading</div>
          <span className="rch">attempt unaided → fail → read → re-derive</span>
          <div className="rnote">The failure is where the learning is. This week welds §§2, 5, 6 and 8 into one piece of understanding rather than four separate topics.</div>
        </div>
      </div>
    </div>
  </div>

  {/* S9 */}
  <div className="sec" id="s9">
    <div className="sec-hdr" onClick={(e) => e.currentTarget.closest(".sec")?.classList.toggle("open")}>
      <span className="sec-tag">§9</span>
      <div><div className="sec-title">Estimation</div><div className="sec-sub">Sufficiency, UMVUE, Rao–Blackwell, Cramér–Rao, MLE, confidence intervals</div></div>
      <span className="sec-wk">Wk 15–16</span>
      <svg className="sec-chevron" width="14" height="14" viewBox="0 0 24 24" fill="none"><path d="M6 9l6 6 6-6" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round"/></svg>
    </div>
    <div className="sec-body">
      <div className="sec-col">
        <div className="col-hd book"><svg viewBox="0 0 24 24" fill="none"><path d="M4 19.5A2.5 2.5 0 016.5 17H20" stroke="currentColor" strokeWidth={2} strokeLinecap="round"/><path d="M6.5 2H20v20H6.5A2.5 2.5 0 014 19.5v-15A2.5 2.5 0 016.5 2z" stroke="currentColor" strokeWidth={2} strokeLinecap="round"/></svg>Book</div>
        <div className="ritem">
          <div className="rname">Hogg — read first</div>
          <span className="rch">7.1–7.6 · 6.1–6.2</span>
          <div className="rnote">7.1–7.5 = best exposition of sufficiency in print. 7.6 = exponential class, where completeness stops being abstract. 6.1–6.2 = MLE + Cramér–Rao.</div>
        </div>
        <div className="ritem">
          <div className="rname">Rohatgi &amp; Saleh — second pass</div>
          <span className="rch">Ch. 8 entire · Ch. 11 (confidence intervals)</span>
        </div>
      </div>
      <div className="sec-col">
        <div className="col-hd vid"><svg viewBox="0 0 24 24" fill="none"><polygon points="5 3 19 12 5 21 5 3" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round"/></svg>Video</div>
        <div className="ritem">
          <div className="rname">Rigollet — MIT 18.650</div>
          <span className="rch">Lectures 3–6</span>
          <div className="rnote">The only source that explains why Fisher information deserves the name. L5–6 on the information bound are uniquely clear.</div>
          <a href="https://ocw.mit.edu/courses/18-650-statistics-for-applications-fall-2016" target="_blank" rel="noreferrer" className="block mt-2 group relative rounded overflow-hidden border border-[var(--color-border-2)] hover:border-[var(--color-term-green)] transition-colors">
        <div className="aspect-video w-full bg-[#000] relative">
          <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=400&q=80')] bg-cover bg-center opacity-40 group-hover:opacity-70 transition-opacity mix-blend-luminosity"></div>
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="w-6 h-6 bg-red-600 rounded-full flex items-center justify-center text-white shadow-[0_0_10px_rgba(220,38,38,0.5)] group-hover:scale-110 transition-transform">
              <svg className="w-3 h-3 ml-0.5" fill="currentColor" viewBox="0 0 24 24"><path d="M8 5v14l11-7z"/></svg>
            </div>
          </div>
        </div>
        <div className="p-1.5 bg-[var(--color-bg-2)] text-[9px] font-mono text-[var(--color-text-2)] truncate group-hover:text-[var(--color-term-green)] flex justify-between items-center">
          <span>ocw.mit.edu · 18.650</span>
          <span className="opacity-50">▶ PLAY</span>
        </div>
      </a>
        </div>
        <div className="ritem">
          <div className="rname">Somesh Kumar — NPTEL Statistical Inference</div>
          <span className="rch">sufficiency · UMVUE · Rao–Blackwell modules</span>
          <div className="rnote">Same material in JAM vocabulary — matters when the exam phrases things the way this course does.</div>
          <a href="https://nptel.ac.in/courses/111105124" target="_blank" rel="noreferrer" className="block mt-2 group relative rounded overflow-hidden border border-[var(--color-border-2)] hover:border-[var(--color-term-green)] transition-colors">
        <div className="aspect-video w-full bg-[#000] relative">
          <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=400&q=80')] bg-cover bg-center opacity-40 group-hover:opacity-70 transition-opacity mix-blend-luminosity"></div>
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="w-6 h-6 bg-red-600 rounded-full flex items-center justify-center text-white shadow-[0_0_10px_rgba(220,38,38,0.5)] group-hover:scale-110 transition-transform">
              <svg className="w-3 h-3 ml-0.5" fill="currentColor" viewBox="0 0 24 24"><path d="M8 5v14l11-7z"/></svg>
            </div>
          </div>
        </div>
        <div className="p-1.5 bg-[var(--color-bg-2)] text-[9px] font-mono text-[var(--color-text-2)] truncate group-hover:text-[var(--color-term-green)] flex justify-between items-center">
          <span>nptel.ac.in/courses/111105124</span>
          <span className="opacity-50">▶ PLAY</span>
        </div>
      </a>
        </div>
      </div>
      <div className="sec-col">
        <div className="col-hd prob"><svg viewBox="0 0 24 24" fill="none"><path d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z" stroke="currentColor" strokeWidth={2}/></svg>Problems</div>
        <div className="ritem">
          <div className="rname">Hogg ch. 6–7 exercises</div>
          <span className="rch">factorization exercises especially</span>
          <div className="rnote">Sufficiency only sticks with volume. Identify sufficient statistics for at least five different families without the book.</div>
        </div>
      </div>
      <div className="callout callout-blue">
        <svg width="14" height="14" viewBox="0 0 24 24" fill="none"><circle cx="12" cy="12" r="10" stroke="currentColor" strokeWidth={2}/><path d="M12 8v4m0 4h.01" stroke="currentColor" strokeWidth={2} strokeLinecap="round"/></svg>
        <div><strong>The section that decides ranks.</strong> It is also where weaker teaching collapses into stated theorems with no reasons — which is why it is the section to test any coaching institute on before paying them anything.</div>
      </div>
    </div>
  </div>

  {/* S10 */}
  <div className="sec" id="s10">
    <div className="sec-hdr" onClick={(e) => e.currentTarget.closest(".sec")?.classList.toggle("open")}>
      <span className="sec-tag">§10</span>
      <div><div className="sec-title">Testing of hypotheses</div><div className="sec-sub">NP lemma, MP and UMP tests, likelihood ratio tests</div></div>
      <span className="sec-wk">Wk 17</span>
      <svg className="sec-chevron" width="14" height="14" viewBox="0 0 24 24" fill="none"><path d="M6 9l6 6 6-6" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round"/></svg>
    </div>
    <div className="sec-body">
      <div className="sec-col">
        <div className="col-hd book"><svg viewBox="0 0 24 24" fill="none"><path d="M4 19.5A2.5 2.5 0 016.5 17H20" stroke="currentColor" strokeWidth={2} strokeLinecap="round"/><path d="M6.5 2H20v20H6.5A2.5 2.5 0 014 19.5v-15A2.5 2.5 0 016.5 2z" stroke="currentColor" strokeWidth={2} strokeLinecap="round"/></svg>Book</div>
        <div className="ritem">
          <div className="rname">Hogg — read first</div>
          <span className="rch">Ch. 8.1–8.3</span>
          <div className="rnote">MP tests, UMP tests, LRT. Hogg's worked constructions are the model to imitate on paper.</div>
        </div>
        <div className="ritem">
          <div className="rname">Rohatgi &amp; Saleh</div>
          <span className="rch">Ch. 9 · Ch. 10</span>
        </div>
      </div>
      <div className="sec-col">
        <div className="col-hd vid"><svg viewBox="0 0 24 24" fill="none"><polygon points="5 3 19 12 5 21 5 3" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round"/></svg>Video</div>
        <div className="ritem">
          <div className="rname">Rigollet — MIT 18.650</div>
          <span className="rch">Lectures 7–11</span>
          <div className="rnote">Frames the two error types as an asymmetric decision problem — the only framing that makes Neyman–Pearson coherent rather than arbitrary.</div>
          <a href="https://ocw.mit.edu/courses/18-650-statistics-for-applications-fall-2016" target="_blank" rel="noreferrer" className="block mt-2 group relative rounded overflow-hidden border border-[var(--color-border-2)] hover:border-[var(--color-term-green)] transition-colors">
        <div className="aspect-video w-full bg-[#000] relative">
          <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=400&q=80')] bg-cover bg-center opacity-40 group-hover:opacity-70 transition-opacity mix-blend-luminosity"></div>
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="w-6 h-6 bg-red-600 rounded-full flex items-center justify-center text-white shadow-[0_0_10px_rgba(220,38,38,0.5)] group-hover:scale-110 transition-transform">
              <svg className="w-3 h-3 ml-0.5" fill="currentColor" viewBox="0 0 24 24"><path d="M8 5v14l11-7z"/></svg>
            </div>
          </div>
        </div>
        <div className="p-1.5 bg-[var(--color-bg-2)] text-[9px] font-mono text-[var(--color-text-2)] truncate group-hover:text-[var(--color-term-green)] flex justify-between items-center">
          <span>ocw.mit.edu · 18.650</span>
          <span className="opacity-50">▶ PLAY</span>
        </div>
      </a>
        </div>
      </div>
      <div className="sec-col">
        <div className="col-hd prob"><svg viewBox="0 0 24 24" fill="none"><path d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z" stroke="currentColor" strokeWidth={2}/></svg>Problems</div>
        <div className="ritem">
          <div className="rname">Hogg ch. 8 exercises</div>
          <span className="rch">construct critical region from scratch every time</span>
          <div className="rnote">Also: read §9 intervals and §10 tests as one topic — the interval is the set of parameter values a test would not reject.</div>
        </div>
      </div>
    </div>
  </div>

  {/* S11 */}
  <div className="sec" id="s11">
    <div className="sec-hdr" onClick={(e) => e.currentTarget.closest(".sec")?.classList.toggle("open")}>
      <span className="sec-tag">§11</span>
      <div><div className="sec-title">Nonparametric methods</div><div className="sec-sub">Runs, K–S, sign tests, Mann–Whitney</div></div>
      <span className="sec-wk">Wk 18 · 3 days</span>
      <svg className="sec-chevron" width="14" height="14" viewBox="0 0 24 24" fill="none"><path d="M6 9l6 6 6-6" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round"/></svg>
    </div>
    <div className="sec-body">
      <div className="sec-col">
        <div className="col-hd book"><svg viewBox="0 0 24 24" fill="none"><path d="M4 19.5A2.5 2.5 0 016.5 17H20" stroke="currentColor" strokeWidth={2} strokeLinecap="round"/><path d="M6.5 2H20v20H6.5A2.5 2.5 0 014 19.5v-15A2.5 2.5 0 016.5 2z" stroke="currentColor" strokeWidth={2} strokeLinecap="round"/></svg>Book</div>
        <div className="ritem">
          <div className="rname">Rohatgi &amp; Saleh</div>
          <span className="rch">Ch. 13 · covers everything asked</span>
          <div className="rnote">Three days maximum. The only place in the syllabus where compression is genuinely safe.</div>
        </div>
      </div>
      <div className="sec-col">
        <div className="col-hd vid"><svg viewBox="0 0 24 24" fill="none"><polygon points="5 3 19 12 5 21 5 3" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round"/></svg>Video</div>
        <div className="ritem">
          <div className="rname">StatQuest — Mann–Whitney and K–S</div>
          <span className="rch">~40 minutes total · sufficient</span>
          <a href="https://www.youtube.com/@statquest" target="_blank" rel="noreferrer" className="block mt-2 group relative rounded overflow-hidden border border-[var(--color-border-2)] hover:border-[var(--color-term-green)] transition-colors">
        <div className="aspect-video w-full bg-[#000] relative">
          <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=400&q=80')] bg-cover bg-center opacity-40 group-hover:opacity-70 transition-opacity mix-blend-luminosity"></div>
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="w-6 h-6 bg-red-600 rounded-full flex items-center justify-center text-white shadow-[0_0_10px_rgba(220,38,38,0.5)] group-hover:scale-110 transition-transform">
              <svg className="w-3 h-3 ml-0.5" fill="currentColor" viewBox="0 0 24 24"><path d="M8 5v14l11-7z"/></svg>
            </div>
          </div>
        </div>
        <div className="p-1.5 bg-[var(--color-bg-2)] text-[9px] font-mono text-[var(--color-text-2)] truncate group-hover:text-[var(--color-term-green)] flex justify-between items-center">
          <span>youtube.com/@statquest</span>
          <span className="opacity-50">▶ PLAY</span>
        </div>
      </a>
        </div>
      </div>
      <div className="sec-col">
        <div className="col-hd prob"><svg viewBox="0 0 24 24" fill="none"><path d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z" stroke="currentColor" strokeWidth={2}/></svg>Problems</div>
        <div className="ritem">
          <div className="rname">Past papers — §11 questions only</div>
          <span className="rch">~20 questions covers the entire range</span>
          <div className="rnote">Question types are narrow and repeat. This is all you need for this section.</div>
        </div>
      </div>
    </div>
  </div>

  {/* S12 */}
  <div className="sec" id="s12">
    <div className="sec-hdr" onClick={(e) => e.currentTarget.closest(".sec")?.classList.toggle("open")}>
      <span className="sec-tag">§12</span>
      <div><div className="sec-title">Stochastic processes</div><div className="sec-sub">Discrete-time Markov chains, stationary distributions, Poisson process</div></div>
      <span className="sec-wk">Wk 18</span>
      <svg className="sec-chevron" width="14" height="14" viewBox="0 0 24 24" fill="none"><path d="M6 9l6 6 6-6" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round"/></svg>
    </div>
    <div className="sec-body">
      <div className="sec-col">
        <div className="col-hd book"><svg viewBox="0 0 24 24" fill="none"><path d="M4 19.5A2.5 2.5 0 016.5 17H20" stroke="currentColor" strokeWidth={2} strokeLinecap="round"/><path d="M6.5 2H20v20H6.5A2.5 2.5 0 014 19.5v-15A2.5 2.5 0 016.5 2z" stroke="currentColor" strokeWidth={2} strokeLinecap="round"/></svg>Book</div>
        <div className="ritem">
          <div className="rname">Sheldon Ross</div>
          <span className="rch">4.1–4.4 (Markov chains) · 5.1–5.3 (Poisson process)</span>
          <div className="rnote">Rohatgi does not cover stochastic processes. Ross is the only real option. Ch. 4.4 is where §3 eigenvectors return as stationary distributions.</div>
        </div>
      </div>
      <div className="sec-col">
        <div className="col-hd vid"><svg viewBox="0 0 24 24" fill="none"><polygon points="5 3 19 12 5 21 5 3" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round"/></svg>Video</div>
        <div className="ritem">
          <div className="rname">Dharmaraja — NPTEL</div>
          <span className="rch">Markov chains + Poisson process modules</span>
          <a href="https://nptel.ac.in/courses/111102111" target="_blank" rel="noreferrer" className="block mt-2 group relative rounded overflow-hidden border border-[var(--color-border-2)] hover:border-[var(--color-term-green)] transition-colors">
        <div className="aspect-video w-full bg-[#000] relative">
          <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=400&q=80')] bg-cover bg-center opacity-40 group-hover:opacity-70 transition-opacity mix-blend-luminosity"></div>
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="w-6 h-6 bg-red-600 rounded-full flex items-center justify-center text-white shadow-[0_0_10px_rgba(220,38,38,0.5)] group-hover:scale-110 transition-transform">
              <svg className="w-3 h-3 ml-0.5" fill="currentColor" viewBox="0 0 24 24"><path d="M8 5v14l11-7z"/></svg>
            </div>
          </div>
        </div>
        <div className="p-1.5 bg-[var(--color-bg-2)] text-[9px] font-mono text-[var(--color-text-2)] truncate group-hover:text-[var(--color-term-green)] flex justify-between items-center">
          <span>nptel.ac.in/courses/111102111</span>
          <span className="opacity-50">▶ PLAY</span>
        </div>
      </a>
        </div>
        <div className="ritem">
          <div className="rname">Setosa — Markov chains visual</div>
          <span className="rch">5 minutes · watch before Ross</span>
          <div className="rnote">Makes transition matrices obvious before the book makes them algebraic.</div>
          <a className="rlink" href="https://setosa.io/ev/markov-chains/">setosa.io/ev/markov-chains</a>
        </div>
      </div>
      <div className="sec-col">
        <div className="col-hd prob"><svg viewBox="0 0 24 24" fill="none"><path d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z" stroke="currentColor" strokeWidth={2}/></svg>Problems</div>
        <div className="ritem">
          <div className="rname">Ross ch. 4 exercises</div>
          <span className="rch">draw the graph before the matrix — always</span>
          <div className="rnote">Classification questions are faster from the graph than from the transition matrix, and the habit transfers directly to the exam.</div>
        </div>
      </div>
    </div>
  </div>

  
  
  
  
    </div>
  );
}
