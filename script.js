function handleYes() {
    const celebration = document.getElementById('celebration');
    celebration.classList.remove('hidden');
    
    // Play celebration sound (optional)
    playHeartAnimation();
}

function moveNoButton() {
    const noBtn = document.getElementById('noBtn');
    
    // Generate random position
    const randomX = Math.random() * (window.innerWidth - 150);
    const randomY = Math.random() * (window.innerHeight - 100);
    
    // Move button with animation
    noBtn.style.position = 'fixed';
    noBtn.style.left = randomX + 'px';
    noBtn.style.top = randomY + 'px';
    noBtn.style.transition = 'all 0.3s ease';
    
    // Increase yes button size slightly each time
    const yesBtn = document.querySelector('.yes-btn');
    const currentSize = parseFloat(window.getComputedStyle(yesBtn).padding);
    yesBtn.style.padding = (currentSize + 2) + 'px 40px';
    yesBtn.style.fontSize = (parseFloat(window.getComputedStyle(yesBtn).fontSize) + 0.1) + 'px';
}

function resetPage() {
    location.reload();
}

function playHeartAnimation() {
    // Create floating hearts on celebration
    for (let i = 0; i < 15; i++) {
        const heart = document.createElement('div');
        heart.textContent = ['💕', '💖', '💗', '💝', '💓'][Math.floor(Math.random() * 5)];
        heart.style.position = 'fixed';
        heart.style.left = Math.random() * window.innerWidth + 'px';
        heart.style.top = Math.random() * window.innerHeight + 'px';
        heart.style.fontSize = '2rem';
        heart.style.animation = 'float 3s ease-out forwards';
        heart.style.pointerEvents = 'none';
        document.body.appendChild(heart);
        
        setTimeout(() => heart.remove(), 3000);
    }
}

// Mobile touch support for no button
document.getElementById('noBtn').addEventListener('touchstart', function(e) {
    e.preventDefault();
    moveNoButton();
});