/* =========================================================================
   Filtration — card bank
   Schema: {id, cat, type: concept|question|fact, diff: 1|2|3, title, body, answer?}
   Math: KaTeX delimiters \( \) inline, \[ \] display. Escape backslashes (\\).
   Add your own cards at the bottom — any id, just keep it unique.
   ========================================================================= */
window.FEED_ITEMS = [

/* ------------------------------ PROBABILITY ------------------------------ */
{id:"p01",cat:"probability",type:"concept",diff:1,title:"Linearity of expectation",
body:"The most-used tool in the room: \\( \\mathbb{E}[X+Y] = \\mathbb{E}[X]+\\mathbb{E}[Y] \\) — **no independence needed**.\nKiller combo with indicators: \\( \\mathbb{E}\\big[\\sum_i \\mathbf{1}_{A_i}\\big] = \\sum_i \\mathbb{P}(A_i) \\). Most “expected number of …” questions die here."},

{id:"p02",cat:"probability",type:"concept",diff:2,title:"Conditional expectation, properly",
body:"\\( \\mathbb{E}[X\\mid\\mathcal{G}] \\) is the \\( \\mathcal{G} \\)-measurable random variable satisfying\n\\[ \\int_A X\\,d\\mathbb{P} = \\int_A \\mathbb{E}[X\\mid\\mathcal{G}]\\,d\\mathbb{P} \\quad \\forall A\\in\\mathcal{G}. \\]\nIntuition: the best \\( L^2 \\) prediction of \\( X \\) given the information in \\( \\mathcal{G} \\). It is a random variable, not a number."},

{id:"p03",cat:"probability",type:"concept",diff:1,title:"Tower property & take out what is known",
body:"Tower: \\( \\mathbb{E}[\\,\\mathbb{E}[X\\mid\\mathcal{G}]\\,] = \\mathbb{E}[X] \\), and for \\( \\mathcal{H}\\subset\\mathcal{G} \\): \\( \\mathbb{E}[\\,\\mathbb{E}[X\\mid\\mathcal{G}]\\mid\\mathcal{H}] = \\mathbb{E}[X\\mid\\mathcal{H}] \\) — the coarser filter wins.\nTaking out what is known: if \\( Y \\) is \\( \\mathcal{G} \\)-measurable, \\( \\mathbb{E}[XY\\mid\\mathcal{G}] = Y\\,\\mathbb{E}[X\\mid\\mathcal{G}] \\)."},

{id:"p04",cat:"probability",type:"concept",diff:2,title:"Law of total variance",
body:"\\[ \\operatorname{Var}(X) = \\mathbb{E}[\\operatorname{Var}(X\\mid Y)] + \\operatorname{Var}(\\mathbb{E}[X\\mid Y]) \\]\nWithin-group noise **plus** between-group signal. The workhorse for compound / hierarchical setups: random sums, mixtures, random parameters."},

{id:"p05",cat:"probability",type:"concept",diff:1,title:"Markov & Chebyshev",
body:"Markov (\\( X\\ge 0 \\)): \\( \\mathbb{P}(X\\ge a) \\le \\mathbb{E}[X]/a \\).\nChebyshev: \\( \\mathbb{P}(|X-\\mu|\\ge k\\sigma) \\le 1/k^2 \\).\nCrude but assumption-free — the opening move before you reach for Chernoff."},

{id:"p06",cat:"probability",type:"concept",diff:2,title:"Jensen's inequality",
body:"\\( \\varphi \\) convex \\( \\Rightarrow \\varphi(\\mathbb{E}[X]) \\le \\mathbb{E}[\\varphi(X)] \\). Concave flips it.\nInstant corollaries: \\( \\mathbb{E}[X^2]\\ge(\\mathbb{E}X)^2 \\), \\( \\mathbb{E}[1/X]\\ge 1/\\mathbb{E}[X] \\) for \\( X>0 \\), \\( \\mathbb{E}[\\log X]\\le\\log\\mathbb{E}[X] \\).\nHolds conditionally too — a favorite hidden step in martingale problems."},

{id:"p07",cat:"probability",type:"concept",diff:2,title:"Borel–Cantelli",
body:"BC1: \\( \\sum_n \\mathbb{P}(A_n) < \\infty \\Rightarrow \\mathbb{P}(A_n \\text{ i.o.}) = 0 \\).\nBC2: if the \\( A_n \\) are **independent** and \\( \\sum_n \\mathbb{P}(A_n) = \\infty \\), then \\( \\mathbb{P}(A_n \\text{ i.o.}) = 1 \\).\nThe standard bridge from probabilities to almost-sure statements."},

{id:"p08",cat:"probability",type:"concept",diff:2,title:"The convergence zoo",
body:"\\( X_n \\xrightarrow{a.s.} X \\;\\Rightarrow\\; X_n \\xrightarrow{\\mathbb{P}} X \\;\\Rightarrow\\; X_n \\Rightarrow X \\) (in distribution). Also \\( L^p \\Rightarrow \\) in probability.\nNo arrow reverses for free. Classic counterexample: the sliding/typewriter intervals converge in probability but not a.s."},

{id:"p09",cat:"probability",type:"concept",diff:1,title:"LLN & CLT",
body:"SLLN: \\( \\bar{X}_n \\to \\mu \\) a.s. (iid, \\( \\mathbb{E}|X|<\\infty \\)).\nCLT: \\( \\sqrt{n}\\,(\\bar{X}_n-\\mu)/\\sigma \\Rightarrow \\mathcal{N}(0,1) \\).\nRate of the normal approximation: Berry–Esseen gives \\( O(1/\\sqrt{n}) \\). Fluctuations live at scale \\( \\sqrt{n} \\) — the square root behind everything in finance."},

{id:"p10",cat:"probability",type:"concept",diff:2,title:"Characteristic functions",
body:"\\( \\varphi_X(t) = \\mathbb{E}[e^{itX}] \\) always exists and **determines the law**. Independence: \\( \\varphi_{X+Y}=\\varphi_X\\varphi_Y \\).\nStandard normal: \\( e^{-t^2/2} \\). Lévy continuity turns pointwise cf convergence into convergence in distribution — the clean proof of the CLT."},

{id:"p11",cat:"probability",type:"question",diff:2,title:"Memoryless, or nothing",
body:"Which distributions satisfy \\( \\mathbb{P}(X>s+t \\mid X>s) = \\mathbb{P}(X>t) \\)?",
answer:"Exactly two families: **exponential** (continuous) and **geometric** (discrete).\nThe survival function must satisfy \\( \\bar F(s+t)=\\bar F(s)\\bar F(t) \\), and the only monotone solutions are exponentials. This is why Poisson-world waiting times never “ripen”."},

{id:"p12",cat:"probability",type:"concept",diff:2,title:"Poisson toolkit",
body:"Sums: \\( \\mathrm{Poi}(\\lambda)+\\mathrm{Poi}(\\mu)=\\mathrm{Poi}(\\lambda+\\mu) \\) (independent).\nThinning: keep each event with prob \\( p \\) → \\( \\mathrm{Poi}(\\lambda p) \\), independent of the discarded stream.\nConditioning: given \\( X+Y=n \\), \\( X \\sim \\mathrm{Bin}\\!\\big(n, \\tfrac{\\lambda}{\\lambda+\\mu}\\big) \\)."},

{id:"p13",cat:"probability",type:"concept",diff:2,title:"Gaussian vectors",
body:"Jointly Gaussian + uncorrelated ⇒ **independent** (joint normality is essential — marginals alone do not cut it).\nEvery linear combination is Gaussian. Conditioning stays linear:\n\\[ \\mathbb{E}[X\\mid Y] = \\mu_X + \\rho\\tfrac{\\sigma_X}{\\sigma_Y}(Y-\\mu_Y), \\] with residual variance \\( \\sigma_X^2(1-\\rho^2) \\)."},

{id:"p14",cat:"probability",type:"question",diff:2,title:"Ratio of normals",
body:"\\( X, Y \\) iid \\( \\mathcal{N}(0,1) \\). What is the distribution of \\( X/Y \\)?",
answer:"**Cauchy** — density \\( \\frac{1}{\\pi(1+z^2)} \\). No mean, no variance; sample means never settle (the average of Cauchys is Cauchy).\nMoral: dividing by something that visits 0 manufactures heavy tails."},

{id:"p15",cat:"probability",type:"concept",diff:2,title:"Order statistics of uniforms",
body:"For \\( n \\) iid \\( U(0,1) \\): \\( U_{(k)} \\sim \\mathrm{Beta}(k,\\,n+1-k) \\), so \\( \\mathbb{E}[U_{(k)}] = \\tfrac{k}{n+1} \\).\nMax: \\( \\tfrac{n}{n+1} \\); min: \\( \\tfrac{1}{n+1} \\). The \\( n+1 \\) gaps are exchangeable with mean \\( \\tfrac{1}{n+1} \\) — the picture that solves most order-stat questions."},

{id:"p16",cat:"probability",type:"question",diff:2,title:"Coupon collector",
body:"Cereal boxes hide one of \\( n \\) coupon types, uniformly. Expected boxes to collect them all?",
answer:"\\( n H_n = n\\big(1+\\tfrac12+\\cdots+\\tfrac1n\\big) \\approx n\\ln n \\).\nPhase \\( k\\to k+1 \\) is geometric with success prob \\( \\tfrac{n-k}{n} \\); sum the means.\nDie version (\\( n=6 \\)): **14.7 rolls** to see every face."},

{id:"p17",cat:"probability",type:"question",diff:1,title:"Two dice, one seven",
body:"Why is 7 the most likely total of two dice?",
answer:"Every value of the first die admits **exactly one** completion to 7 — so 6 of 36 outcomes, more than any other total.\nGenerating-function view: the coefficient of \\( x^7 \\) in \\( (x+\\cdots+x^6)^2 \\) is maximal."},

{id:"p18",cat:"probability",type:"question",diff:3,title:"The Tuesday boy",
body:"“I have two children. One is a boy born on a Tuesday. What is the probability both are boys?”",
answer:"**13/27** — not 1/2, not 1/3.\nWith just “at least one boy” you get 1/3. The Tuesday detail shrinks the conditioning set asymmetrically: 13 boy–boy combos vs 14 mixed ones (out of 27).\nThe deep lesson: *how* you learned a fact changes the conditioning."},

{id:"p19",cat:"probability",type:"question",diff:2,title:"Symmetry: X/(X+Y)",
body:"\\( X, Y \\) iid and positive. Compute \\( \\mathbb{E}\\!\\left[\\dfrac{X}{X+Y}\\right] \\).",
answer:"**1/2**, with zero integration: \\( \\tfrac{X}{X+Y} \\) and \\( \\tfrac{Y}{X+Y} \\) have the same distribution and sum to 1, so each has mean 1/2.\nSymmetry before calculus, always."},

{id:"p20",cat:"probability",type:"concept",diff:1,title:"Tail-sum formula",
body:"For \\( X \\in \\{0,1,2,\\dots\\} \\): \\( \\mathbb{E}[X] = \\sum_{k\\ge 1} \\mathbb{P}(X\\ge k) \\).\nContinuous \\( X\\ge0 \\): \\( \\mathbb{E}[X] = \\int_0^\\infty \\mathbb{P}(X>t)\\,dt \\).\nOften faster than densities — e.g. \\( \\mathbb{E}[\\max] \\) of uniforms in one line."},

{id:"p21",cat:"probability",type:"question",diff:2,title:"Broken stick, triangle",
body:"Break a stick at two uniform random points. Probability the three pieces form a triangle?",
answer:"**1/4**.\nTriangle ⟺ every piece \\( < \\tfrac12 \\). In the \\( (x,y) \\) unit-square picture the failure region is three congruent corner triangles of total area 3/4.\nFollow-up they love: expected lengths of the pieces — see the order-statistics card."},

{id:"p22",cat:"probability",type:"question",diff:2,title:"Buffon's needle",
body:"Drop a needle of length \\( L \\) on a floor ruled with parallel lines a distance \\( d \\ge L \\) apart. Probability it crosses a line?",
answer:"\\[ \\mathbb{P}(\\text{cross}) = \\frac{2L}{\\pi d} \\]\nIntegrate over the center offset and the angle. Throw needles, count crossings, estimate \\( \\pi \\) — Monte Carlo, 1777 edition."},

{id:"p23",cat:"probability",type:"question",diff:2,title:"Derangements",
body:"Shuffle \\( n \\) letters into \\( n \\) envelopes at random. Probability nobody gets their own letter?",
answer:"\\( \\sum_{k=0}^n \\tfrac{(-1)^k}{k!} \\to e^{-1} \\approx 0.37 \\), by inclusion–exclusion.\nBonus: fixed points have mean 1 and variance 1, and converge to Poisson(1)."},

{id:"p24",cat:"probability",type:"concept",diff:2,title:"Inclusion–exclusion",
body:"\\[ \\mathbb{P}\\Big(\\bigcup A_i\\Big) = \\sum \\mathbb{P}(A_i) - \\sum_{i<j}\\mathbb{P}(A_i\\cap A_j) + \\cdots \\]\nBonferroni: truncating after a + term overshoots, after a − term undershoots — free two-sided bounds.\nDefault weapon for “at least one …” events with overlap."},

{id:"p25",cat:"probability",type:"question",diff:2,title:"Uniforms summing past 1",
body:"Draw iid \\( U(0,1) \\) variables until the running sum exceeds 1. Expected number of draws?",
answer:"**\\( e \\approx 2.718 \\)**.\n\\( \\mathbb{P}(N>n) = \\mathbb{P}(U_1+\\cdots+U_n \\le 1) = \\tfrac{1}{n!} \\) (a simplex volume), so \\( \\mathbb{E}[N] = \\sum_{n\\ge0} \\tfrac{1}{n!} = e \\)."},

{id:"p26",cat:"probability",type:"question",diff:1,title:"Birthday numbers",
body:"How many people until a shared birthday is more likely than not? And until someone shares **your** birthday?",
answer:"**23** and **253**.\nPairs scale as \\( \\binom{n}{2} \\approx n^2/2 \\) — collisions come fast. Matches with a fixed person scale as \\( n \\): \\( 1-(364/365)^n \\ge \\tfrac12 \\) needs \\( n=253 \\).\nSame √-scaling powers hash collisions and birthday attacks."},

{id:"p27",cat:"probability",type:"concept",diff:2,title:"Uncorrelated ≠ independent",
body:"\\( X\\sim\\mathcal{N}(0,1) \\), \\( Y = X^2 \\): \\( \\operatorname{Cov}(X,Y) = \\mathbb{E}[X^3] = 0 \\), yet \\( Y \\) is a function of \\( X \\).\nCorrelation only sees **linear** dependence. (Exception worth quoting: within a jointly Gaussian vector, uncorrelated ⇒ independent.)"},

{id:"p28",cat:"probability",type:"question",diff:2,title:"Monty Hall",
body:"Three doors, one car. You pick a door; the host, who knows, opens another door with a goat and offers a switch. Do you?",
answer:"**Switch — you win with prob 2/3.**\nYour first pick is right 1/3 of the time, and the host's reveal is *informative about the other doors only*.\nSharp version: the answer depends on the host's protocol — if he opened a random door that happened to show a goat, switching is 50/50."},

{id:"p29",cat:"probability",type:"question",diff:3,title:"Running records",
body:"\\( n \\) iid continuous draws arrive one by one. Expected number of running maxima (records)?",
answer:"\\( H_n = 1+\\tfrac12+\\cdots+\\tfrac1n \\approx \\ln n \\).\nDraw \\( k \\) is a record iff it is the largest of the first \\( k \\) — probability \\( 1/k \\) by exchangeability. Indicators + linearity; independence of the indicators is a bonus, not a requirement."},

{id:"p30",cat:"probability",type:"concept",diff:3,title:"Chernoff & Hoeffding",
body:"For iid \\( X_i \\in [a,b] \\):\n\\[ \\mathbb{P}(\\bar X_n - \\mu \\ge t) \\le \\exp\\!\\Big(\\tfrac{-2nt^2}{(b-a)^2}\\Big). \\]\nExponential tails from the mgf + Markov on \\( e^{\\lambda S_n} \\), optimized over \\( \\lambda \\). Chebyshev gives \\( 1/n \\); this gives \\( e^{-cn} \\) — the language of ML bounds and risk limits."},

/* --------------------------- STOCHASTIC PROCESSES ------------------------ */
{id:"s01",cat:"stochastic",type:"concept",diff:1,title:"Filtration",
body:"\\( (\\mathcal{F}_t) \\): an increasing family of σ-algebras — the flow of information. A process is **adapted** if \\( X_t \\) is \\( \\mathcal{F}_t \\)-measurable: no peeking at the future.\nYes, this app is named after it. Everything you scroll is adapted to what you have seen."},

{id:"s02",cat:"stochastic",type:"concept",diff:1,title:"Martingale, the definition",
body:"Adapted, integrable, and\n\\[ \\mathbb{E}[X_{n+1}\\mid\\mathcal{F}_n] = X_n. \\]\nSubmartingale: \\( \\ge \\) (drifts up). Supermartingale: \\( \\le \\).\nSlogan: a fair game *given everything you know so far* — the conditioning is the whole point."},

{id:"s03",cat:"stochastic",type:"concept",diff:1,title:"Stopping time",
body:"\\( \\tau \\) with \\( \\{\\tau \\le n\\} \\in \\mathcal{F}_n \\): you can tell it has happened using only the story so far.\nFirst hitting time ✓. “The last time the walk visits 0” ✗ — deciding *last* needs the future.\nInterview reflex: whenever a rule says “stop when…”, check it is honestly a stopping time."},

{id:"s04",cat:"stochastic",type:"concept",diff:2,title:"Optional stopping theorem",
body:"\\( \\mathbb{E}[X_\\tau] = \\mathbb{E}[X_0] \\) for a martingale if **one** of: (a) \\( \\tau \\) bounded; (b) \\( \\mathbb{E}[\\tau]<\\infty \\) and bounded increments; (c) uniform integrability.\nBreak all three and you get the doubling-strategy “paradox”: the martingale bettor's \\( \\tau \\) has infinite expectation and unbounded losses on the way."},

{id:"s05",cat:"stochastic",type:"question",diff:2,title:"Gambler's ruin, fair version",
body:"Fair ±1 walk from 0, absorbing barriers at \\( +a \\) and \\( -b \\). Probability of hitting \\( a \\) first? Expected duration?",
answer:"\\( \\mathbb{P}(\\text{hit } a \\text{ first}) = \\dfrac{b}{a+b} \\), and \\( \\mathbb{E}[\\tau] = ab \\).\nOptional stopping on the martingales \\( S_n \\) (gives the probability) and \\( S_n^2 - n \\) (gives the time). Two lines each — the template for a dozen interview questions."},

{id:"s06",cat:"stochastic",type:"question",diff:3,title:"Biased ruin",
body:"Steps +1 w.p. \\( p \\), −1 w.p. \\( q=1-p \\), start at \\( k \\), absorbing at 0 and \\( N \\). Probability of reaching \\( N \\)?",
answer:"\\[ \\mathbb{P}_k(\\text{reach } N) = \\frac{1-(q/p)^k}{1-(q/p)^N}. \\]\nDriver: \\( (q/p)^{S_n} \\) is a martingale (De Moivre) — apply optional stopping.\nLimit \\( N\\to\\infty \\): if \\( p>q \\), the walk escapes forever with prob \\( 1-(q/p)^k \\); if \\( p\\le q \\), ruin is certain."},

{id:"s07",cat:"stochastic",type:"question",diff:2,title:"Drunk man, cliff edge",
body:"He stands one step from the edge. Each second: toward the cliff w.p. 1/3, away w.p. 2/3. Probability he eventually falls?",
answer:"**1/2.**\nFor a biased walk drifting away, \\( \\mathbb{P}(\\text{ever go one net step toward}) = \\min(1, p/q) \\) with \\( p=\\tfrac13, q=\\tfrac23 \\).\nSolve \\( h = p + q h^2 \\) (fall now, or take one safe step and need *two* net falls): roots \\( 1 \\) and \\( p/q \\); take the smaller."},

{id:"s08",cat:"stochastic",type:"question",diff:2,title:"HH vs HT",
body:"Expected fair-coin flips to first see **HH**? To first see **HT**? Why are they different?",
answer:"**6 vs 4.**\nAfter H, a tail resets HH to zero progress, but for HT a head keeps you one step in. States + first-step equations, or the martingale-casino argument.\nFull menu: HT/TH: 4 · HH/TT: 6 · HHT: 8 · HTH: 10 · HHH: 14."},

{id:"s09",cat:"stochastic",type:"question",diff:3,title:"ABRACADABRA",
body:"A monkey types uniformly over 26 keys. Expected time until the word ABRACADABRA appears?",
answer:"\\[ 26^{11} + 26^{4} + 26 \\]\nOne term per *border* (prefix that is also a suffix): ABRACADABRA, ABRA, A.\nProof: a casino of fair gamblers betting on each letter; optional stopping makes total stake = total payout. Same machinery as HH vs HT — overlaps are capital."},

{id:"s10",cat:"stochastic",type:"concept",diff:2,title:"Wald's identity",
body:"\\( X_i \\) iid with \\( \\mathbb{E}|X|<\\infty \\), \\( N \\) a stopping time with \\( \\mathbb{E}[N]<\\infty \\):\n\\[ \\mathbb{E}\\Big[\\sum_{i=1}^N X_i\\Big] = \\mathbb{E}[N]\\,\\mathbb{E}[X]. \\]\nFails if \\( N \\) peeks ahead (e.g. “stop just before a loss”). Second identity: \\( \\operatorname{Var} \\) version with \\( \\mathbb{E}[N]\\operatorname{Var}(X) \\) when \\( \\mathbb{E}[X]=0 \\)."},

{id:"s11",cat:"stochastic",type:"question",diff:2,title:"Roll until a six",
body:"Roll a fair die until the first 6, then stop. Expected **sum** of all rolls, the 6 included?",
answer:"**21.**\nWald: \\( \\mathbb{E}[\\text{sum}] = \\mathbb{E}[N]\\cdot\\mathbb{E}[X] = 6 \\times 3.5 \\).\nThe trap: conditioning rolls on “not 6” and hand-summing — legal but slow. Wald sees the rolls as iid and the stopping rule as honest."},

{id:"s12",cat:"stochastic",type:"concept",diff:3,title:"Martingale hall of fame",
body:"Fair walk \\( S_n \\): the walk itself, \\( S_n^2 - n \\), and \\( e^{\\theta S_n}/(\\cosh\\theta)^n \\).\nProducts of iid mean-1 variables. Likelihood ratios. And the Doob martingale \\( \\mathbb{E}[Y\\mid\\mathcal{F}_n] \\) — *any* integrable target, revealed gradually.\nMost “find the trick” problems are “find the martingale”."},

{id:"s13",cat:"stochastic",type:"concept",diff:3,title:"Azuma–Hoeffding",
body:"Martingale with bounded increments \\( |X_k - X_{k-1}| \\le c_k \\):\n\\[ \\mathbb{P}(X_n - X_0 \\ge t) \\le \\exp\\!\\Big(\\tfrac{-t^2}{2\\sum c_k^2}\\Big). \\]\nConcentration **without independence**. Via Doob martingales this becomes McDiarmid: any function with bounded per-coordinate influence concentrates."},

{id:"s14",cat:"stochastic",type:"concept",diff:3,title:"Convergence & Doob's inequalities",
body:"Martingale with \\( \\sup_n \\mathbb{E}[X_n^+] < \\infty \\) converges almost surely.\nDoob maximal (\\( L^2 \\)): \\( \\mathbb{E}[\\max_{k\\le n} X_k^2] \\le 4\\,\\mathbb{E}[X_n^2] \\).\nWhy traders care: bounded-in-\\( L^1 \\) “fair” strategies cannot oscillate forever — they settle."},

{id:"s15",cat:"stochastic",type:"concept",diff:1,title:"Markov chains, the object",
body:"\\( \\mathbb{P}(X_{n+1}=j \\mid X_n=i, \\text{past}) = P_{ij} \\): memory lives entirely in the current state.\nChapman–Kolmogorov: \\( P^{(m+n)} = P^m P^n \\) — n-step transitions are matrix powers. Rows sum to 1; eigenvalue 1 always exists."},

{id:"s16",cat:"stochastic",type:"concept",diff:2,title:"Chain taxonomy",
body:"**Irreducible**: every state reaches every other. **Aperiodic**: return times have gcd 1. **Positive recurrent**: \\( \\mathbb{E}[\\text{return time}] < \\infty \\).\nAll three ⇒ ergodic: \\( \\mathbb{P}(X_n = i) \\to \\pi_i \\) from any start. Finite + irreducible already guarantees positive recurrence."},

{id:"s17",cat:"stochastic",type:"concept",diff:2,title:"Stationary distribution",
body:"\\( \\pi = \\pi P \\), \\( \\sum_i \\pi_i = 1 \\).\nErgodic chain: long-run fraction of time in \\( i \\) equals \\( \\pi_i \\), and\n\\[ \\mathbb{E}_i[\\text{return time to } i] = \\frac{1}{\\pi_i}. \\]\nThat last identity quietly solves an entire genre of interview questions."},

{id:"s18",cat:"stochastic",type:"concept",diff:2,title:"Reversibility shortcut",
body:"Detailed balance \\( \\pi_i P_{ij} = \\pi_j P_{ji} \\) ⇒ \\( \\pi \\) is stationary (check, do not solve!).\nRandom walk on a graph: \\( \\pi_i = \\dfrac{\\deg(i)}{2|E|} \\).\nThis is also the design principle behind MCMC: build \\( P \\) to balance against your target \\( \\pi \\)."},

{id:"s19",cat:"stochastic",type:"question",diff:3,title:"Knight in the corner",
body:"A knight starts in a corner of an empty chessboard and moves uniformly among legal moves. Expected time to return to the corner?",
answer:"**168.**\nRandom walk on a graph: \\( \\mathbb{E}[\\text{return}] = 1/\\pi_{\\text{corner}} = \\dfrac{2|E|}{\\deg} \\). The knight-move graph has 168 edges; a corner has degree 2 → \\( 336/2 \\).\nZero linear algebra — reversibility does everything."},

{id:"s20",cat:"stochastic",type:"question",diff:2,title:"Exit time of an interval",
body:"Fair ±1 walk from 0. Expected number of steps to exit \\( (-a, b) \\)?",
answer:"\\( ab \\).\nOptional stopping on \\( S_n^2 - n \\): at exit, \\( \\mathbb{E}[S_\\tau^2] = a b \\) (using the exit probabilities \\( b/(a+b) \\) and \\( a/(a+b) \\))… i.e. \\( \\mathbb{E}[\\tau] = \\mathbb{E}[S_\\tau^2] = \\frac{b}{a+b}a^2 + \\frac{a}{a+b}b^2 = ab \\)."},

{id:"s21",cat:"stochastic",type:"concept",diff:2,title:"First-step analysis",
body:"Condition on the first move: for absorption probabilities or expected times,\n\\[ h(i) = \\textstyle\\sum_j P_{ij}\\,h(j) \\ (+1 \\text{ for times}), \\]\nwith boundary values at absorbing states. Mechanical, always works, and interviewers expect you to set it up cleanly *before* hunting for elegance."},

{id:"s22",cat:"stochastic",type:"concept",diff:3,title:"Pólya's theorem",
body:"Simple random walk on \\( \\mathbb{Z}^d \\): **recurrent** for \\( d = 1, 2 \\), **transient** for \\( d \\ge 3 \\).\nKakutani: “A drunk man will find his way home, but a drunk bird may get lost forever.”\nDriver: \\( \\mathbb{P}(S_{2n}=0) \\sim c\\,n^{-d/2} \\); the return-probability series converges iff \\( d\\ge3 \\)."},

{id:"s23",cat:"stochastic",type:"question",diff:2,title:"Ballot problem",
body:"Candidate A gets \\( a \\) votes, B gets \\( b < a \\). Counting ballots in random order, probability A is **strictly ahead throughout**?",
answer:"\\[ \\frac{a-b}{a+b} \\]\nReflection principle (or the cycle lemma). Same trick underlies the arcsine intuition: leads are persistent, ties are rare."},

{id:"s24",cat:"stochastic",type:"concept",diff:2,title:"Poisson process",
body:"Rate \\( \\lambda \\): independent stationary increments, \\( N_t \\sim \\mathrm{Poi}(\\lambda t) \\), interarrivals iid \\( \\mathrm{Exp}(\\lambda) \\).\nSuperposition adds rates; thinning splits into independent processes. The default model for order flow, defaults, and arrivals of anything."},

{id:"s25",cat:"stochastic",type:"concept",diff:3,title:"Conditional uniformity",
body:"Given \\( N_t = n \\), the \\( n \\) arrival times are distributed as the **order statistics of n iid U(0,t)**.\nUnlocks “given k events happened by noon…” questions instantly: forget the process, place points uniformly."},

{id:"s26",cat:"stochastic",type:"question",diff:2,title:"Inspection paradox",
body:"Buses arrive as a Poisson process with mean gap 10 min. You reach the stop at a random time. Expected wait?",
answer:"**10 minutes — not 5.**\nMemorylessness: your wait is Exp(1/10) regardless of history. Equivalently you land in a *size-biased* gap: longer intervals catch more random arrivals; the gap containing you has mean 20."},

{id:"s27",cat:"stochastic",type:"concept",diff:1,title:"Brownian motion, definition",
body:"\\( B_0=0 \\); independent increments; \\( B_t - B_s \\sim \\mathcal{N}(0, t-s) \\); continuous paths.\nRough facts: nowhere differentiable, quadratic variation \\( \\langle B\\rangle_t = t \\), self-similar. The scaling limit of every reasonable random walk (Donsker)."},

{id:"s28",cat:"stochastic",type:"concept",diff:2,title:"BM symmetries",
body:"All Brownian again: \\( -B_t \\); \\( c^{-1/2}B_{ct} \\) (scaling); \\( tB_{1/t} \\) (time inversion); \\( B_{t+s}-B_s \\) (Markov restart).\nScaling is the exam favorite: it converts statements about time \\( t \\) into statements about time 1, e.g. \\( \\mathbb{E}[\\max_{s\\le t} B_s] = \\sqrt{t}\\,\\mathbb{E}[\\max_{s\\le 1} B_s] \\)."},

{id:"s29",cat:"stochastic",type:"concept",diff:2,title:"Reflection principle",
body:"\\( M_t = \\max_{s\\le t} B_s \\):\n\\[ \\mathbb{P}(M_t \\ge a) = 2\\,\\mathbb{P}(B_t \\ge a), \\qquad M_t \\overset{d}{=} |B_t|. \\]\nHitting time of level \\( a \\): density \\( \\frac{a}{\\sqrt{2\\pi t^3}} e^{-a^2/2t} \\); finite a.s., but \\( \\mathbb{E}[\\tau_a] = \\infty \\). Reaching is free; being on time is expensive."},

{id:"s30",cat:"stochastic",type:"question",diff:3,title:"Two-sided exit for BM",
body:"Brownian motion from 0, barriers at \\( +a \\) and \\( -b \\). Probability of hitting \\( a \\) first? Expected exit time?",
answer:"\\( \\dfrac{b}{a+b} \\) and \\( ab \\) — identical to the fair walk.\n\\( B_t \\) and \\( B_t^2 - t \\) are martingales; optional stopping transfers the discrete answers verbatim. Continuous limits inherit martingale structure."},

{id:"s31",cat:"stochastic",type:"question",diff:3,title:"Staying positive",
body:"For standard BM: \\( \\mathbb{P}(B_2 > 0 \\mid B_1 > 0) \\)?",
answer:"**3/4.**\n\\( (B_1, B_2) \\) is Gaussian with correlation \\( 1/\\sqrt{2} \\). Orthant formula: \\( \\mathbb{P}(both>0) = \\tfrac14 + \\tfrac{\\arcsin\\rho}{2\\pi} = \\tfrac14+\\tfrac18 = \\tfrac38 \\); divide by \\( \\mathbb{P}(B_1>0)=\\tfrac12 \\).\nThe orthant formula itself is a card worth owning."},

{id:"s32",cat:"stochastic",type:"fact",diff:3,title:"Arcsine laws",
body:"For BM on [0,1], three quantities share the **arcsine distribution** (density \\( \\frac{1}{\\pi\\sqrt{x(1-x)}} \\), U-shaped): the last zero, the time of the maximum, the fraction of time positive.\nTranslation: a fair game spends most of its life with one side ahead. Leads are sticky; “it must even out soon” is exactly wrong."},

{id:"s33",cat:"stochastic",type:"concept",diff:3,title:"Branching processes",
body:"Galton–Watson, offspring mean \\( m \\), pgf \\( \\varphi \\). Extinction probability \\( q \\) = **smallest** fixed point of \\( \\varphi(s) = s \\).\n\\( q = 1 \\iff m \\le 1 \\) (with the trivial deterministic case excluded). Population conditioned on survival grows like \\( m^n \\); \\( Z_n/m^n \\) is a martingale."},

{id:"s34",cat:"stochastic",type:"concept",diff:2,title:"Exponential races",
body:"Independent \\( X_i \\sim \\mathrm{Exp}(\\lambda_i) \\):\n• \\( \\min_i X_i \\sim \\mathrm{Exp}(\\sum \\lambda_i) \\)\n• \\( \\mathbb{P}(X_i \\text{ wins}) = \\lambda_i / \\sum_j \\lambda_j \\)\n• winner's identity is independent of the race duration.\nThe engine behind queues, CTMCs, and “first server to finish” questions."},

/* --------------------------- STOCHASTIC CALCULUS ------------------------- */
{id:"c01",cat:"stochcalc",type:"concept",diff:2,title:"The Itô integral",
body:"\\( \\int_0^t H_s\\,dB_s \\): limit of sums \\( \\sum H_{t_i}(B_{t_{i+1}}-B_{t_i}) \\) with \\( H \\) evaluated at the **left endpoint** — non-anticipating, hence a martingale.\nItô isometry: \\[ \\mathbb{E}\\Big[\\Big(\\int_0^t H\\,dB\\Big)^2\\Big] = \\mathbb{E}\\Big[\\int_0^t H_s^2\\,ds\\Big]. \\]"},

{id:"c02",cat:"stochcalc",type:"concept",diff:1,title:"The box rules",
body:"\\[ (dB)^2 = dt, \\qquad dB\\,dt = 0, \\qquad (dt)^2 = 0. \\]\nAll of Itô calculus is Taylor to second order plus these three lines. Quadratic variation is why the second-order term survives — Brownian paths wiggle at scale \\( \\sqrt{dt} \\)."},

{id:"c03",cat:"stochcalc",type:"concept",diff:2,title:"Itô's lemma",
body:"\\[ df(t, X_t) = f_t\\,dt + f_x\\,dX_t + \\tfrac12 f_{xx}\\,d\\langle X\\rangle_t. \\]\nFor \\( f(B_t) \\): \\( df = f'(B)\\,dB + \\tfrac12 f''(B)\\,dt \\).\nThe \\( \\tfrac12 f'' \\) correction is the entire subject: convexity + volatility = drift."},

{id:"c04",cat:"stochcalc",type:"question",diff:2,title:"Warm-up: ∫ B dB",
body:"Compute \\( \\displaystyle\\int_0^t B_s\\,dB_s \\).",
answer:"\\[ \\int_0^t B_s\\,dB_s = \\frac{B_t^2 - t}{2}. \\]\nItô on \\( B^2 \\): \\( d(B^2) = 2B\\,dB + dt \\), rearrange. The \\( -t \\) is the Itô correction — and it makes the result a martingale, as any honest stochastic integral must be."},

{id:"c05",cat:"stochcalc",type:"question",diff:2,title:"Fourth moment of BM",
body:"Compute \\( \\mathbb{E}[B_t^4] \\).",
answer:"**\\( 3t^2 \\).**\nRoute 1: \\( B_t \\sim \\sqrt{t}\\,Z \\) and \\( \\mathbb{E}[Z^4] = 3 \\).\nRoute 2 (the one they want): Itô on \\( B^4 \\): \\( d(B^4) = 4B^3 dB + 6B^2 dt \\Rightarrow \\mathbb{E}[B_t^4] = 6\\int_0^t s\\,ds = 3t^2 \\)."},

{id:"c06",cat:"stochcalc",type:"question",diff:2,title:"Exponential martingale",
body:"For which \\( c \\) is \\( \\exp(\\sigma B_t + ct) \\) a martingale?",
answer:"\\( c = -\\sigma^2/2 \\): the process \\( \\mathcal{E}_t = e^{\\sigma B_t - \\sigma^2 t/2} \\).\nEquivalently \\( \\mathbb{E}[e^{\\sigma B_t}] = e^{\\sigma^2 t/2} \\) (lognormal mean). This is the \\( -\\sigma^2/2 \\) that haunts every GBM and every Girsanov density."},

{id:"c07",cat:"stochcalc",type:"question",diff:3,title:"Is B³ a martingale?",
body:"Is \\( B_t^3 \\) a martingale? If not, repair it.",
answer:"No: \\( d(B^3) = 3B^2\\,dB + 3B\\,dt \\) — the drift \\( 3B_t\\,dt \\) has zero mean but does not vanish pathwise.\nRepair: \\( B_t^3 - 3tB_t \\) **is** a martingale. Next in line: \\( B^4 - 6tB^2 + 3t^2 \\) — the Hermite polynomial family."},

{id:"c08",cat:"stochcalc",type:"concept",diff:2,title:"GBM, solved",
body:"\\( dS = \\mu S\\,dt + \\sigma S\\,dB \\) ⇒\n\\[ S_t = S_0\\exp\\big((\\mu - \\tfrac{\\sigma^2}{2})t + \\sigma B_t\\big). \\]\nItô on \\( \\ln S \\). Mean grows at \\( \\mu \\); **median** grows at \\( \\mu - \\sigma^2/2 \\). High vol drags typical paths down while inflating the lucky tail — volatility drag in one formula."},

{id:"c09",cat:"stochcalc",type:"concept",diff:3,title:"Ornstein–Uhlenbeck",
body:"\\( dX = \\kappa(\\theta - X)\\,dt + \\sigma\\,dB \\): mean reversion at speed \\( \\kappa \\).\nSolution: \\( X_t = \\theta + (X_0-\\theta)e^{-\\kappa t} + \\sigma\\int_0^t e^{-\\kappa(t-s)}dB_s \\) — Gaussian.\nStationary law: \\( \\mathcal{N}\\big(\\theta, \\tfrac{\\sigma^2}{2\\kappa}\\big) \\). The default model for spreads, rates, and anything that snaps back."},

{id:"c10",cat:"stochcalc",type:"concept",diff:3,title:"Girsanov",
body:"Under \\( d\\mathbb{Q}/d\\mathbb{P} = \\exp(-\\lambda B_T - \\tfrac12\\lambda^2 T) \\), the process \\( \\tilde B_t = B_t + \\lambda t \\) is a \\( \\mathbb{Q} \\)-Brownian motion.\nTranslation: an equivalent change of measure can **shift drift**, never volatility. That is precisely how the real-world \\( \\mu \\) becomes \\( r \\) in pricing."},

{id:"c11",cat:"stochcalc",type:"concept",diff:3,title:"Feynman–Kac",
body:"\\( u(t,x) = \\mathbb{E}\\big[e^{-r(T-t)}g(X_T) \\mid X_t = x\\big] \\) solves\n\\[ u_t + \\mu u_x + \\tfrac12\\sigma^2 u_{xx} - ru = 0, \\quad u(T,\\cdot)=g. \\]\nPDEs ⟷ expectations, both directions. Black–Scholes is this theorem wearing a suit; Monte Carlo and finite differences are its two dialects."},

{id:"c12",cat:"stochcalc",type:"concept",diff:3,title:"Martingale representation",
body:"Every martingale of the Brownian filtration is a stochastic integral: \\( M_t = M_0 + \\int_0^t H_s\\,dB_s \\).\nFinance translation: in the BS world every payoff is **replicable** — the integrand \\( H \\) *is* your hedge. Completeness is a representation theorem."},

{id:"c13",cat:"stochcalc",type:"concept",diff:2,title:"Correlated Brownians & Itô product",
body:"Correlation: \\( d\\langle B^1, B^2\\rangle_t = \\rho\\,dt \\); construct \\( B^2 = \\rho B^1 + \\sqrt{1-\\rho^2}\\,W \\).\nProduct rule with a twist: \\( d(XY) = X\\,dY + Y\\,dX + d\\langle X, Y\\rangle \\) — the covariation term is where naive calculus loses money."},

{id:"c14",cat:"stochcalc",type:"concept",diff:3,title:"Vol as a clock",
body:"\\( \\big\\langle \\int \\sigma\\,dB \\big\\rangle_t = \\int_0^t \\sigma_s^2\\,ds \\), and (Dambis–Dubins–Schwarz) every continuous local martingale is a **time-changed Brownian motion**.\nVolatility is the speed of the clock: high-vol regimes are BM played fast-forward. Useful intuition for realized variance and vol targeting."},

{id:"c15",cat:"stochcalc",type:"question",diff:3,title:"Laplace transform of a hitting time",
body:"\\( \\tau_a \\) = first time BM hits \\( a > 0 \\). Compute \\( \\mathbb{E}[e^{-\\lambda\\tau_a}] \\).",
answer:"\\[ \\mathbb{E}[e^{-\\lambda\\tau_a}] = e^{-a\\sqrt{2\\lambda}}. \\]\nOptional stopping on \\( \\exp(\\sqrt{2\\lambda}\\,B_t - \\lambda t) \\), stopped at \\( \\tau_a \\).\nSanity: \\( \\lambda \\to 0 \\) gives 1 (hits a.s.); the non-analytic \\( \\sqrt{\\lambda} \\) betrays \\( \\mathbb{E}[\\tau_a] = \\infty \\)."},

{id:"c16",cat:"stochcalc",type:"concept",diff:2,title:"SDE well-posedness 101",
body:"Lipschitz + linear-growth coefficients ⇒ strong existence & pathwise uniqueness.\nWhy you should care: CIR \\( dX = \\kappa(\\theta - X)dt + \\sigma\\sqrt{X}\\,dB \\) fails Lipschitz at 0 — it still works, and stays positive iff **Feller**: \\( 2\\kappa\\theta \\ge \\sigma^2 \\). A favorite rates-desk checkpoint."},

{id:"c17",cat:"stochcalc",type:"question",diff:3,title:"Law of the running max",
body:"\\( M_t = \\max_{s\\le t} B_s \\). Distribution? Expectation?",
answer:"\\( M_t \\overset{d}{=} |B_t| \\) (reflection principle), so\n\\[ \\mathbb{E}[M_t] = \\sqrt{\\tfrac{2t}{\\pi}} \\approx 0.8\\sqrt{t}. \\]\nDrawdown intuition for free: the max of a driftless diffusion grows like \\( \\sqrt{t} \\), not \\( t \\)."},

{id:"c18",cat:"stochcalc",type:"concept",diff:2,title:"Why Itô needs C²",
body:"Tanaka: \\( |B_t| = \\int_0^t \\operatorname{sgn}(B_s)\\,dB_s + L_t \\), where \\( L_t \\) is **local time** at 0 — the price of the kink in \\( |x| \\).\nMoral for options: non-smooth payoffs (digitals, barriers) generate singular hedging terms; gamma blows up exactly where the payoff bends."},

/* ------------------------------ BRAINTEASERS ----------------------------- */
{id:"b01",cat:"brainteaser",type:"question",diff:2,title:"100 prisoners, 100 boxes",
body:"Each prisoner may open 50 of 100 boxes to find their own number. No communication after the start. All must succeed or all die. Random guessing gives \\( 2^{-100} \\). Do much better.",
answer:"**Follow the cycle**: open your own number, then the number found inside, and so on.\nEveryone succeeds iff the random permutation has no cycle longer than 50 — probability \\( 1 - \\sum_{k=51}^{100}\\tfrac1k \\approx 31\\% \\) (→ \\( 1 - \\ln 2 \\)).\nThe strategy correlates successes instead of fighting them independently."},

{id:"b02",cat:"brainteaser",type:"question",diff:2,title:"The light bulb protocol",
body:"100 prisoners, called in one at a time in random order, share one light bulb (initially off). Someone must eventually declare, with certainty, that all 100 have visited. Design the protocol.",
answer:"Elect a **counter**. Only the counter turns the bulb *off*, adding 1 each time; every other prisoner turns it *on* exactly once in their life (if they find it off and have never lit it).\nCounter reaches 99 → declare. Expected time ≈ **28 years** — correctness is bought with patience."},

{id:"b03",cat:"brainteaser",type:"question",diff:3,title:"Blue eyes",
body:"100 blue-eyed islanders; anyone who *knows* their own eye color leaves that night. No mirrors, no talking about eyes. A visitor announces publicly: “At least one of you has blue eyes.” Everyone already sees 99 blue-eyed people. What changes?",
answer:"Nothing for 99 nights — then **all 100 leave on night 100**.\nThe announcement creates *common knowledge* (I know that you know that I know…), which no amount of private observation provided. Induction: with n blue-eyed islanders, all leave on night n."},

{id:"b04",cat:"brainteaser",type:"question",diff:2,title:"Two eggs, 100 floors",
body:"Find the highest safe floor of a 100-floor building with two identical eggs, minimizing worst-case drops.",
answer:"**14.**\nEqualize worst cases with shrinking steps: drop at 14, 27, 39, 50, … (steps 14, 13, 12, …). Need \\( k(k+1)/2 \\ge 100 \\Rightarrow k = 14 \\).\nGeneral shape: with e eggs, worst case grows like \\( n^{1/e} \\)."},

{id:"b05",cat:"brainteaser",type:"question",diff:2,title:"25 horses, 5 lanes",
body:"25 horses, race 5 at a time, no stopwatch. Minimum races to find the top 3?",
answer:"**7.**\nFive heats, then a final of the five winners. That crowns #1 and eliminates whole tails: only 5 horses can still be #2 or #3 (runner-up of the final, the 2nd/3rd behind the champion, etc.). One last race among those 5."},

{id:"b06",cat:"brainteaser",type:"question",diff:1,title:"Two ropes, 45 minutes",
body:"Each rope burns in exactly 60 minutes, but unevenly. Measure 45 minutes.",
answer:"Light rope A at **both ends** and rope B at one end. A finishes at 30:00; at that instant light B's other end — its remaining 30 minutes halve to 15. Total: 45.\nBurning both ends = doubling the consumption rate, whatever the unevenness."},

{id:"b07",cat:"brainteaser",type:"question",diff:2,title:"8 balls, one heavier",
body:"8 visually identical balls, one slightly heavier, and a balance scale. Minimum weighings?",
answer:"**2.** Weigh 3 vs 3: the outcome (left / right / balance) locates the heavy ball in a group of ≤3; one more weighing of 1 vs 1 finishes.\nInformation-theoretic floor: each weighing is ternary, \\( 3^2 = 9 \\ge 8 \\). Famous sequel: 12 balls, direction unknown → 3 weighings."},

{id:"b08",cat:"brainteaser",type:"question",diff:1,title:"Bridge and torch",
body:"Four people cross at speeds 1, 2, 5, 10 min; the bridge holds two; the pair walks at the slower speed; one torch must accompany every crossing. Minimum total time?",
answer:"**17**, not 19.\n1&2 cross (2) → 1 returns (1) → 5&10 cross together (10) → 2 returns (2) → 1&2 cross (2).\nThe trick: ship the two slow walkers **together** so their costs overlap."},

{id:"b09",cat:"brainteaser",type:"question",diff:2,title:"Poisoned bottle",
body:"1000 wine bottles, exactly one poisoned; any taster who drinks it dies in exactly 24h; the banquet is in 24h. Minimum tasters to identify the bottle?",
answer:"**10.**\nNumber the bottles in binary; taster \\( k \\) sips every bottle whose \\( k \\)-th bit is 1. The pattern of deaths *is* the poisoned bottle's index. \\( 2^{10} = 1024 \\ge 1000 \\).\nOne shot, fully parallel — pure information encoding."},

{id:"b10",cat:"brainteaser",type:"question",diff:2,title:"Three mislabeled boxes",
body:"Boxes labeled Apples, Oranges, Mixed — every label is wrong. Minimum fruit draws to fix all labels?",
answer:"**One**, from the box labeled *Mixed*.\nIt cannot be mixed, so the fruit you draw names it. The other two then resolve by elimination (each must avoid its own label).\nUse the constraint “all labels wrong” as data, not as a nuisance."},

{id:"b11",cat:"brainteaser",type:"question",diff:1,title:"Three switches, one bulb",
body:"Three switches downstairs, one incandescent bulb upstairs, one trip allowed. Which switch is it?",
answer:"Turn switch 1 on for ten minutes, then off. Turn switch 2 on. Go up.\nLit → 2. Off and **warm** → 1. Off and cold → 3.\nThe bulb has two output channels: light and heat. Find the hidden second channel."},

{id:"b12",cat:"brainteaser",type:"question",diff:2,title:"The airplane seat",
body:"100 boarding passengers; the first lost his ticket and sits uniformly at random. Everyone else takes their own seat if free, otherwise a uniform random free seat. P(passenger 100 gets seat 100)?",
answer:"**1/2.**\nEvery displaced passenger's random choice either ends the chaos (seat 1) or dooms it (seat 100) — all other choices just pass the problem on. By symmetry the two terminal seats are equally likely at every random step."},

{id:"b13",cat:"brainteaser",type:"question",diff:2,title:"Pirate gold",
body:"5 perfectly rational pirates split 100 coins. The most senior proposes a split; everyone votes, the proposer included. At least half in favor → the split stands; otherwise he is thrown overboard and the next-most-senior proposes. Final allocation?",
answer:"**98 – 0 – 1 – 0 – 1** (senior to junior).\nBackward induction from 2 pirates (100–0), then buy the cheapest voters at each layer: pirates 3 and 5 get one coin each because their alternative is zero.\nRationality assumptions do heavy lifting — say so."},

{id:"b14",cat:"brainteaser",type:"question",diff:2,title:"Ants on a triangle",
body:"Three ants sit at the corners of a triangle; each simultaneously walks along a uniformly chosen edge. Probability of no collision?",
answer:"**1/4.**\nNo collision ⟺ all clockwise or all counterclockwise: \\( 2/2^3 \\).\nOn an n-gon with n ants: \\( 2/2^n \\)."},

{id:"b15",cat:"brainteaser",type:"question",diff:2,title:"Ants on a stick",
body:"n ants on a 1 m stick walk at 1 m/min in fixed directions, reversing on collision, falling off the ends. Longest possible time until the stick is empty?",
answer:"**1 minute.**\nA collision-with-reversal is indistinguishable from two ants *passing through* each other — relabel identities and every trajectory is a straight march.\nIdentity is a red herring; track the multiset of positions."},

{id:"b16",cat:"brainteaser",type:"question",diff:2,title:"Russian roulette, adjacent bullets",
body:"Two bullets in **adjacent** chambers of a six-shooter. Your opponent spun, fired at himself: click. Your turn, at yourself: spin again, or pull directly?",
answer:"**Pull directly**: P(safe) = 3/4, vs 4/6 ≈ 0.67 after a re-spin.\nGiven the click, the cylinder sits in one of 4 empty chambers; only 1 of those is followed by a bullet.\nConditioning on the geometry beats resetting to the prior."},

{id:"b17",cat:"brainteaser",type:"question",diff:1,title:"Trailing zeros of 100!",
body:"How many zeros end 100! ?",
answer:"**24.**\nZeros come from factors 10 = 2·5, and fives are the scarce ingredient: \\( \\lfloor 100/5 \\rfloor + \\lfloor 100/25 \\rfloor = 20 + 4 \\).\nLegendre's formula in miniature."},

{id:"b18",cat:"brainteaser",type:"question",diff:2,title:"Clock hands",
body:"After 12:00, when do the hour and minute hands first overlap again? How many overlaps in 12 hours?",
answer:"The minute hand gains on the hour hand at 360° − 30° = **330°/h**, so overlaps come every \\( \\tfrac{360}{330} = \\tfrac{12}{11} \\) h → first at **1:05:27**.\n**11 overlaps** per 12 hours, not 12 — the relative motion completes 11 laps."},

{id:"b19",cat:"brainteaser",type:"question",diff:2,title:"Fair from unfair",
body:"You have a biased coin with unknown \\( p \\in (0,1) \\). Produce a fair bit.",
answer:"**Von Neumann**: flip twice; HT → 0, TH → 1, HH/TT → discard and repeat.\nThe two kept outcomes both have probability \\( p(1-p) \\).\nExpected flips: \\( \\tfrac{1}{p(1-p)} \\) — the cost of ignorance about p."},

{id:"b20",cat:"brainteaser",type:"question",diff:2,title:"A die from coins",
body:"Simulate a fair six-sided die with fair coin flips.",
answer:"Three flips → 8 equally likely triples; map six of them to faces, **reject** the other two and repeat.\nExpected flips: \\( 3 \\times \\tfrac{8}{6} = 4 \\).\nRejection sampling — the honest way to fit a uniform into an awkward base."},

{id:"b21",cat:"brainteaser",type:"question",diff:2,title:"Two envelopes",
body:"One envelope holds twice the other. You hold one, unopened. “The other is worth \\( \\tfrac12(2X) + \\tfrac12(X/2) = 1.25X \\) — always switch!” Where is the flaw?",
answer:"The X in that formula denotes **two different amounts** in the two branches — conditioning is being abused.\nA uniform prior over all magnitudes does not exist; with any proper prior on the pair, \\( \\mathbb{E}[\\text{gain from switching}] = 0 \\) absent information about the observed amount."},

{id:"b22",cat:"brainteaser",type:"question",diff:2,title:"St. Petersburg",
body:"A game pays \\( 2^n \\) if the first head appears on flip \\( n \\). Expected payout is infinite — what would you actually pay, and why?",
answer:"A few pounds. Resolutions: **log utility** (Bernoulli's answer: value ≈ log-wealth gain), finite bankrolls capping the tail, or medians vs means.\nInterview point: expectation is not value when the distribution is absurdly skewed — the same reason Kelly, not EV, sizes bets."},

{id:"b23",cat:"brainteaser",type:"question",diff:2,title:"The jug puzzle",
body:"Exactly 4 L using a 3 L jug and a 5 L jug.",
answer:"Fill 5 → pour into 3 (leaves 2) → empty 3 → pour the 2 in → refill 5 → top up 3 (uses 1) → **4 L remain in the 5.**\nIt is a search on states \\( (a,b) \\); reachable volumes are multiples of \\( \\gcd(3,5)=1 \\)."},

{id:"b24",cat:"brainteaser",type:"question",diff:3,title:"Hats in a line",
body:"n prisoners in a line, each wearing a red or blue hat, each seeing only those in front. From the back, each guesses their own color aloud. Agree on a strategy first: how many can be guaranteed saved?",
answer:"**n − 1.**\nThe rearmost announces the **parity** of red hats they see (sacrificing themselves to chance). Everyone after maintains the running parity from the guesses heard and the hats seen, deducing their own color exactly.\nOne bit of shared code protects everyone downstream."},

{id:"b25",cat:"brainteaser",type:"question",diff:3,title:"Mossel's die",
body:"Roll a fair die until the first 6. **Given that every roll was even**, what is the expected number of rolls?",
answer:"**3/2 — not 3.**\nConditioning on “all even” massively favors *short* sequences (long ones almost surely contain an odd roll).\nCompute: \\( \\mathbb{P}(N=n, \\text{all even}) = (2/6)^{n-1}(1/6) \\); normalize and sum → \\( \\mathbb{E} = 3/2 \\). A legendary filter for autopilot answers."},

{id:"b26",cat:"brainteaser",type:"question",diff:1,title:"Two trains and a fly",
body:"Trains 100 km apart approach at 50 km/h each; a fly at 75 km/h shuttles between them until impact. Total distance flown?",
answer:"**75 km.**\nThe trains meet in 1 hour; the fly flies for that hour.\n(Von Neumann allegedly summed the geometric series instantly anyway. You may simply smile.)"},

/* ----------------------------- QUANT QUESTIONS --------------------------- */
{id:"q01",cat:"quant",type:"question",diff:1,title:"First head wins",
body:"Alice flips first, then Bob, alternating a fair coin; first head wins. P(Alice wins)?",
answer:"**2/3.**\nCondition on the first round: \\( p = \\tfrac12 + \\tfrac14 p \\Rightarrow p = \\tfrac23 \\).\nOr: Alice wins on flips 1, 3, 5, … → \\( \\tfrac12 + \\tfrac18 + \\tfrac1{32} + \\cdots \\). Going first is worth a lot when the game can end instantly."},

{id:"q02",cat:"quant",type:"question",diff:2,title:"Die with a re-roll",
body:"Roll a die; you may re-roll once and must keep the last result. Expected value with optimal play? And with two re-rolls?",
answer:"**4.25**, then **14/3 ≈ 4.67**.\nBackward induction: last roll is worth 3.5, so re-roll anything ≤ 3: \\( \\tfrac12(5) + \\tfrac12(3.5) = 4.25 \\). With two re-rolls, first keep only 5–6: \\( \\tfrac13(5.5) + \\tfrac23(4.25) = 14/3 \\).\nThe option to continue has value — this *is* American-option pricing."},

{id:"q03",cat:"quant",type:"question",diff:2,title:"Max of two dice",
body:"Roll two dice. \\( \\mathbb{E}[\\max] \\)? \\( \\mathbb{E}[\\min] \\)?",
answer:"\\( \\mathbb{E}[\\max] = \\tfrac{161}{36} \\approx 4.47 \\), and \\( \\mathbb{E}[\\min] = 7 - \\tfrac{161}{36} = \\tfrac{91}{36} \\approx 2.53 \\).\nRoute: \\( \\mathbb{P}(\\max \\le k) = (k/6)^2 \\), then the tail-sum formula. The linkage \\( \\min + \\max = X + Y \\) saves half the work."},

{id:"q04",cat:"quant",type:"question",diff:2,title:"The first ace",
body:"Cards dealt one at a time from a shuffled deck. Expected position of the first ace?",
answer:"\\( \\tfrac{53}{5} = 10.6 \\).\nThe 4 aces cut the other 48 cards into **5 exchangeable gaps**, each of mean 48/5 = 9.6; the first ace sits after one gap: 9.6 + 1.\nSymmetry over gaps beats any conditioning slog."},

{id:"q05",cat:"quant",type:"question",diff:2,title:"Back to zero",
body:"Fair ±1 walk: \\( \\mathbb{P}(S_{2n} = 0) \\)? What does it imply?",
answer:"\\( \\binom{2n}{n}4^{-n} \\approx \\tfrac{1}{\\sqrt{\\pi n}} \\) (Stirling).\nDecays too slowly to sum: \\( \\sum_n \\mathbb{P}(S_{2n}=0) = \\infty \\) → expected visits to 0 infinite → **recurrence** in 1D. The same estimate in d dimensions gives \\( n^{-d/2} \\), hence Pólya's theorem."},

{id:"q06",cat:"quant",type:"question",diff:2,title:"Bertrand's boxes",
body:"Three boxes: GG, GS, SS coins. Pick a box, draw a coin: it is gold. P(the other coin is gold)?",
answer:"**2/3**, not 1/2.\nCount *coins*, not boxes: three gold coins were equally likely to be drawn, and two of them live in the GG box.\nSame skeleton as Monty Hall: condition on the evidence's mechanism, not the label."},

{id:"q07",cat:"quant",type:"question",diff:2,title:"All in a semicircle",
body:"Three uniform points on a circle. Probability they all lie in some semicircle? And for n points?",
answer:"**3/4**; in general \\( \\dfrac{n}{2^{n-1}} \\).\nExactly one point can be the “clockwise-most” of a covering semicircle: for each point, P(other n−1 all within the semicircle clockwise from it) \\( = 2^{-(n-1)} \\); the events are disjoint. Elegant union without inclusion–exclusion."},

{id:"q08",cat:"quant",type:"question",diff:3,title:"Acute triangle",
body:"Three uniform points on a circle form a triangle. P(acute)?",
answer:"**1/4.**\nAn inscribed triangle is right iff a side is a diameter (prob 0) and **obtuse iff all three points fit in a semicircle** — probability 3/4 by the previous card. Acute is the complement.\nTwo classics, one bridge."},

{id:"q09",cat:"quant",type:"question",diff:2,title:"Stick pieces, expected sizes",
body:"Two uniform cuts on a unit stick. Expected length of the shortest, middle, longest piece?",
answer:"\\( \\tfrac19, \\tfrac{5}{18}, \\tfrac{11}{18} \\).\nThe three spacings are exchangeable with mean 1/3; order statistics of spacings give \\( \\mathbb{E}[L_{(k)}] = \\tfrac13\\big(\\tfrac13 + \\cdots\\big) \\)… cleanest via the known formula \\( \\mathbb{E}[L_{(k)}] = \\tfrac{1}{n+1}\\sum_{j=0}^{k-1}\\tfrac{1}{n+1-j} \\) with n = 2 cuts. Memorize the triple; derive on demand."},

{id:"q10",cat:"quant",type:"question",diff:2,title:"The meeting problem",
body:"Two people each arrive uniformly within an hour and wait 15 minutes. P(they meet)?",
answer:"\\( \\tfrac{7}{16} \\).\nUnit square, meet iff \\( |x - y| \\le \\tfrac14 \\): area \\( 1 - (\\tfrac34)^2 \\).\nGeometric probability = draw the region, compute the area. Always draw."},

{id:"q11",cat:"quant",type:"question",diff:1,title:"Uniform quickies",
body:"X, Y iid U(0,1). Compute \\( \\mathbb{P}(X > 2Y) \\) and \\( \\mathbb{E}|X - Y| \\).",
answer:"\\( \\mathbb{P}(X>2Y) = \\tfrac14 \\) (triangle under \\( y < x/2 \\)); \\( \\mathbb{E}|X-Y| = \\tfrac13 \\) (integrate, or: max − min = range of 2 uniforms = \\( \\tfrac23 - \\tfrac13 \\)).\nThe unit square is your Bloomberg terminal here."},

{id:"q12",cat:"quant",type:"question",diff:2,title:"Normal vs normal",
body:"X, Y iid N(0,1). Compute \\( \\mathbb{P}(X > Y + 1) \\).",
answer:"\\( X - Y \\sim \\mathcal{N}(0, 2) \\), so \\( \\mathbb{P} = \\Phi(-1/\\sqrt{2}) \\approx 0.24 \\).\nReflex: differences of independent normals are normal; standardize and read the table. Also \\( \\mathbb{P}(X>Y) = \\tfrac12 \\) by symmetry — no computation."},

{id:"q13",cat:"quant",type:"question",diff:3,title:"Pólya's urn",
body:"Urn starts with 1 red, 1 blue. Draw uniformly, return it with one extra of the same color, repeat. What does the red fraction do?",
answer:"It is a **martingale**, and after n additions the red count is **uniform** on {1, …, n+1}: \\( \\mathbb{P}(k \\text{ red}) = \\tfrac{1}{n+1} \\).\nThe fraction converges a.s. to a U(0,1) limit — reinforcement locks in early luck. A beautiful model of path dependence (and of why backtests overfit winners)."},

{id:"q14",cat:"quant",type:"question",diff:2,title:"Kelly criterion",
body:"Repeated even-money bets, win prob \\( p > \\tfrac12 \\). What fraction of bankroll per bet, and why?",
answer:"\\( f^* = 2p - 1 = p - q \\); with odds b: \\( f^* = \\dfrac{bp - q}{b} \\).\nMaximizes \\( \\mathbb{E}[\\log W] \\) — hence long-run growth rate — and full Kelly is violently volatile: half-Kelly gives ~3/4 of the growth at half the variance. Overbetting past 2× Kelly has **negative** growth: ruin by enthusiasm."},

{id:"q15",cat:"quant",type:"question",diff:2,title:"Secretary problem",
body:"n candidates in random order; accept or reject irrevocably on the spot; only ranks observable. Maximize P(hiring the best).",
answer:"**Skip the first \\( n/e \\), then take the first record.**\nSuccess probability → \\( 1/e \\approx 37\\% \\).\nThe explore-then-exploit archetype: the observation phase buys a benchmark. Same 1/e shows up all over optimal stopping."},

{id:"q16",cat:"quant",type:"question",diff:2,title:"Simulating a normal",
body:"You have U(0,1) draws. Produce N(0,1) samples.",
answer:"**Box–Muller**: \\( Z = \\sqrt{-2\\ln U_1}\\,\\cos(2\\pi U_2) \\) (and the sine gives an independent second one).\nAlternatives: inverse CDF \\( \\Phi^{-1}(U) \\) (the general-purpose method), rejection sampling for exotic shapes. Follow-up they love: correlated normals → Cholesky."},

{id:"q17",cat:"quant",type:"question",diff:1,title:"Monte Carlo π",
body:"Estimate π with random darts. Method and convergence rate?",
answer:"Throw uniforms on the unit square; \\( \\mathbb{P}(\\text{inside quarter circle}) = \\pi/4 \\); estimate \\( \\hat\\pi = 4\\cdot\\text{hits}/n \\).\nError \\( O(1/\\sqrt{n}) \\) — the universal MC rate from the CLT: **100× the samples per extra digit**. Variance reduction (antithetics, control variates) is the whole industry."},

{id:"q18",cat:"quant",type:"question",diff:3,title:"The amoeba",
body:"An amoeba dies, stays single, splits in two, or splits in three — each with probability 1/4, every generation, independently. Probability the line goes extinct?",
answer:"\\( q = \\sqrt{2} - 1 \\approx 0.414 \\).\nExtinction solves \\( q = \\tfrac14(1 + q + q^2 + q^3) \\) → \\( (q-1)(q^2+2q-1) = 0 \\) → smallest root in [0,1].\nBranching processes: extinction prob = smallest fixed point of the offspring pgf."},

{id:"q19",cat:"quant",type:"question",diff:2,title:"Red card bet",
body:"A shuffled deck is dealt one card at a time. At any moment you say “stop”: if the **next** card is red you win. Best strategy?",
answer:"**No strategy beats 1/2** — including waiting for red-heavy moments.\nThe fraction of reds remaining is a martingale; stopping it cannot change its expectation (optional stopping). Elegant equivalent: your called card and the *last* card of the deck are exchangeable.\nMoral: no free timing edge inside a fair, fully-shuffled world."},

{id:"q20",cat:"quant",type:"question",diff:2,title:"Sum of two uniforms",
body:"X, Y iid U(0,1). Density of X + Y? Of the average of n uniforms, roughly?",
answer:"A **triangle** on [0,2] peaking at 1 (convolution = overlap length).\nThe sum of n is Irwin–Hall: n−1 times differentiable, hugging a normal fast — the CLT is visibly at work by n = 3. Quick mental picture for “how non-normal is a small-sample mean?”"},

{id:"q21",cat:"quant",type:"question",diff:2,title:"Three heads in a row",
body:"Expected fair-coin flips to see n consecutive heads? Value for n = 3?",
answer:"\\( \\mathbb{E}_n = 2^{n+1} - 2 \\); for n = 3: **14**.\nRecursion \\( \\mathbb{E}_n = \\mathbb{E}_{n-1} + 1 + \\tfrac12\\mathbb{E}_n \\) (after reaching n−1 heads, a tail sends you home).\nExponential in n — long streaks are astronomically patient."},

{id:"q22",cat:"quant",type:"question",diff:2,title:"Birthday attack scale",
body:"Random 64-bit hashes: how many before a collision becomes likely?",
answer:"\\( \\approx \\sqrt{2^{64}} = 2^{32} \\approx 4\\times10^9 \\).\nBirthday scaling: collisions at \\( \\sqrt{N} \\), from \\( \\binom{n}{2}/N \\approx 1 \\).\nThe same √ controls hash-table load, deduplication risk, and why 128-bit IDs feel safe: \\( 2^{64} \\) draws needed."},

{id:"q23",cat:"quant",type:"question",diff:3,title:"German tank problem",
body:"You observe k serial numbers with maximum m, sampled without replacement from 1…N. Best estimate of N?",
answer:"\\[ \\hat N = m + \\frac{m}{k} - 1 \\]\n— the max plus the average observed gap. It is the minimum-variance unbiased estimator; the raw max is biased low.\nWW2 statisticians estimated ~256 tanks/month; intelligence said 1400; records showed 255."},

{id:"q24",cat:"quant",type:"question",diff:2,title:"Local maxima of a permutation",
body:"Random permutation of n distinct numbers. Expected number of local maxima (larger than both neighbors; ends count with one neighbor)?",
answer:"\\( \\dfrac{n-2}{3} + 1 \\approx \\dfrac{n+1}{3} \\).\nInterior position: largest of 3 with prob 1/3; each end: largest of 2 with prob 1/2. Indicators + linearity — dependence between neighbors never matters for the mean."},

{id:"q25",cat:"quant",type:"question",diff:3,title:"The acquirer's curse",
body:"A company is worth U(0,100) to its owner — the owner knows, you do not. It is worth 1.5× that to you. You make one take-it-or-leave-it bid b; the owner accepts iff b ≥ value. Optimal bid?",
answer:"**Bid 0.**\nConditional on acceptance, the value is U(0, b): worth \\( 1.5 \\times b/2 = 0.75b < b \\). Every positive bid loses money *on average precisely when it succeeds*.\nAdverse selection / winner's curse — the reason market makers fear informed flow."},

{id:"q26",cat:"quant",type:"question",diff:2,title:"Spaghetti loops",
body:"100 strands in a bowl (200 free ends). Repeatedly tie two uniformly chosen free ends together until none remain. Expected number of loops?",
answer:"\\( \\sum_{k=1}^{100} \\dfrac{1}{2k-1} \\approx 3.28 \\).\nWith k strands left (2k ends), the chosen pair closes a loop with prob \\( \\tfrac{1}{2k-1} \\) (2k−1 partners for the first end, one closes).\nIndicators + linearity, again. Answers are often ≈ \\( \\tfrac12\\ln n \\)-small — intuition says way more."},

{id:"q27",cat:"quant",type:"question",diff:2,title:"Strictly greater",
body:"Roll a die twice. P(second roll strictly greater than the first)?",
answer:"\\( \\tfrac{5}{12} \\).\nSymmetry: \\( \\mathbb{P}(>) = \\mathbb{P}(<) = \\tfrac{1 - \\mathbb{P}(=)}{2} = \\tfrac{1 - 1/6}{2} \\).\nThe pattern “split the complement of ties” resolves a whole family of comparison questions — including with different dice."},

{id:"q28",cat:"quant",type:"question",diff:3,title:"Penney's game",
body:"Your opponent picks any triple of coin outcomes (say HHH); you pick another; a fair coin is flipped until one triple appears. Why do you want to go second?",
answer:"For any triple XYZ, the pattern **(¬Y)XY** beats it — e.g. THH beats HHH with odds **7:1**, HTH is beaten by HHT 2:1.\nPattern-beating is **nontransitive** (rock–paper–scissors on coin flips): there is no best triple, only best responses. Conway's leading-numbers algorithm computes all the odds."},

/* ---------------------------- FINANCE & OPTIONS -------------------------- */
{id:"f01",cat:"finance",type:"concept",diff:1,title:"No-arbitrage",
body:"Two positions with identical payoffs in every state must have the same price (law of one price); no free lunches survive.\nEvery pricing formula you will ever quote is this sentence, compiled. When a formula feels mysterious, find the replicating portfolio behind it."},

{id:"f02",cat:"finance",type:"concept",diff:1,title:"Put–call parity",
body:"European, no dividends:\n\\[ C - P = S - Ke^{-rT}. \\]\nModel-free: long call + short put **is** a forward. Consequences: same implied vol for C and P at a strike; violations are pure arbitrage; and you can read the market's forward from option prices."},

{id:"f03",cat:"finance",type:"concept",diff:2,title:"Risk-neutral pricing",
body:"Price = \\( \\mathbb{E}^{\\mathbb{Q}}[e^{-rT}\\,\\text{payoff}] \\), where under \\( \\mathbb{Q} \\) discounted assets are martingales and \\( dS = rS\\,dt + \\sigma S\\,dW^{\\mathbb{Q}} \\).\nThe real-world drift \\( \\mu \\) **never enters** an option price — hedging removes directional risk, so only \\( \\sigma \\) is paid for. Q is a pricing device, not a forecast."},

{id:"f04",cat:"finance",type:"concept",diff:2,title:"Black–Scholes",
body:"\\[ C = S\\Phi(d_1) - Ke^{-rT}\\Phi(d_2), \\quad d_{1} = \\frac{\\ln(S/K) + (r + \\sigma^2/2)T}{\\sigma\\sqrt{T}}, \\quad d_2 = d_1 - \\sigma\\sqrt{T}. \\]\nAssumptions worth reciting: lognormal S, constant σ and r, continuous frictionless hedging, no jumps. Every trading desk story starts where one of these breaks."},

{id:"f05",cat:"finance",type:"concept",diff:2,title:"Reading d₁ and d₂",
body:"\\( \\Phi(d_2) = \\mathbb{Q}(S_T > K) \\): risk-neutral probability of exercise. So the **digital call** = \\( e^{-rT}\\Phi(d_2) \\).\n\\( \\Phi(d_1) \\) = the call's delta = exercise probability under the *stock-numéraire* measure. Two probabilities, two measures — knowing which is which is a classic screen question."},

{id:"f06",cat:"finance",type:"concept",diff:1,title:"The Greeks",
body:"\\( \\Delta = \\partial_S C \\) (call ∈ (0,1), put ∈ (−1,0)); \\( \\Gamma = \\partial^2_S C > 0 \\), peaks ATM and sharpens near expiry; vega \\( = \\partial_\\sigma C > 0 \\), peaks ATM, grows with \\( \\sqrt{T} \\); \\( \\Theta \\) usually < 0 long options; \\( \\rho = \\partial_r C \\).\nLong options = long gamma & vega, paying theta. Say the signs before the formulas."},

{id:"f07",cat:"finance",type:"question",diff:2,title:"ATM mental math",
body:"Fast approximations: ATM call price? ATM delta? ATM straddle?",
answer:"\\( C_{ATM} \\approx 0.4\\,S\\,\\sigma\\sqrt{T} \\) (exactly \\( S\\sigma\\sqrt{T/2\\pi} \\), r = 0); straddle ≈ \\( 0.8\\,S\\sigma\\sqrt{T} \\); delta ≈ 0.5 plus a small drift/skew nudge (\\( \\Phi(\\tfrac12\\sigma\\sqrt{T}) \\)).\nExample: S = 100, σ = 20%, T = 1: call ≈ 8. Traders live on this line."},

{id:"f08",cat:"finance",type:"concept",diff:2,title:"Gamma–theta trade-off",
body:"For a delta-hedged position (r ≈ 0), the BS PDE collapses to\n\\[ \\Theta \\approx -\\tfrac12\\sigma^2 S^2 \\Gamma. \\]\nLong gamma: you buy convexity and **bleed theta** — profit if the market moves more than implied. Short gamma: you collect carry and pray for calm. There is no third option."},

{id:"f09",cat:"finance",type:"concept",diff:3,title:"Hedging P&L",
body:"Delta-hedged option, realized vol \\( \\sigma_r \\), implied \\( \\sigma_i \\):\n\\[ \\text{P\\&L} \\approx \\int_0^T \\tfrac12\\,\\Gamma_t S_t^2\\,(\\sigma_r^2 - \\sigma_i^2)\\,dt. \\]\nYou are trading realized vs implied variance, **path-weighted by gamma**: where the spot spends time matters. This one formula explains most vol-desk conversations."},

{id:"f10",cat:"finance",type:"concept",diff:2,title:"The smile & skew",
body:"BS predicts one flat σ across strikes; markets disagree. Equities: **downward skew** — OTM puts trade rich (crash fear, leverage effect, demand for protection). FX: smiles. Rates: its own zoo.\nImplied vol is a *quoting convention* — the price of an option in vol units — not a physical forecast."},

{id:"f11",cat:"finance",type:"concept",diff:3,title:"Breeden–Litzenberger",
body:"Option prices encode the entire risk-neutral density:\n\\[ q(K) = e^{rT}\\,\\frac{\\partial^2 C}{\\partial K^2}, \\qquad \\mathbb{Q}(S_T > K) = -e^{rT}\\frac{\\partial C}{\\partial K}. \\]\nButterflies read the density; tight call spreads read the CDF. The vol surface *is* a probability distribution wearing market clothes."},

{id:"f12",cat:"finance",type:"concept",diff:2,title:"Forwards by carry",
body:"\\[ F = S\\,e^{(r - q)T} \\]\nby cash-and-carry replication — buy spot, borrow, collect yield q. **No expectations involved**: a forward is a financing trade, not a forecast.\nFutures ≈ forwards, drifting apart only through margining when rates correlate with the underlying."},

{id:"f13",cat:"finance",type:"question",diff:2,title:"Early exercise",
body:"Would you ever exercise an American **call** early on a non-dividend stock? An American **put**?",
answer:"Call: **never** — \\( C \\ge S - Ke^{-rT} > S - K \\): selling beats exercising; you would forfeit time value and prepay the strike.\nPut: **yes**, deep ITM — collecting K early earns interest and the upside left in S is tiny. Dividends resurrect early call exercise just before ex-dates."},

{id:"f14",cat:"finance",type:"concept",diff:2,title:"Binomial pricing",
body:"One step, factors u > d, rate r:\n\\[ q = \\frac{e^{r\\Delta t} - d}{u - d}, \\quad \\text{price} = e^{-r\\Delta t}\\,[qV_u + (1-q)V_d]. \\]\nThe hedge: \\( \\Delta = \\frac{V_u - V_d}{S(u-d)} \\) shares + cash replicates the payoff — q is what makes replication balance, not a belief. CRR (\\( u = e^{\\sigma\\sqrt{\\Delta t}} \\)) converges to Black–Scholes."},

{id:"f15",cat:"finance",type:"concept",diff:2,title:"Payoff sketching",
body:"Straddle: long vol, direction-agnostic. Strangle: cheaper, needs a bigger move. Call spread: capped directional bet. **Butterfly**: pays if \\( S_T \\) lands near the middle strike — its price is (essentially) the risk-neutral density there. Risk reversal: sell the fear, buy the greed — a skew position.\nDraw the payoff before pricing anything; combos are just piecewise-linear Lego."},

{id:"f16",cat:"finance",type:"concept",diff:3,title:"Variance swaps",
body:"Pays \\( \\sigma^2_{\\text{realized}} - K_{\\text{var}} \\): pure variance, no delta, no gamma path-dependence.\nReplication: a **log contract** = static strip of OTM options weighted \\( 1/K^2 \\), delta-hedged. VIX² is literally the 30-day version of this strip. Why 1/K²: equal vega per strike."},

{id:"f17",cat:"finance",type:"concept",diff:2,title:"Duration & convexity",
body:"\\[ \\frac{\\Delta P}{P} \\approx -D\\,\\Delta y + \\tfrac12 C (\\Delta y)^2. \\]\nDuration = value-weighted average time of cash flows; zero-coupon bond: D = maturity. Prices and yields move inversely; convexity means you lose less on rises than you gain on falls — long convexity loves turbulence, and you pay for it in yield."},

{id:"f18",cat:"finance",type:"concept",diff:2,title:"Curve mechanics",
body:"Forward rate from spots (annual comp):\n\\[ (1+s_2)^{t_2} = (1+s_1)^{t_1}\\,(1+f_{1,2})^{t_2 - t_1}. \\]\nBootstrapping builds zeros from coupon bonds maturity by maturity. Forwards ≠ forecasts: term premia live in the gap — the curve is a pricing object first, a prophecy second."},

{id:"f19",cat:"finance",type:"concept",diff:2,title:"Sharpe, honestly",
body:"\\( \\text{Sharpe} = \\dfrac{\\mathbb{E}[R] - r_f}{\\sigma} \\), annualized from daily by \\( \\times\\sqrt{252} \\).\nCaveats interviewers fish for: autocorrelation inflates it (√-scaling assumes independence); non-normality hides tail risk (short-vol strategies look great until they do not); use IR vs a benchmark for active books."},

{id:"f20",cat:"finance",type:"concept",diff:2,title:"CAPM in one line",
body:"\\[ \\mathbb{E}[R_i] - r_f = \\beta_i\\,(\\mathbb{E}[R_m] - r_f), \\qquad \\beta_i = \\frac{\\operatorname{Cov}(R_i, R_m)}{\\operatorname{Var}(R_m)}. \\]\nβ is the regression slope \\( \\rho\\,\\sigma_i/\\sigma_m \\): only **systematic** risk earns premium; idiosyncratic risk is diversified away, hence unpaid. The grammar of factor models starts here."},

{id:"f21",cat:"finance",type:"question",diff:2,title:"Why √T?",
body:"Daily vol is 1%. Annual vol? Why the square root?",
answer:"≈ **16%**: \\( \\sqrt{252} \\approx 15.9 \\).\nIndependent increments ⇒ **variances** add: \\( \\sigma^2_{\\text{ann}} = 252\\,\\sigma^2_{\\text{day}} \\). Ranges diffuse like \\( \\sqrt{T} \\), not T.\nInstant sanity tool: 2% daily ↔ 32% annual; a “5-sigma daily move” claim can be audited in your head."},

{id:"f22",cat:"finance",type:"question",diff:3,title:"Digital via call spread",
body:"Price a cash-or-nothing digital call struck at K using vanillas.",
answer:"\\[ D(K) = \\lim_{\\varepsilon\\to0}\\frac{C(K) - C(K+\\varepsilon)}{\\varepsilon} = -\\frac{\\partial C}{\\partial K} = e^{-rT}\\Phi(d_2) \\ (\\text{flat vol}). \\]\nDesks quote a tight call spread — and with skew, \\( \\sigma(K) \\) varies, adding a vega·skew correction to the naive \\( \\Phi(d_2) \\). Knowing that correction exists is the senior answer."},

{id:"f23",cat:"finance",type:"concept",diff:3,title:"Delta hedging in practice",
body:"Discrete hedging leaves replication error with variance \\( \\propto \\Gamma^2 S^4 \\sigma^4\\,\\Delta t \\) per step — more frequent hedging shrinks it but pays spreads.\nPractice: hedge on **delta bands** or time grids; error is centered (a cost, not a bias) and largest where gamma is — ATM near expiry. Transaction costs turn perfect replication into an engineering trade-off."},

{id:"f24",cat:"finance",type:"question",diff:2,title:"Expected stock under Q",
body:"What is \\( \\mathbb{E}^{\\mathbb{Q}}[S_T] \\)? And under the real world \\( \\mathbb{P} \\)?",
answer:"\\( \\mathbb{E}^{\\mathbb{Q}}[S_T] = S_0 e^{rT} \\) — the forward. Under Q **every** traded asset drifts at r; that is the definition of Q, not a coincidence.\nUnder \\( \\mathbb{P} \\), add the equity premium: \\( S_0e^{\\mu T} \\). Options are priced with the first and the difference is the market price of risk — a two-line answer that signals you get the framework."},

/* ---------------------------- ALGORITHMS & CS ---------------------------- */
{id:"a01",cat:"algo",type:"concept",diff:1,title:"Big-O survival kit",
body:"Drop constants and lower-order terms. Signatures: \\( \\log n \\) = halving; \\( n\\log n \\) = sorting; \\( n^2 \\) = all pairs; \\( 2^n \\) = all subsets; \\( n! \\) = all orderings.\nThree different beasts: worst case ≠ average case ≠ **amortized** (total over a sequence ÷ operations). Name which one you are claiming."},

{id:"a02",cat:"algo",type:"concept",diff:1,title:"Binary search, exactly",
body:"Maintain an invariant on a half-open range [lo, hi); `mid = lo + (hi-lo)/2`; shrink whichever half keeps the invariant. O(log n), and off-by-one bugs die with the invariant discipline.\nBigger idea: it works on **any monotone predicate** — including “binary search the answer” on capacity/feasibility problems."},

{id:"a03",cat:"algo",type:"concept",diff:1,title:"Sorting facts",
body:"Comparison sorts cannot beat \\( \\Omega(n\\log n) \\) (decision-tree argument, \\( \\log_2 n! \\)).\nQuicksort: expected \\( n\\log n \\), worst \\( n^2 \\), in-place, cache-friendly. Mergesort: guaranteed \\( n\\log n \\), **stable**, needs memory. Heapsort: guaranteed, in-place, unloved.\nSmall integer keys? Counting/radix sort break the bound: O(n + k)."},

{id:"a04",cat:"algo",type:"concept",diff:2,title:"Quickselect & top-k",
body:"k-th smallest: partition like quicksort, recurse **one** side → expected O(n). (Median-of-medians: worst-case linear, theoretical.)\nStreams / top-k: keep a heap of size k → O(n log k), O(k) memory. Interview reflex: “do we need full sorting, or just the k-th?”"},

{id:"a05",cat:"algo",type:"concept",diff:1,title:"Hash tables",
body:"Expected O(1) insert/lookup/delete; worst case O(n) under collisions — resize by doubling to keep the load factor bounded.\nThe universal first move for “can we do better?”: trade memory for time — seen-sets, frequency maps, two-sum in one pass."},

{id:"a06",cat:"algo",type:"concept",diff:2,title:"Heaps",
body:"Complete binary tree in an array; push/pop \\( O(\\log n) \\), peek O(1), and **build-heap is O(n)** — a favorite gotcha.\nUse cases: top-k, k-way merge, Dijkstra, running median with two heaps (max-heap of the low half, min-heap of the high half)."},

{id:"a07",cat:"algo",type:"concept",diff:2,title:"Two pointers & sliding window",
body:"When the constraint is monotone (sums grow with more elements, sorted arrays), move two indices so each element enters and leaves once → **O(n)**.\nCovers: pair sums in sorted arrays, longest substring with ≤ k distinct chars, min window containing a target, container-with-most-water."},

{id:"a08",cat:"algo",type:"concept",diff:1,title:"Prefix sums",
body:"\\( S_i = a_0 + \\cdots + a_{i-1} \\): any range sum in O(1) after O(n) prep; 2-D version for submatrices.\nWith a hashmap of seen prefix values: count subarrays summing to k in one pass. XOR-prefixes pull the same trick for bitwise problems."},

{id:"a09",cat:"algo",type:"concept",diff:2,title:"DP, the checklist",
body:"1. **State** — the minimal description that makes the future independent of the past (a Markov property!).\n2. **Transition** and base cases.\n3. Memoize top-down or tabulate bottom-up.\nComplexity = #states × transition cost. If the naive recursion tree repeats subproblems, DP is the answer."},

{id:"a10",cat:"algo",type:"concept",diff:2,title:"DP classics",
body:"Knapsack O(nW); edit distance O(nm); coin change; longest common subsequence.\n**LIS in O(n log n)**: patience piles — keep the array of smallest tail per length, binary-insert each element. Knowing why the tails array is sorted is the real question."},

{id:"a11",cat:"algo",type:"question",diff:1,title:"Kadane",
body:"Maximum subarray sum in O(n)?",
answer:"`cur = max(x, cur + x); best = max(best, cur)`.\nA prefix with negative running sum is a liability — drop it and restart. DP with a one-variable state; extends to max-product (track min too) and circular arrays (total − min subarray)."},

{id:"a12",cat:"algo",type:"concept",diff:2,title:"BFS vs DFS",
body:"Both O(V + E) with a visited set — *say* the visited set in interviews.\nBFS: layer by layer → **shortest paths in unweighted graphs**, bipartite check. DFS: cycle detection, topological order, connected components, backtracking. Grids are graphs; states are nodes; puzzles are searches."},

{id:"a13",cat:"algo",type:"concept",diff:2,title:"Shortest paths",
body:"Non-negative weights: **Dijkstra** with a heap, \\( O((V+E)\\log V) \\) — greedy is safe because settled distances cannot improve.\nNegative edges: Bellman–Ford O(VE) (also detects negative cycles). DAG: relax in topological order, O(V+E). Matching the algorithm to the graph's guarantees is the tested skill."},

{id:"a14",cat:"algo",type:"concept",diff:2,title:"Union–Find",
body:"Disjoint sets with `find` (path compression) + `union` (by rank): amortized inverse-Ackermann ≈ O(1).\nConnectivity queries, Kruskal's MST, friend circles, percolation. If the problem says “merge groups and ask who is together”, this is it."},

{id:"a15",cat:"algo",type:"question",diff:2,title:"Reservoir sampling",
body:"Uniformly sample k items from a stream of unknown length, O(k) memory.",
answer:"Keep the first k. Item \\( i > k \\): with probability \\( k/i \\), replace a uniformly chosen slot.\nInduction gives every item final probability \\( k/n \\). The k = 1 case (`replace with prob 1/i`) is a two-line interview classic — prove it, do not just recite it."},

{id:"a16",cat:"algo",type:"question",diff:2,title:"Fisher–Yates",
body:"Shuffle an array uniformly. And what is wrong with the naive swap?",
answer:"For i from n−1 down to 1: swap `a[i]` with `a[rand(0..i)]` — each of the n! orders has probability exactly 1/n!.\nThe naive `swap(a[i], a[rand(0..n-1)])` produces \\( n^n \\) equally likely executions, and \\( n^n \\) is not divisible by \\( n! \\): provably biased. Cute check: n = 3 gives 27 executions over 6 orders."},

{id:"a17",cat:"algo",type:"concept",diff:2,title:"Bit tricks",
body:"`n & (n-1)`: clears the lowest set bit — popcount loops, power-of-two test (`n & (n-1) == 0`).\n`x & -x`: isolates the lowest set bit (Fenwick trees).\nXOR: `a ^ a = 0`, order-free → find the element appearing once; swap without a temp; parity."},

{id:"a18",cat:"algo",type:"question",diff:2,title:"Floyd's cycle detection",
body:"Detect a cycle in a linked list with O(1) memory — and find where it starts.",
answer:"Tortoise & hare: slow ×1, fast ×2 — they meet inside any cycle.\nThen reset one pointer to the head; advancing both ×1, they meet **at the cycle entry** (the head-to-entry and meeting-point-to-entry distances are congruent mod cycle length).\nBonus use: find the duplicate in an array by treating values as pointers."},

{id:"a19",cat:"algo",type:"concept",diff:2,title:"Monotonic stack",
body:"Keep a stack of “still useful” candidates (e.g. decreasing values); each index is pushed and popped at most once → O(n).\nSolves: next greater element, largest rectangle in a histogram, stock spans, trapping rain water. The pattern to reach for when brute force compares each element to all later ones."},

{id:"a20",cat:"algo",type:"concept",diff:2,title:"Amortized doubling",
body:"Dynamic arrays double on overflow: n appends cost \\( n + n/2 + n/4 + \\cdots < 2n \\) copies → **O(1) amortized** per append.\nThe same geometric-series argument prices hash-table resizing and binary-counter increments. Amortized ≠ average: it is a worst-case total, smeared."},

{id:"a21",cat:"algo",type:"question",diff:3,title:"Josephus",
body:"n people in a circle, every 2nd eliminated until one remains. Who survives?",
answer:"Write \\( n = 2^m + l \\): the survivor is \\( J(n) = 2l + 1 \\).\nBit magic: rotate n's leading bit to the end (n = 41 = 101001₂ → 010011₂ = 19).\nDerivation: after one lap the problem halves with a shift — recurrences J(2k) = 2J(k) − 1, J(2k+1) = 2J(k) + 1."},

{id:"a22",cat:"algo",type:"concept",diff:2,title:"Fibonacci in O(log n)",
body:"\\[ \\begin{pmatrix}1&1\\\\1&0\\end{pmatrix}^{\\!n} = \\begin{pmatrix}F_{n+1}&F_n\\\\F_n&F_{n-1}\\end{pmatrix} \\]\nFast exponentiation by squaring → O(log n). The same trick accelerates any linear recurrence and n-step Markov transitions — matrix powers are compressed time."},

/* ---------------------------- STATISTICS & ML ---------------------------- */
{id:"t01",cat:"stats",type:"concept",diff:2,title:"MLE",
body:"Maximize \\( \\ell(\\theta) = \\sum \\log f(x_i;\\theta) \\). Consistent, invariant (MLE of g(θ) is g(θ̂)), and asymptotically efficient:\n\\[ \\sqrt{n}(\\hat\\theta - \\theta) \\Rightarrow \\mathcal{N}(0, I(\\theta)^{-1}). \\]\nBernoulli: \\( \\hat p = \\bar X \\). Gaussian: \\( \\hat\\mu = \\bar X \\), \\( \\hat\\sigma^2 = \\) the /n version (biased!)."},

{id:"t02",cat:"stats",type:"concept",diff:2,title:"Bias–variance",
body:"\\[ \\text{MSE} = \\text{bias}^2 + \\text{variance} \\ (+ \\ \\text{irreducible noise, for prediction}). \\]\nFlexible models: low bias, high variance; rigid ones: the reverse. Regularization deliberately **buys** variance reduction with a little bias — shrinkage is a purchase, not a sin."},

{id:"t03",cat:"stats",type:"question",diff:2,title:"Why n − 1?",
body:"Why does the sample variance divide by n − 1 rather than n?",
answer:"Residuals are measured around \\( \\bar X \\), which was itself fit to the data — they are systematically too small: \\( \\mathbb{E}\\big[\\sum(X_i - \\bar X)^2\\big] = (n-1)\\sigma^2 \\).\nOne degree of freedom spent on the mean. (The /n version is the MLE; biased ≠ useless.)"},

{id:"t04",cat:"stats",type:"concept",diff:3,title:"Cramér–Rao",
body:"Any unbiased estimator obeys\n\\[ \\operatorname{Var}(\\hat\\theta) \\ge \\frac{1}{n\\,I(\\theta)}, \\qquad I(\\theta) = -\\mathbb{E}\\big[\\partial^2_\\theta \\log f\\big]. \\]\nFisher information = curvature of the log-likelihood: sharper peak, more knowable parameter. MLE attains the bound asymptotically; exponential families can attain it exactly."},

{id:"t05",cat:"stats",type:"concept",diff:2,title:"p-value, precisely",
body:"P(observing data **at least this extreme** | H₀ true). It is *not* P(H₀ | data), and 1 − p is not the probability you are right.\nBy construction, 5% of true nulls flag at α = 0.05 — run 20 tests and expect a false discovery. This one definition, stated cleanly, settles half of stats-interview small talk."},

{id:"t06",cat:"stats",type:"concept",diff:2,title:"Errors & power",
body:"Type I (α): false alarm. Type II (β): miss. Power = 1 − β.\n**Neyman–Pearson**: for simple hypotheses, the likelihood-ratio test is the most powerful at any given α — the reason LR statistics are everywhere. Power rises with n, effect size, and looser α; nothing else."},

{id:"t07",cat:"stats",type:"question",diff:2,title:"Base rates bite",
body:"A disease hits 1 in 1000. The test: 99% sensitive, 1% false-positive rate. You test positive — probability you are sick?",
answer:"≈ **9%**.\nBayes: \\( \\frac{0.99 \\times 0.001}{0.99\\times0.001 + 0.01\\times0.999} \\approx 0.09 \\).\nPer 1000 people: ~1 true positive vs ~10 false ones. Rare truths drown in common errors — the same arithmetic audits backtest “discoveries”."},

{id:"t08",cat:"stats",type:"concept",diff:2,title:"Confidence intervals",
body:"A 95% CI is a **procedure** that covers the true θ in 95% of repeated experiments — not “θ is in this interval with probability 95%”.\nWidth \\( \\propto \\sigma/\\sqrt{n} \\): quadruple the sample to halve the interval. The Bayesian object that matches the tempting sentence is a credible interval."},

{id:"t09",cat:"stats",type:"concept",diff:2,title:"OLS in matrix form",
body:"\\[ \\hat\\beta = (X^\\top X)^{-1}X^\\top y, \\qquad \\hat y = Hy, \\quad H = X(X^\\top X)^{-1}X^\\top. \\]\nH is a projection (H² = H): fitting is projecting y onto the column space of X. Gauss–Markov: under exogeneity + homoskedasticity, OLS is BLUE. Residuals ⟂ columns of X — by construction, not by luck."},

{id:"t10",cat:"stats",type:"concept",diff:2,title:"Regression numerology",
body:"Simple regression: slope \\( \\beta = \\rho\\,\\dfrac{\\sigma_y}{\\sigma_x} \\), and \\( R^2 = \\rho^2 \\).\n**Regression to the mean** is the ρ < 1 inside that slope — tall parents, slightly-less-tall children; great backtest years, merely good live years. A statistical fact, not a causal force."},

{id:"t11",cat:"stats",type:"concept",diff:2,title:"Ridge vs Lasso",
body:"Ridge (L2): smooth shrinkage, handles collinearity, never exact zeros — Gaussian prior.\nLasso (L1): **sparsity** (solutions hit the diamond's corners) — Laplace prior. Elastic net blends.\nAlways standardize features first; penalties are unit-blind. Bayesian reading: regularization = prior, honestly labeled."},

{id:"t12",cat:"stats",type:"concept",diff:2,title:"Bayes updating",
body:"Posterior ∝ likelihood × prior. Conjugacy keeps it closed-form:\n\\[ \\mathrm{Beta}(a,b) + k \\text{ successes in } n \\to \\mathrm{Beta}(a+k,\\ b+n-k). \\]\nPosterior mean \\( \\tfrac{a+k}{a+b+n} \\) shrinks the MLE toward the prior — the prior acts as a + b pseudo-observations. Small samples, honest uncertainty."},

{id:"t13",cat:"stats",type:"concept",diff:2,title:"Bootstrap",
body:"Resample your data **with replacement**, recompute the statistic, and read its variability straight off the resamples: standard errors and CIs with no formulas.\nWorks because the empirical distribution ≈ the truth. Fails at the edges: extremes (max), heavy tails, strong dependence (use block bootstrap for time series)."},

{id:"t14",cat:"stats",type:"concept",diff:2,title:"Multiple testing",
body:"Run 20 independent tests at 5%: P(at least one false hit) ≈ \\( 1 - 0.95^{20} \\approx 64\\% \\).\nFixes: **Bonferroni** α/m (controls any false positive; harsh) or **Benjamini–Hochberg** (controls the *rate* of false discoveries; the practical default).\nBacktest overfitting is exactly this disease with a Sharpe-ratio costume."},

{id:"t15",cat:"stats",type:"concept",diff:2,title:"Simpson's paradox",
body:"A trend can hold in **every subgroup** and reverse in the aggregate (Berkeley admissions: each department fair, total skewed) — because the group mix is a confounder.\nResolution: condition on the confounder, or randomize so there is none. When someone shows you a blended average, ask what it blends."},

{id:"t16",cat:"stats",type:"question",diff:2,title:"A/B sizing heuristic",
body:"Quick sample size per arm to detect a mean lift Δ at α = 5%, power 80%?",
answer:"\\[ n \\approx \\frac{16\\,\\sigma^2}{\\Delta^2} \\]\n(from \\( 2(z_{0.975}+z_{0.8})^2 \\approx 15.7 \\)). Halve the effect → **4×** the sample.\nBinary metrics: σ² ≈ p(1−p). This one line lets you sanity-check any proposed experiment in your head."},

{id:"t17",cat:"stats",type:"concept",diff:2,title:"Correlation caveats",
body:"Pearson: linear, moment-based, one outlier can own it. Spearman: rank-based, any monotone link, robust.\nZero correlation ≠ independence; correlation ≠ causation (confounders, selection effects, reverse causality). In finance, correlations are also **regime-dependent** — they spike toward 1 in crises, exactly when diversification is needed."},

{id:"t18",cat:"stats",type:"concept",diff:3,title:"AR(1) & stationarity",
body:"\\( X_t = \\varphi X_{t-1} + \\varepsilon_t \\): stationary iff \\( |\\varphi| < 1 \\), with \\( \\operatorname{Var} = \\tfrac{\\sigma^2}{1-\\varphi^2} \\) and autocorrelation \\( \\varphi^k \\) at lag k.\nφ = 1 is the random walk: shocks never decay, variance grows linearly, and regressions between unrelated walks look significant — **spurious regression**. Test for unit roots before trusting time-series t-stats."},

{id:"t19",cat:"stats",type:"concept",diff:3,title:"Delta method",
body:"If \\( \\sqrt{n}(\\hat\\theta - \\theta) \\Rightarrow \\mathcal{N}(0,\\sigma^2) \\), then\n\\[ \\sqrt{n}\\big(g(\\hat\\theta) - g(\\theta)\\big) \\Rightarrow \\mathcal{N}\\big(0,\\ g'(\\theta)^2\\sigma^2\\big). \\]\nError bars for transformed estimates: ratios, logs, Sharpe ratios, implied vols. First-order Taylor + CLT — two old friends, one handshake."},

{id:"t20",cat:"stats",type:"concept",diff:3,title:"Shrinkage & James–Stein",
body:"Estimating ≥ 3 means simultaneously: shrinking **all** of them toward a common point strictly beats per-coordinate MLE in total MSE — always.\nBias, pooled wisely, pays. Descendants: ridge, empirical Bayes, Ledoit–Wolf covariance shrinkage (the standard fix for noisy correlation matrices in portfolio construction)."},

/* ----------------------------- LINEAR ALGEBRA ---------------------------- */
{id:"l01",cat:"linalg",type:"concept",diff:2,title:"Spectral theorem",
body:"Real symmetric A: \\( A = Q\\Lambda Q^\\top \\) — real eigenvalues, **orthonormal** eigenvectors.\nCovariance matrices are symmetric PSD, so they diagonalize in an orthogonal basis: that basis is PCA, the λ's are the variances along it. One theorem, an entire industry."},

{id:"l02",cat:"linalg",type:"concept",diff:2,title:"PSD checklist",
body:"Equivalent for symmetric A: \\( x^\\top A x \\ge 0 \\ \\forall x \\); all eigenvalues ≥ 0; \\( A = B^\\top B \\) for some B; Cholesky factorization exists.\nEvery covariance matrix is PSD (it is \\( \\mathbb{E}[zz^\\top] \\) of centered z). A “correlation matrix” someone hands you with an eigenvalue −0.02 is not one — repair before you simulate."},

{id:"l03",cat:"linalg",type:"concept",diff:2,title:"SVD & Eckart–Young",
body:"Any matrix: \\( A = U\\Sigma V^\\top \\), singular values \\( \\sigma_1 \\ge \\sigma_2 \\ge \\cdots \\ge 0 \\).\nBest rank-k approximation (in operator or Frobenius norm) = keep the top k singular triplets — **Eckart–Young**. PCA = SVD of the centered data matrix; low-rank structure = a few large σ's."},

{id:"l04",cat:"linalg",type:"concept",diff:2,title:"PCA in two lines",
body:"Directions of maximal variance = top eigenvectors of the sample covariance; explained variance share = \\( \\lambda_i / \\sum_j \\lambda_j \\).\nStandardize first when units differ (else the loudest unit wins). In rates-land, the first three PCs of the yield curve are famously **level, slope, curvature**."},

{id:"l05",cat:"linalg",type:"concept",diff:1,title:"Trace & determinant",
body:"\\( \\operatorname{tr}(A) = \\sum_i \\lambda_i \\), \\( \\det(A) = \\prod_i \\lambda_i \\); \\( \\operatorname{tr}(AB) = \\operatorname{tr}(BA) \\) (cyclic).\nInvertible ⟺ det ≠ 0 ⟺ full rank ⟺ trivial kernel ⟺ no zero eigenvalue. Five phrasings, one fact — interviews love asking for the equivalence out loud."},

{id:"l06",cat:"linalg",type:"question",diff:2,title:"Eigenvalues by inspection",
body:"Eigenvalues of the n×n all-ones matrix? Of a 2-D rotation by θ?",
answer:"All-ones: rank 1 → **n** (eigenvector of ones) and **0** with multiplicity n−1. Check: trace = n. ✓\nRotation: \\( e^{\\pm i\\theta} \\) — no real eigenvectors unless θ ∈ {0, π}; real matrices can have complex spectra.\nTechnique: rank + trace pins down small spectra with zero computation."},

{id:"l07",cat:"linalg",type:"question",diff:2,title:"Projection matrices",
body:"P is a symmetric matrix with P² = P. What are its eigenvalues, and what is tr(P)?",
answer:"Eigenvalues ∈ **{0, 1}** (λ² = λ), and \\( \\operatorname{tr}(P) = \\operatorname{rank}(P) \\) = the dimension you project onto.\nCanonical example: the OLS hat matrix H — tr(H) = number of parameters, which is exactly where “degrees of freedom” comes from."},

{id:"l08",cat:"linalg",type:"concept",diff:2,title:"Cholesky & correlated Gaussians",
body:"Want \\( X \\sim \\mathcal{N}(0, \\Sigma) \\): factor \\( \\Sigma = LL^\\top \\) (lower-triangular Cholesky), draw iid normals Z, set **X = LZ**.\nTwo assets: \\( X_2 = \\rho Z_1 + \\sqrt{1-\\rho^2}\\,Z_2 \\) — the 2×2 Cholesky everyone should recognize on sight. This is *the* Monte Carlo workhorse."},

{id:"l09",cat:"linalg",type:"concept",diff:2,title:"Rank–nullity & least squares",
body:"\\( \\operatorname{rank}(A) + \\dim\\ker(A) = n \\). \\( Ax = b \\) solvable ⟺ \\( b \\in \\operatorname{col}(A) \\).\nWhen it is not, project: least squares solves the **normal equations** \\( X^\\top X\\beta = X^\\top y \\) — i.e. forces the residual orthogonal to every column. Geometry first, formulas second."},

{id:"l10",cat:"linalg",type:"concept",diff:3,title:"Condition number",
body:"\\( \\kappa = \\sigma_{\\max}/\\sigma_{\\min} \\): the input-to-output error amplification of solving with A. Rule of thumb: lose \\( \\log_{10}\\kappa \\) digits.\n**Never invert to solve** — factor (LU/QR/Cholesky) instead. Collinear features make \\( X^\\top X \\) ill-conditioned; ridge adds \\( \\lambda I \\) and tames κ. Numerics and statistics agreeing on the same fix."},

{id:"l11",cat:"linalg",type:"concept",diff:3,title:"Power iteration",
body:"Iterate \\( x \\leftarrow Ax / \\|Ax\\| \\): converges to the top eigenvector, at speed governed by the gap \\( |\\lambda_2/\\lambda_1| \\).\n**PageRank** is power iteration on a stochastic matrix of the web. Deflation or Lanczos for the next few; randomized SVD for huge data. Cheap, robust, everywhere."},

{id:"l12",cat:"linalg",type:"question",diff:3,title:"Matrix calculus mini-kit",
body:"Gradients: \\( \\nabla_x (b^\\top x) \\)? \\( \\nabla_x (x^\\top A x) \\)? And why do you care?",
answer:"\\( b \\), and \\( (A + A^\\top)x \\) — which is \\( 2Ax \\) for symmetric A.\nDifferentiate \\( \\|y - X\\beta\\|^2 \\), set to zero → the normal equations, in one line. The same two identities run gradient descent, Kalman filters, and portfolio optimizers."},

/* ------------------------------ MATH TOOLKIT ----------------------------- */
{id:"m01",cat:"math",type:"question",diff:2,title:"The Gaussian integral",
body:"Evaluate \\( \\displaystyle\\int_{-\\infty}^{\\infty} e^{-x^2}\\,dx \\).",
answer:"\\( \\sqrt{\\pi} \\).\nSquare it, switch to polar: \\( \\iint e^{-(x^2+y^2)}\\,dx\\,dy = 2\\pi\\int_0^\\infty re^{-r^2}dr = \\pi \\).\nCorollary: \\( \\int e^{-x^2/2} = \\sqrt{2\\pi} \\) — the normal density's normalizer, derived, not memorized."},

{id:"m02",cat:"math",type:"concept",diff:1,title:"Taylor on demand",
body:"\\( e^x = \\sum x^n/n! \\); \\( \\ln(1+x) = x - \\tfrac{x^2}{2} + \\cdots \\); \\( (1+x)^\\alpha \\approx 1 + \\alpha x \\); \\( \\sin x \\approx x - \\tfrac{x^3}{6} \\).\nPowers every quick estimate: \\( (1+\\tfrac{r}{n})^n \\to e^r \\), continuous compounding, small-vol expansions of BS, log-return ≈ simple return minus half its square."},

{id:"m03",cat:"math",type:"concept",diff:2,title:"Stirling",
body:"\\[ n! \\approx \\sqrt{2\\pi n}\\,\\Big(\\frac{n}{e}\\Big)^{n} \\]\nInstant corollaries: \\( \\binom{2n}{n} \\approx \\dfrac{4^n}{\\sqrt{\\pi n}} \\) (random-walk return probabilities), \\( \\log n! \\approx n\\log n - n \\) (sorting lower bound, entropy). The bridge between combinatorics and analysis."},

{id:"m04",cat:"math",type:"concept",diff:2,title:"Harmonic numbers",
body:"\\( H_n = \\sum_{k\\le n} \\tfrac1k \\approx \\ln n + \\gamma \\) (γ ≈ 0.577); the series diverges, at a glacial pace.\nThe same \\( \\ln n \\) surfaces in coupon collector (\\( nH_n \\)), records (\\( H_n \\)), quicksort comparisons (\\( 2n\\ln n \\)), and spaghetti loops. Recognize it and half the derivation is done."},

{id:"m05",cat:"math",type:"question",diff:2,title:"Basel",
body:"\\( \\displaystyle\\sum_{n\\ge1} \\frac{1}{n^2} = \\;? \\) And when does \\( \\sum n^{-p} \\) converge?",
answer:"\\( \\dfrac{\\pi^2}{6} \\) (Euler); also ζ(4) = π⁴/90.\nConvergence iff **p > 1** — integral test. The p = 1 boundary (harmonic divergence) vs p = 2 (finite variance of many estimators) is a line quant problems dance on constantly."},

{id:"m06",cat:"math",type:"concept",diff:2,title:"Gamma function",
body:"\\( \\Gamma(z) = \\int_0^\\infty t^{z-1}e^{-t}\\,dt \\); \\( \\Gamma(n) = (n-1)! \\); \\( \\Gamma(z+1) = z\\Gamma(z) \\); and \\( \\Gamma(\\tfrac12) = \\sqrt{\\pi} \\) — the Gaussian integral in disguise.\nNormalizes chi-square, Beta (\\( B(a,b) = \\tfrac{\\Gamma(a)\\Gamma(b)}{\\Gamma(a+b)} \\)), and Student-t densities. Factorials for grown-ups."},

{id:"m07",cat:"math",type:"concept",diff:2,title:"AM–GM & Cauchy–Schwarz",
body:"AM ≥ GM (equality iff all equal): \\( \\tfrac{x+y}{2} \\ge \\sqrt{xy} \\).\nCauchy–Schwarz: \\( |\\langle u, v\\rangle| \\le \\|u\\|\\|v\\| \\); probability face: \\( \\mathbb{E}[XY]^2 \\le \\mathbb{E}[X^2]\\mathbb{E}[Y^2] \\), which is exactly \\( |\\rho| \\le 1 \\).\nThe two inequalities that settle most “prove that…” warm-ups."},

{id:"m08",cat:"math",type:"question",diff:2,title:"Feynman's trick",
body:"Compute \\( I = \\displaystyle\\int_0^1 \\frac{x^b - 1}{\\ln x}\\,dx \\).",
answer:"Differentiate under the integral in b: \\( I'(b) = \\int_0^1 x^b\\,dx = \\tfrac{1}{b+1} \\), and I(0) = 0, so\n\\[ I = \\ln(b+1). \\]\nParameters are levers: introduce one, differentiate, integrate back. A move that turns showpiece integrals into two-liners."},

{id:"m09",cat:"math",type:"concept",diff:1,title:"Rule of 72",
body:"Doubling time at r% ≈ **72 / r** years (8% → 9 years).\nWhy: exact answer \\( \\ln 2 / \\ln(1+r) \\approx 69.3/r \\) for small r; 72 wins for being divisible by everything. Tripling: ≈ 110/r. Mental compounding is an interview micro-flex that never goes out of style."},

{id:"m10",cat:"math",type:"question",diff:2,title:"Geometric series reflexes",
body:"Close forms for \\( \\sum_{n\\ge0} x^n \\) and \\( \\sum_{n\\ge1} n x^n \\) (|x|<1) — and the probabilistic payoff?",
answer:"\\( \\dfrac{1}{1-x} \\) and (differentiate) \\( \\dfrac{x}{(1-x)^2} \\).\nInstant corollary: geometric waiting time has mean \\( \\sum n(1-p)^{n-1}p = 1/p \\) — expected flips to a head = 2, rolls to a six = 6. Differentiating a series = weighting by n: the generating-function reflex."},

{id:"m11",cat:"math",type:"concept",diff:2,title:"Convexity everywhere",
body:"f convex: chords sit above the graph; \\( f'' \\ge 0 \\); f = sup of linear minorants.\nConsequences on one card: Jensen; option payoffs are convex ⇒ **long options love volatility**; log is concave ⇒ Kelly punishes overbetting; variance ≥ 0 is convexity of x². Spot the convexity, and the inequality writes itself."},

{id:"m12",cat:"math",type:"question",diff:3,title:"Probability integral transform",
body:"F is a continuous CDF and X ~ F. What is the distribution of F(X), and why is it the most useful fact in simulation?",
answer:"\\( F(X) \\sim U(0,1) \\) — always. Inverse direction: \\( F^{-1}(U) \\) has law F.\nSo one uniform generator samples **every** continuous distribution (inverse-CDF sampling), copulas exist (dependence separated from marginals), and PIT is how you *backtest* a density forecast."},

/* ---------------------------- INTERVIEW CRAFT ---------------------------- */
{id:"x01",cat:"meta",type:"concept",diff:1,title:"Clarify before you compute",
body:"Restate the problem in one sentence. Pin the assumptions out loud: iid? fair? with replacement? continuous time? what is being maximized?\nInterviewers grade the *approach*; a clean setup is half marks — and it buys thinking time at zero cost."},

{id:"x02",cat:"meta",type:"concept",diff:1,title:"Estimate, then verify",
body:"Before solving: guess the order of magnitude. After solving: test n = 1, n = 2, symmetry, units, limits (p → 0, T → ∞, σ → 0).\nAn absurd answer you catch costs nothing; an absurd answer you present ends the interview. Sanity checks are alpha."},

{id:"x03",cat:"meta",type:"concept",diff:1,title:"The toolbox order",
body:"For expectation puzzles, try in order:\n**1.** Linearity + indicators. **2.** Symmetry / exchangeability. **3.** Conditioning & first-step analysis. **4.** A martingale + optional stopping. **5.** Generating functions.\nSay the tool's name as you reach for it — narrated structure reads as seniority."},

{id:"x04",cat:"meta",type:"concept",diff:1,title:"Think in trades",
body:"For market questions: what is the **replication**, what is the residual risk, who takes the other side, and why do they exist?\nPrice by hedge first, formula second. Mention frictions (costs, borrow, limits to arbitrage) once — it signals you have met reality."},

{id:"x05",cat:"meta",type:"concept",diff:1,title:"When stuck",
body:"Shrink it (n = 2). Push it to extremes. Discretize it. Draw the state graph. Try the complement.\nAnd narrate — a silent minute reads as a lost one, while a spoken dead-end is just process. The only unrecoverable state in an interview is silence."}

];

