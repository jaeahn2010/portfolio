const allContainers = document.getElementById('all-containers');
const topLeftBtn = document.getElementById('top-left-btn');
const topRightBtn = document.getElementById('top-right-btn');
const bottomLeftBtn = document.getElementById('bottom-left-btn');
const bottomRightBtn = document.getElementById('bottom-right-btn');
const allModals = document.getElementById('all-modals');
const topLeftModal = document.getElementById('top-left-modal');
const topRightModal = document.getElementById('top-right-modal');
const bottomLeftModal = document.getElementById('bottom-left-modal');
const bottomRightModal = document.getElementById('bottom-right-modal');
const modalCloseBtn = document.getElementById('modal-close-btn');

allContainers.addEventListener('click', function (evt) {
    let btn = evt.target.id;
    if (btn === 'top-left-btn') {
        allModals.style.display = 'flex';
        topLeftModal.style.display = 'block';
    } else if (btn === 'top-right-btn') {
        allModals.style.display = 'block';
        topRightModal.style.display = 'block';
    } else if (btn === 'bottom-left-btn') {
        allModals.style.display = 'block';
        bottomLeftModal.style.display = 'block';
    } else if (btn === 'bottom-right-btn') {
        allModals.style.display = 'block';
        bottomRightModal.style.display = 'block';
    }
});

modalCloseBtn.addEventListener('click', () => {
    allModals.style.display = 'none';
    topLeftModal.style.display = 'none';
    topRightModal.style.display = 'none';
    bottomLeftModal.style.display = 'none';
    bottomRightModal.style.display = 'none';
});