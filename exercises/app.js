let modal = document.getElementById("myModal");
let body = document.querySelector('body');
let hambur = document.querySelector('.menu');
let closemenu = document.querySelector('.closebtn');

let btn = document.getElementById("myBtn");

let span = document.getElementsByClassName("close")[0];

btn.onclick = function() {
  modal.style.display = "block";
  body.style.position = 'fixed';
}

span.onclick = function() {
  modal.style.display = "none";
  body.style.position = 'static';
}

window.onclick = function(event) {
  if (event.target == modal) {
    modal.style.display = "none";
    body.style.position = 'static';
  }
}

hambur.addEventListener('click', function(e) {
  if(e.target.classList.contains('menu')) {
  document.getElementById("myNav").style.width = "100%";
  document.querySelector('.overlay-content').querySelectorAll('a').forEach(
    ele => {ele.style.display= 'block';
    }
  )
  document.getElementById('closebtn').style.display = 'block';
}
})

closemenu.addEventListener('click', function(e){
  if(e.target.classList.contains('closebtn')) {
    document.getElementById("myNav").style.width = "0%";
  }
})