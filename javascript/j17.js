console.clear();

function getBanana() {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve("바나나");
        }, 1000);
    });
}
function getApple() {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve("사과");
        }, 3000);
    });
}
function getOrange() {
    return Promise.reject(new Error("오렌지는 없어"));
}

getBanana()
    .then((banana) => getApple().then((apple) => [banana, apple]))
    .then(console.log);

Promise.all([getBanana(), getApple()]).then((fruit) =>
    console.log("all---", fruit)
);

Promise.race([getBanana(), getApple()]).then((fruit) =>
    console.log("race---", fruit)
);

Promise.allSettled([getBanana(), getApple(), getOrange()])
    .then((fruit) => console.log("allSettled---", fruit))
    .catch(console.log);
