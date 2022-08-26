const orderModel = require("../models/orderModel")
const userModel = require("../models/userModel")
const productModel = require("../models/productModel")
const moment = require ('moment')

const createOrder = async function (req , res){
    req.body ["isFreeAppUser"] = req.isFreeAppUser;

// -------------------------------------------------
    let data = req.body
    if (!(data.user_id && data.product_id)){
        return res.send ({msg : "Enter User id and Product id"})
    }
// -------------------------------------------------
    const user = await userModel.findById(data.user_id)
    let product = await productModel.findById(data.product_id)
    if (!(user && product)){
        return res.send ({msg : "User id or Product id is not valid.\nPLease check again"})
    }
// -------------------------------------------------

    const date = moment().format('DD/MM/YYYY')
    data ['date'] = date
    
    let amount = 0
    if (data ['isFreeAppUser'] == true){
        amount = 0
    }else{
        amount = product.price
    }

    data ['amount'] = amount
    const savedOrder = await orderModel.create(data)
    res.send ({msg : savedOrder})
}
// -------------------------------------------------

module.exports.createOrder = createOrder