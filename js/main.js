import {Todo} from './components/Todo.js';

const randomUzduotys = new Todo('Random uzduotys');
const namuDarbai = new Todo('Namu darbai');


//console.log(randomUzduotys.summary());
randomUzduotys.summary();

randomUzduotys.add('Sukurti pirma uzduoti');
namuDarbai.add('Susitvarkyti serloko projekta');
console.log(namuDarbai);

randomUzduotys.add('Uzmaisyti tesla');
randomUzduotys.add('Nusiskusti');
console.log(randomUzduotys);


// console.log(randomUzduotys.name);
// console.log(randomUzduotys.list);

// console.log(namuDarbai.summary());
// console.log(namuDarbai.name);
// console.log(namuDarbai.list);

//Namu darbai sarase yra 0 uzduociu.



