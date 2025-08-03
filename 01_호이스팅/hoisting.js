var a = 1;

var outer = function () {
  var inner = function () {
    console.log("inner:", a);
    var a = 3;
  };
  inner();
  console.log(a); // 1
};
outer();
console.log(a);
