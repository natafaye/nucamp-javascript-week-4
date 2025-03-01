const WORD_OPTIONS = ["FADE", "CAB", "BAD", "BADE"]
const targetIndex = Math.floor(Math.random() * WORD_OPTIONS.length)
const targetWord = WORD_OPTIONS[targetIndex]

const guessedLetters = []


/** Make the target word area **/

const targetWordParagraph = document.querySelector("#target-word")
// const targetWordParagraph = document.getElementById("target-word")

let targetWordUnderlines = ""
for (let i = 0; i < targetWord.length; i++) {
    targetWordUnderlines += "_ "
}

targetWordParagraph.innerHTML = targetWordUnderlines


/** Make the letter buttons **/

const ALPHABET = [
    'A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M',
    'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z'
]

// <button onclick="handleGuess('A')">A</button>

"letter-buttons-box"
// Find the div
const buttonsBox = document.getElementById("letter-buttons-box")

//for(let letter of ALPHABET) {
//while(i < ALPHABET.length) {
//for(let i = 0; i < ALPHABET.length; i++) {
//forEach(letter => {})

for(let i = 0; i < ALPHABET.length; i++) {
    // make a button with the letter in it
    const letterButton = document.createElement("button") // make a new little button soul

    // put the letter as the text of the button
    letterButton.innerHTML = ALPHABET[i]

    // hook up the listener
    letterButton.addEventListener("click", (event) => handleGuess( event, ALPHABET[i] ) )

    // if you need to pass a parameter to a function that you're setting with addEventListener
    // you wrap it in another function that calls the first function with the parameter

    // put that button in the buttonsBox
    // the way to give something an earth pass (aka move it from the Great Before to the page (earth))
    buttonsBox.appendChild(letterButton)

    // vaguely the innerHTML version of this would look like this:
    // buttonsBox.innerHTML += "<button class='my-button-class'>" + ALPHABET[i] + "</button>"
    // also hook up the event listener to that button which is a lil tricky
}

// You kind of have two options: using innerHTML or using document.createElement to get new elements in the page <button></button>



// In the past we did this:
// prompting them for a guess
// handling their guess

// But in professional code we do this:
// listen for a guess
// handle their guess

// a lil funky with the event, probably more complicated then you'll run into
function handleGuess(event, guessLetter) {
    guessedLetters.push(guessLetter)

    let targetWordUnderlines = ""
    for (let i = 0; i < targetWord.length; i++) {
        if (guessedLetters.includes(targetWord[i])) {
            // if the letter were checking is in the guessedLetters array
            targetWordUnderlines += targetWord[i] + " "
        } else {
            // if they haven't guessed it yet, put an underline
            targetWordUnderlines += "_ "
        }
    }

    targetWordParagraph.innerHTML = targetWordUnderlines

    // remove the button that they just clicked
    event.target.remove()
}