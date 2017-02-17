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
