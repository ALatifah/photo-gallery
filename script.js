function openLightbox() {
    document.getElementById('lightbox').style.display = 'block';
}

function closeLightbox() {
    document.getElementById('lightbox').style.display = 'none';
}

function changeImage(imageSrc) {
    document.getElementById('lightboxImage').src = imageSrc;
}
