document.querySelectorAll('.frame').forEach(frame => {
    frame.addEventListener('click', () => {
        frame.classList.toggle('enlarged');
    });
});

function showCredits() {
    document.getElementById('credits-modal').style.display = 'block';
}

function hideCredits() {
    document.getElementById('credits-modal').style.display = 'none';
}