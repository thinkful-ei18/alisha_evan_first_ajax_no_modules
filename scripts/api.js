'use strict';

const api = function () {
  const API_KEY = 'AIzaSyAJFT82cmTK00-RIhwi8yDsRyoglaJtn2k';

  const BASE_URL = 'https://www.googleapis.com/youtube/v3/search';

  const fetchVideos = function(searchTerm, callback) {
    const queryObject = {
      part: 'snippet', 
      q: `${searchTerm}`,
      key: API_KEY
    };
    $.getJSON(BASE_URL, queryObject, callback);
  };

  const decorateResponse = function (response) {
    return response.items.map((video) => {
      return {
        title: video.snippet.title,
        description: video.snippet.description,
        thumbnail: video.snippet.thumbnails.medium.url,
        id: video.id.videoId
      };
    });
  };

  return {
    fetchVideos:fetchVideos,
    decorateResponse: decorateResponse
  };

}();

console.log('hello');