/* =========================================================================
   FEED_EXTRAS — additional swipeable pages per card (horizontal carousel).
   Key = card id; value = array of extra pages (strings, markdown-lite + KaTeX).
   Page 1 is always the card's body; these render as pages 2, 3, …
   ========================================================================= */
window.FEED_EXTRAS = {

/* --- probability --- */
p01:["**Worked examples.** Expected fixed points of a random permutation: \\( \\sum_{i=1}^n \\mathbb{P}(i \\text{ fixed}) = n\\cdot\\tfrac1n = 1 \\) — independent of n.\nExpected birthday-sharing pairs among n people: \\( \\binom{n}{2}/365 \\). Set it to 1 → n ≈ 28, the heuristic behind the birthday paradox."],

p04:["**Worked example: random sums.** \\( S = \\sum_{i=1}^N X_i \\) with \\( N \\perp X_i \\):\n\\[ \\operatorname{Var}(S) = \\mathbb{E}[N]\\operatorname{Var}(X) + \\operatorname{Var}(N)\\,\\mathbb{E}[X]^2. \\]\nCompound Poisson (\\( N \\sim \\mathrm{Poi}(\\lambda) \\)): both terms merge into \\( \\lambda\\,\\mathbb{E}[X^2] \\). This is the standard model for daily P&L as a sum of random trade counts × trade sizes."],

p06:["**Interview angle.** Jensen is the one-line answer to a whole family: why is \\( \\mathbb{E}[\\max(X,Y)] \\ge \\max(\\mathbb{E}X, \\mathbb{E}Y) \\) (max is convex); why risk-averse agents have concave utility; why \\( \\mathbb{E}[\\log W] \\) punishes volatility (log concave — the Kelly connection); and AM–GM itself: apply Jensen to log."],

p13:["**Deep dive: the full conditional.** For \\( \\begin{pmatrix}X\\\\Y\\end{pmatrix} \\sim \\mathcal{N}(\\mu, \\Sigma) \\) partitioned:\n\\[ X \\mid Y=y \\sim \\mathcal{N}\\big(\\mu_1 + \\Sigma_{12}\\Sigma_{22}^{-1}(y-\\mu_2),\\ \\Sigma_{11} - \\Sigma_{12}\\Sigma_{22}^{-1}\\Sigma_{21}\\big). \\]\nLinear mean, data-independent covariance. This single formula **is** the Kalman filter update, kriging, and GP regression."],

p15:["**Why Beta.** Density of \\( U_{(k)} \\): pick which uniform lands at x, which k−1 fall below, which n−k above:\n\\[ f(x) = \\frac{n!}{(k-1)!\\,(n-k)!}\\,x^{k-1}(1-x)^{n-k}. \\]\nThe combinatorial derivation is worth saying aloud — it shows you *own* the formula rather than rent it."],

p16:["**Follow-up: the spread.** \\( \\operatorname{Var} = \\sum_k \\tfrac{1-p_k}{p_k^2} \\approx \\tfrac{\\pi^2}{6}n^2 \\), so σ ≈ 1.3 n — the collection time is genuinely volatile, not just long.\nFor the die: mean 14.7, σ ≈ 6.2. Quoting both numbers is the difference between a memorized answer and a understood one."],

p18:["**The count, explicitly.** Families with two children, at least one Tuesday boy:\nboy–boy: 7 + 7 − 1 = **13** (subtract the double-count where both are Tuesday boys); boy–girl and girl–boy: 7 each → **14**.\nP(both boys) = 13/27. As the detail gets rarer (born on Jan 1st), the answer → 1/2: a rare tag almost surely identifies *one specific* child."],

p25:["**Why 1/n!.** \\( \\mathbb{P}(U_1+\\cdots+U_n \\le 1) \\) is the volume of the simplex \\( \\{u_i > 0, \\sum u_i \\le 1\\} \\).\nSlickest proof: the cube [0,1]ⁿ splits into n! congruent regions by the ordering of coordinates, and the simplex is the image of one of them. Then \\( \\mathbb{E}[N] = \\sum_n \\mathbb{P}(N > n) = \\sum_n 1/n! = e \\)."],

p29:["**A genuinely surprising fact.** The record indicators are *independent* (Rényi): whether draw k is a record ⊥ whether draw j is.\nSo the number of records is a sum of independent Bernoulli(1/k): mean \\( H_n \\), variance \\( \\sum \\tfrac1k(1-\\tfrac1k) \\approx \\ln n \\), and a CLT holds. Records in n = 1000 draws: about 7.5 ± 2.6."],

p30:["**Proof skeleton (worth reciting).** For any λ > 0: \\( \\mathbb{P}(S_n \\ge t) \\le e^{-\\lambda t}\\,\\mathbb{E}[e^{\\lambda S_n}] \\) (Markov on the exponential).\nIndependence factorizes the mgf; **Hoeffding's lemma** bounds each factor by \\( e^{\\lambda^2(b-a)^2/8} \\); optimize λ. The recipe — exponentiate, factorize, optimize — is the master key to every concentration bound."],

/* --- stochastic processes --- */
s02:["**Companions & traps.** Convex function of a martingale = **submartingale** (conditional Jensen): \\( S_n^2, |S_n|, e^{\\theta S_n} \\) all drift up.\nTrap: “martingale increments are independent” — false in general (they are only *uncorrelated*). The counterexamples live exactly in that gap."],

s04:["**Autopsy of the doubling paradox.** Bet 1, 2, 4, … on fair coin flips until the first win: profit +1 always, yet each bet is fair.\nWhich OST hypothesis fails? \\( \\tau \\) is finite with \\( \\mathbb{E}[\\tau]=2 \\) — fine. The killer: **increments are unbounded** (and the strategy needs unbounded capital / is not UI). Knowing *which* condition breaks is the interview answer."],

s05:["**The two lines in full.** Let \\( p = \\mathbb{P}(\\text{hit } a) \\).\nOST on \\( S_n \\): \\( 0 = pa - (1-p)b \\Rightarrow p = \\tfrac{b}{a+b} \\).\nOST on \\( S_n^2 - n \\): \\( \\mathbb{E}[\\tau] = \\mathbb{E}[S_\\tau^2] = p a^2 + (1-p) b^2 = ab \\).\nDeliver both in under a minute and the interviewer relaxes."],

s06:["**Limits worth memorizing.** Down-biased walk (p < q): \\( \\mathbb{P}(\\text{ever gain } +1) = p/q \\), and ever gain +k: \\( (p/q)^k \\). Up-biased: reaching any level above is certain.\nAt p = q the walk reaches everything with probability 1 — but with **infinite expected time**. Certain ≠ fast."],

s08:["**The machinery, once.** For HH: let \\( E_\\varnothing, E_H \\) be expected flips from scratch / after a head:\n\\( E_\\varnothing = 1 + \\tfrac12 E_H + \\tfrac12 E_\\varnothing \\), \\( E_H = 1 + \\tfrac12\\cdot0 + \\tfrac12 E_\\varnothing \\) → solve: 6.\nEvery pattern-waiting problem is this system with different resets. Set it up cleanly and the rest is arithmetic."],

s09:["**Why the casino is fair.** Before each letter, a new gambler bets 1 on “A”, then lets everything ride on B, R, A… Each bet is fair, so the total wealth process is a martingale.\nAt the stop, surviving gamblers hold \\( 26^{11} \\) (started 11 letters ago), \\( 26^4 \\) (ABRA suffix), \\( 26 \\) (A). OST: expected stakes in = payout → \\( \\mathbb{E}[T] = 26^{11}+26^4+26 \\). Overlaps literally pay."],

s12:["**How to *find* the martingale.** Discrete: solve harmonicity \\( h = Ph \\) (e.g. \\( h(x) = (q/p)^x \\) for the biased walk). Continuous: solve \\( \\mathcal{L}f = 0 \\) for the generator.\nUniversal trick for iid walks: \\( e^{\\theta S_n}/m(\\theta)^n \\) with \\( m(\\theta) = \\mathbb{E}[e^{\\theta X}] \\) — a martingale for **every** θ; differentiate in θ to harvest more."],

s17:["**Worked micro-example.** Two states, stay-probabilities 0.9 and 0.8. Balance: \\( 0.1\\,\\pi_A = 0.2\\,\\pi_B \\Rightarrow \\pi = (\\tfrac23, \\tfrac13) \\).\nExpected return time to B: \\( 1/\\pi_B = 3 \\). Thirty seconds, no matrices — flow-balance beats solving \\( \\pi P = \\pi \\) by hand every time."],

s19:["**The counting behind it.** Knight-move graph on 8×8: sum of degrees = 336, so |E| = 168. Corner degree = 2.\nMagic of reversibility: the answer needs **zero** analysis of the chain's transient behavior — no eigenvalues, no absorption equations. Recognizing “random walk on a graph” is the entire problem."],

s23:["**Proof in one picture.** Cycle lemma: among the \\( a+b \\) cyclic rotations of any counting order, **exactly \\( a-b \\)** keep A strictly ahead throughout.\nEvery rotation class is equally likely ⇒ \\( \\mathbb{P} = \\tfrac{a-b}{a+b} \\). Alternative: reflect the first touch of 0 — the André reflection that also powers the Catalan numbers."],

s26:["**Size-biasing, quantified.** Landing “at random in time” selects a gap with probability ∝ its length:\n\\[ \\mathbb{E}[\\text{gap you land in}] = \\frac{\\mathbb{E}[L^2]}{\\mathbb{E}[L]} \\]\n— for Exp(λ): \\( 2/\\lambda \\), twice the average gap; your wait is uniform inside it. Same bias explains “my bus line is always worse” and why sampled trades look bigger than average trades."],

s29:["**Deriving the hitting density.** \\( \\mathbb{P}(\\tau_a \\le t) = \\mathbb{P}(M_t \\ge a) = 2\\,\\mathbb{P}(B_t \\ge a) = 2\\Phi(-a/\\sqrt{t}) \\).\nDifferentiate in t → \\( f_{\\tau_a}(t) = \\frac{a}{\\sqrt{2\\pi t^3}}\\,e^{-a^2/2t} \\). Tail \\( \\sim t^{-3/2} \\): heavy enough that the mean diverges — a Lévy(1/2) distribution."],

s31:["**The orthant formula (own it).** Standard bivariate normal, correlation ρ:\n\\[ \\mathbb{P}(X>0, Y>0) = \\frac14 + \\frac{\\arcsin\\rho}{2\\pi}. \\]\nChecks: ρ = 0 → 1/4; ρ = 1 → 1/2; ρ = −1 → 0. It converts a whole family of “both positive” Brownian questions into arithmetic."],

s34:["**Two one-line proofs.** Min: \\( \\mathbb{P}(\\min > t) = \\prod_i e^{-\\lambda_i t} = e^{-(\\sum\\lambda_i)t} \\).\nWinner: \\( \\mathbb{P}(X_i \\text{ first}) = \\int_0^\\infty \\lambda_i e^{-\\lambda_i t}\\prod_{j\\ne i} e^{-\\lambda_j t}\\,dt = \\frac{\\lambda_i}{\\sum_j \\lambda_j} \\).\nThe independence of winner and time is the subtle part — it is special to exponentials."],

/* --- stochastic calculus --- */
c01:["**Interview angle.** For deterministic \\( f \\): \\( \\int_0^t f(s)\\,dB_s \\sim \\mathcal{N}\\big(0, \\int_0^t f(s)^2 ds\\big) \\) — the isometry *is* the variance calculator, and Gaussianity survives because the integrand does not look at the path.\nWhy left endpoints: evaluating H mid-interval (Stratonovich) adds \\( \\tfrac12 d\\langle H,B\\rangle \\) and destroys the martingale property — fine for physics, wrong for trading gains."],

c02:["**Where (dB)² = dt comes from.** Over a grid, \\( \\sum (\\Delta B_i)^2 \\) has mean \\( t \\) and variance \\( \\sum 2(\\Delta t_i)^2 \\to 0 \\): the sum of squared increments *converges to t*, deterministically.\nMicro-drill: \\( d(tB_t) = B\\,dt + t\\,dB \\) — no correction, since \\( dt\\,dB = 0 \\). Corrections appear only through \\( (dB)^2 \\)."],

c03:["**Self-check ritual.** After any Itô expansion, ask: is the \\( dB \\) part the martingale piece, and does the \\( dt \\) part vanish under expectation the way the problem demands?\nDrill: \\( f(x)=x^2 \\Rightarrow d(B^2) = 2B\\,dB + dt \\) — integrate, take expectations: \\( \\mathbb{E}[B_t^2] = t \\). Ten seconds, and it catches sign errors before the interviewer does."],

c04:["**Follow-ups they chain on.** Take expectations: \\( \\mathbb{E}\\int B\\,dB = 0 \\) (martingale) ⇒ \\( \\mathbb{E}[B_t^2] = t \\), consistent.\nStratonovich would give \\( \\tfrac12 B_t^2 \\) — the classical chain rule; the \\( -t/2 \\) is exactly the Itô-vs-Stratonovich gap. And by the isometry: \\( \\operatorname{Var}\\big(\\int_0^t B\\,dB\\big) = \\int_0^t s\\,ds = t^2/2 \\)."],

c05:["**The general ladder.** \\( \\mathbb{E}[B_t^{2n}] = (2n-1)!!\\,t^n \\) (odd moments vanish): 1, 3t², 15t³, …\nBonus everyone forgets: \\( \\operatorname{Var}(B_t^2) = \\mathbb{E}[B^4] - t^2 = 2t^2 \\) — the χ² variance. It reappears as the variance of realized variance, i.e. why vol-of-vol exists even in a constant-vol world."],

c06:["**Where you cash this in.** \\( \\mathbb{E}[e^{\\sigma B_T}] = e^{\\sigma^2 T/2} \\) prices anything lognormal: \\( \\mathbb{E}[S_T] = S_0 e^{\\mu T} \\) for GBM (the \\( -\\sigma^2/2 \\) and \\( +\\sigma^2/2 \\) cancel).\nAnd \\( \\mathcal{E}_t = e^{\\sigma B_t - \\sigma^2 t/2} \\) is precisely the Girsanov density — the same object prices moments *and* changes measures."],

c07:["**The Hermite family.** \\( e^{\\theta x - \\theta^2 t/2} = \\sum_n \\tfrac{\\theta^n}{n!} H_n(x,t) \\): expanding the exponential martingale in θ generates them all —\n\\( B \\), \\( B^2 - t \\), \\( B^3 - 3tB \\), \\( B^4 - 6tB^2 + 3t^2 \\), … each a martingale (coefficients of a martingale are martingales). One generating function, infinite exam answers."],

c08:["**Numbers that make it real.** μ = 10%, σ = 40%: the mean grows at 10%, the **median** at \\( 10 - \\tfrac{16}{2} = 2\\% \\). Most paths underperform the average — a few lucky ones carry it.\nAlso: \\( \\mathbb{P}(S_T > K) = \\Phi\\big(\\tfrac{\\ln(S/K) + (\\mu - \\sigma^2/2)T}{\\sigma\\sqrt{T}}\\big) \\) — the d₂ shape, with μ in place of r."],

c09:["**Discrete twin & trading link.** Sampled on a grid, OU is exactly **AR(1)** with \\( \\varphi = e^{-\\kappa\\Delta t} \\).\nHalf-life of a shock: \\( \\ln 2/\\kappa \\) — the number pairs traders actually quote (“this spread mean-reverts in 3 days”). Estimate κ by regressing \\( \\Delta X \\) on \\( X \\): slope ≈ −κΔt."],

c10:["**What changes, what cannot.** Girsanov reweights *path probabilities* — drift moves, but quadratic variation is a pathwise property, so **σ is untouchable** by any equivalent measure change.\nInterview one-liner: “P and Q disagree about how likely paths are, never about how rough they are.” Novikov (\\( \\mathbb{E}[e^{\\frac12\\int\\lambda^2}] < \\infty \\)) is the license to do this."],

c11:["**Special cases to recognize.** μ = 0, r = 0: the (backward) heat equation \\( u_t + \\tfrac12 u_{xx} = 0 \\) — option prices diffuse like temperature.\nPractical translation: Monte Carlo *is* a PDE solver by sampling, finite differences *are* an expectation evaluator by stepping. Same object, two algorithms — say that and the question is over."],

c12:["**Completeness accounting.** One Brownian, one risky asset ⇒ every claim replicable (complete). More noise sources than traded assets (stochastic vol without a vol instrument, jumps) ⇒ **incomplete**: a whole interval of no-arbitrage prices, pinned only by preferences or by adding hedge instruments.\nThe integrand H in the representation is literally the delta."],

c13:["**Worked: covariance of two BMs.** \\( d(B^1B^2) = B^1 dB^2 + B^2 dB^1 + \\rho\\,dt \\); take expectations: \\( \\mathbb{E}[B^1_t B^2_t] = \\rho t \\).\nSame product rule gives the pricing of quantos and spread options their cross terms — the ρ dt line item is where correlation risk enters every two-asset book."],

c14:["**From theory to the desk.** Realized variance \\( \\sum (\\Delta \\ln S)^2 \\to \\int_0^T \\sigma_s^2\\,ds \\): sampling the quadratic variation.\nVol targeting = trying to trade in the **QV clock** at constant speed. And the DDS view explains fat tails: mix a Gaussian over a random clock and kurtosis appears for free."],

c15:["**Read the transform like a trader.** \\( \\mathbb{E}[e^{-\\lambda\\tau_a}] = e^{-a\\sqrt{2\\lambda}} \\) is a *price*: a perpetual one-touch paying 1 at hitting, discounted at rate λ.\nThe \\( \\sqrt{\\lambda} \\) (non-analytic at 0) encodes the \\( t^{-3/2} \\) tail; \\( -\\partial_\\lambda \\) at 0 diverges → \\( \\mathbb{E}[\\tau_a] = \\infty \\). With drift ν toward the barrier: \\( \\exp\\big(a\\nu - a\\sqrt{\\nu^2 + 2\\lambda}\\big) \\)."],

c16:["**Why √X is delicate — and fine.** \\( \\sqrt{x} \\) is not Lipschitz at 0, so the standard theorem is silent; Yamada–Watanabe (Hölder-½ diffusion coefficients, dimension 1) rescues uniqueness.\nSimulation reality: naive Euler goes negative — use full-truncation Euler or exact CIR sampling (noncentral χ²). Feller \\( 2\\kappa\\theta \\ge \\sigma^2 \\): the boundary at 0 is unattainable."],

c17:["**The joint law, for barriers.** Reflection gives the pair: for \\( a \\ge \\max(0, x) \\),\n\\[ \\mathbb{P}(M_t \\ge a,\\ B_t \\le x) = \\mathbb{P}(B_t \\ge 2a - x). \\]\nDifferentiate for the joint density — this is the engine behind barrier-option formulas and drawdown probabilities. The image path reflected at level a does all the work."],

c18:["**Trader's translation.** A digital's payoff kink ⇒ gamma concentrates into a spike at the strike as expiry nears — hedging costs explode exactly there; desks smooth it by quoting a call spread of finite width.\nBarriers inherit the same disease at the barrier level. Local time is the mathematical name of that hedging pain."],

/* --- quant questions --- */
q02:["**The bigger picture.** “Keep if above the continuation value” — the threshold (4, then 5) *is* an exercise boundary; the game is a two-step American option.\nGeneral recursion: \\( E_k = \\mathbb{E}[\\max(X, E_{k-1})] \\), thresholds rising toward 6 as re-rolls stack. Any interviewer can extend this; the recursion is the answer they want."],

q04:["**The general gap formula.** N cards total, k of them special: \\( \\mathbb{E}[\\text{position of first special}] = \\dfrac{N+1}{k+1} \\) — check: \\( \\tfrac{53}{5} = 10.6 \\).\nAnd the j-th special sits at \\( j\\,\\tfrac{N+1}{k+1} \\) on average: aces at 10.6, 21.2, 31.8, 42.4 — evenly spread by the exchangeability of the five gaps."],

q07:["**Why the events are disjoint.** For each point i, let \\( A_i \\) = “the semicircle starting at i going clockwise contains everyone”. If all points fit in *some* semicircle, exactly **one** of them is its clockwise-most point — so exactly one \\( A_i \\) occurs.\n\\( \\mathbb{P}(A_i) = 2^{-(n-1)} \\), sum over i: \\( n/2^{n-1} \\). Union without inclusion–exclusion, because uniqueness was engineered."],

q13:["**De Finetti's reading.** The draw sequence is exchangeable, so it behaves as “first pick a random p, then flip iid coins(p)” — and for the 1+1 urn, that hidden prior is exactly **U(0,1)**.\nPólya's urn = Beta-Bernoulli in disguise: after observing the past, the predictive is Laplace's rule of succession \\( \\tfrac{r+1}{n+2} \\)."],

q14:["**Derivation + the danger zone.** Maximize \\( g(f) = p\\ln(1+f) + q\\ln(1-f) \\): \\( g'(f) = 0 \\Rightarrow f^* = p - q \\).\nSmall-edge quadratic: \\( g(f) \\approx f(p-q) - f^2/2 \\) — a parabola whose *other* zero is at 2f*: **betting double-Kelly earns nothing** and adds all the variance; beyond it, growth is negative. Half-Kelly: ¾ of the growth, half the pain."],

q15:["**Why 1/e appears.** Skip r, then success prob \\( \\approx \\tfrac{r}{n}\\ln\\tfrac{n}{r} \\) (the best must come after r, and the best-so-far at its time must be among the first r).\nMaximize \\( x\\ln(1/x) \\): x* = 1/e, value 1/e. The same explore-commit trade-off runs bandit warm-ups and “when to stop interviewing candidates” in real hiring."],

q18:["**The recipe, portable.** Offspring pgf \\( \\varphi(s) = \\tfrac{1+s+s^2+s^3}{4} \\), mean \\( m = \\varphi'(1) = 1.5 > 1 \\) → extinction is possible but not certain.\nSolve \\( \\varphi(s) = s \\), discard the root s = 1, keep the smallest in [0,1]. Every “does this population/desk/meme die out” question is this three-step recipe."],

q19:["**Two proofs, both elegant.** (1) The remaining-red fraction is a martingale; your success probability is its value at your stopping time — optional stopping freezes it at ½.\n(2) Coupling: the card after your “stop” is a uniformly random unseen card — which has exactly the distribution of the **bottom card of the deck**. Nobody can beat the bottom card."],

q25:["**The general threshold.** Value to you = c·V, seller accepts iff b ≥ V ~ U(0,M). Conditional on acceptance, \\( \\mathbb{E}[\\text{profit}] = \\tfrac{c}{2}b - b \\): positive only if **c > 2**.\nAt c = 1.5, every bid loses on average *when it wins* — adverse selection in its purest form. This is why market makers widen quotes against flow they suspect is informed."],

q26:["**Second moments & shape.** Loop-closure events at each step are independent-ish enough: \\( \\operatorname{Var} \\approx \\sum \\tfrac{1}{2k-1}\\big(1 - \\tfrac{1}{2k-1}\\big) \\approx 2.6 \\) — the count is small *and* concentrated.\nAlso \\( \\mathbb{P}(\\text{exactly one giant loop}) = \\prod_{k=2}^{100} \\tfrac{2k-2}{2k-1} \\approx 8\\% \\): a few big loops dominate, mirroring random permutation cycle structure."],

/* --- finance --- */
f02:["**The arbitrage, executed.** If \\( C - P > S - Ke^{-rT} \\): sell the call, buy the put, buy the stock, borrow \\( Ke^{-rT} \\) (a *conversion*). At expiry every branch nets zero; today you pocket the gap.\nParity also implies \\( \\sigma_{imp}(call) = \\sigma_{imp}(put) \\) strike by strike — quote skew is about strikes, never about call-vs-put."],

f04:["**Derivation in four beats.** (1) Portfolio \\( V = C - \\Delta S \\); (2) Itô on C; (3) choose \\( \\Delta = \\partial_S C \\) → the dB term dies; (4) riskless ⇒ earns r:\n\\[ \\partial_t C + \\tfrac12\\sigma^2 S^2 \\partial_S^2 C + rS\\,\\partial_S C - rC = 0. \\]\nA change of variables turns it into the heat equation — which is why the solution looks like Gaussians."],

f05:["**Why two probabilities.** Write \\( C = \\mathbb{E}^{\\mathbb{Q}}[e^{-rT}(S_T - K)^+] = S\\,\\mathbb{Q}^S(S_T > K) - Ke^{-rT}\\,\\mathbb{Q}(S_T > K) \\): the first term uses the **stock as numéraire** (measure \\( \\mathbb{Q}^S \\)), the second the bank account.\nΦ(d₁) > Φ(d₂) always — under the stock measure, big-S paths get extra weight."],

f07:["**Where 0.4 comes from.** ATM, r = 0: \\( C = S[\\Phi(\\tfrac{\\sigma\\sqrt T}{2}) - \\Phi(-\\tfrac{\\sigma\\sqrt T}{2})] \\approx S\\,\\sigma\\sqrt{T}\\,\\varphi(0) = \\tfrac{S\\sigma\\sqrt T}{\\sqrt{2\\pi}} \\).\n\\( 1/\\sqrt{2\\pi} = 0.399 \\). Drill: S = 400, σ = 25%, 3 months → 400 × 0.4 × 0.25 × 0.5 = **20**. Answer in four seconds, then refine."],

f08:["**The breakeven move.** Long a delta-hedged straddle: daily P&L ≈ \\( \\tfrac12\\Gamma S^2(\\Delta S/S)^2 + \\Theta\\,\\Delta t \\). Breakeven daily move:\n\\[ |\\Delta S| = \\sigma_{imp}\\,S\\sqrt{\\Delta t} \\]\n— you need the day's move to beat the implied daily vol (σ/16 of spot, roughly). “Did today move more than a sixteenth of annual vol?” is the gamma trader's morning question."],

f09:["**Why the path matters.** The weight \\( \\Gamma_t S_t^2 \\) (dollar gamma) peaks when spot sits near the strike — realized vol *there* is what you monetize.\nSpot drifts far away → gamma ≈ 0 → even huge realized vol earns nothing. Variance swaps exist precisely to delete this path-dependence and pay realized vol wherever it happens."],

f11:["**Derivation, two differentiations.** \\( C(K) = e^{-rT}\\int_K^\\infty (s-K)\\,q(s)\\,ds \\).\n∂/∂K: \\( -e^{-rT}\\int_K^\\infty q = -e^{-rT}\\,\\mathbb{Q}(S_T > K) \\) — the (discounted) survival function.\n∂²/∂K²: \\( e^{-rT} q(K) \\). Butterfly ≈ second difference of calls — you can *see* the density on a strike ladder."],

f13:["**The dividend condition, precisely.** Exercise a call just before an ex-div date iff the dividend you capture exceeds what you give up: interest on the strike + remaining time value:\n\\( D > K(1 - e^{-r\\tau}) + \\text{TV} \\).\nPut mirror-logic: exercise deep ITM when interest on K outweighs remaining optionality — high rates make American puts genuinely American."],

f14:["**Replication algebra (say it once, own it).** Solve \\( \\Delta S u + Be^{r\\Delta t} = V_u \\) and \\( \\Delta S d + Be^{r\\Delta t} = V_d \\):\n\\( \\Delta = \\tfrac{V_u - V_d}{S(u-d)} \\), B = the rest. Price = ΔS + B, and rearranging *produces* q — risk-neutral probability is the shadow price of replication, not an opinion about the world."],

f16:["**Why 1/K² exactly.** Itô: \\( d\\ln S = \\tfrac{dS}{S} - \\tfrac12\\sigma^2 dt \\) ⇒ realized variance \\( = \\tfrac{2}{T}\\big(\\int \\tfrac{dS}{S} - \\ln\\tfrac{S_T}{S_0}\\big) \\): a delta position plus a **short log contract**.\nExpanding the log payoff over vanillas requires weights \\( 1/K^2 \\) — which is also the weighting that gives every strike equal vega. Two derivations, same answer: good sign."],

f21:["**When √T lies.** Positive autocorrelation (momentum) ⇒ long-horizon vol > daily×√T; mean reversion ⇒ less. The **variance ratio** \\( VR(q) = \\tfrac{\\operatorname{Var}(r_{q\\text{-day}})}{q\\operatorname{Var}(r_{1\\text{-day}})} \\) tests it: 1 for a random walk.\nAlso the reason Sharpe ratios of smoothed/illiquid strategies are inflated — stale prices manufacture autocorrelation."],

f24:["**The dictionary entry.** Market price of risk \\( \\lambda = \\tfrac{\\mu - r}{\\sigma} \\) — the stock's Sharpe ratio — is exactly the Girsanov shift taking \\( \\mathbb{P} \\to \\mathbb{Q} \\).\nOne λ per source of noise; assets driven by the same Brownian must share it, or arbitrage. “Q = P minus the price of fear” is flippant but memorable."],

/* --- brainteasers --- */
b01:["**The math under the cycles.** All fail iff the permutation contains a cycle longer than 50; a cycle of length k > n/2 is unique, with probability exactly 1/k.\n\\( \\mathbb{P}(\\text{fail}) = \\sum_{k=51}^{100} \\tfrac1k \\approx \\ln 2 = 0.693 \\). The strategy's genius: it makes prisoners' fates *maximally correlated* — either the permutation is good for everyone or bad for everyone."],

b04:["**General egg calculus.** With d drops and e eggs you can distinguish \\( \\sum_{i=1}^{e}\\binom{d}{i} \\) floors. Two eggs: \\( d(d+1)/2 \\) → 14 for 100.\nThree eggs for 1000 floors: 19 drops. Scaling: worst case ~ \\( e\\,n^{1/e} \\) — each extra egg buys a root. The equalize-the-worst-case principle transfers to search problems generally."],

b12:["**The clean symmetry proof.** Track only seats 1 and 100. Every randomly-seating passenger either picks seat 1 (chaos ends, 100 wins), seat 100 (100 loses), or defers. At each random choice the two fatal seats are **equally likely** — so the final coin is fair.\nBonus: later boarders are the exposed ones — \\( \\mathbb{P}(\\text{passenger } k \\text{ displaced}) = \\tfrac{1}{102-k} \\): from 1/100 for the second passenger up to 1/2 for the last. The middle of the plane barely notices."],

b16:["**Chamber bookkeeping.** Label chambers 1–6, bullets in 1–2. A click means the fired chamber was one of {3,4,5,6}; the *next* chamber holds a bullet only if we just fired 6 → next is 1. So P(death | pull) = 1/4.\nRe-spin resets to the prior: 2/6. **Non-adjacent bullets flip it**: both bullets then sit after empty chambers, so pulling kills with 2/4 = 1/2 vs 1/3 after a spin — spin. Rule: count which empty chambers precede a bullet."],

b21:["**With a proper prior, resolved.** Put any real prior on the smaller amount; observe x in your envelope. Switching is favorable iff \\( \\mathbb{P}(\\text{yours is smaller} \\mid x) > \\tfrac{\\text{loss}}{\\text{gain+loss}} \\) — which depends on the prior's tails at x.\nUnconditionally the gain is exactly 0. The paradox is a lesson in *conditioning on the observed value*, and it is why “switch if x feels small” can genuinely work."],

b25:["**Why intuition says 3 — and is wrong.** “All rolls even” feels like rolling a 3-sided die {2,4,6} and waiting for 6: that experiment gives 3.\nBut conditioning ≠ restricting: sequences with any odd roll are *discarded*, and long sequences almost always contain one. Survivorship pulls the conditional length down to 3/2. Same logic corrupts backtests filtered on survival."],

/* --- statistics --- */
t01:["**Worked: Gaussian MLE.** \\( \\ell = -\\tfrac n2\\ln(2\\pi\\sigma^2) - \\tfrac{1}{2\\sigma^2}\\sum(x_i-\\mu)^2 \\). Score in μ → \\( \\hat\\mu = \\bar x \\); in σ² → \\( \\hat\\sigma^2 = \\tfrac1n\\sum(x_i-\\bar x)^2 \\) — the /n, biased version.\nInvariance bonus: MLE of σ is the square root of the MLE of σ². No re-optimization — that is the point of invariance."],

t05:["**How to talk about it like an adult.** p = 0.049 and p = 0.051 are the *same evidence*; the 0.05 cliff is convention, not chemistry.\nAlways pair the p-value with an **effect size and CI**: “significant but tiny” and “huge but noisy” are different business decisions. In trading language: t-stat tells you it is not luck; magnitude tells you if it pays costs."],

t07:["**The odds shortcut.** Posterior odds = prior odds × likelihood ratio:\n\\[ \\frac{1}{999} \\times \\frac{0.99}{0.01} \\approx \\frac{1}{10} \\Rightarrow \\mathbb{P} \\approx 9\\%. \\]\nOdds form makes sequential updating additive (in log): stack tests by summing log-LRs. This is also precisely how a Bayesian reads a backtest t-stat given a skeptical prior on strategies."],

t09:["**The geometry (draw it).** y lives in ℝⁿ; the model spans a p-dim subspace; OLS drops the perpendicular: \\( \\hat y = Hy \\), residual \\( \\perp \\) every column of X — that orthogonality *is* \\( X^\\top(y - X\\hat\\beta) = 0 \\), i.e. the normal equations.\nDegrees of freedom = tr(H) = p; R² = squared cosine of the angle between centered y and the model space."],

t11:["**The soft-threshold picture.** Orthonormal design: ridge gives \\( \\hat\\beta_j = \\tfrac{z_j}{1+\\lambda} \\) (shrink everything proportionally); lasso gives \\( \\hat\\beta_j = \\operatorname{sign}(z_j)(|z_j| - \\lambda)_+ \\) (shrink and **kill** the small ones).\nThat one formula pair explains every ridge-vs-lasso interview answer: proportional damping vs sparsification."],

t14:["**Benjamini–Hochberg, operationally.** Sort p-values ascending; find the largest k with \\( p_{(k)} \\le \\tfrac{k}{m}\\alpha \\); reject all hypotheses up to k.\nControls the *false discovery rate* (expected fraction of rejections that are false) — the right currency when screening 500 alpha signals, where Bonferroni would reject everything including the truth."],

t16:["**One-line derivation.** Detect Δ when \\( \\tfrac{\\Delta}{\\sqrt{2\\sigma^2/n}} \\ge z_{0.975} + z_{0.80} = 1.96 + 0.84 = 2.8 \\).\nSolve: \\( n = 2(2.8)^2\\sigma^2/\\Delta^2 \\approx 15.7\\,\\sigma^2/\\Delta^2 \\). Every piece is a lever: one-sided tests, higher power, paired designs — you can re-derive any variant at the whiteboard."],

t18:["**Half-lives, the practical unit.** Shock decay: \\( \\varphi^h = \\tfrac12 \\Rightarrow h = \\ln 2 / \\ln(1/\\varphi) \\): φ = 0.9 → 6.6 periods; φ = 0.99 → 69.\nEstimation warning: OLS \\( \\hat\\varphi \\) is biased *downward* in small samples (Kendall bias) — mean reversion in short backtests looks stronger than it is. The market pays for knowing that."],

/* --- linear algebra --- */
l01:["**Proof you can do at the board.** For symmetric A with \\( Au = \\lambda u, Av = \\mu v \\):\n\\( \\lambda\\langle u,v\\rangle = \\langle Au, v\\rangle = \\langle u, Av\\rangle = \\mu\\langle u,v\\rangle \\) ⇒ \\( (\\lambda-\\mu)\\langle u,v\\rangle = 0 \\).\nDistinct eigenvalues ⇒ orthogonal eigenvectors, in three lines. Realness: same trick with the conjugate inner product."],

l02:["**Field repair kit.** A “correlation matrix” with a negative eigenvalue (from pairwise estimation, missing data, stress overrides): eigendecompose, clip \\( \\lambda_i \\leftarrow \\max(\\lambda_i, \\varepsilon) \\), reconstruct, rescale the diagonal to 1. (Higham's algorithm does it optimally.)\nSkip the repair and Cholesky crashes — or worse, your Monte Carlo silently simulates an impossible world."],

l03:["**The algebra that makes PCA = SVD.** Centered data X (n×p): \\( X = U\\Sigma V^\\top \\Rightarrow \\) sample covariance \\( \\tfrac{X^\\top X}{n-1} = V\\,\\tfrac{\\Sigma^2}{n-1}\\,V^\\top \\).\nSo PCs = columns of V, component variances = \\( \\sigma_i^2/(n-1) \\), scores = UΣ. Compute via SVD of X, never by forming \\( X^\\top X \\) — conditioning squared is conditioning lost."],

l06:["**The aI + bJ pattern.** Any matrix \\( aI + bJ \\) (J = all-ones): eigenvalues \\( a + bn \\) (once) and \\( a \\) (n−1 times).\nEquicorrelation matrix (1's diagonal, ρ off): eigenvalues \\( 1 + (n-1)\\rho \\) and \\( 1-\\rho \\) ⇒ PSD iff \\( \\rho \\ge -\\tfrac{1}{n-1} \\) — you cannot make many assets all strongly anti-correlated. A one-line risk fact worth gold."],

l08:["**The 2×2 by hand.** \\( \\Sigma = \\begin{pmatrix}\\sigma_1^2 & \\rho\\sigma_1\\sigma_2\\\\ \\rho\\sigma_1\\sigma_2 & \\sigma_2^2\\end{pmatrix} \\Rightarrow L = \\begin{pmatrix}\\sigma_1 & 0\\\\ \\rho\\sigma_2 & \\sigma_2\\sqrt{1-\\rho^2}\\end{pmatrix} \\).\nRow 2 read aloud: “correlated part plus independent remainder” — the same decomposition as the regression of asset 2 on asset 1. Cholesky *is* sequential regression."],

l12:["**Full derivation, once.** \\( \\|y - X\\beta\\|^2 = y^\\top y - 2\\beta^\\top X^\\top y + \\beta^\\top X^\\top X\\beta \\).\nGradient: \\( -2X^\\top y + 2X^\\top X\\beta = 0 \\Rightarrow X^\\top X\\beta = X^\\top y \\).\nAdd ridge \\( \\lambda\\|\\beta\\|^2 \\): \\( (X^\\top X + \\lambda I)\\beta = X^\\top y \\) — the +λI that fixes conditioning, derived rather than pasted."],

/* --- math toolkit --- */
m01:["**Harvest the moments.** Differentiate \\( I(a) = \\int e^{-ax^2}dx = \\sqrt{\\pi/a} \\) with respect to a:\n\\( \\int x^2 e^{-ax^2}dx = \\tfrac12\\sqrt{\\pi}a^{-3/2} \\) → at a = ½, normalized: \\( \\mathbb{E}[Z^2] = 1 \\), \\( \\mathbb{E}[Z^4] = 3 \\).\nOne integral, one parameter, all even Gaussian moments. Feynman's trick meeting the normal distribution."],

m03:["**Where √(2πn) comes from.** \\( n! = \\int_0^\\infty t^n e^{-t}dt \\): the integrand \\( e^{n\\ln t - t} \\) peaks at t = n with curvature 1/n → a Gaussian bump of width \\( \\sqrt{n} \\).\nLaplace's method: value at peak × Gaussian width = \\( (n/e)^n \\times \\sqrt{2\\pi n} \\). The same saddle-point logic prices deep-OTM options and large deviations."],

m08:["**The other classic lever.** \\( I(a) = \\int_0^\\infty e^{-ax^2}dx = \\tfrac12\\sqrt{\\pi/a} \\); differentiating in a manufactures \\( \\int x^{2k}e^{-ax^2} \\) for all k.\nRecipe: (1) embed a parameter, (2) differentiate or integrate in it, (3) evaluate at the value you need. If an integral resists, it usually lacks a parameter — add one."],

m10:["**Second derivatives, second moments.** Differentiate again: \\( \\sum n^2 x^{n-1} \\) closed forms give \\( \\mathbb{E}[N^2] \\) for the geometric → \\( \\operatorname{Var}(N) = \\tfrac{1-p}{p^2} \\).\nGenerating-function reflex: multiply by n ⇔ differentiate; that is the entire mechanism behind pgf moment extraction \\( \\mathbb{E}[N] = G'(1) \\), \\( \\operatorname{Var} = G'' (1) + G'(1) - G'(1)^2 \\)."],

m12:["**Two payoffs.** (1) *Backtesting densities*: if your forecast distributions are honest, the PIT values \\( F_t(x_t) \\) are iid U(0,1) — histogram them; U-shape = overconfident, hump = underconfident.\n(2) *Copulas*: \\( C(u,v) \\) glues uniform marginals into any dependence — Sklar. Marginals and dependence become separately chosen, separately stressed."]

};

