/**
 * Data Catalog Project Starter Code - SEA Stage 2
 *
 * This file is where you should be doing most of your work. You should
 * also make changes to the HTML and CSS files, but we want you to prioritize
 * demonstrating your understanding of data structures, and you'll do that
 * with the JavaScript code you write in this file.
 *
 * The comments in this file are only to help you learn how the starter code
 * works. The instructions for the project are in the README. That said, here
 * are the three things you should do first to learn about the starter code:
 * - 1 - Change something small in index.html or style.css, then reload your
 *    browser and make sure you can see that change.
 * - 2 - On your browser, right click anywhere on the page and select
 *    "Inspect" to open the browser developer tools. Then, go to the "console"
 *    tab in the new window that opened up. This console is where you will see
 *    JavaScript errors and logs, which is extremely helpful for debugging.
 *    (These instructions assume you're using Chrome, opening developer tools
 *    may be different on other browsers. We suggest using Chrome.)
 * - 3 - Add another string to the titles array a few lines down. Reload your
 *    browser and observe what happens. You should see a fourth "card" appear
 *    with the string you added to the array, but a broken image.
 *
 */

// This is an array of arrays that represent Top 50 lifetime grossing movies
// Each row represents (Rank, Title, Lifetime Gross, Year)
const boxOfficeData = [
  [1, "Avatar", 2923710708, 2009],
  [2, "Avengers: Endgame", 2799439100, 2019],
  [3, "Avatar: The Way of Water", 2320250281, 2022],
  [4, "Titanic", 2264812968, 1997],
  [5, "Star Wars: Episode VII - The Force Awakens", 2071310218, 2015],
  [6, "Avengers: Infinity War", 2052415039, 2018],
  [7, "Spider-Man: No Way Home", 1921407902, 2021],
  [8, "Ne Zha 2", 1898391768, 2025],
  [9, "Inside Out 2", 1698863816, 2024],
  [10, "Jurassic World", 1671537444, 2015],
  [11, "The Lion King", 1662020819, 2019],
  [12, "The Avengers", 1520538536, 2012],
  [13, "Furious 7", 1515342457, 2015],
  [14, "Top Gun: Maverick", 1495696292, 2022],
  [15, "Frozen II", 1453683476, 2019],
  [16, "Barbie", 1447038421, 2023],
  [17, "Avengers: Age of Ultron", 1405018048, 2015],
  [18, "The Super Mario Bros. Movie", 1360847665, 2023],
  [19, "Beauty and the Beast", 1356081801, 2017],
  [20, "Black Panther", 1349926083, 2018],
  [21, "Harry Potter and the Deathly Hallows: Part 2", 1342499744, 2011],
  [22, "Deadpool & Wolverine", 1338073645, 2024],
  [23, "Star Wars: Episode VIII - The Last Jedi", 1334407706, 2017],
  [24, "Jurassic World: Fallen Kingdom", 1310469037, 2018],
  [25, "Frozen", 1306450154, 2013],
  [26, "Iron Man 3", 1266152644, 2013],
  [27, "Incredibles 2", 1243225667, 2018],
  [28, "The Fate of the Furious", 1236009236, 2017],
  [29, "Minions", 1159457503, 2015],
  [30, "Captain America: Civil War", 1155046416, 2016],
  [31, "Aquaman", 1152028393, 2018],
  [32, "The Lord of the Rings: The Return of the King", 1138585992, 2003],
  [33, "Spider-Man: Far from Home", 1132705055, 2019],
  [34, "Captain Marvel", 1131416446, 2019],
  [35, "Transformers: Dark of the Moon", 1123794079, 2011],
  [36, "The Dark Knight Rises", 1114976407, 2012],
  [37, "Skyfall", 1108594137, 2012],
  [38, "Transformers: Age of Extinction", 1105261713, 2014],
  [39, "Jurassic Park", 1104379926, 1993],
  [40, "Aladdin", 1097831681, 2019],
  [41, "Joker", 1078958629, 2019],
  [42, "Star Wars: Episode IX - The Rise of Skywalker", 1077022372, 2019],
  [43, "Toy Story 4", 1073841394, 2019],
  [44, "Toy Story 3", 1067316101, 2010],
  [45, "Pirates of the Caribbean: Dead Man's Chest", 1066179747, 2006],
  [46, "Moana 2", 1059197729, 2024],
  [47, "Rogue One: A Star Wars Story", 1058684742, 2016],
  [48, "Pirates of the Caribbean: On Stranger Tides", 1046721266, 2011],
  [49, "Star Wars: Episode I - The Phantom Menace", 1046515409, 1999],
  [50, "Despicable Me 3", 1034800131, 2017],
];

