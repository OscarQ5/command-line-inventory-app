const fs = require("fs")
const path = "../data"
const fileName = "inventory.json"
const inform = console.log

function readJSONFile(path, fileName){
    try {
        const inventory = fs.readFileSync( `${path}/${fileName}`, "utf-8" );
        return inventory ? JSON.parse(inventory) : [];
    } catch (error) {
        inform(`Error reading file ${path}/${fileName}: ${error.message}`);
        return null;
    }
}
inform(readJSONFile())

function writeJSONFile(path, fileName, data){
    try {
        data = JSON.stringify(data);
        fs.writeFileSync(`${path}/${fileName}`, data, {encoding: "utf-8"});
    } catch (error) {
        inform(`Error writing file ${path}/${fileName}: ${error.message}`)
    }
}

function addToInventory(vehicle) {
    const inventoryData = readJSONFile() || [];
    inventoryData.push(vehicle);
    writeJSONFile(path, fileName, inventoryData);
}
  
function getInventory() {
    return readJSONFile(path, fileName) || [];
}

module.exports = {
    readJSONFile,
    writeJSONFile,
    addToInventory,
    getInventory
}