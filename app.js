var myApp = angular.module('myApp',['ngRoute','ngAnimate']);

myApp.controller('mainController',['$http','$q',function($http,$q){

  var main = this;
  this.pageheading = "";
  this.rounds = {};

   this.match = []; 

   this.url = "2015-16";

   this.url1 = "2016-17";


  this.baseUrl1 = 'https://raw.githubusercontent.com/openfootball/football.json/master/2016-17/en.1.json';
  this.baseUrl = 'https://raw.githubusercontent.com/openfootball/football.json/master/2015-16/en.1.json';

 

  this.load = function(){
   var JSON1 = $http({
   	method : 'GET',
    url : this.baseUrl

   });
   var JSON2 = $http({
    method : 'GET',
    url : this.baseUrl1

   });

    $q.all([JSON1,JSON2]).then(function successCallback(response){
    main.matchData = []; 
   	// main.pageheading = response.data.name

   	 //main.rounds = response.data.rounds;
      
    
    angular.forEach(response, function(responseData){
     //Just add the index to your item
     //round.index = index;
      main.match = responseData.data;
      main.matchData.push(main.match);
      console.log(main.matchData);
      
    });
   	  

     //console.log(main.rounds);

   }, function errorCallback(response){
       console.log("Error Occured");

   });
}



 myFunc = function(){
   this.baseUrl = 'https://raw.githubusercontent.com/openfootball/football.json/master/2015-16/en.1.json';
   this.load();
   console.log(baseUrl);
 }

  myFunc2 = function(){
   this.baseUrl = 'https://raw.githubusercontent.com/openfootball/football.json/master/2016-17/en.1.json';
   this.load();
   console.log(baseUrl);
 }

}]);





