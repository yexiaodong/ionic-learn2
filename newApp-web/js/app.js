var app = angular.module('app',[]);

//头部
app.controller('headerCtrl',function ($scope,title) {
    $scope.headerTitle = title;
});

//底部
app.controller('footerCtrl',function ($scope) {
    $scope.footerTabs = [
        {
            href:'index.html',
            title:'首页',
            icon:"ion-home"
        },
        {
            href:'index.html',
            title:'NG插件',
            icon:"ion-social-angular"
        },
        {
            href:'index.html',
            title:'视频播放',
            icon:"ion-social-youtube"
        },
        {
            href:'test.html',
            title:'其他研究',
            icon:"ion-erlenmeyer-flask"
        },
    ];
});