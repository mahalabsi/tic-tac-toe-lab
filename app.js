const squareEls = document.querySelectorAll('.sqr')
const messageEls = document.querySelector('#message')
const resetBtnEl = document.querySelector('#reset')
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

let board = Array(9).fill('')
let currentPlayer = turnX
let computerChoice
let winner = false
let tie = false

const init = () => {
  board.fill('')
  currentPlayer = turnX
  winner = false
  tie = false
  render()
}

const render = () => {
  updateBoard()
  updateMessage()
}

const updateBoard = () => {
  board.forEach((cell, index) => {
    squareEls[index].textContent = cell
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

init()

const handleClick = (event) => {
  const index = Array.from(squareEls).indexOf(event.target)
  if (board[index] === '' && !winner && !tie) {
    board[index] = currentPlayer
    currentPlayer = currentPlayer === turnX ? turnO : turnX

    render()
  }
}

squareEls.forEach((squareEl) => {
  squareEl.addEventListener('click', handleClick)
})

const placePiece = (index) => {
  if (board[index] === '' && !winner && !tie) {
    board[index] = currentPlayer
    console.log(board) // For testing purposes
    return true // Piece placed successfully
  }
  return false // Piece placement failed
}

const checkForWinner = () => {
  for (let combo of winningCombos) {
    const [a, b, c] = combo
    if (board[a] !== '' && board[a] === board[b] && board[a] === board[c]) {
      winner = true
      return
    }
  }
}

const checkForTie = () => {
  if (winner) {
    return // If there is a winner, exit the function
  }

  if (!board.includes('')) {
    tie = true
    console.log(tie) // For testing purposes
  }
}

const switchPlayerTurn = () => {
  if (winner) {
    return // If there is a winner, exit the function
  }

  turn = turn === 'X' ? 'O' : 'X'
  console.log(turn) // For testing purposes
}

resetBtnEl.addEventListener('click', init)

/*----------------------------- Event Listeners -----------------------------*/

//4) The state of the game should be rendered to the user.

//5) Define the required constants.

//6) Handle a player clicking a square with a `handleClick` function.

//7) Create Reset functionality.
