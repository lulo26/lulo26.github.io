const canvas = document.getElementById("canvas1");
const ctx = canvas.getContext("2d")

const twoeyImg = new Image()
twoeyImg.src = 'assets/img/stage1.png'

// sprites

const spriteAnimations = []
const animationStates = [
    {
        name: "idle",
        frames: 8
    },
    {
        name: "openMouth",
        frames: 8
    },
    {
        name: "closeMouth",
        frames: 7
    },
    {
        name: "eat",
        frames: 2
    }
]
const spriteLocations = {
    idle: {
        width: 180,
        height: 236,
        frames: 8
    },
    openMouth: {
        width: 185,
        height: 240,
        frames: 8
    },
    closeMouth: {
        width: 185,
        height: 244,
        frames: 7
    },
    eat: {
        width: 162,
        height: 248,
        frames: 2
    }
}

let playerState = 'idle'

let gameFrame = 0
let staggerFrames = 5

let spriteWidth = spriteLocations[playerState].width
let spriteHeight = spriteLocations[playerState].height
const canvasWidth = canvas.width = 2000 
const canvasHeight = canvas.height = 2000

animationStates.forEach((state, index)=>{
    let frames = {
        loc: [],
    }
    for (let j = 0; j < state.frames; j++) {
        let positionX = j * spriteLocations[state.name].width
        let positionY = index * spriteLocations[state.name].height
        frames.loc.push({x: positionX, y:positionY})
    }
    spriteAnimations[state.name] = frames
})
console.log(spriteAnimations);
console.log(spriteLocations[playerState].width);


function animate(){
    spriteWidth = spriteLocations[playerState].width
    spriteHeight = spriteLocations[playerState].height
    ctx.clearRect(0, 0, canvasWidth, canvasHeight)
    let position = Math.floor(gameFrame/staggerFrames) % spriteAnimations[playerState].loc.length
    let frameX = spriteWidth * position
    let frameY = spriteAnimations[playerState].loc[position].y
    ctx.drawImage(twoeyImg, frameX, frameY, spriteWidth, spriteHeight, 0, 0, canvasWidth, canvasHeight)
    
    gameFrame++
    requestAnimationFrame(animate)

}

animate();

var clickNumber = 0
const printClicks = document.getElementById("clickNum")
const clickMe = document.getElementById("clickMe")

function ClickCount(){
    clickNumber++
    printClicks.innerHTML = `<h1>${clickNumber}</h1>`
    return clickNumber
}

//-------- events here --------------// 

clickMe.addEventListener("click", e =>{
    ClickCount()
    playerState = "eat"
})


clickMe.addEventListener("mouseover", e =>{
    playerState = "openMouth"
}) 

clickMe.addEventListener("mouseout", e =>{
	playerState = "idle"
}) 


