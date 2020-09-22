const axios = require('axios');


const getLugarLatLng = async(direccion) => {

    const encodeUrl = encodeURI(direccion); // Convierte los espaciod a %20


    const instance = axios.create({
        baseURL: `http://api.weatherstack.com/current`,
        params: {
            access_key: '390425d9196e0c02ea9833a6941ecfe2',
            query: `${ encodeUrl}`
        }

    });

    const resp = await instance.get();
    // const resp= await axios.get(`http://api.weatherstack.com/current`, {
    //     params: {
    //         access_key: '390425d9196e0c02ea9833a6941ecfe2',
    //         query: `${ encodeUrl}`
    //     }
    // });


    if (resp.data.hasOwnProperty('error')) {


        throw new Error(`No hay resultados para ${ direccion}`)
    }

    const lugar = resp.data.location;
    const lat = lugar.lat;
    const lng = lugar.lon;
    direccion = resp.data.request.query;


    return {
        direccion,
        lat,
        lng

    }



}

module.exports = {

    getLugarLatLng

}