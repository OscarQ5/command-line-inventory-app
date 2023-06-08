const fs = require("fs")
const path = require("path")
const dataDirectory = path.join(__dirname, "../data");
const fileName = "inventory.json";

const readJSONFile = () => {
    const inventory = fs.readFileSync( path.join(dataDirectory, fileName), "utf-8" )
    return inventory ? JSON.parse(inventory) : []
}

const writeJSONFile = (data) => {
    data = JSON.stringify(data)
    fs.writeFileSync( path.join(dataDirectory, fileName), data, {encoding: "utf-8"})
}
function addToInventory(vehicle) {
    const inventoryData = readJSONFile() || [];
    inventoryData.push(vehicle);
    writeJSONFile(inventoryData);
}
  
function getInventory() {
    return readJSONFile() || [];
}

module.exports = {
    readJSONFile,
    writeJSONFile,
    addToInventory,
    getInventory
}