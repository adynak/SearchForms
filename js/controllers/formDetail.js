searchForms.controller('FormDetailController', ['$scope', '$uibModal', '$uibModalInstance', '$filter', '$interval', 'selectedRow',
    function ($scope, $uibModal, $uibModalInstance, $filter, $interval, selectedRow) {

        $scope.selectedRow = selectedRow;
        $scope.prompts = txtReviewForm;

        $scope.doesJsonHaveFormFields = function(){
            return selectedRow.formFields.length;
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