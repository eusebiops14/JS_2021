// ******************     AULA 293 *******************************************
//babel para javaScript: converte os recursos mais novos do JS em recursos mais velhos e mais compativeis de modo que o 
//códiogo continue funcionando mas com um grau mais elevado de compatibilidade com os diferentes navegadores

const {series} = require('gulp');
const gulp = require('gulp');
const concat = require('gulp-concat');
const uglify = require('gulp-uglify');
const babel = require('gulp-babel');

function padrao(cb) { //cb stands for CallBack function
    gulp.src('src/**/*.js')//seleciona todos os arquivos do tipo .js dentro da pasta source
        .pipe(babel({ //babel vide linha 2
            comments:false, //Retira comentarios do codigo
            presets:["env"] //env é a versao mais recente do JS
        }))

        .pipe(uglify()) //minifica o código (remove todos os espaços em branco)
        .on('error', err => console.log(erro))
        .pipe(concat('codigo.min.js')) //coloca todo o codigo em uma linha unica sem espaco dentro do arquivo js codigo.min.js
        .pipe(gulp.dest('build')) //cria a pasta de destino 'build' e coloca o resultado da tareda gulp dentro dessa pasta
    return cb();
    }

    module.exports.default = series(padrao); //poderia usar pararell