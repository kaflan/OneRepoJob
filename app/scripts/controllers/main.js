'use strict';

/**
 * @ngdoc function
 * @name angularJobApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the angularJobApp
 */
angular.module('angularJobApp')
  .controller('MainCtrl', function ($scope) {
    $scope.countWebSaite = 1;
    $scope.counterPhones = 1;
    $scope.saites = [];
    $scope.saites.push($scope.countWebSaite);
    $scope.phonesNumber = [];
    
    $scope.phonesNumber.push($scope.counterPhones );
    // s - количество сайтов
    // n - количество номеров для всех сайтов вместе
    // a - абонплата по сетке из таблицы в зависимости от количества сайтов
    $scope.toMinus = function(){
      if($scope.countWebSaite === 0 ){
        return 1;
      }
      $scope.countWebSaite = $scope.countWebSaite-1;
      $scope.saites.splice($scope.saites.length-1, 1);
      console.log($scope.countWebSaite);
    };

    $scope.toPlus = function(){
      $scope.countWebSaite = $scope.countWebSaite+1;
        $scope.saites.push($scope.countWebSaite);
    };

    $scope.toPlusNumber = function(){
      $scope.counterPhones = $scope.counterPhones + 1;
      $scope.phonesNumber.push($scope.counterPhones);
    };
    $scope.toMinusNumber = function(){
      if($scope.counterPhones === 0 ){
        return 1;
      }
      $scope.counterPhones = $scope.counterPhones - 1;
      $scope.phonesNumber.splice($scope.phonesNumber.length-1,1);
    };
    $scope.toAll = function(){

    };
  });
