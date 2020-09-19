const express = require('express')
const cors = require('cors')
const http = require('https')
const querystring = require('querystring')

const PORT = process.env.PORT || 5000
const API_KEY = process.env.API_KEY || ''
const CORS_ORIGIN = process.env.CORS_ORIGIN || 'https://henkelmax.github.io'

const app = express()
app.use(cors({
    origin: CORS_ORIGIN,
    optionsSuccessStatus: 200
}))

app.get('*', (req, res) => {
    req.query.key = API_KEY
    const options = {
        host: 'api.steampowered.com',
        protocol: 'https:',
        port: 443,
        path: `${req.path}?${querystring.stringify(req.query)}`,
        method: 'GET'
    }

    const creq = http.request(options, pres => {
        pres.setEncoding('utf8')
        res.writeHead(pres.statusCode)
        pres.on('data', chunk => {
            res.write(chunk)
        })
        pres.on('close', () => {
            res.end()
        })
        pres.on('end', () => {
            res.end()
        })
    }).on('error', e => {
        console.error(e.message)
        try {
            res.writeHead(500)
            res.write(e.message)
        } catch (e) { }
        res.end()
    })
    creq.end()
})

app.listen(PORT, () => console.log(`Listening on port ${PORT}`))