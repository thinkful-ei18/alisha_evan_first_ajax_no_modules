'use strict';

/* Global store*/

const store = function () {
  const videos = [];

  const setVideos = (videos) => {
    this.videos = videos;
  };
  return {
    videos:videos,
    setVideos:setVideos,
    
  };
};