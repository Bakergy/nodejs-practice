# Heroku 
https://dashboard.heroku.com/

## deploy code 
1. create a repo on heroku (tutor)
2. install heroku cli
3. login heroku
4. git...
5. push 上去後就會自動啟動了

## deploy image(today)
1. create a repo on heroku (tutor)
2. install heroku cli
3. heroku container:login
4. heroku container:push web
5. heroku container:release web

## log 
heroku logs --tail

## Error R10 (Boot timeout) -> Web process failed to bind to $PORT within 60 seconds of launch
https://stackoverflow.com/questions/15693192/heroku-node-js-error-web-process-failed-to-bind-to-port-within-60-seconds-of