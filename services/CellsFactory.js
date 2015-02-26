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
    } else if (this.neighborBomb === 0) {
      this.display = ""
    } else {
      this.display = this.neighborBomb.toString();

    }
  };

  factory.Cell.plantFlag = function() {

  }

  return factory;

});
