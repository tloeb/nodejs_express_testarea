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

# Secure your nodejs application

## Against DNS rebind attacks

This attack bypasses the browsers "Same-Origin" policy. So an script can get files from different locations.

```
var hostValidation = require('host-validation');
app.use(hostValidation({ hosts: ['127.0.0.1:3000',
                                 'localhost:3000'] }))
```
## Best Practice with 'Helmet'

```
var helmet = require('helmet');
app.use(helmet())
```



