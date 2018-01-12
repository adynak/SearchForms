var searchForms = angular.module('searchForms', ['ngRoute', 'ngAnimate', 'toaster', 'ngTouch', 
                                     'ui.grid', 'ui.grid.edit', 'ngMessages', 'ui.grid.grouping', 'ui.bootstrap', 'ui.grid.selection', 'ui.grid.resizeColumns']);

searchForms.config(['$routeProvider', '$locationProvider', function($routeProvider, $locationProvider) {
    
    $locationProvider.hashPrefix(''); 

    document.title = txtNavigation.brandName;

    $routeProvider.
    when('/search', {
        templateUrl: 'views/search.html',
        controller: 'SearchController',
        task: 'getsessiondata'
    }).
    when('/displayForm', {
        templateUrl: 'views/displayForm.html',
        controller: 'DisplayFormController',
        task: 'getsessiondata'
    }).
    when('/usageTracking', {
        templateUrl: 'views/usageTracking.html',
        controller: 'UsageTrackingController',
        task: 'getsessiondata'
    }).

    otherwise({
        redirectTo: '/search'
    });


}]).run(function($rootScope, $location, Data) {
    $rootScope.$on("$routeChangeStart", function(event, next, current) {
        // thre is nothing special that we need to do here for this application
    });
});