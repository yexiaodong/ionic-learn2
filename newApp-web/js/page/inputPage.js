app.constant('title','卡片-带头部');//设置页面标题，【必须】

//卡片列表
app.controller('inputCtrl',function ($scope) {
    $scope.obj;
    $scope.submitForm = function () {
        if(doIsNull($scope.obj)){
            alert('请输入数据！')
            return;
        }
        var show = '姓名：' + ($scope.obj.name || '');
        show += '，性别：' + ($scope.obj.sex || '');
        show += '，电话：' + ($scope.obj.phone || '');
        show += '，职业：' + ($scope.obj.job || '');
        show += '，邮箱：' + ($scope.obj.email || '');
        alert(show);
    }
});
