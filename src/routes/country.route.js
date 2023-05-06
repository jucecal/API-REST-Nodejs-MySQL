import { Router } from 'express';
import { getCountries, getCountry, createCountry, updateCountry, deleteCountry } from '../controllers/country.controller.js'
const countryRouter = Router();

//get all countries
countryRouter.get('/', getCountries);

//get country by id
countryRouter.get('/:id', getCountry);

//create a country
countryRouter.post('/', createCountry);

//update a country
countryRouter.put('/:id', updateCountry);

//delete a country
countryRouter.delete('/:id', deleteCountry);

export default countryRouter;