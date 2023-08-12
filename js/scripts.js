// Scene 1 interactions
const darkRoomMessage1 = document.getElementById('darkRoomMessage1');
const darkRoomMessage2 = document.getElementById('darkRoomMessage2');
const darkRoomMessage3 = document.getElementById('darkRoomMessage3');
const lightSwitch = document.getElementById('lightSwitch');
const bedroom = document.getElementById('bedroom');

const creepyMusic = document.getElementById('creepyMusic');
const birthdayMusic = document.getElementById('birthdayMusic');

function fadeIn(element) {
    element.animate([
        { opacity: 0 },
        { opacity: 1 }
    ], {
        duration: 1000,
        fill: 'forwards'
    });
}

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

setTimeout(() => {
    fadeIn(darkRoomMessage1);
    setTimeout(() => {
        fadeIn(darkRoomMessage2);
        setTimeout(() => {
            fadeIn(lightSwitch);
            setTimeout(() => {
                fadeIn(darkRoomMessage3);
            }, 1500);
        }, 1500);
    }, 1500);
}, 1500);

lightSwitch.addEventListener('click', () => {
    creepyMusic.play();
    document.getElementById('darkRoom').style.display = 'none';
    bedroom.style.display = 'block';
    setTimeout(() => {
        const bedroomMessage1 = document.getElementById('bedroomMessage1');
        bedroomMessage1.classList.remove('hidden');
        fadeIn(bedroomMessage1);
        
        setTimeout(() => {
            const bedroomMessage2 = document.getElementById('bedroomMessage2');
            bedroomMessage2.classList.remove('hidden');
            fadeIn(bedroomMessage2);
            
            setTimeout(() => {
                const bedroomMessage3 = document.getElementById('bedroomMessage3');
                bedroomMessage3.classList.remove('hidden');
                fadeIn(bedroomMessage3);
                
                setTimeout(() => {
                    const toHallway = document.getElementById('toHallway');
                    toHallway.classList.remove('hidden');
                    fadeIn(toHallway);
                    
                    setTimeout(() => {
                        const bedroomMessage4 = document.getElementById('bedroomMessage4');
                        bedroomMessage4.classList.remove('hidden');
                        fadeIn(bedroomMessage4);
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
        const hallwayMessage1 = document.getElementById('hallwayMessage1');
        hallwayMessage1.classList.remove('hidden');
        fadeIn(hallwayMessage1);
        
        setTimeout(() => {
            const hallwayMessage2 = document.getElementById('hallwayMessage2');
            hallwayMessage2.classList.remove('hidden');
            fadeIn(hallwayMessage2);
            
            setTimeout(() => {
                const hallwayMessage3 = document.getElementById('hallwayMessage3');
                hallwayMessage3.classList.remove('hidden');
                fadeIn(hallwayMessage3);
                
                setTimeout(() => {
                    const toBedroom = document.getElementById('toBedroom');
                    toBedroom.classList.remove('hidden');
                    fadeIn(toBedroom);
                    
                    setTimeout(() => {
                        const hallwayMessage4 = document.getElementById('hallwayMessage4');
                        hallwayMessage4.classList.remove('hidden');
                        fadeIn(hallwayMessage4);
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

// Function to trigger confetti
function launchConfetti() {
    confetti({
        particleCount: 150,
        spread: 70,
        origin: { y: 0.6 }
    });
}

const giftBox = document.getElementById('giftBox');
const giftReveal = document.getElementById('giftReveal');

// Define the bounce animation using Web Animations API
function bounce(element) {
    element.animate([
        // keyframes
        { transform: 'translateY(0px)' },
        { transform: 'translateY(-20px)' },
        { transform: 'translateY(0px)' }
    ], {
        // timing options
        duration: 1000,
        iterations: Infinity
    });
}

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
videos.forEach(video => {
    observer.observe(video);
    video.addEventListener('play', () => {
        birthdayMusic.volume = 0.02; // Lower the volume
        // OR
        // birthdayMusic.pause(); // Pause the music
    });

    video.addEventListener('ended', () => {
        birthdayMusic.volume = 1; // Restore the volume
        // OR
        // birthdayMusic.play(); // Resume the music
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


// ... More interactions for other scenes will be added ...