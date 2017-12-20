searchForms.factory("Data", ['$http', '$q', '$rootScope',
    function($http, $q, $rootScope) {

        var factoryVariables = {
            securityInfo : {
                schema: null,
                dbPass: null,
                dpPort: null,
                stop: true
            },
            fileAttributes: {
                name: null,
                blob: null
            }
        };

        var setPageID = function(){
            factoryVariables.pageID = getURLParameter('PageID');
            console.log(factoryVariables.pageID);
        };

        var getPageID = function(){
            return factoryVariables.pageID;
        };

        function getURLParameter(paramName) {
            var href = window.location;
            var reg = new RegExp( '[?&]' + paramName + '=([^&#]*)', 'i' );
            var string = reg.exec(href);
            return string ? string[1] : null;
        }        

        var setSearchMatches = function(searchResults){
            factoryVariables.searchRessults = searchResults;
        }

        var getSearchMatches = function(){
            return factoryVariables.searchRessults;
        }

        var setSearchPattern = function(pattern){
            factoryVariables.searchPattern = pattern;
        }

        var getSearchPattern = function(){
            return factoryVariables.searchPattern;
        }

        var setFileAttributes = function(attrs){
            // {name: name, blob: blob ; }
            factoryVariables.fileAttributes = attrs;
        }

        var getFileAttributes = function(){
            return factoryVariables.fileAttributes;
        }

        var setFormDefinition = function(formDefinition){
            factoryVariables.FormDefinition = formDefinition;
        }

        var getFormDefinition = function(){
            return factoryVariables.FormDefinition;
        }

        var setIsNotLoggedIn = function(flag){
            factoryVariables.isNotLoggedIn = flag;
        }

        var getIsNotLoggedIn = function(){
            return factoryVariables.isNotLoggedIn;
        }

        var setAuthenticated = function(flag){
            factoryVariables.authenticated = flag;
        }

        var getAuthenticated = function(){
            return factoryVariables.authenticated;
        }

        var setCurrentMember = function(currentMember){
            factoryVariables.currentMember = currentMember;
        }

        var getCurrentMember = function(){
            return factoryVariables.currentMember;
        }

        var setActiveMember = function(activeMember){
            factoryVariables.activeMember = activeMember;
        }

        var getActiveMember = function(){
            return factoryVariables.activeMember;
        }

        var setSecurityInfo = function(securityInfo){
            localStorage.setItem('catsndogs', securityInfo.schema);
            localStorage.setItem('teainchina', securityInfo.dbPass);
            localStorage.setItem('countingbluecars', securityInfo.dbPass);
            factoryVariables.securityInfo = securityInfo;
        }

        var getSecurityInfo = function(){
            if (factoryVariables.securityInfo.schema == null || 
                factoryVariables.securityInfo.dbPass == null ||
                factoryVariables.securityInfo.dpPort == null){
                factoryVariables.securityInfo.schema = localStorage.getItem('catsndogs');
                factoryVariables.securityInfo.dbPass = localStorage.getItem('teainchina');
                factoryVariables.securityInfo.dbPort = localStorage.getItem('countingbluecars');
                if (factoryVariables.securityInfo.schema !== null || 
                    factoryVariables.securityInfo.dbPass !== null ||
                    factoryVariables.securityInfo.dbPort !== null){
                    factoryVariables.securityInfo.stop = false;
                }
            }
            return factoryVariables.securityInfo;
        }

        var searchFormsFiles = function(searchPattern){
            var qObject = $q.defer();
            var params = {
                searchPattern: searchPattern,
                pageID: Data.getPageID(),
                task: 'search',
                securityInfo: getSecurityInfo()
            };
            console.log(params);

            $http({
                method: 'POST',
                url: 'resources/dataServices/searchForms.php',
                data: params,
                // headers: {
                //     'Content-Type': 'application/x-www-form-urlencoded'
                // },
            }).then(function(success) {
                qObject.resolve(success.data);
            }, function(err) {
                console.log(err);
            });
            return qObject.promise;            
        };

        var logout = function(member){
            var qObject = $q.defer();
            var params = {
                task: 'logout',
                securityInfo: getSecurityInfo()
            };
            $http({
                method: 'POST',
                url: 'resources/dataServices/searchForms.php',
                data: params,
                headers: {
                    'Content-Type': 'application/x-www-form-urlencoded'
                },
            }).then(function(success) {
                qObject.resolve(success.data);
            }, function(err) {
                console.log(err);
            });
            return qObject.promise;
        }

        var getSession = function(task){
            var qObject = $q.defer();
            var params = {
                task: task,
                securityInfo: getSecurityInfo()
            };
            $http({
                method: 'POST',
                url: 'resources/dataServices/searchForms.php',
                data: params,
                headers: {
                    'Content-Type': 'application/x-www-form-urlencoded'
                },
            }).then(function(success) {
                qObject.resolve(success.data);
            }, function(err) {
                console.log(err);
            });
            return qObject.promise;
        }

        return {
            searchFormsFiles: searchFormsFiles,
            setSearchMatches: setSearchMatches,
            getSearchMatches: getSearchMatches,
            setSearchPattern: setSearchPattern,
            getSearchPattern: getSearchPattern,
            logout: logout,
            getPageID: getPageID,
            setPageID: setPageID,
            getSession: getSession,
            setCurrentMember: setCurrentMember,
            getCurrentMember: getCurrentMember,
            setIsNotLoggedIn: setIsNotLoggedIn,
            getIsNotLoggedIn: getIsNotLoggedIn,
            setAuthenticated: setAuthenticated,
            getAuthenticated: getAuthenticated,
            getActiveMember: getActiveMember,
            setActiveMember: setActiveMember,
            setFileAttributes: setFileAttributes,
            getFileAttributes: getFileAttributes,
            getFormDefinition: getFormDefinition,
            setFormDefinition: setFormDefinition,
            setSecurityInfo: setSecurityInfo,
            getSecurityInfo: getSecurityInfo
        };
    }
]);