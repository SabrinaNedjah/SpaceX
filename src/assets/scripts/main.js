$animationHomePage = document.querySelector('.fontShadow')
$splash = document.querySelector('.splash')
// Delay for animation
setTimeout(function(){ 
    $animationHomePage.className = "fontShadow animationHomePage"
}, 2000);


var btnDiscover = document.querySelector('.discoverHome');
var el = document.querySelector('.js-fade');

btn.addEventListener('click', function(e){
  el.classList.remove('is-paused');
});



/*
window.scrollTo(0,document.body.scrollHeight);
setTimeout(function(){ 
    setTimeout(function(){ 
        //faire un on click
        $splash.className = "splash hidden displayNone"
    }, 300);
    
    //faire un on click
    $splash.className = "splash hidden"
}, 1000);


document.addEventListener('keydown', listenKeyboard)

let slideVisible = -1;
const slides = document.querySelectorAll('.slide')


function listenKeyboard(event) {
    event.preventDefault()
    //slide du dessous

   if(event.keyCode === 40){
    slideVisible = slideVisible-1
    for(var i = 0; i < slideVisible; i++){
     slides[i].className = 'slide'
    }
    slides[slideVisible].className = 'slide translate100'

   }

   //slide dessus
   else if(event.keyCode === 38) {
        slideVisible = slideVisible+1
       for(var i = 0; i< slideVisible; i++){
        slides[i].className = 'slide translate100 translate200'
       }

       slides[slideVisible].className = 'slide translate100'
   }
*/