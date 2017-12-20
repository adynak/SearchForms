searchForms.controller('SearchController', ['$scope', '$http', '$location', 'Data', '$rootScope', 'toaster',
    function($scope, $http, $location, Data, $rootScope, toaster) {

        $scope.prompts    = txtLogin;
        $scope.required   = true;
        
        $scope.search = function() {
            Data.setSearchPattern($scope.searchPattern);

            Data.searchFormsFiles($scope.searchPattern).then(function(status) {
                if (status.matched == true) {
                    Data.setSearchMatches(status.matchingForms);
                    $location.path('/displayForm');
                } else {
                    Data.setCurrentMember('');
                    $scope.invalidMessage = txtLogin.credentialsInvalid;
                    toaster.pop('error', "", txtLogin.credentialsInvalid, 3000, 'trustedHtml');
                }

            }, function(err) {
                $scope.invalidMessage= err;
            });

        };

    }
]);