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

// Loop over each letter in letter choice 
// const createDivsForLetterChoice = (letterchoice) => {
//     for (const letter of letterChoice) {
//         $('#letter-container').append(`<div class="letter-box ${letter}"></div`);
//     }
// };


function greeting() {
  let playerName = input('What is your name?>');
  playerName = player_name.title();
  console.log("Welcome to Wordscapes!");
  console.log("Please create different words form 4 given letters!");
}

function wordScapesGame(letter, accept_list) {

  while (true){
    const answer = input("Your answer:>")
    const answer = answer.upper()

    if ( answer in accept_list )  {
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
  console.log("User letter:" + str(rand) + "to create different words");

  if (rand === letterChoice[0]) {
    const possible_words_list = letterChoice[0];
  } else if (rand === letterChoice[1]) {
    const possible_words_list = letterChoice[1];
  } else if (rand === letterChoice[2]) {
    const possible_words_list = letterChoice[2];
  } else if (rand ===  letterChoice[3]) {
    const possible_words_list = letterChoice[3];
  }

  return [rand, possible_words_list];

}

function playAgain() {
  const playAgain = input("Do you want to play again? Type Yes or No:>");
  const playAgain = play_again.lower();
}

  if (playAgain === "yes") {
    return true;
  }
  else {
   console.log("Bye");
  }

function playGame() {
  greeting()
  const playing = true;
  while (playing) {
    const play_wordscapes_game = genterateRandomLetterList();
    const letters = play_wordscapes_game[0];
    const accept_list = play_wordscapes_game[1];
    wordscapes_game(letters, accept_list);
    playing = playAgain()
  }
}

playGame()





