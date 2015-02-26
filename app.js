var mineSweeper = angular.module('mineSweeper', ['ui.router']);

mineSweeper.config(function($stateProvider) {
  $stateProvider.state('home', {
    url: '',
    templateUrl: "partials/index.html",
  });

  $stateProvider.state('newGame', {
    url: '/game',
    templateUrl: "partials/newGame.html",
    controller: 'BoordsController'
  });
});
