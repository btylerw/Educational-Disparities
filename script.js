function load(id) {
    ids = ['home', 'bad', 'hurt', 'proof'];
    for (let i = 0; i < 4; i++) {
        if (ids[i] != id) {
            const hide = document.getElementById(ids[i]);
            hide.className = "hidden";
        }
    }
    const link = document.getElementById(id);
    link.className = "box";
}