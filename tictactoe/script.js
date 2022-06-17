var cells = document.querySelectorAll(".cell");
var messageArea = document.querySelector("#MessageArea");

const Player = (human,mark,winner) => {
    const getMark = () => mark;
    const getIdentity = () => human;
    const makeMove = () => {
      if (human) {
        moveAllowed = 1;
      }
      else {
        // Find all empty index values in the board
        const emptyIndexes = [];
        for(let i=0;i<gameBoard.getBoard().length; i++) {
            if (gameBoard.board[i] == null) 
            {emptyIndexes.push(i);}
        }
       // Choose a random index for computer move
       randChoice = emptyIndexes[Math.floor(Math.random()*emptyIndexes.length)];
       gameBoard.setSquareStatus(randChoice,mark);
       messageArea.innerHTML = "Back to you...";
      }
      
    
    };
    // Initialize trigger to allow player click/move
    let moveAllowed = 0;

    // Function to handle player click/move action
    const handleClick = (cell) => {
      if(moveAllowed == 1) {
        gameBoard.setSquareStatus(cell.getAttribute('data-index'),mark);
        console.log(cell.getAttribute('data-index'));
        displayController.playRound();
        
      }
    }
    
    //Initialize event listener for player click/move
    cells.forEach(cell => {
        cell.addEventListener('click', function(){
            handleClick(cell);          
          });

    });
   


  return {getMark,getIdentity,makeMove,winner};

}

const gameBoard = (() => {
    let board  = new Array(9);
    let winner = '';
    const getBoard = () => board;
    const getSquareStatus = (index) => {board[index];}
    const setSquareStatus = (index, mark) => {board[index] = mark;}
    const checkForWinner = () => {
      possibleWinningCombos = [
        gameBoard.board.slice(0,3),
        gameBoard.board.slice(3,6),
        gameBoard.board.slice(6,9),
        [0,3,6].map(x=>gameBoard.board[x]),
        [1,4,7].map(x=>gameBoard.board[x]),
        [2,5,8].map(x=>gameBoard.board[x]),
        [0,4,8].map(x=>gameBoard.board[x]),
        [2,4,6].map(x=>gameBoard.board[x])
      ];

      //Loop through possible permutations and check for XXX or OOO
      possibleWinningCombos.forEach(arr = (arr) => {
        if(arr.toString() == 'X,X,X') {gameBoard.winner = 'X'}
        if(arr.toString() == 'O,O,O') {gameBoard.winner = 'O'}
      });

      if(gameBoard.winner == 'X'){
        messageArea.innerHTML = 'And X is the winner!';
      }
      if(gameBoard.winner == 'O'){
        messageArea.innerHTML ='And O is the winner!';
      }

    }    
    
    return {getBoard,board,winner, getSquareStatus, setSquareStatus, checkForWinner};
  })();

  const displayController = (() => {
    
    const startGame = () => {
      // Create players
      humanPlayer = Player(true,"X",false);
      compPlayer = Player(false,"O",false);

      messageArea.innerHTML = "Make the first move...";
      humanPlayer.makeMove();

    }
    const playRound = () => {

      render();
      gameBoard.checkForWinner();
      compPlayer.makeMove();
      render();
      gameBoard.checkForWinner();
      
    }

    const render = () => {
      // Reset HTML to match contents of board object
          for(var i = 0; i < cells.length; i++)
          {
            console.log(cells[i]);
            if (gameBoard.board[i]){
              cells[i].innerHTML = gameBoard.board[i];
            }
            
          }
    };

    const endGame = () => {

    }
    return {startGame,playRound,render,endGame};
  })(); 


// Kick off the game
displayController.startGame();

  // const elements = document.querySelector("li[data-id='2']") = board.getSquareStatus(2);