const express = require("express");

const app = express();
const PORT = process.env.PORT || 3000;

app.get("/", (req, res) => {
  res.send(`
    <html>
      <head>
        <title>DevOps Week 4</title>
      </head>
      <body>
        <h1>🚀 DevOps Week 4</h1>
        <h2>Containerization with Docker</h2>
        <p>Successfully running inside a Docker container!</p>
      </body>
    </html>
  `);
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});