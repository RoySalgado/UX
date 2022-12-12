
app.controller('dashboardController', ['$scope', '$http', ($scope, $http) => {

    $scope.products = [];
    $scope.product = {};

    $scope.loadProducts = () => {
        $http({
            method: 'GET',
            url: 'http://127.0.0.1:5500/resources/dashboardProducts.json'
        }).then(response => {
            $scope.products = response.data;
        }).catch(error => {
            console.log(error);
        });
    }
}]);