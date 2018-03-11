const express = require('express')
const packageInfo = require("./package.json")
const bodyParser = require('body-parser')

const app = express()
app.use(bodyParser.json())

app.get('/', (req, res)=>{
  res.json({ version: packageInfo.version })
})

app.use(bot.webhookCallback('/'+process.env.BOT_TOKEN))

app.listen(process.env.PORT, '0.0.0.0', ()=>{
  const host = server.address().address
  const port = server.address().port

  console.log('Web server started at https://%s:%s', host, port)
})

module.exports = app
