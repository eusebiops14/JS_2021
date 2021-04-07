//gulp é um frameWork baseado em funções(tarefas) para manipular e alterar diversos tipos de arquivos;
//Essas tarefas podem ser executadas simuntaneamente ou sequencialmente
//Para executar o código com gulp, basta ir no terminal até a pasta do arquivo e digitar o comando "gulp"

const gulp = require('gulp');
const {series,parallel} = require('gulp');

//const series = gulp.series;

const antes1 = cb => {
    console.log('Tarefa antes 1');
    return cb();
}

const antes2 = cb => {
    console.log('Tarefa antes 2');
    return cb();
}

function copiar(cb) {
    gulp.src(['pastaA/arquivo1.txt','pastaA/arquivo2.txt']) //seleciona os arquivos que vamos trabalhar
    gulp.src('pastaA/**/*.txt')
        .pipe(gulp.dest('pastaB')); //copia ambos os arquivos da pastaA para a pastaB (pasta de destino)
        //.pipe(transformacao)
    return cb();
}

const fim = cb => {
    console.log('Tarefa Fim');
    return cb();
}
module.exports.default = series(
    parallel(antes1,antes2),
    copiar,
    fim,
    );
