/* Instalar pacote node-schedule:
npm i node-schedule@1.3.0 -E */

const schedule = require('node-schedule');

const tarefa1 = schedule;schedule.scheduleJob('*/5 * 21 * * 1', function () {
    console.log('Executando tarefa 1', new Date().getSeconds());
})

setTimeout(function () {
    tarefa1.cancel();
    console.log('Cancelando tarefa 1!');

}, 2000);

const regra = new schedule.RecurrenceRule();
regra.dayOfWeek = [new schedule.Range(1, 5)];
regra.hour = 12;
regra.second = 30;

const tarefa2 = schedule.scheduleJob(regra, () => {
    console.log('Executando Tarefa 2!', new Date().getSeconds())
})