/* =========================================================================
   PACK: MARKETS & MARKET MAKING (mk) — new category
   Cards may carry inline `pages:[...]` = extra swipeable pages after the body.
   ========================================================================= */
window.FEED_ITEMS = window.FEED_ITEMS.concat([

{id:"mk01",cat:"markets",type:"concept",diff:1,title:"The spread, decomposed",
body:"A bid–ask spread pays for three things:\n**1.** Order processing (fixed costs, exchange fees).\n**2.** Inventory risk (holding what you just bought while it moves).\n**3.** Adverse selection (some counterparties know more than you).\nEverything in market making is managing components 2 and 3.",
pages:["**Why a spread exists even with zero costs.** Glosten–Milgrom's point: quotes are *conditional expectations*. The ask must be \\( \\mathbb{E}[V \\mid \\text{someone buys}] \\) — and “someone wants to buy” is itself bad news about V.\nQuoting the unconditional mean gets you picked off from both sides. The spread is the market's price for information asymmetry — swipe on for the two-line model."]},

{id:"mk02",cat:"markets",type:"question",diff:2,title:"Glosten–Milgrom in two lines",
body:"Asset worth 0 or 1, each with prob 1/2. A fraction \\( \\pi \\) of traders are informed (they know V and trade accordingly); the rest buy or sell at random. What bid and ask do you quote?",
answer:"**Ask = \\( \\tfrac{1+\\pi}{2} \\), Bid = \\( \\tfrac{1-\\pi}{2} \\), Spread = \\( \\pi \\).**\nAsk \\( = \\mathbb{P}(V=1 \\mid \\text{buy}) \\): buys come from informed (only when V = 1) plus half the noise. Bayes gives \\( \\tfrac{1+\\pi}{2} \\); the bid mirrors it.\n**The spread equals the informed fraction** — adverse selection made quantitative.",
pages:["**The Bayes step, written out.** \\( \\mathbb{P}(\\text{buy}\\mid V{=}1) = \\pi + \\tfrac{1-\\pi}{2} \\), \\( \\mathbb{P}(\\text{buy}\\mid V{=}0) = \\tfrac{1-\\pi}{2} \\).\n\\[ \\text{ask} = \\frac{\\tfrac12\\big(\\pi + \\tfrac{1-\\pi}{2}\\big)}{\\tfrac12\\big(\\pi + \\tfrac{1-\\pi}{2}\\big) + \\tfrac12\\cdot\\tfrac{1-\\pi}{2}} = \\frac{1+\\pi}{2}. \\]\nAfter each trade you update the prior and re-quote — quotes are a Bayesian filter running on order flow. Prices “discover” information because market makers are forced to learn."]},

{id:"mk03",cat:"markets",type:"question",diff:2,title:"Make me a market",
body:"Interviewer: “Make me a market on the weight of a fully loaded 747, in tonnes.” What do you actually say, and what are they grading?",
answer:"Say a **two-sided quote with a width that matches your uncertainty**: e.g. “320 bid, at 420” around a Fermi mid.\nThey grade: (1) a sane mid via decomposition, (2) width ∝ your real uncertainty — not bravado, not cowardice, (3) how you **update** when they trade with you.",
pages:["**Building the mid.** Empty 747 ≈ 180 t; max takeoff ≈ 400 t; “fully loaded” → near the top: mid ≈ 350–380 t. Say the decomposition out loud — the number matters less than the audit trail.",
"**The dynamics they always test.** They lift your offer. Now what? **Move your market up** — their trade is information (they may know the answer). If you re-quote the same market, you have learned nothing and they will hit you again, all day.\nGolden rule: every fill shifts your mid in the direction of the trade; size of the shift ∝ how informed you think they are. That is mk02 in real time."]},

{id:"mk04",cat:"markets",type:"concept",diff:2,title:"Inventory: skew your quotes",
body:"After buying, you are long and exposed — so **lower both your bid and your ask**: you buy less eagerly, you sell more eagerly. Quote around a *reservation price* shifted against your inventory, with width ∝ volatility.",
pages:["**Avellaneda–Stoikov in one line.** Reservation price for inventory q:\n\\[ r = \\text{mid} - q\\,\\gamma\\sigma^2(T-t), \\]\nwith risk aversion γ. Optimal half-spread ≈ \\( \\tfrac{\\gamma\\sigma^2(T-t)}{2} + \\tfrac{1}{\\gamma}\\ln(1+\\tfrac{\\gamma}{k}) \\) where k is the arrival-rate decay.\nRead it, do not memorize it: **shift ∝ inventory × variance × horizon**; width ∝ vol and how patient the flow lets you be."]},

{id:"mk05",cat:"markets",type:"concept",diff:2,title:"Market impact: the square-root law",
body:"Executing a metaorder of size Q against daily volume V costs roughly\n\\[ \\Delta P \\approx Y\\,\\sigma\\sqrt{\\tfrac{Q}{V}}, \\quad Y \\approx 0.5\\text{–}1. \\]\nConcave: the **second** million moves the price less than the first. Empirically one of the most robust facts in markets.",
pages:["**Temporary vs permanent.** Temporary impact (you pay it, it decays) vs permanent (information leaked into the price). Almgren–Chriss models temporary as \\( \\eta v \\) (linear in trading rate) and permanent as \\( \\gamma Q \\).\nOptimal execution then trades **impact cost vs timing risk**: \\( \\min\\ \\mathbb{E}[\\text{cost}] + \\lambda\\operatorname{Var} \\) → sinh-shaped schedules, front-loaded when you are risk-averse. You have implemented this — in an interview, sketch the frontier: cost on one axis, variance on the other."]},

{id:"mk06",cat:"markets",type:"concept",diff:3,title:"Kyle's λ",
body:"In Kyle's one-shot model, price moves **linearly** in net order flow: \\( \\Delta P = \\lambda\\,q \\).\n\\( 1/\\lambda \\) is market **depth**: how much flow it takes to move price by 1. The insider trades proportionally to their edge — and hides inside the noise traders' volume.",
pages:["**The closed form.** With value \\( V \\sim \\mathcal{N}(0,\\sigma_v^2) \\) and noise flow \\( u \\sim \\mathcal{N}(0,\\sigma_u^2) \\):\n\\[ \\lambda = \\frac{\\sigma_v}{2\\sigma_u}. \\]\nDepth = noise/signal: more camouflage (σ_u ↑) → deeper market; more private information (σ_v ↑) → shallower. The insider's expected profit is \\( \\tfrac{\\sigma_v\\sigma_u}{2} \\) — they *monetize the camouflage*. Exactly half the information ends up in the price."]},

{id:"mk07",cat:"markets",type:"concept",diff:2,title:"The limit order book",
body:"Price–time priority: better price first, then earlier arrival. Market order = pay the spread for certainty now; limit order = earn the spread, maybe, later.\nEvery execution question is a position on that trade-off.",
pages:["**Queue position has a price.** Joining a 500-lot queue at the best bid: you get filled either (a) by a harmless seller — fine, or (b) right before the price ticks down through you — you bought the top. Long queues fill you *selectively in the bad state*: adverse selection again, inside the book.\nThis is why queue priority (being early) is worth real money, and why HFTs fight for it."]},

{id:"mk08",cat:"markets",type:"question",diff:2,title:"The 80% interval game",
body:"Give an 80% confidence interval for: the length of the Nile, Apple's annual revenue, the number of piano tuners in London. Most candidates get well under half inside. Why, and what is the fix?",
answer:"**Overconfidence** — intervals people feel good about are ~40–50% intervals.\nFix: widen until it genuinely hurts, think in **orders of magnitude** (log scale), and anchor both ends independently (“what would surprise me low? high?”).\nTrading firms score this like risk: an interval that is too narrow is a blow-up.",
pages:["**Calibration as a trading skill.** A market maker's width *is* an 80–95% interval, priced. Systematically narrow intervals = systematically picked off; systematically wide = no flow.\nPractice loop: guess → interval → check → log your hit rate. Ten minutes a day for two weeks moves most people from 45% to near 80. This is trainable, and firms know it."]},

{id:"mk09",cat:"markets",type:"concept",diff:2,title:"Carry, basis, roll",
body:"Futures basis = financing − yield: \\( F - S = S(r - d)\\tau \\) (+ storage for commodities). **Contango**: F above S; **backwardation**: below.\nRoll yield: holding futures in contango bleeds as contracts converge to spot; in backwardation it pays.",
pages:["**Worked cash-and-carry.** Index at 5000, r = 4%, dividend yield 2%, 6 months: fair \\( F = 5000\\,(1 + 0.02\\times0.5) = 5050 \\).\nScreen shows 5080? Sell the future, buy the basket, finance it: lock 30 points minus costs. The trade *is* the pricing formula — say it as a trade and the interviewer hears a trader."]},

{id:"mk10",cat:"markets",type:"concept",diff:2,title:"Momentum vs mean reversion",
body:"Same market, opposite signs by horizon: microstructure mean reversion (minutes), **momentum** (weeks–12 months), long-horizon reversal (3–5 years).\nAutocorrelation is not one number — it is a function of the lag.",
pages:["**How you would test it.** Variance ratios: \\( VR(q) = \\tfrac{\\operatorname{Var}(r_{q})}{q\\,\\operatorname{Var}(r_1)} \\) above 1 → momentum at that horizon; below → reversion. Plot VR against q and the regime structure appears.\nWhy both persist: momentum earns a risk/behavioral premium but crashes (2009); short-horizon reversion is capacity-constrained and cost-heavy. Every anomaly answer should end with “…and here is why it is not free money.”"]},

{id:"mk11",cat:"markets",type:"question",diff:2,title:"Dice market, live update",
body:"You quote a market on the sum of two dice. I roll them secretly, peek at one die, and tell you: “this one is a 6.” Re-quote.",
answer:"Fair value jumps from 7 to \\( 6 + 3.5 = \\mathbf{9.5} \\); quote around 9.5 (say 9 at 10).\nThe tested skill is **repricing on partial information instantly** — conditional expectation as a reflex, then width for the remaining uncertainty (one die: variance 35/12, σ ≈ 1.7).",
pages:["**Variants they escalate to.** “The **max** is 6” (equivalently: at least one die shows 6): 11 equally likely pairs, total sum 102, so \\( \\mathbb{E}[\\text{sum}] = \\tfrac{102}{11} \\approx 9.27 \\).\nNotice it is *below* 9.5: “this specific die is a 6” ≠ “some die is a 6” — the second conditions on a bigger, less favorable set. The Tuesday-boy trap, wearing a trading costume. Re-quote 9 at 9.5 and explain why: that explanation is the hire."]},

{id:"mk12",cat:"markets",type:"question",diff:3,title:"The red–black stopping game",
body:"A 52-card deck, shuffled. Cards are revealed one by one; you may stop at any moment. Payoff = (reds seen) − (blacks seen). You may also stop before the first card. What is this game worth, and what is the idea?",
answer:"**≈ 2.62** (exact by dynamic programming).\nStop value in state (r, b remaining) is \\( b - r \\); continue value averages the two draws:\n\\[ V(r,b) = \\max\\Big(b-r,\\ \\tfrac{r}{r+b}V(r{-}1,b) + \\tfrac{b}{r+b}V(r,b{-}1)\\Big). \\]\nNever negative (you can always stop at 0) — the **option to quit** has strictly positive value in a fair game.",
pages:["**The structure of the optimal rule.** You continue when behind (nothing to lose — you can always ride back to 0 in expectation) and stop when sufficiently ahead relative to cards left: a threshold ≈ proportional to \\( \\sqrt{\\text{remaining}} \\).\nThis is a minimal model of **when to take profit** on a mean-zero book, and a perfect whiteboard exercise: set up the DP, argue V ≥ 0, compute small cases (V(1,1) = 1/2)."]},

{id:"mk13",cat:"markets",type:"concept",diff:2,title:"PnL attribution",
body:"Decompose every day's PnL: **direction** (delta × move) + **carry** + **vol/gamma** + **slippage/fees** + residual.\nA persistent unexplained residual is a broken risk model or a hidden position — either way, the first thing to chase.",
pages:["**“How do you know your edge is real?”** The answer they want: a t-stat on daily PnL (\\( \\text{Sharpe}\\times\\sqrt{\\text{years}\\cdot 252}/\\sqrt{252} \\)… practically: \\( t \\approx \\text{Sharpe}\\times\\sqrt{\\text{years}} \\)), **stable attribution** (the money comes from where the thesis says), out-of-sample persistence, and capacity honesty.\nSharpe 2 for one year: t ≈ 2 — barely. Sharpe 2 for four years: t ≈ 4. Time, not brilliance, is what proves edges."]},

{id:"mk14",cat:"markets",type:"concept",diff:2,title:"Edge vs cost: the first filter",
body:"A strategy lives iff **edge per trade > cost per trade**. Costs = spread/2 + fees + impact. High-turnover ideas need per-trade edges that survive that bar; most do not.\nSharpe, capacity, turnover: pick two.",
pages:["**Numbers to carry.** Liquid equity round-trip: ~1–3 bps spread cost + impact \\( \\propto \\sigma\\sqrt{Q/V} \\). A signal worth 2 bps per trade with 3 bps of cost is a **losing** strategy with a beautiful backtest (gross).\nInterview move: whenever you propose a strategy, unprompted, state its turnover and the cost bar it must clear. Instant seniority."]},

{id:"mk15",cat:"markets",type:"question",diff:2,title:"A free arbitrage on screen",
body:"You spot a locked/crossed market or a “riskless” price gap between venues. Before you send the order — what is your checklist?",
answer:"Stale quote? Fees, borrow, taxes? Can you actually get **both legs** (size, latency, settlement)? Currency/dividend/corporate-action mismatch? And the meta-question: **who is the loser in this trade, and why are they there?**\nIf you cannot name the sucker at the table…",
pages:["**Limits to arbitrage, the grown-up version.** Real “arbs” die by: execution risk (one leg fills), funding risk (margin calls before convergence — LTCM), short constraints, and crowding (everyone sees it, exit is the risk).\n“Prices can stay wrong longer than you can stay funded” is the sentence to deploy."]},

{id:"mk16",cat:"markets",type:"concept",diff:2,title:"Auctions & the shading reflex",
body:"Second-price (Vickrey): bid your true value — dominant strategy. First-price: **shade below** value (you pay your bid). Common-value auctions add the winner's curse: winning means you were the most optimistic — shade more as bidders multiply.",
pages:["**Where it shows up.** Opening/closing auctions, treasury auctions, IPO allocations, ad exchanges — and every “I'll quote you a price” negotiation.\nUniform value on [0,1], n bidders, first-price equilibrium bid: \\( \\tfrac{n-1}{n}v \\) — shading shrinks as competition grows, but the winner's curse correction grows. Two forces, opposite signs: say both and you have said everything."]},

{id:"mk17",cat:"markets",type:"concept",diff:3,title:"Toxic flow & who pays for order flow",
body:"Flow is **toxic** when it predicts short-term price moves (informed or fast). Makers segment counterparties: benign retail flow gets tighter prices — that is the entire economics of payment for order flow.\nSpread to *you* is a statement about what the maker thinks *you* know.",
pages:["**Measuring toxicity.** Markouts: average mid move at +1s, +10s, +5min after your fills. Consistently negative markouts on your quotes = you are the sucker.\nThe defense loop: widen or fade to toxic tags, tighten to benign — which is mk02's π, estimated live per counterparty/channel."]},

{id:"mk18",cat:"markets",type:"question",diff:3,title:"Kelly meets estimation error",
body:"Your backtest says the edge is p = 0.55 on even-money bets, so Kelly says bet 10%. Why should you bet less, and roughly how much less?",
answer:"Because **p is an estimate**. Overbetting is punished more than underbetting (growth is concave, zero at 2× Kelly), so uncertainty pushes you down.\nWith a noisy edge, the growth-optimal fraction shrinks by roughly \\( \\tfrac{\\text{signal}}{\\text{signal}+\\text{noise}} \\) — a James–Stein-flavored haircut. Practitioners: **half-Kelly or less**, always.",
pages:["**Why the asymmetry.** \\( g(f) \\approx f\\mu - \\tfrac12 f^2\\sigma^2 \\): a parabola. Betting 0.5× Kelly costs 25% of growth; betting 1.5× costs 25% too — but 2× costs **all of it** and beyond is negative.\nAdd correlated bets (your 20 signals are not 20 bets), fat tails, and drawdown constraints: every real consideration points the same direction. Down."]},

{id:"mk19",cat:"markets",type:"concept",diff:1,title:"The prop-shop interview meta",
body:"Optiver/SIG/JS-style loops test four muscles: **mental arithmetic under time**, **calibrated markets** (mk03, mk08), **probability under pressure**, and **game theory instincts**.\nEach is trainable; none is IQ. Ten focused minutes a day per muscle beats a weekend cram.",
pages:["**Practice mapping inside this app.** Mental Math cards + a timer → muscle 1. “Make me a market” + interval game → muscle 2. The Daily Ten session → muscle 3 under a clock. Auctions, Penney, pirates → muscle 4.\nIn the room: narrate, quantify, update out loud. They are hiring a *process*, not answers."]}

]);

