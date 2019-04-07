// Eric's Unit-6-HW JavaScript File

// Console logging that the HTML is finding script.js properly
console.log("Unit-6-HW script.js detected by HTML properly :)");

// Creating an Array storing some animal names that will be used for the initial buttons
var animalArray = ["Wolf", "Leopard", "Griffin", "Rat"] 

console.log(animalArray);


//  RENDERING BUTTONS

// Function for creating the buttons
function renderButtons() {

    // first wipe away the past to make way for a promising future
    $("#animal-buttons").empty();

    //loop through the array 'animal' from line 21
    // data for this array is generated from the text box input
    for (var i =0; i < animalArray.length; i++) {

        // for each item in the array, create a button for it
        var button =$("<button>");

        // Adding a class called "animal-btn"
        button.addClass("animal-btn");
        
        // Adding the "data-animal" attribute that is used in
        // the function "displayAnimalGifs"
        button.attr("data-animal", animalArray[i]);

        //setting the button text
        button.text(animalArray[i]);
        
        //Releasing the beautiful new buttons to the buttons-view div
        $("#animal-buttons").append(button);
        console.log(button);
    }
};

// Function for when an animal button is clicked
$("#animal-buttons").on("click", function(event){
    
    // use event.preventDefault() to stop the browswer from resetting the entire page
    event.preventDefault();

    //Retrieving the text from the user input
    var animal = $("#animal-input").val();

    // Adding the animal from the text box to the 'animal' array    
    animalArray.push(animal);

    // BUTTON RENDERING ENGAGE
    renderButtons();
});



//  AJAX FUNCTION AND GENERATING HTML FROM API DATA


//Create a function that will:
// 1. Query the gipy API
// 2. store the data that is sent back
// 3. pull from that data to generate HTML code
function displayAnimalGifs() {

    // Storing the value of the button that gets clicked
    // The button will be generated in a later function
    //  and will be given a "data-animal" value then
    var animaQuery = $(this).attr("data-animal");
    

    // Creating the API query URL
    var queryURL = "https://api.giphy.com/v1/gifs/search?q=" + animalQuery +"&api_key=9N8YbIJXH526aE36hCaIkdJwoXFug7Zr";
    
    // Perform the AJAX request
    $.ajax({
        url: queryURL,
        method: "GET"
    })
    // use the "promise" function thing to create a referenceable thing called "giphyReply"
    .then(function(giphyReply){
        // console logging the query URL
        console.log(queryURL);
        // console logging giphyReply
        console.log(giphyReply);

        // store the info sent by giphy into a variable
        var giphyResults = response.data;
        for (var i = 0; i < giphyResults.length; i++){

            // create div tag
            var animalDiv =$("<div>");

            // Create and store an img tag for the actual gif
            var animalImage = $("<img>");
            
            //setting the img tag's src attr based on info from the API response
            animalImage.attr("src", giphyResults[i].images.fixed_height.url);

            //append the img tag to animalDiv
            animalDiv.append(animalImage);

            // sending the animalDiv to the HTML in the animals-gif div
            $("#animals-gif").prepend(animalDiv);
        }
    })
};

//  CLICK EVENTS!!!!!!!!!!!!!

// Function for when an animal button is clicked
$("#animal-input").on("click", function(event){
    
    // use event.preventDefault() to stop the browswer from resetting the entire page
    event.preventDefault();

    //Retrieving the text from the user input
    var animal = $("#animal-input").val();

    // Adding the animal from the text box to the 'animal' array    
    animalArray.push(animal);

    // BUTTON RENDERING ENGAGE
    renderButtons();
});

//Running the renderButtons function to display the initial buttons
    renderButtons();


