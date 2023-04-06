function buttonEmpty() {
  const hideText2= document.querySelector("div#scene-button2 button a");
  const hideText3= document.querySelector("div#scene-button3 button a");
  const hideButton2 = document.getElementById("scene-button2");
  const  hideButton3= document.getElementById("scene-button3");

  if (hideText2.innerHTML === "@") {
    hideButton2.style.display = "none"
  }
  if (hideText3.innerHTML === "@") {
    hideButton3.style.display = "none"
  }

  //test 
 // hideButton2.style.display = "none";
 // hideButton3.style.display = "none";
}
buttonEmpty()
console.log();
