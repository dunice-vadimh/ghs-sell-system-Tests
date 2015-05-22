(function () {
    'use strict';

    angular.module('admin.components')
        .directive('sortQuery', sortQuery);
    function sortQuery() {
        return {
            link: function (scope, element, attrs) {
            },
            templateUrl: function (el, attrs) {
                switch (attrs.type) {
                    case 'usersPage':
                    {
                        return 'app/components/sort.users.directive.html';
                        break;
                    }
                    default:
                    {
                        return 'app/components/sort.users.directive.html';
                        break;
                    }
                };
            },
            scope: {
                query: '=',
                search: '='
            }
        };
    };
}).call();
