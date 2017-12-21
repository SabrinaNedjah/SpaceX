<!DOCTYPE html>
<html lang="fr">
  <head>
     <meta charset="UTF-8">
     <meta name="viewport" content="width=device-width, initial-scale=1.0, shrink-to-fit=no">
     <title>SpaceX</title>
     <link rel="stylesheet" href="assets/css/style.css">
  </head>
  <body>
    <div class="splash">
        <img  class="logoSpaceX" src="assets/images/logoSpaceX.png" alt="Space X logo" height="20" width="130">
        <p class="titleHome">welcome to the</p>
        <p class="titleHome">space experience</p>
        <hr>
        <p class="subTitle">Maybe you want to know at what cost</p>
        <p class="subTitle">you could travel towards Moon ?</p>
        <p class="subTitle">Answer is here.</p>
        <button href="#" class="discoverHome">Discover</button>
    </div>

    
    <div class="slider">
         <button class="BtnOn btn-hide"> <img src="assets/images/soundOn.png" alt="soundOn" width="50%%"></button>
         <button class="BtnOff "><img src="assets/images/soundOff.png" alt="soundOff" width="50%%"></button>
        <audio class="soundSpace">
            <source src="assets/sound/audio.mp3" type="audio/ogg">
        </audio>
        <div class="slide">    
            <?php require 'assets/pages/jour0.php'; ?>
        </div>
        <div class="slide">
            <?php require 'assets/pages/jour0Bis.php'; ?>
        </div>
        <div class="slide">
            <?php require 'assets/pages/jour1.php'; ?>
        </div>
        <div class="slide"> 
            <div class="titleHome">Page3</div>
        </div>
    </div>
    <canvas class="canvas">
        </canvas>

   

  
  <script src="assets/scripts/main.js"></script>

  </body>
</html>
