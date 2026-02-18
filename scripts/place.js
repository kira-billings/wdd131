// get current year
const year = document.querySelector("#currentYear");
// use the date object
const today = new Date();
// use back ticks for literal in js
year.innerHTML = `${today.getFullYear()}`;
// get last modified date
const lastModified = document.querySelector("#lastModified");
lastModified.textContent = `Last Modified: ${document.lastModified}`;

// function for windchill factor
function calculateWindChill(tempF, windSpeed) {
  return 35.74 + 0.6215 * tempF - 35.75 * Math.pow(windSpeed, 0.16) + 0.4275 * tempF * Math.pow(windSpeed, 0.16);
}

// Example: pulling values from your HTML
const tempText = document.getElementById("temp").textContent;
const windText = document.getElementById("wind").textContent;

const temp = parseFloat(tempText.replace(/[^0-9.-]/g, ""));
const wind = parseFloat(windText.replace(/[^0-9.-]/g, ""));

let windChillValue = "N/A";

// Only calculate if conditions are valid
if (temp <= 50 && wind > 3) {
  windChillValue = calculateWindChill(temp, wind).toFixed(1) + "°";
}

document.getElementById("windchill").textContent = "Wind Chill: " + windChillValue;

