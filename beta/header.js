document.addEventListener('DOMContentLoaded', () => {
	// Slideshow images array
	const imageUrls = [
		"https://image.tmdb.org/t/p/original/73BClq9FOcrWrutnpiqhCNEWEwJ.jpg",
		"https://image.tmdb.org/t/p/original/g3lCbTn3HYHTiFrfusxKGXMdyUW.jpg",
		"https://image.tmdb.org/t/p/original/qKWDHofjMHPSEOTLaixkC9ZmjTT.jpg",
		"https://image.tmdb.org/t/p/original/nspNrsepF9s9CGb3pwjqDVYZn4r.jpg",
		"https://image.tmdb.org/t/p/original/m96iaX6b4bKaD9xME9JOQghBrqC.jpg",
		"https://image.tmdb.org/t/p/original/uL6Ad12W09L1sfuOE2pcTeak7bt.jpg",
		"https://image.tmdb.org/t/p/original/1Lz0CmgukN8KyzxIn8gGe4NLV3D.jpg",
		"https://image.tmdb.org/t/p/original/e8BCc8Jk11dnSffI6ElICLePvLZ.jpg",
		"https://image.tmdb.org/t/p/original/a46L587688xUVIS36gTf0brTXFd.jpg",
		"https://image.tmdb.org/t/p/original/zujv4xmQrwDGdJ4YGl9TxUnrFcF.jpg",
		"https://image.tmdb.org/t/p/original/kd9lR1lJrUZMpuNEaNhaM9N3TOW.jpg",
		"https://image.tmdb.org/t/p/original/jsGSpQA0Xd6RJH9fUPaQfOzMVqc.jpg",
		"https://image.tmdb.org/t/p/original/v7srqtTl4zS0lA4zg51GQECeXQB.jpg",
		"https://image.tmdb.org/t/p/original/seueAV0oxDUk9ojz1bDYbasEu9t.jpg",
		"https://image.tmdb.org/t/p/original/4JMHILK0kcqv2mkAkC1nmdMeiuS.jpg"		
	];

	// Constants and initial valies
	const container = document.getElementById('image-container');
	const intervalTime = 5000;
	let currentIndex = 0;
	let loadedCount = 0;
	
	// Array to store DOM elements in order
	const imageElements = new Array(imageUrls.length);
	// Put the first one (already in DOM) into our tracking array
	imageElements[0] = container.querySelector('img');

	// Preload and insert logic
	imageUrls.forEach((url, index) => {
		// Skip index 0 as it is already in the HTML
		if (index === 0) {
			checkAllLoaded();
			return;
		}

		const img = new Image();
		img.src = url;
		
		img.onload = () => {
			const domImg = document.createElement('img');
			domImg.src = url;
			domImg.className = 'fade-img';
			domImg.dataset.index = index;
			
			// Store in the correct index position
			imageElements[index] = domImg;
			
			checkAllLoaded();
		};
		// Manage image loading errors
		img.onerror = () => {
			console.error("Failed to load:", url);
			checkAllLoaded();
		};
	});

	function checkAllLoaded() {
		loadedCount++;
		if (loadedCount === imageUrls.length) {
			// All images finished (or failed). 
			// Append them to the DOM in the specific array order.
			for (let i = 1; i < imageElements.length; i++) {
				if (imageElements[i]) {
					container.appendChild(imageElements[i]);
				}
			}
			startSlideshow();
		}
	}

	function startSlideshow() {
		// Re-select to ensure we have the correctly ordered list from the DOM
		const images = container.querySelectorAll('.fade-img');
		if (images.length < 2) return;

		setInterval(() => {
			const nextIndex = (currentIndex + 1) % images.length;
			
			// Reset previous image
			images[currentIndex].classList.remove('visible');
			images[currentIndex].style.zIndex = "1";

			// Promote next image to the top of the stack (but below overlay)
			images[nextIndex].style.zIndex = "2";
			images[nextIndex].classList.add('visible');

			currentIndex = nextIndex;
		}, intervalTime);
	}
});