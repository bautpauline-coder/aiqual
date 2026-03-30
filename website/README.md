# 🌐 Site web AIQual — aiqual.ai

Site vitrine statique (HTML/CSS/JS) pour [aiqual.ai](https://aiqual.ai).

## Structure

```
website/
├── index.html          # Page principale (one-page : accueil, services, about, contact)
├── css/
│   └── style.css       # Styles (dark theme, responsive)
├── js/
│   └── main.js         # Scripts (menu, scroll, animations)
├── assets/
│   └── images/         # Logo, illustrations (à ajouter)
├── .htaccess           # Config Apache Infomaniak (HTTPS, cache, sécurité)
└── README.md           # Ce fichier
```

## Sections

- **Hero / Accueil** — accroche, CTA vers RDV et services
- **Services** — 4 cartes : Agents IA, Automatisation, Veille, Consulting
- **À propos** — présentation AIQual + stack technologique
- **Contact / RDV** — email + placeholder widget n8n (à intégrer)

## Déploiement (Infomaniak)

1. Uploader le contenu de `website/` via FTP ou le gestionnaire de fichiers Infomaniak
2. Pointer le domaine `aiqual.ai` vers l'hébergement Infomaniak
3. Activer le SSL Let's Encrypt dans le panneau Infomaniak
4. Vérifier la redirection www → non-www via `.htaccess`

## À faire

- [ ] Ajouter logo SVG dans `assets/images/`
- [ ] Intégrer le widget de prise de RDV (webhook n8n)
- [ ] Ajouter meta OG pour les réseaux sociaux
- [ ] Ajouter favicon
- [ ] Rédiger les textes définitifs avec Pauline
