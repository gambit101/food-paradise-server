const express = require('express');
const app = express();
const cors = require('cors')

const port = process.env.PORT || 5000;

const foodData = require('./data/food.json');

app.use(cors());

app.get('/', (req, res) => {
    res.send('hello food paradise')
});

app.get('/food', (req, res) => {
    res.send(foodData)
});

app.get('/food/:id', (req, res) => {
    const id = req.params.id;
    const selectedFoods = foodData.find(n => n.id == id)
    res.send(selectedFoods)
  });


app.listen(port, () => {
    console.log(`food paradise is running: ${port}`);
})
