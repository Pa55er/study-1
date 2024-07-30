console.clear();

// class Tiger {
//     constructor(color) {
//         this.color = color;
//     }

//     eat() {
//         console.log("먹습니다.");
//     }

//     sleep() {
//         console.log("잔다.");
//     }
// }

// class Dog {
//     constructor(color) {
//         this.color = color;
//     }

//     eat() {
//         console.log("먹습니다.");
//     }

//     sleep() {
//         console.log("잔다.");
//     }

//     play() {
//         console.log("놀아줘.");
//     }
// }

class Animal {
    constructor(color) {
        this.color = color;
    }

    eat() {
        console.log("먹습니다.");
    }

    sleep() {
        console.log("잔다.");
    }
}

// class Tiger extends Animal {}
// const tigerAni = new Tiger("노랑");
// console.log("tigerAni ---", tigerAni);
// tigerAni.sleep();

class Dog extends Animal {
    constructor(color, owner) {
        super(color);
        this.owner = owner;
    }
    play() {
        console.log("놀아줘.");
    }
    eat() {
        super.eat();
    }
}
const dogAni = new Dog("점박이", "내꺼");
dogAni.play();
console.log(dogAni);
dogAni.eat();
