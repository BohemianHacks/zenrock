const sand = document.querySelector('.raked-sand');

sand.addEventListener('click', (event) => {
  const x = event.clientX - sand.offsetLeft;
  const y = event.clientY - sand.offsetTop;

  const ripple = document.createElement('div');
  ripple.classList.add('ripple');
  ripple.style.left = x + 'px';
  ripple.style.top = y + 'px';
  sand.appendChild(ripple);

  setTimeout(() => {
    ripple.remove();
  }, 1000);
});
