document.addEventListener("DOMContentLoaded", function () {
    // Get DOM elements
    const costInput = document.getElementById("costPerLiter");
    const litersInput = document.getElementById("liters");
    const resultDisplay = document.getElementById("result");
    const calculateBtn = document.getElementById("calculateBtn");
  
    // Add click event listener to the button
    calculateBtn.addEventListener("click", function () {
      // Get values from inputs
      const costPerLiter = parseFloat(costInput.value);
      const liters = parseFloat(litersInput.value);
  
      // Calculate total cost
      const totalCost = (costPerLiter * liters).toFixed(2);
  
      // Display result
      resultDisplay.textContent = `Total cost: £${totalCost}`;
    });
  });
  