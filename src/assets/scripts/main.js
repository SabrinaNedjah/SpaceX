const stopSound = document.querySelector('.stopSound')
const $sound = document.querySelector('.soundSpace')
const $btnON = document.querySelector(".BtnOn")
const $btnOFF = document.querySelector(".BtnOff")


/** SOUND **/

$sound.play()


$btnOFF.addEventListener("click", event  =>
{

        // Button
        $btnON.classList.remove( 'btn-hide' );
        $btnOFF.classList.add( 'btn-hide' );
        $sound.pause()

});

$btnON.addEventListener("click", event  =>
{
    event.preventDefault();
    //Button
    $btnON.classList.add( 'btn-hide' );
    $btnOFF.classList.remove( 'btn-hide' );
    $sound.play();
});

$splash = document.querySelector('.splash')

const btnDiscover = document.querySelector('.discoverHome');

btnDiscover.addEventListener('click', function(e){
  e.preventDefault();
  document.addEventListener('keydown', listenKeyboard)
  // On attend que l'animation d'opacité se termine et on cache complètement le splash.
  setTimeout(function(){
      $splash.className = "splash hidden displayNone"

      // On simule le clavier utilisateur pour se placer directement
      // sur la première slide
      listenKeyboard({
        preventDefault: function () {},
        keyCode: 39
      });
  }, 300);

  // On baisse l'opacité avec la classe hidden
  $splash.className = "splash hidden"
});


/** SLIDER **/


let slideVisible = -1;
const slides = document.querySelectorAll('.slide')
const slider = document.querySelector('.slider')

function listenKeyboard(event) {
  // On évite de surpasser le comportement navigateur
  // pour pouvoir faire des refresh
  if (event.keyCode === 37 || event.keyCode === 39) {
    event.preventDefault();

    // Reset elastic
    slider.className = 'slider';

    // Slide du dessous (Arrow Left)
    if (event.keyCode === 37) {
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
        slides[i].className = 'slide translate100 hidden'
      }

      // On rend la slide courante visible.
      slides[slideVisible].className = 'slide translate100'
    } else if(event.keyCode === 39) { // Slide dessus (Arrow Right)
     slideVisible = slideVisible + 1

     // On évite d'aller sur des slides qui n'existe pas.
     if (slideVisible > slides.length - 1) {
       slideVisible = slides.length - 1;
     }

     for(var i = 0; i < slideVisible; i++){
       slides[i].className = 'slide translate100 hidden'
     }

     // On rend la slide courante visible.
     slides[slideVisible].className = 'slide translate100'
    }

  
  }
}

/** STAR BACKGROUND **/
function fn() {
  window.requestAnimFrame = (function () {
      return window.requestAnimationFrame || window.webkitRequestAnimationFrame || window.mozRequestAnimationFrame || function (callback) {
                  window.setTimeout(callback, 3000 / 60);
              }
  })();
  var canvas = document.querySelector('.canvas'), ctx = canvas.getContext('2d'), w = canvas.width = window.innerWidth, h = canvas.height = window.innerHeight, hue = 217, stars = [], count = 0, maxStars = 1200;
  var canvas2 = document.createElement('canvas'), ctx2 = canvas2.getContext('2d');
  canvas2.width = 100;
  canvas2.height = 100;
  var half = canvas2.width / 2, gradient2 = ctx2.createRadialGradient(half, half, 0, half, half, half);
  //center of stars
  gradient2.addColorStop(0.025, '#fff');
  gradient2.addColorStop(0.1, 'hsl(' + hue + ', 80%, 33%)');
  gradient2.addColorStop(0.25, 'hsl(' + hue + ', 64%, 6%)');
  gradient2.addColorStop(1, 'transparent');
  ctx2.fillStyle = gradient2;
  ctx2.beginPath();
  ctx2.arc(half, half, half, 0, Math.PI * 2);
  ctx2.fill();
  function random(min, max) {
      if (arguments.length < 2) {
          max = min;
          min = 0
      }
      if (min > max) {
          var hold = max;
          max = min;
          min = hold
      }
      return Math.floor(Math.random() * (max - min + 1)) + min
  }

  function maxOrbit(x, y) {
      var max = Math.max(x, y), diameter = Math.round(Math.sqrt(max * max + max * max));
      return diameter / 2
  }

  var Star = function () {
      this.orbitRadius = random(maxOrbit(w, h));
      this.radius = random(60, this.orbitRadius) / 12;
      this.orbitX = w / 2;
      this.orbitY = h / 2;
      this.timePassed = random(0, maxStars);
      this.speed = random(this.orbitRadius) / 900000;
      this.alpha = random(2, 10) / 10;
      count++;
      stars[count] = this
  };
  Star.prototype.draw = function () {
      var x = Math.sin(this.timePassed) * this.orbitRadius + this.orbitX, y = Math.cos(this.timePassed) * this.orbitRadius + this.orbitY, twinkle = random(10);
      if (twinkle === 1 && this.alpha > 0) {
          this.alpha -= 0.05
      } else if (twinkle === 2 && this.alpha < 1) {
          this.alpha += 0.05
      }
      ctx.globalAlpha = this.alpha;
      ctx.drawImage(canvas2, x - this.radius / 2, y - this.radius / 2, this.radius, this.radius);
      this.timePassed += this.speed
  };
  for (var i = 0; i < maxStars; i++) {
      new Star()
  }
  function animation() {
      ctx.globalCompositeOperation = 'source-over';
      ctx.globalAlpha = 0.8;
      ctx.fillStyle = 'hsla(' + hue + ', 64%, 6%, 1)';
      ctx.fillRect(0, 0, w, h);
      ctx.globalCompositeOperation = 'lighter';
      for (var i = 1, l = stars.length; i < l; i++) {
          stars[i].draw()
      }
      ;
      window.requestAnimationFrame(animation)
  }

  animation();
}
fn();

/** COUNT EFFECT **/
const count = document.querySelector('.count');

var counter = 0;
var counterFinal = count.innerHTML;
var counterInterval = counterFinal / 400;

console.log("Interval", counterInterval);

const interval = setInterval(function() {
  counter = counter + counterInterval;

  if (Math.ceil(parseInt(counter)) >= counterFinal) {
    count.innerHTML = counterFinal;
    return clearInterval(interval);
  }

  count.innerHTML = Math.ceil(parseInt(counter));
}, 1);
