var gulp = require("gulp");
var scss = require("gulp-scss");
var rename = require("gulp-rename");
var connect = require("gulp-connect");
var imagemin = require("gulp-imagemin");
var minifyCSS = require("gulp-minify-css");
//复制index.html
gulp.task("copy-html", function(){
    return gulp.src("*.html")
    .pipe(gulp.dest("dist"))
    .pipe(connect.reload());
})
//复制json数据
gulp.task("data", function(){
    return gulp.src(["*.json", "!package.json"])
    .pipe(gulp.dest("dist/data"))
    .pipe(connect.reload());
})
//复制图片
gulp.task("images", function(){
    return gulp.src("images/**/*")
    .pipe(imagemin())
    .pipe(gulp.dest("dist/images"))
    .pipe(connect.reload());
})
//复制js文件
gulp.task("scripts", function(){
    return gulp.src(["jquery/*.js", "js/*.js"])
    .pipe(gulp.dest("dist/js"))
    .pipe(connect.reload())
})
gulp.task("phps", function(){
	return gulp.src("*.php")
	.pipe(gulp.dest("dist/php"))
	.pipe(connect.reload());
})
//将scss转成css
gulp.task("scss", function(){
    return gulp.src("stylesheet/*.scss")
    .pipe(scss())
    .pipe(gulp.dest("dist/css"))
    .pipe(connect.reload());
})
//监测文件变化
gulp.task("watch", function(){
    gulp.watch("*.html", ["copy-html"]);
    gulp.watch("images/**/*", ["images"]);
    gulp.watch("*.json", ["data"]);
    gulp.watch("stylesheet/*.scss", ["scss"]);
    gulp.watch(["jquery/*.js","js/*.js"], ["scripts"]);
    gulp.watch("*.php", ["phps"]);
})
//启动服务器
gulp.task("server", function(){
    connect.server({
        root: "dist",
        port: 8888,
        livereload: true
    })
})

//默认任务
gulp.task("default", ["watch", "server"]);

//构造模块
gulp.task("build", ["copy-html", "data", "images", "scss", "scripts", "phps"], function(){
    console.log("编译成功");
})