// get current year
const year = document.querySelector("#currentYear");
// use the date object
const today = new Date();
// use back ticks for literal in js
year.innerHTML = `${today.getFullYear()}`;
// get last modified date
const lastModified = document.querySelector("#lastModified");
lastModified.textContent = `Last Modified: ${document.lastModified}`;