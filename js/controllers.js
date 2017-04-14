angular.module('myApp')
    .controller('HomeCtrl', ['$scope', '$css', 
        function ($scope, $css) {
            $scope.name = '我是首页';
            $css.add('./css/home.css');
    }])
    .controller('TopicCtrl', ['$scope', '$css',
        function ($scope, $css) {
            $scope.name = '我是专题';
            $css.add('./css/topic.css');
    }])
    .controller('SortCtrl', ['$scope', '$css', 
        function ($scope, $css) {
            $scope.name = '我是分类';
            $css.add('./css/sort.css');
    }])
    .controller('CartCtrl', ['$scope', '$css',
        function ($scope, $css) {
            $scope.name = '我是购物车';
            $css.add('./css/cart.css');
    }])
    .controller('MineCtrl', ['$scope', '$css',
        function ($scope, $css) {
            $scope.name = '我是个人';
            $css.add('./css/mine.css');
    }])