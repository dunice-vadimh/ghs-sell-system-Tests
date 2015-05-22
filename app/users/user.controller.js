(function () {
    'use strict';

    angular.module('admin.users')
        .controller('UserController', UserController);

    UserController.$inject = ['userData'];

    function UserController (userData) {
        var vm = this;
        vm.data = userData;
    };

}).call();