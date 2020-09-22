const axios = require('axios');


const getClima = async(lat, lon) => {

    const resp = await axios.get(`https://api.openweathermap.org/data/2.5/weather?appid=ff0da0a1e1e2e81585912237ef60f0b8&lat=${lat}&lon=${lon}&units=metric`);


    return resp.data.main.temp;

}










module.exports = {

    getClima
}