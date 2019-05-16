function Mysql() {

    const connection = mysql.connect({
        host: 'localhost',
        port: 3306,
        user: 'root',
        password: '',

        //database: ''

    });

    connection.connect(function(err) {
        if(err) throw err;

        console.log(`MySQL connect on ${connection.threadId}`);

        // QUERIES

        connection.end;
    });

}

module.exports = Mysql;