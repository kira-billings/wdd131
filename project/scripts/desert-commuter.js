
document.querySelector("#currentYear").textContent = new Date().getFullYear();

const cities = ["St. George,UT", "Las Vegas,NV", "Littlefield,AZ"];
const apiKey = "5bb36ddd00dd405982d234903261402";

async function loadWeather() {
  const container = document.getElementById("weather-container");

  for (const city of cities) {
    const url = `https://api.weatherapi.com/v1/current.json?key=${apiKey}&q=${city}`;

    const response = await fetch(url);
    const data = await response.json();

    container.innerHTML += `
      <div class="weather-card">
        <h3>${city}</h3>
        <p>Temp: ${data.current.temp_f}°F</p>
        <p>Wind: ${data.current.wind_mph} mph</p>
        <p>Humidity: ${data.current.humidity}%</p>
        <p>Conditions: ${data.current.condition.text}</p>
      </div>
    `;
  }
}

loadWeather();


const hamButton = document.querySelector('#menu');
const navigation = document.querySelector('.header-nav');

hamButton.addEventListener('click', () => {
	  navigation.classList.toggle('open');
	  hamButton.classList.toggle('open');
});

const hamButton2 = document.querySelector('#menu2');
const navigation2 = document.querySelector('.sort-nav');

hamButton2.addEventListener('click', () => {
	  navigation2.classList.toggle('open');
	  hamButton2.classList.toggle('open');
});


const gasStations = [
  {
    name: "Pilot Travel Center",
    city: "St. George, UT",
    exit: 4,
    distanceFromStart: 0,          
    rating: 4.3,         
    size: "large",
    imageURL: "https://locations.pilotflyingj.com/permanent-b0b701/assets/images/PilotMobileLogo.58825b15.svg"
  },
  {
    name: "Chevron - Terrible's",
    city: "St. George, UT",
    exit: 2,
    distanceFromStart: 2,          
    rating: 4.2,         
    size: "small",
    imageURL: "https://www.chevronwithtechron.com/content/dam/external/chevron/en_us/marketing-support/web-images/chevron-with-techron/logo.svg"
  },
  {
    name: "Eagle's Landing Travel Plaza - Pilot",
    city: "Littlefield, AZ",
    exit: 9,
    distanceFromStart: 24,             
    rating: 3.9,           
    size: "medium",
    imageURL: "https://locations.pilotflyingj.com/permanent-b0b701/assets/images/PilotMobileLogo.58825b15.svg"
  },
  {
    name: "Maverik",
    city: "Littlefield, AZ",
    exit: 8,
    distanceFromStart: 25,             
    rating: 4.3,            
    size: "medium",
    imageURL: "https://loyalty.maverik.com/shared/img/mav-logo-lg.svg"
  },
   {
    name: "TA Express Travel Center",
    city: "Littlefield, AZ",
    exit: 8,
    distanceFromStart: 26,            
    rating: 4.2,            
    size: "mega",
    imageURL: "https://cdn.ta-petro.com/media/drla0454/ta-corp-logo-stacked-primary.svg"
  },
  {
    name: "Smith's",
    city: "Mesquite, NV",
    exit: 122,
    distanceFromStart: 36,            
    rating: 4.3,            
    size: "large",
    imageURL: "https://www.smithsfoodanddrug.com/content/v2/binary/image/smiths_svg_logo--freshcart_smiths_color_logo--smiths.svg"
  },
  {
    name: "Dino Mart",
    city: "Mesquite, NV",
    exit: 120,
    distanceFromStart: 38,            
    rating: 4.4,            
    size: "small",
    imageURL: "https://www.sinclairoil.com/sites/default/files/2020-03/sinclair-logo.png"
  },
  {
    name: "Eagle's Landing - Flying J",
    city: "Mesquite, NV",
    exit: 118,
    distanceFromStart: 40,            
    rating: 4.3,           
    size: "mega",
    imageURL: "https://locations.pilotflyingj.com/permanent-b0b701/assets/images/PilotMobileLogo.58825b15.svg"
  },
  {
    name: "Chevron - Terrible's", 
    city: "Moapa, NV",
    exit: 91,
    distanceFromStart: 67,          
    rating: 4.4,         
    size: "medium",
    imageURL: "https://www.chevronwithtechron.com/content/dam/external/chevron/en_us/marketing-support/web-images/chevron-with-techron/logo.svg"
  },
  {
    name: "Moapa Paiute Travel Plaza",
    city: "Moapa, NV",
    exit: 75,
    distanceFromStart: 83,          
    rating: 4.3,         
    size: "large",
    imageURL: "https://static.wixstatic.com/media/9aea7e_3bea3416b03e4e26a5fc5b5ece6130e8~mv2.jpg/v1/fill/w_355,h_358,al_c,q_80,usm_0.66_1.00_0.01,enc_avif,quality_auto/9aea7e_3bea3416b03e4e26a5fc5b5ece6130e8~mv2.jpg"
  },
  {
    name: "Love's Travel Stop",
    city: "Apex, NV",
    exit: 64,
    distanceFromStart: 94,            
    rating: 3.9,            
    size: "mega",
    imageURL: "https://edge.sitecorecloud.io/lovestravela9dd-loves2161-lovesprod042a-cf5a/media/project/loves/default/logo_top-(2).png?h=50&iar=0&w=194"
  },
  {
    name: "Chevron - Terrible's",
    city: "Apex, NV",
    exit: 58,
    distanceFromStart: 100,          
    rating: 2.5,         
    size: "medium",
    imageURL: "https://www.chevronwithtechron.com/content/dam/external/chevron/en_us/marketing-support/web-images/chevron-with-techron/logo.svg"
  },
  {
    name: "Speedee Mart - 76",
    city: "Las Vegas, NV",
    exit: 54,
    distanceFromStart: 105,             
    rating: 4.4,            
    size: "small",
    imageURL: "https://static.wixstatic.com/media/dc2f2d_a1f9714ff80a44f49de9eb4a36d0e970~mv2.png/v1/fill/w_485,h_162,al_c,q_85,usm_0.66_1.00_0.01,enc_avif,quality_auto/Screen%20Shot%202018-10-11%20at%2010_27_51%20AM%20co.png"
  },
  {
    name: "Maverik",
    city: "Las Vegas, NV",
    exit: 52,
    distanceFromStart: 107,             
    rating: 4.3,            
    size: "medium",
    imageURL: "https://loyalty.maverik.com/shared/img/mav-logo-lg.svg"
  },
  {
    name: "Pilot Travel Center",
    city:"Las Vegas, NV",
    exit: 48,
    distanceFromStart: 103,            
    rating: 2.8,            
    size: "large",
    imageURL: "https://locations.pilotflyingj.com/permanent-b0b701/assets/images/PilotMobileLogo.58825b15.svg"
  },
   
];


