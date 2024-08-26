

$(document).ready(function(){
    $('.slider').slick({
      dots: true,
      infinite: true,
      autoplay:true,
      speed: 400,
      slidesToShow: 3,
      slidesToScroll: 1,
      responsive: [
        {
          breakpoint: 600,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 1,
            infinite: true,
            dots: true
          }
        },
      
        {
          breakpoint: 480,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1,
            dots: true
          }
        }
        // You can unslick at a given breakpoint now by adding:
        // settings: "unslick"
        // instead of a settings object
      ]
    });
  
    
  });
  

const cods ={x:0,y:0}
const circle =document.querySelectorAll('.circle')
window.addEventListener("mousemove", function(e){
    cods.x=e.clientX;
    cods.y = e.clientY
    animationCircle()
    console.log(cods);


   function animationCircle(){
    let x = cods.x
    let y = cods.y
    circle.forEach( function(circle,index){
        circle.style.left =cods.x -12 + 'px'
        circle.style.top = cods.y -12 + 'px';


        circle.x = x
        circle.y = y
        

        const nextCircle = circle[index + 1]|| circle[0];
        x +=[nextCircle.x -x]* 0.3;
        y +=[nextCircle.y - y]*0.3;

    })
   }
})

function updateTime() {
  const timeElement = document.getElementById("time");
  const now = new Date();
  let hours = now.getHours();
  let minutes = now.getMinutes();
  let seconds = now.getSeconds();

  // Format the time as HH:MM:SS
  hours = hours < 10 ? '0' + hours : hours;
  minutes = minutes < 10 ? '0' + minutes : minutes;
  seconds = seconds < 10 ? '0' + seconds : seconds;

  const currentTime = `${hours}:${minutes}:${seconds}`;
  timeElement.textContent = currentTime;
}

// Update the clock every second
setInterval(updateTime, 1000);

// Initialize the clock immediately
updateTime();




function showDiv(divId) {
  // Hide all divs with transition
  var divs = document.querySelectorAll('.toggleDiv');
  divs.forEach(function(div) {
      div.classList.add('opacity-0');
      div.classList.add('hidden');
      div.classList.remove('opacity-100');
  });

  // Show the selected div with transition
  var selectedDiv = document.getElementById(divId);
  selectedDiv.classList.remove('hidden');
  setTimeout(function() {
      selectedDiv.classList.remove('opacity-0');
      selectedDiv.classList.add('opacity-100');
  }, 10); // Timeout to allow the transition to work
}

