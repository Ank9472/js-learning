const marvel_heros = ["thor","ironman","spiderman"]
const dc_heros = ["superman","flash","batsman"]

// marvel_heros.push(dc_heros)

// push case me bhi ham merge krna chahte hain lekin wah merge nhi hota balki first ke bad ka second element as a arrays count hota hain 



//console.log yeh ek print karane ka tarika hain 

//console.log(marvel_heros);
//console.log(marvel_heros[3][1]);

const allheros =  marvel_heros.concat(dc_heros)
// console.log(allheros);

// concat ka use ham two arrays ko merge krne ke liye krte hain 

const all_new_heros = [...marvel_heros,...dc_heros]

//console.log(all_new_heros);

const another_array = [1,2,3,[4,5,6],7,[6,7,[4,5] ]]

const real_another_array = another_array.flat(Infinity)

// console.log(real_another_array);

//flat sare element ko single arrays mein kr deta hain 

// console.log(Array.isArray("ANKIT BABUA"));

// console.log(Array.from("ANKIT"));

// console.log(Array.from({name:"ANKIT"})); // intersting

let score1 = 100
let score2= 200
let score3 = 300

console.log(Array.of(score1,score2,score3));




