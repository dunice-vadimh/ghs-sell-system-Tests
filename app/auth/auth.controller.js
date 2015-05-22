(function () {
  'use strict';

  angular.module('admin.auth')
    .controller('AuthController', AuthController);

  AuthController.$inject = ['$state', 'authApiFactory'];

  function AuthController ($state, authApiFactory) {
    var vm = this;
    vm.login = login;

    function login () {
      authApiFactory
        .save({name: vm.name, password: vm.password})
        .$promise.then(goToUsersView);

      function goToUsersView () { $state.go('adm.users'); };

    };
  };

}).call();