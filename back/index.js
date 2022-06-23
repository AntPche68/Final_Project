const express = require('express');
require('dotenv').config();
require('./models/models');

const cors = require('cors');
const sequelize = require('./db');
const PORT = process.env.PORT;
const app = express();

const authorsBookRouter = require('./routes/authorsBookRouter');
const partnerRouter = require('./routes/partnerRouter');

app.use(cors());
app.use(express.json());
app.use('/api/book', authorsBookRouter);
app.use('/api/partner', partnerRouter);


const start = async () => {
    try{
        await sequelize.authenticate();
        await sequelize.sync();
        app.listen(PORT, () =>{
            console.log(`Server started on port ${PORT}...`)
        })
    }catch(err){
        console.log('Server Error')
    
    }
}
start()
