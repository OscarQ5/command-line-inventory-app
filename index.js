const readline = require("readline")
const chalk = require("chalk");
const inform = console.log
const { readJSONFile, writeJSONFile, addToInventory, getInventory } = require("./src/helpers")
const { viewVehicleDetails } = require("./src/view")
const { createVehicle } = require("./src/create")
const { listVehicles } = require("./src/list")
const { deleteVehicle } = require("./src/delete")
const { updateVehicle } = require("./src/update")

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

function run(){
    const command = process.argv[2];
    switch (command) {
        case "list":
            listVehicles()
            break;
        case "view":
            const viewId = process.argv;
            viewVehicleDetails(viewId);
            break;
        case "delete":
            const deleteId = process.argv;
            deleteVehicle(deleteId)
            break;
        case "update":
            const updateId = process.argv;
            updateVehicle(updateId)
            break;
        case "create":
            createVehicle()
            break;
        default:
            inform("Invalid command, Please try again.\n")
            break;
    }
}

run();