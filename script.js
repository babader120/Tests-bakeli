const btnForms = document.querySelector('.divFormation');
const modalBox = document.querySelector('.topbar2');
const main = document.querySelector('main');

btnForms.addEventListener('click', (e) => {
  e.stopPropagation();
  if (modalBox.style.display === 'flex') {
    modalBox.style.display = 'none';
  } else {
    modalBox.style.display = 'flex';
  }
});

main.addEventListener('click', () => {
  modalBox.style.display = 'none';
});
