let aplication = angular.module("products", ['ngRoute'])

aplication.controller("productController", function ($scope, $http) {
    $scope.url = "http://127.0.0.1:5500/"
    $scope.products = []
    $scope.productsSell = []
    $scope.productImage = "https://http2.mlstatic.com/D_NQ_NP_732242-MLA48035610306_102021-O.jpg"

    //metodo del modal
    $scope.showTab = false;

    $scope.paymentTab = tab => {
        $scope.showTab = !(tab === 0); 
    }

    $http({
        method: 'GET',
        url: $scope.url+"resources/products.json"
    }).then(function successCallback(response) {
        $scope.products = response.data.productList
    }, function errorCallback(response) {
        console.log(response);
    });
        
    $scope.getProducts= () => {
        $http({
            method: 'GET',
            url: $scope.url+"resources/products.json"
        }).then(function successCallback(response) {
            $scope.products = response.data.productList
        }, function errorCallback(response) {
            console.log(response);
        });
    };

    $scope.getProductsSell= () => {
        $http({
            method: 'GET',
            url: $scope.url+"resources/productsSell.json"
        }).then(function successCallback(response) {
            $scope.productsSell = response.data.productList
        }, function errorCallback(response) {
            console.log(response);
        });
    };

    $scope.addProduct= () => {
        Swal.fire({
            icon: 'success',
            title: 'Producto agregado al carrito',
            showConfirmButton: true,
        })
    };

    $scope.changeImage = (url) => {
        $scope.productImage = url;
    }

    $scope.details= () => {
        window.location.href =  $scope.url+"views/productDetails.html" ;
    };

});