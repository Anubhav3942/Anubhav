// document.getElementById("changeTextButton").addEventListener("click", function() {
//     document.querySelector("h1").textContent = "Text has been changed!";
// });

 
// alert('Welcome')

// confirm('do you want to exit this page');

// console.log("hello it's me qiqi");

// document.write('namaste duniya!');

// prompt('Name','enter your name');


//------------------//

// let w= 5;
// var a= 2;

// let d= w+a;
// console.log(d);


//------------global scope-----------------//

// var x ="hello, anubhav";

// function example(){
//     console.log(x);
// }
// example();

// console.log(x); this is a type of global function becz it is declared the variable out the function 



//-------------function scope---------------------//

// function example(){
//     var fs = "it's me qiqi";

//     console.log(fs);
// }
// example();

// console.log(fs); we can't access the variable outside the function




// -----------------Block scope----------------//

// function example(){
//     if(true){
//         let a="anubhav";
//         console.log(a);
//     }
    // console.log(a); this can't access inside this function it will give error
// }
// example();

// console.log(a);  as well as we can't acsess out the function 


// -----------------------end----------------------------//

// let a = 5 + 3;
// console.log(a);

// let b = 5 - 3;
// console.log(b);

// let c = 5 * 3;
// console.log(c);

// let d = 5 / 3;
// console.log(d);

// let e = 5 % 3;
// console.log(e);

// let f = 5 ** 3;
// console.log(f);

// let z = 10;
// console.log(z++);
// console.log(z);
// console.log(z);


// ------------------assigment operatior / increment/decrement -----------------

// let x = 5+3
// console.log(x);

// let z = 5;
// z*=3;
// console.log(++z);
// console.log(z);


// ----------------------Comparison operator ----------------------

// let a=10;
// let b=20;

// console.log(a<b);
// console.log(a>b);

// console.log(a<=b);
// console.log(a>=b);

// console.log(a==b);
// console.log(a!=b);

// console.log(a===b);
// console.log(a!==b);

// ---------------------strictly comparision operators---------------

// let c='10';
// let d=10;

// console.log(c==d); // true becz numbers are same . =>true
// console.log(c!=d); // opposite of == / =>false

// console.log(c===d); //false because c and d have same value but value the in c is a string (===) strictly checks first it will check no. and then it will check the datatype (in this case no. is same but datatype is different so it is false.)=> false


// console.log(c!==d); //opposite of === / =>false


// --------------------- Logical operators----------------------/

// logical operators are you to perform logical operations like : And, OR, NOT 

// Logical operators are 3 types :
// 1. And(&&)
// 2. OR(||)
// 3. NOT(!)

// ---------------Logical AND -------------

//  true only if all are true otherwise false
//TT=>T
//TF=>F
//FT=>F
//FF=>F


// let x = 10;
// let y = 20;
// console.log(x>0 && y>0); //it is true becz all conditions is  true => true

// console.log(x>0 && y<0); //1 is true, and other is false so it is =>false
// console.log(x<0 && y>0); //1 is false, and other is true so it is =>false 
// console.log(x<0 && y<0); // both are false so it is => false.

// -------------------logical OR operators ----------------

// if one is true then it is true, if both ARE false then it is false.
//TT=>T
//TF=>T
//FT=>T
//FF=>F

// let x = 5;
// let y = 10;

// console.log(x>0||y>0); //both are True so it is => True
// console.log(x>0||y<0); //1 is true , and 2nd is false so it is => true
// console.log(x<0||y>0); //1 is false , and 2nd id true so it is => True

// console.log(x<0||y<0); //both are false so it is => False


// --------------------Logical Not Operators-----------------\

// Converts operators to boolean and returns flipped value.

//give opposite value 

// let a= true;
// let b= false;

// console.log(!a); //false
// console.log(!b); //true

// ========================String Operators======================

// IN JAVASCRIPT, YOU CAN ALSO USE THE + OPERATOR TO CONCATENATION(JOIN) TWO OR MORE STRINGS

// console.log("hello"+"world");

// let a='javaScript';
// a+='_tutorial';
// console.log(a);

// -------------------- operator precedence ------------------------
// ==> Operator precedence in javascript determines the order in which operators are parsed concerning each other. 

//you can see operator precedence in java by searching in google operator precedence

// ------------begin-------------

// let result = 2 + 3 * 4; // 3x4=12 , 12+2=14 (* is the high precedence as compare to addition)

// console.log(result);

// ------------------- Operator associativity -------------------

// Operator associativity in javascript defines the order in which operators of the same precedence are evaluated.

//There are two types of operator precedence
//              /\
//             /  \
//            /    \
// Left-to-right    right-to-Left

// you can see operator associativity in google

// ------------------left-to-right--------------
// the problem will solve from left-to-right.

//example

// let result = 4-2-1; //4-2=2 , 2-1=1
// console.log(result);


// ---------------------------right-to-left------------------------

//the problem will solve from right-to-left/.

// let result = 2 ** 3 ** 2; // 3 **2 = 9 , 2 ** 9 =512

//  so it use right-to-left to solve becz of associativity of (*) 

// console.log(result);

