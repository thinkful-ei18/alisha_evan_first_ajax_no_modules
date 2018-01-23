'use strict';
/* global decorateResponse fetchVideos addVideosToStore store api */

const videoList = function() {

  const generateVideoItemHtml = function (video) {
    return `
  <li>
    <span>${video.title}</span>
    <span>${video.description}</span>
    <span>${video.id}</span>
    <a href='https://www.youtube.com/watch?v=${video.id}'><img src='${video.thumbnail}'/></a>
    <a href='https://www.youtube.com/channel/${video.channelId}'>${video.channelTitle}</a>
  </li>
  `;
  };

  const render = function () {
    let storeVideos = store.videos.map(generateVideoItemHtml);
    $('.results').html(storeVideos);
  };


  const handleFormSubmit = function () {
    $('.submitClass').submit(function (event) {
      event.preventDefault();
      let input = $('#search-term').val();
      store.currentSearch = input;
      $('#search-term').val('');
      api.fetchVideos(input, function (response) {
        store.nextPageToken = response.nextPageToken;
        let decoratedItem = api.decorateResponse(response);
        store.addVideosToStore(decoratedItem);
        render();
      });
    });
  };

  const handleNextPageButton = function () {
    $('.nextPageButton').on('click',(event)=> {
      event.preventDefault();
      let input = store.currentSearch;
      api.fetchVideos(input, function (response) {
        let decoratedItem = api.decorateResponse(response);
        store.addVideosToStore(decoratedItem);
        store.nextPageToken = response.nextPageToken;
        render();
      });
    });
  }; 

  const bindEventListeners = function () {
    handleFormSubmit();
    handleNextPageButton();

  };


  return {
    bindEventListeners,
    render
  };
}(); 

console.log(api);
// console.log('video list');