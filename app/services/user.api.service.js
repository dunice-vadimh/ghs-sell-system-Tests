(function () {
    'use strict';

    angular.module('admin.users')
        .factory('userApiFactory', userApiFactory);

    userApiFactory.$inject = ['$resource'];

    function userApiFactory ($resource ) {
        return  $resource('/user/:id');
    };

}).call();