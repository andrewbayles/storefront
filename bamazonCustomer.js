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
});

function displayAllItems() {

    console.log("All Available Products\n");
    console.log("----------------------\n");

    connection.query("SELECT * FROM products", function(err, res) {
        if (err) throw err;
        Object.keys(res).forEach(function(key) {
            var row = res[key];
            console.log("ID: " + row.id + " | " + row.product_name + " | Price: " + row.price + "\n");
        });    
    });

}


connection.end;