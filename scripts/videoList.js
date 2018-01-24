'use strict';
/* global decorateResponse fetchVideos addVideosToStore store api */

const videoList = function() {

  const generateVideoItemHtml = function (video) {
    return `
  <li class='videoUnit'>
    <span class='videoTitle'>${video.title}</span>
    <a href='https://www.youtube.com/watch?v=${video.id}'><img src='${video.thumbnail}'/></a>
    <span>${video.description}</span>
    <p>By <a href='https://www.youtube.com/channel/${video.channelId}'>${video.channelTitle}</a></p>
  </li>
  `;
  };

  const render = function () {
    let storeVideos = store.videos.map(generateVideoItemHtml);
    $('.results').html(storeVideos);
    $('.results')
      .css('display', 'flex')
      .hide()
      .fadeIn();
  };


  const handleFormSubmit = function () {
    $('.submitClass').submit(function (event) {
      event.preventDefault();
      let input = $('#search-term').val();
      store.currentSearch = input;
      $('#search-term').val('');
      api.fetchVideos(input, function (response) {
        store.nextPageToken = response.nextPageToken;
        store.prevPageToken = response.prevPageToken;
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
        store.prevPageToken = response.prevPageToken;
        render();
        console.log(store);
      });
    });
  }; 

  const handlePreviousPageButton = function () {
    $('.previousPageButton').on('click',(event)=> {
      console.log('previous ran');
      event.preventDefault();
      let input = store.currentSearch;
      store.requestPrevious = true;
      api.fetchVideos(input, function (response) {
        let decoratedItem = api.decorateResponse(response);
        store.addVideosToStore(decoratedItem);
        store.nextPageToken = response.nextPageToken;
        store.prevPageToken = response.prevPageToken;
        render();
        store.requestPrevious = false;
        console.log(store);
      });
    });
  }; 

  const bindEventListeners = function () {
    handleFormSubmit();
    handleNextPageButton();
    handlePreviousPageButton();

  };


  return {
    bindEventListeners,
    render
  };
}(); 

console.log(api);
// console.log('video list');