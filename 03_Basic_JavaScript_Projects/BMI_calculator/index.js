// type of calculation -->
let generalCalculation = true
let metricCalculation = false

// Selecting Elements --->

const weight1 = document.querySelector("#weight1")
const height1 = document.querySelector("#height1")
const weight2 = document.querySelector("#weight2")
const height2 = document.querySelector("#height2")
const calculate1 = document.querySelector("#calculate1")
const calculate2 = document.querySelector("#calculate2")
const result = document.getElementsByClassName("result")
const conclusion = document.querySelector("#conclusion")
const reset = document.querySelector("#reset")
const general = document.querySelector("#general-button")
const metric = document.querySelector("#metric-button")
const weightUnit = document.getElementById("weightUnit")
const heightUnit = document.getElementById("heightUnit")

// Calculation -->


    calculate1.addEventListener("click", () => {
        calculate(weight1, height1, 0)
    })

    calculate2.addEventListener("click", () => {
          let weight = 0
          let height = 0 
          calculate(weight2, height2, 1)
    })

// function to calculate --->

function calculate(weight, height, indexNumber) { 
    let BMI = (weight.value / (height.value * height.value)).toFixed(2)
                for (let i = 0; i < result.length; i++) {
                    const element = result[indexNumber]; // specific index number for specific calculator
                    if (!(weight.value === "" || height.value === "")) {
                        if (!(weight.value <= 0 || height.value <= 0)) {
                            element.innerHTML = `BMI: ${BMI} kg/m<sup>2</sup>`
                        } else {
                            element.innerHTML = "Please enter a valid number!" // if a negative integer or 0 has been input
                        }
                    } else {
                        element.innerHTML = "Please fill all the required fields!" // if either of input field is empty
                    }
                }
            
            
            // Conclusion to display after the result -->
            
            let summary1 = ""
            let summary2 = ""
            if (!(weight.value === "" || height.value === "") && !(weight.value <=0 || height.value <=0)) {
                switch (true) {
                    case BMI > 0 && BMI < 16:
                        summary1 = "You are Underweight!"
                        summary2 = "(You are Severly Thin!!)"
                        break;      
                    case BMI > 16 && BMI < 17:
                        summary1 = "You are Underweight!"
                        summary2 = "(You are Moderately Thin!!)"
                        break;  
                    case BMI > 17 && BMI < 18.5:
                        summary1 = "You are Underweight!"
                        summary2 = "(You are Mildly Thin!!)"
                        break;    
                    case BMI > 18.5 && BMI < 25:
                        summary1 = "You are Normal."
                        break;    
                    case BMI > 25 && BMI < 30:
                        summary1 = "You are Overweight!"
                        break;    
                    case BMI > 30 && BMI < 35:
                        summary1 = "You are Obese!"
                        summary2 = "(Class I Obesity!)"
                        break;    
                    case BMI > 35 && BMI < 40:
                        summary1 = "You are Obese!"
                        summary2 = "(Class II Obesity!)"
                        break;    
                    case BMI >= 40:
                        summary1 = "You are Obese!"
                        summary2 = "(Class III Obesity!)"
                        break; 
                }
            } 
            conclusion.innerHTML = `<span>${summary1}</span><span>${summary2}</span>`
        
    
        // reset -->
    
        const nav = document.querySelector("nav")
        nav.style.visibility = "visible" // once a calculation is done, it should be displayed
    
        reset.addEventListener("click", () => {
            height.value = ""
            weight.value = ""
            Array.from(result).map((ele) => {
               ele.innerHTML = ""
            })
            conclusion.textContent = ""
    
            nav.style.visibility = "hidden" // once everything is set to their initial value, the reset button should again disappear!
        })
}    

// different calculators --->

general.addEventListener("click", () => {
    generalCalculation = true
    metricCalculation = false
    let general = document.getElementById("general-calculator")
    general.style.visibility = "visible"
    let metric = document.querySelector("#metric-calculator")
    metric.style.visibility = "hidden"
})

metric.addEventListener("click", () => {
    metricCalculation = true
    generalCalculation = false
    let general = document.getElementById("general-calculator")
    general.style.visibility = "hidden"
    let metric = document.querySelector("#metric-calculator")
    metric.style.visibility = "visible"
})

