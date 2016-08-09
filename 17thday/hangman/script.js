(function() {
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
    startFunction();
    input.focus();
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

  function submitFun() {
    if ( validInput.indexOf(input.value) > -1) {
      guess(input.value);
    } else {
      console.log('you should type a number, a letter, a comma or a symbol like !$%#')
    }
    input.value = '';
    input.focus();
  }

  document.addEventListener('keydown', function(e) {
    //when the user press enter key then call submit function
    if(e.keyCode === 13) {
        submitFun();
    }
  });

  submit.addEventListener('click', submitFun);
  function startFunction() {
    var myWords = 'Join our 18-week, immersive mentor-led programs in Berlin, Germany. Learn to write code, think creatively and get job-ready for a career you’ll love'
    var myArray = myWords.split(' ');
    start.innerHTML = 'replay';
    count = 0;
    corssedOut.innerHTML = ''
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
    str[j] = input;
  }

  function drawHangMan(count, wrongAnswer) {
    context.strokeStyle = 'black';
    context.lineWidth = 10;
    if(count === 1 || wrongAnswer) {
      context.strokeStyle = 'black';
      context.beginPath();
      context.arc(125, 125, 25, 0, 2 * Math.PI)
      context.stroke();
    }

    if (count === 2 || wrongAnswer) {
      context.beginPath();
      context.moveTo(125, 150);
      context.lineTo(125, 300);
      context.stroke();
    }
    if(count === 3 || wrongAnswer) {
      context.beginPath();
      context.moveTo(125, 200);
      context.lineTo(50, 100);
      context.stroke();
    }
    if (count === 4 || wrongAnswer) {
      context.beginPath();
      context.moveTo(125, 200);
      context.lineTo(200, 100);
      context.stroke();
    }
    if (count === 5 || wrongAnswer){
      context.beginPath();
      context.moveTo(125, 300);
      context.lineTo(175, 400);
      context.stroke();
    }
    if (count === 6 || wrongAnswer) {
      context.beginPath();
      context.moveTo(125, 300);
      context.lineTo(75, 400);
      context.stroke();
    }
    if (count === 7 || wrongAnswer) {
      context.beginPath();
      context.moveTo(0, 450);
      context.lineTo(100, 450);
      context.stroke();
    }
    if (count === 8 || wrongAnswer) {
      context.beginPath();
      context.moveTo(0, 450);
      context.lineTo(0, 75);
      context.stroke();
    }
    if (count === 9 || wrongAnswer) {
      context.beginPath();
      context.moveTo(0, 75);
      context.lineTo(125, 75);
      context.stroke();
    }


    if (count === 10 || wrongAnswer) {
      context.beginPath();
      context.moveTo(125, 75);
      context.lineTo(125, 100);
      context.stroke();
    }

    if (count > 10 || wrongAnswer){
      context.font = '30px Arial';
      context.fillText("Game Over!",100, 550);
    }
  }
})();
