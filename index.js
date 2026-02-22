// Add JavaScript below
function ClickOMatic() {
        alert('Hello, I dont get ScrollReveal!');
  }

window.onload = function() {
 const click = document.getElementById('click');

 click.addEventListener("click", (event) => {
    ClickOMatic();
 });

 ScrollReveal().reveal('.site', {delay: 1000});

 ScrollReveal().reveal('div.picture-1', {distance: '50px'});

 ScrollReveal().reveal('div.picture-2', {duration: 500});

 ScrollReveal().reveal('div.picture-3', {origin: 'left'});

 ScrollReveal().reveal('div.picture-4', {interval: 600});

 ScrollReveal().reveal('div.picture-5', {origin: 'bottom'});

}; 


