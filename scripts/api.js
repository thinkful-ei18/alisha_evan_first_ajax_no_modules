'use strict';

/* global store*/
const api = function () {
  const API_KEY = 'AIzaSyAJFT82cmTK00-RIhwi8yDsRyoglaJtn2k';

  const BASE_URL = 'https://www.googleapis.com/youtube/v3/search';

  const fetchVideos = function(searchTerm, callback) {
    let queryObject = {};
    if (!store.nextPageToken && !store.prevPageToken) {
      queryObject = {
        part: 'snippet', 
        q: `${searchTerm}`,
        key: API_KEY
      };
    } else if (store.nextPageToken && store.prevPageToken) {
      queryObject = {
        part: 'snippet', 
        q: `${searchTerm}`,
        key: API_KEY,
        pageToken: store.nextPageToken && store.prevPageToken
      };
    } else if (store.nextPageToken) {
      queryObject = {
        part: 'snippet',
        q: `${searchTerm}`,
        key: API_KEY,
        pageToken: store.nextPageToken,
      };
    } else if (store.prevPageToken) {
      queryObject = {
        part: 'snippet',
        q: `${searchTerm}`,
        key: API_KEY,
        pageToken: store.prevPageToken,
      };
    }
    $.getJSON(BASE_URL, queryObject, callback);
  };
  console.log($.getJSON);

  const decorateResponse = function (response) {
    return response.items.map((video) => {
      return {
        title: video.snippet.title,
        description: video.snippet.description,
        thumbnail: video.snippet.thumbnails.medium.url,
        channelId: video.snippet.channelId,
        id: video.id.videoId,
        channelTitle:video.snippet.channelTitle
      };
    });
  };

  return {
    fetchVideos,
    decorateResponse
  };

}();


/* 
Psuedocode for 'next page' button. 

1. Create button entitled 'next page of results'
2. Create event listener for when button is clicked.
3. when button is clicked, retrieve the 'next page token' from the JSON data of previous request.
4. 
*/