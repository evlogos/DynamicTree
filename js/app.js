(function () {
  'use strict';

  angular.module('demoApp', ['ui.tree', 'ngRoute', 'ui.bootstrap'])

    .config(['$routeProvider', '$compileProvider', function ($routeProvider, $compileProvider) {
      $routeProvider
        .when('/drop-confirmation', {
          controller: 'DropConfirmationCtrl',
          templateUrl: 'views/drop-confirmation.html'
        })
        .otherwise({
          redirectTo: '/drop-confirmation'
        });

    }]);
})();
