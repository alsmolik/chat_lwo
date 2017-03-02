let chat = angular.module('chat', []);

chat.controller('messages', function ($scope) {
    $scope.data = [];

    socket.on("message", function (msg) {
        $scope.data.push({ text: msg });
        $scope.$apply();
    });
});

chat.controller('messageBox', function ($scope) {
    $scope.text = '';

    $scope.send = function () {
        if (!$scope.text) {
            alert("Write your message!");
            return;
        }
        socket.send($scope.text);
        $scope.text = '';
    }
});