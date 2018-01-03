searchForms.controller('FormDetailController', ['$scope', '$uibModal', '$uibModalInstance', '$filter', '$interval', 'selectedRow',
    function ($scope, $uibModal, $uibModalInstance, $filter, $interval, selectedRow) {

        $scope.selectedRow = selectedRow;
        $scope.prompts = txtReviewForm;

        var gridData = selectedRow.formFields;

        $scope.gridOptions = {
            enableFiltering: false,
            enableSorting: false,
            data: gridData,
            enableRowSelection: true,
            multiSelect: false,
            cellTooltip: true,
            enableRowHeaderSelection: false,
            enableColumnResizing: true,
            onRegisterApi: function(gridApi){ 
                $scope.gridApi = gridApi;
            },
            appScopeProvider: $scope.myAppScopeProvider,
            rowTemplate: "<div ng-mousedown=\"grid.appScope.showInfo(row,$event)\" ng-repeat=\"(colRenderIndex, col) in colContainer.renderedColumns track by col.colDef.name\" class=\"ui-grid-cell\" ng-class=\"{ 'ui-grid-row-header-cell': col.isRowHeader }\" ui-grid-cell></div>",
            columnDefs: [
                {
                    name: 'horizontal',
                    displayName: $scope.prompts.gridColumnHorizontal,
                    cellClass: 'grid-align-right',
                    headerCellClass: 'grid-header-align-right',
                    enableColumnMenu: false,
                    width: '3%',
                    visible: false
                },
                {
                    name: 'vertical',
                    displayName: $scope.prompts.gridColumnVertical,
                    cellClass: 'grid-align-right',                    
                    headerCellClass: 'grid-header-align-right',
                    enableColumnMenu: false ,
                    width: '3%',
                    visible: false
                },
                {
                    name: 'fieldNumber',
                    displayName: $scope.prompts.gridColumnFieldNumber,
                    cellClass: 'grid-align-right',
                    // headerCellClass: 'grid-header-align-right',
                    enableColumnMenu: false,
                    width: '5%'                    
                },
                { 
                    name: 'width',
                    displayName: $scope.prompts.gridColumnWidth, 
                    cellClass: 'grid-align-right',                    
                    // headerCellClass: 'grid-header-align-right',
                    enableColumnMenu: false,
                    width: '5%'                    
                },
                {
                    name: 'conversion',
                    displayName: $scope.prompts.gridColumnConversion,
                    cellClass: 'grid-align-left',
                    // headerCellClass: 'grid-header-align-left',
                    enableColumnMenu: false,
                    cellTemplate: 'views/description.html',
                    width: '5%'                    

                },
                {
                    name: 'justification',
                    displayName: $scope.prompts.gridColumnJustification,
                    cellClass: 'grid-align-left',
                    // headerCellClass: 'grid-header-align-left',
                    enableColumnMenu: false,
                    cellTemplate: 'views/comment.html',
                    width: '5%'                                        
                },
                {
                    name: 'description',
                    displayName: $scope.prompts.gridColumnDescription,
                    cellClass: 'grid-align-left',
                    // headerCellClass: 'grid-header-align-left',
                    enableColumnMenu: false,
                },
                {
                    name: 'default',
                    displayName: $scope.prompts.gridColumnDefault,
                    cellClass: 'grid-align-left',
                    // headerCellClass: 'grid-header-align-left',
                    enableColumnMenu: false,
                    cellTemplate: 'views/comment.html',
                    width: '10%'
                },
                {
                    name: 'printField',
                    displayName: $scope.prompts.gridColumnPrintField,
                    cellClass: 'grid-align-left',
                    // headerCellClass: 'grid-header-align-left',
                    enableColumnMenu: false,
                }                                
            ]
        };



        $scope.doesJsonHaveFormFields = function(){
            if ("formFields" in selectedRow){
                return selectedRow.formFields.length;
            } else {
                return false;
            }
        };

        $scope.ok = function () {
            $scope.selectedRow = null;
            $uibModalInstance.close();
        };

        $scope.cancel = function () {
            $scope.selectedRow = null;
            $uibModalInstance.dismiss('cancel');
        };
    }
]);