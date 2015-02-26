mineSweeper.factory('CellsFactory', function CellsFactory(BoardsFactory) {
  var factory {};
  factory.Cell = {bomb: false,
                  revealed: false};

  factory.Cell.createCell = function(id) {
    var cell = Object.create(factory.Cell);
    cell.id = id;
    return cell;
  };

  factory.findNeighbors = function() {
    BoardsFactory.board.forEach(function(row) {
      BoardsFactory.board.forEach(function(col) {
        var cell = BoardsFactory.board[row][col]
        cell.neighbors = [];
        cell.neighbors.push(BoardsFactory.board[row-1][col-1]);
        cell.neighbors.push(BoardsFactory.board[row-1][col]);
        cell.neighbors.push(BoardsFactory.board[row-1][col+1]);
        cell.neighbors.push(BoardsFactory.board[row][col-1]);
        cell.neighbors.push(BoardsFactory.board[row][col+1]);
        cell.neighbors.push(BoardsFactory.board[row+1][col-1]);
        cell.neighbors.push(BoardsFactory.board[row+1][col]);
        cell.neighbors.push(BoardsFactory.board[row+1][col+1]);
        for (var i = 0; i < cell.neighbors.length; i++) {
          if (cell.neighbors[i] === undefined) {
            cell.neighbors.splice(i, 1);
          }
        }
        cell.neighbors
      });
    });

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
