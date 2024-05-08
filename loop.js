//for loop
/*
let a=0;
for(a=0; a<10; a+=2)
{
  console.log(a,"mustafa jamal")
}
*/

let friends=["mustafa jamal","gohar Rahman","babar ali", "aizaz ali","wisal ahmad","ihtisham khan", "ali","ahad"]
for(let arr=0;arr<friends.length;arr++)
{
console.log(`hello dear friends you all are invited today party ${friends[arr]}`)
}

for(let arr=0;a<friends.length;a++)
{
  if(friends[arr].endsWith("r")){
    console.log(`hello friends u are all invited today party ${friends[arr]}`)
  }
}
/*
for(let arr=0; a<10; arr++){
  if(friends[arr].startsWith("A") /friends[arr].startsWith("a")){
    console.log(`hello friends u are all invited today party ${friends[arr]}`)
  }
}
/*
let usernames=[]
for(a=0;a<5;a++)
{
  let username=prompt("enter your name this is required")
  usernames.push(username)
}
console.log(usernames)
*/

friend_lst=[]
for(let a=0; a<5; a++)
{
  let friend=prompt("enter friends name and press q to quit")
  friend_lst.push(friend)
}
console.log(friend_lst)
