// One Word, One Username, One Reward — make.fun entry.
//
// Writes the entrant's own make.fun handle, one word and nothing else,
// to entry.txt. The handle is a fixed string in code: no network, no
// clock, no randomness, so every run writes the exact same bytes.

import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

// The entrant's own make.fun username: one word, 10 characters.
const HANDLE = "tayuya0606";

// The gate allows 1 to 30 characters, counted as Unicode code points.
const MAX_CHARS = 30;

function codePointCount(text: string): number {
  return [...text].length;
}

function main(): void {
  const length = codePointCount(HANDLE);
  if (length < 1 || length > MAX_CHARS) {
    throw new Error(`handle must be 1-${MAX_CHARS} characters, got ${length}`);
  }
  if (/\s/.test(HANDLE)) {
    throw new Error("handle must be a single word with no whitespace");
  }

  // Outside the grader, MAKEFUN_OUTPUT_DIR stands in for /output.
  const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";
  mkdirSync(outDir, { recursive: true });
  writeFileSync(join(outDir, "entry.txt"), HANDLE, "utf8");
}

main();

// Post-write read-back verification: re-read the entry file just written
// and assert it holds exactly the expected handle, within the 1-30
// code-point gate, before the program exits.
import { readFileSync as __readFileSync } from "node:fs";
import { join as __join } from "node:path";

{
  const written = __readFileSync(
    __join(process.env.MAKEFUN_OUTPUT_DIR ?? "/output", "entry.txt"),
    "utf8",
  );
  if (written !== HANDLE) {
    throw new Error(`entry.txt mismatch: expected ${HANDLE}`);
  }
  const points = [...written].length;
  if (points < 1 || points > MAX_CHARS) {
    throw new Error(`entry.txt must be 1-${MAX_CHARS} code points, got ${points}`);
  }
}
