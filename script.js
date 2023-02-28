// Phase 1: Create the planets array
const planets = [
    { name: "Mercury", inner: true, diameter: 3031.9, color: "#696969" },
    { name: "Venus", inner: true, diameter: 7520.8, color: "#b89165" },
    { name: "Earth", inner: true, diameter: 7917.5, color: "#5a5b86" },
    { name: "Mars", inner: true, diameter: 4212.3, color: "#df8c4e" },
    { name: "Jupiter", inner: false, diameter: 86881, color: "#f6a049" },
    { name: "Saturn", inner: false, diameter: 72367, color: "#dcd3a1" },
    { name: "Uranus", inner: false, diameter: 31518, color: "#b4d9df" },
    { name: "Neptune", inner: false, diameter: 30599, color: "#456eff" }
  ];
  
  // Loop to log the name of each planet
  for (let i = 0; i < planets.length; i++) {
    console.log(planets[i].name);
  }
  
  // Function to calculate average diameter of planets
  function averageDiameter(planets) {
    let sum = 0;
    for (let i = 0; i < planets.length; i++) {
      sum += planets[i].diameter;
    }
    const average = sum / planets.length;
    return average;
  }
  
  // Call function and log result to console
  console.log(averageDiameter(planets));
  
  // Phase 2: Previous and next buttons
 // Define variables for the buttons and index display
const prevButton = document.getElementById('prev-btn');
const nextButton = document.getElementById('next-btn');
const indexDisplay = document.getElementById('index-display');

// Initialize index to 0
let index = 0;

// Add event listeners to buttons
prevButton.addEventListener('click', () => {
  index = Math.max(0, index - 1); // Ensure index is at least 0
  updateIndexDisplay();
  updatePlanetDisplay();
});

nextButton.addEventListener('click', () => {
  index = Math.min(planets.length - 1, index + 1); // Ensure index is no greater than the maximum index
  updateIndexDisplay();
  updatePlanetDisplay();
});

// Function to update the index display
function updateIndexDisplay() {
  indexDisplay.textContent = `Index: ${index}`;
}
  
  // Phase 3: Display planet information
// update planet display based on the current index
function updatePlanetDisplay() {
    const currentPlanet = planets[index];
    const planetName = document.getElementById('planet-name');
    const planetType = document.getElementById('planet-type');
    const planetCircle = document.getElementById('planet-circle');
    const prevButton = document.getElementById('prev-btn');
    const nextButton = document.getElementById('next-btn');
    const indexDisplay = document.getElementById('index-display');
    
    planetName.textContent = currentPlanet.name;
    planetType.textContent = currentPlanet.inner ? "Inner planet" : "Outer planet";
    planetCircle.style.backgroundColor = currentPlanet.color;
    planetCircle.style.width = `${Math.sqrt(currentPlanet.diameter / Math.PI) * 2}rem`;
    planetCircle.style.height = `${Math.sqrt(currentPlanet.diameter / Math.PI) * 2}rem`;
    
    prevButton.disabled = index === 0;
    nextButton.disabled = index === planets.length - 1;
  
    indexDisplay.textContent = `Index: ${index}`;
  }
  
  updatePlanetDisplay();
  
  previousButton.addEventListener("click", () => {
    if (index > 0) {
      index--;
      updatePlanetDisplay();
    }
  });
  
  nextButton.addEventListener("click", () => {
    if (index < planets.length - 1) {
      index++;
      updatePlanetDisplay();
    }
  });