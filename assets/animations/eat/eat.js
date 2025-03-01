(function (cjs, an) {

var p; // shortcut to reference prototypes
var lib={};var ss={};var img={};
lib.ssMetadata = [];


(lib.AnMovieClip = function(){
	this.actionFrames = [];
	this.ignorePause = false;
	this.gotoAndPlay = function(positionOrLabel){
		cjs.MovieClip.prototype.gotoAndPlay.call(this,positionOrLabel);
	}
	this.play = function(){
		cjs.MovieClip.prototype.play.call(this);
	}
	this.gotoAndStop = function(positionOrLabel){
		cjs.MovieClip.prototype.gotoAndStop.call(this,positionOrLabel);
	}
	this.stop = function(){
		cjs.MovieClip.prototype.stop.call(this);
	}
}).prototype = p = new cjs.MovieClip();
// symbols:
// helper functions:

function mc_symbol_clone() {
	var clone = this._cloneProps(new this.constructor(this.mode, this.startPosition, this.loop, this.reversed));
	clone.gotoAndStop(this.currentFrame);
	clone.paused = this.paused;
	clone.framerate = this.framerate;
	return clone;
}

function getMCSymbolPrototype(symbol, nominalBounds, frameBounds) {
	var prototype = cjs.extend(symbol, cjs.MovieClip);
	prototype.clone = mc_symbol_clone;
	prototype.nominalBounds = nominalBounds;
	prototype.frameBounds = frameBounds;
	return prototype;
	}


(lib.T_head_open = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#336D17").s().p("AAuBgQgJgIACgMIACgOIgDgJQgGgRgKgQQgKgNgHgDQgLgCgGgCQgJgEgEgKIgBgMQAAgIgCgEQgFgMgOAAQgOACgHgBQgIAAgHgGQgGgGgCgIQgBgIADgIQAEgIAHgEQAJgGARABQAZABASALQAUANAGAVIADAJQADADAFADQAkAWAVA2QAJAZgDAOQgBAKgHAIQgGAIgKACIgDABQgKAAgIgHg");
	this.shape.setTransform(23.665,67.7041);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#336D17").s().p("AAtAnIgMgMQgNgOgYgFQgPgCgdABQgRAAgIgFQgNgHABgQQABgHAFgGQAFgFAHgCQAEgCAJAAQAggBAVADQAcAEAVAMIAUAPQALAIAEAHQAEAIgBAJQgCAJgGAGQgHAGgJABIgCAAQgJAAgGgFg");
	this.shape_1.setTransform(122.838,106.563);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#336D17").s().p("AAyCvQgOgEgEgNQgBgFAAgKIABgPQAAgLgFgLQgJgZgQgLIgWgNQgNgIgDgJQgFgMAHgRIAIgLIAIgNQADgGgBgDQgBgEgEgCQgOgNgSgHQgPgFgGgFQgJgJACgRQACgJAJgQQATgiARgPQAMgLAKgDQANgFALAIQAIAFACAKQACALgGAIQgDAEgPAKQgPAMgHATQAbAQAMAMQAVAVgCAXQAAASgRATQAfATARAiQASAhgDAkQgBASgIAIQgHAIgLAAIgFAAg");
	this.shape_2.setTransform(49.1974,120.1906);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#336D17").s().p("ABZBzQgGgDgFgGIgIgMQgZglgqgIIgNgDQgIgCgFgEQgGgFgGgWQgIghgZgaQgMgOgNgFQgNgDgGgDQgIgEgDgKQgDgKAFgIQAIgPAVABQAOAAARALQAxAfAVBAQABAFADADIAJADQA4ASAjAvQAPAVgFAPQgDAKgLAFQgFACgFAAQgFAAgFgDg");
	this.shape_3.setTransform(91.9547,124.2035);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#6FA730").s().p("AkdIXQAdg9AJgkQANg5gOguQgLgjgigqQgpgtgSgZQgcglgNgqQgPgtAFgqQAGgtAcgkQAegmAqgLIANgDIANgFIAGgDIASASQAxAsBOAiIAJAEQA3AVAyARQAqAOAWADQAVADAeAAQAkAAARgCQAXgDArgKIAJAFIAZAKQAoAMAiAqQARAWAeA5QAWAqAJAUQAQAjAIAeQAVBNgaA6QgDAHgEACQgEABgIgFQgLgJgZgZQgWgWgOgLQgigYg7gLQhEgJgigHQhBgPg3giQgmgYgMgcIgIgkQgRhKguhGQgKgRgKgGQgOgLgOAFQgIADgEAHQgEAHABAIQABAIALAPQArA5ATBCIAGAXQgFAQAJAUIABADQADAlgHAlQgIAogXAxQgbA8ggAcQgYAWggAKQgYAIgZAAIgOAAgAJNBOQgogRgVgGQgwgNguAFQgfADgFgBIgNgCQgIgBgFABIgHADQgcgggggSIAngNQA7gXBEgsQARgKAQgLIAJAHQAOALATALIAgAQQAlAUAYAiQAZAiAEAoQABALgEAEQgEAEgJAAQgaAAglgNgAlrigQgegEgagPQgzgegag9QgOgogJgUQgXg2gyghQgMgIgUgLIghgSQgIgFgCgEQgBgEADgIQAIgSARgOQARgNAUgHQAggKAyAEQBHAEAoAeIAMAKIAHAEQABBQANA/QAPBHAgA8QAMAYAPAWIgBAAQgUAGgVAAIgSgBg");
	this.shape_4.setTransform(72.1466,106.638);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#A1B64A").s().p("AheFcIgKgCIgDgBIgNgDIgFgBQgOgFgPgGIAAgCQABgHgEgJIgGgPQgJgWAGgbQAEgVAOgYQALgUABgHQABgOgIgKQgLgLgNAEQgEACgKAIQgjAggUAsQgKAWAAARQAAAKAFASIgNgEIgYgLIgYgMIABgIQgBgEgGgPQgCgIgCgRQgCgdAHgbQACgLAFgMQADgIAJgPQAJgPAGgHQAKgLABgFQADgIgEgIQgDgHgHgFQgOgIgSAGQgNAEgOANQgcAZgSAhQgIANgDALQgGAQgBAfQgYgcgTgjQgeg4gOhEQgUhhANiYQApBBA4AvQAcAYA9ApICTBgQA0AhAcANIABABQAHAHAHAEQAKAGAOADIAZAEQACAPAIAKQAIAMAOAAQAIAAAHgFQAHgGACgIQAGgRgNgOIgDgFIABgFIAGgWQAJgMADgGQAEgJgDgKQgDgLgIgEIgDgBIAKgLQA9hIAggdQAfgdAxgjIBUg8QAxgkAfgdQAagaAUgbIADAFIAVAqQAgBDAHBLQAFA9gMA6QgJgQgTgSQgtgrgrgDQgMgBgHAEQgHAEgDAJQgDAIADAIQACAFAJALQAbAkAJAsQAJAugMArQgGAXAAAGQABASAMAJQgdAigkAcQgBgogIgfQgMgvgkg0QgKgQgKgEQgMgFgLAGQgLAHgCANQAAAKAIASQASAsgBBHQAAAZgEAPIgFAQQgEAKgBAHQgCAJAAAHQgeAQgSAIQgsAThNAOIgyAIIgOABIgOACIgPACQgTADgLAAIgEAAQgKAAgNgCgAmzACQgHADgEAGQgGAJABAPIACATQAEATALAIQAHAFAKgCQAKgBAFgHQAFgGABgLIAAgTQgBgPgCgGQgFgPgQgEIgFAAQgFAAgFACgAmFgeQgIADgEAGQgGAJACALQADAKAJAFQAHAEAIgBQALgBAHgHQAGgGAAgIQABgJgFgHQgFgHgJgDIgIgBQgFAAgEACgAFqjWQgJAAgHAHQgHAIgBAJQAAALAGAHQAHAJAKABQAKABAJgHQAIgJAAgKQABgJgGgIQgIgKgLAAIgCAAgAGVjpQgJAPAHAQQADAGAGAFQAPALASgMQAMgIADgNQABgJgEgIQgHgQgSgBIgCAAQgQAAgJAOg");
	this.shape_5.setTransform(87.6329,70.2167);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#9D915B").s().p("Am2CjQgLgIgEgTIgCgTQgBgPAGgJQAEgGAHgDQAIgDAHABQAQAEAFAPQACAGABAPIAAATQgBALgFAGQgFAHgKABIgFAAQgHAAgFgDgAmNBgQgJgFgDgLQgCgLAGgJQAEgGAIgDQAIgDAJACQAJADAFAHQAFAHgBAJQAAAJgGAGQgHAHgLABIgCAAQgHAAgGgDgAFlhQQgKgBgHgJQgGgHAAgLQABgJAHgIQAHgHAJAAQAMgBAJALQAGAIgBAJQAAAKgIAJQgHAGgJAAIgDAAgAGYhtQgGgFgDgGQgHgQAJgPQAKgPARABQASABAHAQQAEAIgBAJQgDANgMAIQgJAGgJAAQgIAAgHgFg");
	this.shape_6.setTransform(88.0378,62.0393);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#435C16").s().p("AjKDhIgHgDIgbgIIgVgHIgXgKIgHgDQgFgSAAgKQAAgRALgWQAUgsAiggQAKgIAEgCQAOgEAKALQAIAKgBAOQgBAHgLAUQgOAYgEAVQgGAbAJAWIAGAPQAEAJAAAHIAAACIgDgBgAC1CdQABgHAEgKIAFgQQAFgPAAgZQABhHgTgrQgIgSABgKQABgNALgHQAMgGAMAFQAKAEAJAQQAkA0AMAuQAIAfABAoIgNAJQgQALgjAUIgnAXQgBgHACgJgAmTCBQgVgRgSgVQABgfAGgQQAEgLAHgNQASggAdgZQAOgNANgEQARgGAOAIQAHAFAEAHQADAIgCAIQgCAFgKALQgGAHgIAOQgJAPgEAIQgFAMgCALQgHAbACAdQACARADAIQAGAPAAAEIgBAIQgfgRgYgVgAFPAVQAAgGAHgWQAMgrgKguQgIgtgcgkQgJgLgCgFQgDgIADgIQADgJAHgEQAHgEAMABQAsADAsArQATASAKAQIgHAcQgTBHgrA9QgMASgNAPQgNgJgBgSg");
	this.shape_7.setTransform(92.2,80.6034);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#A74C30").s().p("AgdFsQgcgOg0ghIiThgQg9gpgcgYQg4gwgphAIABgMQACgfAAgNQAAgTgDgQIgCgJQgHgUgagnQgZglgGgXQgCgLADgEQADgFANgBQBRgCBPA1QA7AnA/BOQCECiAXCbIABAEIAAAAIAEAbQAGAdAPAQIgBgBgAAdFHQgLgGgFgFIgCgCQgDgFgCgFIAHgQQBAiuArhXIAphQQAuhYAbgqQAthHAxgtQAdgbAegQQAegPAdgFQAmgHAQAUQALANgBAZQgCAdgZBLQgOAogCAeQgCATADAPQADASAJAWQgUAagaAaQgfAdgxAkIhUA7QgxAkgfAdQggAdg9BHIgKAMQgHgDgKACQgKADgHAIQgKAKgHAZIgHgIg");
	this.shape_8.setTransform(82.8393,41.67);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#000000").s().p("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");
	this.shape_9.setTransform(72.0674,82.6905);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.T_head_open, new cjs.Rectangle(0,0,144.2,165.4), null);


(lib.T_head_eat = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#000000").s().p("Ai+BNQgLgDgFgJQgFgLAFgSQALgiAfgZQAbgWAmgOQA6gVA0AEQA0AEBBAgQAoAWAVASQAOAPAFAOQAGATgMANQgFAHgJACQgKABgGgFQgFgDgEgJIgIgOQgEgHgNgJQg7gqhEgGQhJgHg5AlQgXAPgJARIgIAUQgFALgHAFQgGAEgGAAIgHgBg");
	this.shape.setTransform(79.5404,78.2279);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#336D17").s().p("AiWHQQgRgBgGgPQgGgOAKgQQAFgHASgQQADgGgJgMIgLgNQgcglgUgTIgMgMQgJgPAGgYIAGgUQAEgLABgIQACgQgGgOIgEgNQgDgHAAgFQAAgLAKgIQAJgHAKABQARAEAJAVQARAngPAsQgEANAAAEQABAHAGAKIATAYIAWAZQATAYAFAJQALAVgDARQgCAOgIAKIgOAOIgIAOQgJANgNAAIgDgBgAD+FtQgMgEgDgMIgDgLQgCgEgGgFIgagVQgIgGgHgCQgEgBgKAAIgHgCQgFgBgDABQgDAAgEADIgIAEQgIAEgKgBQgLgBgGgIQgFgIgCgRIgFgvQAAgIgCgEQgEgHgMgGQgQgIgEgDQgJgJACgOQACgMANgGQANgGAXALQAeAPALAYQAEAKACAQIAEAbQAlABATAHQAJAFARALIAUAQQAWATALAQQANASgGANQgEAKgPAFIgJABQgHAAgGgDgAH/CCQgGgDgLgMQgJgLgIgCQgGgBgJADIgPAEQgKABgJgDQgKgEgCgJQgGgPAPgOQALgIATgDQAXgCAVAHQAXAHANAQQAHAJADAKQACAMgFAJQgFAIgJACIgIACQgFAAgEgDgAmilNQgLgBgFgIQgFgGgBgNIgCgVQgDgLgJgIQgIgHgMgDQgIgCgSABQgVgBgMgHQgHgFgDgIQgDgJADgHQAFgNASgCIAcABIAPAAIAPABQAlAFAbAwQALAUABAQQACAWgPAMQgHAGgKAAIgCAAg");
	this.shape_1.setTransform(72.5036,102.6575);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#6FA730").s().p("AjRJkQANghgEgRQgEgRgSgSQgQgQg6gsQgwgjgUgeQgOgUgMgdQgUgtgJgdQgNgpAAgjQABgzAcgtQAcguAugUIATgJIADgBIAJAOQAhAtAsAcQAlAXA5APQBaAWB0gHQAygDBLgLIAAACQABAMAHAIQAGAHALAHIAUAKQAcAPAeAeQAVAVAiAsQArA5ASAhQAdA3gBAvIgCAlQgBAVACAOQgzgegsgoQgVgSgKgDQgNgGgbAAQiRAAhYgwQgegQgOgTIgLgRQgFgFgFgDQgCgVgEgQQgJgggeg+QgNgagNgJQgKgGgMACQgMABgFAJQgGALAGAOQAEAHAMARQAhAsAIBEQAGAugFBPQgCAngDAWQgFAhgJAYQgVA0gvAiQgwAhg3ADgAjSC1QgJAIgBALQAAAFADAHIAFANQAFAOgBAQQgBAIgEALIgGAUQgHAYAKAPIALAMQAUATAdAlIALANQAIAMgDAGQgSAQgEAHQgLAQAGAOQAHAPAQABQAPACAKgOIAJgOIANgOQAIgKACgOQADgRgLgVQgEgJgTgYIgXgZIgSgYQgHgKAAgHQgBgEAEgNQAPgsgQgnQgJgVgRgEIgEAAQgIAAgIAGgACsFOIAHACQAKAAAFABQAGACAIAGIAbAVQAFAFADAEIACALQAEAMAMAEQAKAFAMgDQAPgFADgKQAGgNgMgSQgLgQgWgTIgVgQQgRgLgJgFQgTgHglgBIgDgbQgDgQgEgKQgLgYgdgPQgXgLgOAGQgMAGgCAMQgDAOAKAJQAEADAPAIQANAGAEAHQABAEABAIIAFAvQABARAGAIQAGAIAKABQAKABAJgEIAHgEQAEgDAEAAIACgBIAFABgAJODWQgngFgfABIgmABIgYgCIgWgCIgXABQgOAAgIgBIgPgDIgPgDQgOgCgJAGQgNgLgVgPIgugeIgBgBIAdgFIABAAQAOgDAJgDQAHgBAIgDQBCgXA0gxIAMgLIACABQAHAEAXADQAqAHAuAoQAvApAfAzQAMAUgHALQgvgKgVgEgAHjCLQAIACAJALQALAMAGADQAIAEAJgDQAKgCAEgIQAFgJgCgMQgCgKgHgJQgOgQgXgHQgVgHgWACQgUADgKAIQgPAOAFAPQADAJAKAEQAJADAKgBIAOgEQAHgCAFAAIADAAgAl9AAQgYgEgLgEQgTgJgOgZQgFgJgOgkIgKgYQgFgPgCgLQgCgPADgiQAHhAgKghQgHgVgOgWQgdgwgigaQgqgggugCQACgQAMgOQALgNAQgIQANgGATgFIAigGQAkgHAOACQAMABAbAOQA6AfAfAbQAGAJAFAFQAIAIAHACIAGAEIAEAEQgRBEgGBIQgLB6AcBZQAFATAHARQgVAIgUALIgIgEgAnTl2QALADAJAHQAIAIADALIACAVQABANAFAGQAGAIAKABQALAAAIgGQAPgMgBgWQgBgQgMgUQgagwglgFIgQgBIgPAAIgcgBQgRACgGANQgDAHADAJQAEAIAHAFQAMAHAVABIAGAAQANAAAHABgAlLnWQgIgUAGgYQACgLALgaQAYgvAFgUQAEgUgBgVQgCgPgGgXQgGgRgKgXIAuAYQAVALAGAMIADALQACAHADAEIABACQgtBLggBVQgIAWgGAWIgKgIg");
	this.shape_2.setTransform(71.8789,98.975);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#435C16").s().p("ABkDsQADgIAIgHIAQgLQATgOAPgYQAMgRANgdIABgDQAIgaACgRQACgOgDgjQgBgTgFgKIgKgQQgHgKABgIQAAgHAHgGQAGgGAIgBQAPgCAOAOIACACIAGAFIAMAHIAKAIQADACAKARQAFAJANARQAMAVAIAhQAFAdABAVQgZAegdATIgUAMIgGADQgHAGgKAGIgMAGIgJAEIgFACQgZAKgeAFIgOACIgTADIAAgDgAl8CPQgagkgMg1QAGgJAIgKQAbgfAkgLQAQgFAXgDQARgCAHACQAPADAEAMQAEALgMANQgDADgTAOQgsAfgOBDQgFAVgGAGIgBACQgLgMgKgNgAGAgJQAGgogFgmQgBgPAAgHIAAgBQgNgYgWgRQgXgRgagFIgUgEQgLgEgFgIQgIgOAMgTQAGgIAEgCIAOgEQAhgDAQABQARABAgAJQAXAHAJAFIAKAHQABAPgBAPIgDAeIgBAJIgCAOIgDAKQgGAhgMAjQgJAdgNAdQgBgHACgMgAmkjSIAGgCQAQgJAJgCQAIgCAPgCQANgBAKACQAPABAUADQANACAGADIASAKIASAGQANAFAFANQADAJgCAGQgEAMgNAEQgJAEgPAAQgrADglAOQgNAFgHAFQgJAGgKALIgWAYQgIANgFACIgCACQgBhKAMhJg");
	this.shape_3.setTransform(83.924,85.8525);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#9D915B").s().p("AGKBOQgVgKgHgKQgGgHgBgJQgCgIAEgIQAFgJALgEQAHgCAIABIAFAXQAFAXABAZIgJgFgAlHAnQgJgGgCgJQgCgHACgIQADgJAFgFQAEgDAGgBQALgCAIAFQAJAFABAJQAAABAAABQAAABAAAAQAAABABAAQAAAAAAAAQADAKgGAJQgGAJgJACIgGABQgHAAgGgEgAmJAMQgKgMABgRIAGgbIAFgRQADgJAGgFQAHgGAVgBQAMAAAGADQAGAEADAKQAGATgGAUQgFAUgOAOQgKAKgIADIgIABQgLAAgKgKgAFMAKQgJgGgDgIQgCgHACgIQADgLAGgEQAEgDAGgBQAKgDAIAGQAJAFABAKQAAABAAABQAAABABAAQAAABAAAAQAAAAABAAQACAJgGAJQgFAJgKACIgFABQgHAAgGgEg");
	this.shape_4.setTransform(86.7207,55.125);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#A1B64A").s().p("AjmGIQhRgVgwgyIACgCQAFgGAFgVQAOhDAtgfQATgOACgDQANgNgFgMQgEgMgOgDQgIgCgRACQgXADgQAFQgjAMgbAfQgJAKgGAJQgJgmgCguIgCgiIADgCQAEgCAIgNIAXgYQAKgLAIgGQAHgFANgFQAlgOArgDQAPAAAJgEQAOgDADgMQACgGgDgJQgFgNgMgFIgSgGIgTgKQgFgDgOgCQgUgDgOgBQgKgCgOABQgPACgIACQgJACgQAJIgGACQAKg2ARg1QApiBBNhwIABAGQAOBwAPBNQAVBmAfBQQALAcALAVIATAlQAUgLAWgFIACAAQAUgFAagBIAHAAQAWAAARABQAWADAVAHQAMgWAPgVQARgYAfgkIDPj/IADgCIAQAPQBFBCAXBbQgIgCgGADQgMADgFAJQgDAIACAJQABAIAFAHQAIALAUAKIAKAEIAAAPIgKgHQgJgFgXgHQgggJgQgBQgRgBghADIgOAEQgEACgGAIQgMATAIAOQAFAIAMAEIATAEQAaAFAXAQQAXARAMAYIAAABQAAAHACAPQAFAmgHAoQgCANABAHIgDAJQgeBEgnAsQAAgVgGgdQgIghgMgVQgNgRgFgJQgKgSgDgCIgKgIIgLgHIgGgFIgDgCQgOgOgPACQgIABgGAGQgGAGgBAHQAAAIAGAKIAKARQAFAKACATQACAjgBAOQgCARgIAaIgCADQgNAdgLARQgQAYgSAOIgRALQgIAHgCAIIgBADIg2ADQgvAGgxADQgdACgaAAQhIAAg1gOgAkkikQgGACgEADQgFAEgDAKQgCAJACAGQADAKAIAGQAJAFAKgCQAJgCAGgJQAGgKgCgJQgBAAAAAAQAAgBgBAAQAAgBAAAAQAAgBAAgBQgBgLgJgEQgGgEgHAAIgGAAgAlijlQgGAEgDAKIgEARIgHAbQgBASAKALQANAOAQgFQAJgCAJgKQAPgQAEgTQAHgVgHgSQgDgKgGgEQgGgDgMAAQgVAAgHAHgAFvjBQgGACgEACQgGAFgDAKQgCAIACAHQADAKAJAGQAJAFAKgCQAJgDAFgJQAHgJgDgJQAAAAgBAAQAAgBAAAAQgBgBAAAAQAAgBAAgBQgBgLgIgFQgGgDgHAAIgGAAg");
	this.shape_5.setTransform(83.9,70.5692);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#A74C30").s().p("AjPE+QgKgVgLgdQgfhRgVhmQgPhMgOhwIgBgGIANgSQATgZAFgJQAHgLAEgLQADgIACgIQACgNgCgTIgDghQgDgpAVgSQATgRAfAIQAZAGAXAUQAzAtAcA9QAHARAGAIQgWAugVA+QgbBOgNBAQgUBmAGBpIADAlIACATIgBAAQgWAFgUALIgUgkgAg0FOQgQgCgXAAIgDgiQgIhEAEg2QAEg1AUhRQAShHASgyQAYhBAegxQAkg5AvgnQA0grA6gQQAggJAUAHQAOAGAUAVQANAPACAJQADALgGAVIgvCaQgGAVgBALIgBADQgBAPAEANQAEANAMANIAGAHIgDADIjPD9QgfAlgSAZQgOAUgLAWQgWgHgXgCg");
	this.shape_6.setTransform(87.4474,40.942);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#000000").s().p("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");
	this.shape_7.setTransform(71.5858,88.976);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.T_head_eat, new cjs.Rectangle(0,0,143.2,178), null);


(lib.T_body = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#947469").s().p("AgCCVQgKgFgIgPQgKgQAAgMQABgIAEgLQAFgLAEgDQAIgIAOACQAIACAPAGQAPAEAHAGQAIAHACALQADALgGAIQgDAEgIAGIgJAKQgFAHgFADQgIAGgIAAQgHAAgHgEgAAMAqIgTgGQgUgHgGgGQgFgHgDgQIgThkQgDgXAEgLQAEgJAHgFQAIgFAIACQAKACAJAMQAOAVAIAXIAGAWIAIAWIAMAXQAIANADAJQAEAMgDANQgEAOgLAFQgFADgHAAIgIgBg");
	this.shape.setTransform(25.1518,102.3135);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#603526").s().p("AjtB5QhwgKg9gMQg/gNhegfIgLgDIgDgTQAAgNgBgHIgCgMIACgLQADgKAEgfQACgUAEgUQAGgmAKgWIAHgRIABgFQHfBjJuAXQAQAAAKgCIABADQABAPAAASQACA2gFAdIgJAiQgFAUgCANIgEAjIgBAGQlHgLnWgqg");
	this.shape_1.setTransform(63.6,67.55);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#6D4639").s().p("AgdEaQjAgIi0g5IgEgBQAAgKgFgOQgOg2gGhSQgFhagFguIgMheQgIg5gCglIgBgPQAxAMA2AJQBPANCQANQCfAOBvAHQBxAIDaAMIgDATIgCAeIgDAPQgBAJAAAFIABAFIgDATIgSBdIgaBwIggCGQgMgBgTAEQiaAjidAAIhAgCgAl7gCQgEADgFALQgEAKgBAIQAAAMAKAQQAIAPAKAFQARAJAOgLQAFgDAFgGIAJgKQAIgHADgEQAGgIgDgLQgCgLgIgGQgHgGgPgEQgPgGgIgBIgGgBQgKAAgHAGgAmbjaQgHAFgEAIQgEAMADAWIATBmQADAQAFAGQAGAHAUAGIAUAGQAMACAIgEQALgFAEgNQADgNgEgNQgDgJgIgOIgMgWIgIgWIgGgXQgIgXgPgVQgJgMgKgCIgEAAQgGAAgGAEg");
	this.shape_2.setTransform(61.475,109.3723);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#474B1F").s().p("AhSCMQgpAAgagKIAFgOQAHgVAKgrIACgLQAFABAGAEIANAIQAPAHAfABQAlAAAYgCQAigDAJAOQAIAMgJAPQgFALgQAJQglAXhCAAIgGgBgAAVAvQgQgDgOgGQgRgGgDgKQgDgIAEgJQAFgHAIgEQAHgEAJgBIASgCQAXgCAhgIIA3gOQAMgCAIABQAAAUgCASIgCASIgHADQgNALgHAEQgQAKgiACIgZABQgOAAgJgCgAgEhCIgWgDQgQgBgIgCQgOgDgFgKQgEgJAFgLQAEgKAKgFQANgIAbABIAeAAQARAAAMgFQAVgIAGAAQARAAAIAQQAGAQgKANQgFAFgPAIQgkAQgUABIgEABIgRgCg");
	this.shape_3.setTransform(75.6125,33.102);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#3F6A22").s().p("AibD6QASgqAJgYQAZALAqAAQBFABAogYQAPgJAGgKQAJgPgIgNQgKgOghADQgaADgjAAQgfgBgPgIIgNgIQgGgDgFgCQAEgSAAgLQgBgaACgNQAEgVAAgKIgDgXIgOhOIgBgEQgFgcgOgFQgHgCgIADQgHADgEAGQgIALABASIACAIIgCgCQgFgHABgIQAAgLAOgPQAigmBQg0QAyghAggJQAZgHAaACQAaABAXAKIAEACQgGABgEAEQgLAIABARQAAAIAEAOIACAFQAnB9AABfQgIAAgLACIg3AOQghAIgXACIgSABQgKACgHADQgIAEgEAIQgFAJADAIQAEAKAPAHQAQAGAPADQAQACAggCQAigCAQgJQAHgEAOgLIAGgDIgDAWIgIA7QgEAggFAWQgIAegOAdIgEAJQiKgKiJgQgAgihCQgJAFgFALQgFAKAFAJQAFAKAOAEQAHACAQABIAWADQANABAJAAQATgCAkgQQAQgIAEgFQALgNgHgQQgHgPgSAAQgGAAgUAIQgNAEgRABIgeAAIgGAAQgWAAgMAGg");
	this.shape_4.setTransform(73.5602,27.6528);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#000000").s().p("AgwLDQjLgIi/g9QgQgFgKgHQgNgMAEgOIAAgBIgDgKQgHgZgGgoQgHgugGhSQgGhcgFglIgLhTQgHgygCghQgBgQADgKQghgJgegMQgNgFgHgFQgHgDgDgGQgCgDgBgOIgBgHIgCgNQgEgXACgUIAIg+IAKg3QAIglAMgeQAFgOAHgFQAGgFAJACIACAAQAEgJAJgEQANgGAeAFQDGAmDIAaIADgGQAJgNADgHIAHgUIALgYIAJgaQAMgqAEgVQAIgogCgwQgCgrgHgcIgFgVIgCgIQgBgSAIgLQAEgGAHgDQAIgDAHACQAOAFAFAcIABAEIAOBOIACAXQAAALgDAVQgCANABAaQgBALgDASIgDAMQgKArgHAVIgEANQgJAYgSAqQCIAQCLAKIAEgJQAOgdAIgeQAFgWAEggIAIg7IADgWIACgTQACgTAAgUQAAhhgnh8IgCgFQgEgOAAgIQgBgRALgIQAEgEAGgBIAEAAQAJAAAGAFQAHAGAFAQQA3CygOCBIgQB3QgJAvgQArQCPAKCRADQAQAAAMAEIAEACIADgBQAMgCAIAHQAHAGAEALQAFAQgBAeQgBASACAIIAEARQACAIgDAPIgUBlIgDAYIgBAcQgBAJgEAGQgBAFgDAFQgGAIgIAEQgLAFgZgBIg9gEIgBALIgEAeIAAADQABAXgIArIgPBQIgHAkIgKAmQgaBmgSBkQgFATgFAGQgJALgOgDQgKgBgGgHIgGABQilAmipAAIg/gBgAnlBnQACAlAIA5IAMBeQAFAuAFBbQAGBSAOA2QAFAOAAAKIAEABQC0A5DAAIQC+AJC5gqQATgEAMABIAgiGIAahxIAShdIADgTIgBgFQAAgFABgJIADgPIACgeIADgTQjagMhxgIQhugHiggOQiQgNhPgNQg2gJgxgMIABAPgAokjWIgHARQgJAWgHAlQgEAVgCAUQgDAfgDAKIgDAMIACAMQACAHgBANIADARIAMAEQBeAfA+ANQA9AMBwAKQHWAqFIALIAAgGIAEgjQACgNAFgUIAJgiQAGgcgCg3QAAgSgCgPIgBgDQgKACgQAAQpugYnfhiIgBAFg");
	this.shape_5.setTransform(63.7775,72.1675);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.T_body, new cjs.Rectangle(0,0,127.6,143), null);


// stage content:
(lib.eat = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = false; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	this.actionFrames = [0,1];
	// timeline functions:
	this.frame_0 = function() {
		
	}
	this.frame_1 = function() {
		var _this = this;
		/*
		Stop a Movie Clip/Video
		Stops the specified movie clip or video.
		*/
		_this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(1).call(this.frame_1).wait(1));

	// eat
	this.instance = new lib.T_head_eat();
	this.instance.setTransform(194.95,175.7,1,1,-14.9983,0,0,71.5,89);

	this.T_body = new lib.T_body();
	this.T_body.name = "T_body";
	this.T_body.setTransform(219.5,192.15,1,1,-3.9822,0,0,91.8,7.6);

	this.instance_1 = new lib.T_head_open();
	this.instance_1.setTransform(186.6,171.25,1,1,0,0,0,72,82.7);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.T_body},{t:this.instance}]}).to({state:[{t:this.T_body},{t:this.instance_1}]},1).wait(1));

	this._renderFirstFrame();

}).prototype = p = new lib.AnMovieClip();
p.nominalBounds = new cjs.Rectangle(302.9,271.2,-15.699999999999989,62.400000000000034);
// library properties:
lib.properties = {
	id: 'C0E89B62C85A0546B916A91870B97E05',
	width: 400,
	height: 400,
	fps: 24,
	color: "#FFFFFF",
	opacity: 0.00,
	manifest: [],
	preloads: []
};



