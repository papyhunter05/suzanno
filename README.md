# Portfolio — Suzanno Irwin MAHARAVO

Portfolio personnel développé avec **React + Vite**, animations **Framer Motion**,
mode sombre / clair et support **français / anglais** (react-i18next).

## 🚀 Lancer le projet en local

```bash
npm install
npm run dev
```

Le site sera accessible sur `http://localhost:5173`.

Pour générer la version de production :

```bash
npm run build
```

Le résultat est généré dans le dossier `dist/` (à déployer tel quel).

## ✍️ Où modifier le contenu

Tout le texte du site (FR et EN) se trouve dans :

- `src/locales/fr.json`
- `src/locales/en.json`

### Ajouter les descriptions de projets

Dans la section `"projects" → "items"` de chaque fichier de traduction, chaque
projet a un champ `"description"` volontairement laissé vide :

```json
{
  "title": "Asterisk — Téléphonie IP",
  "tech": ["Asterisk", "VoIP", "Linux"],
  "description": ""
}
```

Remplacez `""` par le texte de votre choix, par exemple :

```json
"description": "Mise en place d'un serveur Asterisk pour la gestion d'appels internes, avec configuration des extensions SIP et du routage d'appels."
```

Tant que la description est vide, le site affiche automatiquement
« Description à venir » (ou « Description coming soon » en anglais).

### Ajouter un lien GitHub par projet

Actuellement, un seul bouton renvoie vers votre profil GitHub
(`https://github.com/papyhunter05`) en bas de la section Projets. Si vous
voulez un lien vers le dépôt de **chaque** projet :

1. Ajoutez un champ `"repo": "https://github.com/papyhunter05/nom-du-repo"`
   à chaque objet projet dans `fr.json` et `en.json`.
2. Dans `src/components/Projects.jsx`, ajoutez un lien conditionnel sous
   `project-card__tech`, par exemple :
   ```jsx
   {p.repo && (
     <a href={p.repo} target="_blank" rel="noreferrer" className="btn btn--ghost">
       Voir le code
     </a>
   )}
   ```

### Photo de profil

La section « À propos » affiche pour l'instant vos initiales (« SIM ») dans un
cadre stylisé. Pour utiliser une vraie photo, placez votre image dans
`public/` (ex. `public/photo.jpg`) puis remplacez, dans
`src/components/About.jsx`, le bloc :

```jsx
<div className="about__avatar mono">SIM</div>
```

par :

```jsx
<img className="about__avatar" src="/photo.jpg" alt="Suzanno Irwin Maharavo" />
```

## 🎨 Thème (mode sombre / clair)

Toutes les couleurs sont centralisées dans `src/styles/base.css` via des
variables CSS (`--bg`, `--surface`, `--accent`, `--text`, etc.), déclinées pour
`[data-theme="dark"]` et `[data-theme="light"]`. Modifiez ces variables pour
changer la palette globalement.

## 🌐 Langues

Le switch FR/EN est géré par `react-i18next` et mémorisé dans le
`localStorage` du visiteur (`siw_lang`). Pour ajouter une langue, dupliquez
`fr.json`, traduisez son contenu, puis déclarez-la dans `src/i18n.js`.

## 📦 Déploiement

Le projet est un site statique classique (Vite). Vous pouvez le déployer
gratuitement sur :

- **Vercel** : importez le dépôt GitHub, aucune configuration nécessaire.
- **Netlify** : build command `npm run build`, publish directory `dist`.
- **GitHub Pages** : `npm run build` puis publiez le contenu de `dist/` sur la
  branche `gh-pages` (par exemple avec le paquet `gh-pages`).

## 🗂️ Structure du projet

```
src/
├── components/       # Navbar, Hero, About, Skills, Experience, Projects, Contact, Footer
├── context/           # Contexte du thème sombre/clair
├── locales/           # Traductions FR / EN
├── styles/            # base.css, layout.css, components.css, animations.css
├── App.jsx
├── i18n.js
└── main.jsx
```

## 🧩 Stack technique

- React 18 + Vite
- Framer Motion (animations)
- react-i18next (internationalisation)
- lucide-react (icônes)
- CSS natif avec variables (pas de framework CSS, pour un design 100% sur-mesure)
