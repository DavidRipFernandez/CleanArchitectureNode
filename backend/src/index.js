// src/index.js
const app = require('./app');
const PORT = process.env.PORT;

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
  console.log(`Swagger is running on http://localhost:${PORT}/swagger`);
});
