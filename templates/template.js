angular.module('temStore.templates', ['ngRoute'])
    .config(['$routeProvider', function ($routeProvider) {
        $routeProvider.
            when('/templates', {
                templateUrl: 'templates/template.html',
                controller: 'tempCtrl'
        }).
            when('/templates/:templateId', {
                templateUrl: 'templates/template-details.html',
                controller: 'tempDetailsCtrl'
        })
    }])

    .controller('tempCtrl', ['$scope', '$http', function ($scope, $http) {
        $http.get('json/templates.json').
            success(function (data) {
                $scope.templates = data;
            })
    }])

    .controller('tempDetailsCtrl', ['$scope', '$routeParams', '$http', '$filter', function ($scope, $routeParams, $http, $filter) {
        var templateId = $routeParams.templateId;
        $http.get('json/templates.json').
            success(function (data) {
                $scope.template = $filter('filter')(data, function (d) {
                    return d.id == templateId;
                })[0];
                $scope.mainImage = $scope.template.images[0].name;
            });
        $scope.setImage = function (image) {
            $scope.mainImage = image.name;
        }
    }])


























