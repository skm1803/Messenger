const express = require('express');
const app = express();
const dotenv = require('dotenv')


const PORT = process.env.PORT || 5000
app.get('/', (req, res) => {
    res.send('This is from backend Sever testing')
})


app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`)
})