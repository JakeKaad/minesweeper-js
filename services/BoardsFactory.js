mineSweeper.factory('BoardsFactory', function BoardsFactory(CellsFactory) {
  var factory = {};
  factory.board = [];

  factory.createBoard = function(rows, columns) {
    var id = 1
    for (var i = 0; i < rows.length; i++) {
      var row = [];
      for (var i = 0; i < columns.length; i++ ){
        var cell = CellsFactory.createCell(id));
        id++
        row.push(cell);
      }
    }
  };

  var bombArray = function(rows, columns) {
    var numberOfBombs = Math.floor(rows * columns / 10);
    var bombIds = [];
    while (bombIds.length < numberOfBombs) {
      var id = Math.floor(Math.random() * (rows * columns - 1)) + 1;
      if (!bombIds.indexOf(id)) {
        bombIds.push(id);
      }
    }
  }
});
