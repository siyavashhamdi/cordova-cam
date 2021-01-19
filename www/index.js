const bootstrap = () => {
    document.addEventListener("deviceready", onDeviceReady, false);
}

const doLog = (text, isConsole = false, isAlert = false) => {
    const outputDebug = document.getElementById("output-debug");

    outputDebug.innerHTML += text + "<BR />";

    if (isConsole)
        console.log(text);

    if (isAlert)
        alert(text);
}

const onDeviceReady = () => {
    doLog("onDeviceReady | init");
}

const runCamera = () => {
    try {
        doLog("runCamera | init");

        navigator.camera.getPicture(onSuccess, onFail, {
            quality: 100,
            targetWidth: 400,
            targetHeight: 400,
            destinationType: Camera.DestinationType.DATA_URL,
            correctOrientation: true
        });
    } catch (ex) {
        doLog("runCamera | ex: " + ex);
    }

    doLog("runCamera | terminated");
}

const onSuccess = (imageData) => {
    try {
        doLog("onSuccess | init");

        const image = document.getElementById("img-main");

        image.src = "data:image/jpeg;base64," + imageData;
        image.style.margin = "10px";
        image.style.display = "block";
    } catch (ex) {
        doLog("onSuccess | ex: " + message);
    }
}

const onFail = (message) => {
    doLog("onFail | msg: " + message);
}

bootstrap();
