let aplication = angular.module("products", ['ngRoute'])

aplication.controller("productController", function ($scope, $http) {
    $scope.url = "http://127.0.0.1:5500/resources/"
    $scope.products = []
    $scope.productsSell = []
    $scope.productImage = "https://http2.mlstatic.com/D_NQ_NP_732242-MLA48035610306_102021-O.jpg"

    $http({
        method: 'GET',
        headers: {
            'Content-Type': 'application/x-www-form-urlencoded',
        },
        url: $scope.url+"products.json"
    }).then(function successCallback(response) {
        console.log(response);
        $scope.products = response.data.productList
    }, function errorCallback(response) {
        console.log("aaa");
    });
        
    $scope.getProducts= () => {
        $http({
            method: 'GET',
            headers: {
                'Content-Type': 'application/x-www-form-urlencoded',
            },
            url: $scope.url+"products.json"
        }).then(function successCallback(response) {
            console.log(response);
            $scope.products = response.data.productList
        }, function errorCallback(response) {
            console.log("aaa");
        });
    };

    $scope.getProductsSell= () => {
        $http({
            method: 'GET',
            headers: {
                'Content-Type': 'application/x-www-form-urlencoded',
            },
            url: $scope.url+"productsSell.json"
        }).then(function successCallback(response) {
            console.log(response);
            $scope.productsSell = response.data.productList
        }, function errorCallback(response) {
            console.log("aaa");
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
        window.location.href = "http://127.0.0.1:5500/views/productDetails.html" ;
    };

});