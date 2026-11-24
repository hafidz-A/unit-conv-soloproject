

const inputNumber = document.getElementById("input-number")
const convertBtn = document.getElementById("convert-btn")
const listVal = document.getElementById("list-val")

let textDefault =  `
                <li>
                    <h2>
                        Length (Meter/Feet)
                    </h2>
                    <p>
                        (input your number)
                    </p>
                </li>
                <li>
                    <h2>
                        Volume (Liters/Gallons)
                    </h2>
                    <p>
                        (input your number)
                    </p>
                </li>
                <li>
                    <h2>
                        Mass (Kilograms/Pounds)                    
                    </h2>
                    <p>
                        (input your number)
                    </p>
                </li>
                `
listVal.innerHTML = textDefault

/*
1 meter = 3.281 feet
1 liter = 0.264 gallon
1 kilogram = 2.204 pound
*/

function convertTheNumber(number) {
    number = Number(number)
    console.log(number)
    let feetToMeter = number / 3.281
    let meterToFeet = number * 3.281

    let literToGallon = number * 0.264
    let gallonToLiter = number / 0.264

    let kiloToPound = number * 2.204
    let poundToKilo = number / 2.204

    return { 
        feetToMeter, 
        meterToFeet, 
        literToGallon, 
        gallonToLiter, 
        kiloToPound, 
        poundToKilo
     }
}

convertBtn.addEventListener("click", function() {
    let valueConverted = convertTheNumber(inputNumber.value)

    for (const key in valueConverted) {
        valueConverted[key] = valueConverted[key].toFixed(3)
    }

    textDefault =  `
                <li>
                    <h2>
                        Length (Meter/Feet)
                    </h2>
                    <p>
                        ${inputNumber.value} meters  = ${valueConverted.meterToFeet} feet | ${inputNumber.value} feet = ${valueConverted.feetToMeter} meters
                    </p>
                </li>
                <li>
                    <h2>
                        Volume (Liters/Gallons)
                    </h2>
                    <p>
                        ${inputNumber.value} liters  = ${valueConverted.literToGallon} gallons | ${inputNumber.value} gallons = ${valueConverted.gallonToLiter} liters
                    </p>
                </li>
                <li>
                    <h2>
                        Mass (Kilograms/Pounds)                    
                    </h2>
                    <p>
                        ${inputNumber.value} kilos  = ${valueConverted.kiloToPound} pounds | ${inputNumber.value} pounds = ${valueConverted.poundToKilo} kilos
                    </p>
                </li>
                `

    listVal.innerHTML = textDefault
})

