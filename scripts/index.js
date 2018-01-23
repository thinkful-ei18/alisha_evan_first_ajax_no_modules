'use strict';

const mockData = {
  'kind': 'youtube#searchListResponse',
  'etag': '"g7k5f8kvn67Bsl8L-Bum53neIr4/sYm47AZmLLEehbcgY6WYnk1niXU"',
  'nextPageToken': 'CAUQAA',
  'regionCode': 'US',
  'pageInfo': {
    'totalResults': 1000000,
    'resultsPerPage': 5
  },
  'items': [
    {
      'kind': 'youtube#searchResult',
      'etag': '"g7k5f8kvn67Bsl8L-Bum53neIr4/JXu2rWiRP9lBwwrnREUGQqb9Hg4"',
      'id': {
        'kind': 'youtube#video',
        'videoId': '7ct1jrv-hhc'
      },
      'snippet': {
        'publishedAt': '2018-01-21T04:03:41.000Z',
        'channelId': 'UCoh_z6QB0AGB1oxWufvbDUg',
        'title': 'Golden State Warriors vs Houston Rockets Full Game Highlights / Jan 20 / 2017-18 NBA Season',
        'description': 'Golden State Warriors vs Houston Rockets Full Game Highlights / Jan 20 / 2017-18 NBA Season Follow Us on Twitter: https://twitter.com/stayhls Like Us on Facebook: https://www.facebook.com/stayhls...',
        'thumbnails': {
          'default': {
            'url': 'https://i.ytimg.com/vi/7ct1jrv-hhc/default.jpg',
            'width': 120,
            'height': 90
          },
          'medium': {
            'url': 'https://i.ytimg.com/vi/7ct1jrv-hhc/mqdefault.jpg',
            'width': 320,
            'height': 180
          },
          'high': {
            'url': 'https://i.ytimg.com/vi/7ct1jrv-hhc/hqdefault.jpg',
            'width': 480,
            'height': 360
          }
        },
        'channelTitle': 'MLG Highlights',
        'liveBroadcastContent': 'none'
      }
    },
    {
      'kind': 'youtube#searchResult',
      'etag': '"g7k5f8kvn67Bsl8L-Bum53neIr4/pI2c1oHlB_qS8aEjI0ShCY62TgI"',
      'id': {
        'kind': 'youtube#video',
        'videoId': 'mhPP0UNneD8'
      },
      'snippet': {
        'publishedAt': '2018-01-21T02:45:13.000Z',
        'channelId': 'UCoh_z6QB0AGB1oxWufvbDUg',
        'title': 'Golden State Warriors vs Houston Rockets 1st Half Highlights / Jan 20 / 2017-18 NBA Season',
        'description': 'Golden State Warriors vs Houston Rockets 1st Half Highlights / Jan 20 / 2017-18 NBA Season Follow Us on Twitter: https://twitter.com/stayhls Like Us on Facebook: https://www.facebook.com/stayhls...',
        'thumbnails': {
          'default': {
            'url': 'https://i.ytimg.com/vi/mhPP0UNneD8/default.jpg',
            'width': 120,
            'height': 90
          },
          'medium': {
            'url': 'https://i.ytimg.com/vi/mhPP0UNneD8/mqdefault.jpg',
            'width': 320,
            'height': 180
          },
          'high': {
            'url': 'https://i.ytimg.com/vi/mhPP0UNneD8/hqdefault.jpg',
            'width': 480,
            'height': 360
          }
        },
        'channelTitle': 'MLG Highlights',
        'liveBroadcastContent': 'none'
      }
    },
    {
      'kind': 'youtube#searchResult',
      'etag': '"g7k5f8kvn67Bsl8L-Bum53neIr4/A2YDs0BzFXwzyZNJyOFgLItZIfM"',
      'id': {
        'kind': 'youtube#video',
        'videoId': 'hUZS6yW0fQk'
      },
      'snippet': {
        'publishedAt': '2018-01-16T03:54:25.000Z',
        'channelId': 'UCoh_z6QB0AGB1oxWufvbDUg',
        'title': 'Cleveland Cavaliers vs Golden State Warriors Full Game Highlights / Jan 15 / 2017-18 NBA Season',
        'description': 'Cleveland Cavaliers vs Golden State Warriors Full Game Highlights / Jan 15 / 2017-18 NBA Season Follow Us on Twitter: https://twitter.com/stayhls Like Us on Facebook: https://www.facebook.com/sta...',
        'thumbnails': {
          'default': {
            'url': 'https://i.ytimg.com/vi/hUZS6yW0fQk/default.jpg',
            'width': 120,
            'height': 90
          },
          'medium': {
            'url': 'https://i.ytimg.com/vi/hUZS6yW0fQk/mqdefault.jpg',
            'width': 320,
            'height': 180
          },
          'high': {
            'url': 'https://i.ytimg.com/vi/hUZS6yW0fQk/hqdefault.jpg',
            'width': 480,
            'height': 360
          }
        },
        'channelTitle': 'MLG Highlights',
        'liveBroadcastContent': 'none'
      }
    },
    {
      'kind': 'youtube#searchResult',
      'etag': '"g7k5f8kvn67Bsl8L-Bum53neIr4/oAMz_QNe_KRAeqyAFf2m645usRg"',
      'id': {
        'kind': 'youtube#video',
        'videoId': 'rOGzfEBzokI'
      },
      'snippet': {
        'publishedAt': '2018-01-18T03:25:46.000Z',
        'channelId': 'UCoh_z6QB0AGB1oxWufvbDUg',
        'title': 'Golden State Warriors vs Chicago Bulls Full Game Highlights / Jan 17 / 2017-18 NBA Season',
        'description': 'Golden State Warriors vs Chicago Bulls Full Game Highlights / Jan 17 / 2017-18 NBA Season Follow Us on Twitter: https://twitter.com/stayhls Like Us on Facebook: https://www.facebook.com/stayhls...',
        'thumbnails': {
          'default': {
            'url': 'https://i.ytimg.com/vi/rOGzfEBzokI/default.jpg',
            'width': 120,
            'height': 90
          },
          'medium': {
            'url': 'https://i.ytimg.com/vi/rOGzfEBzokI/mqdefault.jpg',
            'width': 320,
            'height': 180
          },
          'high': {
            'url': 'https://i.ytimg.com/vi/rOGzfEBzokI/hqdefault.jpg',
            'width': 480,
            'height': 360
          }
        },
        'channelTitle': 'MLG Highlights',
        'liveBroadcastContent': 'none'
      }
    },
    {
      'kind': 'youtube#searchResult',
      'etag': '"g7k5f8kvn67Bsl8L-Bum53neIr4/vfVVxelLWdpqDSTyHdfHACnHc6I"',
      'id': {
        'kind': 'youtube#video',
        'videoId': 'MhPdwzDKOb0'
      },
      'snippet': {
        'publishedAt': '2017-12-31T04:03:31.000Z',
        'channelId': 'UCoh_z6QB0AGB1oxWufvbDUg',
        'title': 'Golden State Warriors vs Memphis Grizzlies Full Game Highlights / Dec 30 / 2017-18 NBA Season',
        'description': 'Golden State Warriors vs Memphis Grizzlies Full Game Highlights / Dec 30 / 2017-18 NBA Season Follow Us on Twitter: https://twitter.com/stayhls Like Us on Facebook: https://www.facebook.com/stayh...',
        'thumbnails': {
          'default': {
            'url': 'https://i.ytimg.com/vi/MhPdwzDKOb0/default.jpg',
            'width': 120,
            'height': 90
          },
          'medium': {
            'url': 'https://i.ytimg.com/vi/MhPdwzDKOb0/mqdefault.jpg',
            'width': 320,
            'height': 180
          },
          'high': {
            'url': 'https://i.ytimg.com/vi/MhPdwzDKOb0/hqdefault.jpg',
            'width': 480,
            'height': 360
          }
        },
        'channelTitle': 'MLG Highlights',
        'liveBroadcastContent': 'none'
      }
    }
  ]
};
 


