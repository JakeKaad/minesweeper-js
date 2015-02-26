mineSweeper.controller('BoardsCtrl', function BoardsCtrl($scope, CellsFactory, BoardsFactory) {
  $scope.BoardsFactory = BoardsFactory;
  $scope.resetGame = function() {
    location.reload();
  }

  $scope.initializeGame = function(rows, columns) {
    BoardsFactory.createBoard(rows, columns);
    $scope.activeGame = true;
  };
});
