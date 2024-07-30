console.clear();

// let arr1 = [1, 2, 3, 4, 5];
// console.log(arr1);

// let arr2 = new Array(1, 2, 3);
// console.log(arr2);

arr2 = Array.of(5, 6, 7, 8);
console.log(arr2);

let arr3 = Array.from(arr2);
arr3[0] = 0;
console.log(arr3);

// let arr4 = Array.from({
//     0: "안",
//     1: "녕",
//     length: 2,
// });
// console.log(arr4);

// const fruits = ["바나나", "딸기", "사과", "포도", "복숭아"];
// fruits[7] = "수박";
// console.log(fruits);

// console.log(Array.isArray(fruits));
// console.log(Array.isArray({}));

// console.log(fruits.indexOf("키위"));
// console.log(fruits.includes("키위"));

// const fruits = ["바나나", "딸기", "사과", "포도", "복숭아"];
// let newarr1 = fruits.slice(1, 3);
// console.log(fruits);
// console.log(newarr1);
// const newarr2 = fruits.concat(newarr1);
// console.log(newarr2);

// let arrA1 = [1, 2, [31, 32, [331, 332]], 4, 5, [61, 62, 63]];
// console.log(arrA1.flat());
// console.log(arrA1.flat(2));
// console.log(arrA1.fill("s", 1, 3));

// let text = ["안녕", "반가워", "잘지내자"];
// console.log(text.join(" "));
