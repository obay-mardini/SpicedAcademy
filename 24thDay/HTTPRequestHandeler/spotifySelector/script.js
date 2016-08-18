(function() {
  var count = 0;
  var x = 0;
  var callLoadSongs = true;
  if (window.location.search) {
    interval = setInterval(function insideSetTImeOut() {
      if(document.body.scrollHeight <
        document.body.scrollTop +
        window.innerHeight + 20) {
        callLoadSongs || loadSongs();
      }
    }, 300);
  }

  function createURL(name, type) {
    return 'https://api.spotify.com/v1/search?q=' + encodeURIComponent(name) + '&type=' +type + '&offset=' + count + '&limit=20';
  }
  //usnig handlebars to constuct the items
  var templates = document.querySelectorAll('script[type="text/handlebars"]');
  Handlebars.templates = Handlebars.templates || {};
  Array.prototype.slice.call(templates).forEach(function(script) {
    Handlebars.templates[script.id] = Handlebars.compile(script.innerHTML);
  });

  function loadSongs() {
    var name = $('input').val();
    var type = $('select').val();
    var url = createURL(name,type);
    var timer;
//    loading.detach();
    if(typeof loading !== 'undefined') {
      console.log(loading)
      loading.remove();
      console.log(loading)
    }

    function makeMe (urls, image, name){
      container.innerHTML += Handlebars.templates.results({urls,image, name});
    }

    $.get(url,function(response){
      type = type + 's';
      newArray = response[type].items;
      for (var i =0; i < newArray.length; i++) {
        x++
        try {
          makeMe(newArray[i].external_urls.spotify, response[type].items[i].images[0].url, response[type].items[i].name);
        } catch(e) {
          makeMe(newArray[i].external_urls.spotify, "download.jpg", response[type].items[i].name);
          //console.log(newArray[i].external_urls.spotify, response[type].items[i].images[0].url, response[type].items[i].name);
        }
      }
      if(!window.location.search) {
        more = $('<button type="submit" id="more">more</button>').appendTo('#container')
        $('#more').on('click', function() {
          more.detach();
          loadSongs();
        });
      } else {
        loading = $('<p>LOADING......</p>').appendTo('#container');
      }
    });
    count++;
  }
  //end of loadSongs function
  $('#go').on('click', function() {
    callLoadSongs = false;
    $('#container').empty();
    x = 0;
    loadSongs();
  });
})()
