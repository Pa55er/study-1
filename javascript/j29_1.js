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
async function fetchFruite() {
    const banana = await getBanana();
    console.log(banana);
    const apple = await getApple();
    console.log(apple);
    return [banana, apple];
}
fetchFruite().then((data) => {
    console.log(data);
});
