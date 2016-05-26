(function () {
  'use strict';

  angular.module('demoApp')
    .controller('DropConfirmationCtrl', function ($scope, $modal, $q) {
      $scope.toggle = function (scope) {
        scope.toggle();
      };

      $scope.data = [{
        'value': 10,
        'parent':-1,
        'nodes': [
          {
            'value': -1,
            'parent': -2,
            'value_core':1,
            'value_type':"number50"
             },
          {
            'value': 5,
            'parent': 10,
            'nodes': [{
              'parent': -2,
              'value': -1,
              'value_core':1,
              'value_type':"number5"
            }, {
              'value': 1222,
              'parent': 5,
              'nodes': [{
                'parent': -2,
                'value': -1,
                'value_core':1,
                'value_type':"number50"
              }]
              }]
          }]
      },
        {

          'parent':-1,
          'value': 20,
          'nodes': [{
            'parent': -2,
            'value': -1,
            'value_core':1,
            'value_type':"number50"
          }]
        },
        {
          'parent':-1,
          'value': 30,
          'nodes': [
            {
              'parent': -2,
              'value': -1,
              'value_core':1,
              'value_type':"number5"
            },
            {
              'value': 25,
              'parent':30,
              'nodes': [{
                'parent': -2,
                'value': -1,
                'value_core':1,
                'value_type':"number50"

              }]
            }]
        },
        {
          'parent':-1,
          'value': 40,
          'nodes': [{
            'parent': -2,
            'value': -1,
            'value_core':1,
            'value_type':"number5"
          }]
        }];
    $scope.treeOptions = {
        beforeDrop : function (e) {
          var sourceValue = e.source.nodeScope.$modelValue.value,
            destValue = e.dest.nodesScope.node ? e.dest.nodesScope.node.value : undefined,
            modalInstance;

             if(e.source.nodeScope.$modelValue.value > 0) {
               e.source.nodeScope.$modelValue.parent = e.dest.nodesScope.node ? e.dest.nodesScope.node.value : -1
             }
                                                                                                                       }
       };
    });
}());