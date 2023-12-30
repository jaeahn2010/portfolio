const allContainers = document.getElementById('all-containers');
const allModals = document.getElementById('all-modals');
const topLeftBtn = document.getElementById('top-left-btn');
const topRightBtn = document.getElementById('top-right-btn');
const bottomLeftBtn = document.getElementById('bottom-left-btn');
const bottomRightBtn = document.getElementById('bottom-right-btn');
const middleModal = document.getElementById('middle-modal');
const topLeftModal = document.getElementById('top-left-modal');
const topRightModal = document.getElementById('top-right-modal');
const bottomLeftModal = document.getElementById('bottom-left-modal');
const bottomRightModal = document.getElementById('bottom-right-modal');
const modalCloseBtn = document.getElementById('modal-close-btn');

allContainers.addEventListener('click', (evt) => {
    let btn = evt.target.id;
    allModals.style.display = 'flex';
    topLeftModal.style.display = 'none';
    topRightModal.style.display = 'none';
    middleModal.style.display = 'none';
    bottomLeftModal.style.display = 'none';
    bottomRightModal.style.display = 'none';
    if (btn === 'top-left-btn') {
        topLeftModal.style.display = 'block';
    } else if (btn === 'top-right-btn') {
        topRightModal.style.display = 'block';
    } else if (btn === 'middle-container') {
        middleModal.style.display = 'block';
    } else if (btn === 'bottom-left-btn') {
        bottomLeftModal.style.display = 'block';
    } else if (btn === 'bottom-right-btn') {
        bottomRightModal.style.display = 'block';
        let clientCount = Number(document.getElementById('client-count').innerText)
        let count = 0;
        let timeout;
        countUp();
        function countUp() {
            document.getElementById('client-count').innerText = count;
            if (count < clientCount) {
                count++;
                timeout = setTimeout(countUp, 5);
            }
        }
    }
});

modalCloseBtn.addEventListener('click', () => {
    allModals.style.display = 'none';
    topLeftModal.style.display = 'none';
    topRightModal.style.display = 'none';
    middleModal.style.display = 'none';
    bottomLeftModal.style.display = 'none';
    bottomRightModal.style.display = 'none';
});