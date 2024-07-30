console.clear();

// 요소 변경
// function replace(arr, from, to) {
//     // const target = arr;
//     const target = Array.from(arr);
//     for (let i = 0; i < target.length; i++) {
//         if (target[i] == from) target[i] = to;
//     }
//     return target;
// }

// function replace(arr, from, to) {
//     return arr.map((ele) => (ele === from ? to : ele));
// }

// let arr = ["바나나", "딸기", "포도", "딸기"];
// const result = replace(arr, "딸기", "키위");
// console.log(arr);
// console.log(result);

// 카운트
// function count(arr, target) {
//     return arr.filter((ele) => ele === target).length;
// }

// let arr = ["바나나", "딸기", "포도", "딸기"];
// let result = count(arr, "딸기");
// console.log(result);

// forEach()
// arr.forEach((item, i, arr) => {
//     console.log(item);
//     console.log(i);
// });

// const item1 = { name: "사이다", price: 1 };
// const item2 = { name: "쿠키", price: 3 };
// const item3 = { name: "김밥", price: 2 };
// const item4 = { name: "쿠키", price: 10 };
// const products = [item1, item2, item3, item4];

// find()
// let result1 = products.find((item) => item.name === "쿠키");
// console.log(result1);

// findIndex()
// let result1 = products.findIndex((item) => item.name === "쿠키");
// console.log(result1);

// some()
// let result1 = products.some((item) => item.name === "쿠키");
// console.log(result1);

// every()
// let result1 = products.every((item) => item.name === "쿠키");
// console.log(result1);

// filter()
// let result1 = products.filter((item) => item.name === "쿠키");
// console.log(result1);

// map
// const nums = [1, 2, 3, 4, 5, 6];
// let result7 = nums.map((item) => item * 2);
// console.log(result7);

// flatmap
//const nums = [1, 2, 3, 4, 5, 6];
//let result8 = nums.map((item) => [1, 2]);
//console.log(result8);
let result9 = ["javascript", "coding"].flatMap((item) => item.split(""));
console.log(result9);

// sort()
//const texts = ["hi", "abc"];
//console.log(texts);
//texts.sort();
//console.log(texts);

// reduce()
//let result10 = [10, 20, 30, 40, 50, 60].reduce((sum, item) => (sum += item), 0);
//console.log(result10);
