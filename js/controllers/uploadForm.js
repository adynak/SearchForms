formsBuilder.controller('UploadFormController', ['$scope', '$http', '$location', 'Data', '$rootScope', '$routeParams', 'toaster',
    function($scope, $http, $location, Data, $rootScope, $routeParams, toaster) {

		var formDefinition = Data.getFormDefinition();

		var formFields = ["formName", "formFields", "name", "width" ,"alignment","fieldNumber","horizontal","vertical"];

		$scope.prompts = {
			pageTitle: 'Upload Form',
			btnCancel: 'Done',
			jsonFormData: JSON.stringify(formDefinition,formFields,4)
		};

    }
]);