var currentFile = "";
function playVideo() {
    // Check for video element support.
    if (window.HTMLVideoElement) {
        try {
            var oVideo = document.getElementById("myvideo");
            var btn = document.getElementById("play");
            var videoURL = document.getElementById('mylist'); //Skip loading if current file hasn’t changed.
            if (videoURL.value !== currentFile) {
                oVideo.src = videoURL.value;
                currentFile = videoURL.value;
            }// Tests the paused attribute and set state.
            if (oVideo.paused) {
                oVideo.play();
                btn.textContent = "Pause";
            }

            else {
                oVideo.pause();
                btn.textContent = "Play";
            }
            oVideo.onended = function () {
                document.getElementById("play").innerText = "Play/Pause"
            }

        }
        catch (e) {
            // Fail silently but show in F12 developer tools console
            if (window.console && console.error("Error" + e));
        }
    }
}

function rewindVideo() {
    // Check for video element support.
    if (window.HTMLVideoElement) {
        try {
            var oVideo = document.getElementById("myvideo");
            oVideo.currentTime -= 10.0;
        }
        catch (e) {
            // Fail silently but show in F12 developer tools console
            if (window.console && console.error("Error:" + e));
        }
    }
}

function forwardVideo() {
    // Fast forwards thevideo file by 10 seconds. // Check for media element support.
    if (window.HTMLVideoElement) {

        try {
            var oVideo = document.getElementById("myvideo");
            
            oVideo.currentTime += 10.0;
        }
        catch (e) {
            // Fail silently but show in F12 developer tools console
            if (window.console && console.error("Error" + e));
        }
    }
}
