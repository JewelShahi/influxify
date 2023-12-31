const http = require("http");
const sql = require("mysql");

const mysql = sql.createConnection({
    host: "localhost",
    user: "root",
    password: "",
    //database: "testOne",
});

mysql.connect(function(err) {
    if (err) throw err;
    console.log("Connected!");
});

const server = http.createServer((req, res) => {
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS');
    res.setHeader('Access-Control-Allow-Headers', 'Content-Type');

    if (req.method === 'OPTIONS') {
        res.writeHead(200);
        res.end();
        return;
    }


    console.log(req.url);
    if (req.url === "/sign-up/") {
        // 
        let data = "";

        req.on("data", (chunk) => {
            data += chunk;
        });

        req.on("end", () => {
            try {
                const jsonData = JSON.parse(data);

                // Log the request body
                console.log("Received data:", jsonData);

                // mysql.query(('INSERT INTO user (firstName, lastName, username, email, password) VALUES (?, ?, ?, ?, ?)', [user.//username, user.email]), (err, results, fields) => {
                //     if (err) {
                //         console.error("Error executing query:", err);
                //         return;
                //     }
                //
                //     // Process the query results
                //     console.log("Query Results:", results);
                //
                //     // Close the connection when done
                //     connection.end((err) => {
                //         if (err) {
                //             console.error("Error closing connection:", err);
                //         }
                //         console.log("Connection closed");
                //     });
                // });

                res.writeHead(200, { "Content-Type": "application/json" });
                res.end(JSON.stringify({ success: true }));
            } catch (error) {
                res.writeHead(400, { "Content-Type": "application/json" });
                res.end(JSON.stringify({ success: false, error: "Invalid JSON" }));
            }
        });
    } else {
        res.writeHead(404, { "Content-Type": "text/plain" });
        res.end("Not Found");
    }
});

server.listen(8000, () => {
    console.log("Server running on port 8000");
});