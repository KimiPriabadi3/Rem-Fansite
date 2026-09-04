document.querySelectorAll('.gallery-item img').forEach(img => {
  img.addEventListener('click', () => {
    if (img.parentElement.classList.contains('placeholder')) return;

    const overlay = document.createElement('div');
    overlay.className = 'lightbox-overlay';

    const bigImg = document.createElement('img');
    bigImg.src = img.src;
    overlay.appendChild(bigImg);

    overlay.addEventListener('click', () => overlay.remove());
    document.body.appendChild(overlay);
  });
});

document.querySelectorAll('.scene-item video').forEach(video => {
  video.addEventListener('error', () => {
    video.parentElement.classList.add('placeholder');
  });
});
