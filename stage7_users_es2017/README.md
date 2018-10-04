# Javascript Versions

https://flaviocopes.com/ecmascript/

# Start Server
```
DEBUG=myapp:* npm start
```

# Setup mongodb

```
docker-compose up
```

# Persistent User List

## Get user list
```
curl --request GET \
  --url http://localhost:3000/users
```
## Create new user
```
curl --request POST \
  --url http://localhost:3000/users/create \
  --header 'content-type: application/json' \
  --data '{
	"name": "Speddy"
}'
```