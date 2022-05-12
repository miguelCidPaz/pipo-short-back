const app = require("express")();
const config = require('./config');
const cors = require('cors');
const bodyParser = require("body-parser");

app.use(bodyParser.json())
app.use(cors());
app.use('/pipo-back', require("./routes"));

app.listen(config.PORT, () => {
    console.log('Working!! in port ',config.PORT)
})