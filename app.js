import inquirer from 'inquirer';
import chalk from 'chalk';
console.log(chalk.bold.blue('!!!WELCOME BMI CALCULATOR!!!'));
const weightInKg = await inquirer.prompt({
    name: "weight",
    type: "number",
    message: "Enter your weight in Kg:"
});
const heightInMeters = await inquirer.prompt({
    name: "height",
    type: "number",
    message: "Enter your height in meters:"
});
const age = await inquirer.prompt({
    name: "age",
    type: "number",
    message: "Enter your age:"
});
const gender = await inquirer.prompt({
    name: "gender",
    type: "list",
    message: "Select your Gender",
    choices: ["Female", "Male"]
});
// conditional statement 
if (weightInKg.weight === "Female") {
    console.log(weightInKg.weight / (heightInMeters.height * heightInMeters.height));
}
else if (weightInKg.weight === "Male") {
    console.log(weightInKg.weight / (heightInMeters.height * heightInMeters.height));
}
console.log(chalk.keyword('orange')('Your BMI is ', weightInKg.weight / (heightInMeters.height * heightInMeters.height)));
