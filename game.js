class Game {
    constructor(clientSockets) {
        this.clientSockets = clientSockets;

        this.state = null;
    }

    start() {
        setInterval(() => {
            this.state = this.generateRandomGameState();

            for(let socketId in this.clientSockets) {
                let socket = this.clientSockets[socketId];

                socket.emit('gameState', { 
                    gameState: this.state
                });        
            }
        }, 200);  
    }

    generateRandomGameState() {
        // let board = {
        //     numRows: 13,
        //     numCols: 13,
        //     spaces: []
        // };

        // board.spaces = new Array(board.numRows);
        // for(let i = 0; i < board.numRows; i++) {
        //     board.spaces[i] = new Array(board.numCols);
        // }

        // for(let i = 0; i < board.numRows; i++) {
        //     for(let j = 0; j < board.numCols; j++) {        
        //         let r = this.getRandomInteger(1, 20);
        //         board.spaces[i][j] = r;
        //     }
        // }    

        // let gameState = {
        //     board
        // };
        // return gameState;
        let sampleBoardState = {
             board: {
                numRows: 13,
                numCols: 13,
                spaces: {
                    '[0,0]': { planet: null, units: [] },
                    '[0,1]': { planet: null, units: [] },
                    '[0,2]': { planet: null, units: [] },
                    '[0,3]': { planet: null, units: [] },
                    '[0,4]': { planet: null, units: [] },
                    '[0,5]': { planet: null, units: [] },
                    '[0,6]': { planet: null, units: [] },
                    '[0,7]': { planet: null, units: [] },
                    '[0,8]': { planet: null, units: [] },
                    '[0,9]': { planet: null, units: [] },
                    '[0,10]': { planet: null, units: [] },
                    '[0,11]': { planet: null, units: [] },
                    '[0,12]': { planet: null, units: [] },
                    '[1,0]': { planet: null, units: [] },
                    '[1,1]': { planet: null, units: [] },
                    '[1,2]': { planet: null, units: [] },
                    '[1,3]': { planet: null, units: [] },
                    '[1,4]': { planet: null, units: [] },
                    '[1,5]': { planet: null, units: [] },
                    '[1,6]': { planet: null, units: [] },
                    '[1,7]': { planet: null, units: [] },
                    '[1,8]': { planet: null, units: [] },
                    '[1,9]': { planet: null, units: [] },
                    '[1,10]': { planet: null, units: [] },
                    '[1,11]': { planet: null, units: [] },
                    '[1,12]': { planet: null, units: [] },
                    '[2,0]': { planet: null, units: [] },
                    '[2,1]': { planet: null, units: [] },
                    '[2,2]': { planet: null, units: [] },
                    '[2,3]': { planet: null, units: [] },
                    '[2,4]': { planet: null, units: [] },
                    '[2,5]': { planet: null, units: [] },
                    '[2,6]': { planet: null, units: [] },
                    '[2,7]': { planet: null, units: [] },
                    '[2,8]': { planet: null, units: [] },
                    '[2,9]': { planet: null, units: [] },
                    '[2,10]': { planet: null, units: [] },
                    '[2,11]': { planet: null, units: [] },
                    '[2,12]': { planet: null, units: [] },
                    '[3,0]': { planet: null, units: [] },
                    '[3,1]': { planet: null, units: [] },
                    '[3,2]': { planet: null, units: [] },
                    '[3,3]': { planet: null, units: [] },
                    '[3,4]': { planet: null, units: [] },
                    '[3,5]': { planet: null, units: [] },
                    '[3,6]': { planet: null, units: [] },
                    '[3,7]': { planet: null, units: [] },
                    '[3,8]': { planet: null, units: [] },
                    '[3,9]': { planet: null, units: [] },
                    '[3,10]': { planet: null, units: [] },
                    '[3,11]': { planet: null, units: [] },
                    '[3,12]': { planet: null, units: [] },
                    '[4,0]': { planet: null, units: [] },
                    '[4,1]': { planet: null, units: [] },
                    '[4,2]': { planet: null, units: [] },
                    '[4,3]': { planet: null, units: [] },
                    '[4,4]': { planet: null, units: [] },
                    '[4,5]': { planet: null, units: [] },
                    '[4,6]': { planet: null, units: [] },
                    '[4,7]': { planet: null, units: [] },
                    '[4,8]': { planet: null, units: [] },
                    '[4,9]': { planet: null, units: [] },
                    '[4,10]': { planet: null, units: [] },
                    '[4,11]': { planet: null, units: [] },
                    '[4,12]': { planet: null, units: [] },
                    '[5,0]': { planet: null, units: [] },
                    '[5,1]': { planet: null, units: [] },
                    '[5,2]': { planet: null, units: [] },
                    '[5,3]': { planet: null, units: [] },
                    '[5,4]': { planet: null, units: [] },
                    '[5,5]': { planet: null, units: [] },
                    '[5,6]': { planet: null, units: [] },
                    '[5,7]': { planet: null, units: [] },
                    '[5,8]': { planet: null, units: [] },
                    '[5,9]': { planet: null, units: [] },
                    '[5,10]': { planet: null, units: [] },
                    '[5,11]': { planet: null, units: [] },
                    '[5,12]': { planet: null, units: [] },
                    '[6,0]': { planet: null, units: [] },
                    '[6,1]': { planet: null, units: [] },
                    '[6,2]': { planet: null, units: [] },
                    '[6,3]': { planet: null, units: [] },
                    '[6,4]': { planet: null, units: [] },
                    '[6,5]': { planet: null, units: [] },
                    '[6,6]': { planet: null, units: [] },
                    '[6,7]': { planet: null, units: [] },
                    '[6,8]': { planet: null, units: [] },
                    '[6,9]': { planet: null, units: [] },
                    '[6,10]': { planet: null, units: [] },
                    '[6,11]': { planet: null, units: [] },
                    '[6,12]': { planet: null, units: [] },
                    '[7,0]': {
                    planet: '{"coord":[7,0],"colony":null}',
                    units: [
                        '{"num":0,"coords":[7,0],"playerIndex":0,"lastMoved":{"turn":-1,"round":-1,"playerIndex":0}}'
                    ]
                    },
                    '[7,1]': { planet: null, units: [] },
                    '[7,2]': { planet: null, units: [] },
                    '[7,3]': { planet: null, units: [] },
                    '[7,4]': { planet: null, units: [] },
                    '[7,5]': { planet: null, units: [] },
                    '[7,6]': { planet: null, units: [] },
                    '[7,7]': { planet: null, units: [] },
                    '[7,8]': { planet: null, units: [] },
                    '[7,9]': { planet: null, units: [] },
                    '[7,10]': { planet: null, units: [] },
                    '[7,11]': { planet: null, units: [] },
                    '[7,12]': {
                    planet: '{"coord":[7,12],"colony":null}',
                    units: [
                        '{"num":0,"coords":[7,12],"playerIndex":0,"lastMoved":{"turn":-1,"round":-1,"playerIndex":0}}'
                    ]
                    },
                    '[8,0]': { planet: null, units: [] },
                    '[8,1]': { planet: null, units: [] },
                    '[8,2]': { planet: null, units: [] },
                    '[8,3]': { planet: null, units: [] },
                    '[8,4]': { planet: null, units: [] },
                    '[8,5]': { planet: null, units: [] },
                    '[8,6]': { planet: null, units: [] },
                    '[8,7]': { planet: null, units: [] },
                    '[8,8]': { planet: null, units: [] },
                    '[8,9]': { planet: null, units: [] },
                    '[8,10]': { planet: null, units: [] },
                    '[8,11]': { planet: null, units: [] },
                    '[8,12]': { planet: null, units: [] },
                    '[9,0]': { planet: null, units: [] },
                    '[9,1]': { planet: null, units: [] },
                    '[9,2]': { planet: null, units: [] },
                    '[9,3]': { planet: null, units: [] },
                    '[9,4]': { planet: null, units: [] },
                    '[9,5]': { planet: null, units: [] },
                    '[9,6]': { planet: null, units: [] },
                    '[9,7]': { planet: null, units: [] },
                    '[9,8]': { planet: null, units: [] },
                    '[9,9]': { planet: null, units: [] },
                    '[9,10]': { planet: null, units: [] },
                    '[9,11]': { planet: null, units: [] },
                    '[9,12]': { planet: null, units: [] },
                    '[10,0]': { planet: null, units: [] },
                    '[10,1]': { planet: null, units: [] },
                    '[10,2]': { planet: null, units: [] },
                    '[10,3]': { planet: null, units: [] },
                    '[10,4]': { planet: null, units: [] },
                    '[10,5]': { planet: null, units: [] },
                    '[10,6]': { planet: null, units: [] },
                    '[10,7]': { planet: null, units: [] },
                    '[10,8]': { planet: null, units: [] },
                    '[10,9]': { planet: null, units: [] },
                    '[10,10]': { planet: null, units: [] },
                    '[10,11]': { planet: null, units: [] },
                    '[10,12]': { planet: null, units: [] },
                    '[11,0]': { planet: null, units: [] },
                    '[11,1]': { planet: null, units: [] },
                    '[11,2]': { planet: null, units: [] },
                    '[11,3]': { planet: null, units: [] },
                    '[11,4]': { planet: null, units: [] },
                    '[11,5]': { planet: null, units: [] },
                    '[11,6]': { planet: null, units: [] },
                    '[11,7]': { planet: null, units: [] },
                    '[11,8]': { planet: null, units: [] },
                    '[11,9]': { planet: null, units: [] },
                    '[11,10]': { planet: null, units: [] },
                    '[11,11]': { planet: null, units: [] },
                    '[11,12]': { planet: null, units: [] },
                    '[12,0]': { planet: null, units: [] },
                    '[12,1]': { planet: null, units: [] },
                    '[12,2]': { planet: null, units: [] },
                    '[12,3]': { planet: null, units: [] },
                    '[12,4]': { planet: null, units: [] },
                    '[12,5]': { planet: null, units: [] },
                    '[12,6]': { planet: null, units: [] },
                    '[12,7]': { planet: null, units: [] },
                    '[12,8]': { planet: null, units: [] },
                    '[12,9]': { planet: null, units: [] },
                    '[12,10]': { planet: null, units: [] },
                    '[12,11]': { planet: null, units: [] },
                    '[12,12]': { planet: null, units: [] }
                }
            }
        }
        return sampleBoardState
    }

    getRandomInteger(min, max) {
        min = Math.ceil(min);
        max = Math.floor(max);

        return Math.floor(Math.random() * (max - min + 1) + min);
    }
}

module.exports = Game;

