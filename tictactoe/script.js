
const Player = (human,mark,winner) => {
    const getMark = () => mark;
}

const gameBoard = (() => {
    let board  = new Array(9);
    const getSquareStatus = (index) => {board[index];}
    const setSquareStatus = (index, mark) => {board[index] = mark;}
    const checkForWinner = () => {}    
    
    return {board, getSquareStatus, setSquareStatus, checkForWinner};
  })();

  const displayController = (() => {
    
    const render = () => {
        console.log(gameBoard.board);
    };
    return {render};
  })(); 

  humanPlayer = Player(true,"X",false);
  compPlayer = Player(false,"O",false);
