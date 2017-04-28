const popup = document.querySelector('.demo-popup');

function animate () {
  popup.classList.toggle('demo-popup');
  popup.classList.toggle('demo-popup-is-visible');
}

document.querySelector('.demo-popup-container').addEventListener('click', event => {
  if (event.target.classList.contains('oph-button-confirm') || event.target.classList.contains('oph-button-cancel')) {
    animate();
  }
});
