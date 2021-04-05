//gulp é um frameWork baseado em funções(tarefas);
//Essas tarefas podem ser executadas simuntaneamente ou sequencialmente

const gulp = require('gulp');
//const {series} = require('gulp');

const series = gulp.series;

function copiar(cb) {
    console.log('Tarefa Copiar');
    return cb();
}

module.exports.default = series(copiar);
