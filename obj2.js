
var plan1 = {
  name: "Basic",
  price: 3.99,
  space: 100,
  transfer: 1000,
  discountMonths: [6, 12],
  new_price:100,
  pages: 10,
  calcAnnual :function () {
      var bestPrice = plan1.price;
      var currDate = new Date();
      var thisMo = currDate.getMonth()+1;
      console.log(thisMo)
      for (var i = 0; i < plan1.discountMonths.length; i++) 
          {
              if (plan1.discountMonths[i] === thisMo) 
                {   
                    new_price = Number(prompt("Enter the percentage of price applicable"))
                    bestPrice = plan1.price * new_price/100;
                    break;
                }
         }
     document.write(`Plan: ${plan1.name}<br>
      Price : ${plan1.price}<br>
      Price Applicable: ${new_price}% <br>
      Annual Price : ${bestPrice * 12}`)
      
  }
  };
  
  var plan2 = {
      name: "Advance",
      price: 9.99,
      space: 1000,
      transfer: 5000,
      discountMonths: [1,6,12],
      pages: 100,
      calcAnnual :function () {
          var bestPrice = plan1.price;
          var currDate = new Date();
          var thisMo = currDate.getMonth()+1;
          console.log(thisMo)
          for (var i = 0; i < plan1.discountMonths.length; i++) 
              {
                  if (plan1.discountMonths[i] === thisMo) 
                    {   
                        new_price = Number(prompt("Enter the percentage of price applicable"))
                        bestPrice = plan1.price * new_price/100;
                        break;
                    }
             }
         document.write( `Plan: ${plan2.name}<br>
          Price : ${plan2.price}<br>
          Price Applicable: ${new_price}% <br>
          Annual Price : ${bestPrice * 12}`)
      }
  }