function convert() {
    const inputValue = parseFloat(document.getElementById("input-value").value);
    const fromUnit = document.getElementById("from-unit").value;
    const toUnit = document.getElementById("to-unit").value;

    if (isNaN(inputValue)) {
        document.getElementById("output-value").textContent = "Invalid";
        return;
    }

    const conversionFactors = {
        cm: 0.01,
        m: 1,
        km: 1000,
        inch: 0.0254,
        feet: 0.3048,
        yard: 0.9144,
        mile: 1609.34
    };

    const valueInMeters = inputValue * conversionFactors[fromUnit];
    const outputValue = valueInMeters / conversionFactors[toUnit];

    document.getElementById("conversion-formula").textContent = '1 ' + fromUnit + ' = ' + conversionFactors[fromUnit].toFixed(4) + 'm';
    document.getElementById("output-value").textContent = outputValue.toFixed(4);
}
document.getElementById("convert-btn").addEventListener("click", convert);