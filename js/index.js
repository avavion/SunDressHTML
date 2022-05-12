const scrollOn = () => document.body.style.overflow = '';
const scrollOff = () => document.body.style.overflow = 'hidden';

const init = () => {
    console.log('init();');
}

document.addEventListener('DOMContentLoaded', init);