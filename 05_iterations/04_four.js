const myObject = {
    js:'javascript',
    cpp:'c++',
    rb:"ruby",
    swift:"swift by apple"
}

for (const key in myObject ) {
    //  console.log('${key} shortcut is for ${myObject[key]}');
}

//value ko n print krke uske condition ko print krte hain

const programming = ["js" , "rb" , "py" , "java","cpp"]

for (const key in programming) {
     
    // console.log('${key} shortcut is for ${myObject[key]}'); //but yaha par ham print nhi kar pa rahe hain
    
 console.log(programming[key]);  //yaha par value print ho jata hain 
}
