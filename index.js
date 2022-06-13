require("dotenv").config();
const express = require('express');

const port = process.env.PORT || 3001;
const app = express();

const cors = require('cors');

const routes = require('./src/routes/paleta.route');

const connectToDataBase = require('./src/database/database');

connectToDataBase();

app.use(express.json());
app.use(cors());
app.use('/paletas', routes);

app.listen(port, () => {
  console.log(`Servidor rodando em http://localhost:${port}`);
});


