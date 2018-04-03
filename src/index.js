const app = require('express')();
const bodyParser  = require('body-parser');

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));

require('./controllers/authController')(app);

app.listen(3000, function(){
    console.log('Server started...');    
})