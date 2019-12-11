letters_choice = [
    " D, R, I, P ", 
    " A, P , K, R",
    " D, T, E, N ",
    " A, E, B, T ",
]

letters_list = [["DRIP", "RID", "DIP", "RIP"],
              ["PARK", "ARK", "PAR", "RAP"],
              ["DENT", "TEND", "END", "DEN", "NET","TEND"],
              ["BAT", "BET", "EAT", "BETA", 'TEA', "TAB", 
              "ATE", "BEAT"]]
                    
import random
def greeting(): 
    print()
    player_name = input("What is your name? > ")
    player_name = player_name.title()
    print("******************")
    print("Welcome", player_name, "to",  "Wordscapes!")
    print("******************")
    print("Hi", player_name, "--Instruction: Please create different words from 4 given letters.")
    print()

def wordscapes_game(letters, accept_list):

    while True:

        answer = input("Your answer:> ")
        answer = answer.upper()
        print()

        if answer in accept_list:
            print("Woohoo! Correct, Please create other words!")
            print()
            accept_list.remove(answer)
        else:         
            print("Wrong answer!",  answer , " is not valid or might have been created. Please try again!")
            print()

        if accept_list == []:
            print("*** Congrats! You created all words succesfully.***")
            print()
            break

def generate_random_letter_list():

    i = random.choice(letters_choice)
    print("Use letters: "   +  str(i) + " to create diffrent words")
    print()

    if i == letters_choice[0]:
        possible_words_list = letters_list[0]
                
    elif i == letters_choice[1]:
        possible_words_list = letters_list[1]
       
    elif i == letters_choice[2]:
        possible_words_list = letters_list[2]
    
    elif i == letters_choice[3]:
        possible_words_list = letters_list[3]
       
    return [i, possible_words_list]

def play_again():

    play_again = input("Do you want to play again? Type Yes or No:> ")
    play_again = play_again.lower()
    print()
            
    if play_again == "yes": 
        return True
        print()
    else:

        print("Bye!")
 
def play_game(): 

    greeting()
    playing = True
    while playing:

        play_wordscapes_game = generate_random_letter_list()

        letters = play_wordscapes_game[0]

        accept_list = play_wordscapes_game[1]

        wordscapes_game(letters, accept_list)   

        playing = play_again()

play_game()