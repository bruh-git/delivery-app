require('dotenv').config();
const app = require('./app');

const PORT = process.env.API_PORT || 3001;

app.listen(PORT, () => console.log('Ouvindo porta', PORT));