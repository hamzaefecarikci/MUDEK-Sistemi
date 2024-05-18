import express from 'express';
import dotenv from 'dotenv';
import conn from './db.js';
import pageRoute from './routes/pageRoute.js'
import userRoute from './routes/userRoute.js'

dotenv.config();

//Connection to the Db
conn();

const app = express();
const port = 3000;

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
//routes
app.use('/', pageRoute)
app.use('/users', userRoute);

//ejs template engine
app.set('view engine', 'ejs');

// static files middleware
app.use(express.static('public'))

app.listen(port, ()=> {console.log(`Listening on ${port}`)});
