// java script ko mastery krna hain to objects aur events most important
// do trah se object bnate hain but litrel(singleton nhi bnega) and constructor (singleton bnega)   
// singleton

// object lierals

const mysym = Symbol("key1")

const jsuser = { 
name:"ankit",
[mysym ]: "mykey1" ,
"full name" :"ankit tiwari",
Age: "18",
location:"Rohtas",
email:"Ankit@google.com",
isLoggedIn :false,
lastLoginDays:["Monday","saturday"]
}

// console.log(jsuser.email)
// console.log(jsuser["email"])
// console.log(jsuser["full name"])
// console.log(jsuser[mysym])

jsuser.email ="Ankit@towercapital.com"
// Object.freeze(jsuser)
jsuser.email ="hitesh@microsoft.com"

console.log(jsuser);
// agar aap jaise hi ssquare bracket ka use krenge turant hi pta lag jayega ki symbol hain ki nhi 





































