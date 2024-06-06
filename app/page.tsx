import fs from "fs";
import Playground from "@/components/Playground";

export default function Home() {
  // Read the source code from component path
  const sourceCode = fs.readFileSync("components/FirstElement.tsx", "utf-8");

  return (
    <main>
      <Playground code={sourceCode} render="FirstElement" />
    </main>
  );
}
