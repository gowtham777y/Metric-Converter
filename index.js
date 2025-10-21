/*
1 meter = 3.281 feet
1 liter = 0.264 gallon
1 kilogram = 2.204 pound
*/

const convertBtn = document.getElementById("convert-btn")
const inputVal = document.getElementById("input-field")
const lengthVal = document.getElementById("length-conversion")
const volumeVal = document.getElementById("volume-conversion")
const massVal = document.getElementById("mass-conversion")

convertBtn.addEventListener("click",function(){
    if (inputVal.value){
        renderLength(inputVal.value)
        renderVolume(inputVal.value)
        renderMass(inputVal.value)
    }
    inputVal.value = ""
})

function renderLength(value){
    lengthVal.textContent = `${value} meters = ${Number(value*3.281).toFixed(3)} feets | ${value} feet = ${Number(value/3.281).toFixed(3)} meters`
}

function renderMass(value){
    massVal.textContent = `${value} kilos = ${Number(value*2.204).toFixed(3)} pounds | ${value} pounds = ${Number(value/2.204).toFixed(3)} kilos`
}

function renderVolume(value){
    volumeVal.textContent = `${value} litres = ${Number(value*0.264).toFixed(3)} gallons | ${value} gallon = ${Number(value/0.264).toFixed(3)} litres`
}