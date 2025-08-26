# 🛠 Frontend - Configuración

## Requisitos Previos 
- React & DOM v19.1.1 
- Bootstrap v5.3.7
- Axios 1.11.0

## Pasos para iniciar
- Ejecutar npm install
- Ejecutar npm run start

## Pasos para ejecutar con Jenkins

- Es crucial que Nginx se encuentre en la siguiente ruta: C:/nginx
- Tener instalado nssm: https://nssm.cc/download
- Agregar esta configuracion al archivo "nginx.conf", en la seccion de server para los 3 entornos.


      server {
              listen       80;
              server_name  localhost;
      
              root C:/nginx/html;
      
              # DEV
              location /grupo-01/dev/ {
                  index index.html;
                  try_files $uri /grupo-01/dev/index.html;
              }
      
              # TEST
              location /grupo-01/test/ {
                  index index.html;
                  try_files $uri /grupo-01/test/index.html;
              }
      
              # STAGING
              location /grupo-01/staging/ {
                  index index.html;
                  try_files $uri /grupo-01/staging/index.html;
              }
      }


- Nota: puede usar el puerto que desee con Nginx, lo que interesa es definir los directorios.
- Crear item en Jenkins con el SCM GIT, en el entorno de Jenkins llamar al repositorio principal e ingresar a directorio "frontend" del repo.
- Ejecutar el Jenkinsfile.
