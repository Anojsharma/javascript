const temperature = document.getElementById("temperature"); 
const unit = document.getElementById("unit"); 
const convertBtn = document.getElementById("convert"); 
const result = document.getElementById("result"); 

convertBtn.addEventListener("click", function () { 
    const value = Number(temperature.value);
     if (temperature.value === "") {
         result.textContent = "Please enter a temperature"; return; } 
         if (unit.value === "celsius") {
             const fahrenheit = (value * 9 / 5) + 32; 
             result.textContent = `${fahrenheit.toFixed(2)} °F`; } 
             else { const celsius = (value - 32) * 5 / 9; 
                result.textContent = `${celsius.toFixed(2)} °C`; } });