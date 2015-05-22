(function () {
  'use strict';

  angular.module('admin.auth')
    .factory('authApiFactory', authApiFactory);

  authApiFactory.$inject = ['$resource'];

  function authApiFactory ($resource ) {
    return $resource('/auth');
  };

}).call();
