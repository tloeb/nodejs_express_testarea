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

https://expressjs.com/de/advanced/best-practice-security.html

## Using TLS



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

Helmet sets security realted HTTP-Header, such as:
* ADDS Content-Security-Policy Header against Cross-site-scripting
* REMOVES X-Powered-By-Header to hide the powered-by-information
* ADDS HTTP Public Key Pinning against man in the middle attacks
* ADDS Strict-Transport-Security-Header to enforce SSL
* ADDS X-Download-Options Header to prevent IE to execute downloads in the site`s context
* REMOVES client side caching
* ADDS X-Content-Type-Options which doesnt allow to "sniff" mimetypes
* ADDS protection against Clickjacking (Invisible Buttons)
* ADDS X-XSS-Protection against Cross-site-Scripting



