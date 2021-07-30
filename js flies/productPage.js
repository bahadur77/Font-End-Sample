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

//---------- This is the start of account dropdown java scripts----------------//

const accountButton = document.querySelector('.account-subcontainer')
const accountCloseButton = document.querySelector('.close-account-btn')
const accountDropDown = document.querySelector('.account-dropdown-main')

accountButton.addEventListener('click', function(){
    accountDropDown.classList.add('account-dropdown-main-active')
})
accountCloseButton.addEventListener('click', function(){
    accountDropDown.classList.remove('account-dropdown-main-active')
})

//---------- This is the end of account dropdown java scripts----------------//