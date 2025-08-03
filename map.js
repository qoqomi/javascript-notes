const m = new Map();

m.set("key1", "value1");
m.set("key2", "value2");

// map 1:1 a
// console.log(m);

const obj = { key: "key" };
m.set(obj, "value3");

// console.log(m, m.size);

const obj2 = {};
for (const [k, v] of m) {
}

// console.log("m", m);
m.forEach((value) => {
  console.log(value);
});

// new Set()-> 중복을 혀용하지 않는다
const set = new Set();

set.add("value1");
set.add("value2");
set.add("value1"); // 중복된 값은 추가되지 않음

const arr = [1, 2, 3, 4, 3, 3];

console.log("arr", [...new Set(arr)]);

//WeekMap // 약하다

// WeakSet
