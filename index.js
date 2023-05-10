let menu = document.querySelector(".navbar ul");
let menuLis = Array.from(document.querySelectorAll(".navbar ul li"));
let bulletsButton = document.querySelector(".bullets");
let bulletsSpans = document.querySelectorAll(".bullets span");
let homePage = document.getElementById("#home");
let navButtons = document.querySelector(".home .navbuttons");
let rightButton = document.querySelector(".right");
let leftButton = document.querySelector(".left");
menuLis.forEach((li)=>{
    li.addEventListener("click",(e)=>{
    removeActive();
    e.currentTarget.classList.add("active");
    })
})
function removeActive(){
    menuLis.forEach((li)=>{
        li.classList.remove("active");
    })
}
bulletsButton.addEventListener("click",()=>{
    if(bulletsButton.classList.contains("closeMenu")){
        homePage.style.cssText = "height:calc(130vh - 20px)";
        navButtons.style.cssText = "bottom: 0";
        menu.style.display = "none";
        bulletsSpans.forEach((span)=>{
        span.classList.remove("close");
        })
        bulletsButton.classList.remove("closeMenu");
    }else{
    homePage.style.cssText = "height:calc(168vh - 20px)";
    navButtons.style.cssText = "bottom: -33%";
    menu.style.display = "flex";
    bulletsSpans.forEach((span)=>{
    span.classList.add("close");
    })
    bulletsButton.classList.add("closeMenu");
    }
})