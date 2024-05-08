function fillCity() {
  var cityName;
  var zipEntered = document.getElementById("zip").value
  switch (zipEntered) {
  case "1111":
  cityName = "peshawar";
  break;
  case "2222":
  cityName = "karachi";
  break;
  case "3333":
  cityName = "lahore";
  default:
    cityName="islamabad";
   }
   document.getElementById("city").value = cityName;
   
  }
  
  