/* =========================================================================
   PACK: HARD BRAINTEASERS, WAVE 2 (b27+) — boss cards use pages as hints
   ========================================================================= */
window.FEED_ITEMS = window.FEED_ITEMS.concat([

{id:"b27",cat:"brainteaser",type:"question",diff:3,title:"Boss · Twenty questions with one lie",
body:"I think of a number in 1…1,000,000. You ask yes/no questions; I may **lie at most once**. Without lies you would need 20 questions. How many do you need now?\n*(Swipe → for a hint before revealing.)*",
answer:"**25.**\nEach answer string must decode to (number, lie position or “no lie”): you must distinguish \\( 10^6\\times(q+1) \\) scenarios with \\( 2^q \\) strings.\n\\( 2^{25} = 33.5\\text{M} \\ge 26\\text{M} \\) ✓ while \\( 2^{24} = 16.8\\text{M} < 25\\text{M} \\) ✗. Achievability: Berlekamp's error-correcting strategy — this is coding theory (a 1-error-correcting code) wearing a puzzle mask.",
pages:["**Hint.** Count what an answer transcript must encode. It is not just the number: the transcript must also reveal *whether and where* I lied — otherwise you could not trust the decoding. How many total (number, lie) scenarios are there, and how many transcripts of length q exist?"]},

{id:"b28",cat:"brainteaser",type:"question",diff:2,title:"Blindfolded coins",
body:"100 coins on a table, exactly 10 showing heads. You are blindfolded, gloved (can't feel faces), but may flip any coins. Split them into two groups with **equally many heads**.",
answer:"Take **any 10 coins** aside and **flip all 10**.\nIf the set-aside pile held k heads, the big pile keeps 10 − k heads — and after flipping, your pile shows 10 − k heads as well. Equal, always, whatever k was.\nThe move: engineer an identity that holds for *unknown* k, instead of trying to learn k.",
pages:["**Why it works, slowly.** Set aside 10 coins containing k heads (k unknown). Remaining pile: 10 − k heads. Your pile after flipping: its k heads became tails, its 10 − k tails became heads → **10 − k heads**. Both piles: 10 − k. ∎\nGeneral pattern: with h heads total, set aside h coins and flip them all. Invariants beat information."]},

{id:"b29",cat:"brainteaser",type:"question",diff:3,title:"Chameleons",
body:"An island holds 13 red, 15 green, 17 blue chameleons. When two of different colors meet, both turn the third color. Can they all end up the same color?",
answer:"**No.**\nInvariant: the pairwise differences of counts **mod 3** never change (a meeting sends counts \\( (a,b,c) \\to (a{-}1, b{-}1, c{+}2) \\): every difference shifts by 0 or 3).\nAll-same-color needs two counts equal, i.e. some difference ≡ 0 (mod 3). Here the differences are 2, 2, 4 ≡ 2, 2, 1 — never zero. Impossible.",
pages:["**How to find such invariants.** Compute the move's effect on small algebraic probes: sums (here total is conserved — useless), differences mod small numbers, parities, weighted sums.\nThe skill being tested is *proposing candidate invariants fast*, not divine inspiration. Say your probes out loud as you try them."]},

{id:"b30",cat:"brainteaser",type:"question",diff:3,title:"Boss · Camel and bananas",
body:"3000 bananas, a market 1000 km away, a camel that carries ≤ 1000 bananas and eats 1 banana per km walked (any direction). Maximize bananas delivered.\n*(Swipe → for the key idea.)*",
answer:"**533 bananas** (533⅓).\nPhase 1 (3 loads → 5 crossings/km, cost 5/km) until 2000 remain: 200 km. Phase 2 (2 loads → 3/km) until 1000 remain: 333⅓ km. Phase 3: one load straight through the remaining 466⅔ km: arrive with \\( 1000 - 466\\tfrac23 = 533\\tfrac13 \\).",
pages:["**Hint.** With more than one camel-load, moving the *whole stock* forward 1 km costs more than 1 banana — how much exactly, as a function of the number of loads? Then notice the cost rate drops at exactly two thresholds. Choose the phase boundaries so each phase ends precisely when a load is consumed.",
"**The general principle.** Cost per km = \\( 2\\lceil \\text{loads}\\rceil - 1 \\) (each extra load forces a round trip). Jeep-problem cousin: max reachable distance with n loads = \\( 1000\\,(1 + \\tfrac13 + \\tfrac15 + \\cdots + \\tfrac{1}{2n-1}) \\) — harmonic-odd growth, so range grows *logarithmically* in fuel. Diminishing returns, quantified."]},

{id:"b31",cat:"brainteaser",type:"question",diff:2,title:"Nim & losing positions",
body:"Piles of 3, 5, 7 stones; players alternate removing any number from one pile; last stone wins. Who wins, and what is the universal rule?",
answer:"**First player wins.** Rule: a position is losing iff the **XOR of pile sizes is 0**.\n3⊕5⊕7 = 1 ≠ 0 → winning; the move is to make XOR zero (e.g. 3,5,7 → 2,5,7: 2⊕5⊕7 = 0).\n21-flags variant (take 1–3, one pile): losing positions are multiples of 4 — same theory, base 4.",
pages:["**Why XOR.** From a zero-XOR position, any move breaks the balance (you changed one pile's bits); from nonzero, you can always rebalance: target the pile containing the top set bit of the XOR.\nSo zero-XOR positions form a closed trap: opponent leaves, you return. Sprague–Grundy generalizes this to *all* impartial games — every such game is secretly Nim."]},

{id:"b32",cat:"brainteaser",type:"question",diff:3,title:"Max of n Gaussians",
body:"Roughly how big is the largest of n independent standard normals?",
answer:"Scale: \\( \\sqrt{2\\ln n} \\).\nHeuristic: the tail \\( \\mathbb{P}(Z > x) \\approx e^{-x^2/2} \\)-ish; the max sits where \\( n\\,\\mathbb{P}(Z > x) \\approx 1 \\Rightarrow x \\approx \\sqrt{2\\ln n} \\).\nActual means run below the asymptote: n = 10: **1.54**, n = 100: **2.51**, n = 1000: **3.24** (vs 2.15 / 3.03 / 3.72) — the convergence is famously slow.",
pages:["**Why you care in finance.** Best of n backtested strategies ≈ max of n noisy Sharpes: even with **zero true edge**, the winner shows \\( \\approx \\sqrt{2\\ln n}\\times \\) its standard error. Test 100 signals → expect a ~2.5σ champion by luck alone.\nThis is the selection-bias haircut in one formula — quote it when asked “why do backtests decay live?”"]},

{id:"b33",cat:"brainteaser",type:"question",diff:2,title:"The coin rotation paradox",
body:"A coin rolls without slipping once around an identical, fixed coin. How many full rotations does it make?",
answer:"**Two**, not one.\nOne rotation from the path length (equal circumferences) **plus one** from the revolution around the center — the orbit itself turns the coin.\nSame reason a year has 366.25 *sidereal* days but 365.25 solar ones: one turn is eaten by the orbit.",
pages:["**The clean argument.** Track the coin's center: it traces a circle of radius 2r, length 4πr. Rolling without slipping, rotation = distance/circumference = \\( 4\\pi r / 2\\pi r = 2 \\).\nMoral: choose the right point to track (the center, not the contact point) and paradoxes evaporate."]},

{id:"b34",cat:"brainteaser",type:"question",diff:2,title:"Gas stations on a circle",
body:"Stations around a circular track hold fuel that **in total** exactly suffices for one lap. Show a starting station always exists from which you can complete the lap (tank starts empty).",
answer:"Plot cumulative (fuel picked up − fuel burned) along the lap from anywhere: it ends at 0. **Start just after the minimum** of that curve — every later point sits above the minimum, so the tank never goes negative.\nExistence by looking at an extremum: no search, no induction.",
pages:["**The pattern behind it.** “Shift the start to the argmin of the cumulative sum” is the same move as Kadane's algorithm, the cycle lemma (ballot problem!), and LeetCode's Gas Station.\nOne idea, four famous costumes — worth saying explicitly in an interview to show you see structure, not problems."]},

{id:"b35",cat:"brainteaser",type:"question",diff:1,title:"Breaking chocolate",
body:"An m × n chocolate bar. Minimum number of breaks (one piece at a time, along lines) to get all mn unit squares?",
answer:"Always exactly **mn − 1** — no strategy does better *or worse*.\nEvery break increases the piece count by exactly 1; you go from 1 piece to mn pieces. Done.\nThe interview lesson: hunt for a quantity each move changes deterministically before optimizing anything.",
pages:["**Cousins of the argument.** Handshakes at a tournament (n−1 games to find a winner: each game eliminates exactly one player), counting edges in trees (n nodes ⇒ n−1 edges), and “n−1 merges to combine n files”.\nMonovariant counting kills a whole genre of “what's the minimum number of…” questions in one line."]},

{id:"b36",cat:"brainteaser",type:"fact",diff:3,title:"Infinitely many hats & the axiom of choice",
body:"Countably many prisoners in a line, random hats, each sees everyone ahead, **no communication**. Astonishingly there is a strategy where all but finitely many guess correctly.\nDefine sequences equivalent if they differ in finitely many places; pre-agree (via the axiom of choice) on one representative per class; everyone answers according to the representative of the class they observe.",
pages:["**Why it feels illegal.** Each guess is individually a fair coin flip against an independent hat — yet only finitely many fail: the errors are exactly the finitely many places where truth differs from the chosen representative.\nThe strategy is non-constructive and non-measurable — a reminder that “probability” quietly assumes measurability, and AC lives right at that boundary. Fun to deploy; label it as a curiosity, not a technique."]},

{id:"b37",cat:"brainteaser",type:"question",diff:3,title:"Ant on a rubber band",
body:"An ant walks at 1 cm/s along a 1 km rubber band whose far end is pulled away at 1 km/s (uniform stretch). Does it ever arrive?",
answer:"**Yes** — stretching also carries the ant forward, so track the *fraction* covered: it gains \\( \\tfrac{v}{L_0 + rt} \\) per second, and \\( \\int \\tfrac{dt}{L_0+rt} \\) **diverges** (harmonically).\nArrival time: \\( t = \\tfrac{L_0}{r}\\big(e^{r/v} - 1\\big) \\approx e^{100{,}000} \\) seconds. Finite. Cosmically, absurdly finite.",
pages:["**The two-line integral.** Fraction f satisfies \\( f'(t) = \\tfrac{v}{L_0 + rt} \\Rightarrow f(t) = \\tfrac{v}{r}\\ln\\big(1 + \\tfrac{rt}{L_0}\\big) \\); set f = 1.\nSame mathematics as light from distant galaxies crossing expanding space — and a vivid mnemonic for “the harmonic series diverges, slowly.”"]},

{id:"b38",cat:"brainteaser",type:"question",diff:1,title:"Two equal handshakers",
body:"At any party of n ≥ 2 people, show two people shook the same number of hands.",
answer:"Handshake counts live in {0, …, n−1} — that is n possible values for n people. But **0 and n−1 cannot coexist** (someone who shook everyone's hand contradicts someone who shook none). So only n−1 values are truly available: pigeonhole.\nA five-second proof once you see the forbidden pair.",
pages:["**Pigeonhole, weaponized.** The pattern: shrink the codomain by one via a structural incompatibility, then count. Same skeleton: among any n+1 integers from 1..2n, two are coprime (adjacent ones); any 5 points in a unit square, two within \\( \\tfrac{\\sqrt2}{2} \\).\nWhen a puzzle says “show two of them…”, try pigeonhole before anything clever."]},

{id:"b39",cat:"brainteaser",type:"question",diff:3,title:"Boss · The five-card trick",
body:"Your partner leaves the room. A spectator hands you **5 arbitrary cards** from a deck. You hand back one card to the spectator (hidden) and arrange the other **4 in a row**. Your partner returns, looks at the row, and names the hidden card. How?\n*(Swipe → for hints.)*",
answer:"**Pigeonhole + cyclic distance + factorial encoding.**\nTwo of the 5 share a suit. Hide one of that pair, chosen so it sits ≤ 6 steps clockwise from its partner on the 13-cycle (A,2,…,K). Place the partner card **first** — it announces the suit and the base rank. The remaining 3 cards have 3! = 6 orderings: encode the distance 1–6. Partner reads: suit, base, +distance.",
pages:["**Hint 1.** With 5 cards and 4 suits, what does pigeonhole guarantee? And on a cycle of 13 ranks, how far apart can two cards of the same suit be — going the *shorter* way?",
"**Hint 2.** You control which of the pair is hidden and the order of three unrelated cards. How many messages can 3 ordered cards send? Is that enough for the distance you need?",
"**Why it is tight.** Information check: 4 ordered cards from 52 can encode \\( 52\\cdot51\\cdot50\\cdot49 \\) messages ≫ 48 possibilities — plenty. The elegant part is doing it with a *human-computable* code. (Fitch Cheney, 1950 — the extended version handles even larger decks.)"]},

{id:"b40",cat:"brainteaser",type:"question",diff:3,title:"Boss · Guess the polynomial",
body:"I hold a polynomial P with **nonnegative integer** coefficients, unknown degree. You may ask for P evaluated at points of your choice. How many evaluations do you need to determine P exactly?\n*(Swipe → for the hint.)*",
answer:"**Two.**\nAsk \\( P(1) = S \\) (the sum of coefficients). Then ask \\( P(S+1) \\) and write the answer **in base S + 1**: since every coefficient is ≤ S < S+1, the digits *are* the coefficients, in order.\n(Edge case: S = 0 means P ≡ 0 — one question sufficed.)",
pages:["**Hint.** Nonnegative integers are the whole game: if you knew an upper bound B on all coefficients, evaluating at any base > B would make the coefficients readable as digits. Can one clever first question manufacture such a bound?",
"**Why one evaluation cannot suffice.** A single value P(a) is one integer; infinitely many nonneg-integer polynomials share it (e.g. \\( P(2) = 4 \\): \\( x^2 \\), \\( 2x \\), \\( x+2 \\), 4). The base trick is optimal — and a lovely showcase of “choose your query adaptively”."]},

{id:"b41",cat:"brainteaser",type:"question",diff:2,title:"Coins on a round table",
body:"Two players alternately place identical coins flat on a round table; coins cannot overlap; first player unable to move loses. Who wins?",
answer:"**Player 1**: place the first coin dead **center**, then mirror every opponent move through the center.\nThe center is the unique self-symmetric spot; after it is taken, symmetry guarantees you always have the mirrored reply. Strategy stealing via geometry.",
pages:["**The symmetry-strategy family.** Mirroring wins: Nim-like games with paired moves, the “double chess move” argument, tic-tac-toe-ish first-move advantages.\nWhen a game board has an involution (mirror, rotation by π), ask: can one player seize the fixed point and copy? If yes, the analysis is over before it starts."]}

]);

