
var app = angular.module("laurenFoods", []);

app.controller("NavCtrl", ($scope) => {
	$scope.navItems = [{name: "Fave Foods"}, {name: "Lauren's Fave Animal"}];
});


app.controller("ItemCtrl", ($scope) => {

	$scope.showAnimalImage = false;
	$scope.showFoodList = false;
	$scope.foodItems = [
	{
		id: 0,
		food: "chocolate chip cookies, homemade",
		desc: "chewy, melt in your mouth, buttery goodness",
	},{
		id: 1,
		food: "blueberry pancakes, from scratch",
		desc: "sweet, tart blueberries with bona fide maple syrup",
	},{
		id: 2,
		food: "tiger tail ice cream",
		desc: "orange-flavoured ice cream with black licorice swirl",
	},{
		id: 3,
		food: "pizza",
		desc: "all kinds",
	}
	];


	$scope.showAnimal = () => {
		$scope.showAnimalImage = true;
		$scope.showFoodList = false;
	};


	$scope.showFoods = () => {

		$scope.showAnimalImage = false;
		$scope.showFoodList = true;
	};

	$scope.clearAll = () => {
		$scope.showAnimalImage = false;
		$scope.showFoodList = false;
	};

});