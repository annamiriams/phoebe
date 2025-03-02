// ------------------------DEPENDENCIES------------------------

const port = process.env.PORT ? process.env.PORT : '3000';
const express = require('express');
const app = express();
const path = require('path');

// --------------------------MIDDLEWARE--------------------------

app.use(express.urlencoded({ extended: false }));
app.use(express.static(path.join(__dirname, 'public')));

// ----------------------------ROUTES----------------------------

app.get('/', (req, res) => {
    res.render('home.ejs');
});

// ----------------------------PORTS----------------------------

app.listen(port, () => {
    console.log(`Listening on Port ${port}.`);
});
