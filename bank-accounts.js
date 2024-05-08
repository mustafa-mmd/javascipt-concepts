function Bank_account(customer_name,balance=0){
  this.customer_name=customer_name;
  this.account_number = Date.now();
  this.balance=balance;
//now wee will creating a method its also called function this is use for adding some mony

this.deposite = function(amount){
  this.balance += amount;
};
//now we create withdraw method and using arrow function
this.withdraw=(amount)=>{
  this.balance -=amount;
};
}
//first number account this is object
/*
const acc1=new Bank_account("mustafa jamal",5000);


//second number account this is object

const acc2=new Bank_account("babar ali" ,10000)
//this is for deposite 
acc1.deposite(50000)
//and this is for withdraw
acc2.withdraw(5000)
console.log(acc1,acc2)
*/
const account_form=document.querySelector('#account_form')
const customer_name=document.querySelector('#customername')
const current_balance=document.querySelector('#balance')

account_form.addEventListener('submit', (e)=> {
   e.preventDefault();
   console.log(customer_name.value,current_balance.value)
})