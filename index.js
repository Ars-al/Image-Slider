const nextEl = document.querySelector(".next");

const prevEl = document.querySelector(".prev");

const imageContainerEl = document.querySelector(".image-container");

const imgs = document.querySelectorAll("img");

let currentImg = 1;

let timeout;

nextEl.addEventListener("click", () => {
    currentImg++;
    clearTimeout(timeout);
    updateImage();
});

prevEl.addEventListener("click", () => {
    currentImg--;
    clearTimeout(timeout);
    updateImage();
})

updateImage();

function updateImage() {

    if(currentImg > imgs.length) {
        currentImg = 1;
    }else if(currentImg < 1) {
        currentImg = imgs.length
    }

    imageContainerEl.style.transform = `translateX(-${(currentImg - 1) * 500}px)`;

    timeout = setTimeout(() => {
        currentImg++;
        updateImage();
    },3000);
}