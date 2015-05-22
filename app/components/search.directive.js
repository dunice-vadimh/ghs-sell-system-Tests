(function () {
    'use strict';

    angular.module('admin.components')
        .directive('searchQuery', searchQuery);

    function searchQuery() {
        return {
            link: function (scope, element, attrs) {
                scope.$watch('query', function (value, old_value) {
                    console.log('QUERY', scope.query.offset)
                    if ((value.offset === old_value.offset) && value.offset) return scope.query.offset = 0;
                    scope.search();
                }, true);
            },
            templateUrl: function (el, attrs) {
                switch (attrs.type) {
                    case 'usersPage':
                    {
                        return 'app/components/search.users.directive.html';
                        break;
                    }
                    default:
                    {
                        return 'app/components/search.users.directive.html';
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
