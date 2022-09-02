const axios = require ('axios')
const { get } = require('mongoose')

let getStates = async function (req, res){
    try{
        let result = await axios.get ("https://cdn-api.co-vin.in/api/v2/admin/location/states")
        console.log(result)
        let data = result.data
        res.status(200).send({msg : data, status : true})
    }
    catch(error){
        console.log(error)
        res.status(500).send({msg : error.message})
    }
}

let getDistrict = async function(req,res){
    try {
        let id = req.para.stateId
        let choice = {
            method : "get",
            url : `https://cdn-api.co-vin.in/api/v2/admin/location/districts/${id}`
        }
        let result = await axios (choice)
        console.log(result);
        let data = result.data
        res.status(200).send({ msg : data, status : true})
    } catch (error) {
        console.log(error);
        res.status(500).send({msg : error.message})
    }
}

let getByPin = async function (req, res) {
    try {
      let pin = req.query.pincode;
      let date = req.query.date;
      console.log(`query params are: ${pin} ${date}`);
      var choice = {
        method: "get",
        url: `https://cdn-api.co-vin.in/api/v2/appointment/sessions/public/findByPin?pincode=${pin}&date=${date}`,
      };
      let result = await axios(choice);
      console.log(result.data);
      res.status(200).send({ msg: result.data });
    } catch (error) {
      console.log(error);
      res.status(500).send({ msg: error.message });
    }
  };
  
  
  let getOtp = async function (req, res) {
    try {
      let pass = req.body;
      
      console.log(`body is : ${blahhh} `);
      var choice = {
        method: "post",
        url: `https://cdn-api.co-vin.in/api/v2/auth/public/generateOTP`,
        data: pass,
      };
      
      let result = await axios(choice);
      console.log(result.data);
      res.status(200).send({ msg: result.data });
    } catch (error) {
      console.log(error);
      res.status(500).send({ msg: error.message });
    }
  };
//    >>>>>>>>>>    assignment   <<<<<<<<<
  
  let getByDistrict = async function (req, res) {
    try {
      let districtId = req.query.district_id;
      let date = req.query.date;
      console.log(`query params are: ${districtId} ${date}`);
      var choice = {
        method: "get",
        url: `https://cdn-api.co-vin.in/api/v2/appointment/sessions/public/findByDistrict?district_id=${districtId}&date=${date}`,
      };
      let result = await axios(choice);
      res.status(200).send({ msg: result.data });
    } catch (error) {
      console.log(error);
      res.status(500).send({ msg: error.message });
    }
  };
  
  
  module.exports.getStates = getStates;
  module.exports.getDistrict = getDistrict;
  module.exports.getByPin = getByPin;
  module.exports.getOtp = getOtp;
  module.exports.getByDistrict = getByDistrict;