let mykeys = document.querySelectorAll(".key");


for (let x = 0; x < mykeys.length; x++) {
   mykeys[x].addEventListener('click', function () {
      //  alert("button"+mykeys[x].innerHTML+"is clicked");
      //  let sound = new Audio('doremi/do.mp3');
      //  sound.play();

      // added to remove if it pressed keyboardbutton 1st and then mouse
      for (let x = 0; x < mykeys.length; x++) {
         mykeys[x].classList.remove('activated');

      }
      playSound(mykeys[x].innerHTML.toLowerCase());
   })

}

document.addEventListener('keydown', function (keyboardbtn) {
   // console.log(keyboardbtn.key);
   playSound(keyboardbtn.key.toLowerCase());

   let keyboardpressedKey = keyboardbtn.key.toLowerCase();
   for (let x = 0; x < mykeys.length; x++) {
      mykeys[x].classList.remove('activated');

   }

   for (let x = 0; x < mykeys.length; x++) {
      if (keyboardpressedKey == mykeys[x].innerHTML.toLowerCase()) {
         mykeys[x].classList.add('activated');

      }

   }

})


function playSound(pressedKey) {
   switch (pressedKey) {
      case 'c':
         var sound = new Audio('doremi/do.mp3');
         sound.play();
         break;
      case 'd':
         var sound = new Audio('doremi/re.mp3');
         sound.play();
         break;
      case 'e':
         var sound = new Audio('doremi/mi.mp3');
         sound.play();
         break;
      case 'f':
         var sound = new Audio('doremi/fa.mp3');
         sound.play();
         break;
      case 'g':
         var sound = new Audio('doremi/sol.mp3');
         sound.play();
         break;
      case 'a':
         var sound = new Audio('doremi/la.mp3');
         sound.play();
         break;
      case 'b':
         var sound = new Audio('doremi/ti.mp3');
         sound.play();
         break;
      case 'k':
         var sound = new Audio('doremi/doh.mp3');
         sound.play();
         break;
      default:
         console.log(pressedKey);
      // code block
   }

}

