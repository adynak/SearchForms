searchForms.controller('DisplayFormController', ['$scope', '$http', '$location', 'Data', '$rootScope', '$routeParams', 'toaster', '$filter', '$uibModal',
    function($scope, $http, $location, Data, $rootScope, $routeParams, toaster, $filter, $uibModal) {

        $scope.prompts = txtReviewForm;
        $scope.modalShown = false;

        $scope.btnDone = function(){
            window.history.go(-1);
        };


        $scope.myAppScopeProvider = {

            showInfo : function(row) {
               $uibModal.open({
                    controller: 'FormDetailController',
                    templateUrl: 'views/formDetail.html',
                    windowClass: 'app-modal-window',                   
                    resolve: {
                      selectedRow: function () {                    
                          return row.entity;
                      }
                    }
               });
           
            }
        }


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
            onRegisterApi: function(gridApi){ 
                $scope.gridApi = gridApi;
            },
            appScopeProvider: $scope.myAppScopeProvider,
            rowTemplate: "<div ng-dblclick=\"grid.appScope.showInfo(row)\" ng-repeat=\"(colRenderIndex, col) in colContainer.renderedColumns track by col.colDef.name\" class=\"ui-grid-cell\" ng-class=\"{ 'ui-grid-row-header-cell': col.isRowHeader }\" ui-grid-cell></div>",
            columnDefs: [
                {
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
                },
                {
                    name: 'formFields',
                    displayName: $scope.prompts.gridColumnComment,
                    cellClass: 'grid-align-left',
                    headerCellClass: 'grid-header-align-left',
                    enableColumnMenu: false,
                    visible: false                  
                }                                
            ]
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