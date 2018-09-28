# Generated with express-generator

```
npm install npm-generator -g
express --no-view app
DEBUG=myapp:* npm start
```

# Setup mongodb

```
sudo docker run -d -p 27017:27017 -v ./data:/data/db mongo
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
