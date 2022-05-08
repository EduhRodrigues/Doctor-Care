window.addEventListener("scroll", onScroll)

onScroll()
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
  duration: 2000,
}).reveal(`
  #home header, 
  #home h3,
  #home p,
  #home a,
  #services header,
  #services .card, 
  #about header, 
  #about .content,
  #contact header,
  #contact ul,
  #contact a,
  #footer
  `)