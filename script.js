document.querySelectorAll('.frame').forEach(frame => {
    frame.addEventListener('click', () => {
        frame.classList.toggle('enlarged');
    });
});