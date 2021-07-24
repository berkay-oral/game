document.addEventListener("keydown", event => {
    if(event.key==="ArrowLeft"){moveLeft();}
    if(event.key==="ArrowRight"){moveRight();}
    if(event.key==="ArrowUp"){jump();}
  });


  var character = document.getElementById("character");
  function moveLeft(){
      let left = parseInt(window.getComputedStyle(character).getPropertyValue("left"));
      left -= 100;
      if(left>=0){
          character.style.left = left + "px";
          character.style.transform = "rotateY(200deg)";
 
      }
  }
  function moveRight(){
      let left = parseInt(window.getComputedStyle(character).getPropertyValue("left"));
      left += 100;
      if(left<600){
          character.style.left = left + "px";
          character.style.transform = "rotateY(-1deg)";
      }
  }

  function jump(){
      
    if(character.classList != "characterJump"){
        character.classList.add("characterJump");
   }
           setTimeout(function(){
               character.classList.remove("characterJump");
           }, 500);
  }

  
  var block = document.getElementById("block");
  var counter = 0;
  block.addEventListener('animationiteration', () => {
      var random = Math.floor(Math.random() * 6);
      left = random * 100;
      block.style.left = left + "px";
      counter++;
  });
  setInterval(function(){
      var characterLeft = parseInt(window.getComputedStyle(character).getPropertyValue("left"));
      var blockLeft = parseInt(window.getComputedStyle(block).getPropertyValue("left"));
      var blockTop = parseInt(window.getComputedStyle(block).getPropertyValue("top"));
      if(characterLeft==blockLeft && blockTop<500 && blockTop>300){
          alert("Game over. Score: " + counter);
          block.style.animation = "none";

          
      }
  },1);
  
  
  
  
  document.getElementById("right").addEventListener("touchstart", moveRight);
  document.getElementById("left").addEventListener("touchstart", moveLeft);