// bootstrap callback support:

(lib.Stage = function(canvas) {
	createjs.Stage.call(this, canvas);
}).prototype = p = new createjs.Stage();

p.setAutoPlay = function(autoPlay) {
	this.tickEnabled = autoPlay;
}
p.play = function() { this.tickEnabled = true; this.getChildAt(0).gotoAndPlay(this.getTimelinePosition()) }
p.stop = function(ms) { if(ms) this.seek(ms); this.tickEnabled = false; }
p.seek = function(ms) { this.tickEnabled = true; this.getChildAt(0).gotoAndStop(lib.properties.fps * ms / 1000); }
p.getDuration = function() { return this.getChildAt(0).totalFrames / lib.properties.fps * 1000; }

p.getTimelinePosition = function() { return this.getChildAt(0).currentFrame / lib.properties.fps * 1000; }

an.bootcompsLoaded = an.bootcompsLoaded || [];
if(!an.bootstrapListeners) {
	an.bootstrapListeners=[];
}

an.bootstrapCallback=function(fnCallback) {
	an.bootstrapListeners.push(fnCallback);
	if(an.bootcompsLoaded.length > 0) {
		for(var i=0; i<an.bootcompsLoaded.length; ++i) {
			fnCallback(an.bootcompsLoaded[i]);
		}
	}
};

