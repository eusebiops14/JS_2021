//CONVERTER TYPESCRIPT PARA JAVASCRIPT

const {series} = require('gulp');
const gulp = require('gulp');
const ts = require('gulp-typescript');
const tsProject = ts.createProject('ts.config.json');

function transformacaoTS() {
    return tsProject.src()
        .pipe(tsProject())
        .pipe(gulp.dest('build'))
}

exports.default = series(transformacaoTS);

/*Esse codigo usa gulp para converter os arquivos app.ts e produto.ts em arquivos do tipo .js */