// This function adds cards the page to display the data in the array
// and sorts by lifetime gross (default when page is loaded)
function sortByGross() {
  const cardContainer = document.getElementById("card-container");
  cardContainer.innerHTML = "";
  const templateCard = document.querySelector(".card");

  for (let i = 0; i < boxOfficeData.length; i++) {
    let title = boxOfficeData[i][1];

    // image names are represented by {rank}.jpg
    let imageURL = "images/" + boxOfficeData[i][0] + ".jpg";

    let lifetimeGross = boxOfficeData[i][2];

    let year = boxOfficeData[i][3];

    const nextCard = templateCard.cloneNode(true); // Copy the template card
    editCardContent(nextCard, title, imageURL, lifetimeGross, year); // Edit title and image
    cardContainer.appendChild(nextCard); // Add new card to the container
  }
}

function editCardContent(card, newTitle, newImageURL, newLifeGross, newYear) {
  card.style.display = "block";

  const cardHeader = card.querySelector("h2");
  cardHeader.textContent = newTitle + ` (${newYear})`;

  const cardImage = card.querySelector("img");
  cardImage.src = newImageURL;
  cardImage.alt = newTitle + " Poster";

  const cardDescription = card.querySelector("p");
  cardDescription.textContent = `Lifetime Gross: $${newLifeGross.toLocaleString()}`;

  // You can use console.log to help you debug!
  // View the output by right clicking on your website,
  // select "Inspect", then click on the "Console" tab
  console.log("new card:", newTitle, "- html: ", card);
}

// This calls the addCards() function when the page is first loaded
document.addEventListener("DOMContentLoaded", sortByGross);

// This function sorts cards by year
// First, rearranges the box office data using a copy of the data
// Then displays the cards
function sortByYear() {
  copyData = [...boxOfficeData];
  copyData.sort((a, b) => {
    if (a[3] < b[3]) {
      return -1; // a comes before b
    } 
    if (a[3] > b[3]) {
      return 1; // b comes before a
    }
    // equal year, sort by name
    if (a[1] < b[1]) {
      return -1;
    }
    return 1
  });

  const cardContainer = document.getElementById("card-container");
  cardContainer.innerHTML = "";
  const templateCard = document.querySelector(".card");
  
  for (let i = 0; i < copyData.length; i++) {
    let title = copyData[i][1];
  
    // image names are represented by {rank}.jpg
    let imageURL = "images/" + copyData[i][0] + ".jpg";
  
    let lifetimeGross = copyData[i][2];
  
    let year = copyData[i][3];
  
    const nextCard = templateCard.cloneNode(true); // Copy the template card
    editCardContent(nextCard, title, imageURL, lifetimeGross, year); // Edit title and image
    cardContainer.appendChild(nextCard); // Add new card to the container
  }
}

function sortByName() {
  copyData = [...boxOfficeData];
  copyData.sort((a, b) => {
    if (a[1] < b[1]) {
      return -1; // a comes before b
    } 
    if (a[1] > b[1]) {
      return 1; // b comes before a
    }
    // equal
    return 0
  });

  const cardContainer = document.getElementById("card-container");
  cardContainer.innerHTML = "";
  const templateCard = document.querySelector(".card");
  
  for (let i = 0; i < copyData.length; i++) {
    let title = copyData[i][1];
  
    // image names are represented by {rank}.jpg
    let imageURL = "images/" + copyData[i][0] + ".jpg";
  
    let lifetimeGross = copyData[i][2];
  
    let year = copyData[i][3];
  
    const nextCard = templateCard.cloneNode(true); // Copy the template card
    editCardContent(nextCard, title, imageURL, lifetimeGross, year); // Edit title and image
    cardContainer.appendChild(nextCard); // Add new card to the container
  }
}

function openModal(button) {
  const card = button.closest(".card");
  const modal = card.querySelector(".popup-modal");
  modal.style.display = "block";
}

function closeModal(span) {
  const modal = span.closest(".popup-modal");
  modal.style.display = "none";
}

