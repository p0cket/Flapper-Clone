angular.module('flapperNews', [])
.controller('MainCtrl', [
'$scope',
function($scope){
  $scope.test = 'Hello world!';

  $scope.posts = [
{title: 'post 1', upvotes: 5},
{title: 'post 2', upvotes: 2},
{title: 'post 3', upvotes: 15},
{title: 'post 4', upvotes: 9},
{title: 'post 5', upvotes: 4}
];
// figure out why this goes within $scope as oposed to outside this function
$scope.addPost = function(){
  //don't let them make an empty post
  if(!$scope.title || $scope.title === '') { return; }
  //we take the post text from $scope.title, which we then clear
  $scope.posts.push({title: $scope.title, upvotes: 0});
  $scope.title = '';
};

$scope.incrementUpvotes = function(post) {
  post.upvotes += 1;
};

}]);
