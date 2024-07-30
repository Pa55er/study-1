console.clear();

// 스프레드

// function add(a, b, c, ...rest) {
//     return rest;
// }

// console.log(add(1, 2, 3, 4, 5));

// const f1 = ["사과", "키위"];
// const f2 = ["딸기", "바나나"];

// let arr = f1.concat(f2);
// console.log(arr);

// arr = [...f2, ...f1, "포도"];
// console.log(arr);

// 양쪽 home은 같은 객체를 가르킴.
// const somy = {
//     name: "somypage",
//     age: 2,
//     home: { address: "대전", tel: "00-00-00" },
// };
// const update = {
//     ...somy,
//     job: "학생",
// };

// 구조분해할당

// const f3 = ["사과", "키위"];
// const f4 = ["딸기", "바나나"];

// const [first, second] = f3;
// console.log(first, second);

// const point = [100, 100];
// const [x, y, z = 0] = point;
// console.log(x, y, z);

// function createObj() {
//     return ["사과", "이쁜사과"];
// }
// const [title, display] = createObj();
// console.log(title, display);

const somyInfo = {
    name: "somypage",
    age: 2,
    // job: "학생",
};
const job2 = "무직";
const { name, age, job = job2, pet = "강아지" } = somyInfo;
console.log(name, age, job, pet);
function displayInfo({ name, age, job }) {
    console.log(name, age, job);
}
displayInfo(somyInfo);

// const prop = {
//     name: "Button",
//     styles: {
//         size: 20,
//         color: "tomato",
//     },
// };
// function change({ styles: { color } }) {
//     console.log(color);
// }
// change(prop);
