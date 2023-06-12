# Vehicle Inventory Application

The Vehicle Inventory Application is a command-line tool that allows users to manage a collection of vehicles. Users can perform various operations such as listing vehicles, viewing vehicle details, creating new vehicles, updating vehicle information, deleting vehicles, and managing a shopping cart.

## Features

- List Vehicles: Displays a list of all available vehicles in the inventory.
- View Vehicle Details: Shows detailed information about a specific vehicle.
- Create Vehicle: Allows users to add a new vehicle to the inventory.
- Update Vehicle: Modifies the information of an existing vehicle in the inventory.
- Delete Vehicle: Removes a vehicle from the inventory.
- Shopping Cart: Enables users to add vehicles to a shopping cart, view the cart contents, and cancel the cart.

## Getting Started

1. Fork and clone this repository.

2. Navigate to the cloned repository's directory on your command line. Then, run the following command to install the required dependencies:

   ```
   npm install
   ```

3. **Run the application**: Use the following command to run the application:

   ```
   npm run <command> [arguments]
   ```

   Replace `<command>` with one of the available commands (see below) and provide the required arguments as needed.

## Usage

### List Vehicles

To list all vehicles in the inventory, use the following command:

```
npm run list
```

### View Vehicle Details

To view detailed information about a specific vehicle, use the following command:

```
npm run view <vehicleId>
```

Replace `<vehicleId>` with the ID of the vehicle you want to view.

### Create Vehicle

To create a new vehicle and add it to the inventory, use the following command:

```
npm run create
```

### Update Vehicle

To update the information of an existing vehicle in the inventory, use the following command:

```
npm run update <vehicleId> [arguments]
```

Replace `<vehicleId>` with the ID of the vehicle you want to update. The arguments following the `<vehicleId>` in this order should be `<name>`, `<inStock>`, `<fuel>`, `<year>`, `<color>` & `<price>`.

### Delete Vehicle

To delete a vehicle from the inventory, use the following command:

```
npm run delete <vehicleId>
```

### Vehicles Manufactured After The Year 2000

To see vehicles from the inventory manufactured after the year 2000, use the following command:

```
npm run vehiclesafter2000
```

This will display a list of vehicles with their details that were manufactured after the year 2000.

### Shopping Cart

The shopping cart feature allows you to manage a list of selected vehicles.

To add a vehicle to the shopping cart, use the following command:

```
npm run addtocart <vehicleId>
```

Replace `<vehicleId>` with the ID of the vehicle you want to add to the cart.

To view the contents of the shopping cart, use the following command:

```
npm run viewcart
```

To cancel the shopping cart and remove all items, use the following command:

```
npm run cancelcart
```