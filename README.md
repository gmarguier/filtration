# Fₜ Filtration — ton feed quant

Un mini-TikTok de révision pour entretiens quant : scroll vertical, **309 cartes**
(probas, martingales & temps d'arrêt, calcul sto, brainteasers + boss cards,
questions type quantguide, finance/options, **marchés & market making**, algo,
stats, **ML · GP · BayesOpt**, algèbre linéaire, boîte à outils math,
**calcul mental**, **théorie de la mesure**), réponses à révéler, auto-évaluation
✓/✗ avec précision par catégorie, **⚡ Daily Ten** chronométré, répétition espacée
J+1 / J+3 / J+7, listes « Review » / « Mastered », progression et streak — et
**zéro répétition** tant que tu n'as pas tout vu.

*(Une filtration, c'est un flux d'information croissant. Ce feed est adapté à la tienne.)*

---

## Déploiement sur GitHub Pages (5 minutes, sans ligne de commande)

1. Va sur **github.com** → bouton **New repository**.
   - Nom : `filtration` (ou ce que tu veux) — **Public** — Create repository.
2. Sur la page du repo : **uploading an existing file** (ou Add file → Upload files).
   - Glisse-dépose **tous les fichiers** de ce dossier :
     `index.html`, `data.js`, `sw.js`, `manifest.webmanifest`,
     `icon-180.png`, `icon-192.png`, `icon-512.png`, `README.md`
   - **Commit changes**.
3. **Settings → Pages** (menu de gauche) :
   - Source : *Deploy from a branch* — Branch : `main` + `/ (root)` — **Save**.
4. Attends ~1 minute. Ton app vit à :
   `https://<ton-pseudo>.github.io/filtration/`

### Sur l'iPhone

1. Ouvre l'URL dans **Safari**.
2. Bouton **Partager** → **« Sur l'écran d'accueil »**.
3. L'icône Fₜ apparaît — l'app s'ouvre en plein écran, sans barre Safari,
   et fonctionne hors-ligne après la première visite (service worker).

> Alternative en ligne de commande, si tu préfères :
> `git init && git add . && git commit -m "Filtration" && git branch -M main`
> `git remote add origin git@github.com:<pseudo>/filtration.git && git push -u origin main`
> puis l'étape 3 ci-dessus.

---

## Utilisation

- **Swipe vertical** : carte suivante (jamais deux fois la même avant d'avoir tout vu).
- **Tap** sur le panneau givré : révèle la réponse.
- **Double-tap** sur une carte : l'ajoute à la liste *Review* (✦).
- Rail de droite : **Review** (bookmark) / **Got it** (maîtrisée → sort de la rotation).
- Réponse révélée → **✗ Missed / ✓ Got it** : alimente ta **précision par catégorie**
  (onglet Progression) et la répétition espacée.
- **Répétition espacée** : une carte ratée (ou bookmarkée) revient **en tête de feed**
  à J+1, puis J+3, puis J+7 ; trois réussites d'affilée → elle sort du cycle.
- **⚡ Daily Ten** (éclair dans l'en-tête) : 10 questions chronométrées, même tirage
  toute la journée (nouveau tirage à minuit), meilleur score du jour conservé.
- En-tête : **Filtres** (catégories, type, difficulté, inclure les maîtrisées),
  **Listes**, **Progression** (stats + précision par catégorie, cartes dues,
  Daily Ten, streak, export/import JSON).
- Fin de cycle → carte **F∞** : re-mélanger, réinitialiser le « vu », ou changer de filtre.

La progression est stockée **sur l'appareil** (localStorage). Pense à
**Progression → Export** de temps en temps si tu veux une sauvegarde.

---

## Ajouter tes propres cartes

Tout le contenu vit dans **`data.js`** — un simple tableau. Ajoute un objet :

```js
{id:"perso01", cat:"quant", type:"question", diff:2,
 title:"Ma question",
 body:"Énoncé avec du LaTeX : \\( \\mathbb{E}[X] \\) inline, \\[ ... \\] en display.",
 answer:"La réponse (uniquement pour type question)."}
```

- `cat` : `probability · stochastic · stochcalc · brainteaser · quant · finance · markets · algo · stats · mlai · linalg · math · mental · measure · meta`
- `type` : `concept` (affiché direct) · `question` (réponse à révéler) · `fact`
- `diff` : 1 à 3 — `id` : libre mais unique.
- LaTeX : **double backslash** (`\\mathbb{E}`), délimiteurs `\\( \\)` et `\\[ \\]`.
- Commit sur GitHub → l'app se met à jour toute seule (network-first).

### Pages supplémentaires (carousel horizontal)

Une carte peut avoir des pages swipeables vers la droite (dots sous le texte) —
parfait pour les dérivations et calculs détaillés. Deux façons :

**1. Directement dans la carte** (recommandé — c'est ce que font les nouveaux packs) :

```js
{id:"perso02", cat:"markets", type:"concept", diff:2,
 title:"…", body:"Page 1…",
 pages:["**Détail** Page 2 avec le calcul…", "**Exemple** Page 3…"]}
```

**2. Via `window.FEED_EXTRAS`**, en bas de `data.js` :

```js
window.FEED_EXTRAS = {
  "p01": ["**Deep dive** Deuxième page…", "**Worked example** Troisième page…"],
};
```

La page 1 est toujours le `body` de la carte ; chaque entrée du tableau ajoute
une page. Ça marche sur n'importe quelle carte, y compris les tiennes.

---

Bonnes révisions. 📈
