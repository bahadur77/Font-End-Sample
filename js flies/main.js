const navIcon = document.querySelector('.nav_icon')
const siteCloseBtn = document.querySelector('.site-menu-close-btn')

const clickBarSiteMenu = document.querySelector('.click-bar-site-menu')

navIcon.addEventListener('click', function(){
clickBarSiteMenu.classList.add('click-bar-site-menu-active')
})

siteCloseBtn.addEventListener('click',function(){
    clickBarSiteMenu.classList.remove('click-bar-site-menu-active')
})



// dropdown test

const btBtn= document.querySelector('.bt-btn')
const test = document.querySelector('.test')

btBtn.addEventListener('mouseover',function(){
    test.classList.add('test-active')
})
btBtn.addEventListener('mouseout',function(){
    test.classList.remove('test-active')
})
