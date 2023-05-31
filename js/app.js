const menu_mobile = document.getElementById("menu-mobile");
const ul_mobile = document.getElementById("ul-mobile");
const menu_icon = document.getElementById("menu-icon");
const close_icon = document.getElementById("close-icon");
const body = document.querySelector("body");

menu_icon.addEventListener("click", () => {
    menu_mobile.style.width = "100%";
    close_icon.style.display = "flex";
    ul_mobile.style.padding = "50px 20px";
    body.style.overflow = "hidden";
});

close_icon.addEventListener("click", () => {
    menu_mobile.style.width = "0";
    close_icon.style.display = "none";
    ul_mobile.style.padding = "50px 0";
    body.style.overflow = "auto";
});

let mobile_li = document.getElementsByClassName("mobile-li");
for (let index = 0; index < mobile_li.length; index++) {
    mobile_li[index].addEventListener("click", () => {
        menu_mobile.style.width = "0";
        close_icon.style.display = "none";
        ul_mobile.style.padding = "50px 0";
        body.style.overflow = "auto";
    });
}
