# Rancid Tomatillos API

## Starting the server

Use the command `node server.js` to begin the API server.

## Endpoints

| Method | Endpoint | Request Body | Sample Response |
--- | --- | --- | ---
`GET` | `'/watchlist'` | n/a | `[{movieId: "974478"}, ...]`
`POST` | `/watchlist'` | movieId: "974478" | `[{movieId: "974478"}, ...]`


### Notes

* There are no items in the watchlist when the server begins.
* movies added to the watch list require a movie ID
