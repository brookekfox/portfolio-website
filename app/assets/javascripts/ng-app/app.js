angular.module('portfolioApp', ['ui.router', 'templates'])

	.config(function($stateProvider, $urlRouterProvider){
		$urlRouterProvider.otherwise('/');
		$stateProvider
			.state('home', {
				url: '/home',
				templateUrl: 'home.html',
				controller: 'homeController'
			})
			.state('about', {
				url: '/about',
				templateUrl: 'about.html',
				controller: 'aboutController'
			})
			.state('portfolio', {
				url: '/portfolio',
				templateUrl: 'portfolio.html',
				controller: 'portfolioController'
			})
			.state('contact', {
				url: '/contact',
				templateUrl: 'contact.html',
				controller: 'contactController'
			});
	})

	.controller('homeController', ['$scope', function($scope){
		$scope.name = 'Brooke Fox';
	}])
	.controller('aboutController', ['$scope', function($scope){
		$scope.name = 'Brooke Fox';
	}])
	.controller('portfolioController', ['$scope', function($scope){
		$scope.project1 = 'Tic Tac Toe';
		$scope.project2 = 'Stash';
		$scope.project3 = 'Share';
		$scope.project4 = 'MathAcademy';
	}])
	.controller('contactController', ['$scope', function($scope){
		$scope.email = 'brookekfox@gmail.com';
		$scope.twitter  = '@brookekfox';
		$scope.phone = '602 463 4440';
		$scope.github = 'github.com/brookekfox';
		$scope.linkedin = 'linkedin.com/in/foxbrooke/en';
	}]);