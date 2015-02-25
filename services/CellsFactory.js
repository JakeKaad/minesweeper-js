mineSweeper.factory('CellsFactory', function CellsFactory() {
  var factory {};
  factory.Cell = {bomb: false};

  factory.Cell.createCell = function(id) {
    var cell = Object.create(factory.Cell);
    cell.id = id;
    return cell;
  };

  factory.Cell.findNeighbors = function() {

  };
});
