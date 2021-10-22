const express = require('express');
const app = express();
const cors = require('cors')

app.use(cors())
app.use(express.json())

app.set('port', process.env.PORT || 3500);
app.locals.title = 'Rancid Tomatillos API';
app.locals.watchlist = [];

app.get('/', (request, response) => {
  response.send('Rancid Tomatillos');
});

app.get('/watchlist', (request, response) => {
  const watchList = app.locals.watchlist
  if(!app.locals.watchlist.length) {
    response.status(404).json('Watchlist is empty')
  }
  response.status(200).json({ watchList })
})

app.post('/watchlist', (request, response) => {
  const movieId = request.body.movieId;
  console.log(request)
  if(!movieId) {
    response
    .status(422)
    .send({error: `Expected format: { movieId: <String> }. You’re missing an Id Property`})
    return 
  }
  app.locals.watchlist.push(movieId)
  const succesfulResponse = 'Movie has been added to watchlist'
  response.status(201).json(succesfulResponse)
})

app.listen(app.get('port'), () => {
  console.log(`${app.locals.title} is running on http://localhost:${app.get('port')}.`);
});