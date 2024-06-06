//a.Create a new object inside the student object called address. Add properties to the address object for country, city, and pin_code. Set their values to your address details.

let student={
    address:{
        country:"India",
        city:"Kanigiri",
        pin_code:"523117"
    }
}

//b.Log the country property of the address object to the console.
console.log(student.address.country);


//c.Update the pin_code property of the address object to a new pin code. Log the address object to the console to see the updated pin_code property.
student.address.pincode="523001";
console.log(student.address.pincode);
