const express = require('express')
const cors = require('cors')

const app = express()
const port = 8001

app.use(cors())

app.get('/', (req, res) => res.send('Hello Node.js'))

// cors issue
// https://developer.mozilla.org/ko/docs/Web/HTTP/CORS
app.get('/hello', (req, res) => {    
    res.send('Hello')
    console.log('connected');
})

app.listen(port, () => console.log(`Example app listening on port ${port}!`))