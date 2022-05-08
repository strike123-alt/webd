const exp = require("express");
const app = express();
const port = 3000;

app.get("/", (req, res) => {
    res.send('hello from the this Library')
});

app.listen(port, () => {
    console.log("Run on port No: ${port}")
});