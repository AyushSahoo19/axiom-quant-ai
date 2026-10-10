import fs from "fs";
import path from "path";
import Topbar from "@/components/Topbar";
import ResearchWorkspace from "@/components/ResearchWorkspace";

export default function ResearchPage() {
  const filePath = path.join(process.cwd(), "content", "research-data.json");
  const fileContents = fs.readFileSync(filePath, "utf8");
  const papers = JSON.parse(fileContents);

  return (
    <>
      <Topbar />
      <ResearchWorkspace papers={papers} />
      <footer className="border-t border-dashed border-[var(--color-border-1)] p-5 text-center font-mono text-[11px] text-[var(--color-text-3)]">
        &copy; 2026 Learning & Research Hub. All systems nominal.
      </footer>
    </>
  );
}
