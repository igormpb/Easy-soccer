const routes = require('./routes');
const express = require('express');
const app = express();


app.use(express.urlencoded({extended: true}));
app.use(express.json());

// app.use(routes);

const PORT = process.env.PORT || 3003;
app.listen(PORT,()=>console.log(`Server open in ${PORT}`));