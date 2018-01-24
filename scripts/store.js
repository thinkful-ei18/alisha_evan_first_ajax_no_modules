'use strict';

/* Global store*/

const store = function () {
  const videos = [];

  const addVideosToStore = function(videos) {
    this.videos = videos;
  };

  let currentSearch = '';

  let nextPageToken = '';

  let prevPageToken = '';

  let requestPrevious = false;

  return {
    videos:videos,
    addVideosToStore: addVideosToStore,
    nextPageToken:nextPageToken,
    currentSearch,
    prevPageToken,
    requestPrevious
    
  };
}();