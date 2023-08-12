function fadeIn(element) {
    element.animate([
        { opacity: 0 },
        { opacity: 1 }
    ], {
        duration: 1000,
        fill: 'forwards'
    });
}

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