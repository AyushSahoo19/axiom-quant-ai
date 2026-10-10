import Link from 'next/link';

export default function Sidebar() {
  return (
    <aside className="w-[200px] border-r border-dashed border-[var(--color-border-2)] bg-[var(--color-bg-2)] textured-panel sticky top-[60px] h-[calc(100vh-60px)] overflow-y-auto py-4 flex-shrink-0 hidden lg:block">
      
      <div className="px-2 mb-2">
        <div className="text-[9px] font-semibold tracking-[0.08em] uppercase text-[var(--color-text-3)] px-2 py-2">Resources</div>
        <Link href="#books" className="flex items-center gap-1.5 px-2 py-1 rounded-sm text-[var(--color-text-2)] text-[11px] transition-colors hover:bg-[var(--color-bg-3)] hover:text-[var(--color-text-1)]">
          <span className="font-mono text-[8.5px] text-[var(--color-text-3)] bg-[var(--color-bg-3)] border border-[var(--color-border-1)] rounded-sm px-1 py-0 min-w-[26px] text-center flex-shrink-0">B1–5</span>
          Five primary books
        </Link>
        <Link href="#support" className="flex items-center gap-1.5 px-2 py-1 rounded-sm text-[var(--color-text-2)] text-[11px] transition-colors hover:bg-[var(--color-bg-3)] hover:text-[var(--color-text-1)]">
          <span className="font-mono text-[8.5px] text-[var(--color-text-3)] bg-[var(--color-bg-3)] border border-[var(--color-border-1)] rounded-sm px-1 py-0 min-w-[26px] text-center flex-shrink-0">Sup</span>
          Supporting books
        </Link>
        <Link href="#courses" className="flex items-center gap-1.5 px-2 py-1 rounded-sm text-[var(--color-text-2)] text-[11px] transition-colors hover:bg-[var(--color-bg-3)] hover:text-[var(--color-text-1)]">
          <span className="font-mono text-[8.5px] text-[var(--color-text-3)] bg-[var(--color-bg-3)] border border-[var(--color-border-1)] rounded-sm px-1 py-0 min-w-[26px] text-center flex-shrink-0">V1–3</span>
          Three courses
        </Link>
      </div>

      <div className="h-px bg-[var(--color-border-1)] my-2 mx-3"></div>

      <div className="px-2 mb-2">
        <div className="text-[9px] font-semibold tracking-[0.08em] uppercase text-[var(--color-text-3)] px-2 py-2">Mathematics</div>
        <Link href="#s1" className="flex items-center gap-1.5 px-2 py-1 rounded-sm text-[var(--color-text-2)] text-[11px] transition-colors hover:bg-[var(--color-bg-3)] hover:text-[var(--color-text-1)]">
          <span className="font-mono text-[8.5px] text-[var(--color-text-3)] bg-[var(--color-bg-3)] border border-[var(--color-border-1)] rounded-sm px-1 py-0 min-w-[26px] text-center flex-shrink-0">§1</span>
          Sequences & series
        </Link>
        <Link href="#s2a" className="flex items-center gap-1.5 px-2 py-1 rounded-sm text-[var(--color-text-2)] text-[11px] transition-colors hover:bg-[var(--color-bg-3)] hover:text-[var(--color-text-1)]">
          <span className="font-mono text-[8.5px] text-[var(--color-text-3)] bg-[var(--color-bg-3)] border border-[var(--color-border-1)] rounded-sm px-1 py-0 min-w-[26px] text-center flex-shrink-0">§2a</span>
          1-var calculus
        </Link>
        <Link href="#s2b" className="flex items-center gap-1.5 px-2 py-1 rounded-sm text-[var(--color-text-2)] text-[11px] transition-colors hover:bg-[var(--color-bg-3)] hover:text-[var(--color-text-1)]">
          <span className="font-mono text-[8.5px] text-[var(--color-text-3)] bg-[var(--color-bg-3)] border border-[var(--color-border-1)] rounded-sm px-1 py-0 min-w-[26px] text-center flex-shrink-0">§2b</span>
          2-var calculus
        </Link>
        <Link href="#s2c" className="flex items-center gap-1.5 px-2 py-1 rounded-sm text-[var(--color-text-2)] text-[11px] transition-colors hover:bg-[var(--color-bg-3)] hover:text-[var(--color-text-1)]">
          <span className="font-mono text-[8.5px] text-[var(--color-text-3)] bg-[var(--color-bg-3)] border border-[var(--color-border-1)] rounded-sm px-1 py-0 min-w-[26px] text-center flex-shrink-0">§2c</span>
          Integral calculus
        </Link>
        <Link href="#s3" className="flex items-center gap-1.5 px-2 py-1 rounded-sm text-[var(--color-text-2)] text-[11px] transition-colors hover:bg-[var(--color-bg-3)] hover:text-[var(--color-text-1)]">
          <span className="font-mono text-[8.5px] text-[var(--color-text-3)] bg-[var(--color-bg-3)] border border-[var(--color-border-1)] rounded-sm px-1 py-0 min-w-[26px] text-center flex-shrink-0">§3</span>
          Matrices
        </Link>
      </div>

      <div className="h-px bg-[var(--color-border-1)] my-2 mx-3"></div>

      <div className="px-2 mb-2">
        <div className="text-[9px] font-semibold tracking-[0.08em] uppercase text-[var(--color-text-3)] px-2 py-2">Statistics</div>
        <Link href="#s4" className="flex items-center gap-1.5 px-2 py-1 rounded-sm text-[var(--color-text-2)] text-[11px] transition-colors hover:bg-[var(--color-bg-3)] hover:text-[var(--color-text-1)]">
          <span className="font-mono text-[8.5px] text-[var(--color-text-3)] bg-[var(--color-bg-3)] border border-[var(--color-border-1)] rounded-sm px-1 py-0 min-w-[26px] text-center flex-shrink-0">§4</span>
          Probability
        </Link>
        <Link href="#s5" className="flex items-center gap-1.5 px-2 py-1 rounded-sm text-[var(--color-text-2)] text-[11px] transition-colors hover:bg-[var(--color-bg-3)] hover:text-[var(--color-text-1)]">
          <span className="font-mono text-[8.5px] text-[var(--color-text-3)] bg-[var(--color-bg-3)] border border-[var(--color-border-1)] rounded-sm px-1 py-0 min-w-[26px] text-center flex-shrink-0">§5</span>
          Univariate
        </Link>
        <Link href="#s6" className="flex items-center gap-1.5 px-2 py-1 rounded-sm text-[var(--color-text-2)] text-[11px] transition-colors hover:bg-[var(--color-bg-3)] hover:text-[var(--color-text-1)]">
          <span className="font-mono text-[8.5px] text-[var(--color-text-3)] bg-[var(--color-bg-3)] border border-[var(--color-border-1)] rounded-sm px-1 py-0 min-w-[26px] text-center flex-shrink-0">§6</span>
          Multivariate
        </Link>
      </div>
      
    </aside>
  );
}
