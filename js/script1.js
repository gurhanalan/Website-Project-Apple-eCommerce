// Common JS
document.querySelectorAll(".controls a, .watch__control").forEach((control) => {
    control.addEventListener("click", (e) => {
        e.preventDefault();
    });
});

// Cube
let x = 0;
let y = 20;
let z = 0;
let bool = true;
let interval;

const cube = document.querySelector(".cube");

document.querySelector(".top-x-control").addEventListener("click", () => {
    cube.style.transform = `rotateX(${(x += 20)}deg) rotateY(${y}deg) rotateZ(${z}deg)`;
});

document.querySelector(".bottom-x-control").addEventListener("click", () => {
    cube.style.transform = `rotateX(${(x -= 20)}deg) rotateY(${y}deg) rotateZ(${z}deg)`;
});

document.querySelector(".left-y-control").addEventListener("click", () => {
    cube.style.transform = `rotateX(${x}deg) rotateY(${(y -= 20)}deg) rotateZ(${z}deg) `;
});

document.querySelector(".right-y-control").addEventListener("click", () => {
    cube.style.transform = `rotateX(${x}deg) rotateY(${(y += 20)}deg) rotateZ(${z}deg) `;
});

document.querySelector(".top-z-control").addEventListener("click", () => {
    cube.style.transform = `rotateX(${x}deg) rotateY(${y}deg) rotateZ(${(z -= 20)}deg) `;
});

document.querySelector(".bottom-z-control").addEventListener("click", () => {
    cube.style.transform = `rotateX(${x}deg) rotateY(${y}deg) rotateZ(${(z += 20)}deg) `;
});

const playPause = () => {
    if (bool) {
        interval = setInterval(() => {
            cube.style.transform = `rotateX(${x}deg) rotateY(${y++}deg) rotateZ(${z}deg)`;
        }, 100);
    } else {
        clearInterval(interval);
    }
};

playPause();

document.querySelector(".controls").addEventListener("mouseover", () => {
    bool = false;
    playPause();
});

document.querySelector(".controls").addEventListener("mouseout", () => {
    bool = true;
    playPause();
});

// Slideshow
const slider = document.querySelector(".slideshow");

for (let i = 1; i < 6; i++) {
    slider.insertAdjacentHTML(
        "beforeend",
        `<div
style="
    background-image: url(./images/slideshow/section-1-bg-${i}.jpg);
"
></div>`
    );
}

const slides = document.querySelectorAll(".slideshow div");
console.log(slides);

let slideNum = 0;
const showSlide = () => slides[slideNum].classList.add("show");
showSlide();

setInterval(() => {
    document.querySelector(".show").classList.remove("show");
    slideNum++;
    showSlide();

    if (slideNum === slides.length - 1) slideNum = -1;
}, 5000);
// slides.forEach((slide) => {});

// Section 3
const section3Content = document.querySelector(".section-3__content");

window.addEventListener("scroll", () => {
    if (
        window.pageYOffset + window.innerHeight >=
        section3Content.offsetTop + section3Content.offsetHeight / 2
    ) {
        section3Content.classList.add("change");
    }
});
// End of Section 3

// Section 4

const watchBand = document.querySelector(".watch__band");
const watchCase = document.querySelector(".watch__case");

const watchBtnUp = document.querySelector(".watch__control--top");
const watchBtnDown = document.querySelector(".watch__control--bottom");
const watchBtnLeft = document.querySelector(".watch__control--left");
const watchBtnRight = document.querySelector(".watch__control--right");

let xAxes = 0;
let yAxes = 0;

const watchBtnHide = () => {
    if (yAxes === 280) {
        watchBtnDown.classList.add("watch__control--hide");
    } else {
        watchBtnDown.classList.remove("watch__control--hide");
    }
    if (yAxes === -280) {
        watchBtnUp.classList.add("watch__control--hide");
    } else {
        watchBtnUp.classList.remove("watch__control--hide");
    }
    if (xAxes === 280) {
        watchBtnRight.classList.add("watch__control--hide");
    } else {
        watchBtnRight.classList.remove("watch__control--hide");
    }
    if (xAxes === -280) {
        watchBtnLeft.classList.add("watch__control--hide");
    } else {
        watchBtnLeft.classList.remove("watch__control--hide");
    }
};

watchBtnUp.addEventListener("click", () => {
    watchCase.style.marginTop = `${(yAxes -= 70)}rem`;

    watchBtnHide();
});
watchBtnDown.addEventListener("click", () => {
    watchCase.style.marginTop = `${(yAxes += 70)}rem`;

    watchBtnHide();
});
watchBtnLeft.addEventListener("click", () => {
    watchBand.style.marginLeft = `${(xAxes -= 70)}rem`;

    watchBtnHide();
});
watchBtnRight.addEventListener("click", () => {
    watchBand.style.marginLeft = `${(xAxes += 70)}rem`;

    watchBtnHide();
});
// End of Section 4
