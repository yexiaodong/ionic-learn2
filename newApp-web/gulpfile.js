var gulp=require('gulp');

//引入组件
var sass=require('gulp-sass');

/*start-配置信息（根据项目调整）*/
var ionicPaths='css/scss-ionic/*.scss';//Sass路径，实时监控路径
var pagePaths='css/scss-page/*.scss';//Sass路径，实时监控路径
var sassIonic='css/scss-ionic/ionic.scss';//Sass主文件
var sassPage='css/scss-page/page.scss';//Sass主文件
var savePath='css';//文件存放路径
/*end-配置信息（根据项目调整）*/

//默认执行任务
gulp.task('default',['sassIonic','sassPage','watch'],function(){
    console.log('完成');
    return;
});


//sass-ionic
gulp.task("sassIonic",function(){
    return gulp.src(sassIonic)
        .pipe(sass({outputStyle: 'compressed'}).on('error', sass.logError))
        .pipe(gulp.dest(savePath));
});

//sass-page
gulp.task("sassPage",function(){
    return gulp.src(sassPage)
        .pipe(sass({outputStyle: 'compressed'}).on('error', sass.logError))
        .pipe(gulp.dest(savePath));
});

//实时监测
gulp.task('watch',function(){
    gulp.watch(ionicPaths,['sassIonic']);
    gulp.watch(pagePaths,['sassPage']);
});
