//for
//["", "", ""]

// [{}, {}, {}]

const arr = [1, 2, 3, 4, 5]

for (const num of arr) {
    //console.log(num);
}



//  const greetings= "Hello World"
//  for(const grret of greetings{console.log('Each char is ${greet}')}

// Maps -duplicate entries is not allowed all are unique


const map = new Map()
map.set('IN' ,"India")
map.set('ch' ,"chinese")
map.set('ban' ,"bangladesh")

// console.log(map);

for( const [key ,value] of map ){
// console.log(key,':-',value);
}

// this way to print the code easily



const myObject = {
    'game1':'NFS', //without comma  it gives error
    'game2':'spiderman'
}

for(const[key,value] of myObject) {

   console.log(key,':-',value);

}