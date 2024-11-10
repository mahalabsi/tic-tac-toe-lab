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
let currentPlayer = 'turnX'
let winner = false
let tie = false

messageEls.style.color = 'blue'

const init = () => {
  board.fill('')
  currentPlayer = turnX
  winner = false
  tie = false
  render()
}

const updateBoard = () => {
  board.forEach((cell, index) => {
    squareEls[index].textContent = cell
  })
}

// const updateMessage = () => {
//   if (!winner && !tie) {
//     messageEls.textContent = `${currentPlayer}'s turn`
//   } else if (tie) {
//     messageEls.textContent = "It's a tie!"
//   } else if (winner) {
//     messageEls.textContent = `${currentPlayer} wins!`
//   } else {
//     return 'try again'
//   }
// }

const updateMessage = () => {
  if (winner === false && tie === false) {
    messageEls.textContent = `${currentPlayer}'s turn`
  } else if (winner === false && tie === true) {
    messageEls.textContent = "It's a tie!"
  } else {
    messageEls.textContent = `${currentPlayer} wins!`
  }
}

const render = () => {
  updateBoard()
  updateMessage()
}
init()

const handleClick = (event) => {
  // const index = Array.from(squareEls).indexOf(event.target)
  // if (board[index] === '' && !winner && !tie) {
  //   board[index] = currentPlayer
  //   currentPlayer = currentPlayer === turnX ? turnO : turnX

  //   render()
  // }
  const squareIndex = event.target.id
  if (board[squareIndex] || winner) return
  placePiece(squareIndex)
  checkForWinner()
  checkForTie()
  switchPlayerTurn()
  render()
}

squareEls.forEach((squareEl) => {
  squareEl.addEventListener('click', handleClick)
})

const placePiece = (index) => {
  // if (board[index] === '' && !winner && !tie) {
  //   board[index] = currentPlayer
  //   console.log(board) // For testing purposes
  //   return true // Piece placed successfully
  // }
  // return false // Piece placement failed
  board[index] = currentPlayer
}

const checkForWinner = () => {
  winningCombos.forEach((combo) => {
    const [a, b, c] = combo
    if (board[a] && board[a] === board[b] && board[a] === board[c]) {
      //if (board[a] !== '' && board[a] === board[b] && board[b] === board[c])
      winner = true
      return
    }
  })
}

const checkForTie = () => {
  if (winner) {
    return // If there is a winner, exit the function
  }

  if (!board.includes('') && !winner) {
    tie = true
    console.log(tie) // For testing purposes
  }
}

const switchPlayerTurn = () => {
  if (winner === true) {
    return // If there is a winner, exit the function
  }

  currentPlayer = currentPlayer === 'X' ? 'O' : 'X'
  // console.log(currentPlayer) // For testing purposes
}

resetBtnEl.addEventListener('click', init)