const API_KEY = 'AIzaSyAJFT82cmTK00-RIhwi8yDsRyoglaJtn2k';

const store = {
  videos: []
};

// TASK: Add the Youtube Search Base URL here:
// Documentation is here: https://developers.google.com/youtube/v3/docs/search/list#usage
const BASE_URL = 'https://www.googleapis.com/youtube/v3/search';

// TASK:
// 1. Create a `fetchVideos` function that receives a `searchTerm` and `callback`
// 2. Use `searchTerm` to construct the right query object based on the Youtube API docs
// 3. Make a getJSON call using the query object and sending the provided callback in as the last argument
// TEST IT! Execute this function and console log the results inside the callback.
const fetchVideos = function(searchTerm, callback) {
  const queryObject = {
    part: 'snippet', 
    q: `${searchTerm}`,
    key: API_KEY
  };
  $.getJSON(BASE_URL, queryObject, callback);
};


// TASK:
// 1. Create a `decorateResponse` function that receives the Youtube API response
// 2. Map through the response object's `items` array
// 3. Return an array of objects, where each object contains the keys `id`, `title`, 
// `thumbnail` which each hold the appropriate values from the API item object. You 
// WILL have to dig into several nested properties!
// TEST IT! Grab an example API response and send it into the function - make sure
// you get back the object you want.
const decorateResponse = function(response) {
  return response.items.map((video) => {
    return {
      title: video.snippet.title,
      description:video.snippet.description,
      thumbnail:video.snippet.thumbnails.medium.url,
      id: video.id.videoId
    };
  });
};


