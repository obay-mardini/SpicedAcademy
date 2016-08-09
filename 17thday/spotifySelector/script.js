(function() {
  var count = 0;
  function createURL(name, type) {
    return 'https://api.spotify.com/v1/search?q=' + encodeURIComponent(name) + '&type=' +type + '&offset=' + count + '&limit=5';
  }

  function loadSongs() {
    var name = $('input').val();
    var type = $('select').val();
    var url = createURL(name,type);
    var timer;
    $.get(url,function(response){
      if(type === 'album'){
        for (var i =0; i < response.albums.items.length; i++) {
          try {
                $('<div><a href=' + response.albums.items[i].external_urls.spotify + '><img src=' + response.albums.items[i].images[1].url + '><span>' + response.albums.items[i].name + '</span></a></div>').appendTo('#container');
          } catch(e) {
          }
        }
      } else {
        for (var i =0; i < response.artists.items.length; i++) {
          try {
          $('<div><a href=' + response.artists.items[i].external_urls.spotify + '><img src=' + response.artists.items[i].images[1].url + '></a><span>' + response.artists.items[i].name + '</span></a></div>').appendTo('#container');
          } catch(e) {
            console.log(e)
          }
        }
      }

      if(!window.location.search) {
        more = $('<button type="submit" id="more">more</button>').appendTo('#container')
        $('#more').on('click', function() {
          more.detach()
          loadSongs();
        });
      } else {
        loading = $('<p>LOADING......</p>').appendTo('#container');

        window.addEventListener('scroll', function timing() {

        if(timer) {
          clearTimeout(timer);
        }

        timer = setTimeout(function() {
          loading.detach();
          loadSongs();
        }, 1000);
          window.removeEventListener('scroll', timing)
        })
      }
    })

    count++;
  }

  $('#go').on('click', function() {
    $('#container').empty();
    loadSongs();
  });

})()
