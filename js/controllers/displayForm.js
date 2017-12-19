searchForms.controller('DisplayFormController', ['$scope', '$http', '$location', 'Data', '$rootScope', '$routeParams', 'toaster', '$filter',
    function($scope, $http, $location, Data, $rootScope, $routeParams, toaster, $filter) {

        $scope.prompts = txtReviewForm;

        var debug = true;

        $scope.btnDone = function(){
            window.history.go(-1);
        };

        var gridData = Data.getSearchMatches();;
        $scope.resultsCount = gridData.length;
        $scope.searchPattern = Data.getSearchPattern();

        $scope.gridOptions = {
            enableFiltering: false,
            enableSorting: false,
            data: gridData,
            enableRowSelection: true,
            multiSelect: false,
            enableRowHeaderSelection: false,
            // rowTemplate: rowTemplate(),
            columnDefs: [{
                    name: 'account',
                    displayName: $scope.prompts.gridColumnAccount,
                    cellClass: 'grid-align-left',
                    headerCellClass: 'grid-header-align-left',
                    enableColumnMenu: false,
                    width: '8%'
                },
                {
                    name: 'formID',
                    displayName: $scope.prompts.gridColumnFormID,
                    cellClass: 'grid-align-left',                    
                    headerCellClass: 'grid-header-align-left',
                    enableColumnMenu: false ,
                    width: '10%'
                },
                {
                    name: 'formName',
                    displayName: $scope.prompts.gridColumnFormName,
                    cellClass: 'grid-align-left',
                    headerCellClass: 'grid-header-align-left',
                    enableColumnMenu: false
                },
                { 
                    name: 'date',
                    displayName: $scope.prompts.gridColumnDate, 
                    cellClass: 'grid-align-right',                    
                    headerCellClass: 'grid-header-align-right',
                    enableColumnMenu: false,
                    width: '8%'                    
                },

                {
                    name: 'description',
                    displayName: $scope.prompts.gridColumnDescription,
                    cellClass: 'grid-align-left',
                    headerCellClass: 'grid-header-align-left',
                    enableColumnMenu: false                    
                },
                {
                    name: 'comment',
                    displayName: $scope.prompts.gridColumnComment,
                    cellClass: 'grid-align-left',
                    headerCellClass: 'grid-header-align-left',
                    enableColumnMenu: false                    
                }                
            ]
        };

        $scope.gridOptions.onRegisterApi = function( gridApi ) {
            $scope.gridApi = gridApi;
       gridApi.selection.on.rowSelectionChanged($scope,function(row){
        var msg = 'row selected ' + row.isSelected;
        console.log(row);
        //Open your link here.
      });
        };


        $scope.searchGrid = function() {
            console.log($scope.searchText);
            $scope.gridOptions.data = $filter('filter')(gridData, $scope.searchText, undefined);
            // gridDimensions = ListServices.getGridHeight($scope.gridOptions, $scope.gridApi);
            // $scope.gridHeight = gridDimensions.gridHeight;
            // $scope.moveUp = gridDimensions.moveUp;
            // $scope.gridApi.grid.refresh();
        };


    }
]);
