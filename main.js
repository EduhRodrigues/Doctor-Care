window.addEventListener("scroll", onScroll)

onScroll()
function onScroll() {
  showNavOnScroll()
  showBackToTopButtonOnScroll()
}

function showNavOnScroll() {
  if (scrollY > 0) {
    navigation.classList.add('scrollDefaultTheme');
    
  } else {
    navigation.classList.remove('scrollDefaultTheme');
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
  duration: 1500,
}).reveal(`
  #home header, 
  #home h3,
  #home p,
  #home a,
  #services .card, 
  #about .content,
  #contact ul,
  #contact a
  `)

  document.getElementById("custom01ColorPalette").addEventListener("click", addDarkShineSkyThemeFunction)
  function addDarkShineSkyThemeFunction () {
    alert(`Prepare-se para uma nova experiência!

    Esta página receberá a paleta de cores: 
    
    Dark Shine Sky by Eduh™`)

    window.addEventListener("scroll", darkShineSkyThemeOnScroll)
   
        document.querySelector(".openMenuColor1").style.stroke = "#fff";
        document.querySelector(".openMenuColor2").style.stroke = "#fff";
        document.querySelector(".openMenuColor3").style.stroke = "#fff";
        document.querySelector("#navigation").style.backgroundColor = "#272727";

      function darkShineSkyThemeOnScroll () {
      if (scrollY > 0) {
    
        document.querySelector(".openMenuColor1").style.stroke = "#fff";
        document.querySelector(".openMenuColor2").style.stroke = "#fff";
        document.querySelector(".openMenuColor3").style.stroke = "#fff";
        document.querySelector("#navigation").style.backgroundColor = "#272727";
      } else {
       
        document.querySelector(".openMenuColor1").style.stroke = "#00d9ff";
        document.querySelector(".openMenuColor2").style.stroke = "#00d9ff";
        document.querySelector(".openMenuColor3").style.stroke = "#00d9ff";
        document.querySelector("#navigation").style.backgroundColor = "#000";
      }}

    document.getElementById('iframeProducts').src="https://docs.google.com/spreadsheets/d/e/2PACX-1vQoHx1_iniuYaD89UITs6JglwISLg8OxpZoEYYDDVBMxYITsCMOsEyJ5ALC-9l6BO2z1uLnMa227a-R/pubhtml?gid=1476416633&amp;single=true&amp;widget=true&amp;headers=false";

    document.querySelector(".aqui1").style.color = "#00d9ff";
    document.querySelector(".aqui2").style.color = "#00d9ff";

    document.querySelector("h1").style.color = "beige"
    document.querySelector("h2").style.color = "#00d9ff";
    document.querySelector("#h2autoServiceColor").style.color = "#00d9ff";
    document.querySelector("h4").style.color = "#00d9ff";
    document.querySelector("p").style.color = "#fff";

    document.querySelector(".este1").style.color = "#00d9ff";
    document.querySelector(".este2").style.color = "#00d9ff";
    document.querySelector(".este3").style.color = "#00d9ff";
    document.querySelector(".este4").style.color = "#fff";
    document.querySelector(".este5").style.color = "#fff";
    document.querySelector(".este6").style.color = "#fff";

    document.querySelector("#body").style.backgroundColor = "#000";
    document.querySelector("#home").style.backgroundColor = "#000";

    document.querySelector("#stats").style.backgroundColor = "#000";
    document.querySelector("#stats").style.border = "#00d9ff";
    document.querySelector("#stats").style.boxShadow = "0px 0px 3rem #00d9ff";

    document.querySelector("#services").style.backgroundColor = "#000";

    document.querySelector(".carde").style.boxShadow = "0px 0px 2rem #00d9ff";

    document.querySelector(".cardBlackProducts").style.backgroundColor = "#000";
    document.querySelector(".cardBlackProducts").style.border = "3px solid #00d9ff";
    document.querySelector(".cardBlackProducts").style.boxShadow = "0px 0px 3rem #00d9ff";
    document.querySelector(".cardBlackProducts").style.color = "#00d9ff";
    document.querySelector(".cardBlackProducts circle").style.fill = "#00d9ff";
    document.querySelector(".cardBlackProducts path").style.stroke = "#000";

    document.querySelector(".cardBlack1 h3").style.color = "#00d9ff";
    document.querySelector(".cardBlack1").style.backgroundColor = "#000";
    document.querySelector(".cardBlack1").style.border = "3px solid #00d9ff";
    document.querySelector(".cardBlack1").style.boxShadow = "0px 0px 2rem #00d9ff";
    document.querySelector(".cardBlack1 circle").style.fill = "#00d9ff";
    document.querySelector(".cardBlack1 path").style.stroke = "#000";
    document.querySelector(".cardBlack1 .newStoreSpan").style.color = "#00d9ff";
    document.querySelector(".cardBlack1 .roteSpan").style.color = "#00d9ff";

    document.querySelector(".cardBlack2 h3").style.color = "#00d9ff";
    document.querySelector(".cardBlack2").style.backgroundColor = "#000";
    document.querySelector(".cardBlack2").style.border = "3px solid #00d9ff";
    document.querySelector(".cardBlack2").style.boxShadow = "0px 0px 2rem #00d9ff";
    document.querySelector(".cardBlack2 circle").style.fill = "#00d9ff";
    document.querySelector(".cardBlack2 path").style.stroke = "#000";
    document.querySelector(".cardBlack2 .freeDeliverySpan").style.color = "#00d9ff";
    document.querySelector(".cardBlack2 .discountCouponSpan").style.color = "#00d9ff";
  
    document.querySelector(".cardBlack3 h3").style.color = "#00d9ff";
    document.querySelector(".cardBlack3").style.backgroundColor = "#000";
    document.querySelector(".cardBlack3").style.border = "3px solid #00d9ff";
    document.querySelector(".cardBlack3").style.boxShadow = "0px 0px 2rem #00d9ff";
    document.querySelector(".cardBlack3 circle").style.fill = "#00d9ff";
    document.querySelector(".cardBlack3 path").style.stroke = "#000";
    document.querySelector(".cardBlack3 .emergencyCareSpan").style.color = "#00d9ff";
    document.querySelector(".cardBlack3 .freeSpan").style.color = "#00d9ff";
    document.querySelector(".cardBlack3 .callNowSpan").style.color = "#00d9ff";

    document.querySelector(".cardBlack4 h3").style.color = "#00d9ff";
    document.querySelector(".cardBlack4").style.backgroundColor = "#000";
    document.querySelector(".cardBlack4").style.border = "3px solid #00d9ff";
    document.querySelector(".cardBlack4").style.boxShadow = "0px 0px 2rem #00d9ff";
    document.querySelector(".cardBlack4 circle").style.fill = "#00d9ff";
    document.querySelector(".cardBlack4 path").style.stroke = "#000";
    document.querySelector(".cardBlack4 .vaccinationSpan").style.color = "#00d9ff";
    document.querySelector(".cardBlack4 .antiParasiticSpan").style.color = "#00d9ff";

    document.querySelector(".cardBlack5 h3").style.color = "#00d9ff";
    document.querySelector(".cardBlack5").style.backgroundColor = "#000";
    document.querySelector(".cardBlack5").style.border = "3px solid #00d9ff";
    document.querySelector(".cardBlack5").style.boxShadow = "0px 0px 2rem #00d9ff";
    document.querySelector(".cardBlack5 circle").style.fill = "#00d9ff";
    document.querySelector(".cardBlack5 path").style.stroke = "#000";
    document.querySelector(".cardBlack5 .showerSpan").style.color = "#00d9ff";
    document.querySelector(".cardBlack5 .aestheticsSpan").style.color = "#00d9ff";
    document.querySelector(".cardBlack5 .storeSpan").style.color = "#00d9ff";
    document.querySelector(".cardBlack5 .residenceSpan").style.color = "#00d9ff";

    document.querySelector(".cardBlack6 h3").style.color = "#00d9ff";
    document.querySelector(".cardBlack6").style.backgroundColor = "#000";
    document.querySelector(".cardBlack6").style.border = "3px solid #00d9ff";
    document.querySelector(".cardBlack6").style.boxShadow = "0px 0px 2rem #00d9ff";
    document.querySelector(".cardBlack6 circle").style.fill = "#00d9ff";
    document.querySelector(".cardBlack6 path").style.stroke = "#000";
    document.querySelector(".cardBlack6 .walkingSpan").style.color = "#00d9ff";
    document.querySelector(".cardBlack6 .playgroundSpan").style.color = "#00d9ff";
    document.querySelector(".cardBlack6 .socializationSpan").style.color = "#00d9ff";

    document.querySelector(".button").style.backgroundColor = "#000";
    document.querySelector(".button").style.border = "5px solid #fff";
    document.querySelector(".button").style.color = "#fff";

    document.querySelector("section .button").style.backgroundColor = "#000";
    document.querySelector("section .button").style.border = "5px solid #00d9ff";
    document.querySelector("section .button").style.boxShadow = "0px 0px 2rem #00d9ff";
    document.querySelector("section .button").style.color = "#fff";

   
    document.querySelector(".contact-bg-color").style.backgroundColor = "#000";
    document.querySelector("#contact h2").style.color = "#00d9ff";
    document.querySelector("#contact .button").style.backgroundColor = "#000";
    document.querySelector("#contact .button").style.borderColor = "#000";
    document.querySelector("#contact .button").style.boxShadow =  "0px 0px 2rem #00d9ff";

    document.getElementById("here1").style.stroke = "#00d9ff";
    document.getElementById("here2").style.stroke = "#00d9ff";
    document.getElementById("here3").style.stroke = "#00d9ff";
    document.getElementById("here4").style.stroke = "#00d9ff";

    document.querySelector(".about-bg-color").style.backgroundColor = "#000";
    document.querySelector("#about h2").style.color = "#00d9ff";

    document.querySelector(".menu").style.backgroundColor = "#000";

    document.querySelector("#closeMenuColor").style.stroke = "#00d9ff";

    document.querySelector("#backToTopButton circle").style.fill = "#004e61";
    document.querySelector("#backToTopButton .path1").style.stroke = "#000";
    document.querySelector("#backToTopButton .path2").style.stroke = "#000";

    document.querySelector("#footer").style.backgroundColor = "#272727";
  }

  document.getElementById("custom02ColorPalette").addEventListener("click", addAmazonBreatheThemeFunction)
  function addAmazonBreatheThemeFunction () {
    alert(`Prepare-se para uma nova experiência!

    Esta página receberá a paleta de cores: 
    
    Amazon Breathe by Eduh™`)

    window.addEventListener("scroll", AmazonBreatheThemeOnScroll)
        document.querySelector(".openMenuColor1").style.stroke = "#22ce00";
        document.querySelector(".openMenuColor2").style.stroke = "#22ce00";
        document.querySelector(".openMenuColor3").style.stroke = "#22ce00";
        document.querySelector("#navigation").style.backgroundColor = "#228303";

      function AmazonBreatheThemeOnScroll () {
      if (scrollY > 0) {
        document.querySelector(".openMenuColor1").style.stroke = "#22ce00";
        document.querySelector(".openMenuColor2").style.stroke = "#22ce00";
        document.querySelector(".openMenuColor3").style.stroke = "#22ce00";
        document.querySelector("#navigation").style.backgroundColor = "#228303";
      } else {
        document.querySelector(".openMenuColor1").style.stroke = "#004203";
        document.querySelector(".openMenuColor2").style.stroke = "#004203";
        document.querySelector(".openMenuColor3").style.stroke = "#004203";
        document.querySelector("#navigation").style.backgroundColor = "#22B103";
      }}

    document.getElementById('iframeProducts').src="https://docs.google.com/spreadsheets/d/e/2PACX-1vSQTZpnLzMpDCScHrUr31gtuKTYW2AtouDVTFD0zFcf5fMLjSyT0OcZ-9fyEOf-ZQk8qb5Sr9rTfpT6/pubhtml?gid=1476416633&amp;single=true&amp;widget=true&amp;headers=false";
   
    document.querySelector(".aqui1").style.color = "#004203";
    document.querySelector(".aqui2").style.color = "#004203";

    document.querySelector("h1").style.color = "#004203";
    document.querySelector("h2").style.color = "#004203";
    document.querySelector("#h2autoServiceColor").style.color = "#004203";
    document.querySelector("h4").style.color = "#fff";
    document.querySelector("p").style.color = "#fff";

    document.querySelector(".este1").style.color = "yellow";
    document.querySelector(".este2").style.color = "yellow";
    document.querySelector(".este3").style.color = "yellow";
    document.querySelector(".este4").style.color = "#004203";
    document.querySelector(".este5").style.color = "#004203";
    document.querySelector(".este6").style.color = "#004203";
  
    document.querySelector("#body").style.backgroundColor = "#22B103";
    document.querySelector("#home").style.backgroundColor = "#22B103";

    document.querySelector("#stats").style.backgroundColor = "#22B103";
    document.querySelector("#stats").style.border = "#22B103";
    document.querySelector("#stats").style.boxShadow = "0px 0px 3rem #003303";

    document.querySelector("#services").style.backgroundColor = "#22B103";

    document.querySelector(".carde").style.boxShadow = "0px 0px 2rem #003303";

    document.querySelector(".cardBlackProducts h3").style.color = "#fff000";
    document.querySelector(".cardBlackProducts").style.backgroundColor = "#22B103";
    document.querySelector(".cardBlackProducts").style.border = "#22B103";
    document.querySelector(".cardBlackProducts").style.boxShadow = "0px 0px 3rem #003303";
    document.querySelector(".cardBlackProducts circle").style.fill = "#2fff00";
    document.querySelector(".cardBlackProducts path").style.stroke = "#003303";

    document.querySelector(".cardBlack1 h3").style.color = "#003303";
    document.querySelector(".cardBlack1").style.backgroundColor = "#22B103";
    document.querySelector(".cardBlack1").style.border = "#22B103";
    document.querySelector(".cardBlack1").style.boxShadow = "0px 0px 3rem #003303";
    document.querySelector(".cardBlack1 circle").style.fill = "#2fff00";
    document.querySelector(".cardBlack1 path").style.stroke = "#003303";
    document.querySelector(".cardBlack1 .newStoreSpan").style.color = "#2fff00";
    document.querySelector(".cardBlack1 .roteSpan").style.color = "#003303";

    document.querySelector(".cardBlack2 h3").style.color = "#003303";
    document.querySelector(".cardBlack2").style.backgroundColor = "#22B103";
    document.querySelector(".cardBlack2").style.border = "#22B103";
    document.querySelector(".cardBlack2").style.boxShadow = "0px 0px 3rem #003303";
    document.querySelector(".cardBlack2 circle").style.fill = "#2fff00";
    document.querySelector(".cardBlack2 path").style.stroke = "#003303";
    document.querySelector(".cardBlack2 .freeDeliverySpan").style.color = "#2fff00";
    document.querySelector(".cardBlack2 .discountCouponSpan").style.color = "#2fff00";
    
    document.querySelector(".cardBlack3 h3").style.color = "#003303";
    document.querySelector(".cardBlack3").style.backgroundColor = "#22B103";
    document.querySelector(".cardBlack3").style.border = "#22B103";
    document.querySelector(".cardBlack3").style.boxShadow = "0px 0px 3rem #003303";
    document.querySelector(".cardBlack3 circle").style.fill = "#2fff00";
    document.querySelector(".cardBlack3 path").style.stroke = "#003303";
    document.querySelector(".cardBlack3 .emergencyCareSpan").style.color = "#2fff00";
    document.querySelector(".cardBlack3 .freeSpan").style.color = "#2fff00";
    document.querySelector(".cardBlack3 .callNowSpan").style.color = "#004203";

    document.querySelector(".cardBlack4 h3").style.color = "#003303";
    document.querySelector(".cardBlack4").style.backgroundColor = "#22B103";
    document.querySelector(".cardBlack4").style.border = "#22B103";
    document.querySelector(".cardBlack4").style.boxShadow = "0px 0px 3rem #003303";
    document.querySelector(".cardBlack4 circle").style.fill = "#2fff00";
    document.querySelector(".cardBlack4 path").style.stroke = "#003303";
    document.querySelector(".cardBlack4 .vaccinationSpan").style.color = "#2fff00";
    document.querySelector(".cardBlack4 .antiParasiticSpan").style.color = "#2fff00";

    document.querySelector(".cardBlack5 h3").style.color = "#003303";
    document.querySelector(".cardBlack5").style.backgroundColor = "#22B103";
    document.querySelector(".cardBlack5").style.border = "#22B103";
    document.querySelector(".cardBlack5").style.boxShadow = "0px 0px 3rem #003303";
    document.querySelector(".cardBlack5 circle").style.fill = "#2fff00";
    document.querySelector(".cardBlack5 path").style.stroke = "#003303";
    document.querySelector(".cardBlack5 .showerSpan").style.color = "#2fff00";
    document.querySelector(".cardBlack5 .aestheticsSpan").style.color = "#2fff00";
    document.querySelector(".cardBlack5 .storeSpan").style.color = "#2fff00";
    document.querySelector(".cardBlack5 .residenceSpan").style.color = "#2fff00";

    document.querySelector(".cardBlack6 h3").style.color = "#003303";
    document.querySelector(".cardBlack6").style.backgroundColor = "#22B103";
    document.querySelector(".cardBlack6").style.border = "#22B103";
    document.querySelector(".cardBlack6").style.boxShadow = "0px 0px 3rem #003303";
    document.querySelector(".cardBlack6 circle").style.fill = "#2fff00";
    document.querySelector(".cardBlack6 path").style.stroke = "#003303";
    document.querySelector(".cardBlack6 .walkingSpan").style.color = "#2fff00";
    document.querySelector(".cardBlack6 .playgroundSpan").style.color = "#2fff00";
    document.querySelector(".cardBlack6 .socializationSpan").style.color = "#2fff00";
  
    document.querySelector(".button").style.backgroundColor = "#228303";
    document.querySelector(".button").style.border = "5px solid #fff";
    document.querySelector(".button").style.color = "#fff";

    document.querySelector("section .button").style.backgroundColor = "#228303";
    document.querySelector("section .button").style.borderColor = "#228303";
    document.querySelector("section .button").style.boxShadow = "0px 10px 2rem #003303";
    document.querySelector("section .button").style.color = "#fff";

    document.querySelector(".contact-bg-color").style.backgroundColor = "#22B103";
    document.querySelector("#contact h2").style.color = "yellow";
    document.querySelector("#contact .button").style.backgroundColor = "#228303";
    document.querySelector("#contact .button").style.borderColor = "#228303";
    document.querySelector("#contact .button").style.boxShadow =  "0px 10px 2rem #003303";

    document.getElementById("here1").style.stroke = "#228303";
    document.getElementById("here2").style.stroke = "#228303";
    document.getElementById("here3").style.stroke = "#228303";
    document.getElementById("here4").style.stroke = "#228303";

    document.querySelector(".about-bg-color").style.backgroundColor = "#22B103";
    document.querySelector("#about h2").style.color = "yellow";

    document.querySelector(".menu").style.backgroundColor = "#22B103";
    document.querySelector("#closeMenuColor").style.stroke = "#1c7200";

    document.querySelector("#backToTopButton circle").style.fill = "#22ce00";
    document.querySelector("#backToTopButton .path1").style.stroke = "#228303";
    document.querySelector("#backToTopButton .path2").style.stroke = "#228303";

    document.querySelector("#footer").style.backgroundColor = "#228303";
  }

  document.getElementById("custom04ColorPalette").addEventListener("click", addHelloPinkLolThemeFunction)
  function addHelloPinkLolThemeFunction () {
    alert(`Prepare-se para uma nova experiência!

    Esta página receberá a paleta de cores: 
    
    Hello Pink lol by Eduh™`)

    window.addEventListener("scroll", HelloPinkLolThemeOnScroll)
        document.querySelector(".openMenuColor1").style.stroke = "#fff";
        document.querySelector(".openMenuColor2").style.stroke = "#fff";
        document.querySelector(".openMenuColor3").style.stroke = "#fff";
        document.querySelector("#navigation").style.backgroundColor = "#c000c0";

      function HelloPinkLolThemeOnScroll () {
      if (scrollY > 0) {
        document.querySelector(".openMenuColor1").style.stroke = "#fff";
        document.querySelector(".openMenuColor2").style.stroke = "#fff";
        document.querySelector(".openMenuColor3").style.stroke = "#fff";
        document.querySelector("#navigation").style.backgroundColor = "#c000c0";
      } else {
        document.querySelector(".openMenuColor1").style.stroke = "#640064";
        document.querySelector(".openMenuColor2").style.stroke = "#640064";
        document.querySelector(".openMenuColor3").style.stroke = "#640064";
        document.querySelector("#navigation").style.backgroundColor = "#ff00ff";
      }}

    document.getElementById('iframeProducts').src="https://docs.google.com/spreadsheets/d/e/2PACX-1vQsllf3ENP9LLheTKrt1LuK3JVHdSadVOcgp1XAWszsh2V7BhYPfo0jiao06LgVCb-6GwLaf8zKSeuM/pubhtml?gid=1476416633&amp;single=true&amp;widget=true&amp;headers=false"

    document.querySelector(".aqui1").style.color = "#640064";
    document.querySelector(".aqui2").style.color = "#640064";

    document.querySelector("h1").style.color = "#640064";
    document.querySelector("h2").style.color = "#640064";
    document.querySelector("#h2autoServiceColor").style.color = "#640064";
    document.querySelector("h4").style.color = "#fff";
    document.querySelector("p").style.color = "#fff";

    document.querySelector(".este1").style.color = "#fff";
    document.querySelector(".este2").style.color = "#fff";
    document.querySelector(".este3").style.color = "#fff";
    document.querySelector(".este4").style.color = "#640064";
    document.querySelector(".este5").style.color = "#640064";
    document.querySelector(".este6").style.color = "#640064";

    document.querySelector("#body").style.backgroundColor = "#ff00ff";
    document.querySelector("#home").style.backgroundColor = "#ff00ff";

    document.querySelector("#stats").style.backgroundColor = "#ff00ff";
    document.querySelector("#stats").style.border = "3px solid white";
    document.querySelector("#stats").style.boxShadow = "0px 0px 2rem #640064";

    document.querySelector("#services").style.backgroundColor = "#ff00ff";

    document.querySelector(".carde").style.boxShadow = "0px 0px 2rem #640064";
   
    document.querySelector(".cardBlackProducts h3").style.color = "yellow";
    document.querySelector(".cardBlackProducts").style.backgroundColor = "#ff00ff";
    document.querySelector(".cardBlackProducts").style.border = "1px solid #ff00ff";
    document.querySelector(".cardBlackProducts").style.boxShadow = "0px 0px 2rem #640064";
    document.querySelector(".cardBlackProducts circle").style.fill = "#fff";
    document.querySelector(".cardBlackProducts path").style.stroke = "#ff00ff";
    
    document.querySelector(".cardBlack1 h3").style.color = "#640064";
    document.querySelector(".cardBlack1").style.backgroundColor = "#ff00ff";
    document.querySelector(".cardBlack1").style.border = "5px solid #c000c0";
    document.querySelector(".cardBlack1").style.boxShadow = "0px 0px 1rem #640064";
    document.querySelector(".cardBlack1 circle").style.fill = "#fff";
    document.querySelector(".cardBlack1 path").style.stroke = "#ff00ff";
    document.querySelector(".cardBlack1 .newStoreSpan").style.color = "#640064";
    document.querySelector(".cardBlack1 .roteSpan").style.color = "#640064";
   
    document.querySelector(".cardBlack2 h3").style.color = "#640064";
    document.querySelector(".cardBlack2").style.backgroundColor = "#ff00ff";
    document.querySelector(".cardBlack2").style.border = "5px solid #c000c0";
    document.querySelector(".cardBlack2").style.boxShadow = "0px 0px 1rem #640064";
    document.querySelector(".cardBlack2 circle").style.fill = "#fff";
    document.querySelector(".cardBlack2 path").style.stroke = "#ff00ff";
    document.querySelector(".cardBlack2 .freeDeliverySpan").style.color = "#640064";
    document.querySelector(".cardBlack2 .discountCouponSpan").style.color = "#640064";
   
    document.querySelector(".cardBlack3 h3").style.color = "#640064";
    document.querySelector(".cardBlack3").style.backgroundColor = "#ff00ff";
    document.querySelector(".cardBlack3").style.border = "5px solid #c000c0";
    document.querySelector(".cardBlack3").style.boxShadow = "0px 0px 1rem #640064";
    document.querySelector(".cardBlack3 circle").style.fill = "#fff";
    document.querySelector(".cardBlack3 path").style.stroke = "#ff00ff";
    document.querySelector(".cardBlack3 .emergencyCareSpan").style.color = "#640064";
    document.querySelector(".cardBlack3 .freeSpan").style.color = "#640064";
    document.querySelector(".cardBlack3 .callNowSpan").style.color = "#640064";
    
    document.querySelector(".cardBlack4 h3").style.color = "#640064";
    document.querySelector(".cardBlack4").style.backgroundColor = "#ff00ff";
    document.querySelector(".cardBlack4").style.border = "5px solid #c000c0";
    document.querySelector(".cardBlack4").style.boxShadow = "0px 0px 1rem #640064";
    document.querySelector(".cardBlack4 circle").style.fill = "#fff";
    document.querySelector(".cardBlack4 path").style.stroke = "#ff00ff";
    document.querySelector(".cardBlack4 .vaccinationSpan").style.color = "#640064";
    document.querySelector(".cardBlack4 .antiParasiticSpan").style.color = "#640064";
    
    document.querySelector(".cardBlack5 h3").style.color = "#640064";
    document.querySelector(".cardBlack5").style.backgroundColor = "#ff00ff";
    document.querySelector(".cardBlack5").style.border = "5px solid #c000c0";
    document.querySelector(".cardBlack5").style.boxShadow = "0px 0px 1rem #640064";
    document.querySelector(".cardBlack5 circle").style.fill = "#fff";
    document.querySelector(".cardBlack5 path").style.stroke = "#ff00ff";
    document.querySelector(".cardBlack5 .showerSpan").style.color = "#640064";
    document.querySelector(".cardBlack5 .aestheticsSpan").style.color = "#640064";
    document.querySelector(".cardBlack5 .storeSpan").style.color = "#640064";
    document.querySelector(".cardBlack5 .residenceSpan").style.color = "#640064";
   
    document.querySelector(".cardBlack6 h3").style.color = "#640064";
    document.querySelector(".cardBlack6").style.backgroundColor = "#ff00ff";
    document.querySelector(".cardBlack6").style.border = "5px solid #c000c0";
    document.querySelector(".cardBlack6").style.boxShadow = "0px 0px 1rem #640064";
    document.querySelector(".cardBlack6 circle").style.fill = "#fff";
    document.querySelector(".cardBlack6 path").style.stroke = "#ff00ff";
    document.querySelector(".cardBlack6 .walkingSpan").style.color = "#640064";
    document.querySelector(".cardBlack6 .playgroundSpan").style.color = "#640064";
    document.querySelector(".cardBlack6 .socializationSpan").style.color = "#640064";
    
    document.querySelector(".button").style.backgroundColor = "#c000c0";
    document.querySelector(".button").style.border = "5px solid #fff";
    document.querySelector(".button").style.color = "#fff";

    document.querySelector("section .button").style.backgroundColor = "#c000c0";
    document.querySelector("section .button").style.border = "5px solid #ff00ff";
    document.querySelector("section .button").style.boxShadow = "0px 10px 2rem #640064";
    document.querySelector("section .button").style.color = "#fff";

    document.querySelector(".contact-bg-color").style.backgroundColor = "#ff00ff";
    document.querySelector("#contact h2").style.color = "#640064";
    document.querySelector("#contact .button").style.backgroundColor = "#c000c0";
    document.querySelector("#contact .button").style.border = "5px solid #ff00ff";
    document.querySelector("#contact .button").style.boxShadow = "0px 10px 2rem #640064";

    document.getElementById("here1").style.stroke = "#640064";
    document.getElementById("here2").style.stroke = "#640064";
    document.getElementById("here3").style.stroke = "#640064";
    document.getElementById("here4").style.stroke = "#640064";

    document.querySelector(".about-bg-color").style.backgroundColor = "#ff00ff";
    document.querySelector("#about h2").style.color = "#640064";

    document.querySelector(".menu").style.backgroundColor = "#ff00ff";
    document.querySelector("#closeMenuColor").style.stroke = "#c000c0";

    document.querySelector("#backToTopButton circle").style.fill = "#df00df";
    document.querySelector("#backToTopButton .path1").style.stroke = "#fff";
    document.querySelector("#backToTopButton .path2").style.stroke = "#fff";

    document.querySelector("#footer").style.backgroundColor = "#c000c0";
  }

  document.getElementById("defaultColorPalette").addEventListener("click", addBlueAliveDayThemeFunction);
 
  function addBlueAliveDayThemeFunction () {
    alert(`Prepare-se para uma nova experiência!

    Esta página receberá a paleta de cores: 
    
    Blue Alive Day by Eduh™`)

    window.addEventListener("scroll", BlueAliveDayThemeOnScroll)
    document.querySelector(".openMenuColor1").style.stroke = "#fff";
    document.querySelector(".openMenuColor2").style.stroke = "#fff";
    document.querySelector(".openMenuColor3").style.stroke = "#fff";
    document.querySelector("#navigation").style.backgroundColor = "#1f54ff";

      function BlueAliveDayThemeOnScroll () {
      
      if (scrollY > 0) {
        document.querySelector(".openMenuColor1").style.stroke = "#fff";
        document.querySelector(".openMenuColor2").style.stroke = "#fff";
        document.querySelector(".openMenuColor3").style.stroke = "#fff";
        document.querySelector("#navigation").style.backgroundColor = "#1f54ff";
        
      } else {
        document.querySelector(".openMenuColor1").style.stroke = "#00d9ff";
        document.querySelector(".openMenuColor2").style.stroke = "#00d9ff";
        document.querySelector(".openMenuColor3").style.stroke = "#00d9ff";
        document.querySelector("#navigation").style.backgroundColor = "#00f";
      }}

    document.getElementById('iframeProducts').src="https://docs.google.com/spreadsheets/d/e/2PACX-1vQvade7ScN6Zq_7y_NkC0NAD6sE6FG3oWDGKAiAdTNNR2tzoOmEwjZ3kN8UM8C5xB4E6_As4y-wy1lU/pubhtml?gid=1476416633&amp;single=true&amp;widget=true&amp;headers=false"

    document.querySelector(".aqui1").style.color = "#00d9ff";
    document.querySelector(".aqui2").style.color = "#00d9ff";

    document.querySelector("h1").style.color = "#00d9ff";
    document.querySelector("h2").style.color = "#00d9ff";
    document.querySelector("#h2autoServiceColor").style.color = "#00d9ff";
    document.querySelector("h4").style.color = "#fff";
    document.querySelector("p").style.color = "#fff";

    document.querySelector(".este1").style.color = "#00d9ff";
    document.querySelector(".este2").style.color = "#00d9ff";
    document.querySelector(".este3").style.color = "#00d9ff";
    document.querySelector(".este4").style.color = "#fff";
    document.querySelector(".este5").style.color = "#fff";
    document.querySelector(".este6").style.color = "#fff";

    document.querySelector("#body").style.backgroundColor = "#00f";
    document.querySelector("#home").style.backgroundColor = "#00f";

    document.querySelector("#stats").style.backgroundColor = "#00f";
    document.querySelector("#stats").style.border = "3px solid #00d9ff";
    document.querySelector("#stats").style.boxShadow = "0px 0px 3rem #00d9ff";

    document.querySelector("#services").style.backgroundColor = "#00f";

    document.querySelector(".carde").style.boxShadow = "0px 0px 2rem #00d9ff";

    document.querySelector(".cardBlackProducts h3").style.color = "#fff000";
    document.querySelector(".cardBlackProducts").style.backgroundColor = "#00f";
    document.querySelector(".cardBlackProducts").style.border = "3px solid #00d9ff";
    document.querySelector(".cardBlackProducts").style.boxShadow = "0px 0px 3rem #00d9ff";
    document.querySelector(".cardBlackProducts circle").style.fill = "#1f54ff";
    document.querySelector(".cardBlackProducts path").style.stroke = "#fff";

    document.querySelector(".cardBlack1 h3").style.color = "#00d9ff";
    document.querySelector(".cardBlack1").style.backgroundColor = "#00f";
    document.querySelector(".cardBlack1").style.border = "3px solid #00d9ff";
    document.querySelector(".cardBlack1").style.boxShadow = "0px 0px 3rem #00d9ff";
    document.querySelector(".cardBlack1 circle").style.fill = "#1f54ff";
    document.querySelector(".cardBlack1 path").style.stroke = "#fff";
    document.querySelector(".cardBlack1 .newStoreSpan").style.color = "#00d9ff";
    document.querySelector(".cardBlack1 .roteSpan").style.color = "#00d9ff";
  
    document.querySelector(".cardBlack2 h3").style.color = "#00d9ff";
    document.querySelector(".cardBlack2").style.backgroundColor = "#00f";
    document.querySelector(".cardBlack2").style.border = "3px solid #00d9ff";
    document.querySelector(".cardBlack2").style.boxShadow = "0px 0px 3rem #00d9ff";
    document.querySelector(".cardBlack2 circle").style.fill = "#1f54ff";
    document.querySelector(".cardBlack2 path").style.stroke = "#fff";
    document.querySelector(".cardBlack2 .freeDeliverySpan").style.color = "#00d9ff";
    document.querySelector(".cardBlack2 .discountCouponSpan").style.color = "#00d9ff";
    
    document.querySelector(".cardBlack3 h3").style.color = "#00d9ff";
    document.querySelector(".cardBlack3").style.backgroundColor = "#00f";
    document.querySelector(".cardBlack3").style.border = "3px solid #00d9ff";
    document.querySelector(".cardBlack3").style.boxShadow = "0px 0px 3rem #00d9ff";
    document.querySelector(".cardBlack3 circle").style.fill = "#1f54ff";
    document.querySelector(".cardBlack3 path").style.stroke = "#fff";
    document.querySelector(".cardBlack3 .emergencyCareSpan").style.color = "#00d9ff";
    document.querySelector(".cardBlack3 .freeSpan").style.color = "#00d9ff";
    document.querySelector(".cardBlack3 .callNowSpan").style.color = "#00d9ff";
    
    document.querySelector(".cardBlack4 h3").style.color = "#00d9ff";
    document.querySelector(".cardBlack4").style.backgroundColor = "#00f";
    document.querySelector(".cardBlack4").style.border = "3px solid #00d9ff";
    document.querySelector(".cardBlack4").style.boxShadow = "0px 0px 3rem #00d9ff";
    document.querySelector(".cardBlack4 circle").style.fill = "#1f54ff";
    document.querySelector(".cardBlack4 path").style.stroke = "#fff";
    document.querySelector(".cardBlack4 .vaccinationSpan").style.color = "#00d9ff";
    document.querySelector(".cardBlack4 .antiParasiticSpan").style.color = "#00d9ff";

    document.querySelector(".cardBlack5 h3").style.color = "#00d9ff";
    document.querySelector(".cardBlack5").style.backgroundColor = "#00f";
    document.querySelector(".cardBlack5").style.border = "3px solid #00d9ff";
    document.querySelector(".cardBlack5").style.boxShadow = "0px 0px 3rem #00d9ff";
    document.querySelector(".cardBlack5 circle").style.fill = "#1f54ff";
    document.querySelector(".cardBlack5 path").style.stroke = "#fff";
    document.querySelector(".cardBlack5 .showerSpan").style.color = "#00d9ff";
    document.querySelector(".cardBlack5 .aestheticsSpan").style.color = "#00d9ff";
    document.querySelector(".cardBlack5 .storeSpan").style.color = "#00d9ff";
    document.querySelector(".cardBlack5 .residenceSpan").style.color = "#00d9ff";
    
    document.querySelector(".cardBlack6 h3").style.color = "#00d9ff";
    document.querySelector(".cardBlack6").style.backgroundColor = "#00f";
    document.querySelector(".cardBlack6").style.border = "3px solid #00d9ff";
    document.querySelector(".cardBlack6").style.boxShadow = "0px 0px 3rem #00d9ff";
    document.querySelector(".cardBlack6 circle").style.fill = "#1f54ff";
    document.querySelector(".cardBlack6 path").style.stroke = "#fff";
    document.querySelector(".cardBlack6 .walkingSpan").style.color = "#00d9ff";
    document.querySelector(".cardBlack6 .playgroundSpan").style.color = "#00d9ff";
    document.querySelector(".cardBlack6 .socializationSpan").style.color = "#00d9ff";
    
    document.querySelector(".button").style.backgroundColor = "#00f";
    document.querySelector(".button").style.borderColor = "#00f";
    document.querySelector(".button").style.boxShadow = "0px 0px 2rem #000";
    document.querySelector(".button").style.color = "#fff";

    document.querySelector("section .button").style.backgroundColor = "#00f";
    document.querySelector("section .button").style.border =  "3px solid #00d9ff";
    document.querySelector("section .button").style.boxShadow = "0px 0px 2rem #000";
    document.querySelector("section .button").style.color = "#fff";

    document.querySelector(".contact-bg-color").style.backgroundColor = "#00f";
    document.querySelector("#contact h2").style.color = "#00d9ff";
    document.querySelector("#contact .button").style.backgroundColor = "#00f";
    document.querySelector("#contact .button").style.borderColor = "#00f";
    document.querySelector("#contact .button").style.boxShadow = "0px 0px 2rem #000";

    document.getElementById("here1").style.stroke = "#00d9ff";
    document.getElementById("here2").style.stroke = "#00d9ff";
    document.getElementById("here3").style.stroke = "#00d9ff";
    document.getElementById("here4").style.stroke = "#00d9ff";

    document.querySelector(".about-bg-color").style.backgroundColor = "#00f";
    document.querySelector("#about h2").style.color = "#00d9ff";

    document.querySelector(".menu").style.backgroundColor = "#00f";
    document.querySelector("#closeMenuColor").style.stroke = "#00d9ff";

    document.querySelector("#backToTopButton circle").style.fill = "#0d3bcf";
    document.querySelector("#backToTopButton .path1").style.stroke = "#fff";
    document.querySelector("#backToTopButton .path2").style.stroke = "#fff";

    document.querySelector("#footer").style.backgroundColor = "#1f54ff";
  }
