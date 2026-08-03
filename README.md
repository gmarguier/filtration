# Fₜ Filtration — ton feed quant

Un mini-TikTok de révision pour entretiens quant : scroll vertical, ~230 cartes
(probas, martingales & temps d'arrêt, calcul sto, brainteasers, questions type
quantguide, finance/options, algo, stats, algèbre linéaire), réponses à révéler,
listes « Review » / « Mastered », progression et streak — et **zéro répétition**
tant que tu n'as pas tout vu.

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
- En-tête : **Filtres** (catégories, type, difficulté, inclure les maîtrisées),
  **Listes**, **Progression** (stats par catégorie, streak, export/import JSON).
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

- `cat` : `probability · stochastic · stochcalc · brainteaser · quant · finance · algo · stats · linalg · math · meta`
- `type` : `concept` (affiché direct) · `question` (réponse à révéler) · `fact`
- `diff` : 1 à 3 — `id` : libre mais unique.
- LaTeX : **double backslash** (`\\mathbb{E}`), délimiteurs `\\( \\)` et `\\[ \\]`.
- Commit sur GitHub → l'app se met à jour toute seule (network-first).

Bonnes révisions. 📈
