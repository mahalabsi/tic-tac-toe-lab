const squareEls = document.querySelectorAll('.sqr')
const messageEls = document.querySelector('#message')

console.dir(squareEls)
console.dir(messageEls)

const turnX = 'X'
const turnO = 'O'
const winningCombos = [
  [0, 1, 2],
  [3, 4, 5],
  [6, 7, 8],
  [0, 3, 6],
  [1, 4, 7],
  [2, 5, 8],
  [0, 4, 8],
  [2, 4, 6]
]

//1) Define the required variables used to track the state of the game.
let board = Array(9).fill('')
let currentPlayer = turnX
let winner = false
let tie = false

/*-------------------------------- Functions --------------------------------*/
const init = () => {
  board.fill('')
  currentPlayer = turnX
  winner = false
  tie = false
}

const render = () => {
  updateBoard()
  updateMessage()
}

const updateBoard = () => {
  board.forEach((cell, index) => {
    squareEls[index].textContent = cell
    // Add more styling here, e.g., using CSS classes
  })
}

const updateMessage = () => {
  if (!winner && !tie) {
    messageEls.textContent = `${currentPlayer}'s turn`
  }
  if (tie) {
    messageEls.textContent = "It's a tie!"
  } else {
    messageEls.textContent = `${currentPlayer} wins!`
  }
}
render()
init()

// console.dir(updateBoard)
// console.dir(updateMessage)
// const updateBoard = (board) => {
//   squareEls.forEach((squareEl, index) => {
//     squareEl.textContent = board[index]
//     squareEl.classList.remove('X', 'O')
//     if (board[index] !== '') {
//       squareEl.classList.add(board[index])
//     }
//   })
//   console.log(updateBoard)
// }

//

// const updateMessage = () => {
//   messageEl.textContent =
//     !winner && !tie ? `${turn}'s turn` : tie ? "It's a tie!" : `${winner} wins!`
//   console.log(updateMessage)
// }
// const init = () => {
//   const render = () => {
//     updateBoard()
//     updateMessage()
//   }
//   console.log(init)
// }

// f. Invoke both the updateBoard and the updateMessage functions inside your render function.

// const render = () => {
//   updateBoard()
//   updateMessage()
// }

/*----------------------------- Event Listeners -----------------------------*/

//4) The state of the game should be rendered to the user.

//5) Define the required constants.

//6) Handle a player clicking a square with a `handleClick` function.

//7) Create Reset functionality.
