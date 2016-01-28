
var app = angular.module('yogiyo', ['ionic'])

.run(function($ionicPlatform) {
  $ionicPlatform.ready(function() {
    if(window.cordova && window.cordova.plugins.Keyboard) {
      // Hide the accessory bar by default (remove this to show the accessory bar above the keyboard
      // for form inputs)
      cordova.plugins.Keyboard.hideKeyboardAccessoryBar(true);

      // Don't remove this line unless you know what you are doing. It stops the viewport
      // from snapping when text inputs are focused. Ionic handles this internally for
      // a much nicer keyboard experience.
      cordova.plugins.Keyboard.disableScroll(true);
    }
    if(window.StatusBar) {
      StatusBar.styleDefault();
    }
  });
})

.controller('YouTubeController', ["$http", function($http){
     var vm = this;
     vm.videos = [];
     vm.youtubeParams = {
      key: 'AIzaSyAHEtr54RzlyBQJvSmhiyOeFwi9sjAglbk',
      type: 'video',
      maxResults: '5',
      part: 'id,snippet',
      q: '',
      order: 'viewCount',
      channelId: 'UCxjaeRm7vB2l5T6-46uL1tQ',
    }

    $http.get('https://www.googleapis.com/youtube/v3/search', {
        
        params:vm.youtubeParams}).success(function(response){
        angular.forEach(response.items, function(child){
       // console.log (child);
            
         vm.videos.push(child);
      });
    });

   
    
   // 
    
}])