/* =========================================================================
   PACK: ML · GAUSSIAN PROCESSES · BAYESIAN OPTIMIZATION (ml)
   ========================================================================= */
window.FEED_ITEMS = window.FEED_ITEMS.concat([

{id:"ml01",cat:"mlai",type:"concept",diff:2,title:"Gaussian processes",
body:"A GP is a **prior over functions**: any finite set of function values is jointly Gaussian, with mean m(x) and covariance k(x, x′).\nThe kernel *is* the modeling: it encodes smoothness, lengthscales, periodicity. Everything else is linear algebra.",
pages:["**The posterior, in full.** Data (X, y), noise σ²:\n\\[ \\mu_*(x) = k_*^\\top (K + \\sigma^2 I)^{-1} y, \\qquad \\sigma_*^2(x) = k(x,x) - k_*^\\top (K + \\sigma^2 I)^{-1} k_*. \\]\nMean = a weighted combination of observed y's; variance = prior minus what the data explains — it **shrinks near data, reverts to prior far away**. Cost: \\( O(n^3) \\) for the solve, \\( O(n^2) \\) per prediction.",
"**Two facts interviewers probe.** (1) The posterior mean is also the kernel-ridge-regression solution — GPs and RKHS methods are the same object with/without uncertainty. (2) The predictive variance does **not** depend on y (for a fixed kernel) — only on where you sampled. Design of experiments falls out for free."]},

{id:"ml02",cat:"mlai",type:"concept",diff:2,title:"Kernels & lengthscales",
body:"RBF: \\( k(x,x') = \\sigma_f^2 \\exp\\big(-\\tfrac{\\|x-x'\\|^2}{2\\ell^2}\\big) \\) — infinitely smooth; ℓ sets how far information travels.\n**Matérn** (ν = 5/2, 3/2): rougher, usually more honest for physical/financial data. Small ℓ = wiggly + fast-reverting uncertainty; large ℓ = nearly linear.",
pages:["**ARD & sparsity in high-D.** Automatic Relevance Determination: one lengthscale per input dimension — huge \\( \\ell_i \\) means feature i is irrelevant.\nSAAS priors push this further: heavy-tailed (half-Cauchy) priors on inverse lengthscales make *most* dimensions switch off a priori — the model bets on **low effective dimensionality**, which is why it survives in 100-D BO where a vanilla GP's uncertainty goes vacuous. (Your Tübingen bread and butter — now say it in one breath.)"]},

{id:"ml03",cat:"mlai",type:"concept",diff:3,title:"Marginal likelihood: Occam built in",
body:"\\[ \\log p(y \\mid X, \\theta) = -\\tfrac12 y^\\top K_\\sigma^{-1} y \\;-\\; \\tfrac12 \\log|K_\\sigma| \\;-\\; \\tfrac n2 \\log 2\\pi. \\]\nTerm 1: data fit. Term 2: **complexity penalty** — flexible kernels have big determinants. Maximizing it tunes hyperparameters with an automatic Occam's razor, no validation set needed.",
pages:["**Failure modes worth naming.** The ML surface is multimodal: a tiny-ℓ “interpolate everything” mode and a large-ℓ “it's all noise” mode often coexist — restarts matter. And with n small, the razor can be overconfident.\nInterview one-liner: “type-II maximum likelihood = model selection by integration, and its pathologies are priors' revenge.”"]},

{id:"ml04",cat:"mlai",type:"concept",diff:1,title:"Bayesian optimization, the loop",
body:"Expensive black-box f: **surrogate** (usually a GP) + **acquisition function** that scores where to evaluate next by balancing exploitation (high μ) and exploration (high σ). Evaluate, update, repeat.\nBO wins when evaluations are costly, the domain is modest-dimensional, and gradients are unavailable.",
pages:["**When BO loses.** Cheap evaluations (just random-search harder), very high dimensions without structure (uncertainty becomes uniform — unless SAAS/TuRBO-style assumptions), combinatorial spaces without a kernel, heavy noise without replication.\nSaying where your favorite method *fails* is the fastest credibility win in a research interview."]},

{id:"ml05",cat:"mlai",type:"question",diff:3,title:"Derive Expected Improvement",
body:"Maximizing f, incumbent best \\( f^* \\), posterior \\( f(x) \\sim \\mathcal{N}(\\mu, \\sigma^2) \\). Derive \\( \\mathrm{EI}(x) = \\mathbb{E}[(f(x) - f^*)^+] \\) in closed form.",
answer:"With \\( z = \\tfrac{\\mu - f^*}{\\sigma} \\):\n\\[ \\mathrm{EI} = (\\mu - f^*)\\,\\Phi(z) + \\sigma\\,\\varphi(z). \\]\nTwo readable terms: **exploit** (how much better × prob of being better) + **explore** (σ times the density at the threshold).",
pages:["**The derivation, line by line.** \\( \\mathbb{E}[(f - f^*)^+] = \\int_{f^*}^{\\infty} (t - f^*)\\,\\varphi_{\\mu,\\sigma}(t)\\,dt \\). Substitute \\( t = \\mu + \\sigma u \\):\n\\[ = \\int_{-z}^{\\infty} (\\mu - f^* + \\sigma u)\\,\\varphi(u)\\,du = (\\mu - f^*)\\Phi(z) + \\sigma\\varphi(z), \\]\nusing \\( \\int_{-z}^\\infty u\\varphi(u)du = \\varphi(z) \\). Same integral as the Black–Scholes call — EI *is* an option price on improvement.",
"**Why LogEI exists.** Far from the incumbent, EI underflows to exactly 0 in floats → zero gradients → optimizers stall on flat acquisition surfaces. Working with \\( \\log \\mathrm{EI} \\) (with numerically stable \\( \\log(\\Phi), \\log(\\varphi) \\) compositions) keeps gradients alive everywhere.\nA one-line change worth whole benchmark gaps — the qLogEI story you can tell from the inside."]},

{id:"ml06",cat:"mlai",type:"concept",diff:2,title:"UCB & Thompson sampling",
body:"**UCB**: score \\( \\mu(x) + \\beta\\,\\sigma(x) \\) — optimism in the face of uncertainty; β tunes exploration and drives regret bounds.\n**Thompson**: draw one function from the posterior, maximize the draw. Randomized, embarrassingly parallel, and eerily hard to beat.",
pages:["**How to choose among EI/UCB/TS.** EI: greedy-ish, great with few evaluations. UCB: principled knobs, theory-friendly. TS: batch/async for free (independent draws), robust to model misfit in practice.\nAnd the connection to bandits: your CREST work on UCB is literally this β, one arm per x — BO is bandits with a continuum of correlated arms."]},

{id:"ml07",cat:"mlai",type:"concept",diff:3,title:"Batch acquisitions (q > 1)",
body:"Choosing q points jointly: \\( q\\mathrm{EI} = \\mathbb{E}[\\max_i (f(x_i) - f^*)^+] \\) — no closed form; estimate by **Monte Carlo with the reparameterization trick** (sample joint posteriors via Cholesky, differentiate through).\nThe max inside creates natural diversity: clones add nothing.",
pages:["**The smoothing knobs.** MC + max + ReLU = kinks → noisy gradients. qLogEI replaces max with a soft-max and the ReLU with a soft-plus, each with a temperature (the \\( \\tau_{\\max}, \\tau_{\\text{relu}} \\) pair): small τ = faithful but rough, large τ = smooth but biased.\nAlternatives worth naming: fantasies/sequential greedy (fill in hallucinated observations point by point — a 1−1/e approximation by submodularity), and TS batches."]},

{id:"ml08",cat:"mlai",type:"concept",diff:3,title:"TuRBO: trust regions for high-D BO",
body:"Global GPs in high dimensions produce vacuous uncertainty → acquisition chases corners. **TuRBO** goes local: a hyper-rectangle trust region around the incumbent, a local GP inside, region **expands on successes, shrinks on failures**, restarts when it collapses.\nLocal honesty beats global delusion.",
pages:["**The mechanics that matter.** Success/failure counters with thresholds; side lengths scaled per-dimension by the GP's ARD lengthscales (move far along flat directions, gingerly along wiggly ones); implicit multi-start via restarts.\nThe open questions you can speak to: how to *initialize* the region size from the data (lengthscale-driven L = f(ρ)-style rules), and when a fitted-GP diagnostic should trigger the local→global switch. Benchmarks care; so do interviewers."]},

{id:"ml09",cat:"mlai",type:"concept",diff:2,title:"Cross-validation without lying",
body:"k-fold answers “how well would this pipeline do on fresh data” — **only if the pipeline (scaling, feature selection, tuning) is refit inside every fold**. Preprocessing on the full data first = leakage, optimism, tears.",
pages:["**Time series: the special regime.** Shuffled folds leak the future. Use forward-chaining (train on past, test on next block) and, for overlapping-label problems, **purge** samples whose labels overlap the test window and **embargo** a buffer after it.\nWorked leak: standardizing prices with the full-sample mean quietly hands each fold the future average level. Small crime, big Sharpe."]},

{id:"ml10",cat:"mlai",type:"concept",diff:2,title:"Forests vs boosting",
body:"**Random forest** = bagging: average deep, decorrelated trees → variance ↓, bias ~flat. Parallel, robust, hard to ruin.\n**Gradient boosting** = sequential: each shallow tree fits the previous residuals → bias ↓ step by step. Stronger, but tunable into overfitting.",
pages:["**Knobs that matter for boosting.** Learning rate (shrinkage) × number of trees (lower rate + more trees generalizes better), tree depth (interaction order), subsampling rows/columns (decorrelation, à la forest).\nWhy trees still rule tabular data: robustness to monotone transforms, native missing-value handling, sharp thresholds — the inductive bias matches spreadsheets better than smooth nets do."]},

{id:"ml11",cat:"mlai",type:"concept",diff:2,title:"Regularization beyond L1/L2",
body:"Early stopping, dropout, data augmentation, weight decay, small batches' noise — all shrink the effective hypothesis space.\n**Early stopping ≈ ridge**: along gradient flow, directions with small eigenvalues learn slowly, so stopping early caps them — an implicit spectral shrinkage.",
pages:["**Double descent, the headline.** Test error can fall, rise near the interpolation threshold, then **fall again** as models grow past it — over-parameterized minima found by SGD are implicitly regularized (min-norm bias).\nWhat to say in interviews: classical U-curves are not wrong, they describe the under-parameterized half; modern practice lives on the second slope."]},

{id:"ml12",cat:"mlai",type:"concept",diff:2,title:"SGD, honestly",
body:"Noise is a feature: stochastic gradients escape saddles and prefer **flat minima** (which generalize). Momentum ≈ heavy ball, smooths the zig-zag; LR schedules (warmup → decay) trade exploration for convergence.\nBatch size ↑ ⇒ LR can scale up too (linear-ish, until it can't).",
pages:["**The two-line intuition for flatness.** Sharp minima: tiny parameter shifts (train/test distribution wiggle) cause big loss jumps; flat minima are robust. SGD's noise cannot sit still in a narrow valley — it diffuses out and settles where it fits.\nAlso the honest caveat: “flatness” is parameterization-dependent; the story is a heuristic with good empirical manners, not a theorem."]},

{id:"ml13",cat:"mlai",type:"concept",diff:2,title:"Backprop = chain rule + caching",
body:"Forward pass stores activations; backward pass reuses them to compute all gradients in **one sweep** — same cost order as the forward pass. That reuse (dynamic programming on the compute graph) is the entire magic.\nMemory bill: activations, not weights — hence checkpointing.",
pages:["**Vanishing/exploding, and the fixes as one story.** Deep chains multiply Jacobians; spectra drift → gradients die or blow up. Residual connections add an identity path (Jacobian ≈ I + small), normalization layers re-center scales, careful init sets the spectrum near 1.\nAll three are the same fix — keep the product of Jacobians near the identity — implemented at three different layers of the stack."]},

{id:"ml14",cat:"mlai",type:"concept",diff:2,title:"Attention in one card",
body:"\\[ \\mathrm{Attn}(Q,K,V) = \\mathrm{softmax}\\!\\Big(\\tfrac{QK^\\top}{\\sqrt{d}}\\Big)V. \\]\nEach token builds its output as a **data-dependent weighted average** of values — a learned, content-addressed lookup. Cost \\( O(n^2 d) \\) in sequence length.",
pages:["**Why the √d.** Dot products of d-dimensional random-ish vectors have variance ∝ d; unscaled, softmax saturates → one-hot attention → dead gradients. Dividing by √d keeps logits O(1).\nA framing that lands: attention is a **kernel smoother** with learned similarity — the transformer is nearest-neighbors that went to the gym."]},

{id:"ml15",cat:"mlai",type:"concept",diff:2,title:"Calibration & proper scoring",
body:"A forecast of 70% should verify ~70% of the time. **Proper scoring rules** (log loss, Brier) are minimized by honest probabilities — accuracy is not one of them.\nCheck with reliability diagrams; recalibrate with Platt/isotonic if needed.",
pages:["**The PIT bridge.** For full densities, calibration ⟺ PIT values \\( F_t(x_t) \\) look U(0,1) (card m12): U-shaped histogram = overconfident, humped = underconfident.\nWhy a quant cares: position sizing consumes *probabilities*, not labels — a sharp but miscalibrated model sizes wrongly exactly when it matters."]},

{id:"ml16",cat:"mlai",type:"concept",diff:2,title:"Feature importance, with skepticism",
body:"Impurity-based importances are biased toward high-cardinality features; **correlated features split credit** arbitrarily; permutation importance breaks the joint distribution when features co-move.\nSHAP allocates fairly *given the model* — which is not the same as causally.",
pages:["**The protocol that survives.** (1) Cluster correlated features, importance per cluster. (2) Permute within clusters, or retrain-without (leave-one-covariate-out). (3) Confidence intervals via refits — importance without error bars is decoration.\nAnd the sentence to say: “importance describes the model's reliance, not the world's mechanism.”"]},

{id:"ml17",cat:"mlai",type:"concept",diff:3,title:"Comparing models under noise",
body:"CV scores are random variables: report the **standard error across folds**, and prefer the simplest model within one SE of the best (the 1-SE rule).\nTesting 50 model variants and picking the top raw score = multiple testing (t14) with extra steps.",
pages:["**Nested CV, when it matters.** Tuning hyperparameters *and* estimating generalization on the same folds is optimistic — the tuner saw the folds. Outer loop for the estimate, inner loop for the tuning.\nCosts compute, buys honesty; for model-zoo strategy research it is the difference between a paper result and a live result."]},

{id:"ml18",cat:"mlai",type:"fact",diff:3,title:"Infinite networks are GPs",
body:"A one-hidden-layer network with random weights converges, as width → ∞, to a **Gaussian process** (Neal 1996); deep versions give NNGP/NTK kernels.\nMoral: the GP-vs-NN border is thinner than the tribes admit — width buys Gaussianity, feature *learning* is what finite nets add.",
pages:["**Scaling GPs when n grows.** Exact \\( O(n^3) \\) dies around \\( n \\sim 10^4 \\): inducing-point variational GPs (SVGP) cost \\( O(nm^2) \\) with m ≪ n pseudo-points; alternatives: random features, KISS-GP structure, conjugate-gradient GPs on GPUs.\nKnowing the menu — and that BoTorch/GPyTorch serve most of it — is the practical answer to “but does it scale?”"]}

]);

