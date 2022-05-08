window.addEventListener('scroll',onScroll )

onScroll()
function onScroll(){
  showNavOnScrool()
  showBackToTopbuttonOnScroll()
  activateMenuAtCurrentSection ()
}

function showNavOnScrool(){
  if (scrollY > 0) {
    navigation.classList.add('scroll')  
  } else {
    navigation.classList.remove('scroll')
  }
}

function showBackToTopbuttonOnScroll(){
  if (scrollY > 500) {
    backToTopButton.classList.add('show')  
  } else {
    backToTopButton.classList.remove('show')
  }

}
function openMenu(){
  document.body.classList.add('menu-expanded')
}
function closeMenu(){
  document.body.classList.remove('menu-expanded')
}
ScrollReveal({
  origini: 'top',
  distance: '30px',
  duration: 800,
}).reveal(`
#home, 
#home img,
#home .stats,
#services,
#services header,
#services.cards,
#about,
#about header,
#about .content`);