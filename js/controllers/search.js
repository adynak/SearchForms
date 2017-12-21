searchForms.controller('SearchController', ['$scope', '$http', '$location', 'Data', '$rootScope', 'toaster',
    function($scope, $http, $location, Data, $rootScope, toaster) {

        $scope.prompts    = txtLogin;
        $scope.required   = true;
        $scope.hideSearchInProgress = true;

        Data.setPageID();
        
        $scope.search = function() {
            Data.setSearchPattern($scope.searchPattern);
            $scope.hideSearchInProgress = false;
            Data.searchFormsFiles($scope.searchPattern).then(function(status) {
                if (status.matched == true) {
                    Data.setSearchMatches(status.matchingForms);
                    $location.path('/displayForm');
                } else {
                    Data.setCurrentMember('');
                    $scope.invalidMessage = txtLogin.credentialsInvalid;
                    toaster.pop('error', "", 'search gone bad', 3000, 'trustedHtml');
                }

            }, function(err) {
                $scope.invalidMessage= err;
            });

        };

    }
]);
