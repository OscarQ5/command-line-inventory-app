const readline = require("readline")
const chalk = require("chalk");
const { viewVehicleDetails } = require("./src/view")
const { createVehicle } = require("./src/create")
const { listVehicles, listVehiclesAfter2000 } = require("./src/list")
const { deleteVehicle } = require("./src/delete")
const { updateVehicle } = require("./src/update")
const { addToCart, viewCart, cancelCart } = require("./src/shoppingCart")
const inform = console.log

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

function run() {
    const command = process.argv[2];
    switch (command) {
        case "list":
            listVehicles()
            break;
        case "view":
            viewVehicleDetails(process.argv);
            break;
        case "delete":
            deleteVehicle(process.argv);
            break;
        case "update":
            updateVehicle(process.argv)
            break;
        case "create":
            createVehicle();
            break;
        case "addToCart":
            addToCart(process.argv);
            break;
        case "viewCart":
            viewCart();
            break;
        case "cancelCart":
            cancelCart();
            break;
        case "vehiclesAfter2000":
            listVehiclesAfter2000();
            break;
        default:
            inform("Invalid command, Please try again.\n")
            break;
    }
}

run();