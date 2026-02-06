

const hamButton = document.querySelector('#menu');
const navigation = document.querySelector('.navigation');

hamButton.addEventListener('click', () => {
	  navigation.classList.toggle('open');
	  hamButton.classList.toggle('open');
});

const temples = [
  {
    templeName: "Aba Nigeria",
    location: "Aba, Nigeria",
    dedicated: "2005, August, 7",
    area: 11500,
    imageUrl:
    "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/aba-nigeria/400x250/aba-nigeria-temple-lds-273999-wallpaper.jpg"
  },
  {
    templeName: "Manti Utah",
    location: "Manti, Utah, United States",
    dedicated: "1888, May, 21",
    area: 74792,
    imageUrl:
    "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/manti-utah/400x250/manti-temple-768192-wallpaper.jpg"
  },
  {
    templeName: "Payson Utah",
    location: "Payson, Utah, United States",
    dedicated: "2015, June, 7",
    area: 96630,
    imageUrl:
    "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/payson-utah/400x225/payson-utah-temple-exterior-1416671-wallpaper.jpg"
  },
  {
    templeName: "Yigo Guam",
    location: "Yigo, Guam",
    dedicated: "2020, May, 2",
    area: 6861,
    imageUrl:
    "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/yigo-guam/400x250/yigo_guam_temple_2.jpg"
  },
  {
    templeName: "Washington D.C.",
    location: "Kensington, Maryland, United States",
    dedicated: "1974, November, 19",
    area: 156558,
    imageUrl:
    "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/washington-dc/400x250/washington_dc_temple-exterior-2.jpeg"
  },
  {
    templeName: "Lima Perú",
    location: "Lima, Perú",
    dedicated: "1986, January, 10",
    area: 9600,
    imageUrl:
    "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/lima-peru/400x250/lima-peru-temple-evening-1075606-wallpaper.jpg"
  },
  {
    templeName: "Mexico City Mexico",
    location: "Mexico City, Mexico",
    dedicated: "1983, December, 2",
    area: 116642,
    imageUrl:
    "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/mexico-city-mexico/400x250/mexico-city-temple-exterior-1518361-wallpaper.jpg"
  },
  {
	templeName: "Ogden Utah Temple",
	location: "Ogden, Utah",
	dedicated: "2014, September, 21",
	area: 112232,
	imageUrl:
	"https://churchofjesuschristtemples.org/assets/img/temples/ogden-utah-temple/ogden-utah-temple-4175-thumb.jpg"
  },
  {
	templeName: "Provo City Center Temple",
	location: "Provo, Utah",
	dedicated: "2016, March, 20",
	area: 85084,
	imageUrl:
	"https://churchofjesuschristtemples.org/assets/img/temples/provo-city-center-temple/provo-city-center-temple-11074.jpg",
  },
  {
	templeName: "Red Cliff Temple",
	location: "Saint George, Utah",
	dedicated: "2024, March, 24",
	area: 96277,
	imageUrl:
	"https://churchofjesuschristtemples.org/assets/img/temples/red-cliffs-utah-temple/red-cliffs-utah-temple-44648-thumb.jpg",
  }
]

createTempleCard(temples);

const homeLink = document.querySelector("#Home");
homeLink.addEventListener("click", () => {
	createTempleCard(temples);
});


const oldLink = document.querySelector("#Old");
oldLink.addEventListener("click", () => {
	createTempleCard(
		temples.filter(temple => Number(temple.dedicated.split(",")[0].trim()) < 1900)
	);
});

const newLink = document.querySelector("#New");
newLink.addEventListener("click", () => {
	createTempleCard(
		temples.filter(temple => Number(temple.dedicated.split(",")[0].trim()) > 2000)
	);
});

const largeLink = document.querySelector("#Large");
largeLink.addEventListener("click", () => {
	createTempleCard(
		temples.filter(temple => temple.area > 90000)
	);
});

const smallLink = document.querySelector("#Small");
smallLink.addEventListener("click", () => {
	createTempleCard(
		temples.filter(temple => temple.area < 10000)
	);
});

function createTempleCard(filteredTemples) {
    const gallery = document.querySelector(".gallery");
    gallery.innerHTML = ""; // Clear previous cards

    filteredTemples.forEach(temple => {
        let card = document.createElement("section");
        card.classList.add("temple-card");

        let name = document.createElement("h3");
        let location = document.createElement("p");
        let dedicated = document.createElement("p");
        let area = document.createElement("p");
        let img = document.createElement("img");

        name.textContent = temple.templeName;
        location.innerHTML = `<span class="label">Location:</span> ${temple.location}`;
        dedicated.innerHTML = `<span class="label">Dedicated:</span> ${temple.dedicated}`;
        area.innerHTML = `<span class="label">Size:</span> ${temple.area} sq ft`;

        img.src = temple.imageUrl;
        img.alt = `${temple.templeName} Temple`;
        img.loading = "lazy";

        card.appendChild(name);
        card.appendChild(location);
        card.appendChild(dedicated);
        card.appendChild(area);
        card.appendChild(img);

        gallery.appendChild(card);
    });
}


	