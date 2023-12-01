const randomNumber = Math.floor(Math.random() * 100) + 1;
console.log(randomNumber);
let userInputArray = [];
let remainingGuess = 10;
$("#submit").on("click", function () {
  let userInput = Number($("#input").val());

  let invalidInput = ((userInput <= 0) || (userInput > 100) || ( !(Number.isInteger(userInput))))

  if ( invalidInput ) {
    alert("WARNING : Input Error !!!!")
    $("#warning").html(
        `<p id="warning" class="warning">INPUT ERROR : The Input must be an Positive Integer Lesser Than 100. </p>`
    );
      
  } else if (userInput == randomNumber) {

    $("#warning").html(
        `<p id="warning"></p>`
    );

    $("#gameplay").html(
      `<p class="resultOK">Oh, it's ${randomNumber}! That's absolutely correct guess, Champ!<br>Do you want to start another Game?</p>\n<button class="newGame">Start A New Game</button>`
    );
    $(".newGame").on("click", () => location.reload())

  } else {

    $("#warning").html(
        `<p id="warning" class="notOkay">Oops! ${userInput} is not the correct choice!</p>`
    );

    userInputArray.push(userInput);
    remainingGuess--;
    
    if (remainingGuess == 0) {
        $("#gameplay").html(
          `<p class="resultLost">Well, This time that didn't go well, it's ${randomNumber}! It's Fine, Champ!<br>let's do another try?</p>\n<button class="restart">Start A New Game</button>`
        );
        $(".restart").on("click", () => location.reload())

    }

    $("#previousGuess").text(
      `Previous Guesses : ${userInputArray.toLocaleString()}`
    );
    $("#remainingGuess").text(`Guesses Remaining : ${remainingGuess}`);
  }
});
