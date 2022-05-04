function onScroll() {
  if (scrollY > 0) {
    navigation.classList.add('scrool')
  } else {
    navigation.classList.remove('scrool')
  }
}







function openMenu() {
  document.body.classList.add('menu-expanded')
}

function closeMenu() {
  document.body.classList.remove('menu-expanded')
}