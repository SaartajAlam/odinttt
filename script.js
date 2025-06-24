const turnContent = document.getElementById('turn')
const container = document.querySelector(".container")
const button = document.querySelector("button")

player1 = "X"
player2 = "O"
p1Turn = true

let board = [
    ["", "", ""],
    ["", "", ""],
    ["", "", ""]
]

let moves = 0


function play(){
    for (let i = 0; i < 3; i++){
        for (let j = 0; j < 3; j++){
            board[i][j] = ""
        }
    }
    const p1 = document.querySelector("#player1").value;
    const p2 = document.querySelector("#player2").value;
    container.style.visibility = "visible"
    const squares = document.querySelectorAll(".square");
    turnContent.innerText = p1Turn ? `${p1}'s turn` : `${p2}'s turn`
    squares.forEach((square) => {
        square.addEventListener('click', () => {
            const num = Number(square.innerText);
            if (board[Math.floor(num / 3)][num % 3] === ""){
                board[Math.floor(num / 3)][num % 3] = p1Turn ? player1 : player2
                square.innerText = board[Math.floor(num / 3)][num % 3]
                square.style.color = "black"
                p1Turn = !p1Turn;
                moves++;
                console.table(board)
            }
            if (checkForWinner()){
                squares.forEach((square) => (square.classList.add('disabled')));
            }
            else if (moves === 9) {
                turnContent.innerText = "It's a draw!"
            }
        })
    })
   

}


function checkForWinner(){
    return ((board[0][0] !== "" && board[0][0] === board[0][1] && board[0][1] === board[0][2]) ||
        (board[1][0] !== "" && board[1][0] === board[1][1] && board[1][1] === board[1][2]) ||
        (board[2][0] !== "" && board[2][0] === board[2][1] && board[2][1] === board[2][2]) ||
        (board[0][0] !== "" && board[0][0] === board[1][0] && board[1][0] === board[2][0]) ||
        (board[0][1] !== "" && board[0][1] === board[1][1] && board[1][1] === board[2][1]) ||
        (board[0][2] !== "" && board[0][2] === board[1][2] && board[1][2] === board[2][2]) ||
        (board[0][0] !== "" && board[0][0] === board[1][1] && board[1][1] === board[2][2]) ||
        (board[0][2] !== "" && board[0][2] === board[1][1] && board[1][1] === board[2][0])
    )
}



