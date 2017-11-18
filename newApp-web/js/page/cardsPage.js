app.constant('title','卡片-Cards');//设置页面标题，【必须】

//卡片列表
app.controller('cardsCtrl',function ($scope) {
    $scope.items = [
        {
            href:'index.html',
            title:'湛江市公安局“飓风2017”打击涉毒违法犯罪新闻发布会',
            time:"2017-11-10",
            status:'图片新闻'
        },
        {
            href:'index.html',
            title:'湛江市公安局“飓风2017”打击涉毒违法犯罪新闻发布会',
            time:"2017-10-30",
            status:'图片新闻'
        },
        {
            href:'index.html',
            title:'湛江市公安局“飓风2017”打击涉毒违法犯罪新闻发布会',
            time:"2017-10-20",
            status:'警务动态'
        },
        {
            href:'index.html',
            title:'湛江市公安局“飓风2017”打击涉毒违法犯罪新闻发布会',
            time:"2017-08-10",
            status:'图片新闻'
        },
        {
            href:'index.html',
            title:'湛江市公安局“飓风2017”打击涉毒违法犯罪新闻发布会',
            time:"2017-08-10",
            status:'警务动态'
        }
    ];
});
