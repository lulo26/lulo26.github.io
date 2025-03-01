/* const canvas = document.getElementById("myCanvas");
const ctx = canvas.getContext("2d");
ctx.fillStyle = "red";
ctx.fillRect(0, 0, 150, 75); */

var clickNumber = 0
var printClicks = document.getElementById("clickNum")
var clickMe = document.getElementById("clickMe")

function ClickCount(){
    clickNumber++
    printClicks.innerHTML = `<h1>${clickNumber}</h1>`
    return clickNumber
}

clickMe.addEventListener("click", e =>{
    ClickCount()
    console.log(clickNumber);
	initEat();
})

initIdle()

//////////////////////// IDLE //////////////////////////////////////

var canvas, stage, exportRoot, anim_container, dom_overlay_container, fnStartAnimation;
function initIdle() {
	canvas = document.getElementById("canvas");
	anim_container = document.getElementById("animation_container");
	dom_overlay_container = document.getElementById("dom_overlay_container");
	var comp=AdobeAn.getComposition("EE2BA846406B044FADEDD0BD75DFB390");
	var lib=comp.getLibrary();
	handleCompleteIdle({},comp);
}
function handleCompleteIdle(evt,comp) {
	//This function is always called, irrespective of the content. You can use the variable "stage" after it is created in token create_stage.
	var lib=comp.getLibrary();
	var ss=comp.getSpriteSheet();
	exportRoot = new lib.main();
	stage = new lib.Stage(canvas);	
	//Registers the "tick" event listener.
	fnStartAnimation = function() {
		stage.addChild(exportRoot);
		createjs.Ticker.framerate = lib.properties.fps;
		createjs.Ticker.addEventListener("tick", stage);
	}	    
	//Code to support hidpi screens and responsive scaling.
	AdobeAn.makeResponsive(true,'both',false,1,[canvas,anim_container,dom_overlay_container]);	
	AdobeAn.compositionLoaded(lib.properties.id);
	fnStartAnimation();
}

////////////////////////////////////////////////////////////////////


//////////////////////// OPEN MOUTH ////////////////////////////////

var canvas, stage, exportRoot, anim_container, dom_overlay_container, fnStartAnimation;
function initOpenMouth() {
	canvas = document.getElementById("canvas");
	anim_container = document.getElementById("animation_container");
	dom_overlay_container = document.getElementById("dom_overlay_container");
	var comp=AdobeAn.getComposition("F9155DCE562A644E852E73AF3F56930B");
	var lib=comp.getLibrary();
	handleCompleteOpen({},comp);
}
function handleCompleteOpen(evt,comp) {
	//This function is always called, irrespective of the content. You can use the variable "stage" after it is created in token create_stage.
	var lib=comp.getLibrary();
	var ss=comp.getSpriteSheet();
	exportRoot = new lib.open_mouth();
	stage = new lib.Stage(canvas);	
	//Registers the "tick" event listener.
	fnStartAnimation = function() {
		stage.addChild(exportRoot);
		createjs.Ticker.framerate = lib.properties.fps;
		createjs.Ticker.addEventListener("tick", stage);
	}	    
	//Code to support hidpi screens and responsive scaling.
	AdobeAn.makeResponsive(false,'both',false,1,[canvas,anim_container,dom_overlay_container]);	
	AdobeAn.compositionLoaded(lib.properties.id);
	fnStartAnimation();
}

/////////////////////////////////////


/////////////////////////////////////// CLOSE MOUTH ////////////////////////

function initCloseMouth() {
	canvas = document.getElementById("canvas");
	anim_container = document.getElementById("animation_container");
	dom_overlay_container = document.getElementById("dom_overlay_container");
	var comp=AdobeAn.getComposition("0AC87D94BD805044ABFA8D9E12A498E2");
	var lib=comp.getLibrary();
	handleCompleteClose({},comp);
}

function handleCompleteClose(evt,comp) {
	//This function is always called, irrespective of the content. You can use the variable "stage" after it is created in token create_stage.
	var lib=comp.getLibrary();
	var ss=comp.getSpriteSheet();
	exportRoot = new lib.close_mouth();
	stage = new lib.Stage(canvas);	
	//Registers the "tick" event listener.
	fnStartAnimation = function() {
		stage.addChild(exportRoot);
		createjs.Ticker.framerate = lib.properties.fps;
		createjs.Ticker.addEventListener("tick", stage);
	}	    
	//Code to support hidpi screens and responsive scaling.
	AdobeAn.makeResponsive(true,'both',false,1,[canvas,anim_container,dom_overlay_container]);	
	AdobeAn.compositionLoaded(lib.properties.id);
	fnStartAnimation();
}

//////////////////////////////////////

//////////////////////////////////////// EAT //////////////////////////

var canvas, stage, exportRoot, anim_container, dom_overlay_container, fnStartAnimation;
function initEat() {
	canvas = document.getElementById("canvas");
	anim_container = document.getElementById("animation_container");
	dom_overlay_container = document.getElementById("dom_overlay_container");
	var comp=AdobeAn.getComposition("C0E89B62C85A0546B916A91870B97E05");
	var lib=comp.getLibrary();
	handleCompleteEat({},comp);
}
function handleCompleteEat(evt,comp) {
	//This function is always called, irrespective of the content. You can use the variable "stage" after it is created in token create_stage.
	var lib=comp.getLibrary();
	var ss=comp.getSpriteSheet();
	exportRoot = new lib.eat();
	stage = new lib.Stage(canvas);	
	//Registers the "tick" event listener.
	fnStartAnimation = function() {
		stage.addChild(exportRoot);
		createjs.Ticker.framerate = lib.properties.fps;
		createjs.Ticker.addEventListener("tick", stage);
	}	    
	//Code to support hidpi screens and responsive scaling.
	AdobeAn.makeResponsive(true,'both',false,1,[canvas,anim_container,dom_overlay_container]);	
	AdobeAn.compositionLoaded(lib.properties.id);
	fnStartAnimation();
}

/////////////////////////////////////////////////////////////////

clickMe.addEventListener("mouseover", e =>{
    console.log("hover");
    initOpenMouth();
}) 

clickMe.addEventListener("mouseout", e =>{
    initCloseMouth();
	setTimeout(function(){initIdle()},300);
	
}) 


