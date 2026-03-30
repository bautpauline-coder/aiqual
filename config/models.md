# Modèles IA — AIQual

## Architecture modèles

| Usage | Modèle | Via | Statut |
|---|---|---|---|
| Pauline — agent Telegram | `mistral:latest` | Ollama local | ✅ Actif |
| Tâches lourdes / batch | à définir | Ollama local | 🔧 À configurer |
| Production / rapidité | `gpt-4o-mini` | OpenAI API | ⏸ Disponible |

## Ollama (local)

- **URL** : `http://localhost:11434`
- **Modèles installés** :
  - `mistral:latest` — 4.4 GB — agent IA, tool calling
  - `llama3.2:3b` — 2.0 GB — tâches légères (ne supporte pas le tool calling)

## Notes

- `llama3.2:3b` et modèles < 7B ne supportent pas le **tool calling** dans n8n — à éviter pour les agents avec outils.
- Mistral supporte le tool calling via Ollama.
- Pour les workflows n8n avec outils (Perplexity, SQL, Calculator), utiliser **Mistral minimum** ou **GPT-4o-mini**.
