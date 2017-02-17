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
