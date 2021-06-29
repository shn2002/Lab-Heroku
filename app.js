const express = require('express');
const port = process.env.PORT || 3000
const app = express();

app.get('/', (req, res, next)=>{
    res.send("Hello Heroku!  ---Dan Wang");
})

app.listen(port, () => {
    console.log('Listening on port 3000')

})