const express = require('express')
const cors = require('cors')

const app = express()
const port = 8001

app.use(cors())
app.use(express.json())
app.use(express.urlencoded({extended: false}))

app.get('/', (req, res) => res.send('Hello Node.js'))

// cors issue
// https://developer.mozilla.org/ko/docs/Web/HTTP/CORS
// https://ko.wikipedia.org/wiki/%EA%B5%90%EC%B0%A8_%EC%B6%9C%EC%B2%98_%EB%A6%AC%EC%86%8C%EC%8A%A4_%EA%B3%B5%EC%9C%A0

app.get('/time', (req, res) => {    
    res.send(Date())
    console.log('connected');
})


// body-parser 필요
app.post('/ajax', (req, res) =>{
    const email = req.body.email

    console.log(email)

    if(email === 'godh662@gmail.com') {
        // 고급정보
        const info = {"info" : "1+1=2"}
        res.json(info)
    } else {
        // 찌라시
        const info = {"info" : "1+1=3"}
        res.json(info)
    }

})

app.listen(port, () => console.log(`Example app listening on port ${port}!`))