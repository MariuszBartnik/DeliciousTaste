const express = require('express');
const path = require('path');
const cors = require('cors');

const app = express();

app.use(cors());


app.use(express.json());
app.use(express.urlencoded({extended: false}));
app.use(express.static(path.resolve(__dirname, 'build')));

const api = require('./routes/api');
app.use('/api', api);

// app.get('/', (req, res) => {
//     res.send('Zomato API app server is running');       
// })


const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
    console.log(`app running on port ${PORT}`)
});