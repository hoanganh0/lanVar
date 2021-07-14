require('dotenv').config();
const express = require('express');
const productRoutes = require('./routes/productRoutes');
const accountRoutes = require('./routes/accountRouters');
const connectDB = require('./config/db');
const cors = require('cors');
const path = require('path');
const port = process.env.PORT || 5000;

connectDB();

const app = express();
app.use(cors());

app.use(express.static(path.join(__dirname, 'build')));


app.get('/*', (req, res) => {
  res.sendFile(path.join(__dirname, 'build', 'index.html'));
});

app.get('/cool', (req, res) => res.send('test'));

app.use(express.json());

app.use('/api/products', productRoutes);

app.use('/api/account', accountRoutes);

app.use('/shop', (req, res) => {
  res.json(path)
})

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})