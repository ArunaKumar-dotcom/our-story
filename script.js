// STAR CANVAS

const canvas =
document.getElementById("stars-canvas");

const ctx =
canvas.getContext("2d");

canvas.width =
window.innerWidth;

canvas.height =
window.innerHeight;

const stars = [];

for(let i=0;i<150;i++){

    stars.push({

        x:Math.random()*canvas.width,

        y:Math.random()*canvas.height,

        radius:Math.random()*1.5,

        opacity:Math.random()

    });

}

function drawStars(){

    ctx.clearRect(
        0,
        0,
        canvas.width,
        canvas.height
    );

    stars.forEach(star=>{

        ctx.beginPath();

        ctx.arc(
            star.x,
            star.y,
            star.radius,
            0,
            Math.PI*2
        );

        ctx.fillStyle =
        `rgba(255,255,255,${star.opacity})`;

        ctx.fill();

        star.opacity +=
        (Math.random()-.5)*0.05;

        if(star.opacity<0.1)
            star.opacity=0.1;

        if(star.opacity>1)
            star.opacity=1;

    });

    requestAnimationFrame(
        drawStars
    );

}

drawStars();
// ======================================
// FLOATING HEARTS
// ======================================

function createHeart(){

const heart =
document.createElement("div");

heart.innerHTML="❤";

heart.classList.add("heart");

const colors=[
"#ff8fab",
"#ffd6a5",
"#ffc2d1"
];

heart.style.color=
colors[
Math.floor(
Math.random()*colors.length
)
];

heart.style.fontSize=
(12+Math.random()*14)+"px";

heart.style.left=
Math.random()*100+"vw";

heart.style.animationDuration=
(5+Math.random()*4)+"s";

document.body.appendChild(
heart
);

setTimeout(()=>{

heart.remove();

},9000);

}

setInterval(createHeart, 1200);

// ======================================
// SPARKLES
// ======================================

function createSparkle() {

    const sparkle =
        document.createElement("div");

    sparkle.classList.add("sparkle");

    sparkle.style.left =
        Math.random() * 100 + "vw";

    sparkle.style.top =
        Math.random() * 100 + "vh";

    sparkle.style.animationDuration =
        (Math.random() * 2 + 2) + "s";

    document.body.appendChild(sparkle);

    setTimeout(() => {

        sparkle.remove();

    }, 4000);

}

setInterval(createSparkle, 300);

// ======================================
// SCROLL REVEAL
// ======================================

const chapters =
document.querySelectorAll(".chapter");

function revealChapters() {

    chapters.forEach(chapter => {

        const top =
            chapter.getBoundingClientRect().top;

        if (top < window.innerHeight - 100) {

            chapter.classList.add("show");

        }

    });

}

window.addEventListener(
    "scroll",
    revealChapters
);

revealChapters();

// ======================================
// AUTO MUSIC
// ======================================

const music =
document.getElementById("bgMusic");

const overlay =
document.getElementById("musicOverlay");

if(overlay){

overlay.addEventListener(
"click",
function(){

music.play();

overlay.classList.add("hide");

}
);

}

function celebrate(){

for(let i=0;i<40;i++){

setTimeout(()=>{

createHeart();

},i*80);

}

}
// ======================================
// PROPOSAL BUTTON
// ======================================

const proposalBtn =
document.getElementById("yesBtn");

const foreverSection =
document.getElementById("forever");

if(proposalBtn && foreverSection){

proposalBtn.addEventListener(
"click",
function(){

proposalBtn.innerHTML =
"❤️ Forever Begins";

proposalBtn.style.transform =
"scale(1.15)";

proposalBtn.style.boxShadow =
"0 0 80px rgba(255,105,180,.9)";

celebrate(); // <-- ADD HERE

foreverSection.classList.add("show");

setTimeout(()=>{

foreverSection.scrollIntoView({
behavior:"smooth"
});

},600);

}
);

}
