// const tinderuser = 
// newobject ()

// yeh ek singalton object hain 
// const tinderuser ={}
// yeh ek non-singleton object hain

const tinderuser = {}

tinderuser.id = "123abc"

tinderuser.name = "sammy"

tinderuser.islogeein = false


// console.log(tinderuser) ;

// jab bhi aap javascript likhte ho to any object entry ke bad comma
// ka bhut bada yogdan hota hain 


const regularuser ={
Email:"some@gamil.com",
fullname: {
  userfullname : {
    firstname:"ankit",
    lastname:"tiwari"
      }
  }
}

console.log(regularuser.fullname.userfullname.firstname);

const obj1 = {1: "a",2:"b"}
const obj2 = {3: "a",4:"b"}

//const obj3 ={obj1, obj2}
//const obj3 = object.assign({},obj1,obj2)
// yaeh jyada tarah nhi use krte hain print krene ke liye


const obj3 = {...obj1 ,...obj2}

// console.log(obj3);

// const users=[
// { id:
//   Email
//   name :
// }

// {

// }

// {

// } ,

// ]

// users[1].Email
console.log(tinderuser);

 console.log(Object.keys(tinderuser));
 //console.log(object.values(tinderuser));
//console.log(object.entries(tinderuser));





