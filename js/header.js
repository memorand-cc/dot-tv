const imageUrls = [
    "/slides/12.jpg",
    "/slides/11.jpg",
    "/slides/10.jpg",
    "/slides/09.jpg",
    "/slides/08.jpg",
    "/slides/07.jpg",
    "/slides/06.jpg",
    "/slides/05.jpg",
    "/slides/04.jpg",
    "/slides/03.jpg",
    "/slides/02.jpg",
    "/slides/01.jpg"
];

let currentIndex = 0;
const imgTop = document.getElementById('img-top');
const imgBottom = document.getElementById('img-bottom');

function crossFade() {
    let nextIndex = (currentIndex + 1) % imageUrls.length;

    // Load next image onto the bottom layer
    imgBottom.src = imageUrls[nextIndex];

    // Fade out the top layer
    imgTop.style.opacity = 0;

    // Wait for the CSS transition (2s) to finish
    setTimeout(() => {
        imgTop.src = imageUrls[nextIndex]; // Switch top to the new image
        imgTop.style.opacity = 1;          // Show top again instantly
        currentIndex = nextIndex;
    }, 2000); 
}

// Change every 12 seconds
setInterval(crossFade, 12000);