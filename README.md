# spotify-related-artists-graph-v1
Display the graph of Spotify related artists given a starting node (artist id)
## Getting started

### Things you will need
homebrew: you should google how to install this  
node (running js code): `brew install node`  
yarn (better package manager than npm): `brew install yarn`  

### Initializing the repo
1. grab the code: `git clone https://github.com/concert-media/spotify-related-artists-graph-v1.git`  
2. install dependencies from package.json: `yarn install`  
3. copy the .env file to the directory  
4. try running something `node somescript.js`  

### Kevin's recommended Node libraries
requests: `node axios or node request`  
env files: `node dotenv`  

### Spotify docs
[https://developer.spotify.com/documentation/](https://developer.spotify.com/documentation/)

## Stage 1 Development

### Get a working local node / express app
Try a tutorial
[https://developer.mozilla.org/en-US/docs/Learn/Server-side/Express_Nodejs/Introduction/](https://developer.mozilla.org/en-US/docs/Learn/Server-side/Express_Nodejs/Introduction)

### Create a GET route
Try some more tutorials
[https://expressjs.com/en/starter/basic-routing.html](https://expressjs.com/en/starter/basic-routing.html)  
[https://expressjs.com/en/guide/routing.html](https://expressjs.com/en/guide/routing.html)  
I would recommend setting up a GET route and then when you receive a GET request,  
printing something to the console so you know it worked.

### Check that you can properly parse query parameters
Express does this automagically for you
[https://stackoverflow.com/questions/6912584/how-to-get-get-query-string-variables-in-express-js-on-node-js](https://stackoverflow.com/questions/6912584/how-to-get-get-query-string-variables-in-express-js-on-node-js)
I would recommend setting up a route:
`localhost:8000/spotify-related?id=12345`  
Then on the server, try to get the `12345` part and print it out
to the console to make sure it worked.

### Make sure your env is setup correctly
Some quick dotenv stuff. Make sure the .env file is in your repo 
(I sent it on slack, it contains our Spotify API key and other sensitive info)
[https://medium.com/@thejasonfile/using-dotenv-package-to-create-environment-variables-33da4ac4ea8f](https://medium.com/@thejasonfile/using-dotenv-package-to-create-environment-variables-33da4ac4ea8f)

### GET route triggers Spotify API request
Once you have the route working properly and returning some JSON data to the client,
you should have the GET request trigger a request to Spotify from Node. You'll
need to use request or axios library for this.

### Helpful Tools
Postman App - You can use this to create any type of request to test your server.  
Once you follow the Node / Express tutorial, you should have an app running at  
`localhost:8000`  
You can then send requests to `localhost:8000/some-route-you-just-created` using Postman.

[https://www.getpostman.com/](https://www.getpostman.com/)