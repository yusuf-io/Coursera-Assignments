function toggleFun() {
    var checkBox = document.getElementById("switcher");
    var iraq = document.getElementById("iraq-cards");
    var turkey = document.getElementById("turkey-cards");

    if (checkBox.checked){
      turkey.style.display = "flex";
      iraq.style.display = "none";
    }else{
       iraq.style.display = "flex";
       turkey.style.display = "none";
    } 
    
  }
