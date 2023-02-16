# Medical_Billing_GET_POST_Endpoints

Description: The Medical Bill will have the following object structure and it will be strored in a global variable in the local memory. 
{
        "patient_name":"John Willson",
        "address":"350 Peacock Avenue, Jersey City, NJ, USA",
        "hospital_name":"MG Hospital",
        "date_of_service":"14-02-2023",
        "bill_amount":"40000"
}
The data will disappear when the code is started to run again as no data base is used. 



STEPS TO RUN THE CODE:

Step 1: Run: 'npm install' (This will install all the necessary dependencies present in the package.json file like express)

Step 2: Run command: 'npm start' (This will trigger the script which runs app.js and eventually start the server on http://localhost:3000)

Step 3: In order to test these GET and POST APIs you can use postman and use the following url

'http://localhost:3000/items'

Step 4: For POST/items you can send the json objects based on the different test cases below by selecting the POST method

VALID TEST CASES

1.  {
        "patient_name":"John Willson",
        "address":"350 Peacock Avenue, Jersey City, NJ, USA",
        "hospital_name":"MG Hospital",
        "date_of_service":"14-02-2023",
        "bill_amount":"40000"
    }

2.  {
        "patient_name":"Jose Marino",
        "address":"390 Huttion Avenue, Jersey City, NJ, USA",
        "hospital_name":"KM Hospital",
        "date_of_service":"06-12-1990",
        "bill_amount":"5000"
    }

3.  {
        "patient_name":"Michael Scott",
        "address":"356 Congress Street, Jersey City, NJ, USA",
        "hospital_name":"TG Hospital",
        "date_of_service":"12-02-2021",
        "bill_amount":"67"
    }

4.  {
        "patient_name":"Dwight Schrute",
        "address":"350 Bowers Street, Jersey City, NJ, USA",
        "hospital_name":"BT Hospital",
        "date_of_service":"14-02-2023",
        "bill_amount":"56700"
    }

5.  {
        "patient_name":"Creed Bratton",
        "address":"350 Webster Avenue, Jersey City, NJ, USA",
        "hospital_name":"HJ Hospital",
        "date_of_service":"14-02-2023",
        "bill_amount":"4500"
    }


INVALID TEST CASES:

(Missing Filed Values )
   {
        "patient_name":"   ",
        "address":"350 Peacock Avenue, Jersey City, NJ, USA",
        "hospital_name":"MG Hospital",
        "date_of_service":"14-02-2023",
        "bill_amount":"40000"
    }

    {
        "patient_name":"Creed Bratton",
        "address":" ",
        "hospital_name":"HJ Hospital",
        "date_of_service":"14-02-2023",
        "bill_amount":"4500"
    }

    {
        "patient_name":"Creed Bratton",
        "address":"350 Webster Avenue, Jersey City, NJ, USA",
        "hospital_name":"  ",
        "date_of_service":"14-02-2023",
        "bill_amount":"4500"
    }

    {
        "patient_name":"Creed Bratton",
        "address":"350 Webster Avenue, Jersey City, NJ, USA",
        "hospital_name":"HJ Hospital",
        "date_of_service":" ",
        "bill_amount":"4500"
    }

    {
        "patient_name":"Creed Bratton",
        "address":"350 Webster Avenue, Jersey City, NJ, USA",
        "hospital_name":"HJ Hospital",
        "date_of_service":"14-02-2023",
        "bill_amount":""
    }

(No Alphabet in the names present)
    {
        "patient_name":"8943",
        "address":"350 Webster Avenue, Jersey City, NJ, USA",
        "hospital_name":"HJ Hospital",
        "date_of_service":"14-02-2023",
        "bill_amount":"4500"
    }

    {
        "patient_name":"Creed Bratton",
        "address":"350 Webster Avenue, Jersey City, NJ, USA",
        "hospital_name":"231",
        "date_of_service":"14-02-2023",
        "bill_amount":"4500"
    }

(Invalid date format)
    {
        "patient_name":"Creed Bratton",
        "address":"350 Webster Avenue, Jersey City, NJ, USA",
        "hospital_name":"HJ Hospital",
        "date_of_service":"34-54-2023",
        "bill_amount":"4500"
    }

   {
        "patient_name":"Creed Bratton",
        "address":"350 Webster Avenue, Jersey City, NJ, USA",
        "hospital_name":"HJ Hospital",
        "date_of_service":"12-90",
        "bill_amount":"4500"
    }

(Invalid amount values)
    {
        "patient_name":"Creed Bratton",
        "address":"350 Webster Avenue, Jersey City, NJ, USA",
        "hospital_name":"HJ Hospital",
        "date_of_service":"14-02-2023",
        "bill_amount":"ab45"
    }


