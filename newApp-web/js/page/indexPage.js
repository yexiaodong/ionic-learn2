app.constant('title','首页');//设置页面标题，【必须】

//九宫格
app.controller('gridCtrl',function ($scope) {
    $scope.grids = [
        {
            href:'index.html',
            title:'轮播',
            icon:"ion-home"
        },
        {
            href:'cards.html',
            title:'卡片-Cards',
            icon:"ion-social-angular"
        },
        {
            href:'cardsHeader.html',
            title:'卡片-带头部',
            icon:"ion-social-youtube"
        },
        {
            href:'input.html',
            title:'表单',
            icon:"ion-erlenmeyer-flask"
        }
    ];
});
