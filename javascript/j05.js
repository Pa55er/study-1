console.clear();

// getter, setter

// get, set

class Student {
    constructor(firstName, lastName) {
        this.firstName = firstName;
        this.lastName = lastName;
    }

    get fullName() {
        return `${this.firstName} ${this.lastName}`;
    }

    set fullName(value) {
        this.firstName = value;
    }
}

const member1 = new Student("page", "somy");

// console.log(member1.fullName());
console.log(member1.fullName);
member1.fullName = "semy";
console.log(member1.fullName);
