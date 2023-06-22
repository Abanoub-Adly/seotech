let menu = document.querySelector(".navbar ul");
let navbar = document.querySelector(".navbar");
let menuLis = Array.from(document.querySelectorAll(".navbar ul li"));
let bulletsButton = document.querySelector(".bullets");
let bulletsSpans = document.querySelectorAll(".bullets span");
let homePage = document.getElementById("home");
let navButtons = document.querySelector(".navbuttons");
let rightButton = document.querySelector(".right");
let leftButton = document.querySelector(".left");
let testimonialBox = document.getElementById("test-box");
let testimonial = document.querySelector(".testimonial");
let dateNow = document.querySelector(".datenow");
let footerUlis = document.querySelectorAll(".footer-ul li");
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
    if(homePage){
        if(bulletsButton.classList.contains("closeMenu")){
            homePage.style.cssText = "height:calc(130vh - 20px)";
            navButtons.style.cssText = "bottom: 0";
            menu.style.display = "none";
            bulletsSpans.forEach((span)=>{
            span.classList.remove("close");
            })
            bulletsButton.classList.toggle("closeMenu");
        }
        else{
            homePage.style.cssText = "height:calc(170vh - 20px)";
            navButtons.style.cssText = "bottom: -35%";
            menu.style.display = "flex";
            bulletsSpans.forEach((span)=>{
            span.classList.add("close");
            })
            bulletsButton.classList.toggle("closeMenu");
            }
    }
    if(navbar.classList.contains("navbarclose")){
        navbar.style.cssText = "height:calc(14vh - 20px)";
        menu.style.display = "none";
        bulletsSpans.forEach((span)=>{
        span.classList.remove("close");
        })
        bulletsButton.classList.toggle("closeMenu");
        navbar.classList.toggle("navbarclose");
    }
    else{
        navbar.style.cssText = "height:calc(40vh - 20px)";
        menu.style.display = "flex";
        bulletsSpans.forEach((span)=>{
        span.classList.add("close");
        })
        bulletsButton.classList.toggle("closeMenu");
        navbar.classList.toggle("navbarclose");
        }
    })
window.onscroll=()=>{
    if(window.scrollY >= testimonial.offsetTop - 600){
        testimonialBox.style.right = "0";
    }
}
let date = new Date();
dateNow.innerHTML=date.getFullYear();
footerUlis.forEach((li)=>{
    li.addEventListener("click",(e)=>{
        footerUlis.forEach((li)=>{
            li.classList.remove("active");
            e.currentTarget.classList.add("active");
        })
    })
})