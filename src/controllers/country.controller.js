import * as countryServices from '../services/country.services.js';

export const getCountries = (req, res) => {
    countryServices
        .getCountries()
        .then((result) => {
            res.status(200).json({
                message: 'countries retrieved succesfully',
                data: result[0]
            });
        })
        .catch((err) => {
            res.status(500).send(err);
        });
};

export const getCountry = (req, res) => {
    const { id } = req.params;
    countryServices
        .getCountry(id)
        .then((result) => {
            res.status(200).json({
                message: 'country retrieved succesfully',
                data: result[0]
            });
        })
        .catch((err) => {
            res.status(500).send(err);
        });
};

export const createCountry = (req, res) => {
    const country = req.body;
    countryServices
        .createCountry(country)
        .then(() => {
            res.status(200).json({
                message: 'country created succesfully',
                data: country
            });
        })
        .catch((err) => {
            res.status(500).send(err);
        });
};

export const updateCountry = (req, res) => {
    const country = req.body;
    const { id } = req.params;
    countryServices
        .updateCountry(id, country)
        .then(() => {
            res.status(200).json({
                message: 'country updated succesfully',
                data: country
            });
        })
        .catch((err) => {
            res.status(500).send(err);
        });
};

export const deleteCountry = (req, res) => {
    const { id } = req.params;
    countryServices
        .deleteCountry(id)
        .then((result) => {
            res.status(200).json({
                message: 'country deleted succesfully'
            });
        })
        .catch((err) => {
            res.status(500).send(err);
        });
};