// Laugh Track: The Crypto Trading Joke Contest
// (u-alfasurya91-laugh-track-the-crypto-trading-joke-a454158a)
//
// One-line joke about crypto and trading life. Deterministic, Node stdlib
// only, no network access. Writes the single joke line to /output/entry.txt
// (UTF-8, 1-200 characters, not only whitespace).
import { mkdirSync, writeFileSync } from "node:fs";

const JOKE =
  "I told my wife I'd sell when it moons. Three years later she said, 'Even the moon filed a restraining order.'";

// Gate check, same rule as the competition gate: 1-200 characters.
const length = [...JOKE].length;
if (length < 1 || length > 200 || JOKE.trim().length === 0) {
  throw new Error(`entry length ${length} is outside the 1-200 character gate`);
}

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", JOKE, "utf8");
