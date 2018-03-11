const express = require('express')
const packageInfo = require("./package.json")
const bodyParser = require('body-parser')
const Telegraf = require('telegraf')

const bot = new Telegraf(process.env.BOT_TOKEN)

bot.start((context)=>{
  console.log('synergyvisionbot started', context.from.id)
  return context.reply('El Bot de Synergy Vision te da la bienvenida.')
})

bot.command('ayuda', (context)=> {
  context.reply('Esta es la ayuda!!')
})

bot.hears('hola', (context)=>{
  context.reply('Hola cómo estas?')
})

bot.hears(/compra/i, (context)=> {
  context.reply('Compra! Compra!')
})

bot.on('sticker', (context) => {
  context.reply('👍')
})

bot.telegram.setWebhook(process.env.BOT_URL+'bot'process.env.BOT_TOKEN)  

const app = express()
app.use(bodyParser.json())

app.get('/', (req, res) => {
  res.json({ version: packageInfo.version })
})

app.use(bot.webhookCallback('/bot'+process.env.BOT_TOKEN))

const server = app.listen(process.env.PORT, '0.0.0.0', () => {
  const host = server.address().address
  const port = server.address().port

  console.log('Web server started at https://%s:%s', host, port)
})
