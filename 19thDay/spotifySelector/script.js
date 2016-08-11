(function() {
  var count = 0;
  var x = 0;
  function createURL(name, type) {
    return 'https://api.spotify.com/v1/search?q=' + encodeURIComponent(name) + '&type=' +type + '&offset=' + count + '&limit=20';
  }

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

    function makeMe (urls, image, name){
      container.innerHTML += Handlebars.templates.results({urls,image, name});
      console.log(container.children.length, x)
    }

    $.get(url,function(response){

        type = type + 's';
        newArray = response[type].items;
        for (var i =0; i < newArray.length; i++) {
          x++
          try {

            makeMe(newArray[i].external_urls.spotify, response[type].items[i].images[0].url, response[type].items[i].name);

          } catch(e) {
            console.log(newArray[i].external_urls.spotify, response[type].items[i].images[0].url, response[type].items[i].name);
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

          if(document.body.scrollHeight <
        document.body.scrollTop +
        window.innerHeight + 20) {
          if(timer) {
            clearTimeout(timer);
          }

          timer = setTimeout(function() {
            loading.detach();
            window.removeEventListener('scroll', timing)
            loadSongs();
          }, 500);

        }
          })
      }
    })

    count++;
  }

  $('#go').on('click', function() {
    $('#container').empty();
    x = 0;
    loadSongs();
  });
})()
