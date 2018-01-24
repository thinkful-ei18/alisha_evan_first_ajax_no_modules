'use strict';
/* global decorateResponse fetchVideos addVideosToStore store api */

const videoList = function() {

  const generateVideoItemHtml = function(video) {
    return `
      <li>
        <a id="img" href='https://www.youtube.com/watch?v=${video.id}'><img src='${video.thumbnail}' alt =''/></a>
        <a id="title" href='https://www.youtube.com/watch?v=${video.id}'><h2>${video.title}</h2></a>
        <a id="channelId" href='https://www.youtube.com/channel/${video.channelId}'>${video.channelTitle}</a>
        <p>${video.description}</p>
        <p>${video.id}</p>
      </li>
  `;
    // <div>
    //   <span>
    //     <a id = "img" href='https://www.youtube.com/watch?v=${video.id}'><img src='${video.thumbnail}' alt =''/></a>
    //   </span>
    //   <li>
    //     <a id = "title" href='https://www.youtube.com/watch?v=${video.id}'><h2>${video.title}</h2></a>
    //     <a id = "channelId" href='https://www.youtube.com/channel/${video.channelId}'>${video.channelTitle}</a>
    //     <p>${video.description}</p>
    //     <p>${video.id}</p>
    //   </li>
    // <div>

  };

  const render = function() {
    let storeVideos = store.videos.map(generateVideoItemHtml);
    $('.results').html(storeVideos);
  };

  // 'response' is not an abstract term. It's the data we receive in JSON format once we've reached out to whatever URL [BASE_URL in this example], which is an object. that's how we can call one of its properties on line 32.
  const handleFormSubmit = function() {
    $('.submitClass').submit(function(event) {
      event.preventDefault();
      store.currentSearch = $('#search-term').val();
      $('#search-term').val('');
      api.fetchVideos(store.currentSearch, function(response) {
        store.nextPageToken = response.nextPageToken;
        let decoratedItem = api.decorateResponse(response);
        store.addVideosToStore(decoratedItem);
        render();
      });
    });
  };

  const handleNextPageButton = function() {
    $('.nextPageButton').on('click',(event)=> {
      event.preventDefault();
      api.fetchVideos(store.currentSearch, function(response) {
        let decoratedItem = api.decorateResponse(response);
        store.addVideosToStore(decoratedItem);
        store.nextPageToken = response.nextPageToken;
        render();
      });
    });
  }; 

  const handlePrevPageButton = function() {
    $('.prevPageButton').on('click', (event) => {
      event.preventDefault();
      api.fetchVideos(store.currentSearch, function(response) {
        let decoratedItem = api.decorateResponse(response);
        store.addVideosToStore(decoratedItem);
        store.prevPageToken = response.prevPageToken;
        render();
      });
    });
  }; 

  const bindEventListeners = function() {
    handleFormSubmit();
    handleNextPageButton();
    handlePrevPageButton();
  };


  return {
    bindEventListeners,
    render
  };
}(); 