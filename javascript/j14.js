console.clear();

// 단축평가 - 피연산자의 평가를 멈추는 것
// &&,//

const a = { name: "강아지" };
const b = { name: "고양이", owner: "소영이" };

// if (a && b) {
//     console.log("둘다 값이 있어");
// }

// let result = a && b;
// console.log(result);	// true false 가 아님!!!

// result = a || b;
// console.log(result);

// function changeOwner(animal) {
//     if (!animal.owner) {
//         throw new Error("주인없음");
//     }
//     animal.owner = "semy로 주인 바꿔";
// }
// a.owner && changeOwner(a);
// b.owner && changeOwner(b);
// console.log(a);
// console.log(b);

// function makeNewOwner(animal) {
//     if (animal.owner) {
//         throw new Error("이미 주인 있음");
//     }
//     animal.owner = "불쌍한 동물에게 주인을 붙여주자";
// }
// a.owner || makeNewOwner(a);
// b.owner || makeNewOwner(b);
// console.log(a);
// console.log(b);

// && 연산자는 null, undefined 일 경우를 확인할 때
// let item = { price: 1 };
// const price = item && item.price;
// console.log(price);

// 옵셔널 체이닝
// let c;
// // let c = {
// //     // name: "고양이",
// //     // owner: { name: "소영이" },
// // };
// function printName(obj) {
//     const o_name = obj?.owner?.name;
//     console.log(o_name);
// }
// printName(c);

// || - 기본값을 설정한 예
// function print(message) {
//     const text = message || "안녕 바이";
//     console.log("print-- ", text);
// }
// print();
// print(undefined);
// print(null);
// print("");
// print("하이");

// //
// let num = 0;
// console.log(num || "-1");
// console.log(num ?? "-1");

// let aa = null && undefined;
// let bb = null || undefined;
// console.log(aa);
// console.log(bb);
