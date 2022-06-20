// 1. Write code to get array of names from given array of users
// 2. Get back only active users
// 3. Sort users by age descending
const users = [
    {
      id: 1,
      name: "Jack",
      isActive: true,
      age: 20,
    },
    {
      id: 2,
      name: "John",
      isActive: true,
      age: 18,
    },
    {
      id: 3,
      name: "Mike",
      isActive: false,
      age: 30,
    },
  ];

//   const names=users.filter((user)=>user.isActive).map(user=>user.name);
//   console.log(names)
  

// What will be logged in first example and in second example?
//
// let var1;
// console.log(var1);
// console.log(typeof var1);

// let var2 = null;
// console.log(var2);
// console.log(typeof var2);


// What will be console.logged here
//
// Question 1
// console.log(foo);
// foo = 1;

// question 2
// console.log(foo);
// var foo = 2;


// question 3
// foo = 3;
// console.log(foo);
// var foo;

// Create a counter function which has increment and getValue functionality
// const privateSecret=()=>{
//     const secret ='foo';
//     return ()=>secret;
// }
// const getSecret =privateSecret();
// console.log("test",getSecret())

// const privateCounter=()=>{
//     let count =0;
//     return {
//         increment:(val=1)=>{
//             count +=val;
//         },
//         getValue:()=>{
//             return count;
//         }
//     }
    
// }

// const counter =privateCounter();
// console.log(counter.getValue());
// counter.increment();
// console.log(counter.getValue());


// Write a function which helps to achieve multiply(a)(b) and returns product of a and b
// Create a curry function
// What can your curried function do?

// const multiply=(num1)=>{
//     return (num2)=>{
//         return num1*num2
//     }
// }
// const multiply=num1=>num2=>num1*num2
// console.log(multiply(2)(3))

// Write a function which get's an array and an element and returns a array with this element at the end
// const numbers=[1,2]
// const append =(arr,el)=>{
//     return [...arr,el]
//     // arr.push(el);
//     // return arr;
// }

// const newNumbers=append(numbers,3);
// console.log(newNumbers);
// console.log(numbers);

// Write a function which can concatenate 2 arrays
// const mergeArrays=(arr1,arr2)=>{
//     arr1.push(...arr2);
//     return arr1;
// }
// const arr1=[1];
// const arr2=[2,3];
// const result =mergeArrays(arr1,arr2);
// console.log(arr1,arr2,result)
// const mergeArrays=(arr1,arr2)=>{
//     // return arr1.concat(arr2);
//     return [...arr1,...arr2]
// }
// const arr1=[1];
// const arr2=[2,3];
// const result =mergeArrays(arr1,arr2);
// console.log(arr1,arr2,result)

// Check that user with such name exists in array of objects

// const users = [
//     {
//       id: 1,
//       name: "Jack",
//       isActive: true,
//     },
//     {
//       id: 2,
//       name: "John",
//       isActive: true,
//     },
//     {
//       id: 3,
//       name: "Mike",
//       isActive: false,
//     },
//   ];

//   const isNameExists=(name,users)=>{
//     let exists=false;
//     for(let i=0; i<users.length; i++){
//         if(users[i].name===name){
//             exists=true;

//         }
//     }
//     return exists;
//   }
//   console.log(isNameExists("John",users))

// const isNameExists=(name,arr)=>arr.some(el=>el.name===name);

// const isNameExists=(name,arr)=>{
//  const el= arr.find(el=>el.name===name);
//  return Boolean(el)
// }


// const isNameExists=(name,arr)=>{
//  const index= arr.findIndex(el=>el.name===name);
//  return index > 0;
// }

// Remove all duplicates in the array

// const uniqueArray=arr=>{
//     return [...new Set(arr)]

// }

// console.log(uniqueArray([1,1,2]))
// const uniqueArray=arr=>{
//     const result=[];
//     arr.forEach(item=>{
//         if(!result.includes(item)){
//             result.push(item)
//         }
//     });
//     return result;
// }

// const uniqueArray=arr=>{
//     return arr.reduce((acc,el)=>{
//         return acc.includes(el)?acc:[...ac,el]

//     },[])
// }

// Sort the array of numbers
// Sort array of objects by author's lastname

// const books = [
//     { name: "Harry Potter", author: "Joanne Rowling" },
//     { name: "Warcross", author: "Marie Lu" },
//     { name: "The Hunger Games", author: "Suzanne Collins" },
//   ];

//   books.sort((book1,book2)=>{
//     const authorLastName1=book1.author.split(' ')[1];
//     const authorLastName2=book2.author.split(' ')[1];
//     return authorLastName1<authorLastName2 ? -1:1;
//   })
//   console.log(books)

// Write a function which implement range

// range(1, 50)
// 1,2,3,4,5,6,...,50

// const range =(start,end)=>{
//     let result= [];
//     for(let i=start; i<=end; i++){
//         result.push(i)

//     }
//     return result;
// }

const range=(start,end)=>{
    return [...Array(end).keys()].map(el=>el+start)
}
console.log(range(1,50))