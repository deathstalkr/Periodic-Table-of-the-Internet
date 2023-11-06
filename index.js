function randomInt(max = 1, min = 0) {
    // scale random number from 0 to 1 to desired min and max
    return parseInt(Math.random() * (max - min) + min);
  }
  
  function twoPlaces(sNum = '') {
    // make sure all strings have a length greater than 1
    //   eg: "f" => "0f"
    return sNum.length > 1 ? sNum : twoPlaces('0' + sNum);
  }
  
  function randomColor() {
    // make each color's hex string
    let r = twoPlaces(randomInt(255, 0).toString(16));
    let g = twoPlaces(randomInt(255, 0).toString(16));
    let b = twoPlaces(randomInt(255, 0).toString(16));
    // return hex color string
    return `#${r}${g}${b}`;
  }
  
  function updateColors() {
    // loop through all elements with class "random"
    document.querySelectorAll(".box").forEach((el) => {
      // set each element/'s color to a random hex
      el.setAttribute("style", `background-color:${ randomColor() }`);
    });
  }
  
// add function to randomizer
let randomizer = document.querySelector("#colorRandomizer");
randomizer.addEventListener("click", updateColors);
// initialize colors
randomizer.dispatchEvent(new Event("click"));
  