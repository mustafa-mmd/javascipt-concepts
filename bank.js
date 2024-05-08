/*class BankAccount{
  constructor(account_number, account_title, balance){
      this.account_number=account_number
      this.account_title=account_title
      this.balance =balance
  }
  deposit(amt){

      this.balance +=amt
      alert("Transaction Successfull")
  }
  withdraw(amt){
      if (amt>this.balance){
          alert("Insufficient Balance")
      }
      else{
          this.balance -=amt
          alert("Transaction Successfull")
      }
  }
  transfer(amt,beneficiary_acc){
      if (amt<this.balance){
          for(let a=0;a<accounts.length;a++){
              if (accounts[a].account_number==beneficiary_acc){
                  accounts[a].balance +=amt
                  this.balance -=amt
                  alert("Transaction Successful")
              }
          }
      }
      else{
          alert("Insufficient Balance")
      }


  }
  check_balance(){
      alert(`Your account balance is ${this.balance}`)
  }
}

var accounts = []

a1 = new BankAccount(1211,'nasir hussain', 10000)
a2 = new BankAccount(1212,'asad ali', 1000)
a3 = new BankAccount(1213,'jamal khan', 50000)
a4 = new BankAccount(1214,'ahsun shaikh', 10000)

accounts.push(a1,a2,a3,a4)  
*/

class Bank{
    constructor(bank_name,branches){
        this.bank_name=bank_name
        this.branches=this.branches
    }
    addbranch(newbranch){
if(newbranch !=undefined) && this.branches.includes(newbranch)
this.branches.push(newbranch)
alert('branch added')
    }

    removebranch(branch_name){
if(this.branches.includes(branch_name)){
    this.branches
    alert("branch removed")
}
else{
    alert("need a branch name")
}
    }

    allbranches(){
        return this.branches
    }
    

}
bank1=new bank("apnabank"['sadar-peshawar','gtroad'])

