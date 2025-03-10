// ------------------------DEPENDENCIES------------------------

const port = process.env.PORT ? process.env.PORT : '3001';
const express = require('express');
const app = express();
const path = require('path');

// --------------------------MIDDLEWARE--------------------------

app.use(express.urlencoded({ extended: false }));
app.use(express.static(path.join(__dirname, 'public')));

// ----------------------------ROUTES----------------------------

// not sure how to combine the first two routes here...

// home.ejs
app.get('/', (req, res) => {
    res.render('home.ejs');
});

// home.ejs
app.get('/home', (req, res) => {
    res.render('home.ejs');
});

// about.ejs
app.get('/about/basics', (req, res) => {
    res.render('pages/basics.ejs');
});

// personality.ejs
app.get('/about/personality', (req, res) => {
    res.render('pages/personality.ejs');
});

// favorites.ejs
app.get('/about/favorites', (req, res) => {
    res.render('pages/favorites.ejs');
});

// routine.ejs
app.get('/about/routine', (req, res) => {
    res.render('pages/routine.ejs');
});

// medications.ejs
app.get('/about/medications', (req, res) => {
    res.render('pages/medications.ejs');
});

// training.ejs
app.get('/about/training', (req, res) => {
    res.render('pages/training.ejs');
});

// medical.ejs
app.get('/about/medical', (req, res) => {
    res.render('pages/medical.ejs');
});

// gallery.ejs
app.get('/gallery', (req, res) => {
    res.render('pages/gallery.ejs');
});
// ----------------------------PORTS----------------------------

app.listen(port, () => {
    console.log(`Listening on Port ${port}.`);
});
