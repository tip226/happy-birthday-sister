// Function to trigger confetti
function launchConfetti() {
    confetti({
        particleCount: 150,
        spread: 70,
        origin: { y: 0.6 }
    });
}

function createBalloons(words) {
    const balloonContainer = document.querySelector('.balloon-container');
    balloonContainer.innerHTML = ''; // Clear previous balloons

    words.forEach((word, index) => {
        const balloon = document.createElement('div');
        balloon.classList.add('balloon');
        balloon.textContent = word;
        balloon.style.setProperty('--order', index);

        balloonContainer.appendChild(balloon);
    });
}

const giftBox = document.getElementById('giftBox');
const giftReveal = document.getElementById('giftReveal');



// Call the bounce function for the giftBox
bounce(document.getElementById('giftBox'));

giftBox.addEventListener('click', () => {
    bedroom.style.display = 'none';
    giftReveal.style.display = 'block';
    creepyMusic.pause();
    birthdayMusic.play();
    launchConfetti();
});

document.getElementById('giftBox').addEventListener('click', function() {
    createBalloons(['Happy', '21st', 'Birthday,', 'Big', 'Sis', '❤️']);
    // Make balloons visible
    document.querySelectorAll('.balloon').forEach(balloon => {
        balloon.style.opacity = '1';
    });
});

const cake = document.getElementById('cake');
cake.addEventListener('click', () => {
    const flames = document.querySelectorAll('.flame');
    flames.forEach(flame => {
        if (flame.style.visibility === 'hidden' || flame.style.visibility === '') {
            flame.style.visibility = 'visible';
        } else {
            flame.style.visibility = 'hidden';
        }
    });
});