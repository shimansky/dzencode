var gulp      = require('gulp'), // Подключаем Gulp
    less        = require('gulp-less'), //Подключаем less пакет,
    browserSync = require('browser-sync'); // Подключаем Browser Sync

gulp.task('less', function(){ // Создаем таск less
    return gulp.src('src/less/**/*.less') // Берем источник
        .pipe(less()) // Преобразуем less в CSS посредством gulp-less
        .pipe(gulp.dest('src/css')) // Выгружаем результата в папку src/css
        .pipe(browserSync.reload({stream: true})) // Обновляем CSS на странице при изменении
});

gulp.task('browser-sync', function() { // Создаем таск browser-sync
    browserSync({ // Выполняем browserSync
        server: { // Определяем параметры сервера
            baseDir: 'src' // Директория для сервера - src
        },
        notify: false // Отключаем уведомления
    });
});

gulp.task('watch', function() {
    gulp.watch('src/less/**/*.less', gulp.parallel('less')); // Наблюдение за less файлами
});
gulp.task('default', gulp.parallel('less', 'browser-sync', 'watch'));
    