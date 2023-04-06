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

<<<<<<< HEAD


=======
  //test 
 // hideButton2.style.display = "none";
 // hideButton3.style.display = "none";
}
buttonEmpty()
console.log();
>>>>>>> b7a9254a2ae6360a2f34a644fec62807a00c8049
