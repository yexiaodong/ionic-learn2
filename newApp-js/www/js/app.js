// Ionic Starter App

// angular.module is a global place for creating, registering and retrieving Angular modules
// 'starter' is the name of this angular module example (also set in a <body> attribute in index.html)
// the 2nd parameter is an array of 'requires'
angular.module('starter', ['ionic'])

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


/*
 document.addEventListener("deviceready", function () {
 $cordovaPlugin.someFunction().then(success, error);
 }, false);

 // OR with IONIC

 $ionicPlatform.ready(function() {
 $cordovaPlugin.someFunction().then(success, error);
 });
 */

/*
*  ngCordova的相机插件
* */
var myCordova = angular.module('myCordova',['ionic','ngCordova']);
myCordova.controller('CameraCtrl',function ($scope,$cordovaCamera) {
  document.addEventListener("deviceready",function () {
    var options = {
      quality:50,
      destinationType: Camera.DestinationType.DATA_URL,
      sourceType: Camera.PictureSourceType.CAMERA,
      allowEdit: true,
      encodingType: Camera.EncodingType.JPEG,
      targetWidth: 100,
      targetHeight: 100,
      popoverOptions: CameraPopoverOptions,
      saveToPhotoAlbum: false,
      correctOrientation:true
    };

    $scope.openCamera = function () {
      $cordovaCamera.getPicture(options).then(function (imageDate) {
        var image = document.getElementById('myImage');
        image.src="data:image/jpeg;base64," + imageDate;
      },function (err) {
        //error
      });
    }
  },false);

  $scope.testFunc = function () {
    var image = document.getElementById('myImage');
    image.src="img/ionic.png";
    console.log("按钮测试，成功！");
  }
});

/**
 * 系统文件管理
 */
angular.module('ngCordovaFile',['ionic','ngCordova'])
  .controller('FileCtrl',function ($scope,$cordovaFile) {
    $scope.fileStr = [];
    var num = 0;
    document.addEventListener("deviceready",function () {
      //获取设备磁盘总空闲空间
      $scope.testGetFreeDiskSpace = function(){
        $cordovaFile.getFreeDiskSpace().then(function(success){
          $scope.fileStr.push(success);
        },function (error) {
        });
      }

      //检查目录
      $scope.checkDir=function(){
        $cordovaFile.checkDir(cordova.file.dataDirectory, "dir/other_dir")
          .then(function (success) {
            $scope.fileStr.push(success);
          }, function (error) {
            // error
          });
      }
      //测试方法
      $scope.testFile2 = function () {
        num ++;
        var image = document.getElementById('myImage');
        image.src="img/ionic.png";
        $scope.fileStr.push("测试按钮:" + num);
        console.log("按钮测试，成功！dd");
      }
    },false);

    $scope.testFile = function () {
      num ++;
      var image = document.getElementById('myImage');
      image.src="img/ionic.png";
      $scope.fileStr.push("测试按钮:" + num);
      console.log("按钮测试，成功！dd");
    }
  }
);

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
