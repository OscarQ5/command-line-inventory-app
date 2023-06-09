const chalk = require("chalk");
const { getInventory } = require("./helpers");

function viewVehicleDetails(args) {
  console.log(chalk.bold('\n--- Vehicle Details ---\n'));

  const id = args[3];
  const inventoryData = getInventory();
  const vehicle = inventoryData.find((v) => v.id === id);

  if (vehicle) {
    console.log(chalk.yellow(`ID: ${vehicle.id}`));
    console.log(`Name: ${vehicle.name}`);
    console.log(`InStock: ${vehicle.inStock}`);
    console.log(`Year: ${vehicle.year}`);
    console.log(`Fuel: ${vehicle.fuel}`);
    console.log(`Price: $${vehicle.priceInCents/100}`);
    console.log('------------------------');
  } else {
    console.log(chalk.red('Vehicle not found.\n'));
    return;
  }
}

module.exports = { viewVehicleDetails }