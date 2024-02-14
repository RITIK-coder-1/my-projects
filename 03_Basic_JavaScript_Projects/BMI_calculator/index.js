// Selecting Elements --->

const weight = document.querySelector("#weight")
const height = document.querySelector("#height")
const calculate = document.querySelector("#calculate")
const result = document.querySelector("#result")
const conclusion = document.querySelector("#conclusion")

// Calculation -->

calculate.addEventListener("click", () => {
    let BMI = (weight.value / (height.value * height.value)).toFixed(2) 
    result.innerHTML = `BMI: ${BMI} kg/m<sup>2</sup>`

    // Conclusion to display after the result -->
    
    let summary1 = ""
    let summary2 = ""
    switch (true) {
        case BMI < 16:
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
    conclusion.innerHTML = `<span>${summary1}</span><span>${summary2}</span>`
})