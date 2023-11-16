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
  
  function hexToRgb(hex) {
    const shortHexRegExp = /^#?([a-f\d])([a-f\d])([a-f\d])$/i;
    hex = hex.replace(shortHexRegExp, (_, r, g, b) => r + r + g + g + b + b);
    const result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex);
  
    if (!result) throw Error('A valid HEX must be provided');
  
    return {
      r: parseInt(result[1], 16),
      g: parseInt(result[2], 16),
      b: parseInt(result[3], 16)
    };
  }
  
  function setContrastColor(color) {
    const {
      r,
      g,
      b
    } = hexToRgb(color);
    const yiq = (r * 299 + g * 587 + b * 114) / 1000;
    // https://en.wikipedia.org/wiki/YIQ
  
    let contrastColor;
  
    if (yiq >= 128) {
      contrastColor = "#000";
    } else {
      contrastColor = "#fff";
    }
    return contrastColor
  }

  function updateColors() {
    document.querySelectorAll(".box").forEach((el) => {
      const hex = randomColor();
      const textColor = setContrastColor(hex);
      el.setAttribute("style", `background-color:${hex}; color:${textColor}`);
  
      // Update the link elements inside the current box element
      const linkElements = el.querySelectorAll(".link");
      linkElements.forEach((lnk) => {
        lnk.setAttribute("style", `color:${textColor}`);
      });
    });
  }
  // add function to randomizer
  let randomizer = document.getElementsByTagName("button")[0];
  randomizer.addEventListener("click", updateColors);
  // initialize colors
  randomizer.dispatchEvent(new Event("click"));

  
  