// Links the first plain use of each hard word on a page to its glossary entry. Safe to run again.
import { readdirSync, readFileSync, writeFileSync } from "node:fs";
const TERMS = [["loaders?", "loader", "i"], ["jars?", "jar", "i"], ["Cook(?:ed|ing)?", "cook", ""], ["targets?", "target", "i"], ["EULA", "eula", ""], ["Play", "play", ""]];
const BAR = "`" + "*\\[/\"-";
for (const f of readdirSync("docs-src").filter((x) => x.endsWith(".md") && x !== "glossary.md")) {
  const lines = readFileSync(`docs-src/${f}`, "utf8").split("\n");
  let changed = false;
  for (const [re, id, flag] of TERMS) {
    if (lines.join("\n").includes(`glossary.md#${id}`)) continue;
    const rx = new RegExp(`(?<![\\w${BAR}])(${re})(?![\\w\`*\\]"-])(?! on\\b)`, flag);
    let fm = 0;
    for (let i = 0; i < lines.length; i++) {
      if (lines[i] === "---") { fm++; continue; }
      if (fm < 2 || /^(#|\||!|```)/.test(lines[i])) continue;
      const parts = lines[i].split(/(\[[^\]]*\]\([^)]*\)|`[^`]*`|\*\*[^*]*\*\*)/);
      const at = parts.findIndex((p, j) => j % 2 === 0 && rx.test(p));
      if (at < 0) continue;
      parts[at] = parts[at].replace(rx, (m) => `[${m}](glossary.md#${id})`);
      lines[i] = parts.join("");
      changed = true;
      break;
    }
  }
  if (changed) writeFileSync(`docs-src/${f}`, lines.join("\n"));
}
