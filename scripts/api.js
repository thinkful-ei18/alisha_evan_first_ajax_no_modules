'use strict';

/* global store*/
const api = function () {
  const API_KEY = 'AIzaSyAJFT82cmTK00-RIhwi8yDsRyoglaJtn2k';

  const BASE_URL = 'https://www.googleapis.com/youtube/v3/search';

  const fetchVideos = function(searchTerm, callback) {
    let queryObject = {};
    if (!store.nextPageToken) {
      queryObject = {
        part: 'snippet', 
        q: `${searchTerm}`,
        key: API_KEY
      };
    } else {
      queryObject = {
        part: 'snippet', 
        pageToken: store.nextPageToken,
        q: `${searchTerm}`,
        key: API_KEY
      };
    }
    $.getJSON(BASE_URL, queryObject, callback);
  };

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
    fetchVideos:fetchVideos,
    decorateResponse: decorateResponse
  };

}();

// console.log('hello');



/* 
Psuedocode for 'next page' button. 

1. Create button entitled 'next page of results'
2. Create event listener for when button is clicked.
3. when button is clicked, retrieve the 'next page token' from the JSON data of previous request.
4. 
*/