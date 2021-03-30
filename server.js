const express = require('express');
const cors = require('cors');
const app = express();
const PORT = 3003;

app.use(cors());

app.listen(PORT, () => console.log(`servidor rodando na porta:${PORT}`));

app.get('/', (req, res) => {
  res.json('OK');
});
