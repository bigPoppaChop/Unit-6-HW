
// Console logging that the HTML is finding script.js properly
console.log("Unit-6-HW script.js has started");

// Creating an Array storing some animal names that will be used for the initial buttons
var animalArray = ["Wolf", "Leopard", "Griffin", "Vulkan"];

console.log(animalArray);
console.log("hi new animal");




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
// 0. listen for a click event on any of the animal buttons
// 1. Query the giphy API
// 2. store the data that is sent back
// 3. pull from that data to generate HTML code
 $("#animal-btn").on("click", function() {

    // Storing the value of the button that gets clicked
    // The button will be generated in a later function
    //  and will be given a "data-animal" value then
    var animalQuery = $(this).attr("data-animal");
    console.log(animalQuery);
    

    
});
//Running the renderButtons function to display the initial buttons
    renderButtons();
