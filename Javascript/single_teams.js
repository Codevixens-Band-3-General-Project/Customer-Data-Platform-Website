document.addEventListener("DOMContentLoaded", function() {
    var textHead = document.querySelector('.text-head');
    var span2 = document.querySelector('.span-2');
  
    // Trigger initial fade-in animation
    textHead.classList.add('show');
  
    // Trigger pop-out animation after a delay
    setTimeout(function() {
      span2.classList.add('show');
    }, 1000);
  });
   
  