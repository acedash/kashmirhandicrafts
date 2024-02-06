import express from "express"

const app = express();

app.get('/', (req, res) => {
    console.log("The app is running");
})

app.listen("4000", () => {
    console.log(`The server is running on port 4000`);
})