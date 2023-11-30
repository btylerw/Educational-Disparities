function load(id) {
    // Hide everything except for linked element
    ids = ['home', 'what', 'bad', 'hurt', 'proof', 'action'];
    for (let i = 0; i < 6; i++) {
        if (ids[i] != id) {
            const hide = document.getElementById(ids[i]);
            hide.className = "hidden";
        }
    }
    const link = document.getElementById(id);
    link.className = "box";
}