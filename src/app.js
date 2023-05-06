import express from 'express';
import db from './config/db.js';
import indexRouter from './routes/index.route.js';

const app = express();

app.set('PORT', process.env.PORT || 3000);

//middlewares
app.use(express.json());

// start server
app.listen(app.get('PORT'), () => {
    console.log(`server listening on http://localhost:${app.get('PORT')}`);
});

// routes
app.use('/', indexRouter);
app.use('*', (req, res) => {
    res.send('404 - not found');
});

// connect to database
db.connect()
    .then(() => { console.log('connected to database!') })
    .catch((err) => console.log('error: ', err))