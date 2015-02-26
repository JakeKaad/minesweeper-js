mineSweeper.factory('BoardsFactory', function BoardsFactory(CellsFactory, UtilitiesFactory) {
  var factory = {};
  factory.board = [];
  factory.bombIds = [];
  factory.cells = [];

  factory.createBoard = function(rows, columns) {
    factory.rows = rows;
    factory.columns = columns;
    factory.cellCount = rows * columns;
    var id = 1;
    for (var i = 0; i < rows.length; i++) {
      var row = [];
      for (var i = 0; i < columns.length; i++ ){
        var cell = CellsFactory.createCell(id));
        id++
        row.push(cell);
        factory.cells.push(cell);
      }
      factory.board.push(row);
    }

  };


  factory.assignBomb = function() {
    factory.board.forEach(function(row) {
      factory.board.forEach(function(cell){
        if (factory.bombIds.indexOf(cell.id)) {
          cell.bomb = true;
        }
      });
    });
  };

  factory.clickCell = function(cellId) {
    var cell = UtilitiesFactory.findById(factory.cells, cellId);
    // Stopped Here
    checkForBomb(cell);
    displayCell(cell);
    if (cell.neighborBombs === 0)
      cell.neighbors.forEach(function(neighbor)) {
        displayCell(neighbor)
      }
    }

  }

  var displayCell = function(cell) {
    cell.revealed = true;
  }

  var bombArray = function() {
    var numberOfBombs = Math.floor(factory.cellCount / 10);
    factory.bombIds = [];
    while (factory.bombIds.length < numberOfBombs) {
      var id = Math.floor(Math.random() * (factory.cellCount - 1)) + 1;
      if (!factory.bombIds.indexOf(id)) {
        factory.bombIds.push(id);
      }
    }
  };



});
