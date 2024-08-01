function oldClass() {
  // alert('Page Ready!');
//         alert(2+2);

// varaible declaration


/* 
  var is a keyword
  y is the variable name
  = is an assignment operator
  33 is the value of number data type
*/

// var Name = 'Amadi chile'; // variable declaration with initialized value

// var Name2; // variable declaration without a value;

// let Name3 = 'a';
// const Name4 = 'b';

// //! difference between var,let and const

// // console.log is used: seeing code output,verifying code syntax and debugging;

// console.log(Name);

// // variable update
// var x = 2; // variable decreation with x
// var x= 'a'; // variable decreation with x again
//  x = 5; // updating x

//  console.log(x)

//  let y = 1; // global variable
//   y = 4; // updating y
//   let t = 8;
//  {
//      let y = 2; // local variable
//      console.log(y,t)

//      {
//         let j = 9;
//         console.log(y,j)
//      }
//     }

//     const pi = 3.143;

//     // pi = 4;
//     console.log(pi)
//     let newPi = pi;
//     newPi = 66;
//     console.log(newPi)
//     let u;


// // variable scope

// //? other operators
// /* 
//   = an assignmet operator
// */

// //? arithmetic operator

// /* 
//   + plus
//   - minus
//   / divide
//   * multipliction
//   % modulus; 3/2 = 1.5; 3%2 = 1; 3/2 | 1.5; 3%2 | 1 r 1; 4%2 =  0
//   > greater
//   < less than
// */

//  let a=7; let b= 3;

//  console.log(a+b); // 10
//  console.log(a-b);  // 4
//  console.log(a*b);  // 21
//  console.log(a/b);  // 2.5
//  console.log(a%b);  // 1

// //?  logical operators

// /* 
//  a= true;
//   ! logical not or oposite or nagate ; !a = false
//   && logical and 
//   || logical or

//   b= true, c = false;
//   b || c; true

//     logical or is like additon
//     true = 1; false = 0;

//   condition1 condition2  result  action
//      1       0             1       true
//      0       1             1       true
//      0       0             0       false
//      1       1             1       true

//     b= true, c = false;

//     b && c; false
//     logical and is like multiplication
//     true = 1; false = 0;

//   condition1 condition2  result  action
//      1       0             0       false
//      0       1             0       false
//      0       0             0       false
//      1       1             1       true

//      b||c || b||a
// */

// //?  compound operators

// /* 
//   a=2; b=3;
//   += a+=b | a=a+b | a= 2+3 = 5;
//   -= a-=b a=2;
//   *= b*=a; b = 6;
//   /= b/=a; b=;
  


// */

// //? comparison operators

// /* 
//   >= greate than or equal to
//   <= less than or equal to
//   == equal to
//   === strictly equal to
//   != not equal
//   !== strictly not equal to
// */

// let m = 12; let p = 6; let n = '6';


// console.log(m>p, 'm>p'); // true;
// console.log(m<p, 'm<p'); // false;
// console.log(m >= p, 'm >= p'); // true;
// console.log(m <= p, 'm <= p'); // false;
// console.log(m != p, 'm != p'); // true;
// console.log(m !== p, 'm !== p'); // true;
// console.log(m != p && p>m, 'm != p && p>m'); // false;
// console.log(m > p && p>m, 'm > p && p>m'); // false;
// console.log(m > p || p>m, 'm > p || p>m'); // true;
// console.log(m==p, 'm==p'); // false;
// console.log(p==n, 'p==n'); // true;
// console.log(p===n, 'p===n'); // false;


//? boolean data type

let isMarried = false;

let isLoggedIN = true;

console.log(isLoggedIN,isMarried);

// ? undefined and null;
let x = undefined ;

console.log(x)
//  x = 400;
 console.log(x)
 let allUser = null;
  console.log(allUser)
  allUser = [];
  console.log(allUser)

// ? number data type

let age = 930;
let rate = 4.5;


// method: is a function in js that does a spicific work.

// how the recognise method or function: methodName(parameters)

console.log(typeof(age))
console.log(typeof(isLoggedIN))
console.log(typeof(x))
console.log(typeof(allUser))

// type conversion or casting: is converting a number from one data type to another

let p = 100;
p = String(p);
console.log(typeof p);

let z = '55';
let chile = 'Amadi chile'
let l = chile;
console.log(l)
z = Number(z);
console.log(z)
console.log(typeof z)

// .Math method

let t = 5;

console.log(t**2)
console.log(Math.pow(t,12))
console.log(Math.log(10))
console.log(Math.sin(30))
console.log(Math.asin(0.5))
console.log(Math.cos(30))
console.log(Math.asin(Math.sin(30)))
console.log(Math.PI)

console.log(Math.random())

console.log(Math.round(3.5))
console.log(Math.floor(3.5))
console.log(Math.ceil(3.7))

// generate a random number between 0 to 1000
let rand = Math.random() * 1000;
let num = Math.round(rand);
console.log(num)

// ? js String

let str = 'Amadi Chile';

console.log(typeof str)
console.log(str.length)
// stringName[validIndex]
console.log(str[0])

// get m,h and l

let sentence = 'Welcome to Elitepath';

//get l,t,E,p and h;
// to replace a letter or word in a string: stringName = stringName.replace('searchword','replaceword')
str=str.replace('i','p')
// console.log(str[0]= 'T')
console.log(str)
// deleting from a string
str=str.replace('i','');
console.log(str)

console.log(str.charAt(6))

console.log(str.includes('z'))
console.log(sentence.indexOf('e'))
console.log(sentence.lastIndexOf('e'))
console.log(sentence.split(' '))
console.log(sentence.split('e'))


//assignment

let firstName = 'John';
let lastName = 'Doe';
let initials; //JD 

// let the initials to be JD

/* 
  let FullName = amadi chile; color = blue;

  My Name is amadi chile. I love blue colors
*/

/* 
  
*/

let first = 'Nig';
let second ='eria';

// join first an second together so that it becomes Nigeria
console.log(first + second);
console.log(first.concat(second))

let owner = 'John Doe';
let petName = 'Brave';

// The owner of the lost pet Lion is Amadi Chile;

/* 
  'The owner of the lost pet' 
  petName
  ' is '
  owner
*/
console.log('The owner of the lost pet ' +
  petName +
  ' is ' +
  owner)
  
  // templete literal or string

  /* 
    rules of template string
   > backtick `` instead of '' or ""
   > ${variableName}

  */

   console.log(`The owner of the lost pet ${petName} is ${owner}`);


  //  array

  /* 
    let arrayName = [value,value,...];
  */

 let ages = [77,930,969,2024,65,true,'Chile',undefined,777,null,'Elitepath'];
 console.log(ages)

 // display on the console 777 and true
 console.log(ages[ages.indexOf(777)], ages[ages.indexOf(true)])
 console.log(ages.length);
 console.log(ages[0,1])

 let fruits = ['Apple','banana'];

 fruits.push('groundnut'); // add from the back

 fruits.pop(); // remove from the back

 fruits.shift(); // remove from the front

 fruits.unshift('Apples')  // add rom the front

 console.log(fruits)

//  using slice to add to an array

// delete fruits[1];

fruits.splice(4,1,'Orange');
// console.log(fruits.splice(1,1))

/* 
 splice struture

 arrayName.splice(index,delectCount,items);

 index: is the index where the item will be added or remove
 deleteCount: 0 means add and increase array length
 deleteCount: 1 means add but length of the array remains the same
 items: is the values to be addded to the array


 if you want remove an item, leave the items position empty
*/

fruits.push('Pear','garlic')
fruits.splice(9,0,'onion','cucumber');
fruits.splice(3,1,1,2,3)
console.log(fruits)

let phone = {
  name: 'Tecno pop 7 pro',
  ram: '7gb',
  rom: '64gb',
  owner: 'Amadi Chile',
  age: 1
}

/* 
  let objectName = {
    key: value,
    key: value
  }

  to get a value from an object

  ObjectName.key
*/

console.log(phone.name)

// phone.width = '420px';
// phone.height = '720px';

Object.assign(phone,{width: '420px',height: '720px'})

delete phone.age

console.log(phone)
}

