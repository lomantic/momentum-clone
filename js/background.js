const images=[
    "0.png",
    "1.png",
    "2.png",
]

todaysImg=images[Math.floor(Math.random()*images.length)];

const backgroundImg = document.createElement("img");

backgroundImg.src = `img/${todaysImg}`;


console.log(backgroundImg);

document.body.appendChild(backgroundImg);