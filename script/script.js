const container = document.querySelector('.images-carrousel');
let xInicial, xAtual, scrolling;

container.addEventListener('mousedown', (e) => {
    xInicial = e.clientX;
    scrolling = true;
    container.style.cursor = 'grabbing'; 
    container.addEventListener('mousemove', handleMouseMove);
});

const handleMouseMove = (e) => {
    if (scrolling) {
        xAtual = e.clientX;
        const deltaX = xAtual - xInicial;
        const scrollLeft = container.scrollLeft - deltaX;
        container.scrollLeft = scrollLeft;
    }
};

container.addEventListener('mouseup', () => {
    scrolling = false;
    container.style.cursor = 'grab'; 
    container.removeEventListener('mousemove', handleMouseMove);
});

container.addEventListener('touchstart', (e) => {
  xInicial = e.touches[0].clientX;
  scrolling = true;
  container.style.cursor = 'grabbing';
  container.addEventListener('touchmove', handleTouchMove);
});

const handleTouchMove = (e) => {
  if (scrolling) {
    xAtual = e.touches[0].clientX;
    const deltaX = xAtual - xInicial;
    const scrollLeft = container.scrollLeft - deltaX;
    container.scrollLeft = scrollLeft;
  }
};

container.addEventListener('touchend', () => {
  scrolling = false;
  container.style.cursor = 'default'; // Reset cursor
  container.removeEventListener('touchmove', handleTouchMove);
});