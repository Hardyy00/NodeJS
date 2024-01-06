setTimeout(() => {
  console.log("bye");
});
function mypromise() {
  return new Promise((resolve, reject) => {
    resolve("Hi");
  });
}
mypromise().then((msg) => {
  console.log(msg);
});

console.log("hello");
console.log("d1");
console.log("2");
console.log("3");

console.log("4");
