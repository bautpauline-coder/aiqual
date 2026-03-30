FROM n8nio/n8n:latest-debian

USER root

# Use archive for EOL buster repos, disable valid-until checks
RUN sed -i 's|http://deb.debian.org/debian|http://archive.debian.org/debian|g; s|http://security.debian.org/debian-security|http://archive.debian.org/debian-security|g' /etc/apt/sources.list \
  && printf 'Acquire::Check-Valid-Until "false";\n' > /etc/apt/apt.conf.d/99no-check-valid-until \
  && apt-get update \
  && apt-get install -y --no-install-recommends python3 python3-pip \
  && apt-get clean \
  && rm -rf /var/lib/apt/lists/* /tmp/* /var/tmp/* \
  && mkdir -p /home/node/.n8n \
  && chown -R node:node /home/node/.n8n

# Exécutez en root si votre environnement ne supporte pas le user switch:
# USER node

# point d'entrée d'origine n8n reste valide (ligne CMD/ENTRYPOINT de l'image de base)

