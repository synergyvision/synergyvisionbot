
# References

- [First Blog post](https://github.com/mvalipour/telegram-bot-webhook)
- [Second Blog post](https://github.com/volodymyrlut/heroku-node-telegram-bot)

# Enviroment variables

heroku config:set BOT_TOKEN=youmustputherethebottoken --app synergyvisionbot
heroku config:set BOT_URL=$(heroku info -s --app synergyvisionbot | grep web_url | cut -d= -f2) --app synergyvisionbot

# packages 

- body-parser
- express
- node-telegram-bot-api