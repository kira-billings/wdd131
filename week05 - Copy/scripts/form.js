
document.querySelector("#currentYear").textContent = new Date().getFullYear();


// product array
const products = [
  {
    id: "fc-1888",
    name: "flux capacitor",
    averageRating: 4.5
  },
  {
    id: "fc-2050",
    name: "power laces",
    averageRating: 4.7
  },
  {
    id: "fs-1987",
    name: "time circuits",
    averageRating: 3.5
  },
  {
    id: "ac-2000",
    name: "low voltage reactor",
    averageRating: 3.9
  },
  {
    id: "jj-1969",
    name: "warp equalizer",
    averageRating: 5.0
  }
];

const dropdown = document.querySelector("#productName");
// placeholder option in drop down: needed for required

dropdown.innerHTML = '<option value="" disabled selected>Select a product...</option>';

products.forEach(productName => {
	const option = document.createElement("option");
	option.textContent = `${productName.name}`;
	option.value = productName.id;
	dropdown.appendChild(option);
});

