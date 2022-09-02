const axios = require ('axios')

const getWeather = async function (req, res){
    try {
        let apiKey = req.query.apiId
        let location = req.query.q
        let choice = {
            method : "get",
            url : `http://api.openweathermap.org/data/2.5/weather?q=${location}&appid=${apikey}`
        }
        let result = await axios(choice)
        res.status(200).sens({ data : result.data})
    }
    catch(error){
        console.log(error);
        res.status(500).send({ message : error.message})
    }
}

const getTemp = async function (req, res) {
    try {
        let apiKey = req.query.appId;
        let location = req.query.q;
        let choice = {
            method: "get",
            url: `http://api.openweathermap.org/data/2.5/weather?q=${location}&appid=${apiKey}`,
        };
        let result = await axios(choice);
        res
            .status(200)
            .send({ data: { city: location, temperature: result.data.main.temp } });
    } catch (error) {
        console.log(error);
        res.status(500).send({ msg: error.message });
    }
};



const getcityTemp = async function (req, res) {
    try {
        let cities = [
            "Bengaluru",
            "Mumbai",
            "Delhi",
            "Kolkata",
            "Chennai",
            "London",
            "Moscow",
        ];
        let array = [];
        for (let i = 0; i < cities.length; i++) {
            let apiKey = req.query.appId;
            let location = cities[i];
            let options = {
                method: "get",
                url: `http://api.openweathermap.org/data/2.5/weather?q=${location}&appid=${apiKey}`,
            };
            let result = await axios(options);
            let obj = { city: location, temperature: result.data.main.temp };
            array.push(obj);
        }
        array.sort((a, b) => a.temperature - b.temperature);
        res.status(200).send({ data: array });
    } catch (error) {
        console.log(error);
        res.status(500).send({ msg: error.message });
    }
};

module.exports.getWeather = getWeather;
module.exports.getTemp = getTemp;
module.exports.getcityTemp = getcityTemp;