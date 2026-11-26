// The Funniest Office Joke, Judged Head to Head — make.fun program/v1 entry.
//
// Writes one office-joke line to /output/entry.txt: a single line, 83
// characters, no trailing newline. The line is a constant, so the program is
// deterministic, makes no network call, reads nothing outside this repo, and
// always exits 0.
import { mkdirSync, readFileSync, writeFileSync } from "node:fs";

const JOKE =
  'I put "per my last email" in my will, so my family knows I meant it the first time.';

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", JOKE, "utf8");

// Self-check the gate the sealed scorer applies: 1-200 characters of
// non-whitespace UTF-8 text. A bad write must fail loudly, not ship.
const written = readFileSync("/output/entry.txt", "utf8");
if (written.length < 1 || written.length > 200 || written.trim().length === 0) {
  throw new Error(`entry.txt failed the gate: ${written.length} characters`);
}
