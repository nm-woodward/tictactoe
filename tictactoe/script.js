var cells = Array.from(document.getElementsByClassName("cell"));

const Player = (human,mark,winner) => {
    const getMark = () => mark;
    const getIdentity = () => human;
    const makeMove = () => {
    
    cells.forEach(cell => {
        cell.addEventListener('click', function handleClick() {
          gameBoard.setSquareStatus(cell.getAttribute('data-index'),mark);
          console.log(cell.getAttribute('data-index'));

          //Remove all click listeners
          //cells.forEach(cell => {console.log('a')});

        });
    });


    };
  return {getMark,getIdentity,makeMove};

}

const gameBoard = (() => {
    let board  = new Array(9);
    let winner = '';
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
        console.log('And X is the winner!');
      }
      if(gameBoard.winner == 'O'){
        console.log('And O is the winner!');
      }

    }    
    
    return {board,winner, getSquareStatus, setSquareStatus, checkForWinner};
  })();

  const displayController = (() => {
    
    const render = () => {
        console.log(gameBoard.board);

        
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
    return {render,endGame};
  })(); 

  humanPlayer = Player(true,"X",false);
  compPlayer = Player(false,"O",false);


  // const elements = document.querySelector("li[data-id='2']") = board.getSquareStatus(2);