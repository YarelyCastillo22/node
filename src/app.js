const express = require('express');
const path = require('path');
const morgan = require('morgan');
const mysql = require('mysql');
const myConnection = require('express-myconnection');

const app = express();
//importando rutas
const customerRoutes = require('./routes/customer');
const { urlencoded } = require('express');

// settings
app.set('port', process.env.PORT || 3000);
app.set('view engine','ejs');
app.set('views', path.join(__dirname, 'views'));

// middlewares
app.use(morgan('dev'));
app.use(myConnection(mysql, {
    host: '127.0.0.1',
    user: 'root',
    password: '',
    port: 3307,
    database: 'crudnodejsmysql'
}, 'single'));
app.use(express.urlencoded({extended: false}));

//routes
app.use('/', customerRoutes);

//archivos estaticos
app.use(express.static(path.join(__dirname, 'public')));

// starting the server

app.listen(app.get('port'), ()=>{
    console.log('Server on port 3000');
});