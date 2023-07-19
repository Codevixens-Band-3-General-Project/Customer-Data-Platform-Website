// navbar
window.addEventListener("scroll",()=>{
    let navbar =document.querySelector("nav");
    let scrollPosition = document.documentElement.scrollTop;
    let logoImg = document.querySelector(".logo img");


    if (scrollPosition > 100){
        navbar.classList.add("hide");
    } else {
        navbar.classList.remove("hide")
        
}
    if (scrollPosition > window.innerHeight/2 ){
        navbar.classList.add("fixed")
        navbar.classList.add("scrol");
        logoImg.src = "../Assets/img/logo/logo-black.webp";
    }else {
        navbar.classList.remove("fixed");
        navbar.classList.remove("scrol");
        logoImg.src = "../Assets/img/logo/logo-white.webp"
    }
})
// navbar ends

  const timelineDiv = document.querySelector('.timeline-div');
  const timelineCards = document.querySelectorAll('.timeline-card');

  let isMouseDown = false;
  let startX;
  let scrollLeft;

  timelineDiv.addEventListener('mousedown', (e) => {
    isMouseDown = true;
    startX = e.pageX - timelineDiv.offsetLeft;
    scrollLeft = timelineDiv.scrollLeft;
  });

  timelineDiv.addEventListener('mouseleave', () => {
    isMouseDown = false;
  });

  timelineDiv.addEventListener('mouseup', () => {
    isMouseDown = false;
  });

  timelineDiv.addEventListener('mousemove', (e) => {
    if (!isMouseDown) return;
    e.preventDefault();
    const x = e.pageX - timelineDiv.offsetLeft;
    const walk = (x - startX) * 2; // Adjust the scroll speed here
    timelineDiv.scrollLeft = scrollLeft - walk;
  });

  timelineDiv.addEventListener('scroll', () => {
    const scrollPosition = timelineDiv.scrollLeft;
    const timelineWidth = timelineDiv.scrollWidth - timelineDiv.clientWidth;

    // Check if the scroll position has reached the end
    if (scrollPosition === timelineWidth) {
      // Clone the timeline cards and append them to the beginning
      timelineCards.forEach((card) => {
        const clone = card.cloneNode(true);
        timelineDiv.insertBefore(clone, timelineDiv.firstChild);
      });
    }
  })

