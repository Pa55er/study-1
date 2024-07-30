// document.addEventListener("DOMContentLoaded", () => {});
// document.addEventListener("load", () => {});

// const $li = document.querySelectorAll(".btnsCon>li");
// // const $li = document.getElementsByTagName("li");
// console.log($li);

// $li.forEach((list, i) => {
//     console.log(list);
//     list.addEventListener("click", (e) => {
//         console.log("클릭했다", i, e.target);
//         // 모든 li는 클래스 제거 (on)
//         // 클릭된 button의 가장 가까이에 있는 li에 on을 붙인다
//         $li.forEach((a) => {
//             a.classList.remove("on");
//         });
//         list.classList.add("on");
//     });
// });

const $sec = document.querySelector(".sec");
const $bar = document.createElement("span");
$bar.classList.add("bar");
$sec.appendChild($bar);

const $btnsCon = document.querySelector(".btnsCon");
const $listCon = document.querySelector(".listCon");
$btnsCon.children[0].classList.add("on");
$listCon.children[0].classList.add("on");

$btnsCon.addEventListener("click", (e) => {
    const $currentOnBtn = $btnsCon.querySelector(".on");
    if ($currentOnBtn) {
        $currentOnBtn.classList.remove("on");
    }
    const $li = e.target.closest("li");
    if (!$li) return;
    $li.classList.add("on");

    const newWidth = e.target.offsetWidth;
    const newLeft = e.target.offsetLeft;
    // const newInfo = e.target.getBoundingClientRect();
    $bar.style.cssText = `width: ${newWidth}px; transform: translateX(${newLeft}px)`;

    const index = Array.from($btnsCon.children).indexOf($li);
    if (index !== -1 && index < $listCon.children.length) {
        const $currentOnContent = $listCon.querySelector(".on");
        if ($currentOnContent) {
            $currentOnContent.classList.remove("on");
        }
        $listCon.children[index].classList.add("on");
    }
});
