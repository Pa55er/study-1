console.clear();

// 정직원, 파트타임직원의 정보를 출력하는 class
// 직원들의 정보 - 이름, 부서, 한 주에 몇시간 일하는지 (35, 20)
// 정직원 30000
// 파트타임 25000

class Job {
    constructor(name, department, hour, wage) {
        this.name = name;
        this.department = department;
        this.hour = hour;
        this.wage = wage;
    }

    getPay() {
        return this.hour * this.wage;
    }
}

class FullTime extends Job {
    static #WAGE = 30000;
    constructor(name, department, hour) {
        super(name, department, hour, FullTime.#WAGE);
    }
}

class PartTime extends Job {
    static #WAGE = 25000;
    constructor(name, department, hour) {
        super(name, department, hour, PartTime.#WAGE);
    }
}

const somypage = new FullTime("소미", "개발", 30);
const semipage = new PartTime("세미", "디자인", 20);
console.log("소미의 주급", somypage.getPay());
console.log("세미의 주급", semipage.getPay());
