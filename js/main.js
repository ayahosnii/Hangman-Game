// Letters
const letters = "abcdefghijklmnopqrstuvwxyz";

// Get Array From Letters
let lettersArray = Array.from(letters);

// Select Letters Container
let lettersContainer = document.querySelector(".letters");

// Generate Letters
lettersArray.forEach(letter => {

  // Create Span
  let span = document.createElement("span");

  // Create Letter Text Node
  let theLetter = document.createTextNode(letter);

  // Append The Letter To Span
  span.appendChild(theLetter);

  // Add Class On Span
  span.className = 'letter-box';

  // Append Span To The Letters Container
  lettersContainer.appendChild(span);

});

const words = {
  programming: ["php", "javascript", "go", "scala", "fortran", "r", "mysql", "python"],
  movies: ["Prestige", "Inception", "Parasite", "Interstellar", "Whiplash", "Memento", "Coco", "Up"],
  people: ["Albert Einstein", "Hitchcock", "Alexander", "Cleopatra", "Mahatma Ghandi"],
  countries: ["Syria", "Palestine", "Yemen", "Egypt", "Bahrain", "Qatar"]
}

//Get Random Property

let allKeys = Object.keys(words)
/**1- Get Random Key Number like [0,1,2,3]
 Depend On Key
 **/
let randomPropNumber = Math.floor(Math.random() * allKeys.length) //=> the number of the category
console.log(randomPropNumber)
  /**1- Get Random Key Name like  [programming, movies, people, countries]
   Depend On Key
   **/

let randomPropName = allKeys[randomPropNumber] //=> the name of the category
console.log(randomPropName)

//2- Get The Array Of The Key Name Of The Array
let randomPropValue = words[randomPropName] //=> the array of category


//3- Get Random Value Of That Random Array [1,2,3..etc]
let randomValueNumber = Math.floor(Math.random() * randomPropValue.length)


//4- Get The Value Of That Key
let randomValueValue = randomPropValue[randomValueNumber]

//Set Category Info
document.querySelector('.game-info .category span').innerHTML = randomPropName

//Select Letters Guess Element
let lettersGuessContainer = document.querySelector(".letters-guess")

//Convert Chosen Word To Array
let lettersAndSpace = Array.from(randomValueValue)

lettersAndSpace.forEach(letter => {
  //Create Empty Span
  let emptySpan = document.createElement("span")

  //If Letter Empty Span
  if (letter === ' ') {

    //Add Class To The Span
    emptySpan.className = 'with-space';

  }
  //Append Span To The Letters Guess
  lettersGuessContainer.appendChild(emptySpan)
});
let guessSpans = document.querySelectorAll(".letters-guess span");
let wrongAttempts = 0;

let theDraw = document.querySelector(".hangman-draw")

//Set The Chose



document.addEventListener("click",  (e)=>{
  let theStatus = false;


  if (e.target.className === 'letter-box') {
    e.target.classList.add('clicked')

    //Get Clicked Letter
    let theClickedLetter = e.target.innerHTML.toLowerCase()
    lettersAndSpace.forEach((wordLetter, Wordindex) => {
      if (theClickedLetter == wordLetter) {
        theStatus = true;
        document.getElementById('clicked').play();
        //Loop All Guess span
        guessSpans.forEach((span, spanIndex) => {

          if (Wordindex === spanIndex) {

            span.innerHTML = theClickedLetter;


          }
        });

      }

    })

    console.log(theStatus)
    if (theStatus !== true) {
      document.getElementById('error').play();
      wrongAttempts++;

      //Add Class Wrong On The Draw Element
      theDraw.classList.add(`wrong-${wrongAttempts}`)
    }
  }
})
