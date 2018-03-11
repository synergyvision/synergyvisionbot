const token = process.env.BOT_TOKEN

const Bot = require('node-telegram-bot-api')
var bot

if (process.env.NODE_ENV === 'production') {
  bot = new Bot(token)
  bot.setWebHook(process.env.BOT_URL + bot.token)
} else {
  bot = new Bot(token, { polling: true })
}

console.log('synergyvisionbot server started...')

// hello command
bot.onText(/^\/hola (.+)$/, (msg, match) => {
  var name = match[1]
  bot.sendMessage(msg.chat.id, 'Hola ' + name + '!').then( () => {
    // reply sent!
  })
})

// sum command
bot.onText(/^\/suma((\s+\d+)+)$/, (msg, match) => {
  var result = 0
  match[1].trim().split(/\s+/).forEach( (i) => {
    result += (+i || 0)
  })
  bot.sendMessage(msg.chat.id, result).then( () => {
    // reply sent!
  })
})

module.exports = bot
