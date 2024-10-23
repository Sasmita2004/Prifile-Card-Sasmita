function toggleHeart() {
    const heartIcon = document.getElementById('heart-icon');
    heartIcon.classList.toggle('beat'); // Toggle the beat class
}

function openMenu() {
    const menu = document.getElementById('menu');
    menu.style.display = menu.style.display === 'none' || menu.style.display === '' ? 'block' : 'none'; // Toggle menu visibility
}

// Close the menu if clicked outside of it
window.addEventListener('click', function(event) {
    const menu = document.getElementById('menu');
    const menuIcon = document.querySelector('.top-icons .fas.fa-ellipsis-v');

    if (!menu.contains(event.target) && !menuIcon.contains(event.target)) {
        menu.style.display = 'none';
    }
});
