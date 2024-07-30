const $accList = document.querySelector(".listCon");
const handleAccItemClick = ({ target }) => {
    if (target.nodeName !== "H2") {
        return;
    }
    const $li = target.closest("li");
    const $active = $accList.querySelector(".active");
    $active && ($active === $li || $active.classList.remove("active"));
    $li.classList.toggle("active");
};
$accList.addEventListener("click", handleAccItemClick);

// const $listCon = document.querySelector(".listCon");
// $listCon.addEventListener("mouseover", (e) => {
//     const $li = e.target.closest("li");
//     $li.classList.add("active");
// });
// $listCon.addEventListener("mouseout", (e) => {
//     const $li = e.target.closest("li");
//     $li.classList.remove("active");
// });
