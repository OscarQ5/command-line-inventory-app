const chalk = require("chalk");
const { writeJSONFile, getInventory } = require("./helpers");

function deleteVehicle(args) {
  console.log(chalk.bold('\n--- Delete Vehicle ---\n'));

  const id = args[3];
  const inventoryData = getInventory();
  const index = inventoryData.findIndex((v) => v.id === id);


  if (index !== -1) {
    console.log(inventoryData.splice(index, 1));
    writeJSONFile(inventoryData);

    console.log(chalk.green('\nVehicle deleted successfully!\n'));
  } else {
    console.log(chalk.red('Vehicle not found.\n'));
  }
}

module.exports = { deleteVehicle }