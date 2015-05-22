(function () {
    'use strict';

    angular.module('admin.users')
        .factory('usersApiFactory', usersApiFactory);

    usersApiFactory.$inject = ['$resource'];

    function usersApiFactory ($resource ) {
       return  $resource('/users/getAll');

    };

}).call();