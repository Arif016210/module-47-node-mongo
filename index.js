const express = require('express');
const app = express();



const users = ["Ariful", "Jasim", "Jasmin", "Salim", "Sufia", "Karim"];

app.get('/', (req, res) => {
    const products = {
        name: "laptop",
        price: "41000",
    }
    res.send(products);
});

app.get('/product/laptop', (req, res) => {
    res.send({ name: 'laptop', price: '41000', quantity: 5 });
});

app.get('/user/:id', (req, res) => {
    const id = req.params.id;
    const name = users[id];
    res.send({ id, name });

});

app.listen(8080, () => {
    console.log("Server Port 8080");
});