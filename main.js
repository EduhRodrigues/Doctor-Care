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
  duration: 8500,
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
  #contact a
  `)

  document.getElementById("defaultColorPalette").addEventListener("click", defaultColorPalette)
  function defaultColorPalette () {
    alert(`Prepare-se para uma nova experiência!

    Esta página receberá a paleta de cores: 
    
    Happy Blue Day Alive by Eduh™
    
    `)

    document.querySelector("#body").style.backgroundColor = "#00f";
    document.querySelector("#home").style.backgroundColor = "#00f";
    document.querySelector("#stats").style.backgroundColor = "#00f";
    document.querySelector("#services").style.backgroundColor = "#00f";
   
    document.querySelector(".cardBlackProducts").style.backgroundColor = "#00f";
    document.querySelector(".cardBlack1").style.backgroundColor = "#00f";
    document.querySelector(".cardBlack2").style.backgroundColor = "#00f";
    document.querySelector(".cardBlack3").style.backgroundColor = "#00f";
    document.querySelector(".cardBlack4").style.backgroundColor = "#00f";
    document.querySelector(".cardBlack5").style.backgroundColor = "#00f";
    document.querySelector(".cardBlack6").style.backgroundColor = "#00f";

    document.querySelector(".about-bg-color").style.backgroundColor = "#00f";
    document.querySelector(".contact-bg-color").style.backgroundColor = "#00f";

    document.querySelector("#navigation").style.backgroundColor = "hsl(189, 55%, 50%)";  
    document.querySelector("#footer").style.backgroundColor = "hsl(189, 75%, 50%)";
  }

  document.getElementById("custom01ColorPalette").addEventListener("click", custom01ColorPalette)
  function custom01ColorPalette () {
    alert(`Prepare-se para uma nova experiência!

    Esta página receberá a paleta de cores: 
    
    Dark Shine Sky by Eduh™
    
    `)

    document.querySelector("#body").style.backgroundColor = "#000";
    document.querySelector("#home").style.backgroundColor = "#000";
    document.querySelector("#stats").style.backgroundColor = "#000";
    document.querySelector("#services").style.backgroundColor = "#000";
   
    document.querySelector(".cardBlackProducts").style.backgroundColor = "#000";
    document.querySelector(".cardBlack1").style.backgroundColor = "#000";
    document.querySelector(".cardBlack2").style.backgroundColor = "#000";
    document.querySelector(".cardBlack3").style.backgroundColor = "#000";
    document.querySelector(".cardBlack4").style.backgroundColor = "#000";
    document.querySelector(".cardBlack5").style.backgroundColor = "#000";
    document.querySelector(".cardBlack6").style.backgroundColor = "#000";

    document.querySelector(".button").style.backgroundColor = "#000";
    document.querySelector(".button").style.borderColor = "#fff";
    document.querySelector(".button").style.color = "green";

    document.querySelector("section .button").style.backgroundColor = "#000";
    document.querySelector("section .button").style.borderColor = "#000";
    document.querySelector("section .button").style.color = "#fff";

    document.querySelector(".menu").style.backgroundColor = "#000";

    document.querySelector(".about-bg-color").style.backgroundColor = "#000";

    document.querySelector(".contact-bg-color").style.backgroundColor = "#000";

    document.querySelector("#navigation").style.backgroundColor = "#000";
    document.querySelector("#footer").style.backgroundColor = "#000";
  }

  document.getElementById("custom02ColorPalette").addEventListener("click", custom02ColorPalette)
  function custom02ColorPalette () {
    alert(`Prepare-se para uma nova experiência!

    Esta página receberá a paleta de cores: 
    
    Amazon Breathe by Eduh™
    
    `)

    document.querySelector("#body").style.backgroundColor = "#22B103";
    document.querySelector("#home").style.backgroundColor = "#22B103";
    document.querySelector("#stats").style.backgroundColor = "#22B103";
    document.querySelector("#services").style.backgroundColor = "#22B103";
   
    document.querySelector(".cardBlackProducts").style.backgroundColor = "#22B103";
    document.querySelector(".cardBlack1").style.backgroundColor = "#22B103";
    document.querySelector(".cardBlack2").style.backgroundColor = "#22B103";
    document.querySelector(".cardBlack3").style.backgroundColor = "#22B103";
    document.querySelector(".cardBlack4").style.backgroundColor = "#22B103";
    document.querySelector(".cardBlack5").style.backgroundColor = "#22B103";
    document.querySelector(".cardBlack6").style.backgroundColor = "#22B103";

    document.querySelector(".button").style.backgroundColor = "#228303";
    document.querySelector(".button").style.borderColor = "#228303";
    document.querySelector(".button").style.color = "#fff";

    document.querySelector("section .button").style.backgroundColor = "#228303";
    document.querySelector("section .button").style.borderColor = "#22B103";
    document.querySelector("section .button").color = "#fff";


    document.querySelector(".menu").style.backgroundColor = "#22B103";

    document.querySelector(".about-bg-color").style.backgroundColor = "#22B103";
    document.querySelector(".contact-bg-color").style.backgroundColor = "#22B103";

    document.querySelector("#navigation").style.backgroundColor = "#228303";
    document.querySelector("#footer").style.backgroundColor = "#228303";
  }

  document.getElementById("custom03ColorPalette").addEventListener("click", custom03ColorPalette)
  function custom03ColorPalette () {
    alert("Esta página receberá uma nova paleta de cores.")
  }

  document.getElementById("custom04ColorPalette").addEventListener("click", custom04ColorPalette)
  function custom04ColorPalette () {
    alert("Esta página receberá uma nova paleta de cores.")
  }
