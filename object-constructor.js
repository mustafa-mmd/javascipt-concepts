//constructor define the propertise and method of object
//this is the simple expl
function Car(compnay,model,color,shape){
  this.compnay=compnay,
  this.model=model,
  this.color=color,
  this.shape=shape,

  //below is method
  this.drive = function(){
console.log(`you drive ${this.compnay}`)
  }
}
const car1=new Car("honda",2024,"white","newshape");

const car2=new Car("bmw",2023,"black","also new");
car1.drive();
car2.drive();