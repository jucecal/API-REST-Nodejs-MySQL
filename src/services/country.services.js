import db from '../config/db.js';

export const getCountries = () => {
    return new Promise((resolve, reject) => {
        const query = 'select * from country';
        db.execute(query)
            .then((result) => resolve(result))
            .catch((error) => reject(error));
    });
};

export const getCountry = (id) => {
    return new Promise((resolve, reject) => {
        const query = `select * from country where id = ${id}`;
        db.execute(query)
            .then((result) => resolve(result))
            .catch((error) => reject(error));
    });
};

export const createCountry = (country) => {
    return new Promise((resolve, reject) => {
        const query = 'insert into country (name, capital, currency) values (?, ?, ?)';
        const { name, capital, currency } = country;
        db.execute(query, [name, capital, currency])
            .then((result) => resolve(result))
            .catch((error) => reject(error));
    });
};

export const updateCountry = (id, country) => {
    return new Promise((resolve, reject) => {
        const query = 'update country set name = ?, capital = ?, currency = ? where id = ?';
        const { name, capital, currency } = country;
        db.execute(query, [name, capital, currency, id])
            .then((result) => resolve(result))
            .catch((error) => reject(error));
    });
};

export const deleteCountry = (id) => {
    return new Promise((resolve, reject) => {
        const query = `delete from country where id = ${id}`;
        db.execute(query)
            .then((result) => resolve(result))
            .catch((error) => reject(error));
    });
};