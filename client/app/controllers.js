angular.module("myApp.controllers", []).controller("itemCtrl", function ($scope, Item, $routeParams,$window) {
    $scope.newItem = {};
    $scope.items = Item.query();
    $scope.selecteditem = "";
    //To show/hide a div
    $scope.ShowHide = function () {
        $scope.IsVisible = $scope.IsVisible ? false : true;
    };
    //To retrieve the details of the selected item
    $scope.ok = function (item) {
        var index = $scope.items.indexOf(item);
        $scope.selecteditem = $scope.items[index];
    };
    //To add new item
    $scope.addItem = function (productid, name, price,grapes,country,region,notes,url) {
       //using the constructor of the factory to create a new product
        var item = new Item();
        item.productid = productid;
        item.name = name;
        item.price = price;
        item.grapes=grapes;
        item.country=country;
        item.region=region;
        item.notes=notes;
        item.url = url;
        item.$save(function (response) {
            $scope.items.push(response);
        });
        $scope.newItem.productid = "";
        $scope.newItem.name = "";
        $scope.newItem.price = "";
        $scope.newItem.grapes="";
        $scope.newItem.country="";
        $scope.newItem.region="";
        $scope.newItem.notes="";
        $scope.newItem.url = "";
        $window.alert("New Wine Added");
    };

    //To delete the item
    $scope.deleteItem = function (item) {
        var idx = $scope.items.indexOf(item);
        if (idx >= 0) {
            $scope.items.splice(idx, 1);
        }
        item.$remove();
        $window.alert("Wine Deleted");
    };
    //To edit the item
    $scope.editItem = function (item) {
        item.$update();
        $window.alert("Wine Updated");
        $scope.items = Item.query();
    };
});
