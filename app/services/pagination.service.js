(function () {
    'use strict';

    angular.module('admin.users')
        .factory('paginationFactory', paginationFactory);

    paginationFactory.$inject = [];

    function paginationFactory () {
        var pages = {
            currentOffset:0,
            total_count: 0,
            numbers: []
        };
        return {
            setPage: function(count, limit){
                pages.total_count = count;
                pages.numbers = [];
                for(var i=0; i < pages.total_count/limit ;i++) {
                    pages.numbers.push({offset: limit*i});
                }
                return pages.numbers;
            },
            getPage: function(){
                return pages;
            }
        };
    };

}).call();