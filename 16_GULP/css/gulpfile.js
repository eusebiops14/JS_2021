const {series, parallel} = require('gulp');
const gulp = require('gulp');
const sass = require('gulp-sass');
const uglifycss = require('gulp-uglifycss');
const concat = require('gulp-concat');


function transformacaoCSS() {
    return gulp.src('src/sass/index.scss')
        .pipe(sass().on('error', sass))
        .pipe(uglifycss({"uglyComments" : true}))
        .pipe(concat('estilo.min.css'))
        .pipe(gulp.dest('build/css'))
}

exports.default = series (transformacaoCSS);

/* ATENÇÃO: Para esse código (linha 8 a 14) funcionar corretamente foi necessário instalar o "gulp-sass" na pasta raiz através do seguinte comando:
npm install gulp-sass --save -dev
Sem esse pacote instalado o código não funciona e isso não é mencionado pelo professor na aula 297 */

function CopiarHTML()  {
    return gulp.src('src/index.html')
        .pipe(gulp.dest('build')) /*pega o arquivo index.html e copia para a pasta de destino build */
    

}

module.exports.default = parallel (transformacaoCSS, CopiarHTML);