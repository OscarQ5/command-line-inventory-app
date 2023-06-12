const { getInventory } = require("./helpers")
const chalk = require("chalk")

function listVehicles() {
  console.log(chalk.bold('\n--- Vehicle Inventory ---\n'));
  const inventoryData = getInventory();
  inventoryData.vehicles.forEach((vehicle) => {
    console.log(chalk.yellow(`ID: ${vehicle.id}`));
    console.log(`Name: ${vehicle.name}`);
    console.log(`InStock: ${vehicle.inStock}`);
    console.log(`Year: ${vehicle.year}`);
    console.log(`Fuel: ${vehicle.fuel}`);
    console.log(`Price: $${vehicle.priceInCents / 100}`);
    console.log('------------------------');
  });
}

module.exports = { listVehicles }