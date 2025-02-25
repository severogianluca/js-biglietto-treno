
let eta = prompt('Inserisci la tua eta');
let km = prompt('Inserisci quanti km vuoi percorrere');
let prezzo = km *  (0.21);
let sconto;


eta = parseInt(eta);
km = parseInt(km);

console.log(eta);
console.log(km);


// logica per lo sconto
if(eta < 18){
    sconto = ((prezzo * 20) / 100);

}else if(eta >= 65){
    sconto = ((prezzo * 40) / 100);
    
}else{
    sconto = 0;
}

prezzo = prezzo - sconto;
prezzo = prezzo.toFixed(2);
console.log(prezzo);
console.log(`il prezzo del biglietto è di: ${prezzo} €`)
