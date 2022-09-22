require('dotenv').config();
const app = require('./app');

const PORT = process.env.PORT || 3129;

app.listen(PORT, () => console.log('Ouvindo porta', PORT));