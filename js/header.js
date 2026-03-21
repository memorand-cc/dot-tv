const imageUrls = [
    "https://image.tmdb.org/t/p/original/73BClq9FOcrWrutnpiqhCNEWEwJ.jpg",
    "https://image.tmdb.org/t/p/original/nummXuR5TP9pOKtWuHOSxqtOPOT.jpg",
    "https://image.tmdb.org/t/p/original/gre7gyocZSuwd7M51CGlqsJqBmB.jpg",
    "https://image.tmdb.org/t/p/original/qKWDHofjMHPSEOTLaixkC9ZmjTT.jpg",
    "https://image.tmdb.org/t/p/original/fneMUcvr3qRgGA8Suv2IQ7IvDjB.jpg",
    "https://image.tmdb.org/t/p/original/m96iaX6b4bKaD9xME9JOQghBrqC.jpg",
	"https://image.tmdb.org/t/p/original/mdQusDes16kcHkDZQqleYCRhiNK.jpg",
	"https://image.tmdb.org/t/p/original/yjOSpDQe8tzr8easpjTFVoQXsOX.jpg",
    "https://image.tmdb.org/t/p/original/9qzAKt3q3dEAnmG93Bkk3Y5vPH8.jpg",
    "https://image.tmdb.org/t/p/original/sy7Y4jCDsGPCzoQIEmxqAgPjAgr.jpg",
    "https://image.tmdb.org/t/p/original/zm5KTTutG2oN06BehOa8uD1SVhy.jpg",
    "https://image.tmdb.org/t/p/original/gAcqLmqzwLsmOoVw1hGODPcyTu7.jpg",
    "https://image.tmdb.org/t/p/original/zioNFrcm4Hfw25rGjWPgEkR1iIw.jpg",
    "https://image.tmdb.org/t/p/original/s6tSP2RKFdgnouEGKxovdpFu64o.jpg",
    "https://image.tmdb.org/t/p/original/g3lCbTn3HYHTiFrfusxKGXMdyUW.jpg",
    "https://image.tmdb.org/t/p/original/seueAV0oxDUk9ojz1bDYbasEu9t.jpg"   
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