//Ficha corporal
let nome = prompt("Coloque seu nome: ")
let idade = parseInt(prompt("Coloque sua idade:"))
let peso = Number(prompt("coloque seu peso: "))
let altura = Number(prompt("coloque sua altura:"))
let imc = parseInt(peso / (altura * altura))


document.body.innerHTML += `<p>Olá! ${nome}, Sua idade é: ${idade}, Seu peso é: ${peso} Kg,
 Sua altura é:  ${altura} e Seu IMC é: ${imc}</p>`;