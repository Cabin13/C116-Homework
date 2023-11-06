function preload() {
    flowerCrown= loadImage("https://i.postimg.cc/90wtmBkQ/flower-crown-png-tumblr-2.png")
}

function setup() {
    canvas= createCanvas(400,500)
    canvas.center()
    video= createCapture(VIDEO)
    video.size(500,300)
    video.hide()
    poseNet= ml5.poseNet(video, modelLoaded)
    poseNet.on('pose', gotPoses)
}

function draw() {
    image(video, 0, 0, 550, 350)
    image(flowerCrown, eyesX-5, eyesY-25, 100, 50)
}

function takeSnapshot() {
    save("snapshot.png")
}

function modelLoaded() {
    console.log("model loaded")
}

eyesX= 0
eyesY= 0

function gotPoses(results) {
    if (results.length > 0) {
        console.log(results)
        console.log("eyes x= " + results[0].pose.rightEye.x)
        console.log("eyes y= " + results[0].pose.rightEye.y)

        eyesX= results[0].pose.rightEye.x
        eyesY= results[0].pose.rightEye.y
    }
}
