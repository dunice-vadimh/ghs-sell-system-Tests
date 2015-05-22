(function () {
  'use strict';

  angular.module('admin.users').controller('UsersController', UsersController);

  UsersController.$inject = ['$state', 'usersApiFactory', 'paginationFactory'];

  function UsersController ($state, usersApiFactory, paginationFactory) {
    var vm = this;
    vm.pagination = {};
    vm.pagination.currentOffset = 0;
    vm.query = {
      'orderBy':'-date',
      'limit':100,
      'offset':0
    };
    vm.usersList = [];
    vm.search = search;
    vm.setUsersList = setUsersList;
    vm.chooseUser = chooseUser;
    activate();

    function activate () {
      vm.search();
    };

    function search () {
      usersApiFactory
          .get(vm.query)
          .$promise.then(vm.setUsersList);
    };

    function setUsersList (usersList){
      paginationFactory.setPage(usersList.count, vm.query.limit);
      vm.usersList = usersList.users;
    };

    function chooseUser(userId){
      $state.go('adm.user', {id:userId});
    };

  };

}).call();