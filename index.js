
const express = require('express');
const app = express();
const cors = require('cors');
const port = process.env.PORT || 5000;

const chefs = require('./data/chefs.json');

app.use(cors());

app.get('/', (req, res) =>{
    res.send('Server is running')
});

app.get('/chefs', (req, res) =>{
    res.send(chefs);
})
app.get('/chefs/:id', (req, res) =>{
    const id = req.params.id;
    const selectedchef = chefs.find(n => n.id === id)
    res.send(selectedchef);
})

app.listen(port, () => {
    console.log(`Server API is running on port: ${port}`)
})