// function

/* 
 function by function keyword

  function functionName(parameter1,parameter2,) {
    code block;
  }

  arrow function

  let functionName = (parameter1,parmeter2)=> {
    code block
    }
*/

function greetUser (obj) {
  console.log(`Good Morning ${obj.title}. ${obj.name}!`);
  
}
let greetUser2 = ()=> {
console.log('Good Morning Mr. Chile! again');
}

// invoking or calling a function

// functionName(parameters)

// greetUser();
// greetUser2();


// adding parameters

greetUser({name:'Cheris',title:'Mr'})
greetUser({name:'Samuel',title:'Mr'})
greetUser({name:'Andrea',title:'Miss'})
greetUser({title:'Miss',name:'Sandra'})

// returning values from a function

/* 
function sum (a) {
  return a;
}

the return key work marks the end of a function. so any code
 below it will not run
 */

 function sum(a,b) {
   return a+b;
 }

 console.log(sum(5,8))
console.log(sum(2,7)*8)

// hoisting
console.log(v)
var v = 'vex';

console.log(times(19,12));

// let times = (a,b)=> {
//   return a*b;
// }

function times(a,b) {
  return a*b
}

// methods

let User = {
  firstName: 'Chile',
  lastName: 'Amadi',
  email: 'amadichile@gmail.com',
  fullName: function() {
    return `${this.firstName} ${this.lastName}`
  },
  initials: ()=>{
    return `${User.firstName[0]}${User.lastName[0]}`
  }
}

