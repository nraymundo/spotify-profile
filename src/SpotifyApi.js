import querystring from "querystring";
import { Buffer } from 'buffer';

const TOKEN_ENDPOINT = `https://accounts.spotify.com/api/token`;
const RECENTLY_PLAYED_ENDPOINT = `https://api.spotify.com/v1/me/player/recently-played?limit=1`;
const TOP_ARTISTS_ENDPOINT = `https://api.spotify.com/v1/me/top/artists?time_range=long_term&limit=20`;
const TOP_TRACKS_ENDPOINT = `https://api.spotify.com/v1/me/top/tracks?time_range=long_term&limit=20`;
const client_id = import.meta.env.VITE_REACT_APP_SPOTIFY_CLIENT_ID;
const client_secret = import.meta.env.VITE_REACT_APP_SPOTIFY_CLIENT_SECRET;
const refresh_token = import.meta.env.VITE_REACT_APP_SPOTIFY_REFRESH_TOKEN;
const getAccessToken = async () => {
    const basic = Buffer.from(`${client_id}:${client_secret}`).toString("base64");
    const response = await fetch(TOKEN_ENDPOINT, {
        method: "POST",
        headers: {
            Authorization: `Basic ${basic}`,
            "Content-Type": "application/x-www-form-urlencoded",
        },
        body: querystring.stringify({
            grant_type: "refresh_token",
            refresh_token,
        }),
    });
    
    return response.json();
};

export const getRecentlyPlayed = async (client_id, client_secret, refresh_token) => {
  const { access_token } = await getAccessToken(
      client_id,
      client_secret,
      refresh_token
  );
  return fetch(RECENTLY_PLAYED_ENDPOINT, {
      headers: {
          Authorization: `Bearer ${access_token}`,
      },
  });
};

export const getUserTopArtists = async (client_id, client_secret, refresh_token) => {
  const { access_token } = await getAccessToken(
      client_id,
      client_secret,
      refresh_token
  );
  return fetch(TOP_ARTISTS_ENDPOINT, {
      headers: {
          Authorization: `Bearer ${access_token}`,
      },
  });
};

export const getUserTopTracks = async (client_id, client_secret, refresh_token) => {
  const { access_token } = await getAccessToken(
      client_id,
      client_secret,
      refresh_token
  );
  return fetch(TOP_TRACKS_ENDPOINT, {
      headers: {
          Authorization: `Bearer ${access_token}`,
      },
  });
};

export async function getRecentlyPlayedInfo() {
  const response = await getRecentlyPlayed(client_id, client_secret, refresh_token);
  if (response.status === 204 || response.status > 400) {
      return false;
  }
  const song = await response.json();
  // const artistsArray = [];
  // song.items[0].track.artists.forEach(artist => {
  //   artistsArray.push(artist.name);
  // });
  const title = song.items[0].track.name;
  // const artists = artistsArray.join(', ');
  const artist = song.items[0].track.artists[0].name;
  const url = song.items[0].track.external_urls.spotify;
  
  return { title, artist, url };
}

export async function getTopArtists() {
  const response = await getUserTopArtists(client_id, client_secret, refresh_token);

  if (response.status === 204 || response.status > 400) {
      return false;
  }

  const data = await response.json();
  const artistData = [];
  data.items.forEach(artist => {
    artistData.push({
      name: artist.name,
      image: artist.images[0].url,
    })
  });

  return artistData;
}

function msToMinutesAndSeconds(ms) {
  var minutes = Math.floor(ms / 60000);
  var seconds = ((ms % 60000) / 1000).toFixed(0);
  return (
    seconds == 60 ?
    (minutes+1) + ":00" :
    minutes + ":" + (seconds < 10 ? "0" : "") + seconds
  );
}

export async function getTopTracks() {
  const response = await getUserTopTracks(client_id, client_secret, refresh_token);

  if (response.status === 204 || response.status > 400) {
      return false;
  }

  const data = await response.json();
  const trackData = [];
  data.items.forEach(track => {
    console.log(track)
    const artists = [];
    track.artists.forEach(artist => {
      artists.push(artist.name);
    });
    trackData.push({
      name: track.name,
      image: track.album.images[0].url,
      artists: artists,
      length: msToMinutesAndSeconds(track.duration_ms),
    })
  });

  return trackData;
}