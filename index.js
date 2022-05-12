const app = require("express")();
app.use(require("express").json());
app.use('/pipo-back', require("./routes"));
const config = require('./config')

app.listen(config.PORT, () => {
    console.log('Working!! in port ',config.PORT)
})