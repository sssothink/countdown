let date = new Date('Jan 1 2023 00:00:00');

const counts = () => {
    let now = new Date();
    gap = date - now;
    const group = document.getElementById("group");

    let days = Math.floor(gap / 1000 / 60 / 60 / 24);
    let hours = Math.floor(gap / 1000 / 60 / 60) % 24;
    let minutes = Math.floor(gap / 1000 / 60) % 60;
    let sec = Math.floor(gap / 1000) % 60;

    let d = document.getElementById('d');
    let h = document.getElementById('h');
    let m = document.getElementById('m');
    let s = document.getElementById('s');
    d.innerText = days + " days";
    h.innerText = hours + " hours";
    m.innerText = minutes + " minutes";
    s.innerText = sec + " seconds";

}

counts();

setInterval(counts, 1000)