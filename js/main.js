// Scene 1 interactions
const darkRoomMessage1 = document.getElementById('darkRoomMessage1');
const darkRoomMessage2 = document.getElementById('darkRoomMessage2');
const darkRoomMessage3 = document.getElementById('darkRoomMessage3');
const lightSwitch = document.getElementById('lightSwitch');
const bedroom = document.getElementById('bedroom');

const creepyMusic = document.getElementById('creepyMusic');
const birthdayMusic = document.getElementById('birthdayMusic');

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
        const bedroomMessage5 = document.getElementById('bedroomMessage5');
        bedroomMessage5.classList.remove('hidden');
        fadeIn(bedroomMessage5);
        
        setTimeout(() => {
            const bedroomMessage6 = document.getElementById('bedroomMessage6');
            bedroomMessage6.classList.remove('hidden');
            fadeIn(bedroomMessage6);
            
            setTimeout(() => {
                const giftBox = document.getElementById('giftBox');
                giftBox.classList.remove('hidden');
                fadeIn(giftBox);
                
                setTimeout(() => {
                    const bedroomMessage7 = document.getElementById('bedroomMessage7');
                    bedroomMessage7.classList.remove('hidden');
                    fadeIn(bedroomMessage7);
                }, 1500);
            }, 1500);
        }, 1500);
    }, 500);
});

// ... More interactions for other scenes will be added ...