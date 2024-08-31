// script.js

function openPopup(imageSrc) {
    // Set the source of the popup image
    const popupImg = document.getElementById('popup-img');
    popupImg.src = imageSrc;

    // Display the popup
    const popup = document.getElementById('popup');
    popup.style.display = 'flex';
}

function closePopup() {
    // Hide the popup
    const popup = document.getElementById('popup');
    popup.style.display = 'none';
}

// Event listener to close popup when clicking outside of image
window.addEventListener('click', function(event) {
    const popup = document.getElementById('popup');
    if (event.target === popup) {
        closePopup();
    }
});
