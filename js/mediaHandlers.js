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
    threshold: 1
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