/**
 * 相册插件
 */
angular.module('ngCordovaImage',['ionic','ngCordova'])
  .controller('ImageCtrl',function ($scope,$cordovaImagePicker) {
    $scope.images_list = [];
    $scope.images_test = [];
    document.addEventListener("deviceready",function () {
      var options = {
        maximumImagesCount:10,
        width:100,
        height:100,
        quality:80
      };

      $scope.openImage = function () {
        $cordovaImagePicker.getPictures(options).then(function(results){
          for(var i = 0;i<results.length;i++){
            $scope.images_list.push(results[i]);
          }
        },function (error) {
          //error getting photos
        });
      };
    },false);

    $scope.testImagePicker = function () {
      var image = document.getElementById('myImage');
      image.src="img/ionic.png";
      $scope.images_test.push('img/logo.png');
      console.log("按钮测试，成功！dd");
    }
  }
);
