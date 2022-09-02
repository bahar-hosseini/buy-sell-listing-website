// load .env data into process.env
require('dotenv').config();

// Web server config
const sassMiddleware = require('./lib/sass-middleware');
const express = require('express');
const morgan = require('morgan');
const session =  require('express-session');

const PORT = process.env.PORT || 8080;
const app = express();

app.set('view engine', 'ejs');

// Load the logger first so all (static) HTTP requests are logged to STDOUT
// 'dev' = Concise output colored by response status for development use.
//         The :status token will be colored red for server error codes, yellow for client error codes, cyan for redirection codes, and uncolored for all other codes.

app.use(morgan('dev'));
app.use(express.urlencoded({ extended: true }));
app.use(
  '/styles',
  sassMiddleware({
    source: __dirname + '/styles',
    destination: __dirname + '/public/styles',
    isSass: false, // false => scss, true => sass
  })
);

app.use(session({ secret: 'lighthouselab', resave: false, saveUninitialized: true, }));
app.use(express.static('public'));

// Separated Routes for each Resource
// Note: Feel free to replace the example routes below with your own
const userApiRoutes = require('./routes/users-api');
const widgetApiRoutes = require('./routes/widgets-api');
const usersRoutes = require('./routes/users');

const homeRoutes = require('./routes/home');

const productsApiRoutes2 = require('./routes/products-api');

const productsRoutes = require('./routes/products')
const productRoutes = require('./routes/product');
const filter = require('./routes/filter')



const favouritesRoutes = require('./routes/favourites');
const favouritesApiRoutes = require('./routes/favourites-api');
const loginRoute = require('./routes/signin');
const loginApiRoute = require('./routes/signin-api');

const productsApiRoutes = require('./routes/home-api');

const messages = require('./routes/messages');
const messageApiRoute = require('./routes/messages-api');

const myPurchasesRoutes = require('./routes/mypurchases');


// Mount all resource routes
// Note: Feel free to replace the example routes below with your own
// Note: Endpoints that return data (eg. JSON) usually start with `/api`
app.use('/api/users', userApiRoutes);
app.use('/api/widgets', widgetApiRoutes);
app.use('/users', usersRoutes);

app.use('/home', homeRoutes);
app.use('/api/home',productsApiRoutes);
app.use('/product', productRoutes);

app.use('/favourites', favouritesRoutes);
app.use('/api/favourites',favouritesApiRoutes);

app.use('/products', productsRoutes);
app.use('/api/filter', filter)


app.use('/messages',messages);
app.use('/api/messages',messageApiRoute);

app.use('/api/products',productsApiRoutes2);

app.use('/signin',loginRoute);
app.use('/api/signin',loginApiRoute);




app.use('/mypurchases', myPurchasesRoutes);

//app.use('/myPurchases', myPurchasesRoutes);

// Note: mount other resources here, using the same pattern above

// Home page
// Warning: avoid creating more routes in this file!
// Separate them into separate routes files (see above).

app.get('/', (req, res) => {
  //res.render('index');
  res.redirect('/home');
});

app.get('/logout', (req, res) => {
  //res.render('index');
  res.redirect('/home');
});

app.listen(PORT, () => {
  console.log(`Example app listening on port ${PORT}`);
});


