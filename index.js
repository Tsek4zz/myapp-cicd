const express = require('express');
const app = express();

app.get('/', (req, res) => {
  res.send('<h1>CI/CD Pipeline - GitHub Actions + Docker!</h1>');
});

app.listen(3000, () => console.log('Server port 3000 дээр ажиллаж байна'));