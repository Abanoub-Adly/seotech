let menu = document.querySelector(".navbar ul");
let navbar = document.querySelector(".navbar");
let menuLis = Array.from(document.querySelectorAll(".navbar ul li"));
let bulletsButton = document.querySelector(".bullets");
let bulletsSpans = document.querySelectorAll(".bullets span");
let homePage = document.getElementById(".home");
let navButtons = document.querySelector(".navbuttons");
let rightButton = document.querySelector(".right");
let leftButton = document.querySelector(".left");
let testimonialBox = document.getElementById("test-box");
let testimonial = document.querySelector(".testimonial");
let dateNow = document.querySelector(".datenow");
let footerUlis = document.querySelectorAll(".footer-ul a");
menuLis.forEach((li)=>{
    li.addEventListener("click",(e)=>{
        if(li.getAttribute("data-current") == window.location.pathname.split("/").pop()){
            removeActive();
            li.getAttribute("data-current").classList.add("active");
        }
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
            homePage.style.cssText = "height:calc(170vh - 20px)";
            navButtons.style.cssText = "bottom: 0";
            menu.style.display = "none";
            bulletsSpans.forEach((span)=>{
            span.classList.remove("close");
            })
            bulletsButton.classList.toggle("closeMenu");
        }
        else{
            homePage.style.cssText = "height:calc(200vh - 20px)";
            navButtons.style.cssText = "bottom: -61%";
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
        navbar.style.cssText = "height:calc(50vh - 20px)";
        menu.style.display = "flex";
        bulletsSpans.forEach((span)=>{
        span.classList.add("close");
        })
        bulletsButton.classList.toggle("closeMenu");
        navbar.classList.toggle("navbarclose");
        }
    })
if(testimonial){
    window.onscroll=()=>{
        if(window.scrollY >= testimonial.offsetTop - 600){
            testimonialBox.style.right = "0";
        }
    }
}
let date = new Date();
dateNow.innerHTML=date.getFullYear();
footerUlis.forEach((li)=>{
    li.addEventListener("click",(e)=>{
    removeActiveFooter();
    console.log(e.currentTarget)
    e.currentTarget.classList.add("active");
    })
})
function removeActiveFooter(){
    footerUlis.forEach((li)=>{
        li.classList.remove("active");
    })
}
console.log(window.location.pathname.split("/").pop())