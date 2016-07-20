function passed(str) {
  return function() {
    console.log(str);
    }
}

function waitThenRun(callback) {
  setTimeout(callback, 1500);
}

waitThenRun(passed('hello'));
