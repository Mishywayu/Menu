//acquiring our express module
const express = require('express');

const app = express();

//set templating engine as Ejs
app.set('view engine','ejs');

//servin static file
app.use(express.static('public'));

//Routing
//Route for Home (/)
app.get('/', (req, res) => {
    res.render('Home');
});
//route for about us
app.get('/about', (req, res) => {
    res.render('About');
});
//route for menu
app.get('/menu', (req, res) => {
    res.render('Menu');
}
);
//route for contact us
app.get('/contact', (req, res) => {
    res.render('Contact');
});
//route for order
app.get('/order', (req, res) => {
    res.render('Order');
});


//creating a server
app.listen(3000, () => {
    console.log('Server is running');
});