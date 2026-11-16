/*let celsius = 25;
let fahrenheit = (celsius * 9/5) + 32;
console.log(fahrenheit)*/




/*let name = "Alex";
let number = 7;
let student = true;

let sentence = `My name is ${name}, my favorite number is ${number}, and it is ${student} that I am a student.`;
console.log(sentence);*/




/*let color = "green";

if (color === "red") {
  console.log("stop");
} else if (color === "yellow") {
  console.log("slowdown");
} else if (color === "green") {
  console.log("go");
}*/



/*let number = 15;

if (number % 3 === 0 && number % 5 === 0) {
  console.log("FizzBuzz");
} else if (number % 3 === 0) {
  console.log("Fizz");
} else if (number % 5 === 0) {
  console.log("Buzz");
} else {
  console.log(number);
}*/


/* Arrow Function 

const add=(a,b)=>{
    console.log(a+b);
}
add(2,3);*/


/*
let arr=[1,2,3,4,5];
console.log(arr);

//Map
let newArr= arr.map((n)=>{return n*n});
console.log(newArr);

//Filter
let filteredArr= arr.filter(n=>n%2==0);
console.log(filteredArr);

//find
let foundArr=arr.find(n=>n>3);
console.log(foundArr);
*/


/*
function area(l,b){
     return l*b;
}
console.log(area(5,6));
*/


/*
const isPalindrome = str => str === str.split('').reverse().join('');

console.log(isPalindrome("racecar"));
console.log(isPalindrome("hello")); 
*/


// let marks = [85, 92, 78, 90, 88];

// let sum = marks.reduce((acc, curr) => acc + curr, 0);
// let average = sum / marks.length;

// console.log(average);

//Even Number Filter

// let arr=[85,93,78,90,88];
// let filteredArr= arr.filter(n=>n%2==0);
// console.log(filteredArr);

//Shopping cart total
//let arr=[10,26,64,25,92];


//["germanywestcentral","indonesiacentral","austriaeast","switzerlandnorth","italynorth"]




//const adventutrer= {
//   name="Alice",
//   cat:{
//     name:"Dinah",
//  },
//};

//const dogName = adventurer.dog?.name;
//console.log(dogName);



//template literal
//let v="World";
//let str='Hello ${v}';
//console.log(str);


//let arr=[1,2,3];
//let brr=arr;
//brr.push(4);
//brr=[...arr];
//brr.push(5);
//console.log(brr);
//console.log(arr);

function counter(){
    let count=0;
function increment(){
    count++;
    console.log(count);
}
   return (increment);
}
const a= counter()


//curring
function a(x){
    fnction b(y){
       function c(z){
          return x+y+z;
         }
    }
 }

console.log(a(1)(2)(3));

