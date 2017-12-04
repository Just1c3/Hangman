function createVars(){
    word = "";
    people = ["obama","beyonce","albinson"] ;
    places = ["california","berkeley"];
    guessedLetters = [];
    guessesLeft = 10;
    possibleLetters=["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"];
}


function startgame(){
    guessedLetters = [];
    guessesLeft = 10;
    document.getElementById("GuessedLeft").innerHTML= "Guesses Left 10";
    document.getElementById("AlreadyGuessed").innerHTML= "Letters Already Guessed";
    var category = document.getElementById("category").value;
    var cato = parseInt(category);

    if (cato== 1){
        word = people[Math.floor(Math.random() * people.length)];
    }
    if(cato== 2){
        word = places[Math.floor(Math.random() * places.length)];
    }
console.log(word);
    printWord();
    document.getElementById("win").innerHTML=" ";
    document.getElementById("lose").innerHTML=" ";
}



function printWord(){
    var print= " ";
    for(var i= 0; i<word.length; i++){
        if(guessedLetters.indexOf(word[i]) === -1){
            print+="_ ";
        }else{
    print += word[i];
        }
    }
    document.getElementById("printWord").innerHTML=print;
    if(print.indexOf("_")==-1){
        document.getElementById("win").innerHTML= "Congradulations, you win!";
    }
    if(guessesLeft == 1 ){
        document.getElementById("lose").innerHTML= "You Lose";
    }
}

function guessLetter(){
    document.getElementById("guessguess").innerHTML=" ";
    var guess = document.getElementById("alphabet").value;
   console.log(guess);
    if(guessedLetters.indexOf(guess)> -1){
        document.getElementById("guessguess").innerHTML= "You have already guessed this letter.";
    }else{
        guessedLetters.push(guess);
        printWord();
        document.getElementById("AlreadyGuessed").innerHTML = "Letters already guessed: " + guessedLetters;
        if (guessesLeft > 0) {
            guessesLeft--;
        }
        document.getElementById("GuessedLeft").innerHTML = "Guesses Left " + guessesLeft;
    }
}



