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
