const validate = require('../validations');

const createBill = async(patient_name, address, hospital_name, date_of_service, bill_amount) =>{

    //Validations
    await validate.validate_bill(patient_name, address, hospital_name, date_of_service, bill_amount);

    //Create new object based on the input fileds which can be inserted in the global variable array (Med_Bill_list)
    let newObj = {
        patient_name:patient_name,
        address:address,
        hospital_name:hospital_name,
        date_of_service:date_of_service,
        bill_amount:bill_amount
    }

    Med_Bill_list.push(newObj);
    
    return newObj;
}

const getBills = async() =>
{
    return Med_Bill_list;
}

module.exports = {
    createBill,
    getBills
  };
  