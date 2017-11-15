(function () {

    window.onload = functionLoad;

    var turn = 'X';
    var score = {
        'X': 0,
        'O': 0
    };
    var board ;

    var matrixSize = 3;

    function functionLoad() {

        addEvent(document.getElementById("tictactoe"), "click", nextMove);
        document.getElementById("reset").addEventListener("click", startNewGame);

        startNewGame();
    }

    function addEvent(element, eventName, callback) {

        if (element.addEventListener) {
            element.addEventListener(eventName, callback, false);
        } else if (element.attachEvent) {
            element.attachEvent("on" + eventName, callback);
        }

    };

    function isX() {
        if (turn === 'X'){
          return true;
        } else {
            return false;
        }
    };


    function nextMove(e) {
        if (e.target && e.target.nodeName == "TD") {
                var doneMove = makeMove(e.target.id);
                if (doneMove){
                    moveRandom = nextMoveRandom();
                    makeMove(moveRandom);
                }
        } else {
            return false;
        }
    };

    function nextMoveRandom() {
        var rand = Math.random();

        if      (rand < 0.1 && board[0][0] === ' ' )    return "cell1";
        else if (rand < 0.2 && board[0][1] === ' ' )    return "cell2";
        else if (rand < 0.3 && board[0][2] === ' ' )    return "cell3";
        else if (rand < 0.4 && board[1][0] === ' ' )    return "cell4";
        else if (rand < 0.5 && board[1][1] === ' ' )    return "cell5";
        else if (rand < 0.6 && board[1][2] === ' ' )    return "cell6";
        else if (rand < 0.7 && board[2][0] === ' ' )    return "cell7";
        else if (rand < 0.8 && board[2][1] === ' ' )    return "cell8";
        else if (rand < 1   && board[2][2] === ' ' )    return "cell9";
    }

    function makeMove(id) {
        var targetElement = document.getElementById(id);
        var prevTurn;
        if ((targetElement.className).indexOf("disabled") == -1) {
            targetElement.innerHTML = turn;
            targetElement.classList.add('disabled');
            targetElement.classList.add('turn' + turn);
            score[turn] += 1;
            prevTurn = isX();
            var cell = id;


            if (cell === 'cell1' && prevTurn) board[0][0] = true;
            else if (cell === 'cell2' && prevTurn) board[0][1] = true;
            else if (cell === 'cell3' && prevTurn) board[0][2] = true;
            else if (cell === 'cell4' && prevTurn) board[1][0] = true;
            else if (cell === 'cell5' && prevTurn) board[1][1] = true;
            else if (cell === 'cell6' && prevTurn) board[1][2] = true;
            else if (cell === 'cell7' && prevTurn) board[2][0] = true;
            else if (cell === 'cell8' && prevTurn) board[2][1] = true;
            else if (cell === 'cell9' && prevTurn) board[2][2] = true;

            else if (cell === 'cell1' && !prevTurn) board[0][0] = false;
            else if (cell === 'cell2' && !prevTurn) board[0][1] = false;
            else if (cell === 'cell3' && !prevTurn) board[0][2] = false;
            else if (cell === 'cell4' && !prevTurn) board[1][0] = false;
            else if (cell === 'cell5' && !prevTurn) board[1][1] = false;
            else if (cell === 'cell6' && !prevTurn) board[1][2] = false;
            else if (cell === 'cell7' && !prevTurn) board[2][0] = false;
            else if (cell === 'cell8' && !prevTurn) board[2][1] = false;
            else if (cell === 'cell9' && !prevTurn) board[2][2] = false;

            findWinner(board, prevTurn, turn);
            turn = turn === "X" ? "O" : "X";
            return true;
        };
    };


    function startNewGame() {
        var gameUL = document.getElementById("tictactoe");
        if (gameUL.innerHTML !== '') {
            gameUL.innerHTML = null;
        }
        var li, k = 0,classLists;

        board = [
            [' ', ' ', ' '],
            [' ', ' ', ' '],
            [' ', ' ', ' ']
        ];

        for (i = 1; i <= matrixSize; i += 1) {
            var tr = document.createElement('tr');
            for (j = 1; j <= matrixSize; j += 1) {
                k += 1;
                li = document.createElement('td');
                li.setAttribute("id", 'cell' + k);

                classLists = 'cell-box';

                li.className = classLists;
                tr.appendChild(li);

            }
            gameUL.appendChild(tr);
        }
    };

    function findWinner(board, prevTurn, turn) {
        if (score[turn] >= matrixSize) {
            if (board[0][0] === prevTurn && board[0][1] === prevTurn && board[0][2] === prevTurn){
                alert(turn + ' win!');
                startNewGame();
            }
            else if (board[1][0] === prevTurn && board[1][1] === prevTurn && board[1][2] === prevTurn){
                alert(turn + ' win!');
                startNewGame();
            }
            else if (board[2][0] === prevTurn && board[2][1] === prevTurn && board[2][2] === prevTurn){
                alert(turn + ' win!');
                startNewGame();
            }
            else if (board[0][0] === prevTurn && board[1][0] === prevTurn && board[2][0] === prevTurn){
                alert(turn + ' win!');
                startNewGame();
            }
            else if (board[0][1] === prevTurn && board[1][1] === prevTurn && board[2][1] === prevTurn){
                alert(turn + ' win!');
                startNewGame();
            }
            else if (board[0][2] === prevTurn && board[1][2] === prevTurn && board[2][2] === prevTurn){
                alert(turn + ' win!');
                startNewGame();
            }
            else if (board[0][0] === prevTurn && board[1][1] === prevTurn && board[2][2] === prevTurn){
                alert(turn + ' win!');
                startNewGame();
            }
            else if (board[0][2] === prevTurn && board[1][1] === prevTurn && board[2][0] === prevTurn){
                alert(turn + ' win!');
                startNewGame();
            }

        } else if ((score['X'] + score['O']) === (matrixSize * matrixSize)) {
            alert('Draw!');
            startNewGame();
        } else {
            return false;
        }
    };
}());


