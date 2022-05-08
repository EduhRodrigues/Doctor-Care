window.addEventListener("scroll", onScroll)


function onScroll() {
  showNavOnScroll()
  showBackToTopButtonOnScroll()
}

function showNavOnScroll() {
  if (scrollY > 0) {
    navigation.classList.add('scroll')
  } else {
    navigation.classList.remove('scroll')
  }}

  function showBackToTopButtonOnScroll (){
    if (scrollY > 2635) {
      backToTopButton.classList.add('show')
    } else {
      backToTopButton.classList.remove('show')
  }}

function openMenu() {
  document.body.classList.add('menu-expanded')
}

function closeMenu() {
  document.body.classList.remove('menu-expanded')
}

ScrollReveal({
  origin: 'top',
  distance: '50px',
  duration: 2500,
}).reveal(`
  #home, 
  #services,
  #services header,
  #services .card,
  #about, 
  #about header, 
  #about .content
  `)
