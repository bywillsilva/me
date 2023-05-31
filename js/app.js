const menu_icon = document.getElementById("menu-icon");
const close_icon = document.getElementById("close-icon");
const menu_mobile = document.getElementById("menu-mobile");
const body = document.querySelector("body");
menu_icon.addEventListener("click", () => {
    menu_mobile.style.visibility = "visible";
    menu_mobile.style.right = "0";
    body.style.overflow = "hidden";
});

close_icon.addEventListener("click", () => {
    menu_mobile.style.right = "-380px";
    menu_mobile.style.visibility = "hidden";
    body.style.overflow = "auto";
});

let mobile_li = document.getElementsByClassName("mobile-li");
for (let index = 0; index < mobile_li.length; index++) {
    mobile_li[index].addEventListener("click", () => {
        menu_mobile.classList.remove("animate-menu");
        menu_mobile.style.right = "-380px";
        menu_mobile.style.visibility = "hidden";
        body.style.overflow = "auto";
    });
};