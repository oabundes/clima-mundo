const argv = require('./config/yargs').argv;
const lugar = require('./lugar/lugar');
const clima = require('./clima/clima');


// const x = lugar.getLugarLatLng(argv.direccion)
//     .then(console.log);

// clima.getClima('19.540', '-99.195')
//     .then(console.log)
//     .catch(console.log);


const dir = argv.direccion;

const getInfo = async(direccion) => {

    try {

        const coordenadas = await lugar.getLugarLatLng(direccion);
        const temperatura = await clima.getClima(coordenadas.lat, coordenadas.lng);

        return `El clima de ${ direccion } es de ${ temperatura } °C.`;

    } catch (err) {

        return `No se pudo determinar el clima de ${ direccion }`;

    }



}

getInfo(dir).then(console.log).catch(console.log);

// getInfo(argv.direccion).then(console.log);