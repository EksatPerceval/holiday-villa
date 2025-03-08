// Navbar Menu
const btnHamburger = document.querySelector(".hamburger");
const menu = document.querySelector(".menu");

btnHamburger.addEventListener("click", () => {
    btnHamburger.classList.toggle("is-active");
    menu.classList.toggle("menu-active");
});

// Feedback
const loadMore = document.querySelector(".load-more");
let jumlahItem = 3;

loadMore.addEventListener("click", () => {
    // console.log("test");
    let boxes = [...document.querySelectorAll(".feedback-box .box")];
    for (let i = jumlahItem; i < jumlahItem + 3; i++) {
        boxes[i].style.display = "inline-block";
    }
    jumlahItem += 3;

    if (jumlahItem >= boxes.length) {
        loadMore.style.display = "none";
    }


});
