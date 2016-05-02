// Gulp Plugins
var gulp			= require("gulp"),
	toHTML			= require("gulp-jade"),
	toCSS			= require("gulp-ruby-sass"),
	watch			= require("gulp-watch"),
	browserSync		= require("browser-sync").create();

// Main Task
gulp.task("build", ["markup:build", "scripts:build", "styles:build", "images:build"]);
gulp.task("default", ["build", "watch", "sync"]);


// Path Variables
var source = {
		markup: "source/*.jade",
		scripts: "source/scripts/*.js",
		styles: "source/styles/*.sass",
		images: "source/images/**/*.*"
	},
	public = {
		markup: "public/",
		scripts: "public/scripts/",
		styles: "public/styles/",
		images: "public/images/"
	};

// Detailed Tasks
gulp.task("markup:build", function() {
	// Markup: Jade -> HTML
	gulp.src(source.markup)
		.pipe(toHTML({
			pretty: true
		}))
		.pipe(gulp.dest(public.markup));
});

gulp.task("scripts:build", function() {
	// JS -> minify -> JS
	gulp.src(source.scripts)
		.pipe(gulp.dest(public.scripts));
});

gulp.task("styles:build", function() {
	// SASS -> minify -> CSS
	return toCSS(source.styles)
		.on('error', toCSS.logError)
		.pipe(gulp.dest(public.styles));
});

gulp.task("images:build", function() {
	// Images -> Images
	gulp.src(source.images)
		.pipe(gulp.dest(public.images));
});

// Watch Task
gulp.task("watch", function () {
	watch([source.markup], function (event, cb) {
		gulp.start("markup:build");
	});
	watch([source.scripts], function (event, cb) {
		gulp.start("scripts:build");
	});
	watch([source.styles], function (event, cb) {
		gulp.start("styles:build");
	});
	watch([source.images], function (event, cb) {
		gulp.start("images:build");
	});
});

// Browser Sync
gulp.task("sync", function() {
	browserSync.init({
		server: "public"
	});
	browserSync.watch("public/**/*.*").on("change", browserSync.reload);
});