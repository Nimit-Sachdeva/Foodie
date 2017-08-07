// // Runs when HTML file is loaded
// $(document).ready(function() {
//   // $('#user-email').on('keypress',function() {
//       $('#user-email').on('input',function() {
//           console.log($('#user-email').val());
//           var email = $('#user-email').val();
//           var message = 'Welcome, ' + email;
//           $('.welcome-message').text(message);
//   });
// });
var foodieApp = angular.module('foodieApp',['ngRoute']);   //We are storing the value and from the ng-app in html file
console.log(foodieApp);

foodieApp.config(function ($routeProvider) {

	$routeProvider
	.when('/',{
		templateUrl: 'pages/login.html',
		controller: 'loginController'
	})
	.when('/home',{
		templateUrl: 'pages/main.html',
		controller: 'mainController'
	})
	.when('/restaurant/:id', {
		templateUrl: 'pages/restaurant.html',
		controller: 'restaurantController'
	})
	.when('/grocery', {
		templateUrl: 'pages/grocery.html',
		controller: 'groceryController'
	})
});

foodieApp.controller('groceryController',function($scope) {
		 //A model holding tasks
		//  $scope.done = false;
		$scope.removeLine = function() {
        removeClass('done');
    }
});


foodieApp.controller('restaurantController',function($scope,$routeParams,$http) {
	$scope.restaurantId = $routeParams.id;
	var restaurants = [{
	name: 'Farzi Cafe',
	address: '38/39, Level 1, Block E , Inner Circle, Connaught Place',
	location: 'Connaught Place',
	category: 'Casual Dining, Bar',
	vote: '4.2',
	cuisines: 'Modern Indian',
	cost: '2200',
	hours: '12 Noon to 1 AM (Mon-Sun)',
	image: 'https://b.zmtcdn.com/data/pictures/chains/2/308022/dabd30bd0b000ea859ada9a08a0132fc.jpg',
	bestDish: {
	name: 'Corn Pizza',
	image: 'http://noblepig.com/images/2016/06/Avocado-and-Three-Bean-Salad-is-perfect-for-a-summertime-barbecue-side-dish.JPG'
},
},{
name: 'Daastaan',
address: 'SCO 43, Backside, Madhya Marg, Sector 7, Chandigarh',
location: 'Chandigarh ',
category: 'Casual Dining',
vote: '4.0',
cuisines: 'North Indian',
cost: '1000',
hours: '12 Noon to 12 AM(Mon-Sun)',
image: 'https://b.zmtcdn.com/data/pictures/chains/2/308022/dabd30bd0b000ea859ada9a08a0132fc.jpg',
bestDish: {
	name: 'Paneer Tikka,',
	image: '/imgs/paneer-tikka.png'
},
},{
name: 'Upstairs club',
address: '6th Floor, SM-8, Sector 5, Panchkula',
location: 'Panchkula',
category: 'Casual Dining, Bar',
vote: '4.3',
cuisines: 'Italian, North Indian, Continental',
cost: '1600 ',
hours: '12 Noon to 12 AM (Mon-Sun)',
image: 'https://b.zmtcdn.com/data/pictures/chains/2/308022/dabd30bd0b000ea859ada9a08a0132fc.jpg',
bestDish: {
	name: 'Corn Pizza',
	image: 'http://noblepig.com/images/2016/06/Avocado-and-Three-Bean-Salad-is-perfect-for-a-summertime-barbecue-side-dish.JPG'
},
},{
name: 'Pirates Of Grill',
address: '313, 3rd Floor, Elante Mall, Phase 1, Chandigarh Industrial Area, Chandigarh',
location: 'Elante Mall,Chandigarh',
category: 'Casual Dining, Bar',
vote: '4.0',
cuisines: 'North Indian, Continental, Asian',
cost: '1200',
hours: '11 AM to 4 PM, 6:30 PM to 11 PM',
image: 'imgs/biryani.png',
bestDish: {
	name: 'Biryani',
	image: 'http://img02.burrpimg.com/40346612a34f8347f34cc266a1ff76db.jpg'
},
},{
name: 'Barbeque Nation',
address: 'SCO 39, Madhya Marg, Sector 26, Chandigarh',
location: 'Sector-26',
category: 'Casual Dining	',
vote: '4.5',
cuisines: 'North Indian, Chinese',
cost: '1300',
hours: '12 Noon to 3 PM, 6:30 PM to 11 PM(Mon-Sun)',
image: 'imgs/sea-food.png',
bestDish: {
	name: 'Sea Food',
	image: 'http://www.pioneerchef.com/wp-content/uploads/2015/01/SeaFood..jpg'
},
},{
name: 'Garam Dharam',
address: 'SCO 8, Madhya Marg, Sector 26, Chandigarh',
location: 'Sector-26',
category: 'Casual Dining',
vote: '3.8',
cuisines: 'North Indian',
cost: '2200',
hours: ' 11 AM to 11 PM (Mon-Sun)',
image: 'imgs/soya-champ.png',
// bestDish: {
// 	image: 'https://i0.wp.com/files.hungryforever.com/wp-content/uploads/2017/05/09195434/feature-image-soya-chaap.jpg?w=1269&strip=all&quality=80'
// 	name: 'Soya Champ',
// },
},{
name: 'All Day 99',
address: 'SCO 676, Sector 70, Mohali',
location: 'Sector 70',
category: 'Casual Dining',
vote: '4.2',
cuisines: 'North Indian, Mughlai, South Indian',
cost: '500',
hours: '12 Noon to 1 AM (Mon-Sun)',
image: 'imgs/butter-chicken-golgappe.png',
bestDish: {
	name: 'Butter Chicken Gol Gappe',
	image: 'https://b.zmtcdn.com/data/reviews_photos/e5d/fce3ed15158bf460ecfd8a1a9c268e5d_1499275811.jpg'
},
}]
	$scope.restaurant = restaurants[$routeParams.id - 1];
	$scope.ingredients = [];
	$scope.getIngredients = function(url) {
			var data = '{"inputs":[{"data":{"image":{"url":"' + url + '"}}}]}'
				$http({
					'method': 'POST',
					'url': 'https://api.clarifai.com/v2/models/bd367be194cf45149e75f01d59f77ba7/outputs',
					'headers': {
						'Authorization': 'Key be3d9237f59a47baaade167c8679c0dd' ,
						'Content-Type': 'application/json'
					},
					'data': data
				}).then(function (response) {
	var ingredients = response.data.outputs[0].data.concepts;
	for (var i =0;i < ingredients.length;i++) {
	$scope.ingredients.push(ingredients[i].name);
	}


			// $('.ingredients').html(list);
			// function (response) {
			// 		var ingredients = response.data.outputs[0].data.concepts;
			// 		for (var i =0;i < ingredients.length;i++) {
			// 		$scope.ingredients.push(ingredients[i].name);
			// 		}
			// 	}
			        }, function (xhr) {
			        	console.log(xhr);
			        });
						}
				})
