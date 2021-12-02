const socket = io();

socket.on('gameState', (data) => {
    updateUI(data.gameState);
});

function updateUI(gameState) {
    let board = gameState.board;
    updateBoard(board);            
}

function updateBoard(board) {
    // Delete board table if it already exists because we're just going to recreate it
    let boardTable = document.getElementById('board');
    if (boardTable) {
        document.body.removeChild(boardTable);
    }

    boardTable = document.createElement('table');
    boardTable.id = 'board';
    document.body.appendChild(boardTable);

    for(let i = 0; i < board.numRows; i++) {
        let row = boardTable.insertRow();

        for(let j = 0; j < board.numCols; j++) {
            let spaceValue = board.spaces[JSON.stringify([i,j])];
            let cell = row.insertCell();
            cell.className = 'boardSpace';

            if (spaceValue['planet'] != null) {
                cell.style.backgroundColor = 'red';
                if (spaceValue['units'].length > 0)  {
                    cell.innerHTML = "has some units";
                }
            } else if (spaceValue['units'].length > 0)  {
                cell.style.backgroundColor = 'green';
            } else {
                cell.style.backgroundColor = 'black';
            }
        }
    }
}