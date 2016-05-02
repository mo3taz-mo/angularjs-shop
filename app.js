'use strict';

// Declare app level module which depends on views, and components
angular.module('temStore', [
  'ngRoute',
  'temStore.view1',
  'temStore.view2',
  'temStore.templates'
]).
config(['$routeProvider', function($routeProvider) {
  $routeProvider.otherwise({redirectTo: '/templates'});
}]);
