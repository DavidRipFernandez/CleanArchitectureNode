IF NOT EXISTS (SELECT * FROM sys.databases where name = 'nur_proyecto')
  CREATE DATABASE nur_proyecto;
GO


USE nur_proyecto;
GO

IF NOT EXISTS (SELECT * FROM sysobjects WHERE name='Users' and xtype='U')
  CREATE TABLE Users (
  id INT IDENTITY(1,1) PRIMARY KEY,
  name VARCHAR(255),
  email VARCHAR(255) UNIQUE,
  type VARCHAR(50),
  password VARCHAR(255)
);
GO

IF NOT EXISTS (SELECT * FROM Users where email = 'admin@spsgroup.com.br')
  INSERT INTO Users (name, email, type, password) VALUES ('admin', 'admin@spsgroup.com.br', 'admin', '1234');
GO
