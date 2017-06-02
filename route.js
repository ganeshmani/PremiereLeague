myApp.config(['$routeProvider', function($routeProvider){
    $routeProvider
        .when('/',{
            // location of the template
        	templateUrl		: 'view/index-view.html',
        	// Which controller it should use 
            controller 		: 'mainController',
            // what is the alias of that controller.
        	controllerAs 	: 'page'
        })
        .when('/teams',{
        	templateUrl     : 'view/team-view.html',
        	controller 		: 'teamController',
        	controllerAs 	: 'teamsstatistics'
        })
        .when('/match/:matchId/:roundId',{

        	templateUrl     : 'view/match-view.html',
        	controller 		: 'matchController',
        	controllerAs 	: 'match'
        })

        .otherwise(
            {
                //redirectTo:'/'
                template   : '<h1>404 page not found</h1>'
            }
        );
}]);