foodieApp.controller('loginController',function($scope) {
	$scope.goToHome = function() {
		$location.url('home')
		console.log($location.url())
	}
});
foodieApp.controller('mainController',function($scope) {
//below is the array having objects  and has the details of all the restaurants and scope variable which is defined for controller
	$scope.restaurants = [{
	name: 'Farzi Cafe',
	address: '38/39, Level 1, Block E , Inner Circle, Connaught Place',
	location: 'Connaught Place',
	category: 'Casual Dining, Bar',
	vote: '4.2',
	cuisines: 'Modern Indian',
	cost: '2200',
	hours: '12 Noon to 1 AM (Mon-Sun)',
	image: 'https://b.zmtcdn.com/data/pictures/chains/2/308022/dabd30bd0b000ea859ada9a08a0132fc.jpg'
},{
name: 'Daastaan',
address: 'SCO 43, Backside, Madhya Marg, Sector 7, Chandigarh',
location: 'Chandigarh ',
category: 'Casual Dining',
vote: '4.0',
cuisines: 'North Indian',
cost: '1000',
hours: '12 Noon to 12 AM(Mon-Sun)',
image: 'https://b.zmtcdn.com/data/pictures/chains/2/308022/dabd30bd0b000ea859ada9a08a0132fc.jpg'
},{
name: 'Upstairs club',
address: '6th Floor, SM-8, Sector 5, Panchkula',
location: 'Panchkula',
category: 'Casual Dining, Bar',
vote: '4.3',
cuisines: 'Italian, North Indian, Continental',
cost: '1600 ',
hours: '12 Noon to 12 AM (Mon-Sun)',
image: 'https://b.zmtcdn.com/data/pictures/chains/2/308022/dabd30bd0b000ea859ada9a08a0132fc.jpg'
},{
name: 'Pirates Of Grill',
address: '313, 3rd Floor, Elante Mall, Phase 1, Chandigarh Industrial Area, Chandigarh',
location: 'Elante Mall,Chandigarh',
category: 'Casual Dining, Bar',
vote: '4.0',
cuisines: 'North Indian, Continental, Asian',
cost: '1200',
hours: '11 AM to 4 PM, 6:30 PM to 11 PM',
image: 'https://b.zmtcdn.com/data/pictures/chains/2/308022/dabd30bd0b000ea859ada9a08a0132fc.jpg'
},{
name: 'Barbeque Nation',
address: 'SCO 39, Madhya Marg, Sector 26, Chandigarh',
location: 'Sector-26',
category: 'Casual Dining	',
vote: '4.5',
cuisines: 'North Indian, Chinese',
cost: '1300',
hours: '12 Noon to 3 PM, 6:30 PM to 11 PM(Mon-Sun)',
image: 'https://b.zmtcdn.com/data/pictures/chains/2/308022/dabd30bd0b000ea859ada9a08a0132fc.jpg'
},{
name: 'Garam Dharam',
address: 'SCO 8, Madhya Marg, Sector 26, Chandigarh',
location: 'Sector-26',
category: 'Casual Dining',
vote: '3.8',
cuisines: 'North Indian',
cost: '2200',
hours: ' 11 AM to 11 PM (Mon-Sun)',
image: 'https://b.zmtcdn.com/data/pictures/chains/2/308022/dabd30bd0b000ea859ada9a08a0132fc.jpg'
},{
name: 'All Day 99',
address: 'SCO 676, Sector 70, Mohali',
location: 'Sector 70',
category: 'Casual Dining',
vote: '4.2',
cuisines: 'North Indian, Mughlai, South Indian',
cost: '500',
hours: '12 Noon to 1 AM (Mon-Sun)',
image: 'https://b.zmtcdn.com/data/pictures/chains/2/308022/dabd30bd0b000ea859ada9a08a0132fc.jpg'
}];
});
// $('.login-form').submit(function(ev){
// //  ev.preventDefault(); // to stop the form from submitting
// /* Validations go here */
// this.submit(); // If all the validations succeeded
//       $('.login').addClass('hidden');
//       $('.main').removeClass('hidden');
// });
// var data = '{"inputs":[{"data":{"image":{"url":"http://noblepig.com/images/2016/06/Avocado-and-Three-Bean-Salad-is-perfect-for-a-summertime-barbecue-side-dish.JPG"}}}]}'
// $.ajax({
// 	'type': 'POST',
// 	'url': 'https://api.clarifai.com/v2/models/bd367be194cf45149e75f01d59f77ba7/outputs',
// 	'headers': {
// 		'Authorization': 'be3d9237f59a47baaade167c8679c0dd',
// 		'Content-Type': 'application/json'
// 	},
// 	'data': data,
// 	success: ,
//     error:
// })
