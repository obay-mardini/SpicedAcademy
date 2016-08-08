  var word;
  var count = 0;
  var indexs = [];
  var inCorrectLetters = [];
  var input = document.getElementById('input');
  var validInput = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYY0123456789!$%#,-'
  var context = document.getElementById('myCanvas').getContext('2d');
  var score = document.getElementById('score');
  var guessP = document.getElementById('guess');
  var corssedOut = document.getElementById('corssedOut');
  var submit = document.getElementById('submit');
  var submitAll = document.getElementById('submitAll');
  var start = document.getElementById('start');
  var x = 250;
  var y = 100;

  start.addEventListener('click', function() {
    myFunction();
  });

  submitAll.addEventListener('click', function() {
    if (input.value === word) {
      score.innerHTML = 'WooW!';
      guessP.innerHTML = word;
    } else {
      drawHangMan(count, true);
      score.innerHTML = 'Do not try to be SMART!';
    }
  });

  submit.addEventListener('click', function() {
    if ( validInput.indexOf(input.value) > -1) {
      guess(input.value);
    } else {
      console.log('you should type a number, a letter, a comma or a symbol like !$%#')
    }
  });
function myFunction() {
  var myWords = 'Join our 18-week, immersive mentor-led programs in Berlin, Germany. Learn to write code, think creatively and get job-ready for a career you’ll love'
  var myArray = myWords.split(' ');
  indexs = [];
  inCorrectLetters = [];
  context.clearRect(0,0, 1000, 1000);

  chooseWord();
  function chooseWord() {
    //$.ajax
    $.ajax({
      url: 'http://randomword.setgetgo.com/get.php',
      method: 'GET',
    success: function(response) {
      word = response;
      printDashes(word);
    },
    error: function() {
      word = myArray[Math.floor(Math.random() * myArray.length)];
      printDashes(word);
    }
  });
    /* $.get way
    $.get('http://randomword.setgetgo.com/get.php', function(response) {
      word = response;
      printDashes(word);
    }).fail(function() {
      word = myArray[Math.floor(Math.random() * myArray.length)];
      printDashes(word);
    });
    */
    /* normal ajax call
    var myRequest = new XMLHttpRequest();
    myRequest.open('GET', 'http://randomword.setgetgo.com/get.php',

    myRequest.send();
    myRequest.addEventListener('readystatechange', function() {
      if (myRequest.readyState !== XMLHttpRequest.DONE){
          return;
      }

      var status;
      try {
        status = myRequest.status;
      } catch(e){
        console.log('i am in catch')
        return
      }
      if(status === 200) {
        word = myRequest.responseText;
        printDashes(word);
      } else {
        word = myArray[Math.floor(Math.random() * myArray.length)];
        printDashes(word);
      }
    })
    */

  }

    function printDashes(word) {
      console.log(word)
      str = '';
      for (var i = 0; i < word.length; i++){
        str += '-';
      }
      str = str.split('')
      guessP.innerHTML = str.join('');
    }
  }

  function guess(input) {
    if (word.indexOf(input) > -1) {
      for (var j = word.indexOf(input); j < word.length; j++){
        if(word[j] === input){
          replaceMe(j, input);
          if(str.indexOf('-') === -1) {
            score.style.fontSize = '100px'
            score.innerHTML = 'Congratulations'
          }
        }
      }
      guessP.innerHTML = str.join('');
    } else {
      inCorrectLetters.push(input);
      corssedOut.innerHTML = 'Incorrect Letters: ' + inCorrectLetters.join('_');
      count++;
      drawHangMan(count);
    }
  }
  function replaceMe(j, input) {
    // u should use replace but i will come back to it later
    //str = str.replace(str[j], input);
    str[j] = input;
  }

  function drawHangMan(count, wrongAnswer) {
    context.strokeStyle = 'black';
    context.lineWidth = 10;
    if(count === 1 || wrongAnswer) {
      context.strokeStyle = 'black';
      context.beginPath();
      context.arc(250, 100, 50, 0, 2 * Math.PI)
      context.stroke();
    }

    if (count === 2 || wrongAnswer) {
      context.beginPath();
      context.moveTo(250, 150);
      context.lineTo(250, 400);
      context.stroke();
    }
    if(count === 3 || wrongAnswer) {
      context.beginPath();
      context.moveTo(250, 250);
      context.lineTo(150, 130);
      context.stroke();
    }
    if (count === 4 || wrongAnswer) {
      context.beginPath();
      context.moveTo(250, 250);
      context.lineTo(350, 130);
      context.stroke();
    }
    if (count === 5 || wrongAnswer){
      context.beginPath();
      context.moveTo(250, 400);
      context.lineTo(350, 500);
      context.stroke();
    }
    if (count === 6 || wrongAnswer) {
      context.beginPath();
      context.moveTo(250, 400);
      context.lineTo(150, 500);
      context.stroke();
    }
    if (count === 7 || wrongAnswer) {
      context.beginPath();
      context.moveTo(0, 550);
      context.lineTo(200, 550);
      context.stroke();
    }
    if (count === 8 || wrongAnswer) {
      context.beginPath();
      context.moveTo(0, 550);
      context.lineTo(0, 0);
      context.stroke();
    }
    if (count === 9 || wrongAnswer) {
      context.beginPath();
      context.moveTo(0, 0);
      context.lineTo(250, 0);
      context.stroke();
    }
    if (count === 10 || wrongAnswer) {
      context.beginPath();
      context.moveTo(250, 0);
      context.lineTo(250, 50);
      context.stroke();
    }
    if (count >= 10 || wrongAnswer){
      score.style.fontSize = '100px'
      score.innerHTML = 'Gamve Over'
    }
  }
