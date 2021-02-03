import {Todo} from './components/Todo.js';

const blynai = new Todo('Blynu kepimas');

blynai.add('Uzmaisyti tesla');
blynai.add('Ijungti kaitlente');
blynai.add('Istraukti keptuve');
blynai.add('Ipilti tesla i ketuve');
blynai.add('Apversti blynus');
blynai.add('Isimti blynus');
blynai.add('Isjungti kaitlente');

blynai.edit(0, 'Isplauti dubeni ir uzmaisyti tesla');


blynai.remove(4);
blynai.taskCompleted(2);
blynai.taskCompleted(4);



blynai.summary();


// console.log(blynai.list);

blynai.print();
blynai.printCompletedOnly();
blynai.printNotCompletedOnly();

console.clear();


const a = [1, 2, 3, 4, 5, 6, 7, 8, 9 , 10];
console.log(a);

// kelimas kvadratu
const aKvadratu = [];

for (let i = 0; i < a.length; i++) {
    aKvadratu.push(a[i] * a[i])
}
console.log(aKvadratu);


// const bMap = a.map((number) => {return number * number});
// console.log(bMap);
// n = number
// kelimas kvadratu
const bMap = a.map(n =>  n * n);
console.log(bMap);

const lyginiai = [];
for (let i=0; i<a.length; i++) {
    if (a[i] % 2===0){
        lyginiai.push(a[i]);
    }
}
console.log(lyginiai);
//lyginiu skaiciu istraukimas

const cFilter = a.filter(n => n%2===0);
console.log(cFilter);

// lyginiu skaiciu kelimas kvadratu
const lyginiuKvadratai = [];
for (let i = 0; i<a.length; i++) {
    if (a[i] % 2===0) {
        lyginiuKvadratai.push(a[i] * a[i]);
    }
}
console.log(lyginiuKvadratai);

const dMapFilter = a.filter(n => n % 2===0).map(n => n * n);
console.log(dMapFilter);



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

// function daugyba(a = 1000, b = 1) {
//     return a * b;
// }

// console.log(daugyba (4, 5));
// console.log(daugyba (4));

// console.log(daugyba (2, 7));
// console.log(daugyba (2));

// console.log(daugyba ());

// function labas(name = 'zmogau') {
//     console.log(`Labas, ${name}!`)
// }

// labas('Petrai')
// labas('Onute')
// labas()



// ARROW FUNCTIONS

// function suma(a, b){
//     return a +b;
// }
// console.log(suma(4, 5));

// const skirtumas = function  (a, b){
//     return a - b;
// }
// console.log(skirtumas(4, 5));

// //arrow funkcija
// const daugyba = (a, b) =>{
//     return a * b;
// }
// console.log(daugyba(4, 5));

// const dalyba = (a, b) => a /  b;
// console.log(dalyba(4, 5));
// // jeigu veinas parametras galima nerasyti skliaustu
// const kvadratu = a => a *  a;
// console.log(kvadratu(4));



