var x = 1;
function parent() {
  var x = 10;
  child();
}
function child() {
  console.log(x);
}

parent();
child();
