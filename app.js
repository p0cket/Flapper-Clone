angular.module('flapperNews', [])
angular.module('flapperNews', ['ui.router'])
.config([
  '$stateProvider',
  '$urlRouterProvider',
  function($stateProvider, $urlRouterProvider) {

    $stateProvider
    .state('home', {
      url: '/home',
      templateUrl: '/home.html',
      controller: 'MainCtrl'
    })
    .state('posts', {
      url: '/posts/{id}',
      templateUrl: '/posts.html',
      controller: 'PostsCtrl'
    });

    $urlRouterProvider.otherwise('home');
  }])

.factory('posts', [function(){
  var o = {
    posts: []
  };
  return o;
}])

.controller('PostsCtrl', [
'$scope',
'$stateParams',
'posts',
function($scope, $stateParams, posts){
  $scope.post = posts.posts[$stateParams.id];
}])

.controller('MainCtrl', [
'$scope',
'posts',
function($scope, posts){

$scope.test = "hello world";
$scope.posts = posts.posts;
//   $scope.posts = [
// {title: 'post 1', upvotes: 5},
// {title: 'post 2', upvotes: 2},
// {title: 'post 3', upvotes: 15},
// {title: 'post 4', upvotes: 9},
// {title: 'post 5', upvotes: 4}
// ];
// figure out why this goes within $scope as oposed to outside this function
$scope.addPost = function(){

  //add some fake data
  $scope.posts.push({
    title: $scope.title,
    link: $scope.link,
    upvotes: 0,
    comments: [
  {author: 'Joe', body: 'Cool post!', upvotes: 0},
  {author: 'Bob', body: 'Great idea but everything is wrong!', upvotes: 0}
  ]
  });

  //don't let them make an empty post
  if(!$scope.title || $scope.title === '') { return; }
  $scope.posts.push({
    title: $scope.title,
    link: $scope.link,
    upvotes: 0
  });
  //we take the post text from $scope.title and $scope.link, which we then clear
  $scope.title = '';
  $scope.link = '';
};

$scope.incrementUpvotes = function(post) {
  post.upvotes += 1;
};
}]);
