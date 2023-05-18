let km_percorsi = parseInt(prompt('Quanti chilometri dovrai percorrere?'))
let eta = parseInt(prompt('Quanti anni hai?'))
let prezzo = (km_percorsi * 0.21)


if (isNaN(km_percorsi) || isNaN(eta)){
    alert('Uno dei due caratteri non è un numero');
}

else if (eta < 18){
    prezzo = prezzo * 0.8
    prezzo = prezzo.toFixed(2)
    console.log(prezzo)
}

else if (eta > 65){
    prezzo = prezzo * 0.6
    prezzo = prezzo.toFixed(2)
    console.log(prezzo)
}

else{
    prezzo
    console.log(prezzo)
}

document.getElementById('biglietto').innerHTML= prezzo
