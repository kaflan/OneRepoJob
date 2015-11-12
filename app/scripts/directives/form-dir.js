'use strict';

/**
 * @ngdoc directive
 * @name angularJobApp.directive:formDir
 * @description
 * # formDir
 */
angular.module('angularJobApp')
  .directive('formDir', function () {
    return {
      templateUrl: 'views/about.html',
      restrict: 'E',
      scope: {
        countWebSaite:'='
      },
      controller: 'MainCtrl',
      controllerAs: 'main',
      link: function ($scope, element, attrs, $compile, controller) {
        $scope.toMinusNumber = function(){

        };
        $scope.toPlusNumber = function(){};
      }
    };
  });
