const submitBtn = document.getElementById('submit-btn');
const theForm = document.getElementById('the-form');
const tempOutput = document.getElementById('temp-output');
const userName = document.getElementById('user-name');
const userPhone = document.getElementById('user-phone');
const userEmail = document.getElementById('user-email');
const userTopic = document.getElementById('user-topic');
const userInquiry = document.getElementById('user-inquiry');
const softwareEngineering = document.getElementById('software-engineering');
const realEstate = document.getElementById('real-estate');
const music = document.getElementById('music');

submitBtn.addEventListener('click', () => {
    let firstNameInput = document.getElementById('first-name').value;
    let lastNameInput = document.getElementById('last-name').value;
    let phoneInput1 = document.getElementById('phone-1').value;
    let phoneInput2 = document.getElementById('phone-2').value;
    let phoneInput3 = document.getElementById('phone-3').value;
    let emailInput = document.getElementById('email').value;
    let inquiryInput = document.getElementById('inquiry').value;

    if (firstNameInput === '' || lastNameInput === '') {
        alert('Name field cannot be blank.');
        location.reload();
    }
    if ((phoneInput1.length !== 3 || Number(phoneInput1) === NaN) || (phoneInput2.length !== 3 || Number(phoneInput2) === NaN) || (phoneInput3.length !== 4 || Number(phoneInput3) === NaN)) {
        alert('Invalid phone number.');
        location.reload();
    } else if (!emailInput.includes('@') || !emailInput.includes('.')) {
        alert('Invalid email.');
        location.reload();
    }

    let topic = '';
    if (softwareEngineering.checked === true) topic = 'Software engineering';
    if (realEstate.checked === true) topic = 'Real estate';
    if (music.checked === true) topic = 'Music';

    theForm.style.display = 'none';
    tempOutput.style.display = 'block';

    userName.innerText = `Your name: ${firstNameInput} ${lastNameInput}`;
    userPhone.innerText = `Your phone number: (${phoneInput1}) ${phoneInput2}-${phoneInput3}`;
    userEmail.innerText = `Your email: ${emailInput}`;
    userTopic.innerText = `Your topic of interest: ${topic}`;
    userInquiry.innerText = `Your inquiry: ${inquiryInput}`;
});