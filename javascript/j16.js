console.clear();

// function a() {
//     for (let i = 0; i < 1000000000; i++) {}
//     return 1;
// }

// function b() {
//     return a() + 1;
// }

// function c() {
//     return b() + 1;
// }

// console.log("시작-----------------------------");
// const result = c();
// console.log(result);

// function execute() {
//     console.log("---1");
//     setTimeout(() => {
//         console.log("-----2");
//     }, 3000);
//     console.log("-------3");
// }
// execute();

// function runInDelay(callback, seconds) {
//     if (!callback) {
//         throw new Error("콜백함수를 전달해주세요");
//     }
//     if (!seconds || seconds < 0) {
//         throw new Error("시간을 전달받아야 함");
//     }
//     setTimeout(callback, seconds * 1000);
// }
// // runInDelay(() => {
// //     console.log("타이머");
// // }, 1);
// try {
//     runInDelay(() => {
//         console.log("타이머");
//     }, 3);
// } catch (e) {
//     console.log(e);
// }

function runInDelay(seconds) {
    return new Promise((resolve, reject) => {
        if (!seconds || seconds < 0) {
            reject(new Error("실패했음 시간이 제시되지 않음"));
        }
        setTimeout(resolve, seconds * 10000);
    });
}
runInDelay(1)
    .then(() => {
        console.log("타이머 끝났다.");
    })
    .catch(console.error)
    .finally(() => {
        console.log("끝!!!!");
    });
