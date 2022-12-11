let application = angular.module("inbox", ['ngRoute'])
application.controller("inboxController", function ($scope, $http) {

    $scope.getAll = () => {
        $http({
            method: 'GET',
            
            url: '../resources/inboxEmail.json'
        }).then(function successCallback(response) {
            $scope.inbox = response.data
        }, function errorCallback(response) {
            console.log("aaa");
        });

        $http({
            method: 'GET',
            
            url: '../resources/notifications.json'
        }).then(function successCallback(response) {
            $scope.notifications = response.data
        }, function errorCallback(response) {
            console.log("aaa");
        });
    }
    $scope.delInbox = (index) => {

        $scope.inbox = $scope.inbox.filter(function (inbox) {
            return inbox.id !== index;
          })
    }
    
});

