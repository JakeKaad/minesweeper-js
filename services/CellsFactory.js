mineSweeper.factory('CellsFactory', function CellsFactory() {
  var factory = {};
  factory.Cell = {};

  factory.createCell = function(id) {
    var cell = Object.create(factory.Cell);
    cell.id = id;
    cell.bomb = false;
    cell.revealed = false;
    return cell;
  };

  // factory.Cell.findNeighbors = function() {
  //   this.neighbors = [];
  //   this.neighbors.push(BoardsFactory.board[row-1][col-1]);
  //   this.neighbors.push(BoardsFactory.board[row-1][col]);
  //   this.neighbors.push(BoardsFactory.board[row-1][col+1]);
  //   this.neighbors.push(BoardsFactory.board[row][col-1]);
  //   this.neighbors.push(BoardsFactory.board[row][col+1]);
  //   this.neighbors.push(BoardsFactory.board[row+1][col-1]);
  //   this.neighbors.push(BoardsFactory.board[row+1][col]);
  //   this.neighbors.push(BoardsFactory.board[row+1][col+1]);
  //   for (var i = 0; i < cell.neighbors.length; i++) {
  //     if (cell.neighbors[i] === undefined) {
  //       cell.neighbors.splice(i, 1);
  //     }
  //   }
  // };

  factory.Cell.setNeighborBomb = function() {
    var neighborBomb = 0
    this.neighbors.forEach(function(neighbor) {
      if (neighbor.bomb === true) {
        neighborBomb += 1;
      };
    });
    this.neighborBomb = neighborBomb
  };

  factory.Cell.setDisplay = function() {
    if (this.bomb === true) {
      this.display = "B";
    } else {
      this.display = this.neighborBomb.toString();
    }
  };

  return factory;

});
