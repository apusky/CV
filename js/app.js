//function to get lenght of logo letters
const logo = document.querySelectorAll("#logo path");

for(let i = 0;  i<logo.length; i++){
    console.log(`Letter ${i} is ${logo[i].getTotalLength()}`);
}

//function to get rid of preloader
window.addEventListener('load', () => {
    const preload = document.querySelector('.preload');
    preload.classList.add('preload-finish');
});