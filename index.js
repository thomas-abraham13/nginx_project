function redirectToDashPlayer() {
    window.location.href = '/app/dash/dashLive.html';
}

function redirectToShakaPlayer() {
    window.location.href = '/app/shaka/shakaLive.html';
}

function redirectToHlsPlayer() {
    window.location.href = '/app/hls/hlsVOD.html';
}

function redirectToHlsLivePlayer() {
    window.location.href = '/app/hls/hlsLive.html';
}

function redirectToDashVODPlayer() {
    window.location.href = '/app/dash/dashVOD.html';
}

function redirectToShakaVODPlayer() {
    window.location.href = '/app/shaka/shakaVOD.html';
}

// Script to add arrow key focus
document.addEventListener("DOMContentLoaded", function () {
    const buttons = document.querySelectorAll("button");
    let focusedIndex = 0;
    // Add event listener for keydown event
    document.addEventListener("keydown", function (event) {
        const key = event.key;
        switch (event.keyCode) {
            case 85: // Android Play/Pause
            case 415: // Samsung Play
            case 19: // LG Pause and Samsung Pause
            case 179: // LG Play
            case 80: // LG Play/Pause toggle
            case "p": // to test on browser with key 'p'
            pausePlay()
            break;
        }

        switch (event.keyCode) {
            case 177: // MediaTrackPrevious button on remote
            case 219: // The "[" key on the keyboard
            case "[":
                skipBackward()
                break;
            }

        switch (event.keyCode) {
            case 176: // MediaTrackNext button on remote
            case 221: // The "]" key on the keyboard
            case "]":
                skipForward()
                break;
            }

        if (key === "ArrowLeft" || key === "ArrowRight" || key === "Enter") {
            event.preventDefault(); // Prevent default browser behavior
            
            // Remove focus class from all buttons
            buttons.forEach((button) => button.classList.remove("focused"));

            // Move focus based on arrow keys
            if (key === "ArrowLeft") {
                focusedIndex = (focusedIndex - 1 + buttons.length) % buttons.length;
            } else if (key === "ArrowRight") {
                focusedIndex = (focusedIndex + 1) % buttons.length;
            }

            // Apply focus to the button
            buttons[focusedIndex].classList.add("focused");

            // Add console logging to debug
            console.log("Focused Index:", focusedIndex);

            // Activate button on Enter
            if (key === "Enter") {
                buttons[focusedIndex].click();
            }

            // Detect the Back button press by checking key codes
            if ((key === "Backspace" || event.keyCode === 8 || event.keyCode === 10009 || event.keyCode === 461) && window.location.pathname !== "/app/index.html") {
                window.location.href = "/app/index.html";
            }
        }
    });
});

let videoElem = document.getElementById('video');

function pausePlay() {
    if (videoElem.paused) {
        videoElem.play();
    } else {
        videoElem.pause();
    }
}

function skipBackward() {
    videoElem.currentTime -= 5; // videoElem.currentTime = videoElem.currentTime - 5
}

function skipForward() {
    videoElem.currentTime += 5; // videoElem.currentTime = videoElem.currentTime + 5
}

function redirectToDashABRPlayer() {
    window.location.href = "/app/dash/dashABR.html";
}

function redirectToShakaABRPlayer() {
    window.location.href = "/app/shaka/shakaABR.html";
}