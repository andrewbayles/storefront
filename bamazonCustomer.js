var mysql = require("mysql");
var inquirer = require("inquirer");

var connection = mysql.createConnection({
    host: 'localhost',
    port: 3306,
    user: 'root',
    password: 'password',
    database: 'bamazon'
});

connection.connect(function(err) {
    if(err) throw err;
    console.log(`MySQL connect on ${connection.threadId}`);

    displayAllItems();
    purchasePrompt();

    connection.end;
});

function displayAllItems() {

    console.log("All Available Products");
    console.log("----------------------\n");

    connection.query("SELECT * FROM products", function(err, res) {
        if (err) throw err;
        Object.keys(res).forEach(function(key) {
            var row = res[key];
            console.log("ID: " + row.id + " | " + row.product_name + " | Price: " + row.price);
        });    
    });

}

function purchasePrompt() {

    var itemIds = [];

    connection.query("SELECT * FROM products", function(err, res) {
        if (err) throw err;
        Object.keys(res).forEach(function(key) {
            var row = res[key];
            itemIds.push(row.id);
        });    
    });

    inquirer.prompt([
        {
            name: "purchaseId",
            type: "input",
            message: "What is the product ID of the item you want to buy?"
        },
        {
            name: "purchaseQuantity",
            type: "input",
            message: "How many units would you like to buy?"
        }
    ]).then(function(answer) {

        if (itemIds.indexOf(parseInt(answer.purchaseId)) != -1) {

            connection.query("SELECT * FROM products WHERE id = '" + answer.purchaseId + "'", function(err, res) {
                if (err) { throw err; }
                Object.keys(res).forEach(function(key) {
                    var row = res[key];
                    if (row.stock_quantity >= answer.purchaseQuantity) { // Check to see if the store has enough of the product to meet the customer's request.
                        fulfillOrder();
                    } else {
                        console.log("Insufficient quantity!");
                        purchasePrompt();
                    }
                });    
            });

        } else {
            console.log("Sorry, that's not a valid product ID!");
            purchasePrompt();
        }

    });

}

function fulfillOrder() {

    console.log("Fulfill customer's order here.");

}