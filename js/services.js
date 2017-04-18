angular.module('myApp')
    .factory('getDataService', ['$http', function ($http) {
        // 首页分类菜单
        var cateList = $http.get('./json/index_cateList.json');
        // 首页推荐
        var recommedCateList = $http.get('./json/home_recommend.json');
        // 分类/居家
        var livingHomeData = $http.get('./json/sort01_livingHome.json');
        // 分类/餐厨
        var kitchenData = $http.get('./json/sort02_kitchen.json');
        // 分类/配件
        var accessoryData = $http.get('./json/sort03_accessory.json');
        // 分类/服装
        var clothingData = $http.get('./json/sort04_clothing.json');
        // 分类/洗护
        var cleaningData = $http.get('./json/sort05_cleaning.json');
        // 分类/婴童
        var babyData = $http.get('./json/sort06_baby.json');
        // 分类/杂货
        var groceriesData = $http.get('./json/sort07_groceries.json');
        // 分类/饮食
        var foodData = $http.get('./json/sort08_food.json');
        // 分类/其他
        var otherData = $http.get('./json/sort09_other.json');
        
        // 购物清单
        var cartListArr = JSON.parse(window.localStorage.getItem("cartListObj"));
//      var cartListArr = [];
        
        return {
            // 分类列表
            getCateList : function () {
                return cateList;
            },
            // 首页推荐
            getRecommedCateList : function () {
                return recommedCateList;
            },
            // 分类数据
            getSortCateData : function (id) {
                switch (id){
                    case 1005000:
                        return livingHomeData;
                        break;
                    case 1005001:
                        return kitchenData;
                        break;
                    case 1008000:
                        return accessoryData;
                        break;
                    case 1010000:
                        return clothingData;
                        break;
                    case 1013001:
                        return cleaningData;
                        break;
                    case 1011000:
                        return babyData;
                        break;
                    case 1012000:
                        return groceriesData;
                        break;
                    case 1005002:
                        return foodData;
                        break;
                    case 1019000:
                        return otherData;
                        break;
                    default:
                        return null;
                        break;
                }
            },
            addCartItem : function (item) {
                if (cartListArr.length != 0) {
                    for (var tempItem of cartListArr) {
                        if (tempItem.id == item.id) {
                            alert('购物车中已存在！');
                            return;
                        }
                    }
                }
                cartListArr.push(item);
                window.localStorage.setItem("cartListObj", JSON.stringify(cartListArr));
                alert('加入购物车成功！');
            },
            getCartItem : function () {
                return JSON.parse(window.localStorage.getItem("cartListObj"));
//              return cartListArr;
            }
        }
    }])