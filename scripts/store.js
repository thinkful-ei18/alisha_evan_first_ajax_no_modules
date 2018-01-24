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

  return {
    videos,
    addVideosToStore,
    currentSearch,
    nextPageToken,
    prevPageToken
  };
}();