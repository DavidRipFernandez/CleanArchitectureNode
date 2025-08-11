FROM mcr.microsoft.com/mssql-tools

COPY init.sql /init.sql

CMD ["/opt/mssql-tools/bin/sqlcmd", "-S", "sqlserver", "-U", "sa", "-P", "*davidRipalda8446", "-i", "/init.sql"]
