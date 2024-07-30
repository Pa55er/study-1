console.clear();

class Fruite {
    constructor(name, color) {
        this.name = name;
        this.color = color;
    }

    display = () => {
        console.log(`${this.name}, ${this.color}`);
    };
}

const apple = new Fruite("사과", "빨강");
console.log(apple);
apple.display();
