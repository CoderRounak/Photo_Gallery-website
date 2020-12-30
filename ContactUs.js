function myFunction() {
  var x = document.getElementById("mail");
  var y = document.getElementById("email");
  

if(x.style.display === "block") 
  {
    x.style.display = "none";
    y.style.display = "block"
  } 
else 
  {
    x.style.display = "block";
    y.style.display = "none";
  }
}

