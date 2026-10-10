import fs from "fs";
import path from "path";
import Topbar from "@/components/Topbar";
import CareersWorkspace from "@/components/CareersWorkspace";

export default function CareersPage() {
  const filePath = path.join(process.cwd(), "content", "careers-data.json");
  const fileContents = fs.readFileSync(filePath, "utf8");
  const careers = JSON.parse(fileContents);

  return (
    <>
      <Topbar />
      <CareersWorkspace careers={careers} />
      <footer className="border-t border-dashed border-[var(--color-border-1)] p-5 text-center font-mono text-[11px] text-[var(--color-text-3)]">
        &copy; 2026 Learning & Research Hub. All systems nominal.
      </footer>
    </>
  );
}
