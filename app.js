const Telegraf = require('telegraf');

const API_TOKEN = process.env.BOT_TOKEN || ''
const PORT = process.env.PORT || 3000
const URL = process.env.BOT_URL

const bot = new Telegraf(API_TOKEN);
bot.telegram.setWebhook(`${URL}bot${API_TOKEN}`);
bot.startWebhook(`/bot${API_TOKEN}`, null, PORT)

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
