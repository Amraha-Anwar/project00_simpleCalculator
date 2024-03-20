#! /usr/bin/env node

import inquirer from "inquirer";

const answer = await inquirer.prompt(
[   {message: "Enter the First number", type: "number", name: "firstNumber"},
    {message: "Enter the Second number", type: "number", name: "secondNumber"},
    {message: "Select the operator",
     type: "list",
     name: "operator",
     choices: ["Addition","Subtraction","Multiplication","Division"]
    }
]);

    if (answer.operator == "Addition")
{    
        console.log(answer.firstNumber + answer.secondNumber);  
}
    else if(answer.operator == "Subtraction")
{    
        console.log(answer.firstNumber - answer.secondNumber);  
}
    else if(answer.operator == "Multiplication")
{    
        console.log(answer.firstNumber * answer.secondNumber);  
}
    else if(answer.operator == "Division")
{    
        console.log(answer.firstNumber / answer.secondNumber);  
}
    else
{
        console.log("Assign any suitable operator")
};