/* =========================================================================
   PACK: MENTAL MATH (mm) — Optiver/Flow-style speed kit
   ========================================================================= */
window.FEED_ITEMS = window.FEED_ITEMS.concat([

{id:"mm01",cat:"mental",type:"concept",diff:1,title:"Fractions ↔ decimals, cold",
body:"1/6 = .1667 · 1/7 = .1429 · 1/8 = .125 · 1/9 = .1̄ · 1/11 = .0909 · 1/12 = .0833 · 1/13 ≈ .0769 · 1/16 = .0625 · 1/24 ≈ .0417.\nSevenths cycle: **142857** rotates — 2/7 = .2857, 3/7 = .4286, 4/7 = .5714, 5/7 = .7143, 6/7 = .8571.",
pages:["**Use them as anchors.** 23/7? = 3 + 2/7 = 3.286 instantly. 5/12 = 1/3 + 1/12 = .4167. Elevenths: repeating 09·k → 7/11 = .6364.\nSpeed drills reward *decomposition into known anchors*, not division. Build the reflex: see a fraction → nearest anchor ± correction."]},

{id:"mm02",cat:"mental",type:"question",diff:1,title:"Squares in two seconds",
body:"Compute 47², 63², 85² — without paper. What machinery?",
answer:"**47² = 2209**: (50−3)² = 2500 − 300 + 9.\n**63² = 3969**: (60+3)² = 3600 + 360 + 9.\n**85² = 7225**: ends in 5 → n(n+1) | 25 → 8×9 = 72, append 25.\nThree templates: near 50, near a round number, ends-in-5.",
pages:["**Plus the difference of squares.** \\( a\\cdot b = \\big(\\tfrac{a+b}{2}\\big)^2 - \\big(\\tfrac{a-b}{2}\\big)^2 \\): 17 × 23 = 20² − 3² = **391**; 48 × 52 = 2500 − 4 = 2496.\nAny product of numbers straddling a round center collapses this way — the single highest-yield trick in arithmetic sprints."]},

{id:"mm03",cat:"mental",type:"concept",diff:1,title:"Shift tricks: ×5, ×25, ×11",
body:"×5 = ×10 ÷ 2 · ×25 = ×100 ÷ 4 · ×50 = ×100 ÷ 2 · ×125 = ×1000 ÷ 8.\n×11: insert digit sums — 53 × 11: 5 (5+3) 3 = **583**; carry when needed: 87 × 11 → 8 (15) 7 → 957.",
pages:["**Division mirrors it.** ÷5 = ×2 ÷ 10 (348 ÷ 5 = 69.6); ÷25 = ×4 ÷ 100; ÷125 = ×8 ÷ 1000.\nAnd the commutation trick for percentages: **x% of y = y% of x** — 8% of 25 = 25% of 8 = 2. Free lunch, daily."]},

{id:"mm04",cat:"mental",type:"concept",diff:1,title:"Constants you must own",
body:"√2 ≈ 1.414 · √3 ≈ 1.732 · √5 ≈ 2.236 · π ≈ 3.1416 · e ≈ 2.718 · ln 2 ≈ 0.693 · ln 10 ≈ 2.303 · log₁₀2 ≈ 0.301 · 1/e ≈ 0.368.\nPowers of 2: 2¹⁰ = 1024 ≈ 10³, 2¹⁶ = 65 536, 2²⁰ ≈ 1.05 M, 2³² ≈ 4.3 B.",
pages:["**Stretch them with Taylor.** \\( \\sqrt{1+x} \\approx 1 + \\tfrac x2 \\): √50 = 5√2 ≈ 7.07; √17 = 4√(1+1/16) ≈ 4.12.\nLogs by decomposition: ln 5 = ln 10 − ln 2 ≈ 1.61; log₁₀ 7 ≈ log₁₀ 49 / 2 ≈ (2 × 0.845)/2 → 0.845. Constants + one expansion = a slide rule in your head."]},

{id:"mm05",cat:"mental",type:"question",diff:2,title:"Compound in your head",
body:"1.05¹⁰ ≈ ? 0.99⁵⁰ ≈ ? What is the engine?",
answer:"**\\( (1+x)^n \\approx e^{nx} \\)** for smallish x.\n1.05¹⁰ ≈ e^0.5·… precisely: 10 × ln 1.05 ≈ 10 × 0.0488 = 0.488 → e^0.488 ≈ **1.63**.\n0.99⁵⁰ ≈ e^{−0.5} ≈ **0.61**.\nRefine with the second-order term \\( e^{nx - nx^2/2} \\) when x is not tiny.",
pages:["**Finance dialect.** Rule of 72 (m09) is this engine packaged. Vol scaling: σ_daily ≈ σ_annual/16 (√252 ≈ 15.9): a 2% daily move on a 20%-vol stock is a 1.6σ day — computed before the interviewer finishes the sentence.\nBond flavor: a 10-year zero at 4%: price ≈ e^{−0.4} ≈ 0.67 of par."]},

{id:"mm06",cat:"mental",type:"concept",diff:1,title:"Estimation discipline",
body:"Round to 1–2 significant figures, **track the powers of ten separately**, and note the direction of each rounding so you can compensate at the end.\n37 × 52: 40 × 50 = 2000, corrections −3×52 (−156) + … or straight: ≈ 1900 (exact 1924).",
pages:["**Error budget thinking.** Multiplying k rounded numbers: relative errors *add*. Two 3% roundings in the same direction ⇒ ~6% off — decide upfront whether the question needs 2 digits or an order of magnitude, and spend effort accordingly.\nSprint tactic: answer bands (“between 1850 and 2000”) are often accepted — and always safer."]},

{id:"mm07",cat:"mental",type:"question",diff:2,title:"Casting out nines (and elevens)",
body:"You computed 487 × 362 = 176 294 under time pressure. Fast sanity check?",
answer:"**Digit sums mod 9**: 487 → 19 → 1; 362 → 11 → 2; product ≡ 2 (mod 9). Answer: 1+7+6+2+9+4 = 29 → 2 ✓ (necessary, not sufficient).\nMod 11 (alternating digit sums) catches transpositions that mod 9 misses. Two five-second checks kill most sprint errors.",
pages:["**Also: last-digit and magnitude gates.** 487 × 362 ends in 7×2 = …4 ✓; size gate: ≈ 500 × 360 = 180k ✓.\nStack three independent weak checks and the joint error rate collapses — the arithmetic version of ensemble methods."]},

{id:"mm08",cat:"mental",type:"concept",diff:1,title:"Sums on tap",
body:"\\( 1 + \\cdots + n = \\tfrac{n(n+1)}{2} \\) · \\( \\sum k^2 = \\tfrac{n(n+1)(2n+1)}{6} \\) · \\( \\sum k^3 = \\big(\\tfrac{n(n+1)}{2}\\big)^2 \\).\nExpected values on tap: die = 3.5, two dice = 7, U(0,1): mean ½, variance **1/12**.",
pages:["**Variance of a die, from the sums.** \\( \\mathbb{E}[X^2] = \\tfrac{91}{6} \\) (sum of squares 1..6 = 91) → Var = 91/6 − 12.25 = **35/12 ≈ 2.92**, σ ≈ 1.71.\nThese two sum formulas + Var = E[X²] − (E[X])² manufacture half of all quick-probability arithmetic."]},

{id:"mm09",cat:"mental",type:"concept",diff:2,title:"The 80-in-8 game plan",
body:"Optiver-style tests: ~80 questions, 8 minutes, **negative marking**. The meta-skill is triage: answer what you see instantly, skip anything requiring thought, never guess blind.\nAccuracy at speed beats speed at accuracy — the scoring says so.",
pages:["**Training protocol that works.** Daily 2-minute sprints (Zetamac-style settings: add/sub to 100, mult to 12×99, div inverse), log scores, one new trick per week from these cards until it is automatic.\nPlateau ≈ two weeks in; push through with *harder* settings, not longer sessions. Test day: first pass easy-only, second pass the rest."]},

{id:"mm10",cat:"mental",type:"question",diff:2,title:"Fast Fermi frame",
body:"Estimate: how many petrol stations in France?",
answer:"Anchor on people: ~68 M ≈ 40 M cars. A station serves maybe 3–4 k cars (fill-ups/week ÷ station throughput) → **~10 000** stations. (Reality ≈ 11 000.)\nMethod > number: population anchor → per-unit ratio → sanity check both ends.",
pages:["**The three universal anchors.** Population (68 M FR, 340 M US, 8 B world), rates (1 year ≈ π×10⁷ s ≈ 500 k min ≈ 8 800 h), and money (French GDP ≈ €2.8 T).\nMost Fermi chains are two ratios away from one of these. Practice saying the chain, not just the answer — calibration (mk08) is scored on the reasoning."]},

{id:"mm11",cat:"mental",type:"question",diff:2,title:"Percent gymnastics",
body:"A price rises 20% then falls 20% — net? And what is −5% then +5%? The general rule?",
answer:"Down **4%** and down **0.25%**: \\( (1+x)(1-x) = 1 - x^2 \\) — round trips always lose the square.\nGeneral chain: add the percents, **subtract half the sum of squares**-ish: precisely, \\( (1+a)(1+b) = 1 + a + b + ab \\); the cross term is the whole story.",
pages:["**Vol drag, spotted early.** This −x² is exactly the volatility drag of c08: an asset alternating ±σ compounds at \\( -\\tfrac{\\sigma^2}{2} \\) per period vs its average return.\nAlso the leveraged-ETF decay: 2× daily leverage squares the wiggles — quadruples the drag. One identity, three interview answers."]},

{id:"mm12",cat:"mental",type:"concept",diff:2,title:"Approximate everything with logs",
body:"Big products/powers → logs → add. How many digits in \\( 2^{100} \\)? \\( 100\\log_{10}2 = 30.1 \\) → **31 digits**.\n\\( 50! \\)? Stirling-lite: \\( \\log_{10}50! \\approx 50\\log_{10}50 - 50\\log_{10}e \\approx 50(1.7) - 21.7 \\approx 63 \\) → ~10⁶⁴.",
pages:["**Why this matters beyond party tricks.** Log-space is how you compare likelihoods, information (bits = log₂), and compound growth without overflow — mentally *and* in code (log-sum-exp, LogEI…).\nReflex to build: any question with “how many digits / how big roughly / after n periods” → take logs first, exponentiate last."]}

]);

