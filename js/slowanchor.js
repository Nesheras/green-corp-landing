function addSmoothScroll(link) {
    link.addEventListener("click",onLinkClick);
  }
  function onLinkClick(event) {
    event.preventDefault();
    document.querySelector(event.target.getAttribute('href')).scrollIntoView({
        behavior: 'smooth'
    });
    // ...
  }
  let arr = document.querySelectorAll('a[href^="#"]');
  console.log(arr);
  arr.forEach(el => {
    addSmoothScroll(el);
    
  });
  let button = document.querySelector(".more-button");
  console.log(button);
 addSmoothScroll(button);