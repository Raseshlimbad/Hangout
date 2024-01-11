const wrapper = document.querySelector('.wrapper');
const question = document.querySelector('.question');
const yesBtn = document.querySelector('.yes-btn');
const noBtn = document.querySelector('.no-btn');
const img = document.querySelector('.asking');

const wrapperRect = wrapper.getBoundingClientRect();
const noBtnRect = noBtn.getBoundingClientRect();

// function changeImage(){
//     var img = document.getElementsByClassName('asking');
//     img.src = '/smile-peach-cat.gif';
// }

yesBtn.addEventListener('click', () => {
    question.innerHTML = 'Yayy!! Tell me When in DM/CALL??';
    img.src = '/smile-peach-cat.gif';
    img.style.width = '270px';
    img.style.height = '230px';

    // var img = document.getElementsByClassName('asking');
    // img.src = 'smile-peach-cat.gif';
});

noBtn.addEventListener('mouseover', () => {
    const i = Math.floor(Math.random() * (wrapperRect.width - noBtnRect.width)) +1;
    const j = Math.floor(Math.random() * (wrapperRect.height - noBtnRect.height)) +1;

    noBtn.style.left = i + 'px';
    noBtn.style.top = j + 'px';
});

