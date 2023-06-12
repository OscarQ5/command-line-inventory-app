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

function listVehiclesAfter2000() {
  const inventoryData = getInventory();
  const vehiclesAfter2000 = inventoryData.vehicles.filter((v) => v.year > 2000);
  console.log(chalk.blue.bold("\n--- Vehicles Made After 2000 ---\n"));
  vehiclesAfter2000.forEach((vehicle) => {
    console.log(chalk.yellow(`ID: ${vehicle.id}`));
    console.log(`Name: ${vehicle.name}`);
    console.log(`InStock: ${vehicle.inStock}`);
    console.log(`Year: ${vehicle.year}`);
    console.log(`Fuel: ${vehicle.fuel}`);
    console.log(`Price: $${vehicle.priceInCents / 100}`);
    console.log("------------------------");
  });
  console.log(`Total Vehicles: ${vehiclesAfter2000.length}`);
}

module.exports = { listVehicles, listVehiclesAfter2000 }