window.addEventListener('load', function() {
    textAnim();
    smallHeartAnim();
  });
  
  // Insert smallHearts element
  var total = 13;
  var container = document.querySelector('.smallHearts');
  for (var i = 0; i < total; i++) {
    var span = document.createElement('span');
    span.className = 'smallHeart';
    container.appendChild(span);
  }
  
  // Text animation
  function textAnim() {
    var elements = document.querySelectorAll('.s');
    elements.forEach(function(element) {
      element.style.opacity = 1;
    });
  
    var delay = 3000;
    var interval = 40;
    var duration = 400;
  
    elements.forEach(function(element, index) {
      setTimeout(function() {
        element.style.transition = 'all ' + (duration / 1000) + 's ease';
        element.style.transform = 'scale(0) translateY(40px)';
      }, delay + (index * interval));
    });
  }
  
  // Small hearts animation
  function smallHeartAnim() {
    var smallHearts = document.querySelectorAll('.smallHeart');
    smallHearts.forEach(function(smallHeart) {
      smallHeart.style.opacity = 1;
      smallHeart.style.transform = 'scale(0) rotate(-25deg) translateY(70px)';
    });
  
    var delay = 3600;
    var interval = 80;
    var duration = 3400;
  
    smallHearts.forEach(function(smallHeart, index) {
      setTimeout(function() {
        smallHeart.style.transition = 'all ' + (duration / 1000) + 's ease';
        smallHeart.style.transform = `
          rotate(${getRandomNumber(-20, 20)}deg)
          scale(${getRandomNumber(0.5, 1.5)})
          translateY(0)
          translateX(${Math.sin(Math.random()) * 15}px)
        `;
      }, delay + (index * interval));
    });
  }
  
  function getRandomNumber(min, max) {
    return Math.random() * (max - min) + min;
  }