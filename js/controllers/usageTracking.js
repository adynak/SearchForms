searchForms.controller('UsageTrackingController', ['$scope', '$http', '$location', 'Data', '$rootScope', '$routeParams', 'toaster', '$filter', '$uibModal',
    function($scope, $http, $location, Data, $rootScope, $routeParams, toaster, $filter, $uibModal) {

        $scope.prompts = txtReviewForm;
        $scope.modalShown = false;
        var gridData;

        $scope.btnDone = function(){
            window.history.go(-1);
        };

        Data.getLogFile().then(function(results) {
            gridData = results;
            $scope.gridOptions.data = gridData;
            $scope.resultsCount = gridData.length;
        });    

        $scope.gridOptions = {
            enableFiltering: false,
            enableSorting: true,
            data: gridData,
            enableRowSelection: true,
            multiSelect: false,
            cellTooltip: true,
            enableRowHeaderSelection: false,
            onRegisterApi: function(gridApi){ 
                $scope.gridApi = gridApi;
            },
            rowTemplate: "<div ng-mousedown=\"grid.appScope.showInfo(row,$event)\" ng-repeat=\"(colRenderIndex, col) in colContainer.renderedColumns track by col.colDef.name\" class=\"ui-grid-cell\" ng-class=\"{ 'ui-grid-row-header-cell': col.isRowHeader }\" ui-grid-cell></div>",
            columnDefs: [
                {
                    name: 'matches',
                    displayName: $scope.prompts.gridColumnMatches,
                    cellClass: 'grid-align-left',
                    headerCellClass: 'grid-header-align-left',
                    enableColumnMenu: false,
                    cellTemplate: 'views/tooltip.html',
                    width: '15%'
                },
                {
                    name: 'searchPattern',
                    displayName: $scope.prompts.gridColumnSearchPattern,
                    cellClass: 'grid-align-left',                    
                    headerCellClass: 'grid-header-align-left',
                    enableColumnMenu: false ,
                    cellTemplate: 'views/tooltip.html'
                },
                {
                    name: 'date',
                    displayName: $scope.prompts.gridColumnDate,
                    cellClass: 'grid-align-left',
                    headerCellClass: 'grid-header-align-left',
                    enableColumnMenu: true,
                    cellTemplate: 'views/tooltip.html',
                    width: '10%'
                },
                { 
                    name: 'time',
                    displayName: $scope.prompts.gridColumnTime, 
                    cellClass: 'grid-align-right',                    
                    headerCellClass: 'grid-header-align-left',
                    enableColumnMenu: false,
                    cellTemplate: 'views/tooltip.html',
                    width: '10%'
                }                                
            ]
        };

        $scope.searchGrid = function() {
            $scope.gridOptions.data = $filter('filter')(gridData, $scope.searchText, undefined);
            $scope.resultsCount = $scope.gridOptions.data.length;

        };

    }
]);
