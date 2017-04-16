angular.module('myApp')
    .factory('getDataService', ['$http', function ($http) {
        var cateList = $http.get('./json/index_cateList.json');
        // 分类/推荐
//      var livingHomeData = $http.get('./json/index_cateList.json');
        // 分类/居家
        var livingHomeData = $http.get('./json/sort01_livingHome.json');
        return {
            // 分类列表
            getCateList : function () {
                return cateList;
            },
            // 分类/居家
            getlivingHome : function () {
                return livingHomeData;
            }
        }
    }])