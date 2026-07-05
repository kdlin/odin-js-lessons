# Odin JS Course — Routing Table (Lesson Protocol v2)

Full-course map for Kendrick (Java OOP + Python + DSA + comp-arch background, visual learner).
Consulted by `/top` on every lesson. Classifications from a 3-agent sweep of every lesson page (2026-07-05).

**Treatment key**
- `FULL` — core-four/visual: primer video + full read + all assignments/exercises
- `PAGE` — additionally gets an HTML visual lesson page on this site (whitelist, do not creep)
- `STD` — Java-diff brief + 10-15 min timed skim + exercises
- `PROC` — procedural/tooling: brief + hard skim; learn by using
- `REVIEW` — covered by his Java DSA/OOP coursework: skim for JS syntax only, do the project/exercises
- All projects: full effort, /mentor mode, he types every line

## M1 — Organizing Your JavaScript Code

| Lesson | Type | Treatment | Notes |
|---|---|---|---|
| Organizing Code with Objects | lesson | ✅ DONE | `this` intro; taught 2026-07-04 |
| Object Constructors | lesson | ✅ DONE (FULL+PAGE) | Site page 0001 live; prototype video: youtu.be/hAK4PgReRPA |
| **Project: Library** | project | 🔜 CURRENT | Book constructor feeds in; logic/DOM split |
| Factory Functions & Module Pattern | lesson | FULL + PAGE | Closures/scope — canonical visual topic, no Java analog. Wes Bos scope/closures + MDN closures assignments NOT skippable |
| Project: Tic Tac Toe | project | project | Closures/IIFE applied; console logic first, DOM second |
| Classes | lesson | STD | Near 1:1 Java mapping; "it's prototypes underneath" is the only new idea |
| ES6 Modules | lesson | FULL (M1 wildcard candidate for PAGE) | Module scope/boundaries; Java packages are a FALSE FRIEND here |
| npm | lesson | PROC | Maven/Gradle analog; learn the commands |
| Webpack | lesson | PROC | Note: live URL is /lessons/javascript-webpack |
| Project: Restaurant Page | project | project | ES modules across files + Webpack scaffold |
| Revisiting Webpack | lesson | PROC | npm scripts, dev/prod config |
| JSON | lesson | STD (fast) | Jackson/Gson mental model transfers |
| OOP Principles | lesson | STD | SOLID — same content as Java OOP course, JS syntax |
| Project: Todo List | project | project | M1 capstone: modules + factories/classes + localStorage |

## M2 — JavaScript in the Real World

| Lesson | Type | Treatment |
|---|---|---|
| Linting | lesson | PROC (ESLint + Prettier) |
| Form Validation with JavaScript | lesson | PROC (Constraint Validation API) |
| ECMAScript | lesson | PROC (history/Babel context; ~Java SE cadence) |

## M3 — Asynchronous JavaScript and APIs

| Lesson | Type | Treatment | Notes |
|---|---|---|---|
| Asynchronous Code | lesson | FULL + PAGE | Event loop + promises — strongest visual topic in the course; TOP itself assigns 2 visualization videos |
| Working with APIs | lesson | STD/PROC | fetch, keys, JSON digging; minor visual bit: the double-promise flow |
| Async and Await | lesson | FULL + PAGE (shared page w/ Async Code ok) | Await suspension timeline; Java Future.get() intuition MISLEADS (closer to virtual threads) |
| Project: Weather App | project | project | Applies all three; dynamic imports |

## M4 — Testing JavaScript (fast section: Java transfer)

| Lesson | Type | Treatment | Notes |
|---|---|---|---|
| Testing Basics | lesson | STD | Jest ≈ JUnit+AssertJ; only new friction is Babel/ESM config |
| Project: Testing Practice | project | project | JUnit-style kata; direct transfer |
| More Testing | lesson | STD | Mocks ≈ Mockito; setup/teardown ≈ @BeforeEach; pure functions concept |

## M5 — A Bit of Computer Science (fast section: DSA review)

| Lesson | Type | Treatment | Notes |
|---|---|---|---|
| A Very Brief Intro to CS | lesson | REVIEW | |
| Recursive Methods | lesson | REVIEW | JS syntax only; do the GitHub exercises |
| Project: Recursion | project | project | Fib + merge sort (built in Java before); HackerEarth visualizer linked in lesson |
| Time Complexity | lesson | REVIEW | |
| Space Complexity | lesson | REVIEW | |
| Common Data Structures & Algorithms | lesson | REVIEW | |
| Project: Linked Lists | project | project | Java transfer; JS classes are the practice |
| HashMap Data Structure | lesson | REVIEW | |
| Project: HashMap | project | project | Buckets/chaining, 0.75 load factor |
| Project: Binary Search Trees | project | project + video | BST deletion (0/1/2 children) + rebalance — most diagram-worthy of the review items |
| Project: Knights Travails | project | project + FULL video | BFS on implicit graph — the one genuinely NEW topic in M5; board-as-graph + BFS wavefront animation. M5 PAGE wildcard candidate |

## M6 — Intermediate Git

| Lesson | Type | Treatment | Notes |
|---|---|---|---|
| A Deeper Look at Git | lesson | PROC | One diagram worth having: commits as a DAG of pointers |
| Working with Remotes | lesson | PROC | force-with-lease, revert |
| Using Git in the Real World | lesson | PROC | Fork/upstream PR workflow |

## M7 — Finishing Up

| Lesson | Type | Treatment | Notes |
|---|---|---|---|
| Project: Battleship | project | CAPSTONE | TDD + OOP integration; logic/DOM hard split; no new theory |
| Conclusion | lesson | read-and-close | |

## HTML-page whitelist (final, from audit 2026-07-05)
1. ✅ 0001 Object Constructors & Prototypes (live)
2. Factory Functions / Closures / Module Pattern
3. Async / Promises / Event Loop (may cover Async+Await together)
4. Wildcards (max 1 per module, judgment): ES6 Modules (M1), Knights Travails BFS (M5)

## Pacing implication
Original JS-course estimate assumed beginner pacing (100-140 hrs). With M4 ≈ Java transfer and M5 ≈ DSA review (6 theory lessons skimmable), revised estimate: **~70-100 hrs** — React start pulls forward accordingly. Re-project from pace-log data at the 2-week mark.
