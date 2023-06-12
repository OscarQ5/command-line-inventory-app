const chalk = require("chalk");
const { writeJSONFile, getInventory } = require("./helpers");

function updateVehicle(args) {
    console.log(chalk.bold('\n--- Update Vehicle ---\n'));

    const id = args[3];
    const name = args[4];
    const inStock = args[5];
    const fuel = args[6]
    const year = parseInt(args[7]);
    const color = args[8]
    const price = parseFloat(args[9]) * 100;

    if (!name || !inStock || !fuel || !year || !color || !price) {
        console.log(chalk.red('Invalid arguments. Please provide all vehicle details.'));
        return;
    }

    const inventoryData = getInventory();
    const vehicle = inventoryData.vehicles.find((v) => v.id === id);

    if (vehicle) {
        vehicle.name = name;
        vehicle.inStock = JSON.parse(inStock);
        vehicle.fuel = fuel;
        vehicle.year = year;
        vehicle.color = color
        vehicle.priceInCents = price;
        console.log(vehicle)

        writeJSONFile(inventoryData);
        console.log(chalk.green('\nVehicle updated successfully!\n'));
    } else {
        console.log(chalk.red('Vehicle not found.\n'));
    }
}

module.exports = { updateVehicle }