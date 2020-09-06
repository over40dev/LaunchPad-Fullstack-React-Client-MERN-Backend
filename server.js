const express = require('express');
const dotenv = require('dotenv');
const colors = require('colors');
const morgan = require('morgan');
const transactions = require('./routes/transactions');
const connectDB = require('./config/db')

dotenv.config({path: './config/config.env'});

connectDB();

const app = express();

// don't forget ` () ` after 'json'
app.use(express.json()); 

// attach 'route' to what we want app to do when user hits this route.
app.use('/api/v1/transactions', transactions);

app.get('/', (req, res) => res.send('Hello World!'));

const PORT = process.env.PORT || 5000;

app.listen(PORT, console.log(`server running in ${process.env.NODE_ENV} mode on port ${process.env.PORT}`.yellow.bold));
