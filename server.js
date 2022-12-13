const express = require ('express');

const api = require('./routes/api');
const HTML = require('./routes/html');

const app = express();
const PORT = process.env.PORT || 3001

const util = require('util');
const fs = require('fs');

const uuidv1 = require('uuid/v1');

app.use(express.json());
app.use(express.urlencoded({extended: true}));
app.use(express.static('public'));

app.use('/api', api);
app.use('/',HTML);










app.listen(PORT, () =>
console.log(`App listening at http://localhost:${PORT} 🚀`))