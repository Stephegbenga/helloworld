const express = require("express");

const app = express();
const PORT = process.env.PORT || 8080;

// parse request to body-parser
app.use(
  express.urlencoded({
    extended: true,
  })
);

app.use(express.json());

app.get("/", async (req, res) => {
  res.send("Test Hello World App");
});

//Start the server
app.listen(PORT, () => {
  console.log(`Server is up and running at ${PORT}`);
});