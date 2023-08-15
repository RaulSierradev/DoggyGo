require('dotenv').config();
const app = require('./src/app.js');
const db = require('./src/models/index.js');
PORT = process.env.PORT || 3001;


app.listen(PORT, () => {
    console.log(`Server listening on port: ${PORT}`)
});