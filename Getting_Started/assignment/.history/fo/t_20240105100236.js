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
