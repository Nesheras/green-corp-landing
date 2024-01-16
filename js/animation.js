let INCREASE_NUMBER_ANIMATION_SPEED = 50;
let animationInited = false;
function increaseNumberAnimationStep (i, element, endNumber) {
    if (i <= endNumber) {
      if (i === endNumber) {
        element.innerText = i + '+';
      } else {
        element.innerText = i;
      }
      
     
  
      i=i+100;
      
     

   }
  
  
   setTimeout(() => {increaseNumberAnimationStep(i, element, endNumber)}, INCREASE_NUMBER_ANIMATION_SPEED);
  }
  function initIncreaseNumberAnimation() {
    let element = document.querySelector("#features__feedback-left_caunt");
    increaseNumberAnimationStep(0,element,5000);
  }
  
  function updateScroll() {
    if (window.scrollY > 0) {
      let header = document.querySelector("header");
      header.classList.add('header__scrolled');
      
      // ...
    } else {
      let header = document.querySelector("header");
      header.classList.remove('header__scrolled');
    }
    let positElemNumber = document.getElementById("features__feedback-left_caunt").offsetTop;
    let windowBottomPosition = window.scrollY + window.innerHeight;
    if(windowBottomPosition >= positElemNumber && !animationInited){
      animationInited = true;
      initIncreaseNumberAnimation();

    }
  }
 window.addEventListener("scroll",updateScroll);
