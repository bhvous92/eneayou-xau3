function estado() {
    var mnu = document.getElementById("mnumobile");
    mnu.style.display = (mnu.style.display == "block") ? "none" : "block";
}


const items = document.querySelectorAll('.appear');

const active = function (entries) {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('inview2');
        } else {
            entry.target.classList.remove('inview2');
        }
    });
}
const io2 = new IntersectionObserver(active);
for (let i = 0; i < items.length; i++) {
    io2.observe(items[i]);
}