/* =========================================================================
   PACK: MEASURE THEORY (me) — Oxford warm-up
   ========================================================================= */
window.FEED_ITEMS = window.FEED_ITEMS.concat([

{id:"me01",cat:"measure",type:"concept",diff:2,title:"σ-algebras & why not all sets",
body:"A σ-algebra: contains Ω, closed under complements and **countable** unions — the collection of events you can legally measure. Borel sets = the σ-algebra generated by open sets.\nWhy not all subsets? Vitali: with the axiom of choice, a set exists that *no* translation-invariant measure can size consistently.",
pages:["**Measurable functions.** f is measurable iff preimages of Borel sets are events: \\( f^{-1}(B) \\in \\mathcal{F} \\). Compositions, limits, sups of measurable functions stay measurable — the class is closed under everything you will actually do.\nRandom variable = measurable function; “X is \\( \\mathcal{G} \\)-measurable” = X is computable from the information in \\( \\mathcal{G} \\). The probability dialect of s01."]},

{id:"me02",cat:"measure",type:"concept",diff:2,title:"The Lebesgue integral, built",
body:"Three floors: (1) simple functions \\( \\sum a_i \\mathbf{1}_{A_i} \\) — integrate by definition; (2) nonnegative f: \\( \\int f = \\sup \\) over simple functions below; (3) general f: \\( \\int f^+ - \\int f^- \\), defined when not ∞ − ∞.\nNull sets are invisible: change f on measure zero, nothing moves — hence “almost everywhere”.",
pages:["**Riemann vs Lebesgue in one image.** Riemann slices the *domain* (columns), Lebesgue slices the *range* (layers): \\( \\int f = \\int_0^\\infty \\mu(f > t)\\,dt \\) — which is exactly the tail-sum formula p20.\nWhy the rebuild pays: limits pass through Lebesgue integrals under clean conditions (MCT/DCT), while Riemann breaks on \\( \\mathbf{1}_{\\mathbb{Q}} \\)."]},

{id:"me03",cat:"measure",type:"concept",diff:2,title:"Monotone convergence",
body:"\\( 0 \\le f_n \\uparrow f \\) ⇒ \\( \\int f_n \\uparrow \\int f \\).\nNo domination needed — monotonicity alone. The workhorse for: interchanging \\( \\sum \\) and \\( \\int \\) with nonnegative terms (Tonelli's little sibling), and defining integrals constructively.",
pages:["**Drop a hypothesis, watch it die.** Without monotonicity: \\( f_n = n\\,\\mathbf{1}_{(0,1/n)} \\to 0 \\) pointwise but \\( \\int f_n = 1 \\) — mass escapes to a spike.\nEvery convergence theorem is best memorized *with* its counterexample: the pair is the understanding."]},

{id:"me04",cat:"measure",type:"concept",diff:2,title:"Fatou's lemma",
body:"For \\( f_n \\ge 0 \\): \\( \\int \\liminf f_n \\le \\liminf \\int f_n \\).\nDirection mnemonic: **mass can escape** (to spikes or to infinity), never appear — the limit function can only have lost.",
pages:["**Where you deploy it.** Proving a limit is integrable before you know convergence of integrals; the standard step in proving DCT and in martingale convergence (bounding \\( \\mathbb{E}[\\liminf] \\)).\nThe escape gallery: spikes \\( n\\mathbf{1}_{(0,1/n)} \\) (height), sliders \\( \\mathbf{1}_{(n,n+1)} \\) (horizon) — both give strict inequality 0 < 1."]},

{id:"me05",cat:"measure",type:"concept",diff:2,title:"Dominated convergence",
body:"\\( f_n \\to f \\) a.e. and \\( |f_n| \\le g \\) with \\( \\int g < \\infty \\) ⇒ \\( \\int f_n \\to \\int f \\).\nThe dominator g is a ceiling that forbids escaping mass. **The** theorem you cite when swapping limits and integrals — including expectations.",
pages:["**Its most-used corollary: differentiate under ∫.** If \\( \\partial_\\theta f(x,\\theta) \\) exists and is dominated uniformly in θ by an integrable g, then \\( \\tfrac{d}{d\\theta}\\int f = \\int \\partial_\\theta f \\).\nThat is the license behind Feynman's trick (m08) and behind differentiating \\( \\mathbb{E}[e^{\\theta X}] \\) to harvest moments. When an interviewer asks “why can you do that?” — this is the answer, with the dominating function named."]},

{id:"me06",cat:"measure",type:"question",diff:3,title:"Fubini vs Tonelli",
body:"When may you swap a double integral's order — and what breaks otherwise?",
answer:"**Tonelli**: f ≥ 0 — always swap (both sides possibly ∞).\n**Fubini**: \\( \\int |f| < \\infty \\) — swap, everything finite.\nThe ritual: run Tonelli on |f| first; if that is finite, Fubini unlocks the signed swap.",
pages:["**The canonical counterexample.** On ℕ²: \\( a_{nn} = 1 \\), \\( a_{n+1,n} = -1 \\), else 0. Rows: first row sums 1, every other row 0 → Σ = **1**. Columns: each contains +1 and −1 → Σ = **0**.\nAbsolute summability fails, and the two orders honestly disagree. Keep this 2-line grid in your pocket — it settles “why the |f| condition?” forever."]},

{id:"me07",cat:"measure",type:"concept",diff:3,title:"Radon–Nikodym",
body:"If \\( \\nu \\ll \\mu \\) (ν vanishes wherever μ does), there is a density \\( \\tfrac{d\\nu}{d\\mu} \\) with \\( \\nu(A) = \\int_A \\tfrac{d\\nu}{d\\mu}\\,d\\mu \\).\n**One theorem, three careers**: likelihoods (densities w.r.t. Lebesgue), conditional expectation, and change of measure (\\( d\\mathbb{Q}/d\\mathbb{P} \\), Girsanov).",
pages:["**How it defines conditional expectation.** For X integrable, \\( A \\mapsto \\mathbb{E}[X\\mathbf{1}_A] \\) is a (signed) measure on \\( \\mathcal{G} \\), absolutely continuous w.r.t. \\( \\mathbb{P} \\); its RN-density **is** \\( \\mathbb{E}[X\\mid\\mathcal{G}] \\).\nSo the mysterious defining property of p02 is just “density of one measure against another”. This single connection makes measure theory feel earned rather than inflicted."]},

{id:"me08",cat:"measure",type:"concept",diff:2,title:"Convergence modes, measure edition",
body:"a.e. ⇒ in measure (on finite spaces); in measure ⇒ a subsequence converges a.e.; \\( L^p \\) ⇒ in measure. Nothing else without extra hypotheses.\nThe two counterexample machines: **spikes** (kill \\( L^1 \\) despite a.e.) and the **typewriter** (in measure without a.e.).",
pages:["**The typewriter, spelled out.** Indicators of \\( [0,1] \\)'s dyadic intervals cycling: [0,½],[½,1],[0,¼],[¼,½],… Lengths → 0 so convergence *in measure* to 0; but every point is hit infinitely often — a.e. convergence fails everywhere.\nA subsequence (one interval per generation) does converge a.e. — illustrating the subsequence theorem in the same breath. One example, two theorems."]},

{id:"me09",cat:"measure",type:"concept",diff:3,title:"π-systems & uniqueness",
body:"Two measures agreeing on a **π-system** (closed under finite intersections) that generates the σ-algebra — and agreeing on total mass — agree everywhere (Dynkin).\nThis is *why CDFs determine laws*: intervals \\( (-\\infty, x] \\) form a π-system generating the Borel sets.",
pages:["**Where else it quietly works.** Independence needs checking only on generating π-systems (rectangles suffice for product structure); Kolmogorov's extension builds processes from finite-dimensional laws for the same reason.\nExam reflex: any “two things agree on simple sets, hence everywhere” claim is Dynkin's lemma wearing a fake mustache."]},

{id:"me10",cat:"measure",type:"concept",diff:3,title:"Independence & the 0–1 law",
body:"Independence of σ-algebras is the real definition; independent random variables = independent generated σ-algebras.\n**Kolmogorov 0–1**: any *tail* event of an independent sequence (unchanged by altering finitely many terms) has probability 0 or 1. Convergence of \\( \\sum X_n \\), \\( \\limsup \\) behavior: all deterministic in advance.",
pages:["**Why it feels magic, and is not.** The tail σ-algebra is independent of every finite prefix — hence (by a π-system argument!) independent of *itself*: \\( \\mathbb{P}(A) = \\mathbb{P}(A)^2 \\).\nApplication with teeth: “does the random walk cross zero infinitely often?” has a 0-or-1 answer before any computation; the computation (recurrence) only decides *which*."]},

{id:"me11",cat:"measure",type:"concept",diff:2,title:"Lᵖ spaces & the inequality chain",
body:"**Hölder**: \\( \\int|fg| \\le \\|f\\|_p\\|g\\|_q \\), \\( \\tfrac1p+\\tfrac1q = 1 \\); p = q = 2 is Cauchy–Schwarz; Minkowski = the triangle inequality that makes \\( \\|\\cdot\\|_p \\) a norm.\nOn probability spaces: \\( L^r \\subset L^p \\) for r > p — higher moments are stronger statements.",
pages:["**The chain you can recite.** Hölder ⇒ Cauchy–Schwarz ⇒ \\( \\mathbb{E}[XY]^2 \\le \\mathbb{E}X^2\\,\\mathbb{E}Y^2 \\) ⇒ \\( |\\rho| \\le 1 \\) ⇒ variance decompositions behave.\nAlso Lyapunov: \\( \\|X\\|_p \\) is increasing in p (finite measure) — which is exactly why “finite 4th moment” buys you concentration that “finite variance” cannot."]},

{id:"me12",cat:"measure",type:"concept",diff:3,title:"Uniform integrability",
body:"A family is UI when its tails vanish *uniformly*: \\( \\sup_n \\mathbb{E}[|X_n|\\mathbf{1}_{|X_n|>K}] \\to 0 \\).\n**The missing link**: convergence in probability + UI ⟺ convergence in \\( L^1 \\). Also exactly hypothesis (c) of optional stopping — the one the doubling paradox violates.",
pages:["**How you actually verify it.** De la Vallée-Poussin: \\( \\sup_n \\mathbb{E}[\\Phi(|X_n|)] < \\infty \\) for some superlinear Φ suffices — in practice: **a uniformly bounded (1+ε)-moment implies UI**.\nSo “bounded in L²” is the phrase that unlocks L¹ limits, OST, and martingale convergence upgrades. One checkable condition, three theorems."]},

{id:"me13",cat:"measure",type:"concept",diff:2,title:"Pushforward & LOTUS",
body:"The law of X is the pushforward \\( \\mu_X = \\mathbb{P}\\circ X^{-1} \\), and\n\\[ \\mathbb{E}[g(X)] = \\int_\\Omega g(X)\\,d\\mathbb{P} = \\int_{\\mathbb{R}} g\\,d\\mu_X. \\]\nThe “law of the unconscious statistician” is a change of variables — legal, with a proof, not a folk custom.",
pages:["**Why it earns its keep.** It licenses computing expectations from densities/CDFs without ever mentioning Ω — the daily practice of probability, formally justified.\nCombined with me09: since \\( \\mu_X \\) is pinned by the CDF, *every* expectation \\( \\mathbb{E}[g(X)] \\) is determined by F. Distribution = complete interface; Ω = implementation detail."]},

{id:"me14",cat:"measure",type:"fact",diff:3,title:"Carathéodory, in one breath",
body:"Lebesgue measure exists: define outer measure by countable interval covers, call A measurable when it **splits every set additively** (\\( \\mu^*(E) = \\mu^*(E\\cap A) + \\mu^*(E\\setminus A) \\)), and Carathéodory's theorem delivers a genuine σ-algebra and a countably additive measure.\nNon-measurable sets (Vitali) need the axiom of choice — you will never build one by accident.",
pages:["**What to retain for exams and life.** (1) The splitting condition is a *definition of good behavior*, not a property to picture. (2) Completeness: subsets of null sets are measurable — Lebesgue > Borel. (3) Every construction you meet later (product measures, Hausdorff measures) replays this outer-measure two-step.\nDepth on demand; the skeleton fits on a card."]}

]);

/* =========================================================================
   WAVE: PURE STATS & ML INTERVIEW QUESTIONS (t21+, ml19+)
   Question-type drills for concepts already covered — feeds Daily Ten & accuracy.
   ========================================================================= */
