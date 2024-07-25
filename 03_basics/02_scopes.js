
let a = 400
if(true){
   let a = 10
   const b = 20
//    console.log("INNER:",a);

}

// jab bhi ham bahar declare krete hain scope ko wah ham pehle lete hain jo andr declare kehte hain usko print ke liye alg se declare krne pdta hin



//console.log(a);
// console.log(b);
// console.log(c);


function one(){
   const username = "Ankit"

   function two(){
      const website = "youtube "
      console.log(username);
   }
// console.log(website)
 
//two()

}

//one()

if(true) {
  const username = "Ankit"
  if(username === "Ankit")
  {
   const website = "you tube"
   //  console.log(username+website);
  }

 // console.log(website)
}
// console.log(username)

//+++++++++++++++++++++++ interersting+++++++++++++++++

console.log(addone(5))

function addone(num){
    return num + 1
}

addTwo(5)
const addTwo = function(num){
return num + 2
}

// output not as i wish