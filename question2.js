// Question 2

// Add the following to a page called question2.html:

// Make a call to https://api.rawg.io/api/games?dates=1999-01-01,1999-12-31&ordering=-rating.

// For each game object in the results, create HTML that displays at least 3 properties from the objects. You can include an image property or leave it out.

// Link from each game to question3.html and pass the id of each game in the querystring.


const url = "https://api.rawg.io/api/games?dates=1999-01-01,1999-12-31&ordering=-rating";

const resultsContainer = document.querySelector(".container");

async function getGame() {

    try {
            const response = await fetch(url);

            const json = await response.json();

            const gamesApi = json.results;

            console.log(json);

            resultsContainer.innerHTML = "";

            gamesApi.forEach(function(games) {

                resultsContainer.innerHTML += `<a href="question3.html?id=${games.id}" class="cards">
                                                    <div class="image" style="background-image: url(${games.background_image});"></div>
                                                    <h4 class="name">${games.name}</h4>   
                                                    <time class="date-released">Released: ${games.released}</time>                                                                                                                                               
                                                </a>`;
                
            });

        } 

        catch(error) {
            console.log(error);
            resultsContainer.innerHTML = displayError("Oh noes!!!", error);
        }
}




getGame();

