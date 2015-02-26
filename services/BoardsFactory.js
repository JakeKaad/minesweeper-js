mineSweeper.factory('BoardsFactory', function BoardsFactory(UtilitiesFactory, CellsFactory) {
  var factory = {};
  factory.board = [];
  factory.bombIds = [];
  factory.cells = [];

  factory.createBoard = function(rows, columns) {

    factory.rows = rows;
    factory.columns = columns;
    factory.cellCount = rows * columns;
    var id = 1;
    for (var i = 0; i < rows; i++) {
      var row = [];
      for (var y = 0; y < columns; y++ ){
        var cell = CellsFactory.createCell(id);
        id++
        row.push(cell);
        factory.cells.push(cell);
      }
      factory.board.push(row);
    }
    assignBomb()
    initializeCells();
  };


  assignBomb = function() {
    createBombArray();
    factory.board.forEach(function(row) {
      row.forEach(function(cell){
        if (factory.bombIds.indexOf(cell.id) !== -1) {
          cell.bomb = true;
        }
      });
    });
  };

  factory.clickCell = function(cellId) {
    var cell = UtilitiesFactory.findById(factory.cells, cellId);
    displayCell(cell);
    if (cell.bomb) {
      return factory.finishGame();
    }
    if (cell.neighborBombs === 0) {
      console.log("here")
      cell.neighbors.forEach(function(neighbor) {
        clickCell(neighbor);
      });
    }
  };

  factory.finishGame = function() {
    factory.cells.forEach(function(cell){
      if (cell.bomb === true) {
        displayCell(cell);
      }
      factory.gameOver = true;
    });
  };

  var displayCell = function(cell) {
    cell.revealed = true;
  }

  var createBombArray = function() {
    var numberOfBombs = Math.floor(factory.cellCount / 10);
    factory.bombIds = [];
    while (factory.bombIds.length < numberOfBombs) {
      var id = Math.floor(Math.random() * (factory.cellCount - 1)) + 1;
      if (factory.bombIds.indexOf(id) === -1 ) {
        factory.bombIds.push(id);
      }
    }
  };

  var initializeCells = function() {
    var row = 0;
    factory.board.forEach(function(rowArray) {
      var col = 0;
      rowArray.forEach(function(cell) {
        cell.neighbors = [];
        if (aboveExists(row)) {
          cell.neighbors.push(factory.board[row-1][col-1]);
          cell.neighbors.push(factory.board[row-1][col]);
          cell.neighbors.push(factory.board[row-1][col+1]);
        }
        cell.neighbors.push(factory.board[row][col-1]);
        cell.neighbors.push(factory.board[row][col+1]);
        if (belowExists(row)) {
          cell.neighbors.push(factory.board[row+1][col-1]);
          cell.neighbors.push(factory.board[row+1][col]);
          cell.neighbors.push(factory.board[row+1][col+1]);
        }
        for (var i = 0; i < cell.neighbors.length; i++) {
          if (cell.neighbors[i] === undefined) {
            cell.neighbors.splice(i, 1);
          }
        }
        cell.setNeighborBomb();
        cell.setDisplay();
        col++
      });
      row++
    });
  };

  var aboveExists = function(row) {
    return factory.board[row - 1] !== undefined;
  }

  var belowExists = function(row) {
    return factory.board[row + 1] !== undefined;
  }

  return factory;
});
