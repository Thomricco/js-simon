function generaNumeri(minNumero, maxNumero) {
    const numbers = [];

    while(numbers.length < 5) {
        const randomNum = Math.round(Math.random() * (maxNumero - minNumero)) + minNumero;;
        if (!numbers.includes(randomNum)) {
            numbers.push(randomNum)
        }
    }

    return numbers;
}

function inserire() {
    for (let i = 0; i < 5; i++) {
        let numUtente = parseInt(prompt('inserisci uno dei cinque numeri'));
        numberListUtente.push(numUtente);
        if (numbers.includes(numUtente)) {
            numEsatti.push(numUtente);
        }
    }
}

function off() {
    outputHtml.innerHTML = '';
};

function mostraNumeriEsatti(){
    outputHtml.innerHTML = `i tuoi numeri sono: ${numberListUtente}, quelli esatti:${numEsatti}`;
}



const numberListUtente = [];
// contiene i numeri scelti dall'utente che fanno parte dei numeri esatti
const numEsatti = [];
let numbers = generaNumeri(1, 100);
console.log(numbers)
const outputHtml = document.querySelector('.numeri');
outputHtml.innerHTML = `hai 30 secondi per memorizzare i numeri <br/> i numeri sono: ${numbers}`;
setTimeout(off, 30000);
setTimeout(inserire, 30000);
setTimeout(mostraNumeriEsatti, 30000);
console.log(numberListUtente);
console.log(numEsatti);
