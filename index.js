const readline = require("readline")
const chalk = require("chalk");
const inform = console.log
const { readJSONFile, writeJSONFile, addToInventory, getInventory } = require("./src/helpers")

// const rl = readline.createInterface({
//     input: process.stdin,
//     output: process.stdout,
// });

// function displayMenu() {
//     console.log(chalk.blue.bold('\n--- Vehicle Inventory Application ---\n'));
//     console.log('Please select an option:');
//     console.log('1. List Vehicles');
//     console.log('2. View Vehicle Details');
//     console.log('3. Delete Vehicle');
//     console.log('4. Update Vehicle');
//     console.log('5. Create Vehicle');
//     console.log('0. Exit\n');
// }

function handleCommand(argv){
    const command = argv[2];

    switch (command) {
        case "list":
            
            break;
        case "view":
            
            break;
        case "delete":
            
            break;
        case "update":
            
            break;
        case "create":
            
            break;
        default:
            inform("Invalid command, Please try again.\n")
    }
}

function run(){
    displayMenu();
    handleCommand(process.argv);
}

run();