import express from 'express';
import dotenv from 'dotenv';
import conn from './db.js';
import pageRoute from './routes/pageRoute.js'

dotenv.config();

//Connection to the Db
conn();

const app = express();
const port = 3000;

//routes
app.use('/', pageRoute)

//ejs template engine
app.set('view engine', 'ejs');

// static files middleware
app.use(express.static('public'))

app.listen(port, ()=> {console.log(`Listening on ${port}`)});
