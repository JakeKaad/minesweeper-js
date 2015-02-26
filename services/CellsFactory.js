mineSweeper.factory('CellsFactory', function CellsFactory(BoardsFactory) {
  var factory {};
  factory.Cell = {bomb: false,
                  revealed: false};

  factory.Cell.createCell = function(id) {
    var cell = Object.create(factory.Cell);
    cell.id = id;
    return cell;
  };


  factory.initializeCells = function() {
    BoardsFactory.rows.forEach(function(row) {
      BoardsFactory.columns.forEach(function(col) {
        var cell = BoardsFactory.board[row][col]
        cell.findNeighbors();
        cell.setNeighborBomb();
        cell.setDisplay();
      });
    });
  };

  factory.Cell.findNeighbors = function() {
    this.neighbors = [];
    this.neighbors.push(BoardsFactory.board[row-1][col-1]);
    this.neighbors.push(BoardsFactory.board[row-1][col]);
    this.neighbors.push(BoardsFactory.board[row-1][col+1]);
    this.neighbors.push(BoardsFactory.board[row][col-1]);
    this.neighbors.push(BoardsFactory.board[row][col+1]);
    this.neighbors.push(BoardsFactory.board[row+1][col-1]);
    this.neighbors.push(BoardsFactory.board[row+1][col]);
    this.neighbors.push(BoardsFactory.board[row+1][col+1]);
    for (var i = 0; i < cell.neighbors.length; i++) {
      if (cell.neighbors[i] === undefined) {
        cell.neighbors.splice(i, 1);
      }
    }
  };

  factory.Cell.setNeighborBomb = function() {
    this.neighborBomb = 0
    this.neighbors.forEach(function(neighbor)) {
      if (neighbor.bomb === true) {
        this.neighborBomb += 1
      };
    };
  };

  factory.Cell.setDisplay = function() {
    if (this.bomb === true) {
      this.display = "B";
    } else {
      this.display = this.neighborBomb.toString();
    }
  };

});
