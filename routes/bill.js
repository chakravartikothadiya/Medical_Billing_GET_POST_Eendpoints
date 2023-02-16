const express = require('express');
const validate = require('../validations');
const router = express.Router();
const data = require('../data');
const bill_data = data.bill_opr;


router
.route('/items')
.get(async(req, res) =>{
    try{
        
        //Call the get Bills function 
        let getlist = await bill_data.getBills();
        res.json(getlist);
    }
    catch(e)
    {
        if(e.statusCode)
        {
            res.status(e.statusCode).json({error:e.error});
        }
        else
        {
            res.status(500).json("Internal Server Error");
        }
    }
})
.post(async(req, res) =>{
    try{
        //populate data fields through the req body
        const {patient_name, address, hospital_name, date_of_service, bill_amount} = req.body;

        //Validate all the fields
        await validate.validate_bill(patient_name, address, hospital_name, date_of_service, bill_amount);

        //Call the Bill create function
        let create = await bill_data.createBill(patient_name, address, hospital_name, date_of_service, bill_amount);
        res.json("Bill Created!");
    }
    catch(e)
    {
        if(e.statusCode)
        {
            res.status(e.statusCode).json({error:e.error});
        }
        else
        {
            res.status(500).json("Internal Server Error");
        }
    }
});

module.exports = router;