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

const iconDrawerBox = document.getElementById('iconDrawer');
const DrawerBox = document.querySelector('.menuDrawer');
const drawerClose = document.querySelector('#drawerClose');
const noirCeurBox = document.querySelector('.noirCeur');

iconDrawerBox.addEventListener('click', () => {
  DrawerBox.style.display = 'flex';
  noirCeurBox.style.display = 'block';
  document.body.classList.add('noscroll');
});

drawerClose.addEventListener('click', () => {
  DrawerBox.style.display = 'none';
  noirCeurBox.style.display = 'none';
  document.body.classList.remove('noscroll');
});
