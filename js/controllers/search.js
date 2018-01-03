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
                    var searchError;
                    Data.setCurrentMember('');
                    $scope.invalidMessage = txtLogin.credentialsInvalid;

                    searchError = txtLogin.errorMsg.replace(/%1/,$scope.searchPattern);
                    searchError = searchError.replace(/%2/,status.error);
                    toaster.pop('error', "", searchError, 7000, 'trustedHtml');
                    
                    $scope.searchPattern = '';
                    Data.setSearchPattern($scope.searchPattern);
                    $scope.hideSearchInProgress = true;
                    
                }

            }, function(err) {
                $scope.invalidMessage= err;
            });

        };

    }
]);
