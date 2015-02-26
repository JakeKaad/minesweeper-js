mineSweeper.controller('BoardsCtrl', function BoardsCtrl($scope, BoardsFactory) {
  $scope.BoardsFactory = BoardsFactory;

  $scope.initializeGame = function(rows, columns) {
    $scope.game = {};
    BoardsFactory.
  }
});
