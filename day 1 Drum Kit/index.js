window.addEventListener('keydown', (e) => {
    console.log(e.key)
    const sound = document.querySelector(`audio[data-key="${e.key}"`);
    sound.play();
});