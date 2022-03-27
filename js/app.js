let header = document.querySelector(".header");
let scrollToTop = document.querySelector(".arrow");

let headerControl = new Waypoint({
    element: document.getElementById('post-one'),
    handler: function(direction) {
      if(direction === "down"){
          header.classList.add("shadow")
          header.classList.add("animate__slideInDown")
          scrollToTop.style.display= ("block")
          scrollToTop.classList.add("animat__slideInUp")
      }else{
        header.classList.remove("shadow")
        header.classList.remove("animate__slideInDown")
        scrollToTop.style.display= ("none")
        scrollToTop.classList.remove("animat__slideInUp")
      }
    },
    offset: '75%'
  })
 
  ScrollReveal({
    origin : "top",
    distance : "30px",
    duration : "1000",
    reset : true,
  }).reveal('.content',{
      interval : 200
  })

  