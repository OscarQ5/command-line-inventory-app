const chalk = require("chalk")
const { writeJSONFile, getInventory } = require("./helpers")

function addToCart(args) {
    const id = args[3]
    const inventoryData = getInventory();
    const vehicle = inventoryData.vehicles.find((v) => v.id === id);

    if (vehicle.inStock === true) {
        inventoryData.cart.push(vehicle);
        writeJSONFile(inventoryData);
        console.log(chalk.green('Vehicle added to cart.'));
    } else if (vehicle.inStock === false) {
        console.log(chalk.yellow("Vehicle not in stock."))
    } else {
        console.log(chalk.red('Vehicle not found.'));
    }
}

function viewCart() {
    console.log(chalk.green.bold('\n--- Shopping Cart ---\n'));
    const inventoryData = getInventory();
    if (inventoryData.cart.length > 0) {
        let totalPrice = 0
        inventoryData.cart.forEach((vehicle) => {
            console.log(`ID: ${vehicle.id}`);
            console.log(`Name: ${vehicle.name}`);
            console.log(`Year: ${vehicle.year}`);
            console.log(`Fuel: ${vehicle.fuel}`);
            console.log(`Price: $${(vehicle.priceInCents / 100).toFixed(2)}`);
            console.log('------------------------');
            totalPrice += vehicle.priceInCents
        });
        console.log(`Total Items in Cart: ${inventoryData.cart.length}`);;
        console.log(`Total Price: $${(totalPrice / 100).toFixed(2)}`)
    } else {
        console.log("Cart is empty.")
    }
}

function cancelCart() {
    const inventoryData = getInventory();
    inventoryData.cart = [];
    writeJSONFile(inventoryData);
    console.log(chalk.yellow('Cart cancelled. Cart is now empty.'));
}

module.exports = { addToCart, viewCart, cancelCart }