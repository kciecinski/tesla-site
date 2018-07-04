document.addEventListener("DOMContentLoaded", function(event) {
  let burger_state = 0;
  function hamburgerChange(){
    const slices = document.getElementsByClassName("burger_slice")
    if(!burger_state){
      for(let i = 0;i<3;i++){;
        slices[i].style.transform += "rotate(45deg)";
        slices[i].style.opacity = 1;
        slices[i].style.background = "#232323";
      }
  
      slices[1].style.opacity = 0;
      slices[1].style.transform += "rotate(0deg)";

      slices[2].style.transform += "rotate(-90deg)";  

    }else{
      for(let i = 0;i<3;i++){
        slices[i].style.transform += "rotate(-45deg)";
        slices[i].style.opacity = 1;
        slices[i].style.background = "white";
      }
      slices[1].style.transform += "rotate(0deg)";
      slices[2].style.transform += "rotate(90deg)";  

    }
  }
  function showMenu(){
    if(!burger_state){
      document.getElementById("menu").style.transform = "translate(-300px,0)"
    }else{
      document.getElementById("menu").style.transform = "translate(300px,0)"
    }
  }

  document.getElementById("menuToggle").addEventListener("click",function(){
    hamburgerChange();
    showMenu();
    burger_state = !burger_state
  })

});