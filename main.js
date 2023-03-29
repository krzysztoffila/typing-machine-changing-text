// http://websamuraj.pl/examples/js/projekt8/
// Uzyskaj efekt jak pod tym linkiem 
// Użyj setTimeout zamiast setInterval,
// Opóźniej start pisanie każdego słowa
// Uwaga: Zadanie bardzo trudne

const spnText = document.querySelector('.text');
const spnCursor = document.querySelector('.cursor');
const txt = ['tekst numer 1', 'tekst numer 2', ' no i w koncu tekst3']
let activeLetter = -15;
let activeText = 0;

const addLetter = () => {
    if (activeLetter >= 0) {
        spnText.textContent += txt[activeText][activeLetter];
    }
    activeLetter++
    if (activeLetter === txt[activeText].length) {
        activeText++
        if (activeText === txt.length) return
        return setTimeout(() => {
            activeLetter = -15;
            spnText.textContent = ''
            addLetter()
        }, 2000)
    }
    setTimeout(addLetter, 100)
}


// Implementacja

addLetter(); //pierwsze wywołanie



// Animacja kursora (zostaw bez zmian)
const cursorAnimation = () => {
    spnCursor.classList.toggle('active');
}
setInterval(cursorAnimation, 2000);