myApp.controller('teamController',['$http',function($http){
  var main = this;



  this.pageheading = "Team Statistics";
  this.rounds1 = {};

  this.getteam = [];

  this.teams = [];

  this.woncount = {};



  this.tie = {};

  this.tieArray = [];

  this.goals = [];

  this.totalmatchedplayed = [];


  this.totalmatch = {};

   this.matchplayed = {};


   this.stats = [];

   this.withdrawn = [];

   this.draw = {};


  
 

  this.baseUrl = 'https://raw.githubusercontent.com/openfootball/football.json/master/2016-17/en.1.json';
  this.baseUrl1 = 'https://raw.githubusercontent.com/openfootball/football.json/master/2015-16/en.1.json';

  this.load = function(){
   $http({
   	method : 'GET',
    url : this.baseUrl

   }).then(function successCallback(response){

   	 main.pageheading = response.data.name

   	 main.rounds1 = response.data.rounds;



      roundslength = main.rounds1.length;
     
     for(var i=0;i< roundslength ;i++)
     {

     	var matches = main.rounds1[i].matches;
     	//console.log(matches.length);
     	for(var j=0;j< matches.length;j++)
     	{
     		
             if(matches[j].score1 > matches[j].score2)
             {
            
             	 /*main.teams[matches[j].team1.name] = matches[j].score1;
               //main.getteam.push(main.teams);
               main.goals.push(main.teams);*/

                /*main.matchplayed[matches[j].team1.name] = matches[j].score1;
                main.matchplayed[matches[j].team2.name] = matches[j].score2;*/
                 var team1name = matches[j].team1.name;
                var team2name = matches[j].team2.name;
                var team1score = matches[j].score1;
                var team2score = matches[j].score2;
                
                main.totalmatchedplayed.push({
                    teamname  : team1name,
                    teamscore : team1score
                   
                });
                  main.totalmatchedplayed.push({
                    teamname : team2name,
                    teamscore : team2score
                });


                   main.getteam.push({
                    teamname  : team1name,
                    teamscore : team1score
                   
                });


                //console.log(main.totalmatchedplayed);
                
             }
             else if(matches[j].score1 < matches[j].score2)
             {
              /*main.teams[matches[j].team2.name] = matches[j].score2;
               main.getteam.push(main.teams);
               main.goals.push(main.teams);*/

               /*main.matchplayed[matches[j].team1.name] = matches[j].score1;
                main.matchplayed[matches[j].team2.name] = matches[j].score2;*/
                 var team1name = matches[j].team1.name;
                var team2name = matches[j].team2.name;
                var team1score = matches[j].score1;
                var team2score = matches[j].score2;
                
                main.totalmatchedplayed.push({
                    teamname  : team1name,
                    teamscore : team1score
                   
                });
                  main.totalmatchedplayed.push({
                    teamname : team2name,
                    teamscore : team2score
                });


                   main.getteam.push({
                    teamname  : team2name,
                    teamscore : team2score
                   
                });
              //console.log(matches[j].team2.name);
              //console.log(main.totalmatchedplayed);
             }
             else if(matches[j].score1 == matches[j].score2 && matches[j].score1 !=null && matches[j].score2 != null)
             {
               var team1name = matches[j].team1.name;
                var team2name = matches[j].team2.name;
                var team1score = matches[j].score1;
                var team2score = matches[j].score2;

                            
                main.totalmatchedplayed.push({
                    teamname  : team1name,
                    teamscore : team1score
                   
                });
                  main.totalmatchedplayed.push({
                    teamname : team2name,
                    teamscore : team2score
                });

                  main.withdrawn.push({
                    teamname  : team1name,
                    teamscore : team1score
                   
                });
                  main.withdrawn.push({
                    teamname : team2name,
                    teamscore : team2score
                });

             //console.log(main.totalmatchedplayed);
              
             }
             else if(matches[j].score1 ==null && matches[j].score2 == null){
                
                //main.matchplayed[matches[j].team1.name] = matches[j].score1;
                //main.matchplayed[matches[j].team2.name] = matches[j].score2;
                var team1name = matches[j].team1.name;
                var team2name = matches[j].team2.name;
                var team1score = matches[j].score1;
                var team2score = matches[j].score2;
                
                main.totalmatchedplayed.push({
                    teamname  : team1name,
                    teamscore : team1score
                   
                });
                  main.totalmatchedplayed.push({
                    teamname : team2name,
                    teamscore : team2score
                });

                   main.withdrawn.push({
                    teamname  : team1name,
                    teamscore : team1score
                   
                });
                  main.withdrawn.push({
                    teamname : team2name,
                    teamscore : team2score
                });
            //console.log(main.totalmatchedplayed);

             }
        	}
     }


     



      
    main.getteam.forEach(function(obj){
         var key = JSON.stringify(obj.teamname);
         main.woncount[key] = (main.woncount[key] || 0) + 1 
     });

    main.withdrawn.forEach(function(obj){
         var key = JSON.stringify(obj.teamname);
         main.draw[key] = (main.draw[key] || 0) + 1 
     });
   
    
     main.totalmatchedplayed.forEach(function(obj){
         var key = JSON.stringify(obj.teamname);
        
         var score = JSON.stringify(obj.teamscore);
         main.totalmatch[key] = (main.totalmatch[key] || 0) + 1 
        // main.totalmatch[score] = (main.totalmatch[score] || 0) + main.totalmatch[score] 
    });

      
    angular.forEach(main.totalmatch, function(value, key) {
              var temp = main.woncount[key];
            if(temp==undefined)
            {
              temp = 0;
            }
             this.push({team :  key,
              played : value,
               won : temp,
              lost : (value - ((temp) + main.draw[key])),
              draw : main.draw[key]
            });
            
        }, main.stats);

     console.log(main.stats);

           

  
   }, function errorCallback(response){


   });
}

  


}]);



 myApp.controller('matchController',['$http','$routeParams',function($http,$routeParams){

  var main = this;

  this.matchid = $routeParams.matchId;
  this.roundid = $routeParams.roundId;
  this.yearId = $routeParams.yearId;

  
   this.url = "2015-16";

   this.url1 = "2016-17";

   this.team1name = "";
   this.team2name = "";
   this.team1score = "";
   this.team2score = "";
   this.date = "";

   this.team1key = "";
   this.team2key = "";
   this.team1code = "";
   this.team2code = "";



   
  if(this.yearId == '0')
  {
    this.baseUrl = 'https://raw.githubusercontent.com/openfootball/football.json/master/2015-16/en.1.json';
  }
  else if(this.yearId == '1')
  {
    this.baseUrl = 'https://raw.githubusercontent.com/openfootball/football.json/master/2016-17/en.1.json';
  }
  
  

 

  this.load = function(){
   $http({
    method : 'GET',
    url : this.baseUrl

   }).then(function successCallback(response){

      main.pageheading = response.data.name

      main.rounds = response.data.rounds;
  
   

      main.team1name = main.rounds[main.roundid].matches[main.matchid].team1.name;

      main.team2name = main.rounds[main.roundid].matches[main.matchid].team2.name;

      main.team1code = main.rounds[main.roundid].matches[main.matchid].team1.code;

      main.team2code = main.rounds[main.roundid].matches[main.matchid].team2.code;

      main.team1score = main.rounds[main.roundid].matches[main.matchid].score1;

      main.team2score = main.rounds[main.roundid].matches[main.matchid].score2;

      main.team1key = main.rounds[main.roundid].matches[main.matchid].team1.key;

      main.team2key = main.rounds[main.roundid].matches[main.matchid].team2.key;

      main.date = main.rounds[main.roundid].matches[main.matchid].date;
     
      console.log(main.team2score);

   }, function errorCallback(response){


   });
}



 }]);






