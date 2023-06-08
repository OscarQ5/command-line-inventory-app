const chalk = require('chalk');
const { writeJSONFile, getInventory } = require('./helpers');

function updateVehicle(args) {
  console.log(chalk.bold('\n--- Update Vehicle ---\n'));

  const id = args[3];
  const name = args[4];
  const inStock = args[5];
  const fuel = args[6]
  const year = parseInt(args[7]);
  const price = parseFloat(args[8]) * 100;

  if (!name || !inStock || !fuel || !year || !price) {
    console.log(chalk.red('Invalid arguments. Please provide all vehicle details.'));
    return;
  }

  const inventoryData = getInventory();
  const vehicle = inventoryData.find((v) => v.id === id);

  if (vehicle) {
    vehicle.name = name;
    vehicle.inStock = inStock;
    vehicle.fuel = fuel;
    vehicle.year = year;
    vehicle.priceInCents = price;

    writeJSONFile("../data", "inventory.json", inventoryData);
    console.log(chalk.green('\nVehicle updated successfully!\n'));
  } else {
    console.log(chalk.red('Vehicle not found.\n'));
  }
}

updateVehicle(process.argv);