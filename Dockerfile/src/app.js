const express = require("express");

const server = express();

server.get("/", (request, response) => {
    response.send("Hello Docker!");
});

console.log("Cloud Service Provider: " + process.env.CLOUD_SERVICE_PROVIDER);
console.log("Cloud Support Email: " + process.env.CLOUD_SUPPORT_EMAIL);

server.listen(process.env.PORT, () => console.log(`Listening on port ${process.env.PORT}`));
