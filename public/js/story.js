function buttonEmpty() {
  const hideText2= document.querySelector("div#scene-button2 button a");
  const hideText3= document.querySelector("div#scene-button3 button a");
  const hideButton2 = document.getElementById("scene-button2");
  const  hideButton3= document.getElementById("scene-button3");
  // if (hideButton === "@" ) {
  //   console.log("The element has  content.");
  // } else {
  //   console.log("The element has content:" + hideButton.innerHTML);
  // }
  // if (hideButton.innerText.value === null) {
  //   secondButton.style.display = "none";
  // }
   if (hideText2.innerHTML === "@") {
    hideButton2.style.display = "none"
  }
  if (hideText3.innerHTML === "@") {
    hideButton3.style.display = "none"
  }
//{{scene.choice2.[1]}}
//{{scene.choice3.[1]}}

  //test 
 // hideButton2.style.display = "none";
 // hideButton3.style.display = "none";
}
buttonEmpty()
console.log();
// document
//   .querySelector('#start')
//   .addEventListener('#start', handleSignupSubmit);