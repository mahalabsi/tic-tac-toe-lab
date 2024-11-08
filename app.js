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
const init = () => {}
console.log(init)
// c. Set the board variable to an array containing nine empty strings ('') representing empty squares.
const board = ['', '', '', '', '', '', '', '', '']
// d. Set the turn to X - this will represent player X.
let turn = 'X'
// 💡 Player O will be represented by O.

// e. Set the winner to false.
let winner = false
// 💡 A false value in winner means that there is no winner yet. A value of true in winner will mean that a player has won.

// Once winner is set to true, we can determine which player won by whose turn it was when the winning move was played.

// f. Set tie to false.
let tie = false
// 💡 A true value in tie will mean that the board array contains no more empty strings ('') and will be used to render a tie message if winner is still false by the time all squares are played.

// g. Call a function named render() at the end of the init() function.

/*----------------------------- Event Listeners -----------------------------*/

//4) The state of the game should be rendered to the user.

//5) Define the required constants.

//6) Handle a player clicking a square with a `handleClick` function.

//7) Create Reset functionality.
