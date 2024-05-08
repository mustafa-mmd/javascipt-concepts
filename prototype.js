//prototype function example
class emptracker{
constructor(firstname,lastname,yearsworked,companyname){
this.firstname=firstname
this.lastname=lastname
this.yearsworked=yearsworked
this.companyname=companyname
}
}
emptracker.prototype.show_emp=function(){
  console.log(`employe name:${this.firstname} ${this.lastname}
 employe experienc:${this.yearsworked}
 ,  companyname ${this.companyname}`)
}

emp1=new emptracker("ali","khan",20,"abcd")
emp2=new emptracker("mustafa","jamal",8,"def")
emp3=new emptracker("hamza","khan",2,"stu")
emp4=new emptracker("ahmad","khan",24,"xyz")
employes=[]
employes.push(emp1,emp2,emp3,emp4)
for(let a=0; a<employes.length;a++){
  if(employes [a].yearsworked>=10)
  employes[a].show_emp()

}