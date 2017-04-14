angular.module('myApp', ['ui.router', 'angularCSS'])
    // 整个模块加载的时候，进行初始化设置
    .run(['$window', '$rootScope', function ($window, $rootScope) {
        // 监听全局的浏览器地址的变化
        $rootScope.$on('$locationChangeSuccess', function () {
            if ($window.location.href.indexOf('home') != -1) {
                $rootScope.which = 'home';
            } else if ($window.location.href.indexOf('topic') != -1) {
                $rootScope.which = 'topic';
            } else if ($window.location.href.indexOf('sort') != -1) {
                $rootScope.which = 'sort';
            } else if ($window.location.href.indexOf('cart') != -1) {
                $rootScope.which = 'cart';
            } else if ($window.location.href.indexOf('mine') != -1) {
                $rootScope.which = 'mine';
            }
        })
    }])
    // 配置路由，依赖于 $stateProvider 和 $urlRouterProvider
    .config(['$stateProvider', '$urlRouterProvider', function ($stateProvider, $urlRouterProvider) {
        $stateProvider
            // 首页
            .state('home', {
                url : '/home',
                templateUrl : './view/home.html',
                controller : 'HomeCtrl'
            })
            // 专题
            .state('topic', {
                url : '/topic',
                templateUrl : './view/topic.html',
                controller : 'TopicCtrl'
            })
            // 分类
            .state('sort', {
                url : '/sort',
                templateUrl : './view/sort.html',
                controller : 'SortCtrl'
            })
            // 购物车
            .state('cart', {
                url : '/cart',
                templateUrl : './view/cart.html',
                controller : 'CartCtrl'
            })
            // 个人
            .state('mine', {
                url : '/mine',
                templateUrl : './view/mine.html',
                controller : 'MineCtrl'
            })
        // 其他，重定向到首页
        $urlRouterProvider.otherwise('/home');
    }])