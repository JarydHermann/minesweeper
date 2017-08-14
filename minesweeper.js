//Player Board// 
const generatePlayerBoard = (numberOfRows, numberOfColumns) => {
    let board = []
    for( i=0 ; i < numberOfRows ; i++){
        let row = [];
        for( j=0 ; j < numberOfColumns ; j++){
            row.push(' ')
        };
        board.push(row);
    };
    return board; 
};

//Bomb Board// 
const generateBombBoard = (numberOfRows, numberOfColumns, numberOfBombs) => {
 let board = []
    for( i=0 ; i < numberOfRows ; i++){
        let row = [];
        for( j=0 ; j < numberOfColumns ; j++){
            row.push(null)
        };
        board.push(row);
    };
    return board;

    //placing bombs on the board/
    let numberOfBombsPlaced = 0;
    while(numberOfBombsPlaced<numberOfBombs){
        let randomRowIndex = Math.floor(Math.random()*numberOfRows);
        let randomColumnIndex = Math.floor(Math.random()*numberOfColumns);
        if(board[randomRowIndex][randomColumnIndex] !== 'B'){
        board[randomRowIndex][randomColumnIndex] = 'B';
        numberOfBombsPlaced ++ ; 
        };
    };
};

const getNumberOfNeighborBombs = (bombBoard, rowIndex, columnIndex) => {
 const neighborOffsets = [
 [-1,-1],
 [-1, 0],
 [-1, 1],
 [0,-1],
 [0,1],
 [1,-1],
 [1,0],
 [1,1]
 ]; 

 const numberOfRows = bombBoard.length; 
 const numberOfColumns = bombBoard[0].length;
 let numberOfBombs =0;

 neighbordOffsets.forEach(offset =>{
    const neighborRowIndex = rowIndex + offset[0];
    const neighborColumnIndex = columnIndex + offset[1]; 
    //checking if row and column indicies are valid//
    if(neighborRowIndex >= 0 && neighborRowIndex < numberOfRows && neighborColumnIndex >= 0 && neighborColumnIndex < numberOfColumns){
        if(bombBoard[neighborRowIndex][neighborColumnIndex] === 'B'){
        numberOfBombs ++; 
        };
    };
        return numberOfBombs;
 });

 }

 const flipTile = (playerBoard, bombBoard, rowIndex, columnIndex) =>{
 //checking if tile has been flipped
    if(playerBoard[rowIndex][columnIndex] !== ''){
    console.log('This tile has been flipped already');
    }
    else if(playerBoard[rowIndex][columnIndex] === 'B'){
    playerBoard[rowIndex][columnIndex] === "B"
    }
    else{
    playerBoard[rowIndex][columnIndex] = getNumberOfNeighborBombs(bombBoard, rowIndex, columnIndex);
    }
 }



const printBoard = (board) => {
    console.log(board.map(row =>  row.join(' | ') ).join('\n'));
};

let playerBoard = generatePlayerBoard(3,4);
let bombBoard = generateBombBoard(3,4,5);

console.log('Player Board: ');
printBoard(playerBoard);

console.log('Bomb Board: ');
printBoard(bombBoard); 

flipTile(playerBoard, bombBoard, 0, 0)
console.log("Updated Player Board")
printBoard(playerBoard)