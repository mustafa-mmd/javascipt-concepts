
// Create an object:
const car = {type:"Fiat", model:"500", color:"white"};

// Display some data from the object:
document.getElementById("demo").innerHTML = "The car type is " + car.type;

//example of multiple properties values
let names={firstname:"mustafa",lastname:"jamal",nickname:"musi"}
document.getElementById("names").innerHTML="the name is: "+names.lastname;

//example of single properties value 
let obj="hello word";
document.getElementById("obj").innerHTML=obj;

//example of object method
const person = {
  firstName: "John",
  lastName: "Doe",
  id: 5566,
  fullName: function() {
    return this.firstName + " " + this.lastName;
  }
};

// Display data from the object:
document.getElementById("method").innerHTML = person.fullName();

