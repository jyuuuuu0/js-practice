const openButton = document.querySelector('.open');
const containal = document.querySelector('.containal');

openButton.addEventListener('click', () => {
    containal.style.display='flex';
    openButton.style.display='none';
})

const closeButton = document.querySelector('.close');

closeButton.addEventListener('click', () => {
    containal.style.display='none';
    openButton.style.display='flex';
})
