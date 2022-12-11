
app.controller('productController', ['$scope', '$http', ($scope, $http) => {

    $scope.openModal = () => {
        $('#paymentModal').modal('show');
    }

    $scope.showTab = false;

    $scope.paymentTab = tab => {
        $scope.showTab = !(tab === 0); 
    }

}]);