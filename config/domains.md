# Domaines AIQual

## Infrastructure active

| Service | Sous-domaine | IP | Type DNS | Registrar | Statut |
|---|---|---|---|---|---|
| n8n | n8n.aiqual.ai | 84.227.116.51 | A | Infomaniak | ✅ Opérationnel |

## Détails réseau

- **IP fixe** : 84.227.116.51 (Sunrise)
- **TTL** : 15 min (900s)
- **WEBHOOK_URL** : `https://n8n.aiqual.ai` (configuré dans le conteneur n8n)
- **IP locale Mac** : 192.168.1.26 (réservée via DHCP statique sur la box Sunrise)
- **Adresse MAC Mac** : `7a:a9:8b:61:43:1e`

## Règles NAT (box Sunrise)

| Port externe | Port interne | IP interne | Protocole | Usage |
|---|---|---|---|---|
| 5678 | 5678 | 192.168.1.26 | TCP | n8n direct |
| 443 | 443 | 192.168.1.26 | TCP | HTTPS via Caddy |

## Reverse proxy — Caddy

- **Version** : 2.11.2 (installé via Homebrew)
- **Config** : `/opt/homebrew/etc/Caddyfile`
- **Service** : `brew services start caddy` (démarrage automatique au login)
- **Certificat SSL** : géré automatiquement par Caddy (Let's Encrypt)

```
n8n.aiqual.ai {
    reverse_proxy localhost:5678
}
```

## Docker n8n

- **Conteneur** : `n8n` (image `n8nio/n8n:latest`)
- **Volume** : `n8n_data` (persistant, créé le 27/03/2026)
- **Port** : 5678
- **Variables d'environnement** :
  - `WEBHOOK_URL=https://n8n.aiqual.ai`
  - `GENERIC_TIMEZONE=Europe/Zurich`
  - `TZ=Europe/Zurich`
  - `N8N_ENFORCE_SETTINGS_FILE_PERMISSIONS=true`
  - `N8N_RUNNERS_ENABLED=true`
- **Redémarrage** : `unless-stopped`

## Checklist setup

- [x] DNS `n8n.aiqual.ai` → 84.227.116.51 configuré chez Infomaniak
- [x] IP locale Mac réservée en DHCP statique (192.168.1.26)
- [x] Règle NAT port 5678 ouverte sur box Sunrise
- [x] Règle NAT port 443 ouverte sur box Sunrise
- [x] Caddy installé et démarré (HTTPS + SSL automatique)
- [x] `WEBHOOK_URL=https://n8n.aiqual.ai` dans le conteneur n8n
- [x] Webhook Telegram actif ✅

## Services à venir

| Service | Sous-domaine prévu |
|---|---|
| Site web | aiqual.ai |
| API | api.aiqual.ai |
