function load(id) {
    // Hide everything except for linked element
    ids = ['home', 'what', 'bad', 'hurt', 'proof', 'action'];
    for (let i = 0; i < 6; i++) {
        if (ids[i] != id) {
            const hide = document.getElementById(ids[i]);
            const hideinfo = document.getElementById(ids[i]+"info");
            hide.className = "hidden";
            hideinfo.className = "hidden";
        }
    }
    const link = document.getElementById(id);
    link.className = "box";
    setTimeout(loadinfo, 1500, id+"info");
}

function sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}

function loadinfo(id) {
    const content = document.getElementById(id);
    content.className = 'info';
}

window.onload = function() {
    setTimeout(loadinfo, 1500, 'homeinfo');
}