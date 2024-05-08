/*
let table_num=parseInt(prompt("enter a table number"))
for(let a=1; a<=10; a++)
{
  console.log(`${table_num} * ${a}=${table_num*a}`)
}
*/
/*
let table_num=parseInt(prompt("please enter number"))
let a=1;
while(a<=10){
  console.log(`${table_num} * ${a}=${table_num}`)
  a++
}
*/
/*
let tables=Number(prompt("enter how many table"))
for(let a=2; a<=tables; a++){
//inner/nested
for(b=1;b<=10; b++){
  console.log(`${a} * ${b} = ${a*b}`)
}
}
*/
let tab=parseInt(prompt("enter the new table number"))
let a=2;
while(a<=tab){
   let b=1;
  while(b<10){
    b++
    console.log(`${a}*${b}=${a}`)
    
  }
  a++
}