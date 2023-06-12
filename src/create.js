const chalk = require("chalk")
const { nanoid } = require("nanoid");
const { addToInventory } = require("./helpers")
const { faker } = require("@faker-js/faker")

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
            priceInCents: Number(faker.commerce.price(5000000, 10000000, 0)),
            currency: "USD",
        }
        return newCars
    }

    const vehicle = randomCars();
    if (vehicle) {
        console.log(chalk.yellow(`ID: ${vehicle.id}`));
        console.log(`Name: ${vehicle.name}`);
        console.log(`InStock: ${vehicle.inStock}`);
        console.log(`Vin: ${vehicle.vin}`);
        console.log(`Year: ${vehicle.year}`);
        console.log(`Color: ${vehicle.color}`);
        console.log(`Type: ${vehicle.type}`);
        console.log(`Fuel: ${vehicle.fuel}`);
        console.log(`Price: $${vehicle.priceInCents / 100}`);
        console.log(`Currency: ${vehicle.currency}`);
        console.log('------------------------');
    }
    addToInventory(vehicle);

    console.log(chalk.green('\nVehicle created successfully!\n'));
}

module.exports = { createVehicle }