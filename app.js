const express = require('express');
const app = express();

app.get('/', (req, res, next)=>{
    res.send("Hello Heroku!");
})

app.listen(3000, () => {
    console.log('Listening on port 3000')

})