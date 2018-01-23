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

  return {
    fetchVideos:fetchVideos,
  };

};