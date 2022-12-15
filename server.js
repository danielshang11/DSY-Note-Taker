const express = require ('express');
const fs = require('fs');


const api = require('./routes/api');
const HTML = require('./routes/html');

const app = express();
const PORT = process.env.PORT || 3001

app.use(express.static('public'));
app.use(express.json());
app.use(express.urlencoded({extended: true}));

app.use('/api', api);
app.use('/', HTML);


app.listen(PORT, () =>
console.log(`App listening at http://localhost:${PORT} 🚀`));