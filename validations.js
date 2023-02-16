
const validate_bill = async(patient_name, address, hospital_name, date_of_service, bill_amount) =>
{
    if(!patient_name || !address || !hospital_name || !date_of_service || !bill_amount || typeof(patient_name)!=='string' || typeof(address)!=='string' || typeof(hospital_name)!=='string' || typeof(date_of_service)!=='string' || typeof(bill_amount)!=='string')
    {
        throw {statusCode:400, error:"Enter valid values for every field"};
    }

    if(patient_name.trim().length==0 || address.trim().length==0 || hospital_name.trim().length==0 || date_of_service.trim().length==0 || bill_amount.trim().length==0)
    {
        throw {statusCode:400, error:"Enter valid values for every field"};
    }

  
    //Check if the bill_amount is not a valid number
    if(isNaN(bill_amount))
    {
        throw {statusCode:400, error:"Amount should be valid number"};
    }


    //Date validations
    const reg1 = /^\d{4}-(0?[1-9]|1[0-2])-(0?[1-9]|[12]\d|3[01])$/; //YYYY-MM-DD
    const reg2 = /^(0[1-9]|1[0-2])-(0[1-9]|[12]\d|3[01])-\d{4}$/; //MM-DD-YYYY
    const reg3 = /^(0?[1-9]|[12]\d|3[01])-(0?[1-9]|1[0-2])-\d{4}$/; //DD-MM-YYYY
 
    if(!reg1.test(date_of_service) && !reg2.test(date_of_service) && !reg3.test(date_of_service))
    {
        throw {statusCode:400, error:"Enter a valid date format"};
    }

    //Hospital and Patient Name
    let alpha = /[A-Z]+/;
    if(!alpha.test(patient_name) || !alpha.test(hospital_name))
    {
        throw {statusCode:400, error:"Atleast one alphabet should be present in the patient name and hospital name"};
    }

}

module.exports = {
    validate_bill
}