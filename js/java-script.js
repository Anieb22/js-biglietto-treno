let km_percorsi = parseInt(prompt('Quanti chilometri dovrai percorrere?'))
let eta = parseInt(prompt('Quanti anni hai?'))
let prezzo = (km_percorsi * 0.21)
let prezzo_finale = prezzo.toFixed(2)

if (isNaN(km_percorsi) || isNaN(eta)){
    alert('Uno dei due caratteri non è un numero');
}

else if (eta < 18){
    (prezzo * 0.8)
    console.log(prezzo)
}

else if (eta > 65){
    (prezzo * 0.6)
    console.log(prezzo)
}

else{
    prezzo
    console.log(prezzo)
}

document.getElementById('biglietto').innerHTML= prezzo_finale
