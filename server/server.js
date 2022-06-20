const express = require('express');
const app = express();
const dotenv  = require('dotenv');
const mongoose = require('mongoose');
const cors = require('cors');

//config cors
app.use(cors());

dotenv.config({path : './config/config.env'});

// config json to collect form data
app.use(express.json());
app.use(express.urlencoded({extended : false}));

const hostName = process.env.HOST_NAME;
const port = process.env.PORT;

// config router
app.use('/api', require('./router/apiRouting'));

// config mongoose
mongoose.connect(process.env.MONGO_DB_LOCAL_URL, {
    useUnifiedTopology : true,
    useNewUrlParser : true,
    useFindAndModify : false,
    useCreateIndex : true
}).then((response) => {
    console.log(`Connected to MongoDB server Successfully`);
}).catch((err) => {
    console.error(err)
});
// get response
app.get('/', (request,response) => {
    response.send(`<h2>Wellcome To BigBasket Application</h2>`);
});

app.listen(port,hostName , () => {
    console.log(`Express server is running at http://${hostName}:${port}`);
})
