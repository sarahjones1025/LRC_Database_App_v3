var db_App = angular.module('db_App', ['ngRoute']);

db_App.controller('mainController', function ($scope) {

});


// This is the two basic routes I've set up.
// It works if you run a "python -m SimpleHTTPServer 8000"
// In the terminal from the project folder.  I have been
// unsuccessful in setting up a real server for our app using
// express, or node, so it doesn't actually work.  When I
// tried setting up an express server and routing to these pages
// it would give me an error and could not find the 
// requested pages, I can't figure out what the problem is,
// I thought it was my file path, but JJ looked at it too
// and told me it looked right, so we don't know why it 
// wasn't working.  So instead I downloaded JJ's project
// structure.

// ROUTES:

db_App.config(function ($routeProvider) {
$routeProvider

.when('/', {
templateUrl:'../views/home.html',
controller:'mainController'
})

.when('/firstPage', {
templateUrl:'../views/firstPage.html',
controller:'mainController'
});


});