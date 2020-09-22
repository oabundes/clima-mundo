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
    let lat, lng;
    const lola = await lugar.getLugarLatLng(direccion)
        .then(resp => {
            lat = resp.lat;
            lng = resp.lng;
            console.log(`Lat: ${ lat } Lon ${ lng }`)
        }).catch(err => {

            console.log(`No se pudo encontrar a ${ direccion }`)

        });


    const temp = await clima.getClima(lat, lng)
        .then(resp => { console.log(`El clima de ${ direccion } es de ${ resp } °C`) })
        .catch(err => { console.log(`No se pudo determinar el clima de ${ direccion }`) });

    return {

        direccion
    }



}

getInfo(dir);

// getInfo(argv.direccion).then(console.log);