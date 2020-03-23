const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");

let app = express();

let corsOptions = {
    origin: "http://127.0.0.1:8081"
};

app.use(cors(corsOptions));

app.use(bodyParser.json());

app.use(bodyParser.urlencoded({extended:true}));

const db = require("./app/models");



db.sequelize.sync({ force: true }).then(() => {
    console.log("Drop and re-sync db.");
});

app.get('/', (req, res)=>{
    res.json({message : "Running"})
});



require("./app/routes/tutorial")(app);
require("./app/routes/user")(app);
const PORT = process.env.PORT || 8080;


app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}.`);
});