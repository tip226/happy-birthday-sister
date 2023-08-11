// Scene 1 interactions
const darkRoomMessage1 = document.getElementById('darkRoomMessage1');
const darkRoomMessage2 = document.getElementById('darkRoomMessage2');
const darkRoomMessage3 = document.getElementById('darkRoomMessage3');
const lightSwitch = document.getElementById('lightSwitch');
const bedroom = document.getElementById('bedroom');

setTimeout(() => {
    darkRoomMessage1.classList.remove('hidden');
    setTimeout(() => {
        darkRoomMessage2.classList.remove('hidden');
        setTimeout(() => {
            lightSwitch.classList.remove('hidden');
            setTimeout(() => {
                darkRoomMessage3.classList.remove('hidden');
            }, 1500);
        }, 1500);
    }, 1500);
}, 1500);

lightSwitch.addEventListener('click', () => {
    document.getElementById('darkRoom').style.display = 'none';
    bedroom.style.display = 'block';
    setTimeout(() => {
        document.getElementById('bedroomMessage1').classList.remove('hidden');
        setTimeout(() => {
            document.getElementById('bedroomMessage2').classList.remove('hidden');
            setTimeout(() => {
                document.getElementById('bedroomMessage3').classList.remove('hidden');
                setTimeout(() => {
                    document.getElementById('toHallway').classList.remove('hidden');
                    setTimeout(() => {
                        document.getElementById('bedroomMessage4').classList.remove('hidden');
                    }, 1500);
                }, 1500);
            }, 1500);
        }, 1500);
    }, 500);
});

// Scene 2 to 3 interactions
const toHallway = document.getElementById('toHallway');
const hallway = document.getElementById('hallway');

toHallway.addEventListener('click', () => {
    bedroom.style.display = 'none';
    hallway.style.display = 'block';
    setTimeout(() => {
        document.getElementById('hallwayMessage1').classList.remove('hidden');
        setTimeout(() => {
            document.getElementById('hallwayMessage2').classList.remove('hidden');
            setTimeout(() => {
                document.getElementById('hallwayMessage3').classList.remove('hidden');
                setTimeout(() => {
                    document.getElementById('toBedroom').classList.remove('hidden');
                    setTimeout(() => {
                        document.getElementById('hallwayMessage4').classList.remove('hidden');
                    }, 1500);
                }, 1500);
            }, 1500);
        }, 1500);
    }, 500);
});

// Scene 3 to 4 interactions
const toBedroom = document.getElementById('toBedroom');

// Scene 3 to 4 interactions
toBedroom.addEventListener('click', () => {
    hallway.style.display = 'none';
    bedroom.style.display = 'block';

    // Hide the conversation lines from Scene 2
    document.getElementById('bedroomMessage1').classList.add('hidden');
    document.getElementById('bedroomMessage2').classList.add('hidden');
    document.getElementById('bedroomMessage3').classList.add('hidden');
    document.getElementById('toHallway').classList.add('hidden');
    document.getElementById('bedroomMessage4').classList.add('hidden');

    setTimeout(() => {
        document.getElementById('bedroomMessage5').classList.remove('hidden');
        setTimeout(() => {
            document.getElementById('bedroomMessage6').classList.remove('hidden');
            setTimeout(() => {
                document.getElementById('giftBox').classList.remove('hidden');
                setTimeout(() => {
                    document.getElementById('bedroomMessage7').classList.remove('hidden');
                }, 1500);
            }, 1500);
        }, 1500);
    }, 500);
});

// surprise interactions
const giftBox = document.getElementById('giftBox');
const giftReveal = document.getElementById('giftReveal');

giftBox.addEventListener('click', () => {
    bedroom.style.display = 'none';
    giftReveal.style.display = 'block';

    // You can add more interactions here, like starting the confetti animation
});

// ... Your existing JavaScript code ...

document.getElementById('giftBox').addEventListener('click', function() {
    createBalloons(['Happy', '21st', 'Birthday,', 'Big', 'Sis', '❤️']);
    // Make balloons visible
    document.querySelectorAll('.balloon').forEach(balloon => {
        balloon.style.opacity = '1';
    });
});

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

function handleVideoEnd(videoElement) {
    // Resume the timeline animation
    const timeline = document.querySelector('.photo-timeline');
    timeline.style.animationPlayState = 'running';
    timeline.style.webkitAnimationPlayState = 'running';
}

// Function to handle video visibility using Intersection Observer
function handleVideoVisibility(entries, observer) {
    entries.forEach(entry => {
        if (entry.isIntersecting && entry.target.paused) {
            // Pause the timeline animation
            const timeline = document.querySelector('.photo-timeline');
            const computedStyle = getComputedStyle(timeline);
            const animationPlayState = computedStyle.animationPlayState || computedStyle.webkitAnimationPlayState;

            if (animationPlayState === 'running') {
                timeline.style.animationPlayState = 'paused';
                timeline.style.webkitAnimationPlayState = 'paused';
            }

            // Play the video
            entry.target.play();
        } else if (!entry.isIntersecting && !entry.target.paused) {
            entry.target.pause();
        }
    });
}

// Initialize Intersection Observer
const options = {
    root: null,
    rootMargin: '0px',
    threshold: 0.75
};

const observer = new IntersectionObserver(handleVideoVisibility, options);
const videos = document.querySelectorAll('video');
videos.forEach(video => observer.observe(video));

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


// ... More interactions for other scenes will be added ...