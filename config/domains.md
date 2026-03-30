# Domaines AIQual

## Infrastructure active

| Service | Sous-domaine | IP | Type DNS | Registrar | Statut |
|---|---|---|---|---|---|
| n8n | n8n.aiqual.ai | 84.227.116.51 | A | Infomaniak | ✅ En cours de setup |

## Détails réseau

- **IP fixe** : 84.227.116.51 (Sunrise)
- **TTL** : 15 min (900s)
- **WEBHOOK_URL** : `https://n8n.aiqual.ai` (utilisé par Telegram + n8n)

## Setup en cours (Claude Code)

- [ ] DNS `n8n.aiqual.ai` → 84.227.116.51 configuré chez Infomaniak
- [ ] HTTPS/SSL sur n8n (reverse proxy nginx ou Traefik + Let's Encrypt)
- [ ] `WEBHOOK_URL=https://n8n.aiqual.ai` dans `.env`
- [ ] Webhook Telegram actif sur le workflow **Répondeur pour Rendez-vous**

## Services à venir

| Service | Sous-domaine prévu |
|---|---|
| Site web | aiqual.ai |
| API | api.aiqual.ai |
