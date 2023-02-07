var body=document.querySelector('body')
var menuTrigger=document.querySelector('#toggle-main-menu-mobile');var menuContainer=document.querySelector('#main-menu-mobile');menuTrigger.onclick=function(){menuContainer.classList.toggle('open');menuTrigger.classList.toggle('is-active')
body.classList.toggle('lock-scroll')}
window.addEventListener('scroll',(event)=>{const nav=document.querySelector('.header');(window.scrollY>=44)?nav.classList.add('scroll'):nav.classList.remove('scroll');});