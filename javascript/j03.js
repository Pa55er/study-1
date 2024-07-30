console.clear();

class Fruite {
    static MAX = 4; // 클레스 레벨의 프로퍼티
    constructor(name, color) {
        this.name = name;
        this.color = color;
    }

    // 인스턴스 레벨의 메서드
    display = () => {
        console.log(`${this.name}, ${this.color}`);
    };

    static make() {
        return new Fruite("키위", "녹색");
    }
}

// const banana = new Fruite("바나나", "노랑");
// console.log("객체 전체 --", banana);
// console.log("----", banana.name);
// console.log("----", banana.color);
// banana.display();

// console.log(Fruite.MAX);
// Fruite.MAX++;
// console.log(Fruite.MAX);

const kiwi = Fruite.make();
console.log(kiwi);