an.compositions = an.compositions || {};
an.compositions['C0E89B62C85A0546B916A91870B97E05'] = {
	getStage: function() { return exportRoot.stage; },
	getLibrary: function() { return lib; },
	getSpriteSheet: function() { return ss; },
	getImages: function() { return img; }
};

an.compositionLoaded = function(id) {
	an.bootcompsLoaded.push(id);
	for(var j=0; j<an.bootstrapListeners.length; j++) {
		an.bootstrapListeners[j](id);
	}
}

an.getComposition = function(id) {
	return an.compositions[id];
}


an.makeResponsive = function(isResp, respDim, isScale, scaleType, domContainers) {		
	var lastW, lastH, lastS=1;		
	window.addEventListener('resize', resizeCanvas);		
	resizeCanvas();		
	function resizeCanvas() {			
		var w = lib.properties.width, h = lib.properties.height;			
		var iw = window.innerWidth, ih=window.innerHeight;			
		var pRatio = window.devicePixelRatio || 1, xRatio=iw/w, yRatio=ih/h, sRatio=1;			
		if(isResp) {                
			if((respDim=='width'&&lastW==iw) || (respDim=='height'&&lastH==ih)) {                    
				sRatio = lastS;                
			}				
			else if(!isScale) {					
				if(iw<w || ih<h)						
					sRatio = Math.min(xRatio, yRatio);				
			}				
			else if(scaleType==1) {					
				sRatio = Math.min(xRatio, yRatio);				
			}				
			else if(scaleType==2) {					
				sRatio = Math.max(xRatio, yRatio);				
			}			
		}
		domContainers[0].width = w * pRatio * sRatio;			
		domContainers[0].height = h * pRatio * sRatio;
		domContainers.forEach(function(container) {				
			container.style.width = w * sRatio + 'px';				
			container.style.height = h * sRatio + 'px';			
		});
		stage.scaleX = pRatio*sRatio;			
		stage.scaleY = pRatio*sRatio;
		lastW = iw; lastH = ih; lastS = sRatio;            
		stage.tickOnUpdate = false;            
		stage.update();            
		stage.tickOnUpdate = true;		
	}
}
an.handleSoundStreamOnTick = function(event) {
	if(!event.paused){
		var stageChild = stage.getChildAt(0);
		if(!stageChild.paused || stageChild.ignorePause){
			stageChild.syncStreamSounds();
		}
	}
}


})(createjs = createjs||{}, AdobeAn = AdobeAn||{});
var createjs, AdobeAn;