const ID = 'fec64b6ba5194c2f9d43ccfedb8ac089';
//const SECRET = '052d2cf066c7474ba9652dc5d9f4d78e';
const URI = 'http://localhost:3000/';
let accessToken;

let Spotify = {
  getAccessToken: function() {
    if (accessToken) {
      return new Promise(resolve => resolve(accessToken));
    } else if (document.url === URI) {
      // window.location.href = `https://accounts.spotify.com/authorize?client_id=${ID}&response_type=token&scope=playlist-modify-public&redirect_uri=${URI}`;
      // accessToken = document.url.match(/access_token=([^&]*)/);
      // let expiresIn = document.url.match(/expires_in=([^&]*)/);
      // console.log(accessToken);
      // console.log(expiresIn);
      // window.setTimeout(() => (accessToken = ''), expiresIn * 1000);
      // window.history.pushState('Access Token', null, '/');
    } else {
    }
  }
};

export default Spotify;
