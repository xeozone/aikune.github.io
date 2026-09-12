const gallery = document.getElementById('gallery');
const lightbox = document.getElementById('lightbox');
const lightboxImg = document.getElementById('lightboxImg');
const closeBtn = document.getElementById('lightboxClose');

gallery.addEventListener('click', (e) => {
    if (e.target.tagName === 'IMG') {
        lightboxImg.src = e.target.src;
        lightbox.classList.add('active');
    }
});

function closeLightbox() {
    lightbox.classList.remove('active');
    lightboxImg.src = '';
}
lightbox.addEventListener('click', closeLightbox);
closeBtn.addEventListener('click', closeLightbox);
document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') closeLightbox();
});