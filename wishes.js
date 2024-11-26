document.addEventListener('DOMContentLoaded', function() {
    const urlParams = new URLSearchParams(window.location.search);
    const name = decodeURIComponent(urlParams.get('name'));
    
    const userNameElement = document.querySelector('.user-name');
    userNameElement.textContent = `${name} 的魔法之旅正式开始`;
    
    createStars();
    
    setTimeout(() => {
        document.body.classList.add('portal-active');
        
        setTimeout(() => {
            window.location.href = `magic-creatures.html?name=${encodeURIComponent(name)}`;
        }, 5000);
    }, 2000);
});

function createStars() {
    const starsContainer = document.querySelector('.stars');
    for(let i = 0; i < 200; i++) {
        const star = document.createElement('div');
        star.className = 'star';
        star.style.left = `${Math.random() * 100}%`;
        star.style.top = `${Math.random() * 100}%`;
        star.style.animationDelay = `${Math.random() * 2}s`;
        starsContainer.appendChild(star);
    }
} 