'use strict';
/* global decorateResponse fetchVideos addVideosToStore store api */

const videoList = function() {

  const generateVideoItemHtml = function (video) {
    return `
  <li>
    <span>${video.title}</span>
    <span>${video.description}</span>
    <span>${video.id}</span>
    <img src='${video.thumbnail}'>
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
      $('#search-term').val('');
      api.fetchVideos(input, function (response) {
        let decoratedItem = api.decorateResponse(response);
        store.addVideosToStore(decoratedItem);
        render();
      });
    });
  };

  const bindEventListeners = function () {
    handleFormSubmit();
  };


  return {
    bindEventListeners,
    render
  }; 

}();

console.log(api);
// console.log('video list');