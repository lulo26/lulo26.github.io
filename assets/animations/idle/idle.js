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


(lib.T_head2 = function(mode,startPosition,loop,reversed) {
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
	this.shape.graphics.f("#A74C30").s().p("AjZEuIgggaQgLgIgKgEQgJgEgHgCQgNgDgTAAIghABQgpAAgRgXQgPgUAKgeQAIgZAWgWQAwgvA/gXQASgGAIgFQAsAZA8AaQBNAgBAASQBiAcBpACIAmAAQA0gCA0gIIA4gMIAIgCQACANAKAJQgGAFgGAEQgJAFgTADIgJACIgTADQgkAGgfALIgzAXQgWAJgdAIQhTAZhmANQhOAKhxAFIgGABIgRgPgABjB+Qg0gHhOgaQhGgXgxgWQg/gdgvghQg2gogjgyQgng3gMg8QgHggAJgTQAHgOAXgSQAPgMAKgCQALgCAUAIICWA6QAVAHAKADIADAAQAQADANgDQANgDAOgLIAHgFIADACIDtDjQAiAgAYATQBDA3BSAcIAFACIgEAGQgHAHgLADQgHACgPABIgnAEQgzAFggAAIgeABQgyAAgqgHg");
	this.shape.setTransform(155.3539,48.155);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#9D915B").s().p("AgwGOQgFAAgWgIIgQgGQgKgEgEgGQgGgIABgUQABgNAEgFQAEgGAKgCQATgFAUAIQATAGAPAQQAJAKACAIQADARgOALQgKAIgNAAIgHgBgAgRFRQgKgEgEgGQgDgEgBgGQgBgLAGgHQAFgJALAAQABAAABAAQAAAAABAAQAAgBABAAQAAAAAAAAQAJgCAIAHQAJAGABAJQACAKgGAJQgHAIgIACIgGAAIgJgBgAAClCQgJgEgEgGQgDgEgBgGQgBgLAGgHQAFgJAKAAQABAAABAAQAAAAABAAQAAgBABAAQAAAAAAAAQAJgCAJAHQAJAGABAJQACAKgGAJQgHAIgJACIgGAAIgJgBgAAzloQgJgFgDgLQgCgIACgHIAXgEQAYgDAZABIgFAJQgMAUgLAGQgHAFgJABIgDAAQgHAAgGgEg");
	this.shape_1.setTransform(162.8179,51.6975);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#A1B64A").s().p("ABnG1IghgBIgCgDQgCgFgMgJQgFgFgSgTQgKgLgFgIQgEgIgEgNQgLgmAAgrQABgPgCgJQgEgOgLgFQgGgCgJACQgOAEgGANIgGARIgMASQgEAFgDANQgFAUgCAOQgCAKAAANQAAAQACAHQACAKAHARIACAFQg1gNg0gVQh9gyhqhWIAGgBQBxgFBNgKQBngNBTgZQAdgIAWgJIAzgXQAfgLAkgGIASgDIAKgCQASgDAKgFQAGgEAFgFIAGAEQAPAKAMgJQALgIgBgZQgCgdgNgcQgHgMgJgHQgMgIgKADQgIADgGANIgHANIgFgCQhTgchDg2QgWgTgighIjvjjIgCgCIAQgPQBHg/BcgRQgCAHACAIQADALAJAFQAHAFAJgBQAJgBAHgFQALgGAMgUIAFgJIAOAAIgHAKQgGAJgIAWQgLAfgDAQQgCAQABAiIACAOQACAFAIAGQASANAOgHQAHgEAFgLIAGgUQAHgaASgVQATgVAZgLIAAAAQAHABAQAAQAmgCAnAJQANADAIgBIAIAFQBBAjAqApQgVgBgeAEQgiAFgVALQgSALgJAFQgTAIgCADQgEADgFAHIgHALIgGAFIgDACQgOANABAPQAAAIAFAHQAGAHAHABQAIABALgGIARgJQALgEASAAQAkAAANADQARADAZAKIAEACQAbAPARAMQAWASAMAUIAKAQQAHAJAIADIACABIgBA2QADAvgBAxQgBBsgYBHQgbBPg2AsIgBgBQgGgHgVgGQhBgTgcguQgMgUgDgDQgMgNgNADQgMADgEAOQgDAIABARQABAWAFARQAJAkAcAeQAKAJAJAHQgiAFgoAAIgMAAgAjkEZQgKACgEAGQgEAFgBANQgBAUAGAIQAEAGAKAEIAQAGQAWAIAFAAQARADANgKQAOgLgDgRQgCgIgJgKQgPgQgTgGQgMgFgMAAQgIAAgHACgAiTD6QAAAAgBAAQAAABAAAAQgBAAgBAAQAAAAgBAAQgLAAgFAJQgGAHABALQABAGADAEQAEAGAKAEQAIACAHgBQAJgCAHgIQAGgJgCgKQgBgJgJgGQgHgGgIAAIgDABgAh/mZQAAAAgBAAQAAABAAAAQgBAAgBAAQAAAAgBAAQgLAAgFAJQgGAHABALQABAGADAEQAEAGAKAEQAIACAHgBQAJgCAHgIQAGgJgCgKQgBgJgJgGQgHgGgIAAIgDABg");
	this.shape_2.setTransform(176.5292,55.5817);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#435C16").s().p("AjsGeIgDgGQgGgRgCgKQgCgHAAgPQAAgNACgLQACgOAFgUQADgNADgFIAMgSIAHgRQAGgMANgFQAKgCAGACQALAFAEAOQACAKgBAOQAAArAMAmQADANAFAIQAFAJAKALQARASAGAFQAMAJACAGIACACQhKgEhIgSgAAJGgQgbgegJgjQgFgSgBgWQgBgRACgHQAFgOAMgDQANgEAKANQADADANAUQAbAuBCATQAVAGAFAHIACABQgNALgOAIQgmAXg1AJQgJgGgJgKgAD4hHQgIgEgHgJIgKgQQgMgUgXgSQgQgMgcgPIgDgCQgagKgQgDQgNgDgkAAQgSAAgLAFIgSAJQgJAFgIgBQgIgBgFgHQgGgHAAgHQAAgQAOgMIADgDIAGgFIAHgLQADgGAFgEQACgDATgIQAJgFASgLQAVgKAhgGQAfgEAVABQAbAcASAfIAKAUIACAGQAGAHAFALIAFAMIADAJIACAGQAHAZAEAfIABAOIABAUIgCgBgAjFkRQgHgGgCgFIgCgOQgBghACgRQADgQAKgfQAJgWAFgJIAIgKIAeADIAdAFIAJACIAOADIAKADQAiAJAiAOQAbALAdAPQgIABgNgDQgmgJgmACQgQAAgHgBIgBAAQgYALgTAWQgTAUgGAaIgHAUQgEAMgIADQgFADgGAAQgKAAgMgJg");
	this.shape_3.setTransform(192.65,55.55);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#336D17").s().p("AnPIKQgMgHgBgRIADgdIABgPQABgJABgGQAIgkAygXQAVgKAQAAQAWAAALAQQAFAJgBAKQgCALgIAFQgHAEgNAAIgVABQgLACgIAIQgIAIgEALQgCAIgBASQgCAVgIALQgGAHgIADIgHABQgFAAgEgCgAEIEBIgTgHQgLgFgIgBQgPgDgOAEIgNAEQgIACgFAAQgLgBgHgKQgHgKACgKQAFgRAXgHQAogOAqASQANAFADAAQAHAAALgGIAZgQIAcgVQAZgRAJgEQAVgJARAEQAOADAJAJIANAOIAOAKQAMALgCAPQgDAQgPAFQgOAFgQgLQgGgFgPgTQgGgEgMAIIgOAKQgnAZgUATIgNAKQgIAEgKAAQgKAAgMgEgADEgZQgMgDgFgNQgFgOANgWQARgdAZgJQAKgDAQgBIAbgCQADglAJgSQAFgJANgQIARgTQAVgVARgJQATgMANAHQAJAFAEAPQACANgFAJQgFAMgMACQgIABgEABQgEACgFAFIgYAZQgGAIgDAGIgCAOIgCAHQgCAEABADQAAAEACAEIAEAIQAEAJgCAKQgCAKgIAFQgJAFgRAAIgvACQgIAAgEABQgIADgHANQgIAPgEADQgHAHgJAAIgHgBgAB5mWQgIgLgBgUQgBgXAJgUQAJgWARgMQAKgHAKgBQAMgCAIAGQAIAFACAKQACAJgFAIQgDAFgNAKQgMAJgCAHQgCAGACAJIADAPQABAKgEAJQgFAKgJACIgHABQgLAAgKgNg");
	this.shape_4.setTransform(206.4708,67.9371);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#6FA730").s().p("AnqJqQgMgMgGgRQgGgNgDgTIgEgiQgFglADgOQADgMAQgZQAjg4AdgdQAJgFAGgFQAIgHADgHIAFgFIADgFQBEAWBHAMQB4AUBcgVQASgEASgGQAGAWALAVIgEAHQgHAYgGAKQgKATgZAMQgKAEglAMIgZAIQgOAEgLABQgRABghgGQg/gMgiAIQgVAFgYANQgxAZgcAgQgjAngGAuQgQgDgNgNgAl7F0QgyAXgIAlQgBAFgBAKIgBAPIgDAcQABASAMAGQAHAEAJgDQAIgDAGgGQAIgMACgUQABgSACgJQAEgLAIgIQAIgIALgCIAVAAQANAAAHgFQAIgFACgKQABgLgFgIQgLgQgWAAIgCAAQgPAAgUAJgAC/HHQgzgFgqgfQgsgfgRgvIgHgUIgBgDIAOgIQAwgeAfgpQAagjATg4QAdhZAChzQAAgygGhMIADAAQAMAAAJgHQAHgFAHgKIAMgTQARgbAggcQAWgTAvgfQA8gnAjgPQA4gZAwAEIAkAFQAVADAOgBQgiAwgrApQgTAUgFAJQgGANgCAcQgLCPg3BVQgRAbgVANIgRALQgGAEgDAFQgWABgQADQggAGhAAZQgbALgKANQgGAJAAAMQABAMAIAGQAKAHAPgFQAIgDARgLQAugeBFgDQAvgDBOALQAnAFAVAFQAgAHAYAMQAyAYAeAyQAeAxgBA4Ih6g5QgggPgSADQgRACgTARQgSAPgvA3QgnAtgfASQgVAMgfAKQgtAQgeAHQgfAHgcAAIgSAAgAEDDsQAIACALAEIATAIQAYAIAQgIIANgLQAUgSAngaIAOgKQAMgHAGADQAPATAGAFQAQAMAOgFQAPgFADgRQACgOgMgMIgOgJIgNgOQgJgJgOgDQgRgEgVAJQgJAEgZARIgcAUIgZARQgLAGgHAAQgDAAgNgFQgqgSgoANQgXAIgFAQQgCALAHAJQAHAKALABQAFABAIgDIANgDQAJgDAJAAIALABgAGQkCQgRAKgVAVIgRATQgNAQgFAJQgJASgDAlIgbABQgQABgKAEQgZAJgRAcQgNAWAFAPQAFAMAMADQANAEAKgJQAEgEAIgPQAHgMAIgDQAEgCAIAAIAvgBQARAAAJgFQAIgGACgKQACgKgEgJIgEgHQgCgFAAgDQgBgDACgEIACgHIACgPQADgGAGgHIAYgZQAFgFAEgCQAEgCAIAAQAMgDAFgLQAFgKgCgNQgEgPgJgEQgFgDgGAAQgJAAgMAHgAoEEwQgMgEgYgNQgugbgTgGQgUgGgVAAQgPAAgXAEQgSAFgXAIIAbgrQANgVAMgFIALgCQAIgBAEgDIACgBQBHAzBSAlIAsATIgJAJQgKADgKAAQgMAAgMgEgAC5kJIAAgBQgCgOgDgKQAAgHgDgIQgShDgsg4IgKgNIABgCQAFgHAEgWQAKgpArgrQAtgsA1gbQAVgKAKAHQgNAugFAWQgJAlgBAfIgBAnIgEAXIgEAXIgBAWIgCAWIgFAPIgEAOQgDAOAGAJQgMANgQAUIgjAsIAAABIgDgegADHoSQgKACgKAGQgRAMgJAXQgJAUABAXQABATAIAMQAMAQAQgFQAJgCAFgJQAEgJgBgKIgDgPQgCgJACgGQACgIAMgIQANgKADgGQAFgHgCgKQgCgJgIgFQgGgFgJAAIgFAAg");
	this.shape_5.setTransform(203.1536,68.6938);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#000000").s().p("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");
	this.shape_6.setTransform(195.1507,69.0219);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.T_head2, new cjs.Rectangle(108.2,0,173.90000000000003,138.1), null);


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
(lib.main = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	this.actionFrames = [0,7];
	// timeline functions:
	this.frame_0 = function() {
		var _this = this;
		/*
		Play a Movie Clip/Video or the current timeline.
		Plays the specified movie clip or video.
		*/
		_this.play();
	}
	this.frame_7 = function() {
		
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(7).call(this.frame_7).wait(1));

	// idle
	this.T_head = new lib.T_head2();
	this.T_head.name = "T_head";
	this.T_head.setTransform(198.6,157.05,1,1,0.2815,0,0,184.1,58.1);

	this.T_body = new lib.T_body();
	this.T_body.name = "T_body";
	this.T_body.setTransform(219.55,192.15,1,1,-3.982,0,0,91.8,7.6);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.T_body},{t:this.T_head,p:{regX:184.1,regY:58.1,rotation:0.2815,x:198.6,y:157.05,scaleX:1,scaleY:1}}]}).to({state:[{t:this.T_body},{t:this.T_head,p:{regX:206.3,regY:109.1,rotation:-0.9836,x:220.55,y:208.15,scaleX:1,scaleY:1}}]},1).to({state:[{t:this.T_body},{t:this.T_head,p:{regX:206.5,regY:109.2,rotation:-2.6871,x:220.75,y:208.2,scaleX:0.9999,scaleY:0.9839}}]},2).to({state:[{t:this.T_body},{t:this.T_head,p:{regX:206.3,regY:109.1,rotation:-0.9836,x:220.55,y:208.15,scaleX:1,scaleY:1}}]},3).to({state:[{t:this.T_body},{t:this.T_head,p:{regX:184.1,regY:58.1,rotation:0.2815,x:198.6,y:157.05,scaleX:1,scaleY:1}}]},1).wait(1));

	this._renderFirstFrame();

}).prototype = p = new lib.AnMovieClip();
p.nominalBounds = new cjs.Rectangle(317.5,297.4,-19.899999999999977,36.200000000000045);
// library properties:
lib.properties = {
	id: 'EE2BA846406B044FADEDD0BD75DFB390',
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
an.compositions['EE2BA846406B044FADEDD0BD75DFB390'] = {
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