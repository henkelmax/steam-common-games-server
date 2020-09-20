# Steam Common Games Server

The backend for [Steam Common Games](https://github.com/henkelmax/steam-common-games)

## Usage (Development)

### Environment Variables

Create a `.env` file containing your Steam API key and a wildcard CORS origin.

*.env*

``` env
API_KEY=XXXXXXXXXXXXXXXXXXXXXXX
CORS_ORIGIN=*
```

### Installing Dependencies

``` sh
yarn install
```

### Running the server

``` sh
node index.js
```
