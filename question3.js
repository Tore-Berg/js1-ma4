// Question 3

// Retrieve the id paramater from the querystring and add it to the following URL: https://api.rawg.io/api/games/

// Make a call to the API with the new URL and display at least 4 properties from the result.



const queryString = document.location.search;

const params = new URLSearchParams(queryString);

const id = params.get("id");

console.log(id);

const url = "https://api.rawg.io/api/games/" + id;

const detailsContainer = document.querySelector(".details-container");



async function getGameDetails() {

    try {
        const response = await fetch(url);

        const gameDetails = await response.json();

        console.log(gameDetails);

        detailsContainer.innerHTML = "";

        createHtml(gameDetails);




        } 

       

        catch(error) {
            console.log(error);
            detailsContainer.innerHTML = displayError("Sorry, something went wrong. Try again later.", error);
        }

        
}

 getGameDetails();



function createHtml(gameDetails) {

    for (let i = 0; i < gameDetails.developers.length; i++) {
        const devNames = gameDetails.developers[i].name;

        if(!gameDetails.developers[i].name) {
            continue;
        }

       console.log(devNames) //loop works, and logs all of the names, but only one name displayed in the html. 
                            //Would like some guidance on this problem.

       detailsContainer.innerHTML = `<div class="details-card">
                                        <h1>${gameDetails.name}</h1>
                                        <div class="image-q3" style="background-image: url(${gameDetails.background_image});"></div>
                                        <p>${gameDetails.description}</p>
                                        <time class="date-released">Released ${gameDetails.released}</time>
                                        <div class="dev-names"><p>Developers:</p>${devNames}</div>
                                    </div>`;
    }

    
}

