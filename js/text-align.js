// let isLeft = false;
document.querySelector('#left').addEventListener('click', function () {
    const myTextArea = getTextAreaValue();
    myTextArea.classList.toggle('text-left');
})

// let isCenter = false;
document.querySelector('#center').addEventListener('click', function () {
    const myTextArea = getTextAreaValue();

    /* if (!isCenter) {
        myTextArea.classList.add('text-center');
        isCenter = true;
    } else {
        myTextArea.classList.remove('text-center');
        isCenter = false;
    } */
    myTextArea.classList.toggle('text-center');
})

// let isRight = false;
document.querySelector('#right').addEventListener('click', function () {
    const myTextArea = getTextAreaValue();

    /* if (!isRight) {
        myTextArea.classList.add('text-right');
        isRight = true;
    } else {
        myTextArea.classList.remove('text-right');
        isRight = false;
    } */
    myTextArea.classList.toggle('text-right');
})

// let isJustified = false;
document.querySelector('#justify').addEventListener('click', function () {
    const myTextArea = getTextAreaValue();

    /* if (!isJustified) {
        myTextArea.classList.add('text-justify');
        isJustified = true;
    } else {
        myTextArea.classList.remove('text-justify');
        isJustified = false;
    } */
    myTextArea.classList.toggle('text-justify');
})