// TASK:
// 1. Create a `generateVideoItemHtml` function that receives the decorated object
// 2. Using the object, return an HTML string containing all the expected data
// TEST IT!
const generateVideoItemHtml = function(video) {
  return `
  <li>
    <span>${video.title}</span>
    <span>${video.description}</span>
    <span>${video.id}</span>
    <img src='${video.thumbnail}'>
  </li>
  `;
};


// TASK:
// 1. Create a `addVideosToStore` function that receives an array of decorated video 
// objects and sets the array as the value held in store.items
// TEST IT!
const addVideosToStore = function(videos) {
  store.videos = videos;
};


// TASK:
// 1. Create a `render` function
// 2. Map through `store.videos`, sending each `video` through your `generateVideoItemHtml`
// 3. Add your array of DOM elements to the appropriate DOM element
// TEST IT!
const render = function() {
  let storeVideos = store.videos.map(generateVideoItemHtml);
  console.log(storeVideos);
  $('.results').html(storeVideos);
};


// TASK:
// 1. Create a `handleFormSubmit` function that adds an event listener to the form
// 2. The listener should:
//   a) Prevent default event
//   b) Retrieve the search input from the DOM
//   c) Clear the search input field
//   d) Invoke the `fetchVideos` function, sending in the search value
//   e) Inside the callback, send the API response through the `decorateResponse` function
//   f) Inside the callback, add the decorated response into your store using the `addVideosToStore` function
//   g) Inside the callback, run the `render` function 
// TEST IT!
const handleFormSubmit = function() {
  $('.submitClass').submit(function(event) {
    event.preventDefault();
    let input = $('#search-term').val();
    $('#search-term').val('');
    fetchVideos(input, function(response) {
      // console.log(response);
      let decoratedItem = decorateResponse(response);
      // console.log(decoratedItem);
      addVideosToStore(decoratedItem);
      console.log(store);
      render();
    });
  });
};


// When DOM is ready:
$(function () {
  // TASK:
  // 1. Run `handleFormSubmit` to bind the event listener to the DOM
  handleFormSubmit();
});
