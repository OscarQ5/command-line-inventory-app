const chalk = require("chalk");
const { writeJSONFile, getInventory } = require("./helpers");

function deleteVehicle(args) {
    const id = args[3];
    const inventoryData = getInventory();
    const index = inventoryData.vehicles.findIndex((v) => v.id === id);


    if (index !== -1) {
        console.log(chalk.bold('\n--- Delete Vehicle ---\n'));
        console.log(inventoryData.vehicles.splice(index, 1));
        writeJSONFile(inventoryData);

        console.log(chalk.green('\nVehicle deleted successfully!\n'));
    } else {
        console.log(chalk.red('Vehicle not found.\n'));
    }
}

module.exports = { deleteVehicle }