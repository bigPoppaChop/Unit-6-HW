
// Console logging that the HTML is finding script.js properly
console.log("Unit-6-HW script.js has started");

// Creating an Array storing some animal names that will be used for the initial buttons
var animalArray = ["Wolf", "Leopard", "Griffin", "Vulkan"];

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
        var animalBtn =$("<button>");

        // Adding a class called "animal-btn"
        animalBtn.addClass("animal-btn");
        
        // Adding the "data-animal" attribute that is used in
        // the function "displayAnimalGifs"
        animalBtn.attr("data-animal", animalArray[i]);

        //setting the button text
        animalBtn.text(animalArray[i]);
        
        //Releasing the beautiful new buttons to the buttons-view div
        $("#animal-buttons").append(animalBtn);
        console.log(animalBtn);
    }
};

//  CLICK EVENTS!!!!!!!!!!!!!

// Function for when "Safari Time!" is pressed
$("#button-safari").on("click", function(event){
    
     // use event.preventDefault() to stop the browswer from resetting the entire page
    event.preventDefault();

    //Retrieving the text from the user input
    var animalInput = $("#text-input").val();

    // Adding the animal from the text box to the 'animal' array    
    animalArray.push(animalInput);

    // Render new buttons!
    renderButtons();
});


// API QUERY SECTION
//Create a function that will
// 0. listen for a click event on any button with a class "animal-btn"
// 1. Query the giphy API
// 2. store the data that is sent back
// 3. pull from that data to generate HTML code
 $(document).on("click", ".animal-btn", function() {

    // Storing the value of the button that gets clicked
    // The button will be generated in a later function
    //  and will be given a "data-animal" value then
    var animalQuery = $(this).attr("data-animal");
    console.log(animalQuery);

    // Creating the API query URL
    var queryURL = "https://api.giphy.com/v1/gifs/search?q=" + animalQuery +"&api_key=9N8YbIJXH526aE36hCaIkdJwoXFug7Zr&limit=10";
    console.log(queryURL);

    // Running the Ajax function
     $.ajax({
        url: queryURL,
        method: "GET"
    }).then(function(giphyReply){

        // console logging giphyReply
        console.log(giphyReply);
        var giphyResults = giphyReply.data;

        // clearing previous query's gifs
         $("#animals-gif").empty();
         for (var i = 0; i < giphyResults.length; i++){
            console.log(giphyResults[i].rating);
            // create div tag
            var animalDiv =$("<div>");
    
            //Create and store a p tag for the gif rating
            var ratingDisplay = $("<p>").text("Rating: "+ giphyResults[i].rating);

            //Displaying the rating;
            animalDiv.append(ratingDisplay);

            // Create and store an img tag for the actual gif
            var animalImage = $("<img>");
            
            //setting the img tag's src attr based on info from the API response
            animalImage.attr("src", giphyResults[i].images.fixed_height.url);

            //append the img tag to animalDiv
            animalDiv.append(animalImage);

            // sending the animalDiv to the HTML in the animals-gif div
            $("#animals-gif").prepend(animalDiv);
        };

    });
});

//Running the renderButtons function to display the initial buttons
 renderButtons();
