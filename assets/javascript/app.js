


//click events


//


//questions 

var questions = [{
    question: "What is the largest coffee producing country?",
    responses: ["Brazil", "Columbia", "Indonesia", "Ethiopia"],
    correctResponse: "Brazil",
},
{
    question: "How much caffeine is in 40g of coffee?",
    responses: ["225mg", "462mg", "556mg", "336mg"],
    correctResponse: "336mg",
},
{
    question: "Who invented instant coffee",
    responses: ["Satori Kato", "Jerry Baldwin", "Zev Siegl", "Gordon Bowker"],
    correctResponse: "Satori Kato",
},
{
    question: "What is the name of the plant from which coffee originates?",
    responses: ["Coca plant", "Cacao tree", "Coffea plants", "Coconut palms"],
    correctResponse: "Coffea plants",
},
{
    question: "Light roast tends to have more caffeine than dark roast.",
    responses: ["True", "False"],
    correctResponse: "True",
},
{
    question: "Coffee is really a bean",
    responses: ["True", "False"],
    correctResponse: "False",
},
{
    question: "There is one other creature on this planet who enjoys caffeine as much as we do.  Who are they?",
    responses: ["Honeybees", "Butterflies", "Cicadas"],
    correctResponse: "Honeybees",

},
{
    question: "What was the occupation of the person who discovered coffee",
    responses: ["Goat herder", "Farmer", "Tibetan Nomads"],
    correctResponse: "Goat herder",
}];

//counter variables
var correct = 0;
var incorrect = 0;
var unanswered = 0;
var counter = "";
var count = 45;
var currentQuestion = 0;
var userSelect;



$("#startgame").click(function () {
    $("#startgame").hide();
    counter = setInterval(timer(), 1000);
    questionPortion();
    $("#timer").html("Time remaining:" + counter);
});

//questionPortion();

function timer() {
    count--;

    if (count > 0) {
        clearInterval(counter);
        //$("#timer").html("Time remaining:" + count);
    }
    //$("#timer").html("Time remaining:" + count);
    console.log(count);
}
//display the questions and responses and grab the data from the user
function questionPortion() {
    var answered = true;
    $('#newQuestion').html('Question #' + (currentQuestion + 1) + '/' + questions.length);
    $('.currentQuestion').html('<h2>' + questions[currentQuestion].question + '</h2>');
    for (var i = 0; i < 4; i++) {
        var choices = $('<button>');
        choices.text(questions[currentQuestion].responses[i]);
        choices.attr({ 'data-index': i });
        choices.addClass('thisChoice');
        $('#availAnswers').append(choices);
    }
    
    $('.thisChoice').click(function () {
        //var userSelect = $(this).data('index');
        var userSelect= $(".thisChoice").val();
        console.log(userSelect);
        responsePage();
   
});

}

function responsePage() {
    $("#newQuestion").empty();
    $(".currentQuestion").empty();
    $(".thisChoice").hide();

    //var correctAnswers = questions[currentQuestion].questions[currentQuestion].correctResponse;
    var answerLocation = questions[currentQuestion].correctResponse;

    if (userSelect == answerLocation) {
        correct++;
        $('#results').text("You are correct!!!!");
    } else if (userSelect != answerLocation)  {
        incorrect++;
        $('#results').text("Nope... Wrong answer");
        $('#correctedAnswer').html('The answer should have been ' + answerLocation);
    } else {
        unanswered++;
        $('#results').text("You have ran out of time.");
        $('#correctedAnswer').html('The answer should have been ' + answerLocation);
       
    }
    

}

