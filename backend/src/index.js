const routes = require('./routes');
const express = require('express');
const connection = require('./database/database')
const app = express();
const cors = require('cors');

app.use(express.urlencoded({extended: true}));
app.use(express.json());
app.use(cors());
app.use(routes);


const PORT = process.env.PORT || 3003;
app.listen(PORT,()=>console.log(`Server open in ${PORT}`));