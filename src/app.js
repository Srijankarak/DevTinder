const express = require('express');

const app = express();

// Specific routes
app.get("/test", (req, res) => {
    res.send("Hello from the server!");
});

app.get("/hello", (req, res) => {
    res.send("Hello from the hello!");
});

// Default route (home)
app.get("/", (req, res) => {
    res.send("Namaste from the server Dashboard!");
});

app.listen(3000, () => {
    console.log("Server is successfully running on port 3000...");
});


