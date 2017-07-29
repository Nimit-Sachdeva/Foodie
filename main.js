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
var foodieApp = angular.module('foodieApp',[]);   //We are storing the value and from the ng-app in html file
console.log(foodieApp);
foodieApp.controller('mainController',function($scope) {
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