window.FEED_ITEMS = window.FEED_ITEMS.concat([

{id:"t21",cat:"stats",type:"question",diff:2,title:"“So you're 97% sure?”",
body:"Your strategy's backtest shows p = 0.03. The interviewer says: “so there's a 97% chance the edge is real.” Correct them.",
answer:"No — p is \\( \\mathbb{P}(\\text{data this extreme} \\mid H_0) \\), **not** \\( \\mathbb{P}(H_0 \\mid \\text{data}) \\).\nTo say anything about “chance the edge is real” you need a **prior** and Bayes — and if this strategy came out of a zoo of tested signals, the posterior can be far below 97%.",
pages:["**Worked base-rate reversal.** You tested 100 signals; realistically ~10 have true edge; power 80%. True positives: 8. False positives: \\( 90\\times0.05 = 4.5 \\). Among your “significant” results: \\( \\tfrac{8}{12.5} = 64\\% \\) real — with an *honest* 5% test.\nSame arithmetic as the medical-test classic (t07), now aimed at your own research process. Multiple testing (t14) is the disease; this is its bedside manner."]},

{id:"t22",cat:"stats",type:"question",diff:2,title:"Read this interval out loud",
body:"A 95% confidence interval for a Sharpe ratio comes out as [0.2, 1.4]. What exactly does “95%” attach to — and what sentence is illegal?",
answer:"It attaches to the **procedure**: over repeated samples, intervals built this way cover the truth 95% of the time.\nIllegal: “there is a 95% probability the true Sharpe lies in [0.2, 1.4]” — this realized interval either contains it or not. The probability-about-the-parameter sentence belongs to the **Bayesian credible interval**.",
pages:["**Two useful re-readings.** (1) Duality with testing: the CI is exactly the set of values a 5% test would *not* reject — wide interval = weak evidence, visualized. (2) The recipe behind most of them: estimate ± 1.96 × SE, valid by CLT.\nInterview finisher: for a strategy, an interval containing 0 is the polite way of saying “you have not shown me anything yet.”"]},

{id:"t23",cat:"stats",type:"question",diff:3,title:"MLE, but the derivative lies",
body:"X₁,…,Xₙ iid Uniform(0, θ). Find the MLE of θ. Why does the usual “set the score to zero” recipe fail, and what is remarkable about this estimator?",
answer:"Likelihood \\( \\theta^{-n}\\mathbf{1}\\{\\theta \\ge \\max X_i\\} \\) is **decreasing** in θ — the max sits at the boundary: \\( \\hat\\theta = \\max_i X_i \\). No zero-derivative anywhere.\nIt is biased low (\\( \\mathbb{E}[\\max] = \\tfrac{n}{n+1}\\theta \\)); the corrected \\( \\tfrac{n+1}{n}\\max \\) has variance \\( O(n^{-2}) \\) — **faster than the usual** \\( n^{-1} \\).",
pages:["**Why superefficiency is allowed here.** The support depends on θ — a *non-regular* model, so Cramér–Rao (t04) simply does not apply; its hypotheses (differentiability, common support) fail.\nCompare with method of moments \\( 2\\bar X \\): variance \\( \\tfrac{\\theta^2}{3n} \\), versus \\( \\tfrac{\\theta^2}{n(n+2)} \\) for the corrected max — an entire order of magnitude. Moral for interviews: check regularity *before* quoting information bounds."]},

{id:"t24",cat:"stats",type:"question",diff:3,title:"Earn the hat: derive OLS",
body:"Derive \\( \\hat\\beta \\) for the linear model \\( y = X\\beta + \\varepsilon \\), give its geometric meaning, and state precisely in what sense it is “best”.",
answer:"Minimize \\( \\|y - X\\beta\\|^2 \\): gradient zero gives the **normal equations** \\( X^\\top X\\hat\\beta = X^\\top y \\Rightarrow \\hat\\beta = (X^\\top X)^{-1}X^\\top y \\).\nGeometry: \\( X\\hat\\beta \\) is the **orthogonal projection** of y onto col(X); residuals ⟂ every column.\n**Gauss–Markov**: with exogeneity and homoscedastic, uncorrelated errors, OLS is BLUE — minimum variance among *linear unbiased* estimators. Normality nowhere required.",
pages:["**What BLUE does not promise.** \\( \\operatorname{Var}(\\hat\\beta) = \\sigma^2(X^\\top X)^{-1} \\) — near-collinear columns make \\( X^\\top X \\) near-singular and the variance explodes (condition number, l-cards).\nAnd “best linear unbiased” loses to *biased* rivals on MSE: ridge (t11) and shrinkage (t20) trade a little bias for a lot of variance. Say that unprompted and the follow-up questions get friendlier."]},

{id:"t25",cat:"stats",type:"question",diff:3,title:"Standard error of the median",
body:"Everyone knows SE(mean) = σ/√n. What is the standard error of the sample **median**, and how would you actually get it in practice?",
answer:"Asymptotically \\( \\sqrt{n}(\\hat m - m) \\to \\mathcal{N}\\big(0, \\tfrac{1}{4f(m)^2}\\big) \\) — it depends on the **density at the median**, which you rarely know.\nGaussian case: \\( SE \\approx 1.25\\,\\sigma/\\sqrt{n} \\) — the median is only \\( 2/\\pi \\approx 64\\% \\) efficient.\nPractice: **bootstrap it** (t13) — this is the canonical “no clean formula” example.",
pages:["**Where the formula comes from.** \\( \\mathbb{P}(\\hat m \\le x) \\) is a binomial statement about how many observations fall below x; apply the CLT to that count and the delta method through the CDF: the derivative \\( f(m) \\) appears in the denominator — flat density at the center = wobbly median.\nThe trade being priced: the median throws away magnitude information (hence the \\( 2/\\pi \\)) and buys a **50% breakdown point** versus 0% for the mean. Robustness is never free; here is its exact price tag."]},

{id:"t26",cat:"stats",type:"question",diff:2,title:"Delta method, applied",
body:"X̄ is the mean of n iid samples with mean μ and variance σ². Give the asymptotic variances of \\( \\bar X^2 \\) and of \\( 1/\\bar X \\). Any warnings?",
answer:"\\( g(\\bar X) \\) has asymptotic variance \\( g'(\\mu)^2\\sigma^2/n \\):\n**\\( \\bar X^2 \\)** → \\( 4\\mu^2\\sigma^2/n \\).  **\\( 1/\\bar X \\)** → \\( \\sigma^2/(\\mu^4 n) \\).\nWarnings: \\( 1/\\bar X \\) detonates as μ → 0 (the linearization has nothing to hold onto), and if \\( g'(\\mu) = 0 \\) the first-order term dies — different limit, different rate.",
pages:["**The degenerate case, since they will ask.** If \\( g'(\\mu)=0 \\) (e.g. \\( g(x)=x^2 \\) at μ = 0): \\( n\\,g(\\bar X) \\to \\tfrac{\\sigma^2}{2}g''(\\mu)\\,\\chi^2_1 \\)-type limits — rate n, not √n, and a skewed distribution.\nFinance sighting: variance of estimated *ratios* (Sharpe = mean/vol) is delta method with two moving parts — the classic \\( \\operatorname{Var}(\\widehat{SR}) \\approx \\tfrac{1 + SR^2/2}{n} \\) formula is exactly this machinery."]},

{id:"t27",cat:"stats",type:"question",diff:2,title:"Why does lasso hit exact zeros?",
body:"Ridge shrinks coefficients; lasso *kills* some outright. Explain precisely why — geometry and formula.",
answer:"**Geometry**: minimize the loss over \\( \\|\\beta\\|_1 \\le t \\): the ℓ¹ ball is a diamond with **corners on the axes**; expanding loss contours typically touch a corner first → exact zeros. The ℓ² ball is smooth — tangency almost never lands on an axis.\n**Formula** (orthonormal design): lasso soft-thresholds \\( \\hat\\beta_j = \\operatorname{sign}(z_j)(|z_j| - \\lambda)^+ \\); ridge rescales \\( z_j/(1+\\lambda) \\). A threshold versus a haircut.",
pages:["**Third reading: priors.** Lasso = MAP with **Laplace** prior (sharp peak at 0 — mass insists on exact sparsity); ridge = MAP with **Gaussian** prior (round shoulders — shrink everything, kill nothing).\nPractical corollaries: lasso struggles with correlated groups (picks one arbitrarily — elastic net exists for this), and the λ that predicts best is not the λ that selects variables best. Two goals, two tunings."]},

{id:"t28",cat:"stats",type:"question",diff:3,title:"The best possible test",
body:"Simple H₀ vs simple H₁. What is the most powerful test at level α — and why can nothing beat it?",
answer:"**Neyman–Pearson**: reject when the likelihood ratio \\( \\tfrac{f_1(x)}{f_0(x)} \\) exceeds a threshold chosen to make the size α. Full stop.\nWhy optimal: any competitor of the same size must swap some high-ratio region for low-ratio region — each swap buys equal H₀-probability but strictly less H₁-probability. An exchange argument, not magic.",
pages:["**The recipe at scale.** Composite hypotheses → the likelihood-**ratio test** statistic \\( \\Lambda = 2(\\ell_1 - \\ell_0) \\), and **Wilks**: under H₀, \\( \\Lambda \\to \\chi^2_k \\) with k = number of restrictions — the engine behind half of applied testing.\nQuant echo: “is the more complex model worth it?” = LRT; and the exchange argument is literally portfolio optimization — spend your α-budget where the likelihood ratio (edge per unit of size) is highest."]},

{id:"t29",cat:"stats",type:"question",diff:2,title:"When the bootstrap lies",
body:"The bootstrap is your default for hard standard errors (t25). Name the situations where it quietly fails — with the canonical example.",
answer:"Fails for: **extremes** (max/min), **heavy tails** (infinite variance), **dependent data** (need block bootstrap), boundary parameters, and tiny n.\nCanonical: bootstrapping the **maximum** — the resampled max equals the sample max with probability \\( 1-(1-\\tfrac1n)^n \\to 1 - e^{-1} \\approx 63\\% \\): a spike, not the true extreme-value distribution.",
pages:["**Why extremes break it.** The bootstrap world's support ends at the observed max — it cannot imagine anything larger, but the true sampling distribution of the max lives exactly there. (Same 63% as the “fraction of distinct cards in a resample” fact — one identity, two costumes.)\nFixes worth naming: m-out-of-n bootstrap, parametric bootstrap with a fitted tail (EVT), block/stationary bootstrap for time series. “Bootstrap, but check the regularity conditions” is the senior answer."]},

{id:"t30",cat:"stats",type:"question",diff:2,title:"The peeking problem",
body:"Your A/B test dashboard updates live and you will “just stop when it hits p < 0.05.” What is wrong, how bad is it, and what are the honest fixes?",
answer:"Each peek is another chance for noise to cross the line: **type I error inflates** — ~14% with five looks, and with unlimited peeking a null result is *guaranteed* to look significant eventually (law of the iterated logarithm: the z-stat crosses any fixed bar infinitely often).\nFixes: fix n in advance; **alpha-spending** boundaries (O'Brien–Fleming); or always-valid inference (e-values / confidence sequences).",
pages:["**The martingale reading.** “Test until significant, then stop” is the doubling strategy (s07) in statistical clothing — optional stopping cashing in on fluctuations. The cure is the same mathematics: e-values are nonnegative supermartingales (a test *is* a bet against H₀), and Ville's inequality is what makes stopping anytime legal.\nYour StatApp conformal work lives next door: validity guarantees that survive adaptivity are the whole modern game."]},

{id:"ml19",cat:"mlai",type:"question",diff:2,title:"Logistic regression, from scratch",
body:"Write the loss for logistic regression, derive its gradient, and explain why nobody fits it with squared error.",
answer:"NLL: \\( -\\sum_i [y_i\\log p_i + (1-y_i)\\log(1-p_i)] \\), \\( p_i = \\sigma(x_i^\\top\\beta) \\).\nGradient: \\( \\nabla = X^\\top(p - y) \\) — residuals times features, formally identical to OLS's normal equations. **Convex** (Hessian \\( X^\\top W X \\succeq 0 \\)).\nSquared error + sigmoid = non-convex with saturated, vanishing gradients — and it is not the right likelihood for Bernoulli data anyway.",
pages:["**The failure they love to ask.** Perfectly separable classes: the likelihood keeps improving as \\( \\|\\beta\\| \\to \\infty \\) — coefficients diverge, fitted probabilities go to 0/1. Cure: regularization (a Gaussian/Laplace prior makes the MAP finite).\nBonus identity: the gradient form \\( X^\\top(p-y) \\) is why logistic regression is a one-layer neural net with cross-entropy — same update, smaller wardrobe."]},

{id:"ml20",cat:"mlai",type:"question",diff:2,title:"The kernel trick, in one line",
body:"State the kernel trick precisely. What condition must k satisfy, and what is the catch?",
answer:"Any algorithm that touches data **only through inner products** can replace \\( \\langle x, x'\\rangle \\) by \\( k(x,x') = \\langle \\phi(x), \\phi(x')\\rangle \\) — computing in a huge (even infinite) feature space without ever building φ.\nCondition: k **positive semidefinite** (Mercer) — every Gram matrix ⪰ 0.\nCatch: you now pay in n, not d — \\( O(n^2) \\) Gram matrices, \\( O(n^3) \\) solves.",
pages:["**Concrete instances.** RBF kernel = infinite-dimensional feature map; SVM dual sees only the Gram matrix; kernel ridge regression = GP posterior mean (ml01) — one identity connecting three courses.\nThe honest limitation: kernels stopped scaling, which is (part of) why deep nets — *learned* feature maps φ — took over when n exploded. Say both halves and you sound like you were there."]},

{id:"ml21",cat:"mlai",type:"question",diff:2,title:"What does AUC actually measure?",
body:"Define ROC-AUC in one sentence — the probabilistic one. When is it the wrong metric?",
answer:"AUC = \\( \\mathbb{P}(\\text{score of a random positive} > \\text{score of a random negative}) \\) — pure **ranking** quality, threshold-free (it is the normalized Mann–Whitney U).\nWrong metric when: classes are heavily imbalanced and you care about precision (use PR curves), when **calibration** matters (sizing! — ml15), or when only one operating threshold will ever be used.",
pages:["**Why imbalance fools ROC.** FPR divides by the (huge) negative class: 1000 false alarms among 10⁶ negatives is FPR 0.1% — the ROC looks angelic while precision is garbage. PR curves divide by *your alerts*, which is what a desk experiences.\nInterview crisp: “AUC answers *can it rank*; calibration answers *can I trust the number*; precision answers *can I act on it*. Three different questions.”"]},

{id:"ml22",cat:"mlai",type:"question",diff:2,title:"k-means vs GMM",
body:"Compare k-means and Gaussian mixtures: objectives, algorithms, and the exact sense in which one is a special case of the other.",
answer:"k-means minimizes within-cluster sum of squares via hard assign–update; GMM maximizes likelihood via **EM** with soft responsibilities, learning weights and covariances.\nThe bridge: k-means is EM on a GMM with **equal spherical covariances in the limit σ → 0** — responsibilities harden into nearest-centroid assignments.",
pages:["**What each buys you.** GMM: ellipsoidal clusters, soft memberships (useful downstream), a likelihood for model selection — at the price of more parameters and degenerate traps (a component collapsing onto one point: likelihood → ∞; fix with covariance floors/priors).\nk-means: fast, simple, but scale-sensitive (standardize!) and init-sensitive — **k-means++** seeding is the two-line fix that makes it respectable. EM's guarantee, for either: the objective improves monotonically every iteration; convergence to *local* optima only."]},

{id:"ml23",cat:"mlai",type:"question",diff:3,title:"99% accuracy, 1% positives",
body:"Your fraud model reports 99% accuracy on a dataset with 1% fraud. The PM is thrilled. Walk through what you check and what you change.",
answer:"“Always predict clean” scores 99% — accuracy is **vacuous** here.\nCheck: confusion matrix, precision/recall at realistic thresholds, PR-AUC, calibration.\nChange: pick the threshold from **costs** (missed fraud vs false alarm), reweight the loss or resample — and evaluate on the metric the business actually pays.",
pages:["**Two equivalences worth stating.** (1) Moving the decision threshold ≡ changing class weights in the loss — pick whichever is operationally cleaner, they trace the same frontier. (2) Resampling tricks (SMOTE & co.) must live *inside* the CV folds (ml09) or you synthesize leakage — a beautifully modern way to fake a result.\nEnd on: with 1% base rates, even a good model yields mostly false alarms at high recall (t07's arithmetic) — the honest deliverable is a precision–recall *menu*, priced in analyst hours."]},

{id:"ml24",cat:"mlai",type:"question",diff:3,title:"Condition a Gaussian",
body:"X = (X₁, X₂) jointly Gaussian. State the distribution of X₁ given X₂ = x₂ — the formula an entire industry runs on.",
answer:"\\[ X_1 \\mid X_2{=}x_2 \\;\\sim\\; \\mathcal{N}\\big(\\mu_1 + \\Sigma_{12}\\Sigma_{22}^{-1}(x_2 - \\mu_2),\\; \\Sigma_{11} - \\Sigma_{12}\\Sigma_{22}^{-1}\\Sigma_{21}\\big). \\]\nMean: linear in the observation (the regression). Covariance: prior minus explained — the **Schur complement**, and it does not depend on x₂.\nThis single identity *is* GP regression (ml01), the Kalman filter update, and Gaussian imputation.",
pages:["**How to re-derive it under pressure.** Write the joint density, complete the square in x₁; or cleaner: \\( X_1 - \\Sigma_{12}\\Sigma_{22}^{-1}X_2 \\) is uncorrelated with X₂ (check it), hence independent (Gaussian!), hence its conditional = its marginal — read off mean and variance. Two lines, no matrix inversion lemma heroics.\nThe interview kicker: “variance shrinks by \\( \\Sigma_{12}\\Sigma_{22}^{-1}\\Sigma_{21} \\) whatever we observe” — information reduces uncertainty deterministically in Gaussian land; only the *location* is data-dependent. That is why GP error bars (ml01) ignore y."]}

]);

/* =========================================================================
   PACK: STATS/ML INTUITION (in) — new category, zero calculation required.
   Verbal reasoning drills: model knowledge, diagnosis, interview intuition.
   ========================================================================= */
window.FEED_ITEMS = window.FEED_ITEMS.concat([

{id:"in01",cat:"intuition",type:"question",diff:2,title:"Great in-sample, dead out-of-sample",
body:"Your model shines in backtest, flops live. Walk the interviewer through your differential diagnosis — in the order you would actually check.",
answer:"Cheapest and most damning first: **(1) plumbing bug** (misaligned dates, wrong labels), **(2) leakage** — “too good to be true” in-sample is its signature, **(3) overfitting** (was train already ≫ validation?), **(4) selection bias** — you picked this model among many tries, **(5) regime change** — the world moved.\nA diagnosis, not a shrug: each cause leaves different fingerprints.",
pages:["**The fingerprints.** Leakage: eerily good backtest, collapse *exactly* at deployment. Overfit: the train/validation gap was visible before you looked away. Selection: great chosen run, mediocre siblings. Drift: worked live for a while, then faded gently.\nAsking “which failure signature do I see?” instead of “why is ML hard?” is the difference the interviewer is listening for."]},

{id:"in02",cat:"intuition",type:"question",diff:1,title:"Overfitting, for a PM",
body:"Explain overfitting to a portfolio manager — no math allowed. Then: how do you *detect* it?",
answer:"It is **memorizing past answers instead of learning the subject**: a tailor fitting a suit to every wrinkle of one mannequin — perfect on the mannequin, absurd on a human.\nDetection: grade the model on questions it has never seen (held-out data, later periods), and watch the gap between “knows the past” and “predicts the future”.",
pages:["**The two dials.** Flexibility of the model vs amount of data: a very flexible model with little data *will* stitch itself to noise. You fix it by adding data, removing flexibility, or forbidding overconfidence (regularization).\nThe PM-grade test: “would this rule have survived a year it has never met?” If nobody can answer, that is the answer."]},

{id:"in03",cat:"intuition",type:"question",diff:2,title:"Why ensembles work — and when they don't",
body:"Averaging several models usually beats each one. Why? And in what situation does averaging buy you nothing?",
answer:"Because models that are wrong **in different ways** partially cancel each other's errors — wisdom of crowds, applied to algorithms.\nIt buys nothing when the errors are **shared**: same leaky feature, same biased data, same blind spot. Averaging correlated mistakes averages the mistake, not away.",
pages:["**Where diversity actually comes from.** Different data slices (bagging), different features, different model families, different horizons, even different random seeds — each is a lever for decorrelating errors.\nAnd the quant echo: a portfolio of strategies obeys the same law. Ten copies of the same bet is one bet with confidence issues."]},

{id:"in04",cat:"intuition",type:"question",diff:2,title:"More data or better model?",
body:"You can spend a month collecting more data or a month improving the model. How do you decide — from the couch, without running anything?",
answer:"Diagnose which regime you are in. Model already fits training **poorly** → you are bias-limited: more data repeats the same mistake in higher resolution; improve the model/features.\nTraining great but validation lags → variance-limited: **more data** (or regularization) is the medicine.\nThought experiment: “if the dataset doubled, would validation move?” Your honest guess is the answer.",
pages:["**Learning curves, imagined.** Picture train and validation error as data grows: converging *high* = a ceiling (bias — the model cannot express the truth); a persistent *gap* = thirst (variance — it could, with more examples).\nThird option people forget: **better data** — cleaner labels, smarter coverage — often beats both."]},

{id:"in05",cat:"intuition",type:"question",diff:1,title:"Defend regularization",
body:"“Your regularized model fits the training data *worse*. Why would I want that?” Answer the PM.",
answer:"Training error measures memory; we are paid for the **next** exam. Regularization forbids the model from believing one dataset too hard — it gives up a little truth-fitting to refuse a lot of noise-fitting.\nIf validation improves while training worsens, that is not a bug. That is the entire point, working.",
pages:["**One idea, five costumes.** Penalties, priors, early stopping, dropout/noise, data augmentation — all say the same sentence: “stay simple unless the evidence insists.”\nRecognizing them as one idea is what separates “knows the tricks” from “understands the principle” in an interview."]},

{id:"in06",cat:"intuition",type:"question",diff:2,title:"You added a feature; test got worse",
body:"A new feature improved validation, then test performance dropped. Give three mechanisms — no formulas.",
answer:"**(1) It is noise wearing a costume**: extra flexibility for the model to hallucinate patterns.\n**(2) Multiple testing**: you auditioned many features; this one won validation by luck, and luck does not generalize.\n**(3) Hygiene breach**: the feature (or its preprocessing) peeked at data it should not have — validation was flattered, test tells the truth.",
pages:["**The entry policy that survives.** A feature earns its seat with: improvement that is *stable* across folds and periods, a reason to exist (an economic or causal story), and survival after its correlated cousins are removed.\n“Every feature is guilty until proven robust” is the tone that gets you hired."]},

{id:"in07",cat:"intuition",type:"question",diff:2,title:"“Correlation 0.9 — they move together”",
body:"Daily correlation between two assets is 0.9. A colleague concludes they basically move together, so one hedges the other. Push back, purely with reasoning.",
answer:"Three pushbacks: correlation is **horizon-specific** (0.9 daily says little about weeks or years); it is an **average over calm days** — the hedge is needed precisely in the tail, where correlations famously misbehave; and correlation ignores **magnitude** — moving together in sign is not moving together in size.\nAlso: measured on the past. Regimes expire.",
pages:["**Two mental images.** Crisis: “all correlations go to one” — diversification evaporates when you need it. And the drunk with a dog: they wander apart step by step (weak short-horizon link) yet never separate (tied at long horizon) — or the reverse: high daily correlation while slowly drifting apart in levels.\nSign co-movement, size co-movement, level co-movement: three different claims. Say which one you mean."]},

{id:"in08",cat:"intuition",type:"question",diff:2,title:"Accuracy 90% or honest 60%?",
body:"Model A: 90% accuracy. Model B: probabilities that are only 60% confident but perfectly **calibrated**. Which do you want on a trading desk, and why?",
answer:"For **sizing**, B. A desk does not act on labels, it acts on *how much* — and betting size needs probabilities you can take literally. A calibrated 60% is a tradable edge with a known size; an uncalibrated 90% cannot tell you how hard to press, and may be a base-rate illusion anyway.\nA is fine only when the action is binary and mistakes cost the same in both directions.",
pages:["**Two separate skills.** Discrimination: can it *rank* good vs bad? Calibration: can I *trust the number*? A model can ace one and flunk the other.\nDesk translation: discrimination finds the trade, calibration sizes it. Ask which one a metric measures before worshiping it."]},

{id:"in09",cat:"intuition",type:"question",diff:2,title:"“Down three days — a bounce is due”",
body:"Respond to: “the market fell three days in a row, so statistically a rebound is due.”",
answer:"If daily moves are roughly independent, that is the **gambler's fallacy** — the market keeps no fairness debt; the coin does not remember.\n“Due” is only meaningful with a **mechanism**: forced flows, overreaction, a finite pool being drawn down. That is an empirical claim about *this* horizon, to be argued with evidence — never with the arithmetic of fairness.",
pages:["**The clean separation.** Ask: “is there a reason returns should anticorrelate at this horizon?” — sometimes yes (microstructure bounce, panic reversal), often no.\nAnd do not confuse it with regression to the mean: *measured extremes* revert because measurements contain luck (in10) — that is about noise in the ruler, not memory in the market."]},

{id:"in10",cat:"intuition",type:"question",diff:1,title:"The star manager's second year",
body:"A fund returns +40% and tops the rankings; next year it is mediocre. “He lost his touch”?",
answer:"Probably not — **regression to the mean**. Topping the rankings selects for skill *and* a lucky draw; next year keeps the skill and redraws the luck. The extraordinary part was partly noise, and noise does not renew its subscription.\nNo touch was lost. The luck simply went home.",
pages:["**Same pattern, everywhere.** Sophomore slump, the magazine-cover curse, the best backtest decaying live, tall fathers' shorter sons — select on an extreme outcome and the sequel disappoints by construction.\nProtective habits: judge process over outcome, use windows long enough for skill to outvote luck, and expect your own champion strategy to obey the same law (in21)."]},

{id:"in11",cat:"intuition",type:"question",diff:3,title:"Winning every sector, losing overall",
body:"A strategy is profitable within every single sector, yet the total book loses money. Possible? What is going on?",
answer:"Possible — **Simpson's paradox** in the wild. The aggregate mixes in something no sector sees: shifting weights over time (big exposure exactly in the bad periods), or a cross-sector timing/allocation effect. Per-group truths do not sum to the aggregate truth when the *mixture* itself is doing the damage.\nCheck: re-run attribution with weights held fixed; slice by time.",
pages:["**The universal vaccine.** Whenever group-level and aggregate conclusions disagree, ask: *what is the aggregate holding constant that the groups are not?* — usually the answer is “the weights,” and the weights are a decision someone made.\nSame paradox runs through admissions data and medical trials; recognizing it across costumes is the skill."]},

{id:"in12",cat:"intuition",type:"question",diff:2,title:"“Top feature ⇒ let's trade it”",
body:"Your model says X is its most important feature. The PM proposes trading on X directly. What do you say?",
answer:"Importance measures the **model's reliance**, not the world's mechanism. X may be a proxy riding a correlation; its twin features may have split the credit arbitrarily; its usefulness may be one regime deep.\nAnd trading X naked throws away the rest of the model — the ensemble of conditions under which X meant something.",
pages:["**What would upgrade the claim.** Stability of X's role across periods; the model still works when X's correlated cousins are removed; an economic story for *why* X should matter; ideally, some natural experiment.\nOne sentence to keep: “the model tells you where it looks, not why the world moves.”"]},

{id:"in13",cat:"intuition",type:"question",diff:1,title:"Why nonlinearities?",
body:"Why do neural networks need nonlinear activations at all?",
answer:"Because a stack of linear layers **collapses into one linear layer** — depth would add parameters and no expressiveness. The nonlinearity lets each layer bend space, so later layers can compose and reuse what earlier layers built.\nMental image: folding a sheet of paper so that far-apart points end up neighbors — linear maps can stretch and rotate the sheet, only folds change what is reachable.",
pages:["**Then why depth, not just width?** Composition: edges → textures → parts → objects. Reusing sub-features across a hierarchy is exponentially more economical than building every concept from scratch in one wide layer.\nDepth is a prior that the world is compositional — which, conveniently, it is."]},

{id:"in14",cat:"intuition",type:"question",diff:2,title:"Why does dropout work?",
body:"Randomly deleting neurons during training sounds like sabotage. Why does it *help*?",
answer:"It forbids **co-dependence**: no neuron can rely on a specific partner being present, so features must be individually meaningful and redundant — a team where anyone might be absent trains generalists.\nSecond reading: each step trains a different thinned sub-network; testing with all neurons is like averaging that whole implicit **ensemble** (in03, for free).",
pages:["**The family resemblance.** Dropout is noise-as-regularizer — same clan as data augmentation, SGD noise, and bagging. All inject controlled randomness so the model cannot memorize one brittle pathway.\nCaveats worth saying: less useful in small networks and some modern architectures — a tool, not a sacrament."]},

{id:"in15",cat:"intuition",type:"question",diff:2,title:"Nearest neighbors in 1000 dimensions",
body:"kNN works nicely in 2D. What quietly breaks in very high dimensions?",
answer:"The **curse of dimensionality**: with many dimensions, everyone is roughly equally far from everyone — distances concentrate, and “nearest” stops carrying information. Data also becomes hopelessly sparse: locality dies because no one has neighbors.\nFixes: reduce dimensions, learn a metric, or use models whose structure replaces raw proximity.",
pages:["**Two images to keep.** In high-D, volume flees to the corners and shells — the “center” is empty; and to maintain the same local density, the data requirement grows *exponentially* with dimension.\nDeep learning's answer: learn a low-dimensional representation where proximity means something again — kNN in a learned space is suddenly respectable."]},

{id:"in16",cat:"intuition",type:"question",diff:2,title:"Why three datasets?",
body:"Train, validation, test: why the three-way split — and what exactly dies the day you tune on test?",
answer:"Validation is the set you are **allowed to consult repeatedly** — and each consultation burns it a little, because you are slowly fitting its noise. Test exists to answer one question, once: “what happens on data nobody optimized against?”\nTune on test and that question becomes unanswerable — your estimate turns into hand-picked luck, and you will meet reality unarmed.",
pages:["**Why peeking burns.** Every adaptive look is another lottery ticket on the validation noise — pick the best of many looks and you have selected noise (in21's logic). Hence rituals: touch test once, lock away holdout years, pre-register the final run.\nHygiene sounds bureaucratic until the day it is the only thing between you and a fictional Sharpe."]},

{id:"in17",cat:"intuition",type:"question",diff:2,title:"Backtest Sharpe: 3",
body:"A junior shows you a backtest with Sharpe 3. What runs through your head, in order?",
answer:"The craft's prior: **extraordinary Sharpe is ordinary bug**. In order: lookahead/leakage, costs and impact ignored, survivorship in the data, selection (best of how many tries?), a short or freakish window, and only then — maybe — an edge.\nCongratulations come after the autopsy, not before.",
pages:["**What would actually move you.** Honest costs and capacity; robustness across time slices and parameter neighborhoods; the *other* trials disclosed; out-of-sample periods never touched; and best of all, live or paper trading.\nSay “great — let's try to kill it” and you have given the correct answer in four words."]},

{id:"in18",cat:"intuition",type:"question",diff:2,title:"The prosecutor's fallacy",
body:"“The evidence would occur in only one innocent person in a million — so the defendant is almost surely guilty.” Locate the flaw, using nothing but reasoning.",
answer:"It swaps two different questions: *how rare is the evidence if innocent* versus *how likely is innocence given the evidence*. In a city of ten million, one-in-a-million rarity still means a handful of innocent matches — the defendant is one of several candidates, not a certainty.\n**Denominators first**: how many people could this filter have caught?",
pages:["**The same swap, in your world.** Medical tests read on healthy populations (t07), and backtests read as “the strategy is 99.9% real” (t21) — all confuse the rarity of a coincidence with the probability of the story.\nThe portable reflex: before believing any striking match, count the crowd it was fished from."]},

{id:"in19",cat:"intuition",type:"question",diff:2,title:"Conditional independence, one story",
body:"Explain conditional independence with a single everyday story — and name the reverse trap.",
answer:"Ice cream sales and drownings rise and fall together — but *given that it is summer*, knowing ice cream sales tells you nothing new about drownings. A **common cause** made them look connected; conditioning on it dissolves the link.\nReverse trap: conditioning can also **create** dependence — among celebrities (selected for fame), talent and looks become negatively related, because either one suffices to get in.",
pages:["**Why this one story carries so far.** “What should I control for?” is the whole art of regression and causal graphs: condition on common causes (good), do not condition on common *effects* — selection — (bad, and everywhere: hired candidates, surviving funds, published results).\nMost data you will ever see was conditioned on survival before it reached you."]},

{id:"in20",cat:"intuition",type:"question",diff:2,title:"Sell a prior to a frequentist",
body:"Your PM distrusts “Bayesian assumptions.” With 30 data points on a new product, defend using a prior — verbally.",
answer:"With 30 points, “no assumptions” is itself an assumption: that this tiny sample deserves total trust. A prior is domain knowledge made **explicit and arguable** — it stabilizes wild estimates by pulling them toward what similar situations have taught us.\nAnd they already believe in priors: the regularization in every model they approve *is* one, wearing a lab coat.",
pages:["**Borrowing strength, the honest pitch.** Early-season batting averages predicted better by blending with the league average; a new strategy's Sharpe blended with the family of similar strategies. Shrinkage wins precisely when data is thin and estimates are many.\nThe honest caveat to volunteer: priors move answers — so show the sensitivity. Transparency is what makes it science rather than opinion."]},

{id:"in21",cat:"intuition",type:"question",diff:2,title:"Best of 100, p < 0.001",
body:"“We screened 100 signals; the winner is significant at 0.1%.” Why is that still suspect — no formulas allowed?",
answer:"Because the p-value pretends this signal was the **only one auditioned**. Pick the best of a hundred noisy tries and it will look extreme *by construction* — you measured the champion of luck with a ruler built for a single pre-registered idea.\nWhat matters is the false-alarm rate of the **procedure** — “screen many, keep the max” — not of the survivor.",
pages:["**Cures, in order of honesty.** Disclose all trials; penalize the search; and above all re-test the champion on data the contest never touched — expecting some decay (the winner's curse of research).\nThis is in10's regression to the mean pointed at yourself: your best idea was partly lucky *because you selected it*."]},

{id:"in22",cat:"intuition",type:"question",diff:1,title:"Exploration vs exploitation, at dinner",
body:"Explain the exploration–exploitation trade-off with a restaurant story, and state when to lean each way.",
answer:"Your favorite restaurant is a guaranteed 8/10; the new place is unknown — probably worse, possibly a 10. Exploiting eats well tonight; exploring buys **information** that pays over every future dinner.\nLean exploratory when horizons are long and uncertainty is high; lean exploitative as time runs short or knowledge saturates. Rule of thumb: be optimistic about what you have not tried — try things whose *plausible* best case is high.",
pages:["**Where the same trade lives.** Bandits and UCB (your CREST summer — optimism formalized), Bayesian optimization's acquisition functions, hiring, research portfolios, even careers.\nHuman failure modes, both directions: settling too early on a “good enough” option, or novelty-chasing forever without cashing in. The math exists precisely because instinct picks wrong."]},

{id:"in23",cat:"intuition",type:"question",diff:2,title:"GP or neural net?",
body:"You get one modeling tool for the task. Talk through when you reach for a Gaussian process and when for a neural network — decision logic only.",
answer:"**GP** when data is small or expensive, the function is smooth-ish, and you need uncertainty you can *act on* — active learning, Bayesian optimization, risk-aware decisions.\n**Neural net** when data is huge and raw (images, text, order flow) and the features themselves must be learned.\nThe deciding questions: how many points, how weird the inputs, and does anyone downstream consume error bars?",
pages:["**Middle grounds worth naming.** Deep kernel learning (net learns the representation, GP supplies the uncertainty), ensembles for rough NN uncertainty, and the honest observation that in low data the GP's assumptions *are* the information.\nInterview finisher: “the GP's chief export is calibrated doubt; the net's is learned representation. I choose by which one the problem is starving for.”"]},

{id:"in24",cat:"intuition",type:"question",diff:1,title:"Why quants live in logs",
body:"Why do returns, prices, and half of quant life get log-transformed? Explain without writing a formula.",
answer:"Because markets are **multiplicative**: what matters is “up 2%”, not “up 2 dollars”, and doubling is the same event at any level. Logs turn multiplication into addition — compounding becomes stacking, percentage thinking becomes linear thinking.\nBonus effects: big and small values share one scale, up and down moves become symmetric, and variance stops growing with the level.",
pages:["**When not to log.** True zeros or negatives, genuinely additive quantities, and when stakeholders need answers in level units.\nAnd the mental-math tie-in: thinking in logs is what makes orders-of-magnitude estimation (mm12) and calibrated intervals (mk08) feel easy — one habit feeding three skills."]},

{id:"in25",cat:"intuition",type:"concept",diff:2,title:"The map of model families",
body:"Four kingdoms, one line each.\n**Linear**: additive dose–response; extrapolates; readable.\n**Trees**: thresholds and interactions; scale-proof; cannot extrapolate.\n**Kernels/GP**: similarity plus smoothness; honest uncertainty; chokes on huge n.\n**Nets**: learned features; insatiable for data; unbeatable on raw perception.\nModel choice = matching the family's **prejudice** to the problem's shape.",
pages:["**Each kingdom's signature failure.** Linear misses interactions and curves; trees staircase smooth trends and freeze outside the data's range; kernels melt computationally as n grows; nets hallucinate confidently when data is thin.\nSaying the failure modes unprompted is what makes “which model would you use?” a conversation instead of a quiz."]},

{id:"in26",cat:"intuition",type:"concept",diff:2,title:"The leakage bestiary",
body:"Five ways the future sneaks into training:\n**Target leakage** — a feature secretly contains the answer.\n**Temporal** — information stamped after the prediction moment.\n**Preprocessing** — statistics computed on all the data, splits included.\n**Group** — the same entity strays across train and test.\n**Near-duplicates** — the test question was in the textbook.\nThe universal tell: results too good, then live disappointment.",
pages:["**Habits that keep you clean.** Split *first*, then do everything inside; timestamp every field; and interrogate each feature with one question: “would I truly know this at prediction time?”\nLeakage is the most common cause of fictional alpha in the wild — which makes this checklist, verbatim, a strong interview answer."]},

{id:"in27",cat:"intuition",type:"concept",diff:2,title:"Learning curves as X-ray",
body:"Imagine error versus training-set size, two curves: train and validation.\nCurves **converge but high** → bias: the model has hit its ceiling; more data just repeats the lesson. Get a richer model or better features.\nCurves **gapped** → variance: the model is thirsty; more data (or regularization) closes the gap.\nOne imagined plot answers “what should I do next?”",
pages:["**Second readings.** The slope of the validation curve says whether data still pays — flat means stop collecting and start inventing. The same X-ray works with capacity on the x-axis: watch where validation turns back up.\nLearning curves are the cheapest honest advisor a modeler has; most people never draw them."]},

{id:"in28",cat:"intuition",type:"concept",diff:2,title:"Three kinds of not-knowing",
body:"**Aleatoric**: the world's own dice — irreducible; more data will not shrink it.\n**Epistemic**: your ignorance — shrinks with data, screams in regions you have never visited.\n**Model**: the family itself is wrong — no amount of data within the family fixes it.\nDecisions treat them differently: diversify against the first, learn against the second, stay humble (ensembles, stress tests) against the third.",
pages:["**Desk translation.** Aleatoric = position sizing and diversification; epistemic = trade smaller where the model has never been, and go collect that data; model = why disagreeing models are information, not annoyance.\nA forecast that cannot say *which kind* of uncertain it is will be trusted exactly once."]},

{id:"in29",cat:"intuition",type:"concept",diff:2,title:"Reading residuals like tea leaves",
body:"Your errors are the model whispering what it lacks.\nErrors grow with the level → the world is multiplicative; think logs.\nErrors clump in time → missing dynamics or regimes.\nErrors tilt along some variable → a feature or a curve you refused to add.\nA few monstrous errors → heavy tails; robustify before averaging.",
pages:["**The meta-habit.** Always study *where* you are wrong, not just how much: error autopsies beat metric worship, and every pattern in residuals is a to-do item wearing a disguise.\nThe interview version: “after fitting, the first thing I look at is the structure of my mistakes.” Few juniors say it; all seniors do it."]},

{id:"in30",cat:"intuition",type:"concept",diff:2,title:"Nonstationarity survival kit",
body:"The world drifts; your model is a perishable good.\nKit: weight recent data more; evaluate on **rolling** windows, never one golden split; add regime awareness; keep an ensemble across lookbacks; and monitor live-versus-backtest as a standing ritual.\nThe meta-skill is not the model — it is the **pipeline that notices decay**.",
pages:["**The mindset shift.** Amateurs ask “what is the best model?”; professionals ask “how will I know when it stops working, and what retires it?” Expected lifespan, monitoring, and graceful retirement are part of the design, not an afterthought.\nSay “every signal decays; my job is to notice early” and you have compressed a decade of desk wisdom into one sentence."]}

]);
