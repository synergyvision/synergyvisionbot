const express = require('express')
const Telegraf = require('telegraf')

const app = new express()
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

bot.on('sticker', (context)=>{
  context.reply('👍')
})

bot.startPolling()

app.get('/', (req, res) => res.send('Synergy Vision Bot is on!'))

app.listen(process.env.PORT || 3000, "0.0.0.0", () => console.log('Synergy Vision Bot listening on port 3000!'))