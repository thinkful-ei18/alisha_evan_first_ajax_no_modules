'use strict';

/* Global store*/

const store = function () {
  const videos = [];

  const addVideosToStore = function(videos) {
    this.videos = videos;
  };

  return {
    videos:videos,
    addVideosToStore: addVideosToStore,
    
  };
}();