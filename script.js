function calculateResult(input1, input2) {
    // Convert the inputs to integers using parseInt
    let num1 = parseInt(input1);
    let num2 = parseInt(input2);

    // Check if the conversion was successful
    if (!isNaN(num1) && !isNaN(num2)) {
        // Perform the calculations
        let result = (num1 * 2) + num2;

        // Display the result using alert
        alert("The final result is: " + result);
    } else {
        // Handle invalid input
        alert("Invalid input. Please enter valid integers.");
    }
}

let n1 = prompt("1st input");
let n2 = prompt("2nd input");

calculateResult(n1, n2);

 
