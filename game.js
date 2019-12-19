const letterChoice = [
    " D, R, I, P ", 
    " A, P , K, R",
    " D, T, E, N ",
    " A, E, B, T ",
];

const letterList = [["DRIP", "RID", "DIP", "RIP"],
              ["PARK", "ARK", "PAR", "RAP"],
              ["DENT", "TEND", "END", "DEN", "NET","TEND"],
              ["BAT", "BET", "EAT", "BETA", 'TEA', "TAB", 
              "ATE", "BEAT"]];


function greeting() {
  let playerName = "What is your name?"
  console.log("Welcome to Wordscapes!");
  console.log("Please create different words form 4 given letters!");
}

function wordScapesGame(letters, accept_list) {

  while (true){
    let answer = "Your answer:"
    
    // Check if answer in the accept_list
    if (accept_list.indexOf(answer) !== -1)  {
      console.log("Correct!");
    } else {
      console.log("Wrong answer!");
    } if (accept_list === []) {
      console.log("Yay! You created all the words successfully")
    };

    break
  }
}

function genterateRandomLetterList() {
  const rand = letterChoice[Math.floor(Math.random() * letterChoice.length)];
  console.log("User letter:" + rand + "to create different words");

  if (rand === letterChoice[0]) {
    possible_words_list = letterChoice[0];
  } else if (rand === letterChoice[1]) {
    possible_words_list = letterChoice[1];
  } else if (rand === letterChoice[2]) {
    possible_words_list = letterChoice[2];
  } else if (rand ===  letterChoice[3]) {
    possible_words_list = letterChoice[3];
  }

  return [rand, possible_words_list];

}

function playAgain() {
  let playAgain = "Do you want to play again? Type Yes or No"

  if (playAgain === "yes") {
    return true;
  }
  else {
   console.log("Bye");
  }
}

function playGame() {
  greeting()
  const playing = true;
  while (playing) {
    const play_wordscapes_game = genterateRandomLetterList();
    const letters = play_wordscapes_game[0];
    const accept_list = play_wordscapes_game[1];
    wordScapesGame(letters, accept_list);
    playing == playAgain()
  }
}

playGame()





