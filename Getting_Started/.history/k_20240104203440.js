var scope = "global scope";
function check() {
  var scope = "local scope";
  function f() {
    return scope;
  }
  return f;
}

console.log(check()()); console.log(2 + "-2" + "2");
