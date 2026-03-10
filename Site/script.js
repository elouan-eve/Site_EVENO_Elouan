const icons = document.querySelectorAll(".contact-icon");

icons.forEach(icon => {
    icon.addEventListener("click", () => {
        const info = icon.getAttribute("data-info");
        alert(info);
    });
});

const photos = document.querySelectorAll(".photo-voyage");

photos.forEach(photo => {

    photo.addEventListener("click", function() {

        const pays = photo.getAttribute("data-pays");

        const texte = photo.nextElementSibling;

        texte.textContent = pays;

    });

});