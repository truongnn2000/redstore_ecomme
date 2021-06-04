let menu = document.querySelector(".menu-icon");
let navList = document.querySelector(".nav-list");

let productImg = document.getElementById("product-img");
let smallImg = document.getElementsByClassName("small-img");

let loginForm = document.getElementById("login-form");
let regForm = document.getElementById("reg-form");
var indicator = document.getElementById("indicator");

navList.style.maxHeight = "0px";

menu.onclick = function () {
  //   if (navList.style.display == "none") {
  //     navList.style.display = "block";
  //     console.log(1);
  //   } else {
  //     navList.style.display = "none";
  //     console.log(0);
  //   }
  if (navList.style.maxHeight == "0px") {
    navList.style.maxHeight = "200px";
  } else {
    navList.style.maxHeight = "0px";
  }
};
// js product gallery
smallImg[0].onclick = function () {
  productImg.src = smallImg[0].src;
};
smallImg[1].onclick = function () {
  productImg.src = smallImg[1].src;
};
smallImg[2].onclick = function () {
  productImg.src = smallImg[2].src;
};
smallImg[3].onclick = function () {
  productImg.src = smallImg[3].src;
};
// login
function LoginForm() {
  indicator.style.transform = "translateX(-50%)";
  regForm.style.transform = "translateX(300px)";
  loginForm.style.transform = "translateX(300px)";
}
function RegForm() {
  indicator.style.transform = "translateX(50%)";
  regForm.style.transform = "translateX(0px)";
  loginForm.style.transform = "translateX(0px)";
}
