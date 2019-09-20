const axios = require('axios');
const argv = require('yargs').options({
    direccion: {
        alias: 'd',
        desc: 'Dirección de la ciudad para obtener el clima',
        demand: true
    }
}).argv;

console.log(argv.direccion);

const instance = axios.create({
    baseURL: 'https://devru-latitude-longitude-find-v1.p.rapidapi.com/latlon.php?location=Ottawa',
    headers: {'X-RapidAPI-Key':'084e7d0b2amsh389bdcefd5fa946p162911jsnfe01a6920009'}
});

instance.get().then( resp => console.log(resp.data), err => console.log(err));