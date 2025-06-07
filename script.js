//Making  variables
let expression = "";
let lastOperator = "";
let firstValue = "";
let operators = ['+', '-', '*', '/'];

//Making screen in an variable to make accessing easy
const screen = document.querySelector('input');

// Making buttons in a variable to make accessing easy
const buttons = document.querySelectorAll(".btn");

//Working on functionality of Buttons
Array.from(buttons).forEach((button) => {
    button.addEventListener('click', (e) => {

        //Working on Evaluation
        if (e.target.innerHTML == '=') {
            expression = eval(expression)
            screen.value = expression;
        }
        //Working on Clear
        else if (e.target.innerHTML === 'C') {
            expression = "";
            screen.value = expression;
        }
        //Working in Backspace
        else if (e.target.innerHTML === 'B') {
            expression = expression.slice(0, -1);
            screen.value = expression;
        }
        
        // Allowing brackets to use 
        else if (e.target.innerHTML === '(' || e.target.innerHTML === ')') {
            expression += e.target.innerHTML;
            screen.value = expression;
            return;
        }
        else {
            //Adding some conditions for multiple operator
            let input = e.target.innerHTML;
            const lastChar = expression.slice(-1);

            // Prevent multiple operators
            if (operators.includes(input) && operators.includes(lastChar)) {
                expression = expression.slice(0, -1);
            }

            // Preventing multiple decimals 
            if (input == '.') {
                let i = expression.length - 1;
                while (i >= 0 && !operators.includes(expression[i])) {i--;}
                const lastNumber = expression.slice(i + 1);
                if (lastNumber.includes('.')) return;
            }

            //Preventing leading zeroes
            if (input === '0') {
                let i = expression.length - 1;
                while (i >= 0 && !operators.includes(expression[i])) {i--;}
                const lastNumber = expression.slice(i + 1);
                if (lastNumber === '0') return;
            }
            expression += e.target.innerHTML;
            screen.value = expression;
        }
    });
});
