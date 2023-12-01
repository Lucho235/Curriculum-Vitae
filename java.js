const hoverElements = document.querySelectorAll('.hover-effect');

hoverElements.forEach(element => {
  element.addEventListener('mouseover', () => {
    element.classList.add('hovered');
  });

  element.addEventListener('mouseout', () => {
    element.classList.remove('hovered');
  });
});
