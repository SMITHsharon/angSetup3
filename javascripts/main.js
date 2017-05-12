
var app = angular.module("laurenFoods", []);

app.controller("NavCtrl", ($scope) => {
	$scope.navItems = [{name: "Fave Foods"}, {name: "Lauren's Fave Animal"}];
});