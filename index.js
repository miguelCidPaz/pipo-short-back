const app = require("express")();
app.use(require("express").json());
app.use('/pipo-back', require("./routes"));

app.listen(3000, () => {
    console.log('Working!!')
})