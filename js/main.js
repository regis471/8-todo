import {Todo} from './components/Todo.js';

const blynai = new Todo('Random uzduotys');

blynai.add('Uzmaisyti tesla');
blynai.add('Ijungti kaitlente');
blynai.add('Istraukti keptuve');
blynai.add('Ipilti tesla i ketuve');
blynai.add('Apversti blynus');
blynai.add('Isimti blynus');
blynai.add('Isjungti kaitlente');

blynai.edit(0, 'Isplauti dubeni ir uzmaisyti tesla');

blynai.remove(4);
blynai.remove(0);
blynai.taskCompleted(0);

blynai.summary();


console.log(blynai.list);

blynai.print();
blynai.printCompletedOnly();





//const namuDarbai = new Todo('Namu darbai');


//console.log(randomUzduotys.summary());
//randomUzduotys.summary();

// randomUzduotys.add('Sukurti pirma uzduoti');
// namuDarbai.add('Susitvarkyti serloko projekta');
// console.log(namuDarbai);

// randomUzduotys.add('Uzmaisyti tesla');
// randomUzduotys.add('Nusiskusti');
// console.log(randomUzduotys);


// console.log(randomUzduotys.name);
// console.log(randomUzduotys.list);

// console.log(namuDarbai.summary());
// console.log(namuDarbai.name);
// console.log(namuDarbai.list);

//Namu darbai sarase yra 0 uzduociu.



// default reiksmes = 1

function daugyba(a = 1000, b = 1) {
    return a * b;
}

console.log(daugyba (4, 5));
console.log(daugyba (4));

console.log(daugyba (2, 7));
console.log(daugyba (2));

console.log(daugyba ());

