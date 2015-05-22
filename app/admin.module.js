(function(){
  'use strict';

  angular.module('admin', [
    'ngRoute',
    'ui.router',
    'admin.auth',
    'admin.users',
    'admin.components',
    'admin.fake_api']);
}).call();