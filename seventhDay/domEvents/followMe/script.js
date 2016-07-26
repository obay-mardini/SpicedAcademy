var rec = document.getElementById("rec");

document.addEventListener('mousemove', mouseEnter);

function mouseEnter(e) {
  console.log(e)
  rec.style.left = e.clientX - 50  + 'px';
  rec.style.top = e.clientY - 50 + 'px';
}
