const app = require('express')();
const bodyParser  = require('body-parser');

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));


app.listen(3000, function(){
    console.log('Server started...');
})


