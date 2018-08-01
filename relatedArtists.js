var btoa = require('btoa');
var request = require('request'); // "Request" library

module.exports  = function(artistId, client_id, client_secret){
        var auth_header = btoa(`${client_id}:${client_secret}`);
        var authOptions = {
                url: 'https://accounts.spotify.com/api/token',
                headers: {
                        'Authorization': `Basic ${auth_header}`,
                        'content-type': 'application/x-www-form-urlencoded',
                },
                form: {
                grant_type: 'client_credentials'
                },
                json: true
        };
        request.post(authOptions, function(error, response, body) {
          if (!error && response.statusCode === 200) {
            // use the access token to access the Spotify Web API
            var token = body.access_token;
            var auth_header2 = `Bearer ${token}`;
            var options = {
              url: `https://api.spotify.com/v1/artists/${artistId}/related-artists`,
              headers: {
                'Authorization': auth_header2,
              },
              json: true
            }
            request.get(options, function(error, response, body) {
              return body;
            });
          }
        });
}