createGasCard(gasStations);

// Biggest size
const biggestLink = document.querySelector("#biggest");
biggestLink.addEventListener("click", () => {
  setActiveSort(biggestLink);
  const sizeOrder = {
    small: 1,
    medium: 2,
    large: 3,
    mega: 4
  };
  createGasCard(gasStations.sort((a, b) => sizeOrder[b.size] - sizeOrder[a.size]));
});

// City
const cityLink = document.querySelector("#city");
cityLink.addEventListener("click", () => {
  setActiveSort(cityLink);
  createGasCard(
    gasStations.sort((a, b) => a.city.localeCompare(b.city))
  );
});


// Exit Number
const exitLink = document.querySelector("#exit-number");
exitLink.addEventListener("click", () => {
  setActiveSort(exitLink);
  createGasCard(
    gasStations.sort((a, b) => a.exit - b.exit)
  );
});

// Highest rated
const highestRatedLink = document.querySelector("#highest-rated");
highestRatedLink.addEventListener("click", () => {
  setActiveSort(highestRatedLink);
  createGasCard(
    gasStations.sort((a, b) => b.rating - a.rating)
  );
});

// Nearest to ST. GEorge
const nearestLink = document.querySelector("#nearest-saint-george");
nearestLink.addEventListener("click", () => {
  setActiveSort(nearestLink);
  createGasCard(
    gasStations.sort((a, b) => a.distanceFromStart - b.distanceFromStart)
  );
});

// All sort links
const sortLinks = document.querySelectorAll(".gas a");

// Helper: remove active from all, then add to clicked one
function setActiveSort(clickedLink) {
  sortLinks.forEach(link => link.classList.remove("active"));
  clickedLink.classList.add("active");
}

function createGasCard(stations) {
    const gallery = document.querySelector(".gallery");
    gallery.innerHTML = ""; // Clear previous cards

    stations.forEach(station => {
        let card = document.createElement("section");
        card.classList.add("station-card");
        let img = document.createElement("img");
        let name = document.createElement("h3");
        let exit = document.createElement("p");
        let distanceFromStart = document.createElement("p");
        let rating = document.createElement("p");
        let size = document.createElement("p");
        let city = document.createElement("p");
       
        img.src = station.imageURL;
        img.alt = station.name;
        img.loading = "lazy";

        name.textContent = station.name;
        city.textContent = station.city;
        exit.innerHTML = `<span class="label">Exit:</span> ${station.exit}`;
        distanceFromStart.innerHTML = `<span class="label">Distance from St. George:</span> ${station.distanceFromStart} miles`;
        rating.innerHTML = `<span class="label">Rating:</span> ${station.rating}`;
        size.innerHTML = `<span class="label">Size:</span> ${station.size}`;

        
        card.appendChild(name);
        card.appendChild(city);
        card.appendChild(exit);
        card.appendChild(distanceFromStart);
        card.appendChild(rating);
        card.appendChild(size);
        card.appendChild(img);

        gallery.appendChild(card);
    });
}

// visits counter

const visitsDisplay = document.querySelector(".visits");

if (visitsDisplay){
// Get the stored value
let numVisits = Number(localStorage.getItem("numVisits-ls")) || 0;

// Determine if this is the first visit or display the number of visits. 
if (numVisits === 0) {
  visitsDisplay.textContent = `This is your first visit. Welcome to desert commute!`;
	
} 
else {
	visitsDisplay.textContent = numVisits;
}
numVisits++;
localStorage.setItem("numVisits-ls", numVisits);
}



