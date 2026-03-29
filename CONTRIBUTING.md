# 🤝 Guide de Contribution — AIQual

Merci de votre intérêt pour AIQual ! Ce guide vous explique comment contribuer efficacement à nos projets.

---

## 📋 Table des matières

1. [Code de conduite](#code-de-conduite)
2. [Comment contribuer](#comment-contribuer)
3. [Signaler un bug](#signaler-un-bug)
4. [Proposer une fonctionnalité](#proposer-une-fonctionnalité)
5. [Soumettre une Pull Request](#soumettre-une-pull-request)
6. [Conventions de code](#conventions-de-code)
7. [Processus de review](#processus-de-review)

---

## 📜 Code de conduite

En contribuant, vous acceptez de respecter notre [Code de Conduite](CODE_OF_CONDUCT.md). Nous attendons de tous les contributeurs un comportement respectueux et professionnel.

---

## 🚀 Comment contribuer

### Prérequis

- Python 3.10+
- Git configuré avec votre nom et email
- Un compte GitHub

### Mise en place de l'environnement

```bash
# 1. Fork le dépôt sur GitHub
# 2. Cloner votre fork
git clone https://github.com/VOTRE-USERNAME/aiqual.git
cd aiqual

# 3. Ajouter le dépôt original comme remote
git remote add upstream https://github.com/aiqual/aiqual.git

# 4. Créer un environnement virtuel
python -m venv .venv
source .venv/bin/activate  # Windows: .venv\Scripts\activate

# 5. Installer les dépendances de développement
pip install -r requirements-dev.txt
```

---

## 🐛 Signaler un bug

1. Vérifiez que le bug n'a pas déjà été signalé dans les [Issues](https://github.com/aiqual/aiqual/issues)
2. Ouvrez une nouvelle issue en utilisant le template **Bug Report**
3. Incluez :
   - Une description claire et concise
   - Les étapes pour reproduire le bug
   - Le comportement attendu vs observé
   - Votre environnement (OS, version Python, etc.)

---

## 💡 Proposer une fonctionnalité

1. Ouvrez une issue avec le template **Feature Request**
2. Décrivez le problème que vous souhaitez résoudre
3. Proposez votre solution
4. Attendez la validation de l'équipe avant de commencer le développement

---

## 🔄 Soumettre une Pull Request

### Workflow Git

```bash
# 1. Synchroniser avec upstream
git fetch upstream
git checkout main
git merge upstream/main

# 2. Créer une branche dédiée
git checkout -b feature/ma-fonctionnalite
# ou
git checkout -b fix/correction-du-bug

# 3. Développer et committer
git add .
git commit -m "feat: ajout de la fonctionnalité X"

# 4. Pousser et ouvrir une PR
git push origin feature/ma-fonctionnalite
```

### Convention des commits (Conventional Commits)

| Préfixe | Usage |
|---|---|
| `feat:` | Nouvelle fonctionnalité |
| `fix:` | Correction de bug |
| `docs:` | Documentation uniquement |
| `refactor:` | Refactoring sans changement fonctionnel |
| `test:` | Ajout ou modification de tests |
| `chore:` | Tâches de maintenance |

---

## 🧹 Conventions de code

- **Style** : PEP 8, formaté avec `black`
- **Linting** : `flake8` ou `ruff`
- **Types** : annotations de type obligatoires (`mypy`)
- **Tests** : couverture minimale de 80% avec `pytest`
- **Docstrings** : format Google Style

```bash
# Formater le code
black .

# Vérifier le linting
ruff check .

# Lancer les tests
pytest --cov=src tests/
```

---

## 👀 Processus de review

- Toute PR nécessite au moins **1 approbation** d'un membre de l'équipe
- Les retours seront donnés sous **5 jours ouvrés**
- Une PR doit passer tous les **checks CI** avant d'être mergée
- Répondez aux commentaires et mettez à jour votre branche si nécessaire

---

## ❓ Des questions ?

Ouvrez une [Discussion GitHub](https://github.com/aiqual/aiqual/discussions) ou contactez-nous à **contact@aiqual.ch**.

---

*Merci de contribuer à AIQual et à l'avenir de l'automatisation intelligente ! 🤖*
