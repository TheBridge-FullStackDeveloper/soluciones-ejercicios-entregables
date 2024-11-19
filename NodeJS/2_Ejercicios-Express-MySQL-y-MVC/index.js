const express = require("express");
const app = express();

app.use(express.json())

app.use('/database', require('./routes/database'));
app.use('/products', require('./routes/products'));
app.use('/categories', require('./routes/categories'));
app.use('/productscategories', require('./routes/productscategories'));
app.use('/users', require('./routes/users'));
app.use('/orders', require('./routes/orders'));
app.use('/usersorders', require('./routes/usersorders'));

app.listen(5000,()=>{
    console.log('servidor levantado en el puerto 5000')
})