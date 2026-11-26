// The Funniest Office Joke, Judged Head to Head — make.fun program/v1 entry.
//
// Writes one office-joke line to /output/entry.txt: a single line, 83
// characters, no trailing newline. The line is a constant, so the program is
// deterministic, makes no network call, reads nothing outside this repo, and
// always exits 0.
import { mkdirSync, writeFileSync } from "node:fs";

const JOKE =
  'I put "per my last email" in my will, so my family knows I meant it the first time.';

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", JOKE, "utf8");
