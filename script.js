function redirectToGift() {
    window.location.href = 'portrait.html';
}
function createConfetti() {
    const colors = ['#ff6b6b', '#6b8cff', '#6bff8e', '#ffcc6b', '#ff69b4'];
    
    for (let i = 0; i < 50; i++) {
        const confetti = document.createElement('div');
        confetti.className = 'confetti';
        confetti.style.left = Math.random() * 100 + 'vw';
        confetti.style.backgroundColor = colors[Math.floor(Math.random() * colors.length)];
        confetti.style.animationDuration = Math.random() * 3 + 3 + 's';
        confetti.style.opacity = Math.random();
        confetti.style.width = Math.random() * 10 + 5 + 'px';
        confetti.style.height = confetti.style.width;
        document.body.appendChild(confetti);
    }
}

createConfetti();
