(function() {
  var context = document.getElementById('myCanvas').getContext('2d');
  var x = 250;
  var y = 100;
 stickFiqure();
  function stickFiqure() {
  context.clearRect(0,0, 1000, 1000);
  document.addEventListener('keydown', function me(e){
    if (e.code === 'ArrowRight') {
      x += 20;
      document.removeEventListener('keydown', me);
      stickFiqure();
    }
    if (e.code === 'ArrowLeft') {
      x -= 20;
      document.removeEventListener('keydown', me);
      return stickFiqure();
    }
    if (e.code === 'ArrowUp') {
      y -= 20;
      document.removeEventListener('keydown', me);
      return stickFiqure();
    }
    if (e.code === 'ArrowDown') {
      y += 20;
      document.removeEventListener('keydown', me);
      return stickFiqure();
    }

  });

  context.strokeStyle = 'blue';
  context.beginPath();
  context.arc(x, y, 50, 0, 2 * Math.PI)
  context.stroke();
  context.beginPath();
  context.moveTo(x, y + 50);
  context.lineTo(x, y + 300);
  context.stroke();
  context.beginPath();
  context.moveTo(x, y + 150);
  context.lineTo(x-100, y +30);
  context.stroke();
  context.beginPath();
  context.moveTo(x, y + 150);
  context.lineTo(x+100, y +30);
  context.stroke();
  context.beginPath();
  context.moveTo(x, y + 300);
  context.lineTo(x+100, y +400);
  context.stroke();
  context.beginPath();
  context.moveTo(x, y + 300);
  context.stroke();
  context.lineTo(x-100, y + 400);
  context.stroke();
}
})()
