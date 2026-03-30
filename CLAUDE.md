# CLAUDE.md

Ce fichier est la **source de vérité unique** du projet AIQual. Il guide à la fois **Claude Code** (terminal) et **Cowork** (application desktop Claude).

> 📁 Dépôt local : `Documents/AIQual` | GitHub : `github.com/bautpauline-coder/aiqual`

---

## Vue d'ensemble du projet

AIQual est une startup genevoise spécialisée en automatisation IA. Le dépôt contient :
- 3 workflows n8n (`n8n/bot sources/`) — agents IA en français
- Infrastructure Docker PostgreSQL + n8n (`docker/postgres/`)
- Documentation en français (`Markdown/`)
- Configuration DNS/infrastructure (`config/domains.md`)

---

## Infrastructure Setup

Démarrer la stack complète (PostgreSQL 16 + n8n) :

```bash
cd docker/postgres
cp .env.example .env
# Renseigner les vraies credentials dans .env
docker-compose up -d
```

Services disponibles :
- n8n UI : http://localhost:5678
- PostgreSQL : localhost:5432
- Production n8n : https://n8n.aiqual.ai (DNS → 84.227.116.51, Infomaniak/Sunrise)
- Timezone : Europe/Zurich

---

## Workflows n8n

Les 3 fichiers JSON dans `n8n/bot sources/` s'importent directement dans n8n (Settings → Import).

**Pauline Assistante IA** (`Pauline Assistante IA(2).json`) — actif : non
- Agent IA multi-canal en français (Telegram + widget chat)
- Modèle : GPT-4o-mini (OpenAI)
- Outils : recherche Perplexity (avec citations), requêtes PostgreSQL (table `invoices.n8n_chat_histories`), calculatrice, génération d'images DALL-E, transcription vocale
- Mémoire conversationnelle stockée en PostgreSQL
- Personnalité : tutoiement, emojis structurants (🟢 succès, 🟥 erreur, ℹ️ info, ⚠️ avertissement)

**Répondeur pour Rendez-vous** (`Repondeur pour Rendez-vous.json`) — actif : oui
- Spécialiste prise de rendez-vous uniquement (refuse les autres sujets)
- Modèle : OpenAI O1
- Trigger : webhook POST
- Outil : Google Calendar (`rodolphe.duthu@aiqual.ai`) — lecture disponibilités + création événements
- Mémoire : buffer par `call_id` de session

**Alfred - Groupe Pipo&Mario** (`Alfred - Groupe Pipo&Mario.json`) — actif : non
- Agent Telegram pour un groupe privé
- Modèle : GPT-4o-mini (température 0.7)
- Personnalité configurable via 3 nœuds Markdown : `Fiche_de_poste.MD` (rôle : spécialiste fiscal international), `Soul.MD` (ton), `Skill.MD` (routage résumé)
- Commandes spéciales : `/key` (envoie la clé API OpenAI), `/sync` (synchronise avec simulateur ai-town)
- Mémoire : buffer 10 messages par `groupe_n_{chatId}`

---

## Credentials nécessaires

Configurer dans n8n (Settings → Credentials) :
- OpenAI API key
- Telegram Bot API (deux comptes distincts selon le workflow)
- Google Calendar OAuth2 (compte `rodolphe.duthu@aiqual.ai`)
- Perplexity API key
- PostgreSQL (connection vers `aiqual_postgres`)

---

## Python Development

Stack prévue : FastAPI + LangChain/LangGraph, RAG avec bases vectorielles (Pinecone/Weaviate/Chroma).

```bash
python -m venv .venv && source .venv/bin/activate
pip install -r requirements.txt
pip install -r requirements-dev.txt

black .                   # formatage
ruff check .              # lint
mypy                      # typage
pytest --cov=src tests/   # tests (objectif 80% de couverture)
```

> `requirements.txt` et `requirements-dev.txt` n'existent pas encore — à créer lors de l'ajout de code Python.

---

## Conventions

- Commits : Conventional Commits (`feat:`, `fix:`, `docs:`, `refactor:`, `test:`, `chore:`)
- Langue : documentation et commentaires en français
- PRs : 1 approbation minimum, délai de réponse 5 jours ouvrés
- Sécurité : security@aiqual.ch (SLA 48h)

---

## Utilisation avec Claude

### Claude Code (terminal)
Lancer depuis `Documents/AIQual` :
```bash
claude
```
Les permissions git et Python sont pré-configurées dans `.claude/settings.local.json`.

### Cowork (application desktop)
- Dossier de travail sélectionné : `Documents/AIQual`
- Projet Claude : **AIqual** (synchronisé avec ce dépôt)
- Pauline peut demander à Cowork de lire, modifier ou créer des fichiers directement dans ce dépôt

---

## Contact

- Email : contact@aiqual.ch
- Sécurité : security@aiqual.ch
- Site : aiqual.ch
- Partenaire formation : ESM Genève (Business Specialist IA)
