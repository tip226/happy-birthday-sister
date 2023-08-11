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

// ... More interactions for other scenes will be added ...