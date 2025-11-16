const express = require('express');
const app = express();
const bodyParser = require('body-parser');
app.use(bodyParser.json());

app.get('/',  function (req, res) {
    res.send('Welcome to our project 2');
});
console.loh("check confiig user and email")
// Listening to Localhost Server
const PORT = process.env.PORT || 3000;
app.listen(PORT, ()=>{
    console.clear();
    console.log(`listening on port : ${PORT}`);
})