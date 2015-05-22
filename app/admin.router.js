(function() {
  'use strict';

  angular.module('admin')
    .config(router);

  router.$inject = ['$stateProvider', '$urlRouterProvider'];

  function router ($stateProvider, $urlRouterProvider) {

    $urlRouterProvider.otherwise('/auth');

    $stateProvider

      .state('adm', {
        url: '/admin',
          views: {
            '@': {
              templateUrl: 'app/layout/layout.html'
            }
          }
      })
      .state('auth', {
        url: '/auth',
        views: {
          '@': {
            templateUrl: 'app/auth/auth.controller.html',
            controller: 'AuthController',
            controllerAs: 'auth'
          }
        }
      })
      .state('adm.users', {
        url: '/users',
        views: {
          'content@adm': {
            templateUrl: 'app/users/users.controller.html',
            controller: 'UsersController',
            controllerAs: 'users'
          }
        }
      })
      .state('adm.user', {
        url: '/user/:id',
        views: {
          'content@adm': {
            templateUrl: 'app/users/user.controller.html',
            controller: 'UserController',
            controllerAs: 'user'
          }
        },
        resolve: {
          userData: getUser
        }
      });

      getUser.$inject = ['$stateParams', 'userApiFactory'];

      function getUser ($stateParams, userApiFactory) {
        return userApiFactory
              .get({id:$stateParams.id})
              .$promise
      };
  };

}).call();