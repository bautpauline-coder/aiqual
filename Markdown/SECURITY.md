# 🔒 Politique de Sécurité — AIQual

## Versions supportées

| Version | Support sécurité |
|---|---|
| 1.x.x | ✅ Supportée |
| 0.x.x | ⚠️ Correctifs critiques uniquement |
| < 0.1 | ❌ Non supportée |

---

## Signaler une vulnérabilité

**⚠️ Ne créez PAS d'issue GitHub publique pour signaler une faille de sécurité.**

### Comment signaler

1. **Email** : Envoyez un rapport détaillé à **security@aiqual.ch**
2. **Objet** : `[SECURITY] Titre court de la vulnérabilité`
3. **Chiffrement** : Si possible, chiffrez votre message avec notre clé PGP (disponible sur demande)

### Informations à inclure

- Type de vulnérabilité (ex: injection, exposition de données, etc.)
- Chemin complet des fichiers sources concernés
- Étapes pour reproduire le problème
- Impact potentiel de la vulnérabilité
- Suggestions de correction si disponibles

---

## Processus de traitement

| Étape | Délai |
|---|---|
| Accusé de réception | **48 heures** |
| Confirmation et évaluation | **5 jours ouvrés** |
| Correctif développé | **30 jours** (selon criticité) |
| Publication du correctif | Coordonnée avec le rapporteur |

---

## Divulgation responsable

AIQual s'engage à :
- Traiter chaque rapport avec confidentialité
- Vous tenir informé de l'avancement
- Vous créditer dans les notes de version (si souhaité)
- Ne pas engager de poursuites contre les chercheurs de bonne foi

---

## Bonnes pratiques de sécurité

Si vous utilisez nos outils, nous recommandons :
- Ne jamais committer de clés API ou secrets dans le code
- Utiliser des variables d'environnement ou un gestionnaire de secrets
- Maintenir vos dépendances à jour (`pip audit`, `dependabot`)
- Activer l'authentification à deux facteurs sur GitHub

---

*AIQual — Genève, Suisse 🇨🇭 | security@aiqual.ch*
