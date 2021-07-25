//---------- This is the start of site menu java scripts----------------//
const navIcon = document.querySelector('.nav_icon')
const siteCloseBtn = document.querySelector('.site-menu-close-btn')

const clickBarSiteMenu = document.querySelector('.click-bar-site-menu')

navIcon.addEventListener('click', function(){
clickBarSiteMenu.classList.add('click-bar-site-menu-active')
})

siteCloseBtn.addEventListener('click',function(){
    clickBarSiteMenu.classList.remove('click-bar-site-menu-active')
})
//---------- This is the end of site menu java scripts----------------//


//---------- This is the start of slider java scripts----------------//
const slides =document.querySelector(".slider").children;
const prev = document.querySelector(".prev");
const next = document. querySelector(".next");
const indicator = document.querySelector(".indicator")
let index =0;

prev.addEventListener("click", function(){
    prevSlide();
    updateCircleIndicator();
    restTimer();
})
next.addEventListener("click", function(){
    nextSlide();
    updateCircleIndicator();
})
function prevSlide(){
    if(index== 0){
        index=slides.length-1;
    }else{
        index--
    }
    changeSlide(  )
}

function nextSlide(){
    if(index== slides.length-1){
        index=0;
    } else{
        index++
    }
   changeSlide()
}

function changeSlide(){
    for(let i= 0; i<slides.length; i++){
        slides[i].classList.remove("active")
    }
    slides[index].classList.add("active");
}

// create indicators

function circleIndicator(){
    for(let i= 0; i< slides.length; i++){
        const div = document.createElement("div");
        div.innerHTML=i+ 1;
        div.setAttribute('onclick', 'indicateSlide(this')
        div.id = i;
        if(i ==0){
            div.className=('active')
        }
        indicator.appendChild(div)
    }
}
circleIndicator()

function updateCircleIndicator(){
    for(let i = 0; i<indicator.children.length; i++){
        indicator.children[i].classList.remove('active');
    }
    indicator.children[index].classList.add('active')
}

function indicateSlide(element){
    index= element.id;
    changeSlide();
    updateCircleIndicator();
}

// Auto play
function restTimer(){
    clearInterval(timer)
    timer = setInterval(autoPlay,6000)
}
function autoPlay(){
    nextSlide()
    updateCircleIndicator()
}
let timer =setInterval(autoPlay,6000);
//---------- This is the end of slider java scripts----------------//
