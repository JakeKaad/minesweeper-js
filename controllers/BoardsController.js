mineSweeper.controller('BoardsCtrl', function BoardsCtrl($scope, CellsFactory, BoardsFactory) {
  $scope.BoardsFactory = BoardsFactory;

  $scope.initializeGame = function(rows, columns) {
  
    BoardsFactory.createBoard(rows, columns);
  };
});
