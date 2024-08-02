const myNums = [1,2,3]

// const mytotal = myNums.reduce(function(acc,curval)  {
//   console.log('acc:${acc} and ${currval}');
//     return acc + curval
// },0)


//yaha par comma ke bad mein jo lete hain acc ka value ho jata hain 

// const mytotal = myNums.reduce( ( acc,curr) => acc+curr,10)

// console.log(mytotal);


//kahi kahi run krne par hme function ka value as numeric na mil kar direct function as a variable output aa jata hain
 
const shoppingcart =
[{
     itemName:"cpp course",
    price:9999
},
 

{
     itemName:"python course",
    
     price:599
},
 

{
     itemName:"java course",
    price:6566
},
 

{
     itemName:"systemdesign  course",
    price:9599
},]

const priceTopay = shoppingcart.reduce((acc,item) => acc+item.price,0)

console.log(priceTopay)

//here we can able to say that ercurssion calling is doing again and again