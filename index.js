const express = require('express')
const path = require('path')
const app = express()
const PORT = 3000

app.use('/', express.static(path.join(__dirname, '/public')))
app.get('*', (req, res) => res.sendFile(path.join(__dirname, '/public/index.html')))

app.get('/', (req, res) => {
    console.log(`${pwd}`);
    res.render('/home', title = {
        'title': 'Home-MediaPros'
    })
})
app.listen(PORT, () => console.log(`Listening on port ${PORT}!`))