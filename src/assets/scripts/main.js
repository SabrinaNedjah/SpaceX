const stopSound = document.querySelector('.stopSound')
const $sound = document.querySelector('.soundSpace')
const $btnON = document.querySelector(".BtnOn")
const $btnOFF = document.querySelector(".BtnOff")


/** SOUND **/
$sound.play()

$btnOFF.addEventListener("click", event  => {      
    event.preventDefault();
    $btnON.classList.remove( 'btn-hide' );
    $btnOFF.classList.add( 'btn-hide' );
    $sound.play();
});

$btnON.addEventListener("click", event  => {
    event.preventDefault();
    // hide botton on click
    $btnON.classList.add( 'btn-hide' );
    $btnOFF.classList.remove( 'btn-hide' );
    $sound.pause()
});

//homepage Animation
$splash = document.querySelector('.splash')
const btnDiscover = document.querySelector('.discoverHome');

btnDiscover.addEventListener('click', event => {
  event.preventDefault();
  document.addEventListener('keydown', listenKeyboard)
  // when animation finish/ splash is hidden
  setTimeout(function(){
      $splash.className = "splash hidden displayNone"

      // We simulate the user keyboard to go directly
     // on the first slide
      listenKeyboard({
        preventDefault: function () {},
        keyCode: 39
      });
  }, 300);

  // Drop the opacity with the hidden class
  $splash.className = "splash hidden"
});


/** SLIDER **/

let slideVisible = -1;
const slides = document.querySelectorAll('.slide')
const slider = document.querySelector('.slider')

function listenKeyboard(event) {
    // We avoid surpassing the browser behavior
   // to be able to refresh
  if (event.keyCode === 37 || event.keyCode === 39) {
    event.preventDefault();
     // Reset elastic
    slider.className = 'slider';
     // Slide du dessous (Arrow Left)
    if (event.keyCode === 37) {
      slideVisible = slideVisible - 1
    // We avoid going on slides that do not exist.
      if (slideVisible < 0) {
        slideVisible = 0;
      }
      // We pull up the slides from above.
      for(let i = slideVisible; i < slides.length; i++){
        slides[i].className = 'slide'
      }
      // We push all the slides down before.
      for(let i = 0; i < slideVisible; i++){
        slides[i].className = 'slide translate100 hidden'
      }
      // Make the current slide visible.
      slides[slideVisible].className = 'slide translate100'
    } 
    
    else if(event.keyCode === 39) { // Slide dessus (Arrow Right)
     slideVisible = slideVisible + 1
     // We avoid going on slides that do not exist.
     if (slideVisible > slides.length - 1) {
       slideVisible = slides.length - 1;
     }
     for(let i = 0; i < slideVisible; i++){
       slides[i].className = 'slide translate100 hidden'
     }

     // Make the current slide visible.
     slides[slideVisible].className = 'slide translate100'
    }
  }
}

/** STAR BACKGROUND **/
function backgroundStar() {
  window.requestAnimFrame = (function () {
      //the function to call when your animation will be refreshed during the next refresh
      return window.requestAnimationFrame || function (callback) {
                  window.setTimeout(callback, 3000 / 60);
              }
  })();
  //select class .canvas 
  let canvas = document.querySelector('.canvas'), 
        context = canvas.getContext('2d'), 
        //He will have the size of the window
        w = canvas.width = window.innerWidth, 
        h = canvas.height = window.innerHeight, 
        hue = 217, stars = [], 
        count = 0, maxStars = 1200;
  let canvas_2 = document.createElement('canvas'), 
        context_2 = canvas_2.getContext('2d');
        canvas_2.width = 100;
        canvas_2.height = 100;
  let half = canvas_2.width / 2, gradient_2 = context_2.createRadialGradient(half, half, 0, half, half, half);
  //center of stars
  gradient_2.addColorStop(0.025, '#fff');

  // color + Hue is a degree on the color wheel
  gradient_2.addColorStop(0.1, 'hsl(' + hue + ', 80%, 33%)');
  gradient_2.addColorStop(0.25, 'hsl(' + hue + ', 64%, 6%)');
  gradient_2.addColorStop(1, 'transparent');
  context_2.fillStyle = gradient_2;
  context_2.beginPath();
  context_2.arc(half, half, half, 0, Math.PI * 2);
  context_2.fill();


  function random(min, max) {
      if (arguments.length < 2) {
          max = min;
          min = 0
      }
      if (min > max) {
          let hold = max;
          max = min;
          min = hold
      }
      return Math.floor(Math.random() * (max - min + 1)) + min
  }

  function maxOrbit(x, y) {
      let max = Math.max(x, y), diameter = Math.round(Math.sqrt(max * max + max * max));
      return diameter / 2
  }

  // creation of stars
  let Star = function () {
      this.orbitRadius = random(maxOrbit(w, h));
      this.radius = random(60, this.orbitRadius) / 12;
      this.orbitX = w / 2;
      this.orbitY = h / 2;
      this.spendTime = random(0, maxStars);
      this.speed = random(this.orbitRadius) / 900000;
      this.alpha = random(2, 10) / 10;
      count++;
      stars[count] = this
  };

  Star.prototype.draw = function () {
      let x = Math.sin(this.spendTime) * this.orbitRadius + this.orbitX, y = Math.cos(this.spendTime) * this.orbitRadius + this.orbitY, twinkle = random(10);
      if (twinkle === 1 && this.alpha > 0) {
          this.alpha -= 0.05
      } else if (twinkle === 2 && this.alpha < 1) {
          this.alpha += 0.05
      }
      context.globalAlpha = this.alpha;
      context.drawImage(canvas_2, x - this.radius / 2, y - this.radius / 2, this.radius, this.radius);
      this.spendTime += this.speed
  };

  for (let i = 0; i < maxStars; i++) {
      new Star()
  }
  
  //annimation of star (circle)
  function animationStar() {
      context.globalCompositeOperation = 'source-over';
      context.globalAlpha = 0.8;
      context.fillStyle = 'hsla(' + hue + ', 64%, 6%, 1)';
      context.fillRect(0, 0, w, h);
      context.globalCompositeOperation = 'lighter';
      for (let i = 1, l = stars.length; i < l; i++) {
          stars[i].draw()
      }
      ;
      window.requestAnimationFrame(animationStar)
  }

  animationStar();
}

backgroundStar();


/** COUNT EFFECT **/
const count = document.querySelector('.count');
// init counter
let counter = 0;
let counterFinal = count.innerHTML;
let counterInterval = counterFinal / 400;
const interval = setInterval(function() {
  counter = counter + counterInterval;

  if (Math.ceil(parseInt(counter)) >= counterFinal) {
    count.innerHTML = counterFinal;
    return clearInterval(interval);
  }

  count.innerHTML = Math.ceil(parseInt(counter));
}, 1);
