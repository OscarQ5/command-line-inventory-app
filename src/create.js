const chalk = require("chalk")
const { nanoid } = require("nanoid");
const helpers = require("./helpers")
const { faker } = require("@faker-js/faker")
const path = "../data"
const fileName = "inventory.json"

function createVehicle() {
    console.log(chalk.bold('\n--- Create Vehicle ---\n'));
  
    const randomCars = () => {
        const newCars = {
            id: nanoid(),
            name: `${faker.vehicle.manufacturer()} ${faker.vehicle.model()}`,
            vin: faker.vehicle.vin(),
            color: faker.vehicle.color(),
            fuel: faker.vehicle.fuel(),
            year: faker.datatype.number({ min: 1990, max: 2024 }),
            type: faker.vehicle.type(),
            inStock: faker.datatype.boolean(),
            priceInCents: faker.commerce.price(5000000, 10000000, 0, "$"),
            currency: "USD",
        }
        return newCars
    }
    randomCars()
  
    const inventoryData = helpers.getInventory();
    inventoryData.push(randomCars);
    helpers.writeJSONFile(path, fileName, inventoryData);
  
    console.log(chalk.green('\nVehicle created successfully!\n'));
}
  
createVehicle();