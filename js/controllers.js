angular.module('myApp')
    .controller('HomeCtrl', ['$scope', '$css', 'getDataService',
        function ($scope, $css, getDataService) {
            $css.add('./css/home.css');
            // 首页分类菜单
            getDataService.getCateList().success(function (resultData) {
                $scope.cateList = resultData;
            })
            
            var mySwiper = new Swiper('#homeMenuContainer', {
                // 设置slider容器能够同时显示的slides数量
                slidesPerView : 'auto',
                // slide之间的距离（单位px）
//              spaceBetween : 20,
                // 设定为true时，活动块会居中，而不是默认状态下的居左。
//              centeredSlides : false,
                // 设置为true则变为free模式，slide会根据惯性滑动且不会贴合。
                freeMode : true,
            })
            // 轮播图
            var mySwiper = new Swiper('#homeBannerContainer', {
                autoplay: 2000,//可选选项，自动滑动
                // 如果设置为false，用户操作swiper之后自动切换不会停止，每次都会重新启动autoplay。
                autoplayDisableOnInteraction : false,
                pagination : '#homeBannerPagination',
                paginationType : 'bullets',
                loop : true,
            })
    }])
    .controller('TopicCtrl', ['$scope', '$css',
        function ($scope, $css) {
            $scope.name = '我是专题';
            $css.add('./css/topic.css');
    }])
    .controller('SortCtrl', ['$scope', '$css', 'getDataService',
        function ($scope, $css, getDataService) {
            $css.add('./css/sort.css');
            // 分类菜单
            getDataService.getCateList().success(function (resultData) {
                $scope.cateList = resultData;
            })
    }])
    .controller('SortSubPageCtrl', ['$scope', '$css', 'getDataService',
        function ($scope, $css, getDataService) {
            $css.add('./css/sortSubPage.css');
            getDataService.getlivingHome().success(function (resuleData) {
                $scope.livingHome = resuleData;
            })
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