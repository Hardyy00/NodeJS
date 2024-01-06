// // setTimeout(() => {
// //   console.log("bye");
// // });
// // function mypromise() {
// //   return new Promise((resolve, reject) => {
// //     resolve("Hi");
// //   });
// // }
// // mypromise().then((msg) => {
// //   console.log(msg);
// // });

// // console.log("hello");
// // console.log("d1");
// // console.log("2");
// // console.log("3");

// // console.log("4");

// function af(){
//     var a =10;

//     function b(){

//         console.log(a);
//         a++;
//         console.log(a);
//         var a = 20;
//     }
// }

const arr = [1, 2, 4, { gh: 34 }];
const be = [...arr];
be[3]["gh"] = 50;

console.log(be);
