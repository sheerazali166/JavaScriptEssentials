
let grocery_one;
let grocery_two;
let grocery_three;
let total;

function calculateTotalAmount() {

    grocery_one = parseFloat(document.getElementById('grocery_input_1').value);
    grocery_two = parseFloat(document.getElementById('grocery_input_2').value);
    grocery_three = parseFloat(document.getElementById('grocery_input_3').value);

    total = grocery_one + grocery_two + grocery_three;

    document.getElementById('grocery_result').innerText = `The total amount is :$ ${total}`;
}
