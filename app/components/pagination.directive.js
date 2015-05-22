(function () {
    'use strict';

    angular.module('admin.components')
        .directive('pagination', pagination);

    pagination.$inject = ['paginationFactory'];

    function pagination(paginationFactory) {
        return {
            link: function (scope, element, attrs) {
                scope.pagination = paginationFactory.getPage();
            },

            templateUrl: function (el, attrs) {
                return 'app/components/pagination.directive.html';
            },
            scope: {
                query: '=',
                search: '='
            }
        };
    };
}).call();