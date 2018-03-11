
# References

- [First Blog post](https://github.com/mvalipour/telegram-bot-webhook)
- [Second Blog post](https://github.com/volodymyrlut/heroku-node-telegram-bot)
- [Heroku Node Telegram Bot](https://github.com/volodymyrlut/heroku-node-telegram-bot)
- [node-telegram-bot-api](https://github.com/yagop/node-telegram-bot-api)
- [Telegram Intro](https://core.telegram.org/bots)
- [Telegram API](https://core.telegram.org/bots/api)
- [Telegram Samples](https://core.telegram.org/bots/samples)
- [Telegraf docs](http://telegraf.js.org/#/?id=telegraf-js)
- [Telegraf samples](https://github.com/telegraf/telegraf/tree/develop/docs/examples)

# Enviroment variables

```
heroku config:set BOT_TOKEN=youmustputherethebottoken --app synergyvisionbot
heroku config:set BOT_URL=$(heroku info -s --app synergyvisionbot | grep web_url | cut -d= -f2) --app synergyvisionbot
```