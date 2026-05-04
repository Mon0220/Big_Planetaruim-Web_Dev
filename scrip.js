function showOrbitTime() { //function that runs when the user clicks the button
  const userInput = document.getElementById("planet").value.trim(); //gets user input when uuser click on the button
  const planet = userInput.toLowerCase();
  const result = document.getElementById("result"); // get the result element where output will be displayed

  result.style.color = "lightgreen"; // output colour

  if (planet === "") { // check if input is empty
    result.textContent = "Please type the name of a planet.";
    result.style.color = "#ff6b6b";

    //check each planet and display message
  } else if (planet === "mercury") {
    result.textContent = "It takes Mercury approximately 87.97 Earth days (or roughly 0.24 Earth years) to complete one orbit around the Sun.";
  } 
  else if (planet === "venus") {
    result.textContent = "It takes Venus takes approximately 224.7 Earth days (about 0.615 Earth years) to orbit the Sun.";
  } 
  else if (planet === "earth") {
    result.textContent = "It takes Earth approximately 365.25 days (or 365 days, 5 hours, 48 minutes, and 46 seconds) to complete one orbit around the Sun";
  } 
  else if (planet === "mars") {
    result.textContent = "It takes Mars approximately 1.88 Earth years (or about 687 Earth days) to complete one orbit around the Sun.";
  } 
  else if (planet === "jupiter") {
    result.textContent = "It takes Jupiter approximately 11.86 Earth years (nearly 12 years) to complete one orbit around the Sun.";
  } 
  else if (planet === "saturn") {
    result.textContent = "It takes Saturn approximately 29.4 to 29.5 Earth years to complete one orbit around the Sun. This duration, known as a Saturnian year, equals about 10,756 to 10,759 Earth days.";
  } 
  else if (planet === "uranus") {
    result.textContent = "It takes Uranus approximately 84 Earth years (about 30,687 Earth days) to complete one orbit around the Sun.";
  } 
  else if (planet === "neptune") {
    result.textContent = "It takes Neptune approximately 164.8 Earth years (or about 165 years) to complete one full orbit around the Sun";
  
  } else { // // if input does not match any planet
    result.textContent = "Please enter a planet from our Solar System, such as Mars, Venus, or Jupiter.";
    result.style.color = "orange";
  }

}

document.getElementById("planet").addEventListener("keypress", function(e) {  //// allows user to press Enter key instead of clicking the button
  if (e.key === "Enter") {
    showOrbitTime();
  }
});
