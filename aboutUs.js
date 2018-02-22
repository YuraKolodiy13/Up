const progress = document.querySelectorAll('.skills__line');

setTimeout(function () {
    for(let i = 0; i < progress.length; i++){
        progress[i].style.width = progress[i].parentNode.previousElementSibling.querySelector('span').textContent
    }
}, 3000);
