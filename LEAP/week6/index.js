// Problem No1   - Print the even numbers from 1 - 100

//let n = 0;

//while (n<=100) {
//if (n % 2 == 0){;
//console.log(n);
// }
// n++;
//}

// Problem No2   - Print the odd numbers from 1 - 100

//let n = 1;

//while (n<=100) {
//if (n % 2 == 1){
// console.log(n);
// }
//n++;
//}

// Problem No3  find out 10 numbers max?

//const array = [1,2,3,4,5,113,7,8,10,12];
//let max = 0;

//for (let i = 0; i < 10; i++){
//if (array[i] > max) {
//   max = array[i];
//}
//}

//console.log(max);

//Problem No4 find out  10 numbers max (while)?

//const array = [1,2,3,4,5,6,7,8,9,10];
//let max = 0;

//let i = 0;
//while ( i < 10) {
// if (array[i] > max) {
// max = array[i];
//}
// i++;
//}

//console.log(max);

//Problem No.4

// Input

// n = 4
// let n = 4;
// let string = "*";
// for (let i = 0; i < n; i++){
//  console.log(string);
//  string +="*";
// }

// Output
//console.log(string);
// *
// **
// ***
// ****

//Problem No. 5

//let a = [1,2,3,4,5,6,7,8,9,10];

//sum = 0;
//let n = 10;

//for (let i = 0; i<n; i++) {
//sum += a[i];
//}

//console.log(sum);

//Problem No.6  Find out second largest number

//let a = [1,2,7,8]

//let max = 0;

//for (let i = 0; i < a.length; i++) {
//if (a[i] > max) {
// max = a[i];
//}
//}

//let second = 0;
//for (let i=0; i<a.length; i++){
//if (a[i] > second && a[i] <max) {
//second  = a[i];
// }
// }

//console.log(second);

//Problem No.7

//1
//12
//123
//1234

// let i = [1,2,3,4];
// let j = 1;
// let string = i;

// for (i = 1; i <= j; i++){
//     for (j = 1; j <= i; j++)
//    console.log(string);
//    string +=i+1;
// }

// for (i = 1; i < 21; i = i + 2) {
//   console.log(i);
// }

//let n = 4; 
//let string = " ";
//string = string + i; string +=i;

//let n = 4;
//let string = "";

//for (let i = 1; i <= n; i++){
 //string += i;
 //console.log(string);
//}


//Problem No.8

//1
//22
//33
//4444

//let n = 4;
//for (let i = 1; i <=n; i++){
 //   let string = "";
 //   for (let j = 1; j <= i; j++){
 //    string +=i;
 //   }
//    console.log(string);
//}

  
//Problem No.9

//1
//2 3
//4 5 6
//7 8 9 10


//let n = 4; 
//let count = 1; 

//for (let i = 1; i <= n; i++){
  // let string = "";
   //for (let j = 1; j <= i; j++){
 // string += count;
 // string += " ";
 // count++;
// }
 // console.log(string);
//}


//Problem No.10

//   1
//  2 3
// 4 5 6
//7 8 9 10

let n = 4; 
let num = 1; 
  for (let i = 1; i <= n; i++) {
    let string = "";

   for (let j = 1; j <= n - i; j++) {
      string += " ";
   }

    for (let k = 1; k <= i; k++) {
    string += num + " ";
    num++;
   }

    console.log(string);
  }


//function printPyramid(rows) {
  //let num = 1;

  //for (let i = 1; i <= rows; i++) {
    //let row = "";

    //for (let j = 1; j <= rows - i; j++) {
      //row += " ";
    //}

    //for (let k = 1; k <= i; k++) {
     // row += num + " ";
     // num++;
    //}

   // console.log(row);
 // }
//}














