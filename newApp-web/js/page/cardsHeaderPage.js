app.constant('title','卡片-带头部');//设置页面标题，【必须】

//卡片列表
app.controller('cardsCtrl',function ($scope) {
    $scope.titleName = "警务动态";
    $scope.titleHref= "cards.html";
    $scope.items = [
        {
            href:'index.html',
            title:'我市举行“119消防宣传月”活动启动仪式',
            time:"2017-11-10",
        },
        {
            href:'index.html',
            title:'黄勇武同志主持召开全市公安局长专题座谈会谋划新一年度工作思路 部署收官年底重点工作',
            time:"2017-10-30",
        },
        {
            href:'index.html',
            title:'湛江市公安局“飓风2017”打击涉毒违法犯罪新闻发布会',
            time:"2017-10-20",
        },
        {
            href:'index.html',
            title:'湛江市公安局“飓风2017”打击涉毒违法犯罪新闻发布会',
            time:"2017-08-10",
        },
        {
            href:'index.html',
            title:'湛江市公安局“飓风2017”打击涉毒违法犯罪新闻发布会',
            time:"2017-08-10",
        }
    ];
});
