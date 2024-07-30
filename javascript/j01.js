console.clear();

// 객체
let apple = {
    0: "test1",
    name: "somy",
    ["hello bye"]: "안녕",
    age: "2살",
    "age-num": 22,
};

// 객체를 만드는 방법
// 1. 객체 리터럴로 만들기
// 2. 클래스 객체로 만들기 new Object()
// 3. Object.create()
let sample = {};

// console.log(apple.name);
// console.log(apple["hello bye"]);
// console.log(apple["age-num"]);

// 객체 속성 추가
// apple.emoji = "예쁜 사과";
// console.log(apple);

// delete apple.emoji;
// console.log(apple);

const obj1 = {
    name: "개냥이",
    age: 2,
};

// console.log(obj1.name);
// function getValue(object, key) {
//     //return object.key;  XXXXX
//     return object[key];
// }
// console.log("getValue-- ", getValue(obj1, "name"));

const x = 10;
const y = 20;
// const coord = { x: x, y: y };
const coord = { x, y };

function makeObj(name, age) {
    return { name, age };
}

// const person = makeObj("semypage", 5);
// console.log(person);

// const apple2 = {
//     name: "사과",
//     display: function () {
//         console.log(`함수 내부의 변수의 속성값 - ${this.name}`);
//     },
// };
// apple2.display();

function Fruite(name, color) {
    this.name = name;
    this.color = color;
    this.display = () => {
        console.log(`${this.name}, ${this.color}`);
    };
}
const orange = new Fruite("오렌지", "노랑");
const banana = new Fruite("바나나", "노랑");
orange.display();
banana.display();
console.log(orange);
