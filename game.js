
const readline = require('readline');
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
  terminal: false
});

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
  console.log("Please create different words from 4 given letters!");
}

function readAndProcessUserGuess(letters, accept_list) {


//rl.question(
process.openStdin().addListener('data', (input)=> {
      const trimmedInput = input.toString().trim().toUpperCase();

      if (accept_list.includes(trimmedInput)) {
        const index = accept_list.indexOf(trimmedInput) 
        accept_list.slice(index,1)
        console.log("Correct!");
      } else {
        console.log("Wrong answer!");
      };

    // Check if accept_list is empty:
  
    if (accept_list === []) {
      console.log("Yay! You created all the words successfully")
    };

   
  });
}



function genterateRandomLetterList() {
  const rand = Math.floor(Math.random() * letterChoice.length);
  return [letterChoice[rand], letterList[rand]];
}


function playGame() {
  greeting()
  const [letters, words] = genterateRandomLetterList();
  console.log(`Use [${letters}] to create different words.`)
  readAndProcessUserGuess(letters, words);
}

playGame()





