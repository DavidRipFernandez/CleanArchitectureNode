# 🛠 Backend - Configuración

## Librerias y Dependencias 
- SQL Server (mssql v11.0.1)
- Node v24.5.0
- Express 5.1.0
- Swagger jsdoc v6.2.8
- Swagger UI Express v5.0.1
- JsonWebToken v9.0.2

## Pasos para iniciar con Jenkins (Backend)
- Configurar el archivo .env con las configuraciones correspondientes de tu SQL Server.
- Tener configurado e instalado SQL Server y tener acceso al mismo.
- Ejecutar el script "init.sql" en tu servidor de base de datos (SSMS) el cual creara el primer usuario de acceso al sistema. (Ejecutarlo una sola vez).
- Abrir Jenkins y crear un nuevo item, con SCM Git a este mismo repositorio, apuntando a la carpeta backend/Jenkinsfile, para hacer la referencia a este archivo.
- Realizar despliegue de la aplicacion en Backend. Los puertos designados son: Dev - 3001, Test - 3002, Staging 3003.

