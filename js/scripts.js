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

// ... More interactions for other scenes will be added ...