
//获取gulp对象
var gulp = require("gulp");


//导入插件
var uglify = require("gulp-uglify");		//js压缩插件
var babel = require("gulp-babel");		    //es6转es5
var minifyCss = require('gulp-minify-css'); //css压缩插件


//定义任务


//js es6转es5
gulp.task("jsTask",function(){
	gulp.src("src/js/*")
		.pipe( babel( {"presets":["es2015"]} ) )	
		.pipe( uglify() )
		.pipe( gulp.dest("dest/js") );
})

//css压缩
gulp.task("cssTask",function(){
	gulp.src("src/css/game-plane.css")
		.pipe( minifyCss() )
		.pipe( gulp.dest( "dest/css" ) );
})


//默认任务
// gulp.task("default",["jsTask"]);
gulp.task("default",["cssTask"]);






