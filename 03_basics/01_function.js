
function sayMyName(){
    console.log("A")
    console.log("N")
    console.log("K")
    console.log("I")
    console.log("T")

}

// sayMyName()

//call of function ya declaration of

function addTwoNumbers(number1,number2){

    // console.log(number1 
    // + number2);
}




function addTwoNumbers(number1,number2){
//    let result = number1 + number2
//return result


return number1 + number2

}

const result = addTwoNumbers(3,5)

// console.log("Result :" , result);

function loginUserMessage(username = "sam")
{ if(!username) 
    
{
console.log("Please enter a username");
return
}    
return'${username} just logged in'
}

// console.log(loginuserMessage("Ankit"))


// console.log(loginUserMessage("Ankit"))


function calculatecartprice(num1){
return num1 

}

// console.log(calculatecartprice(200,500,600))

const user ={
    username :"hiesh",
    price :199

}

function handleObject(anyobject){
      // console.log  
      ('username is ${anyobject.username}and price is ${anyobject.price}');

}

 // handleObject(user)

handleObject({
username: "Ank" ,
price : 499
})

const myNewArray = [200,400,100,600]

function returnthirdValue(getArray){
    return getArray[1]
}

//console.log(returnSecondValue(myNewArray));

console.log(returnthirdValue([200,500,600,369]));
