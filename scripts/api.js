'use strict';
/* global store*/

/*
I added the console log on line 39 to test if my prev and next buttons were actually working. Initially I thought they were but after more testing, they're working in a weird order. If I press 'next, next, prev, prev, next'... the corresponding page tokens were for 'next, next, next, prev, prev'.
I'm not sure why that is....will deal with at a later date.
*/

const api = function() {
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
    // console.log(queryObject.pageToken);
    $.getJSON(BASE_URL, queryObject, callback);
  };
  // console.log($.getJSON);

  const decorateResponse = function(response) {
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


