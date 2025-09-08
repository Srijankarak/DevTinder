const express = require('express');

const app = express();

// Specific routes
app.use("/test", (req, res) => {
    res.send("Hello from the server!");
});

app.use("/hello", (req, res) => {
    res.send("Hello from the hello!");
});

// Default route (home)
app.use("/", (req, res) => {
    res.send("Namaste from the server Dashboard!");
});

app.listen(3000, () => {
    console.log("Server is successfully running on port 3000...");
});


