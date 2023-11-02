
let btn = document.querySelector(".btnPrimary")
let btnLimpar = document.querySelector(".btnLimpar")

function calcPct(x, y){
    return (y / x) * 100
}

btn.addEventListener('click', function(e){
    e.preventDefault()
    let number1 = Number(document.querySelector(".inputPrimary").value)
    let number2 = Number(document.querySelector(".inputSecundary").value)
    let result = document.querySelector("#resultado")
    let textoResult = document.querySelector("#textoResult")
    let pct = calcPct(number1, number2)
    result.textContent = `${Math.round(pct)}%`
    textoResult.textContent = `${number2} Equivale a ${Math.round(pct)}% de ${number1}`
})

btnLimpar.addEventListener('click', function(e){
    e.preventDefault()
    document.querySelector(".inputPrimary").value = ""
    document.querySelector(".inputSecundary").value = ""
    let result = document.querySelector("#resultado")
    result.textContent = `0%`
    
})
