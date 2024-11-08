/*-------------------------------- Constants --------------------------------*/
const choices = ['X', 'O']
/*---------------------------- Variables (state) ----------------------------*/
//1) Define the required variables used to track the state of the game.
let board
let turn
let winner
let tie

/*------------------------ Cached Element References ------------------------*/
//2) Store cached element references.

// a. In a constant called squareEls, store the nine elements representing the squares on the page.

const squareEls = document.querySelector('.board')

// b. In a constant called messageEl, store the element that displays the game's status on the page.

const messageEl = document.querySelector('#message')

// console.log(squareEls)
// console.log(messageEl)

/*-------------------------------- Functions --------------------------------*/
//3) Upon loading, the game state should be initialized, and a function should
//   be called to render this game state.
// a. Create a function called init.

// b. Call the init function when the app loads.

/*----------------------------- Event Listeners -----------------------------*/

//4) The state of the game should be rendered to the user.

//5) Define the required constants.

//6) Handle a player clicking a square with a `handleClick` function.

//7) Create Reset functionality.
