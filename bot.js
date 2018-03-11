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

bot.on('sticker', (context)=>{
  context.reply('👍')
})

if (process.env.NODE_ENV==='production') {
  bot.telegram.setWebhook(process.env.BOT_URL+'svbot')  
} else {
  bot.startPolling()
}

module.exports = bot