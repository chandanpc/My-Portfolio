function printResume() {
    window.print();
}

document.addEventListener('DOMContentLoaded', (event) => {
    const printButton = document.createElement('button');
    printButton.innerText = 'Print Resume';
    printButton.addEventListener('click', printResume);
    document.body.insertBefore(printButton, document.querySelector('.resume'));
});
