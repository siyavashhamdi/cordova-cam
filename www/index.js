document.addEventListener("deviceready", onDeviceReady, false);

function onDeviceReady() {
    alert("onDeviceReady | init");
}

function runCamera() {
    try {
        alert("runCamera | init");

        navigator.camera.getPicture(onSuccess, onFail, {
            quality: 100,
            targetWidth: 400,
            targetHeight: 400,
            destinationType: Camera.DestinationType.DATA_URL,
            correctOrientation: true
        });
    } catch (ex) {
        alert("runCamera | ex: " + ex);
    }

    alert("runCamera | terminated");
}

function onSuccess(imageData) {
    try {
        alert("onSuccess | init");

        const image = document.getElementById("img-main");

        image.src = "data:image/jpeg;base64," + imageData;
        image.style.margin = "10px";
        image.style.display = "block";
    } catch (ex) {
        alert("onSuccess | ex: " + message);
    }
}

function onFail(message) {
    alert("onFail | msg: " + message);
}
