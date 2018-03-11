
# References

- [Blog post](https://github.com/mvalipour/telegram-bot-webhook)

# Enviroment variables

heroku config:set BOT_TOKEN=youmustputherethebottoken 
heroku config:set BOT_URL=$(heroku info -s | grep web-url | cut -d= -f2)