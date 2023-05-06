import { Router } from 'express';
import countryRouter from './country.route.js';

const indexRouter = Router();

const prefix = '/api';

indexRouter.get(prefix, (req, res) => {
    res.send('welcome to PlanetScale API!');
});

indexRouter.use(`${prefix}/country`, countryRouter);

export default indexRouter;