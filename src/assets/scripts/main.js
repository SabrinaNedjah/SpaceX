/** SPLASH SCREEN **/
$animationHomePage = document.querySelector('.splash .fontShadow')
$splash = document.querySelector('.splash')

// Delay for animation
setTimeout(function(){
    $animationHomePage.className = "fontShadow animationHomePage"
}, 0);


var btnDiscover = document.querySelector('.discoverHome');

btnDiscover.addEventListener('click', function(e){
  e.preventDefault();

  // On attend que l'animation d'opacité se termine et on cache complètement le splash.
  setTimeout(function(){
      $splash.className = "splash hidden displayNone"

      // On simule le clavier utilisateur pour se placer directement
      // sur la première slide
      listenKeyboard({
        preventDefault: function () {},
        keyCode: 38
      });
  }, 300);

  // On baisse l'opacité avec la classe hidden
  $splash.className = "splash hidden"
});

/** SLIDER **/
document.addEventListener('keydown', listenKeyboard)

let slideVisible = -1;
const slides = document.querySelectorAll('.slide')

function listenKeyboard(event) {
  // On évite de surpasser le comportement navigateur
  // pour pouvoir faire des refresh
  if (event.keyCode === 40 || event.keyCode === 38) {
    event.preventDefault();

    // Slide du dessous (Arrow Down)
    if (event.keyCode === 40) {
      slideVisible = slideVisible - 1

      // On évite d'aller sur des slides qui n'existe pas.
      if (slideVisible < 0) {
        slideVisible = 0;
      }

      // On tire tout en haut les slides d'après.
      for(var i = slideVisible; i < slides.length; i++){
        slides[i].className = 'slide'
      }

      // On pousse tout en bas les slides d'avant.
      for(var i = 0; i < slideVisible; i++){
        slides[i].className = 'slide translate100 translate200'
      }

      // On rend la slide courante visible.
      slides[slideVisible].className = 'slide translate100'

    } else if(event.keyCode === 38) { // Slide dessus (Arrow Up)
     slideVisible = slideVisible + 1

     // On évite d'aller sur des slides qui n'existe pas.
     if (slideVisible > slides.length - 1) {
       slideVisible = slides.length - 1;
     }

     for(var i = 0; i< slideVisible; i++){
       slides[i].className = 'slide translate100 translate200'
     }

     // On rend la slide courante visible.
     slides[slideVisible].className = 'slide translate100'
    }
  }
}
