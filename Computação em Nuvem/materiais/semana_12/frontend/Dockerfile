FROM nginx:1.27-alpine

ENV BACKEND_HOST=backend \
    BACKEND_PORT=8000 \
    NGINX_ENVSUBST_FILTER=^BACKEND_

COPY default.conf.template /etc/nginx/templates/default.conf.template
COPY index.html /usr/share/nginx/html/index.html

EXPOSE 8080

HEALTHCHECK --interval=20s --timeout=3s --start-period=5s --retries=3 \
  CMD wget -q --spider http://127.0.0.1:8080/health || exit 1