console.log(User.lastName)
console.log(`${User.firstName} ${User.lastName}`);
console.log(User.fullName())
console.log(User.initials())


//? condinals

// if

let age = 17;

/* 
  if(condtion) {
   code block;
  }
*/

if(age > 17) {
  console.log('can drink Alchohol');
}

// if else

/* 
  if(condtion) {
   code block;
  }else{
  code block
}
*/

if(age >= 18) {
  console.log('Can drink alchohol');
}else{
  console.log('Can not drink alchohol');
}

// if elseif else

/* 
  if(condtion) {
   code block;
  } else if(condtion) {
   code block; 
  } esle if(condition) {
    code block; 
  } else{
   code block;
  }

*/

let age1 = '27';

if(age1 >= 18) {  // 18 - infinnity
  console.log('can Drink alchohol');

} else if((age1>=15) && (age1 <=17)) { // 15 -17
   console.log('Can drink Alchohol in parent presents')
}else if ((age1 >= 10) && (age1 <= 14)) { // 10-14
  console.log('Can drink Hollandia Milk');
}else{
  console.log('can drink water only')
}


// switch

/* 
  switch(dynamicValue) {
  case value1:
    code block;
    break;
  case value2:
    code block;
    break;
  case value3:
    code block;
    break;

  default:
    code block;
    break;
}
*/

// let userAge = prompt('Please enter your age: ');

// userAge = Number(userAge);
// console.log(userAge, typeof userAge);

// switch (userAge) {
//   case 18:
//     console.log('Can drink alchohol');
//     break;
//   case 15:
//   case 16:
//   case 17:
//     console.log('Can drink alchohol in parent presents');
//     break;
//   case 10:
//   case 11:
//   case 12:
//   case 13:
//   case 14:
//     console.log('Can drink Hollandia Mikl');
//     console.log('object')
//     break;

//   default:
//     console.log('can drink water only')
//     break;
// }

// tenary opertor

/* 
  condition?statement: statement;
*/

let balance = 50;

balance > 50 ? console.log('can despence'): console.log('low balance');

if(balance > 50?true:false) {
  console.log('if conditon with tenary operator ran')
}

// conditonal rendering

/* 
  condition && statement;
*/

balance > 50 && console.log('can withdraw');
!(balance > 50) && console.log('can not withdraw due to low balance');


// console.log(1); // 1-10
// console.log(2); // 1-10
// console.log(3); // 1-10
// console.log(4); // 1-10
// console.log(5); // 1-10
// console.log(6); // 1-10
// console.log(7); // 1-10
// console.log(8); // 1-10
// console.log(9); // 1-10
// console.log(10); // 1-10

//? loops

// premitive loops: for, while and do while

/* 
   for(startpoint; condition; increment) {
    code block;
   }
*/

// problem: display a number form 1-10 on the console


/* 
  startPoint: 1;
  endPoint: 10;
  condtion: startPoint <= endPoint;
  increment: startPoint++
*/

// for(let i = 1; i <= 10; i++) {
//   // alert(true);
//   console.log(`i = ${i}`)
// }


// problem: output a number from 50 to 20;

/* 
startPoint: 50;
endPoint: 20;
condtion: startPoint > endPoint;
increment: startPoint--
*/


// for(let i=50; i >= 20; i--) {
//   console.log(`j = ${i}`)
  
// }


// while loop


/* 
  startPoint;

  while(conditon) {
    code block;

    increment;
  }
 
*/

//problem: output 1-5 using while loop

/* 
  statPoint: 1;
  endPoint: 5;
  condtion: startPont < endPoint;
  increment: startPoint++;
*/

let p = 11;

while (p < 6) {
  console.log(`p = ${p}`);

  p++;
}

// do while

/* 
  startPoint;

  do {
    code block;
     increment;

  }while(condtion);

*/

//problem: output 10 - 7 using do while loop

/* 
  startPoint: 10;
  endPoint: 7;
  condtion: startPoint > endPoint;
  increment: startPont--
*/

// let v1 = 61;

// do {
//   v1--;
//   if(v1 === 57) {
//     // break;
//     continue;
//   }
//   console.log(v1);
// }while(v1 >= 7);

// how to use loops to read the items in an array

let prices = [1000,200,400,80,77,300,44];

// console.log(prices[0])

// for(let i=0; i < prices.length; i++) {
//   console.log(prices[i])
//   // if(prices[i] == 200) {
//   //  break;
//   // }
//   // console.log(i)

// }

for(i of prices) {
  console.log(i);
}

let buttle = {
  name: 'coke',
  price: '$10'
}

for(val in buttle) {
  console.log(val)
  console.log(buttle[val])
}