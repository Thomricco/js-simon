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

let numbers = generaNumeri(1, 100)
console.log(numbers)

const outputHtml = document.querySelector('.numeri');

outputHtml.innerHTML = `hai 30 secondi per memorizzare i numeri <br/> i numeri sono: ${numbers}`;

setTimeout(off, 30000);

function off() {
    outputHtml.innerHTML = '';
};


const numberListUtente = [];

setTimeout(inserire, 30000);

function inserire() {
    for (let i = 0; i < 5; i++) {
        let numUtente = parseInt(prompt('inserisci uno dei cinque numeri'));
        numberListUtente.push(numUtente);
        
    }

    
}

console.log(numberListUtente);

if (numberListUtente == numbers) {
    
}
